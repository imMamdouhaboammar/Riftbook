#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

import { buildInventory } from './check-currentness.mjs';

const SUPPORTED_FORMATS = new Set(['text', 'json']);

function statusFor(file, text, options) {
  if (text == null) return 'absent';
  return buildInventory([{ file, text }], options).items[0].status;
}

export function buildDelta(entries, options = {}) {
  const summary = {
    total: entries.length,
    new: 0,
    refreshed: 0,
    regressed: 0,
    unchanged: 0,
    changed: 0,
    removed: 0
  };

  const items = entries.map(({ file, beforeText = null, afterText = null }) => {
    const before = statusFor(file, beforeText, options);
    const after = statusFor(file, afterText, options);
    let change;

    if (before === 'absent' && after !== 'absent') change = 'new';
    else if (before !== 'absent' && after === 'absent') change = 'removed';
    else if (before === after) change = 'unchanged';
    else if (after === 'fresh' && before !== 'fresh') change = 'refreshed';
    else if (before === 'fresh' && after !== 'fresh') change = 'regressed';
    else change = 'changed';

    summary[change] += 1;
    return { file, before, after, change };
  });

  items.sort((a, b) => a.file.localeCompare(b.file));
  return { summary, items };
}

export function renderDelta(entries, options = {}) {
  const delta = buildDelta(entries, options);
  const { summary } = delta;
  const lines = [
    '# Currentness delta',
    '',
    `changed cards: ${summary.total}`,
    `new: ${summary.new}`,
    `refreshed: ${summary.refreshed}`,
    `regressed: ${summary.regressed}`,
    `status changed: ${summary.changed}`,
    `unchanged status: ${summary.unchanged}`,
    `removed: ${summary.removed}`,
    ''
  ];

  if (delta.items.length === 0) {
    lines.push('No time-sensitive cards changed.');
  } else {
    for (const item of delta.items) {
      lines.push(`- ${item.file}: ${item.before} -> ${item.after} (${item.change})`);
    }
  }

  return `${lines.join('\n')}\n`;
}

export function renderDeltaJson(entries, options = {}) {
  return `${JSON.stringify({ schemaVersion: 1, ...buildDelta(entries, options) }, null, 2)}\n`;
}

export function parseCli(argv) {
  let base = null;
  let maxAgeDays = 120;
  let format = 'text';
  const files = [];

  for (const arg of argv) {
    if (arg.startsWith('--base=')) {
      base = arg.slice('--base='.length);
      if (!base) throw new Error('--base requires a git revision');
    } else if (arg.startsWith('--max-age-days=')) {
      const value = Number.parseInt(arg.slice('--max-age-days='.length), 10);
      if (!Number.isInteger(value) || value < 1) throw new Error('--max-age-days must be a positive integer');
      maxAgeDays = value;
    } else if (arg.startsWith('--format=')) {
      format = arg.slice('--format='.length);
      if (!SUPPORTED_FORMATS.has(format)) throw new Error('--format must be text or json');
    } else {
      files.push(arg);
    }
  }

  if (!base) throw new Error('provide --base=<git revision>');
  return { base, maxAgeDays, format, files };
}

export function readGitFile(base, file, exec = execFileSync) {
  try {
    return exec('git', ['show', `${base}:${file}`], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    });
  } catch {
    return null;
  }
}

export async function collectDeltaEntries(base, files, options = {}) {
  const exec = options.exec ?? execFileSync;
  const entries = [];
  for (const file of files) {
    const beforeText = readGitFile(base, file, exec);
    const afterText = await readFile(file, 'utf8');
    entries.push({ file, beforeText, afterText });
  }
  return entries;
}

async function main() {
  const { base, maxAgeDays, format, files } = parseCli(process.argv.slice(2));
  const entries = await collectDeltaEntries(base, files);
  const options = { maxAgeDays };
  process.stdout.write(format === 'json' ? renderDeltaJson(entries, options) : renderDelta(entries, options));
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
