# Microsoft GraphRAG

> **Source:** [microsoft/graphrag](https://github.com/microsoft/graphrag)

## What it is

A modular graph-based retrieval system for reasoning over complex document collections.

## Classification

| Field | Value |
|---|---|
| Category | `research-memory` |
| Integration type | RAG Framework |
| Tier | `specialized` |
| Install policy | `manual-only` |
| Preferred scope | `application` |
| Exclusive group | `rag-architecture` |
| Selection threshold | `6` |
| Relevant signals | `document_corpus`, `rag`, `research_task`, `entity_relationships` |

## Use it when

- The product needs corpus-level questions that depend on entities and relationships across documents.
- A normal vector search baseline is insufficient.

## Do not use it when

- You only need codebase navigation or coding-agent memory.
- The team has no evaluation set or indexing budget.

## Integration approach

Treat as a research and application architecture decision. Establish corpus scope, cost, privacy, evaluation questions, and baseline comparisons first.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Answers cite source documents.
- Global and local query behavior is evaluated separately.
- Indexing cost and refresh behavior are measured.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
