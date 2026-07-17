# Hallmark

> **Source:** [Nutlope/hallmark](https://github.com/Nutlope/hallmark)

## What it is

A focused anti-AI-slop design skill for Claude Code, Cursor, and Codex.

## Classification

| Field | Value |
|---|---|
| Category | `design-quality` |
| Integration type | Agent Skill |
| Tier | `specialized` |
| Install policy | `conditional-auto` |
| Preferred scope | `project` |
| Exclusive group | `primary-design-skill` |
| Selection threshold | `6` |
| Relevant signals | `frontend`, `ui_task`, `anti_slop` |

## Use it when

- You need a lightweight design review layer rather than a full design workflow.
- The current UI exhibits recognizable AI-generated design habits.

## Do not use it when

- Impeccable, Taste Skill, or another primary design skill is already enforcing similar rules.
- The task is backend-only.

## Integration approach

Verified upstream command: `npx skills add nutlope/hallmark`. Prefer project scope and inspect the references copied with the skill.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The skill is available in the active agent.
- A review cites specific components and design patterns.
- The skill does not replace project brand rules.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
