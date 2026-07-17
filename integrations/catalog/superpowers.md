# Superpowers

> **Source:** [obra/superpowers](https://github.com/obra/superpowers)

## What it is

Introduces structured workflows for brainstorming, planning, TDD, debugging, review, and completion verification.

## Classification

| Field | Value |
|---|---|
| Category | `agent-governance` |
| Integration type | Skill Framework + Methodology |
| Tier | `primary` |
| Install policy | `conditional-auto` |
| Preferred scope | `project-or-user` |
| Exclusive group | `development-methodology` |
| Selection threshold | `6` |
| Relevant signals | `feature_work`, `bug_fix`, `multi_step_task`, `serious_project` |

## Use it when

- The team wants disciplined agent behavior rather than ad hoc prompting.
- Feature and bug work should follow explicit planning, tests, review, and verification.

## Do not use it when

- The harness cannot run the supported skills or plugins.
- Existing mandatory process rules conflict and have not been reconciled.

## Integration approach

Use the provider-specific upstream path. For Claude Code, the official marketplace command is `/plugin install superpowers@claude-plugins-official`.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The bootstrap skill activates at session start.
- The agent follows the required workflow before implementation.
- Completion claims include fresh command output.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
