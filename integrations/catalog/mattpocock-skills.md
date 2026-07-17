# Matt Pocock Skills

> **Source:** [mattpocock/skills](https://github.com/mattpocock/skills)

## What it is

A collection of practical engineering skills drawn from a real Claude setup.

## Classification

| Field | Value |
|---|---|
| Category | `skill-libraries` |
| Integration type | Engineering Skill Library |
| Tier | `discovery` |
| Install policy | `reference-only` |
| Preferred scope | `none` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `typescript`, `missing_skill`, `engineering_task` |

## Use it when

- A named engineering skill directly fits the stack or task.
- You want examples of concise, practical skill design.

## Do not use it when

- The agent proposes copying every skill.
- The source assumptions do not match the repository.

## Integration approach

Inspect and install only the named skill needed by the current task. Prefer project-local scope.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The skill trigger is narrow and documented.
- Its code examples match the project's versions and conventions.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
