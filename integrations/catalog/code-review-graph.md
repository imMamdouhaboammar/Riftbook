# Code Review Graph

> **Source:** [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)

## What it is

Builds a persistent local graph for targeted reviews, affected-flow analysis, and test-gap discovery.

## Classification

| Field | Value |
|---|---|
| Category | `code-intelligence` |
| Integration type | CLI + MCP |
| Tier | `primary` |
| Install policy | `conditional-auto` |
| Preferred scope | `project` |
| Exclusive group | `review-graph` |
| Selection threshold | `6` |
| Relevant signals | `review_task`, `large_diff`, `large_repo`, `high_risk_change` |

## Use it when

- A PR touches important flows or multiple modules.
- The reviewer needs blast radius and targeted context rather than a broad summary.

## Do not use it when

- There is no meaningful diff to review.
- CodeGraph or another review graph already covers this exact workflow.

## Integration approach

Use the current upstream CLI or MCP installation path. Initialize it only after confirming the repo size and review need justify a persistent graph.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The graph indexes the current revision.
- A diff query names affected files or symbols with source evidence.
- The review output points to tests or gaps rather than generic advice.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
