# Agent Briefs

Agent briefs are copy-ready task documents for AI coding agents.

Use them when you want the agent to work with a clear goal, inputs, rules, expected output, and review steps instead of a vague request.

## Available briefs

| Brief | Use it when | Link |
|---|---|---|
| Repo Audit Brief | You want the agent to inspect a repository and report issues before changing code | [Open](./repo-audit-brief.md) |
| Refactor Brief | You want a safer refactor with scope, constraints, and verification | [Open](./refactor-brief.md) |
| Bug Fix Brief | You want the agent to diagnose and fix a specific bug | [Open](./bug-fix-brief.md) |
| Frontend Rebuild Brief | You want the agent to rebuild or polish a frontend section without losing design intent | [Open](./frontend-rebuild-brief.md) |
| PR Review Brief | You want the agent to review a pull request or local diff before merge | [Open](./pr-review-brief.md) |

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

- [The Real Vibe Coding Playbook](../playbook/README.md)
- [Workflows](../workflows/README.md)
- [Templates](../templates/README.md)
- [Review Guide](../REVIEW.md)
