# Understand Anything

> **Source:** [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything)

## What it is

Generates an interactive, searchable knowledge graph for exploring and asking questions about code.

## Classification

| Field | Value |
|---|---|
| Category | `code-intelligence` |
| Integration type | Interactive Knowledge Graph |
| Tier | `specialized` |
| Install policy | `conditional-auto` |
| Preferred scope | `project` |
| Exclusive group | `code-map` |
| Selection threshold | `6` |
| Relevant signals | `onboarding`, `architecture_task`, `visual_graph`, `large_repo` |

## Use it when

- Humans and agents both need an explorable map of an unfamiliar codebase.
- Visual explanation is a primary requirement.

## Do not use it when

- The task needs precise editing rather than explanation.
- Another code graph already serves the same users.

## Integration approach

Review the current upstream setup, output location, and data model. Keep generated graph assets out of commits unless approved.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- A user can trace a real feature from entry point to dependencies.
- Questions link back to source code.
- The graph refresh process is documented.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
