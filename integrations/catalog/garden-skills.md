# Garden Skills

> **Source:** [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills)

## What it is

A collection of skills for web design, knowledge retrieval, image generation, and related workflows.

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
| Relevant signals | `missing_skill`, `design_task`, `knowledge_retrieval` |

## Use it when

- A specific capability in the collection directly matches the project.
- You want a small reference implementation of a portable skill.

## Do not use it when

- The agent cannot name the exact skill it needs.
- The whole collection would be copied into a coding repo.

## Integration approach

Browse the collection and install or copy only the named skill that passes the fit and trust checks.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The chosen skill has a clear trigger and output.
- The agent does not load unrelated image or content skills during coding work.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
