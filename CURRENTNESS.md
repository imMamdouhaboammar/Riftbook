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
node --test scripts/check-currentness.test.mjs scripts/currentness-inventory.test.mjs scripts/currentness-delta.test.mjs
```

Check one or more cards:

```bash
node scripts/check-currentness.mjs --max-age-days=120 tools/example.md skills/example.md
```

Generate a repository-wide migration inventory:

```bash
node scripts/currentness-inventory.mjs
```

The inventory is advisory. It exits successfully and groups cards as `fresh`, `stale`, `invalid`, or `missing`, with the most actionable problems first. Use it to choose what to re-check next without turning legacy metadata debt into an unrelated merge blocker.

You can scope the report to selected categories:

```bash
node scripts/currentness-inventory.mjs tools workflows
```

For automation or downstream analysis, request the stable JSON representation:

```bash
node scripts/currentness-inventory.mjs --format=json
```

The JSON output includes `schemaVersion`, summary counts, and the same ordered findings as the human-readable report.

## Reviewer delta

For a pull request, the useful question is often not the size of the repository-wide freshness debt but what the change did to the cards it touched. Generate a delta against a base revision with:

```bash
node scripts/currentness-delta.mjs --base=origin/main tools/example.md
```

The delta classifies each changed card as `new`, `refreshed`, `regressed`, `changed`, `unchanged`, or `removed` and shows its currentness status before and after the change. A stale card that is re-checked becomes `stale -> fresh (refreshed)`. A previously fresh card that loses valid evidence becomes `fresh -> missing (regressed)`.

Machine-readable output is also available:

```bash
node scripts/currentness-delta.mjs --base=origin/main --format=json tools/example.md
```

The script validates the base revision before reading historical files so an invalid revision cannot silently make every card look newly added.

The Currentness GitHub Actions workflow publishes the repository inventory and changed-card delta in both Markdown and JSON inside the `currentness-inventory` artifact for 14 days. The changed-card delta appears first in the workflow job summary, followed by the full advisory inventory, so reviewers can distinguish PR-specific freshness work from pre-existing debt.

The validator rejects:

- missing verification dates
- invalid or future dates
- dates older than the configured budget
- missing HTTPS verification sources
- common tracking parameters in the verification URL

## What this check does not prove

Passing the validator does not prove that the source actually supports every claim in the card. Reviewers still need to compare material claims, commands, version assumptions, and compatibility notes against the cited primary source.

The inventory and delta also do not decide whether a source is truly authoritative. They expose freshness evidence and status changes so review work can be prioritized.

The check provides an auditable freshness boundary. It does not replace technical review or source reading.
