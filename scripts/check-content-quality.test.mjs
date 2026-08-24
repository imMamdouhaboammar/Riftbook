import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectMarkdown } from './check-content-quality.mjs';

const file = 'learning/example.md';

test('accepts a complete content page', () => {
  const findings = inspectMarkdown(file, '# Example\n\nUse the official [docs](https://example.com/docs).\n');
  assert.deepEqual(findings, []);
});

test('requires published content to start with an H1', () => {
  const findings = inspectMarkdown(file, '## Example\n\nBody\n');
  assert.equal(findings[0]?.rule, 'missing-h1');
});

test('accepts YAML frontmatter before the H1', () => {
  const findings = inspectMarkdown(file, '---\ntitle: Example\n---\n\n# Example\n\nBody\n');
  assert.deepEqual(findings, []);
});

test('rejects placeholder prose', () => {
  const findings = inspectMarkdown(file, '# Example\n\nComing soon with details.\n');
  assert.equal(findings.some((finding) => finding.rule === 'placeholder'), true);
});

test('ignores placeholder examples inside fenced code', () => {
  const findings = inspectMarkdown(file, '# Example\n\n```text\nTODO: example only\n```\n');
  assert.deepEqual(findings, []);
});

test('rejects utm parameters in Markdown links', () => {
  const findings = inspectMarkdown(file, '# Example\n\n[Docs](https://example.com/?utm_source=routing)\n');
  assert.equal(findings.some((finding) => finding.rule === 'tracking-url'), true);
});

test('rejects common referral parameters in Markdown links', () => {
  const findings = inspectMarkdown(file, '# Example\n\n[Docs](https://example.com/?ref=partner)\n');
  assert.equal(findings.some((finding) => finding.rule === 'tracking-url'), true);
});

test('accepts meaningful non-tracking query parameters', () => {
  const findings = inspectMarkdown(file, '# Example\n\n[Search](https://example.com/search?q=agents&page=2)\n');
  assert.deepEqual(findings, []);
});

test('does not apply published-content rules to governance files', () => {
  const findings = inspectMarkdown('CONTRIBUTING.md', 'TODO examples and https://example.com/?utm_source=test');
  assert.deepEqual(findings, []);
});
