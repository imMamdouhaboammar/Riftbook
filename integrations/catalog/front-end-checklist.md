# Front-End Checklist

> **Source:** [thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist)

## What it is

A broad release checklist for modern frontend quality, semantics, performance, accessibility, SEO, and compatibility.

## Classification

| Field | Value |
|---|---|
| Category | `quality-review` |
| Integration type | Checklist + Reference |
| Tier | `primary` |
| Install policy | `reference-only` |
| Preferred scope | `none` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `frontend`, `release`, `quality_gate` |

## Use it when

- A frontend feature or site is approaching release.
- The team needs a human-readable checklist beyond automated tests.

## Do not use it when

- The agent treats every checklist item as mandatory regardless of project type.
- The checklist replaces actual testing.

## Integration approach

Use as a scoped review reference or convert only relevant items into the project's QA checklist. No runtime install is required.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Every selected item has evidence or a recorded exception.
- Framework-specific checks are added where the generic checklist is insufficient.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
