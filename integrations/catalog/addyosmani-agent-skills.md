# Addy Osmani Agent Skills

> **Source:** [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

## What it is

A production-oriented collection of engineering skills for coding agents.

## Classification

| Field | Value |
|---|---|
| Category | `skill-libraries` |
| Integration type | Engineering Skill Pack |
| Tier | `discovery` |
| Install policy | `reference-only` |
| Preferred scope | `none` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `web_quality`, `performance`, `engineering_task`, `missing_skill` |

## Use it when

- A specific web quality or engineering skill matches the current task.
- You want a maintained source of practical engineering guidance.

## Do not use it when

- The project would receive the entire pack without need.
- Rules duplicate approved project standards.

## Integration approach

List the available skills, select one, inspect its references and scripts, then install it project-locally.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The installed skill has a named owner in ACTIVE_INTEGRATIONS.md.
- Its recommendations are version-compatible with the project.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
