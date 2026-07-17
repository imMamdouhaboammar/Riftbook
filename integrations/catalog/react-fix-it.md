# React Fix It

> **Source:** [MicheleBertoli/react-fix-it](https://github.com/MicheleBertoli/react-fix-it)

## What it is

Explores generating tests from captured React errors.

## Classification

| Field | Value |
|---|---|
| Category | `runtime-libraries` |
| Integration type | Experimental React Tool |
| Tier | `reference` |
| Install policy | `manual-only` |
| Preferred scope | `none` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `react`, `test_generation_experiment` |

## Use it when

- You are studying error-driven test generation in a sandbox.
- The current upstream compatibility and maintenance status have been checked.

## Do not use it when

- A production project needs a maintained testing path.
- The agent cannot verify compatibility with the current React and test stack.

## Integration approach

Reference only by default. Do not install until the agent verifies current maintenance, package compatibility, and a safe sandbox plan.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The experiment is isolated from production.
- Generated tests fail before the fix and pass after it.
- No generated test asserts implementation details blindly.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
