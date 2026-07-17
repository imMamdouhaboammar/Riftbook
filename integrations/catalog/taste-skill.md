# Taste Skill

> **Source:** [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

## What it is

Adds frontend design judgment and anti-generic rules for coding agents.

## Classification

| Field | Value |
|---|---|
| Category | `design-quality` |
| Integration type | Agent Skill |
| Tier | `primary` |
| Install policy | `project-local-auto` |
| Preferred scope | `project` |
| Exclusive group | `primary-design-skill` |
| Selection threshold | `5` |
| Relevant signals | `frontend`, `ui_task`, `landing_page`, `design_system` |

## Use it when

- The agent is building or redesigning a visible interface.
- The output is drifting toward generic AI-generated layouts.

## Do not use it when

- The task has no user interface.
- A primary design skill is already installed and its rules would conflict.

## Integration approach

Verified upstream command: `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"`. Prefer project scope and verify the Skills CLI first.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The skill appears in the active agent's skill list.
- The agent can explain the design rules it loaded.
- A critique pass identifies concrete hierarchy and repetition issues.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
