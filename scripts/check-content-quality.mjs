#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
import process from 'node:process';

const CONTENT_ROOTS = new Set([
  'learning',
  'playbook',
  'tools',
  'skills',
  'workflows',
  'frameworks',
  'prompts',
  'examples',
]);

const PLACEHOLDER_RE = /\b(?:TBD|TODO|coming soon)\b/i;
const MARKDOWN_LINK_RE = /\[[^\]]*\]\(([^)]+)\)/g;
const TRACKING_KEYS = new Set([
  'ref',
  'referrer',
  'affiliate',
  'aff',
  'campaign',
  'source',
]);

function normalizePath(file) {
  return relative(process.cwd(), resolve(file)).split(sep).join('/');
}

function isPublishedContent(file) {
  const normalized = normalizePath(file);
  const [root] = normalized.split('/');
  return normalized.endsWith('.md') && CONTENT_ROOTS.has(root);
}

function stripFencedCode(markdown) {
  const lines = markdown.split(/\r?\n/);
  let inFence = false;
  let fenceMarker = '';

  return lines.map((line) => {
    const match = line.match(/^\s*(```+|~~~+)/);
    if (match) {
      const marker = match[1][0];
      if (!inFence) {
        inFence = true;
        fenceMarker = marker;
      } else if (marker === fenceMarker) {
        inFence = false;
        fenceMarker = '';
      }
      return '';
    }
    return inFence ? '' : line;
  }).join('\n');
}

function firstMeaningfulLine(markdown) {
  const lines = markdown.replace(/^\uFEFF/, '').split(/\r?\n/);
  let inFrontmatter = false;
  let frontmatterSeen = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!frontmatterSeen && trimmed === '---') {
      frontmatterSeen = true;
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (trimmed === '---') inFrontmatter = false;
      continue;
    }
    if (trimmed) return trimmed;
  }
  return '';
}

function hasTrackingParameter(destination) {
  const clean = destination.trim().replace(/^<|>$/g, '');
  if (!/^https?:\/\//i.test(clean)) return false;

  try {
    const url = new URL(clean);
    for (const key of url.searchParams.keys()) {
      const lowered = key.toLowerCase();
      if (lowered.startsWith('utm_') || TRACKING_KEYS.has(lowered)) return true;
    }
  } catch {
    return false;
  }
  return false;
}

export function inspectMarkdown(file, markdown) {
  if (!isPublishedContent(file)) return [];

  const findings = [];
  const visible = stripFencedCode(markdown);
  const firstLine = firstMeaningfulLine(markdown);

  if (!/^#\s+\S/.test(firstLine)) {
    findings.push({ rule: 'missing-h1', message: 'Published content must start with an H1 title.' });
  }

  visible.split(/\r?\n/).forEach((line, index) => {
    if (PLACEHOLDER_RE.test(line)) {
      findings.push({
        rule: 'placeholder',
        line: index + 1,
        message: 'Remove placeholder content such as TBD, TODO, or coming soon.',
      });
    }

    for (const match of line.matchAll(MARKDOWN_LINK_RE)) {
      if (hasTrackingParameter(match[1])) {
        findings.push({
          rule: 'tracking-url',
          line: index + 1,
          message: `Remove tracking or referral parameters from ${match[1]}`,
        });
      }
    }
  });

  return findings;
}

async function main() {
  const files = process.argv.slice(2).filter((arg) => arg.endsWith('.md'));
  if (files.length === 0) {
    console.log('No Markdown files supplied; nothing to validate.');
    return;
  }

  let failures = 0;
  for (const file of files) {
    if (!isPublishedContent(file)) continue;
    let markdown;
    try {
      markdown = await readFile(file, 'utf8');
    } catch (error) {
      console.error(`${file}: unable to read file: ${error.message}`);
      failures += 1;
      continue;
    }

    const findings = inspectMarkdown(file, markdown);
    for (const finding of findings) {
      const location = finding.line ? `:${finding.line}` : '';
      console.error(`${file}${location} [${finding.rule}] ${finding.message}`);
    }
    failures += findings.length;
  }

  if (failures > 0) {
    console.error(`Content quality failed with ${failures} finding(s).`);
    process.exitCode = 1;
  } else {
    console.log('Content quality passed.');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main();
}
