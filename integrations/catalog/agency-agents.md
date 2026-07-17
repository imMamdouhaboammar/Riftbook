# Agency Agents

> **Source:** [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)

## What it is

A large roster of role-specific agents across engineering, design, product, marketing, testing, security, and operations.

## Classification

| Field | Value |
|---|---|
| Category | `skill-libraries` |
| Integration type | Specialized Agent Library |
| Tier | `discovery` |
| Install policy | `reference-only` |
| Preferred scope | `none` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `specialized_agent`, `multi_agent`, `domain_specialization` |

## Use it when

- A recurring task benefits from one clearly defined specialist.
- The lead agent needs a bounded reviewer or domain expert.

## Do not use it when

- The agent wants to install the full roster.
- Roles overlap without a clear owner and review flow.

## Integration approach

Select individual agents or divisions only. Define who leads, who reviews, and what artifact each specialist must return.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Only approved agents are installed.
- Each agent has a bounded task and cannot silently expand scope.
- The lead agent reviews all specialist output.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
