import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  checkInternalLinks,
  isInsideRoot,
  normalizeTarget,
  rawDestination,
  resolveTarget,
  stripFencedCodePreserveLines,
} from "./check-internal-links.mjs";

function fixture(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "riftbook-links-"));
  for (const [relative, content] of Object.entries(files)) {
    const target = path.join(root, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  }
  return root;
}

function cleanup(root) {
  fs.rmSync(root, { recursive: true, force: true });
}

test("accepts valid files, directory READMEs, anchors, and external URLs", () => {
  const root = fixture({
    "README.md": "# Home\n\n[Guide](./guides/)\n[Section](#section)\n[Web](https://example.com)\n",
    "guides/README.md": "# Guides\n",
  });
  assert.deepEqual(checkInternalLinks(root), []);
  cleanup(root);
});

test("reports a missing relative target with source context", () => {
  const root = fixture({
    "README.md": "# Home\n\n[Missing](./guides/missing.md)\n",
  });
  const findings = checkInternalLinks(root);
  assert.equal(findings.length, 1);
  assert.equal(findings[0].source, "README.md");
  assert.equal(findings[0].line, 3);
  assert.equal(findings[0].reason, "missing-target");
  assert.equal(findings[0].resolved, path.join("guides", "missing.md"));
  cleanup(root);
});

test("ignores link examples inside fenced code without shifting later line numbers", () => {
  const root = fixture({
    "README.md": "# Home\n\n```md\n[Example](./not-real.md)\n```\n\n[Missing](./later.md)\n",
  });
  const findings = checkInternalLinks(root);
  assert.equal(findings.length, 1);
  assert.equal(findings[0].line, 7);
  assert.equal(findings[0].target, "./later.md");
  cleanup(root);
});

test("removes query strings and fragments before resolving", () => {
  assert.deepEqual(normalizeTarget("./guide.md?view=full#setup"), {
    target: "./guide.md",
    error: null,
  });
});

test("resolves a directory to its README", () => {
  const root = fixture({ "docs/README.md": "# Docs\n" });
  assert.equal(resolveTarget(path.join(root, "README.md"), "./docs"), path.join(root, "docs", "README.md"));
  cleanup(root);
});

test("handles percent-encoded local filenames", () => {
  assert.deepEqual(normalizeTarget("./My%20Guide.md"), {
    target: "./My Guide.md",
    error: null,
  });
});

test("handles angle-bracket destinations containing spaces", () => {
  assert.equal(rawDestination("<./My Guide.md> \"Guide title\""), "./My Guide.md");
  assert.deepEqual(normalizeTarget("<./My%20Guide.md> \"Guide title\""), {
    target: "./My Guide.md",
    error: null,
  });
});

test("reports malformed percent encoding instead of crashing the repository scan", () => {
  const root = fixture({
    "README.md": "# Home\n\n[Broken](./bad%ZZ.md)\n",
  });
  const findings = checkInternalLinks(root);
  assert.equal(findings.length, 1);
  assert.equal(findings[0].reason, "invalid-percent-encoding");
  assert.equal(findings[0].line, 3);
  cleanup(root);
});

test("rejects links that escape the repository root even when the target exists", () => {
  const parent = fs.mkdtempSync(path.join(os.tmpdir(), "riftbook-link-boundary-"));
  const root = path.join(parent, "repo");
  fs.mkdirSync(root);
  fs.writeFileSync(path.join(parent, "outside.md"), "# Outside\n");
  fs.writeFileSync(path.join(root, "README.md"), "# Home\n\n[Outside](../outside.md)\n");

  const findings = checkInternalLinks(root);
  assert.equal(findings.length, 1);
  assert.equal(findings[0].reason, "outside-repository");
  assert.equal(isInsideRoot(root, path.join(parent, "outside.md")), false);
  cleanup(parent);
});

test("keeps normalized internal targets inside the repository", () => {
  const root = path.resolve("/tmp/riftbook-root");
  assert.equal(isInsideRoot(root, path.join(root, "docs", "guide.md")), true);
  assert.equal(isInsideRoot(root, root), true);
});

test("preserves newline count while blanking fenced code", () => {
  const source = "before\n```md\n[bad](./missing.md)\n```\nafter\n";
  const stripped = stripFencedCodePreserveLines(source);
  assert.equal(stripped.split("\n").length, source.split("\n").length);
  assert.equal(stripped.includes("./missing.md"), false);
});
