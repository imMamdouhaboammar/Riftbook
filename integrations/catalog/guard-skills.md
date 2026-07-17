# Guard Skills

> **Source:** [amElnagdy/guard-skills](https://github.com/amElnagdy/guard-skills)

## What it is

Provides focused clean-code, test, documentation, WordPress, and WooCommerce review guards.

## Classification

| Field | Value |
|---|---|
| Category | `quality-review` |
| Integration type | Agent Skill Pack |
| Tier | `primary` |
| Install policy | `project-local-auto` |
| Preferred scope | `project` |
| Exclusive group | `None` |
| Selection threshold | `5` |
| Relevant signals | `code_change`, `tests`, `documentation`, `wordpress`, `woocommerce` |

## Use it when

- You need a final self-review layer after the agent writes code, tests, or docs.
- A project needs domain-specific review without adding a heavy runtime.

## Do not use it when

- No matching guard exists for the task.
- The agent would install the entire pack when one guard is enough.

## Integration approach

Browse first with `npx skills add amElnagdy/guard-skills --list`, then install only the matching guard with `--skill`. Verify the Skills CLI and target agent before execution.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The selected guard is discoverable by the agent.
- Running the guard on a known weak diff produces actionable findings.
- The guard does not silently rewrite files.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
