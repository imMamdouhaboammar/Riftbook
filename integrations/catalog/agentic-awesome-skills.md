# Agentic Awesome Skills

> **Source:** [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills)

## What it is

A large installable library of agent skills, plugins, bundles, and workflows for multiple coding agents.

## Classification

| Field | Value |
|---|---|
| Category | `skill-libraries` |
| Integration type | Installable Skill Library |
| Tier | `discovery` |
| Install policy | `reference-only` |
| Preferred scope | `none` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `missing_skill`, `specialized_domain`, `discovery` |

## Use it when

- The agent can name a precise missing capability and wants to search a large library.
- A bundle has been reviewed and matches the project.

## Do not use it when

- The agent proposes installing hundreds of skills.
- The source, ownership, or scripts of the selected skill have not been inspected.

## Integration approach

Search and list first. Install a single skill or a small reviewed bundle, never the whole library by default.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The project records exactly which skills were added.
- No unrelated hooks, commands, or agents appeared.
- Updates can be performed selectively.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
