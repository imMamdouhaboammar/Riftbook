import test from 'node:test';
import assert from 'node:assert/strict';

import {
  assertGitBase,
  buildDelta,
  parseCli,
  readGitFile,
  readWorkingFile,
  renderDelta,
  renderDeltaJson
} from './currentness-delta.mjs';

const NOW = new Date('2026-08-25T12:00:00Z');

function card(date = '2026-08-25') {
  return `# Card\n\n- **Last verified**: ${date}\n- **Verification source**: [Official docs](https://example.com/docs)\n`;
}

test('classifies new, refreshed, regressed, unchanged, changed, and removed cards', () => {
  const entries = [
    { file: 'tools/new.md', beforeText: null, afterText: card() },
    { file: 'tools/refreshed.md', beforeText: card('2026-01-01'), afterText: card() },
    { file: 'tools/regressed.md', beforeText: card(), afterText: '# Card\n' },
    { file: 'tools/unchanged.md', beforeText: card(), afterText: card('2026-08-24') },
    { file: 'tools/changed.md', beforeText: card('2026-01-01'), afterText: '# Card\n' },
    { file: 'tools/removed.md', beforeText: card(), afterText: null }
  ];

  const delta = buildDelta(entries, { now: NOW, maxAgeDays: 120 });
  assert.deepEqual(delta.summary, {
    total: 6,
    new: 1,
    refreshed: 1,
    regressed: 1,
    unchanged: 1,
    changed: 1,
    removed: 1
  });
  assert.deepEqual(delta.items.map(({ file, before, after, change }) => ({ file, before, after, change })), [
    { file: 'tools/changed.md', before: 'stale', after: 'missing', change: 'changed' },
    { file: 'tools/new.md', before: 'absent', after: 'fresh', change: 'new' },
    { file: 'tools/refreshed.md', before: 'stale', after: 'fresh', change: 'refreshed' },
    { file: 'tools/regressed.md', before: 'fresh', after: 'missing', change: 'regressed' },
    { file: 'tools/removed.md', before: 'fresh', after: 'absent', change: 'removed' },
    { file: 'tools/unchanged.md', before: 'fresh', after: 'fresh', change: 'unchanged' }
  ]);
});

test('renders human and machine-readable reviewer evidence', () => {
  const entries = [{ file: 'tools/example.md', beforeText: card('2026-01-01'), afterText: card() }];
  const options = { now: NOW, maxAgeDays: 120 };

  const text = renderDelta(entries, options);
  assert.match(text, /Currentness delta/);
  assert.match(text, /refreshed: 1/);
  assert.match(text, /stale -> fresh \(refreshed\)/);

  const json = JSON.parse(renderDeltaJson(entries, options));
  assert.equal(json.schemaVersion, 1);
  assert.equal(json.summary.refreshed, 1);
  assert.deepEqual(json.items[0], {
    file: 'tools/example.md',
    before: 'stale',
    after: 'fresh',
    change: 'refreshed'
  });
});

test('renders an explicit empty delta', () => {
  const text = renderDelta([], { now: NOW, maxAgeDays: 120 });
  assert.match(text, /changed cards: 0/);
  assert.match(text, /No time-sensitive cards changed\./);
});

test('requires a base revision and validates CLI options', () => {
  assert.deepEqual(parseCli(['--base=abc123', '--max-age-days=90', '--format=json', 'tools/a.md']), {
    base: 'abc123',
    maxAgeDays: 90,
    format: 'json',
    files: ['tools/a.md']
  });
  assert.throws(() => parseCli([]), /provide --base/);
  assert.throws(() => parseCli(['--base=abc', '--format=yaml']), /text or json/);
  assert.throws(() => parseCli(['--base=abc', '--max-age-days=0']), /positive integer/);
});

test('rejects an invalid base revision before classifying files as new', () => {
  const failingExec = () => {
    throw new Error('unknown revision');
  };
  assert.throws(() => assertGitBase('missing-base', failingExec), /invalid git base revision: missing-base/);
});

test('validates the base revision without invoking a shell', () => {
  let received;
  const fakeExec = (command, args, options) => {
    received = { command, args, options };
    return 'abc123\n';
  };

  assertGitBase('abc123', fakeExec);
  assert.equal(received.command, 'git');
  assert.deepEqual(received.args, ['rev-parse', '--verify', '--quiet', 'abc123^{commit}']);
  assert.equal(received.options.encoding, 'utf8');
});

test('treats a file missing from a valid base revision as absent', () => {
  const failingExec = () => {
    throw new Error('missing file');
  };
  assert.equal(readGitFile('base', 'tools/new.md', failingExec), null);
});

test('reads base content through git show without invoking a shell', () => {
  let received;
  const fakeExec = (command, args, options) => {
    received = { command, args, options };
    return card();
  };

  const text = readGitFile('abc123', 'tools/example.md', fakeExec);
  assert.equal(text, card());
  assert.equal(received.command, 'git');
  assert.deepEqual(received.args, ['show', 'abc123:tools/example.md']);
  assert.equal(received.options.encoding, 'utf8');
});

test('treats a deleted working-tree card as absent', async () => {
  const missingRead = async () => {
    const error = new Error('missing');
    error.code = 'ENOENT';
    throw error;
  };
  assert.equal(await readWorkingFile('tools/removed.md', missingRead), null);
});

test('does not hide unexpected working-tree read failures', async () => {
  const deniedRead = async () => {
    const error = new Error('denied');
    error.code = 'EACCES';
    throw error;
  };
  await assert.rejects(() => readWorkingFile('tools/private.md', deniedRead), /denied/);
});
