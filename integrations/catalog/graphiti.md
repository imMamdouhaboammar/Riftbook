# Graphiti

> **Source:** [getzep/graphiti](https://github.com/getzep/graphiti)

## What it is

Builds real-time temporal knowledge graphs for agents that need changing facts, provenance, and historical context.

## Classification

| Field | Value |
|---|---|
| Category | `research-memory` |
| Integration type | Temporal Knowledge Graph Framework |
| Tier | `specialized` |
| Install policy | `manual-only` |
| Preferred scope | `application` |
| Exclusive group | `application-memory` |
| Selection threshold | `6` |
| Relevant signals | `agent_memory`, `temporal_facts`, `provenance`, `application_feature` |

## Use it when

- The product itself needs durable, changing agent memory.
- Facts must retain time, source, and relationship history.

## Do not use it when

- You only need repository context or session notes.
- The team is not prepared to operate the required data infrastructure.

## Integration approach

Treat as application architecture, not a coding-agent plugin. Design data sources, entity policy, retention, privacy, and evaluation before installation.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Current and historical facts can be distinguished.
- Every memory edge has provenance.
- Deletion and retention behavior is tested.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
