# Agent Briefs

Agent briefs are copy-ready task documents for AI coding agents.

Use them when you want the agent to work with a clear goal, inputs, rules, expected output, and review steps instead of a vague request.

## Available briefs

| Brief | Use it when | Link |
|---|---|---|
| Client Brief to Build Brief | You need to turn loose project notes into an agent-ready build plan | [Open](./client-brief-to-build-brief.md) |
| Repo Audit Brief | You want the agent to inspect a repository and report issues before changing code | [Open](./repo-audit-brief.md) |
| Refactor Brief | You want a safer refactor with scope, constraints, and verification | [Open](./refactor-brief.md) |
| Bug Fix Brief | You want the agent to diagnose and fix a specific bug | [Open](./bug-fix-brief.md) |
| Frontend Rebuild Brief | You want the agent to rebuild or polish a frontend section without losing design intent | [Open](./frontend-rebuild-brief.md) |
| PR Review Brief | You want the agent to review a pull request or local diff before merge | [Open](./pr-review-brief.md) |
| Delivery QA Brief | You want to verify work before handoff or delivery | [Open](./delivery-qa-brief.md) |

## Agency operator flow

For agency work, use this order:

1. [Client Brief to Build Brief](./client-brief-to-build-brief.md)
2. [Repo Audit Brief](./repo-audit-brief.md), if a repo exists
3. [Refactor Brief](./refactor-brief.md), if cleanup is needed
4. [Frontend Rebuild Brief](./frontend-rebuild-brief.md), if UI quality matters
5. [Bug Fix Brief](./bug-fix-brief.md), for specific defects
6. [PR Review Brief](./pr-review-brief.md), before merge
7. [Delivery QA Brief](./delivery-qa-brief.md), before handoff

## How to use an agent brief

1. Pick the closest brief.
2. Replace placeholders with your project details.
3. Add files, screenshots, logs, or links the agent should inspect.
4. Paste the brief into your coding agent.
5. Ask the agent to return a plan before editing.
6. Review the output before accepting changes.

## Good brief rules

A useful agent brief should include:

- Clear goal
- Current problem
- Files or areas to inspect
- Constraints
- What the agent may change
- What the agent must not change
- Expected output
- Verification steps
- Manual review checklist

## Related

- [Agency Operator Path](../playbook/paths/agency-operator-path.md)
- [The Real Vibe Coding Playbook](../playbook/README.md)
- [Workflows](../workflows/README.md)
- [Templates](../templates/README.md)
- [Review Guide](../REVIEW.md)
