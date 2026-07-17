# SearXNG

> **Source:** [searxng/searxng](https://github.com/searxng/searxng)

## What it is

A self-hosted metasearch engine that aggregates multiple search services without profiling users.

## Classification

| Field | Value |
|---|---|
| Category | `research-memory` |
| Integration type | Self-Hosted Metasearch |
| Tier | `infrastructure` |
| Install policy | `manual-only` |
| Preferred scope | `infrastructure` |
| Exclusive group | `search-backend` |
| Selection threshold | `6` |
| Relevant signals | `research_agent`, `private_search`, `self_hosted_search`, `application_feature` |

## Use it when

- A research agent or product needs a controlled search backend.
- Privacy, source diversity, or self-hosting is a real requirement.

## Do not use it when

- The task only needs occasional web research.
- The team cannot operate, secure, and monitor a search service.

## Integration approach

Treat as infrastructure. Review deployment, rate limits, engines, legal constraints, privacy, logging, and abuse controls before setup.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The instance returns results from approved engines.
- Secrets and logs follow policy.
- Rate limiting and health checks work.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
