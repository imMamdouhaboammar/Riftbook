# Impeccable

> **Source:** [pbakaus/impeccable](https://github.com/pbakaus/impeccable)

## What it is

Adds a design language, frontend commands, live iteration, and deterministic anti-slop detectors.

## Classification

| Field | Value |
|---|---|
| Category | `design-quality` |
| Integration type | Design Skill + CLI + Detectors |
| Tier | `primary` |
| Install policy | `project-local-auto` |
| Preferred scope | `project` |
| Exclusive group | `primary-design-skill` |
| Selection threshold | `5` |
| Relevant signals | `frontend`, `ui_task`, `design_system`, `landing_page` |

## Use it when

- The project needs structured design context and repeated audit or polish passes.
- The team wants deterministic frontend design checks in addition to agent guidance.

## Do not use it when

- There is no UI work.
- Another primary design system is already active and the overlap is not intentional.

## Integration approach

Verified upstream quick start: `npx impeccable install`, then run `/impeccable init` in the coding tool. Prefer provider and project scope flags when automating.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The selected provider discovers the skill.
- Project design context files are generated or linked without overwriting approved content.
- An audit or critique command returns concrete issues.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
