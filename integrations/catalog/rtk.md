# RTK

> **Source:** [rtk-ai/rtk](https://github.com/rtk-ai/rtk)

## What it is

Compresses common development command output before it enters the agent context window.

## Classification

| Field | Value |
|---|---|
| Category | `context-efficiency` |
| Integration type | CLI Proxy + Agent Hook |
| Tier | `primary` |
| Install policy | `conditional-auto` |
| Preferred scope | `user-or-project` |
| Exclusive group | `cli-compression` |
| Selection threshold | `6` |
| Relevant signals | `context_pressure`, `test_heavy`, `large_repo`, `verbose_cli` |

## Use it when

- Tests, builds, git, and package commands produce large repetitive output.
- Long sessions are losing context to terminal noise.

## Do not use it when

- Raw output is needed for debugging.
- The environment cannot safely intercept or rewrite commands.

## Integration approach

Verified upstream supports Homebrew, shell, and Cargo installation. Run `rtk --version`, then inspect `rtk init` options before adding hooks.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Raw commands remain accessible.
- Compressed output preserves exit codes and meaningful failures.
- Token-saving statistics appear after real use.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
