# Oh My Codex

> **Source:** [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)

## What it is

Adds hooks, agent teams, worktree workflows, HUDs, and orchestration around Codex.

## Classification

| Field | Value |
|---|---|
| Category | `agent-governance` |
| Integration type | Codex Runtime Extension |
| Tier | `specialized` |
| Install policy | `manual-only` |
| Preferred scope | `user-or-project` |
| Exclusive group | `codex-runtime` |
| Selection threshold | `6` |
| Relevant signals | `codex`, `multi_agent`, `worktrees`, `long_running` |

## Use it when

- Codex is the primary harness and the team wants a richer orchestration layer.
- Worktrees and coordinated Codex agents are part of the workflow.

## Do not use it when

- Codex is not installed and authenticated.
- Another orchestration runtime already owns hooks and agent instructions.

## Integration approach

Verified upstream package: `npm install -g oh-my-codex`. Confirm the existing Codex installation owner, then choose project or user setup scope deliberately.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- `codex --version` and `omx` both resolve.
- Project setup changes are reviewed before commit.
- Worktree creation and cleanup are tested on a non-critical task.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
