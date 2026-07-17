# Caveman

> **Source:** [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

## What it is

Reduces verbose agent output so long coding sessions consume less context.

## Classification

| Field | Value |
|---|---|
| Category | `context-efficiency` |
| Integration type | Communication Skill |
| Tier | `optional` |
| Install policy | `conditional-auto` |
| Preferred scope | `user-or-project` |
| Exclusive group | `response-compression` |
| Selection threshold | `6` |
| Relevant signals | `context_pressure`, `verbose_agent`, `long_running` |

## Use it when

- The agent's explanations consume more context than the work requires.
- Long sessions need compact progress, review, and handoff notes.

## Do not use it when

- The task needs detailed teaching or stakeholder-facing documentation.
- Compressed language would hide risk, uncertainty, or test evidence.

## Integration approach

Install only for agents and sessions where terse output is desired. Keep verification, risk, and failure details exempt from compression.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The agent remains understandable.
- Test results, risks, and file paths are not omitted.
- User-facing artifacts retain their requested tone and detail.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
