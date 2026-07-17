# Autoresearch

> **Source:** [uditgoenka/autoresearch](https://github.com/uditgoenka/autoresearch)

## What it is

Runs goal-directed modify, verify, keep-or-discard loops for measurable research and engineering targets.

## Classification

| Field | Value |
|---|---|
| Category | `research-memory` |
| Integration type | Autonomous Iteration Skill |
| Tier | `experimental` |
| Install policy | `manual-only` |
| Preferred scope | `project` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `benchmark_goal`, `measurable_iteration`, `research_task` |

## Use it when

- There is a clear metric, bounded search space, and safe verification loop.
- Repeated experiments can be reverted cleanly.

## Do not use it when

- The goal is subjective or lacks a deterministic evaluator.
- The loop could modify production, spend money, or access secrets without supervision.

## Integration approach

Inspect the upstream skill and configure a bounded objective, evaluator, iteration limit, budget, and rollback rule before enabling autonomous execution.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The baseline metric is recorded.
- Each iteration can be reverted.
- The loop stops on limits, errors, or loss of signal.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
