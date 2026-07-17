# Agent Kernel

> **Source:** [imMamdouhaboammar/agent-kernel](https://github.com/imMamdouhaboammar/agent-kernel)

## What it is

Provides shared memory, rule distribution, approvals, episodic recall, hooks, and governance for multiple coding agents.

## Classification

| Field | Value |
|---|---|
| Category | `agent-governance` |
| Integration type | CLI + MCP + Hooks |
| Tier | `primary` |
| Install policy | `conditional-auto` |
| Preferred scope | `project` |
| Exclusive group | `agent-governance` |
| Selection threshold | `6` |
| Relevant signals | `multi_agent`, `long_running`, `shared_rules`, `approval_workflow`, `context_loss` |

## Use it when

- More than one coding agent works on the same repository.
- Rules, decisions, approvals, and memory must survive across sessions.

## Do not use it when

- A single short session does not need persistent governance.
- The repository already has an equivalent memory and approval system.

## Integration approach

Verified upstream supports `npm install -g @mamdouh-aboammar/agent-kernel` or `npx -y @mamdouh-aboammar/agent-kernel`. Prefer a dry-run safe-link and safe-hook flow before applying project changes.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- `agent-kernel doctor` passes.
- Generated rules are inside marked blocks and existing instructions remain intact.
- The approval inbox and memory tools are readable by the selected agents.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
