#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const markdownLink = /!?\[[^\]]*]\(([^)]+)\)/g;
const fencedCode = /```[^\n]*\n[\s\S]*?```/g;
const externalScheme = /^(?:https?:|mailto:|tel:|data:|javascript:)/i;

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

function stripFencedCodePreserveLines(text) {
  return text.replace(fencedCode, (block) => block.replace(/[^\n]/g, " "));
}

function rawDestination(rawTarget) {
  const trimmed = rawTarget.trim();
  if (trimmed.startsWith("<")) {
    const end = trimmed.indexOf(">");
    return end === -1 ? trimmed : trimmed.slice(1, end);
  }
  return trimmed.split(/\s+/, 1)[0];
}

function normalizeTarget(rawTarget) {
  const destination = rawDestination(rawTarget);
  if (!destination || destination.startsWith("#") || externalScheme.test(destination)) {
    return { target: null, error: null };
  }

  const withoutQuery = destination.split(/[?#]/, 1)[0];
  try {
    return { target: decodeURIComponent(withoutQuery), error: null };
  } catch {
    return { target: null, error: "invalid-percent-encoding" };
  }
}

function isInsideRoot(root, target) {
  const relative = path.relative(root, target);
  return relative === "" || (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative));
}

function resolveTarget(sourceFile, target) {
  const resolved = path.resolve(path.dirname(sourceFile), target);
  if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
    return path.join(resolved, "README.md");
  }
  return resolved;
}

function checkFile(root, sourceFile) {
  const text = stripFencedCodePreserveLines(fs.readFileSync(sourceFile, "utf8"));
  const findings = [];

  for (const match of text.matchAll(markdownLink)) {
    const line = text.slice(0, match.index).split("\n").length;
    const normalized = normalizeTarget(match[1]);

    if (normalized.error) {
      findings.push({
        source: path.relative(root, sourceFile),
        line,
        target: match[1],
        resolved: null,
        reason: normalized.error,
      });
      continue;
    }

    if (!normalized.target) continue;

    const resolved = resolveTarget(sourceFile, normalized.target);
    if (!isInsideRoot(root, resolved)) {
      findings.push({
        source: path.relative(root, sourceFile),
        line,
        target: match[1],
        resolved: path.relative(root, resolved),
        reason: "outside-repository",
      });
      continue;
    }

    if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
      findings.push({
        source: path.relative(root, sourceFile),
        line,
        target: match[1],
        resolved: path.relative(root, resolved),
        reason: "missing-target",
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
    const resolved = finding.resolved ? ` -> ${finding.resolved}` : "";
    console.error(`${finding.source}:${finding.line}: ${finding.reason}: ${finding.target}${resolved}`);
  }

  if (findings.length) {
    console.error(`Internal link check failed with ${findings.length} finding(s) across ${files.length} Markdown file(s).`);
    process.exitCode = 1;
  } else {
    console.log(`Internal link check passed for ${files.length} Markdown file(s).`);
  }
}

export {
  checkFile,
  checkInternalLinks,
  isInsideRoot,
  markdownFiles,
  normalizeTarget,
  rawDestination,
  resolveTarget,
  stripFencedCodePreserveLines,
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    console.error(`internal-link-check: ${error.message}`);
    process.exitCode = 1;
  }
}
