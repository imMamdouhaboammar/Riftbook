# Currentness policy

Riftbook covers tools and workflows that can change quickly. Content about coding agents, CLIs, MCP, APIs, frameworks, installation steps, host compatibility, and tool behavior should carry evidence that it was checked against a primary source recently.

## Required metadata

Time-sensitive cards under `tools/`, `skills/`, `frameworks/`, and `workflows/` should include:

```markdown
- **Last verified**: YYYY-MM-DD
- **Verification source**: [Official docs or repository](https://example.com)
```

`Last verified` means the date the behavior described in the card was checked, not the date the Markdown file was edited.

`Verification source` should point to the official documentation, official repository, official package page, or another primary source that supports the behavior described. Do not use tracking parameters.

## Freshness budget

Changed time-sensitive cards are checked with a 120-day freshness budget. A card older than that must be re-checked before its guidance is changed and merged.

This is deliberately scoped to changed cards. Existing content is not mass-failed merely because it predates this policy. The repository can migrate older cards gradually when they are touched or audited.

## Local validation

Run the focused test suite:

```bash
node --test scripts/check-currentness.test.mjs
```

Check one or more cards:

```bash
node scripts/check-currentness.mjs --max-age-days=120 tools/example.md skills/example.md
```

The validator rejects:

- missing verification dates
- invalid or future dates
- dates older than the configured budget
- missing HTTPS verification sources
- common tracking parameters in the verification URL

## What this check does not prove

Passing the validator does not prove that the source actually supports every claim in the card. Reviewers still need to compare material claims, commands, version assumptions, and compatibility notes against the cited primary source.

The check provides an auditable freshness boundary. It does not replace technical review or source reading.
