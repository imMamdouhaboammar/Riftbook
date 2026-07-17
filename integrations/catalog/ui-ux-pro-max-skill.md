# UI UX Pro Max Skill

> **Source:** [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

## What it is

Provides broad UI and UX design intelligence for multiple platforms and interface types.

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
| Relevant signals | `ui_task`, `design_system`, `multi_platform` |

## Use it when

- The project needs platform-aware UI direction or a broad design reference.
- No more focused design skill fits the task.

## Do not use it when

- Another primary design skill is already active.
- The project has a strict existing design system and needs implementation, not ideation.

## Integration approach

Inspect the supported agent paths and install project-locally. Choose it as the primary design skill rather than stacking several overlapping design packs.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The agent follows the existing brand and component rules.
- Recommendations map to the target platform and framework.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
