# Planning With Files

> **Source:** [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files)

## What it is

Persists plans, progress, and completion state in files so long-running agent work survives context loss.

## Classification

| Field | Value |
|---|---|
| Category | `agent-governance` |
| Integration type | Agent Skill + Plugin |
| Tier | `primary` |
| Install policy | `project-local-auto` |
| Preferred scope | `project` |
| Exclusive group | `planning-system` |
| Selection threshold | `5` |
| Relevant signals | `long_running`, `multi_step_task`, `context_loss`, `multi_agent` |

## Use it when

- The task spans many steps or sessions.
- The agent may compact, clear context, or hand work to another agent.

## Do not use it when

- The task is a tiny one-shot edit.
- The repo already has a strict planning file protocol that would be duplicated.

## Integration approach

Verified standard skill command: `npx skills add OthmanAdi/planning-with-files --skill planning-with-files`. Use project scope unless a user-wide policy is explicitly desired.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Planning files are created in the intended project location.
- The agent can resume from the files after a context reset.
- The completion gate refuses to finish while required tasks remain open.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
