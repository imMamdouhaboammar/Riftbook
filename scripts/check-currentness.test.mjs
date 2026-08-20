import test from 'node:test';
import assert from 'node:assert/strict';

import * as currentness from './check-currentness.mjs';

const { inspectCurrentness, parseArgs } = currentness;
const NOW = new Date('2026-08-18T12:00:00Z');

function card({ date = '2026-08-18', source = '[Official docs](https://example.com/docs)' } = {}) {
  return `# Tool\n\n## Metadata\n\n- **Last verified**: ${date}\n- **Verification source**: ${source}\n`;
}

test('accepts fresh metadata with an HTTPS source', () => {
  assert.deepEqual(inspectCurrentness(card(), { now: NOW, maxAgeDays: 120 }), []);
});

test('rejects missing freshness metadata', () => {
  const problems = inspectCurrentness('# Tool\n', { now: NOW });
  assert.equal(problems.length, 2);
  assert.match(problems[0], /Last verified/);
  assert.match(problems[1], /Verification source/);
});

test('rejects invalid and future dates', () => {
  assert.match(inspectCurrentness(card({ date: '2026-02-30' }), { now: NOW })[0], /invalid verification date/);
  assert.match(inspectCurrentness(card({ date: '2026-08-19' }), { now: NOW })[0], /future/);
});

test('rejects stale verification', () => {
  const problems = inspectCurrentness(card({ date: '2026-04-01' }), { now: NOW, maxAgeDays: 90 });
  assert.equal(problems.length, 1);
  assert.match(problems[0], /maximum is 90/);
});

test('requires HTTPS and rejects tracking parameters', () => {
  assert.match(
    inspectCurrentness(card({ source: 'http://example.com/docs' }), { now: NOW })[0],
    /HTTPS primary-source URL/
  );
  assert.match(
    inspectCurrentness(card({ source: 'https://example.com/docs?utm_source=rss' }), { now: NOW })[0],
    /tracking parameters/
  );
});

test('parses a custom age budget and file list', () => {
  assert.deepEqual(parseArgs(['--max-age-days=45', 'tools/a.md', 'skills/b.md']), {
    maxAgeDays: 45,
    files: ['tools/a.md', 'skills/b.md']
  });
});

test('rejects invalid arguments and empty file lists', () => {
  assert.throws(() => parseArgs([]), /at least one Markdown file/);
  assert.throws(() => parseArgs(['--max-age-days=0', 'tools/a.md']), /positive integer/);
});

test('builds a reviewer-friendly inventory with status counts', () => {
  assert.equal(typeof currentness.buildInventory, 'function');

  const inventory = currentness.buildInventory(
    [
      { file: 'tools/fresh.md', text: card({ date: '2026-08-18' }) },
      { file: 'skills/stale.md', text: card({ date: '2026-01-01' }) },
      { file: 'workflows/missing.md', text: '# Workflow\n' },
      { file: 'frameworks/invalid.md', text: card({ date: '2026-02-30' }) }
    ],
    { now: NOW, maxAgeDays: 120 }
  );

  assert.deepEqual(inventory.summary, { total: 4, fresh: 1, stale: 1, invalid: 1, missing: 1 });
  assert.deepEqual(
    inventory.items.map(({ file, status }) => ({ file, status })),
    [
      { file: 'frameworks/invalid.md', status: 'invalid' },
      { file: 'skills/stale.md', status: 'stale' },
      { file: 'workflows/missing.md', status: 'missing' },
      { file: 'tools/fresh.md', status: 'fresh' }
    ]
  );
});
