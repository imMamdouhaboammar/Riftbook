# Integration Registry Maintenance

Use this guide when adding, changing, or removing an entry in [`registry.json`](./registry.json).

The registry drives the read-only [Integration Selector](../scripts/integration-selector.mjs). A malformed entry can stop the selector, hide a useful candidate, create a false overlap warning, or recommend an unsafe execution policy. Registry changes therefore need the same review discipline as code changes.

## Before editing

1. Confirm the integration is not already present under another name or repository URL.
2. Read the current upstream repository, installer, license, and security notes.
3. Decide whether the source is a tool, dependency, skill, reference library, runtime extension, or infrastructure component.
4. Identify the smallest capability it owns and any existing integration that overlaps with it.
5. Collect project signals that can be detected from repository evidence. Do not add signals that the selector cannot currently detect unless the same change adds detection and tests.

## Required fields

| Field | Rule |
|---|---|
| `id` | Unique lowercase kebab-case identifier |
| `name` | Human-readable upstream name |
| `repo` | Canonical `https://github.com/owner/repository` URL |
| `category` | Existing focused capability category unless a new category is justified |
| `type` | Concrete delivery form such as CLI, MCP, skill, library, or framework |
| `policy` | One supported execution policy |
| `exclusive_group` | `null` or the overlap group where one primary owner should be chosen |
| `selection.base_score` | Integer from 0 to 10 |
| `selection.signals` | Non-empty, unique lowercase snake_case signals |
| `selection.threshold` | Integer from 1 to 20 |

## Policy meanings

| Policy | Meaning |
|---|---|
| `project-local-auto` | Reversible project-local setup may be proposed after upstream verification |
| `conditional-auto` | Additional project evidence or approval is required before setup |
| `dependency-auto` | A normal project dependency, but only when stack and behavior evidence justify it |
| `manual-only` | Credentials, infrastructure, global state, cost, destructive behavior, or large operational impact require explicit approval |
| `reference-only` | Discovery source only; never bulk install or treat as a direct candidate package |

## Scoring checks

A candidate should not pass its threshold only because of its base score. The default should require at least one meaningful matched signal.

When choosing signals:

- Prefer observable repository evidence such as `react`, `ci`, `tests`, or `documentation`.
- Avoid intent-only signals unless the selector receives that intent explicitly.
- Do not duplicate near-identical signals to inflate scores.
- Add a negative rule in the selector when existing capability evidence should suppress a candidate.
- Add or update selector tests whenever scoring behavior changes.

## Local validation

Run the structural validator:

```bash
node scripts/validate-integration-registry.mjs
```

Run registry and selector tests together:

```bash
node --test scripts/integration-selector.test.mjs scripts/validate-integration-registry.test.mjs
```

Smoke-test both report formats:

```bash
node scripts/integration-selector.mjs --project . --max 5
node scripts/integration-selector.mjs --project . --format json --max 5
```

The `Integration Intelligence` GitHub Action runs the same checks when relevant files change.

## Review checklist

- [ ] The ID and repository URL are unique.
- [ ] The repository URL points to the intended upstream project.
- [ ] The category and type describe the real capability.
- [ ] The execution policy matches installation and operational risk.
- [ ] The exclusive group prevents duplicate capability owners where needed.
- [ ] Every selection signal is detectable by the current selector.
- [ ] The score and threshold do not select the candidate without evidence.
- [ ] Selector behavior changes include regression tests.
- [ ] The catalog card, compatibility guidance, and lessons remain accurate.
- [ ] The registry validator and selector test suite pass.

## Failure handling

Do not bypass the validator, weaken a policy, or remove a test to make a registry change pass.

When validation fails:

1. Read every reported error.
2. Fix the registry entry or validator bug at its source.
3. Add a regression test for any validator defect.
4. Re-run the complete integration intelligence check.
5. Record any unresolved upstream uncertainty in the pull request.
