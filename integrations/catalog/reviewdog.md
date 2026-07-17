# reviewdog

> **Source:** [reviewdog/reviewdog](https://github.com/reviewdog/reviewdog)

## What it is

Converts linter and static-analysis output into pull-request comments, checks, and annotations.

## Classification

| Field | Value |
|---|---|
| Category | `quality-review` |
| Integration type | CI Review Bridge |
| Tier | `primary` |
| Install policy | `conditional-auto` |
| Preferred scope | `ci` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `ci`, `pull_requests`, `linters` |

## Use it when

- The repository already runs linters or analyzers in CI.
- Reviewers need findings attached to changed lines.

## Do not use it when

- There is no CI or no analyzer output to route.
- The agent would add noisy comments without diff filtering or severity rules.

## Integration approach

Choose the current upstream GitHub Action or CLI path and connect only existing, trusted analyzers. Configure diff filtering and failure thresholds deliberately.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- A test pull request receives the expected annotations.
- Existing backlog is not reported as new change noise.
- The workflow fails only at the agreed severity.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
