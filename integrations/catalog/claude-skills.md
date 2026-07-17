# Claude Skills

> **Source:** [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)

## What it is

A large multi-domain library of skills, commands, agents, and plugins for several coding harnesses.

## Classification

| Field | Value |
|---|---|
| Category | `skill-libraries` |
| Integration type | Skill Library |
| Tier | `discovery` |
| Install policy | `reference-only` |
| Preferred scope | `none` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `missing_skill`, `specialized_domain` |

## Use it when

- The project has a clear capability gap that a named skill may fill.
- You need to compare several specialized skills before choosing one.

## Do not use it when

- The agent proposes installing the entire library.
- No concrete project need has been identified.

## Integration approach

Treat this as a discovery source. Inspect individual skill files, licensing, dependencies, and provider paths before selectively installing anything.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Only named skills appear in the project.
- The installed files have a documented owner and purpose.
- No unrelated agents or commands were copied.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
