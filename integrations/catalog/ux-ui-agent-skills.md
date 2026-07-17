# UX UI Agent Skills

> **Source:** [plugin87/ux-ui-agent-skills](https://github.com/plugin87/ux-ui-agent-skills)

## What it is

A broad design architecture pack covering tokens, components, accessibility, and framework-aware UI implementation.

## Classification

| Field | Value |
|---|---|
| Category | `design-quality` |
| Integration type | Agent Skill Pack |
| Tier | `specialized` |
| Install policy | `conditional-auto` |
| Preferred scope | `project` |
| Exclusive group | `primary-design-skill` |
| Selection threshold | `6` |
| Relevant signals | `design_system`, `accessibility`, `component_library`, `ui_task` |

## Use it when

- The project needs a design-system or accessibility-heavy UI workflow.
- The team wants structured component and token guidance.

## Do not use it when

- A smaller design skill already covers the task.
- Installing the full pack would add rules unrelated to the project.

## Integration approach

Inspect the upstream skill inventory and install only the relevant design or accessibility modules for the active agent.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The selected skills are listed by the agent.
- Generated tokens match the project's existing format.
- Accessibility guidance maps to concrete WCAG checks.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
