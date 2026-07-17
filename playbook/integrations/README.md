# Integrations: Build the Agent Capability Stack

A practical lesson track for giving a coding agent better tools without turning the repository into a pile of plugins.

The central idea is simple:

> Do not tell the agent to install everything. Give it a trusted candidate registry and a policy for selecting the smallest useful stack.

## Lessons

| # | Lesson | What it teaches |
|---|---|---|
| 1 | [Discover Before You Install](./01-discover-before-install.md) | Inspect the project, task, and existing capabilities first |
| 2 | [Choose the Smallest Capability Stack](./02-choose-the-smallest-capability-stack.md) | Score fit, resolve overlap, and select one owner per capability |
| 3 | [Install and Verify Safely](./03-install-and-verify-safely.md) | Verify current upstream commands, scope, rollback, and health |
| 4 | [Operate the Agent Superstack](./04-operate-the-agent-superstack.md) | Use tools at the right phase instead of loading everything every session |
| 5 | [Maintain and Remove Integrations](./05-maintain-and-remove-integrations.md) | Update, measure, retire, and clean integrations over time |

## Practice

[Open the Integration Selection Lab](../labs/integration-selection-lab.md).

## Working files

- [Integration registry](../../integrations/registry.json)
- [Selection policy](../../integrations/selection-policy.md)
- [Compatibility matrix](../../integrations/compatibility-matrix.md)
- [Bootstrap prompt](../../integrations/prompts/agent-capability-bootstrap.md)
- [Active integrations template](../../integrations/templates/ACTIVE_INTEGRATIONS.template.md)
- [Read-only selector](../../scripts/integration-selector.mjs)

## Outcome

After this track, the agent should be able to:

- Detect the actual project needs
- Compare candidate tools by capability
- Reject popular but irrelevant tools
- Avoid overlapping skills and MCP servers
- Install reversible project-local integrations
- Stop for approval on global, credentialed, or infrastructure changes
- Prove that each integration changes real work
- Remove tools that become unused or redundant
