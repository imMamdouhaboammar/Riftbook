# React Doctor

> **Source:** [millionco/react-doctor](https://github.com/millionco/react-doctor)

## What it is

Audits React code for structural, state, effect, performance, accessibility, and security problems.

## Classification

| Field | Value |
|---|---|
| Category | `quality-review` |
| Integration type | React Audit CLI + Skill + CI |
| Tier | `primary` |
| Install policy | `project-local-auto` |
| Preferred scope | `project` |
| Exclusive group | `None` |
| Selection threshold | `5` |
| Relevant signals | `react` |

## Use it when

- The repository contains React or a React framework.
- AI-written UI needs a repeatable quality check before merge.

## Do not use it when

- The project is not React-based.
- The agent tries to treat the audit as a replacement for tests and manual QA.

## Integration approach

Verified upstream audit command: `npx react-doctor@latest`. Skill install: `npx react-doctor@latest install`. CI setup is separate and should require explicit approval.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The audit completes against the intended workspace.
- JSON or console output identifies exact files and rules.
- The fix pass is followed by lint, typecheck, tests, and a second audit.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
