# React Error Boundary

> **Source:** [bvaughn/react-error-boundary](https://github.com/bvaughn/react-error-boundary)

## What it is

Provides reusable React error boundaries, fallback rendering, reset behavior, and error callbacks.

## Classification

| Field | Value |
|---|---|
| Category | `runtime-libraries` |
| Integration type | React Library |
| Tier | `primary` |
| Install policy | `dependency-auto` |
| Preferred scope | `project` |
| Exclusive group | `react-error-boundary` |
| Selection threshold | `5` |
| Relevant signals | `react`, `missing_error_boundary` |

## Use it when

- A React app lacks a runtime boundary around important UI surfaces.
- The product needs a fallback and retry path instead of a blank screen.

## Do not use it when

- The framework already provides the correct route-level boundary and an extra library adds no value.
- The agent assumes boundaries catch event-handler, async, or server errors.

## Integration approach

Install through the project's existing package manager only after checking React and framework versions. Prefer framework-native boundaries when they are the correct layer.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- A controlled test component triggers the fallback.
- Reset or retry behavior works.
- Development logging receives the error and component stack.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
