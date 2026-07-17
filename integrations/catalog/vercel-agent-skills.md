# Vercel Agent Skills

> **Source:** [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)

## What it is

Vercel's official collection of agent skills for web development and platform workflows.

## Classification

| Field | Value |
|---|---|
| Category | `skill-libraries` |
| Integration type | Official Skill Collection |
| Tier | `primary` |
| Install policy | `conditional-auto` |
| Preferred scope | `project` |
| Exclusive group | `None` |
| Selection threshold | `6` |
| Relevant signals | `vercel`, `nextjs`, `react`, `web_quality` |

## Use it when

- The project uses Vercel, Next.js, React, or a matching official workflow.
- An official skill can replace generic third-party guidance.

## Do not use it when

- No Vercel or matching web stack is present.
- The full collection would be installed instead of one relevant skill.

## Integration approach

Inspect the current skill list and install only the official skill that matches the detected stack and task.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- The source is the official Vercel repository.
- The skill matches the project's framework version and deployment model.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
