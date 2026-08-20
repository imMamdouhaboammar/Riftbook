import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const inventoryModule = await import('./currentness-inventory.mjs').catch(() => ({}));

const NOW = new Date('2026-08-19T12:00:00Z');

function card(date = '2026-08-19') {
  return `# Card\n\n- **Last verified**: ${date}\n- **Verification source**: [Official docs](https://example.com/docs)\n`;
}

test('collects markdown cards recursively and renders actionable output', async () => {
  assert.equal(typeof inventoryModule.collectMarkdownCards, 'function');
  assert.equal(typeof inventoryModule.renderInventory, 'function');

  const root = await mkdtemp(join(tmpdir(), 'riftbook-currentness-'));
  try {
    await mkdir(join(root, 'tools', 'nested'), { recursive: true });
    await writeFile(join(root, 'tools', 'fresh.md'), card());
    await writeFile(join(root, 'tools', 'nested', 'stale.md'), card('2026-01-01'));
    await writeFile(join(root, 'tools', 'ignore.txt'), 'not markdown');

    const cards = await inventoryModule.collectMarkdownCards(root, ['tools']);
    assert.deepEqual(cards.map(({ file }) => file), ['tools/fresh.md', 'tools/nested/stale.md']);

    const rendered = inventoryModule.renderInventory(cards, { now: NOW, maxAgeDays: 120 });
    assert.match(rendered, /Currentness inventory/);
    assert.match(rendered, /fresh: 1/);
    assert.match(rendered, /stale: 1/);
    assert.match(rendered, /tools\/nested\/stale\.md/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('renders deterministic machine-readable inventory evidence', () => {
  assert.equal(typeof inventoryModule.renderInventoryJson, 'function');

  const cards = [
    { file: 'tools/fresh.md', text: card() },
    { file: 'tools/stale.md', text: card('2026-01-01') }
  ];

  const rendered = inventoryModule.renderInventoryJson(cards, { now: NOW, maxAgeDays: 120 });
  const parsed = JSON.parse(rendered);

  assert.equal(parsed.schemaVersion, 1);
  assert.deepEqual(parsed.summary, {
    total: 2,
    fresh: 1,
    stale: 1,
    invalid: 0,
    missing: 0
  });
  assert.deepEqual(parsed.items.map(({ file, status }) => ({ file, status })), [
    { file: 'tools/stale.md', status: 'stale' },
    { file: 'tools/fresh.md', status: 'fresh' }
  ]);
  assert.equal(rendered.endsWith('\n'), true);
});
