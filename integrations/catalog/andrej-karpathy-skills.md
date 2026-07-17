# Andrej Karpathy Skills

> **Source:** [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)

## What it is

A compact behavior guide derived from recurring LLM coding failure patterns.

## Classification

| Field | Value |
|---|---|
| Category | `quality-review` |
| Integration type | Behavior Rules |
| Tier | `specialized` |
| Install policy | `manual-only` |
| Preferred scope | `project` |
| Exclusive group | `behavior-rules` |
| Selection threshold | `6` |
| Relevant signals | `agent_behavior`, `overengineering`, `unnecessary_changes` |

## Use it when

- The agent repeatedly overcomplicates tasks or makes broad unrequested changes.
- You want a small rule layer rather than a full skill suite.

## Do not use it when

- The rules conflict with approved project instructions.
- The agent copies a whole CLAUDE.md without reconciling duplicates.

## Integration approach

Review the source file line by line, extract only compatible rules, and merge them into the project's canonical agent instructions.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- No project-specific rule was overwritten.
- The final rules are deduplicated and testable.
- The agent can state which behavior each rule is meant to prevent.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
