#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const markdownLink = /!?\[[^\]]*]\(([^)]+)\)/g;
const fencedCode = /```[\s\S]*?```/g;

function markdownFiles(root) {
  const ignored = new Set([".git", "node_modules", ".venv", "venv"]);
  const files = [];
  const stack = [root];
  while (stack.length) {
    const directory = stack.pop();
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (ignored.has(entry.name)) continue;
      const full = path.join(directory, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (entry.isFile() && entry.name.endsWith(".md")) files.push(full);
    }
  }
  return files.sort();
}

function normalizeTarget(rawTarget) {
  const target = rawTarget.trim().split(/\s+/, 1)[0].replace(/^<|>$/g, "");
  if (!target || target.startsWith("#")) return null;
  if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(target)) return null;
  return decodeURIComponent(target.split(/[?#]/, 1)[0]);
}

function resolveTarget(sourceFile, target) {
  const resolved = path.resolve(path.dirname(sourceFile), target);
  if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
    return path.join(resolved, "README.md");
  }
  return resolved;
}

function checkFile(root, sourceFile) {
  const text = fs.readFileSync(sourceFile, "utf8").replace(fencedCode, "");
  const findings = [];
  for (const match of text.matchAll(markdownLink)) {
    const target = normalizeTarget(match[1]);
    if (!target) continue;
    const resolved = resolveTarget(sourceFile, target);
    if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
      const line = text.slice(0, match.index).split("\n").length;
      findings.push({
        source: path.relative(root, sourceFile),
        line,
        target: match[1],
        resolved: path.relative(root, resolved),
      });
    }
  }
  return findings;
}

function checkInternalLinks(root) {
  return markdownFiles(root).flatMap((file) => checkFile(root, file));
}

function main() {
  const root = path.resolve(process.argv[2] ?? process.cwd());
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
    throw new Error(`Repository directory not found: ${root}`);
  }

  const files = markdownFiles(root);
  const findings = files.flatMap((file) => checkFile(root, file));
  for (const finding of findings) {
    console.error(`${finding.source}:${finding.line}: broken internal link ${finding.target} -> ${finding.resolved}`);
  }

  if (findings.length) {
    console.error(`Internal link check failed with ${findings.length} broken link(s) across ${files.length} Markdown file(s).`);
    process.exitCode = 1;
  } else {
    console.log(`Internal link check passed for ${files.length} Markdown file(s).`);
  }
}

export { checkFile, checkInternalLinks, markdownFiles, normalizeTarget, resolveTarget };

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    console.error(`internal-link-check: ${error.message}`);
    process.exitCode = 1;
  }
}
