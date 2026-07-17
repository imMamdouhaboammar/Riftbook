# Awesome Agent Skills

> **Source:** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## What it is

A curated index of official and community agent skills across major coding tools.

## Classification

| Field | Value |
|---|---|
| Category | `skill-libraries` |
| Integration type | Curated Skill Index |
| Tier | `discovery` |
| Install policy | `reference-only` |
| Preferred scope | `none` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `missing_skill`, `official_skill`, `discovery` |

## Use it when

- You need to discover an official skill from a framework or vendor.
- You want to compare sources before installing.

## Do not use it when

- The agent proposes installing the index itself or copying all entries.
- The skill source cannot be traced to an upstream owner.

## Integration approach

Use this only for discovery. Follow each skill to its original repository and inspect that source before installation.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The final skill is installed from its original source.
- The selected version and license are recorded.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
