#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const DATE_FIELD = /^- \*\*Last verified\*\*:\s*(\d{4}-\d{2}-\d{2})\s*$/m;
const SOURCE_FIELD = /^- \*\*Verification source\*\*:\s*(.+)\s*$/m;
const URL = /https:\/\/[^\s)>]+/i;
const TRACKING_PARAM = /[?&](?:utm_[^=&\s]+|ref|referrer|affiliate|campaign)=[^&\s)]*/i;
const STATUS_PRIORITY = new Map([
  ['invalid', 0],
  ['stale', 1],
  ['missing', 2],
  ['fresh', 3]
]);

export function parseArgs(argv) {
  let maxAgeDays = 120;
  const files = [];

  for (const arg of argv) {
    if (arg.startsWith('--max-age-days=')) {
      const value = Number.parseInt(arg.slice('--max-age-days='.length), 10);
      if (!Number.isInteger(value) || value < 1) {
        throw new Error('--max-age-days must be a positive integer');
      }
      maxAgeDays = value;
      continue;
    }
    files.push(arg);
  }

  if (files.length === 0) {
    throw new Error('provide at least one Markdown file to check');
  }

  return { maxAgeDays, files };
}

export function inspectCurrentness(text, { now = new Date(), maxAgeDays = 120 } = {}) {
  const problems = [];
  const dateMatch = text.match(DATE_FIELD);
  const sourceMatch = text.match(SOURCE_FIELD);

  if (!dateMatch) {
    problems.push('missing `- **Last verified**: YYYY-MM-DD` metadata');
  }

  if (!sourceMatch) {
    problems.push('missing `- **Verification source**:` metadata');
  }

  if (dateMatch) {
    const rawDate = dateMatch[1];
    const verifiedAt = new Date(`${rawDate}T00:00:00Z`);
    const normalized = Number.isNaN(verifiedAt.getTime()) ? '' : verifiedAt.toISOString().slice(0, 10);

    if (normalized !== rawDate) {
      problems.push(`invalid verification date: ${rawDate}`);
    } else {
      const nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
      const ageDays = Math.floor((nowUtc - verifiedAt) / 86_400_000);
      if (ageDays < 0) {
        problems.push(`verification date is in the future: ${rawDate}`);
      } else if (ageDays > maxAgeDays) {
        problems.push(`verification is ${ageDays} days old; maximum is ${maxAgeDays}`);
      }
    }
  }

  if (sourceMatch) {
    const source = sourceMatch[1];
    const urlMatch = source.match(URL);
    if (!urlMatch) {
      problems.push('verification source must include an HTTPS primary-source URL');
    } else if (TRACKING_PARAM.test(urlMatch[0])) {
      problems.push('verification source URL must not contain tracking parameters');
    }
  }

  return problems;
}

function classifyProblems(problems) {
  if (problems.length === 0) return 'fresh';
  if (problems.some((problem) => problem.startsWith('missing `- **'))) return 'missing';
  if (problems.some((problem) => problem.startsWith('verification is '))) return 'stale';
  return 'invalid';
}

export function buildInventory(cards, options = {}) {
  const summary = { total: cards.length, fresh: 0, stale: 0, invalid: 0, missing: 0 };
  const items = cards.map(({ file, text }) => {
    const problems = inspectCurrentness(text, options);
    const status = classifyProblems(problems);
    summary[status] += 1;
    return { file, status, problems };
  });

  items.sort((a, b) => {
    const priority = STATUS_PRIORITY.get(a.status) - STATUS_PRIORITY.get(b.status);
    return priority || a.file.localeCompare(b.file);
  });

  return { summary, items };
}

export async function checkFiles(files, options = {}) {
  const failures = [];
  for (const file of files) {
    const text = await readFile(file, 'utf8');
    const problems = inspectCurrentness(text, options);
    if (problems.length > 0) failures.push({ file, problems });
  }
  return failures;
}

async function main() {
  const { maxAgeDays, files } = parseArgs(process.argv.slice(2));
  const failures = await checkFiles(files, { maxAgeDays });

  if (failures.length === 0) {
    console.log(`Currentness check passed for ${files.length} file(s).`);
    return;
  }

  for (const { file, problems } of failures) {
    console.error(`\n${file}`);
    for (const problem of problems) console.error(`  - ${problem}`);
  }
  process.exitCode = 1;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
