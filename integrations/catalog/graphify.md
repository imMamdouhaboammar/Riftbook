# Graphify

> **Source:** [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

## What it is

Turns code, schemas, infrastructure, documents, and media into a queryable project knowledge graph.

## Classification

| Field | Value |
|---|---|
| Category | `code-intelligence` |
| Integration type | Knowledge Graph Skill |
| Tier | `primary` |
| Install policy | `conditional-auto` |
| Preferred scope | `project` |
| Exclusive group | `code-map` |
| Selection threshold | `6` |
| Relevant signals | `mixed_artifacts`, `architecture_task`, `data_schema`, `large_repo`, `knowledge_graph` |

## Use it when

- Understanding the project requires linking code with schemas, infrastructure, or documents.
- A broad project map is needed before implementation or migration.

## Do not use it when

- The task only needs symbol-level code navigation.
- Another project graph is already authoritative.

## Integration approach

Follow the upstream skill setup and create the graph outside source-controlled paths unless the repository policy explicitly allows generated artifacts.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Queries return source-linked nodes.
- Generated graph files are ignored or stored in the approved location.
- The agent checks source files before risky changes.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
