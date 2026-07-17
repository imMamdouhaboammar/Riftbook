# Harness

> **Source:** [revfactory/harness](https://github.com/revfactory/harness)

## What it is

Designs domain-specific agent teams and generates specialized agents and the skills they use.

## Classification

| Field | Value |
|---|---|
| Category | `agent-governance` |
| Integration type | Meta-Skill |
| Tier | `specialized` |
| Install policy | `manual-only` |
| Preferred scope | `project` |
| Exclusive group | `agent-team-builder` |
| Selection threshold | `6` |
| Relevant signals | `multi_agent`, `custom_agent_team`, `domain_specialization` |

## Use it when

- The project needs a stable team of specialized agents with explicit roles and handoffs.
- A recurring workflow justifies generating project-specific agents.

## Do not use it when

- A single lead agent can complete the task.
- The team design would add more coordination than useful work.

## Integration approach

Use only after writing the team topology, responsibilities, inputs, outputs, and review ownership. Inspect generated files before activation.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Every generated agent has one bounded responsibility.
- Handoffs name artifacts, acceptance criteria, and reviewers.
- No agent can merge or deploy without the project's approval policy.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
