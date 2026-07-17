# CodeGraph

> **Source:** [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)

## What it is

Builds a local semantic code graph that coding agents can query instead of repeatedly crawling files.

## Classification

| Field | Value |
|---|---|
| Category | `code-intelligence` |
| Integration type | CLI + MCP |
| Tier | `primary` |
| Install policy | `project-local-auto` |
| Preferred scope | `project` |
| Exclusive group | `code-map` |
| Selection threshold | `5` |
| Relevant signals | `medium_repo`, `large_repo`, `multi_language`, `architecture_task`, `refactor_task` |

## Use it when

- The repo has enough cross-file behavior that grep-based discovery is slow.
- The agent needs call paths, dependencies, or blast-radius context before editing.

## Do not use it when

- The project is tiny or disposable.
- Another code graph is already active and provides the same answers.

## Integration approach

Verified upstream path: install the CLI, run `codegraph install` to wire supported agents, then run `codegraph init` in the target project. Re-check the upstream README before execution.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- `codegraph --version` resolves.
- The agent integration is visible in its MCP configuration.
- A project query returns symbols from the current repository.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
