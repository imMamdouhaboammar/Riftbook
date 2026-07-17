# RepoWise

> **Source:** [repowise-dev/repowise](https://github.com/repowise-dev/repowise)

## What it is

Provides code health scoring, generated documentation, git analytics, dead-code detection, and architectural context through MCP.

## Classification

| Field | Value |
|---|---|
| Category | `code-intelligence` |
| Integration type | Codebase Intelligence + MCP |
| Tier | `specialized` |
| Install policy | `conditional-auto` |
| Preferred scope | `project` |
| Exclusive group | `repo-intelligence-reporting` |
| Selection threshold | `6` |
| Relevant signals | `code_health`, `onboarding`, `dead_code`, `architecture_task`, `large_repo` |

## Use it when

- The goal is repository health, onboarding, or architecture visibility.
- The team needs reports beyond symbol-level navigation.

## Do not use it when

- The task is a small focused edit.
- Another code intelligence layer already produces the same reports.

## Integration approach

Inspect the upstream setup and data storage model. Run read-only analysis before enabling any generated documentation or repository writes.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Reports cite repository evidence.
- Generated docs are marked and reviewable.
- Dead-code findings are confirmed before deletion.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
