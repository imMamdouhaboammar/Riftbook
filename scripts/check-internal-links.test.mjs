import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  checkInternalLinks,
  normalizeTarget,
  resolveTarget,
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

test("accepts valid files, directory READMEs, anchors, and external URLs", () => {
  const root = fixture({
    "README.md": "# Home\n\n[Guide](./guides/)\n[Section](#section)\n[Web](https://example.com)\n",
    "guides/README.md": "# Guides\n",
  });
  assert.deepEqual(checkInternalLinks(root), []);
  fs.rmSync(root, { recursive: true, force: true });
});

test("reports a missing relative target with source context", () => {
  const root = fixture({
    "README.md": "# Home\n\n[Missing](./guides/missing.md)\n",
  });
  const findings = checkInternalLinks(root);
  assert.equal(findings.length, 1);
  assert.equal(findings[0].source, "README.md");
  assert.equal(findings[0].line, 3);
  assert.equal(findings[0].resolved, path.join("guides", "missing.md"));
  fs.rmSync(root, { recursive: true, force: true });
});

test("ignores link examples inside fenced code", () => {
  const root = fixture({
    "README.md": "# Home\n\n```md\n[Example](./not-real.md)\n```\n",
  });
  assert.deepEqual(checkInternalLinks(root), []);
  fs.rmSync(root, { recursive: true, force: true });
});

test("removes query strings and fragments before resolving", () => {
  assert.equal(normalizeTarget("./guide.md?view=full#setup"), "./guide.md");
});

test("resolves a directory to its README", () => {
  const root = fixture({ "docs/README.md": "# Docs\n" });
  assert.equal(resolveTarget(path.join(root, "README.md"), "./docs"), path.join(root, "docs", "README.md"));
  fs.rmSync(root, { recursive: true, force: true });
});

test("handles percent-encoded local filenames", () => {
  assert.equal(normalizeTarget("./My%20Guide.md"), "./My Guide.md");
});
