#!/usr/bin/env node

import { readFile, readdir } from 'node:fs/promises';
import { relative, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

import { buildInventory } from './check-currentness.mjs';

const DEFAULT_ROOTS = ['tools', 'skills', 'frameworks', 'workflows'];

function toPosix(path) {
  return path.split(sep).join('/');
}

async function walkMarkdown(root, directory, output) {
  const absolute = resolve(root, directory);
  let entries;
  try {
    entries = await readdir(absolute, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return;
    throw error;
  }

  entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    const child = resolve(absolute, entry.name);
    const childRelative = toPosix(relative(root, child));
    if (entry.isDirectory()) {
      await walkMarkdown(root, childRelative, output);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      output.push(childRelative);
    }
  }
}

export async function collectMarkdownCards(root = process.cwd(), roots = DEFAULT_ROOTS) {
  const files = [];
  for (const directory of roots) await walkMarkdown(root, directory, files);
  files.sort((a, b) => a.localeCompare(b));

  return Promise.all(
    files.map(async (file) => ({
      file,
      text: await readFile(resolve(root, file), 'utf8')
    }))
  );
}

export function renderInventory(cards, options = {}) {
  const inventory = buildInventory(cards, options);
  const { summary } = inventory;
  const lines = [
    '# Currentness inventory',
    '',
    `total: ${summary.total}`,
    `fresh: ${summary.fresh}`,
    `stale: ${summary.stale}`,
    `invalid: ${summary.invalid}`,
    `missing: ${summary.missing}`,
    ''
  ];

  for (const item of inventory.items) {
    lines.push(`- [${item.status}] ${item.file}`);
    for (const problem of item.problems) lines.push(`  - ${problem}`);
  }

  return `${lines.join('\n')}\n`;
}

function parseCli(argv) {
  let maxAgeDays = 120;
  const roots = [];
  for (const arg of argv) {
    if (arg.startsWith('--max-age-days=')) {
      const value = Number.parseInt(arg.slice('--max-age-days='.length), 10);
      if (!Number.isInteger(value) || value < 1) throw new Error('--max-age-days must be a positive integer');
    
      maxAgeDays = value;
    } else {
      roots.push(arg);
    }
  }
  return { maxAgeDays, roots: roots.length > 0 ? roots : DEFAULT_ROOTS };
}

async function main() {
  const { maxAgeDays, roots } = parseCli(process.argv.slice(2));
  const cards = await collectMarkdownCards(process.cwd(), roots);
  process.stdout.write(renderInventory(cards, { maxAgeDays }));
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
