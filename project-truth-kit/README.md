# Project Truth Kit

The Project Truth Kit is a set of copy-ready files for client, product, or internal build projects.

Use it when you want coding agents to work from stable project truth instead of scattered notes.

## Files in the kit

| File | Purpose | Template |
|---|---|---|
| `PRODUCT.md` | Product goal, audience, value proposition, flows, and scope | [Open](./PRODUCT.template.md) |
| `RULES.md` | Build rules, design rules, naming rules, and agent behavior rules | [Open](./RULES.template.md) |
| `TASKS.md` | Active tasks, priorities, status, blockers, and next actions | [Open](./TASKS.template.md) |
| `DECISIONS.md` | Important decisions, why they were made, and what changed | [Open](./DECISIONS.template.md) |
| `QA.md` | Review gates, manual QA, risks, and acceptance checks | [Open](./QA.template.md) |
| `HANDOFF.md` | Delivery summary, changed files, known limits, and next steps | [Open](./HANDOFF.template.md) |

## When to use this kit

Use this kit before you ask an agent to build, refactor, debug, or review a project.

It is especially useful when:

- The project has more than one stakeholder
- The agent keeps forgetting important context
- The work spans multiple sessions
- The project has design, content, and code rules
- You need a clean handoff trail
- You are running multiple client projects

## Setup order

1. Copy the six templates into your project root.
2. Rename each file by removing `.template`.
3. Fill `PRODUCT.md` first.
4. Fill `RULES.md` second.
5. Use `TASKS.md` to define the first small task.
6. Add `DECISIONS.md` after the first meaningful choice.
7. Use `QA.md` before merge or delivery.
8. Use `HANDOFF.md` before sending work to another person.

## Agent usage prompt

```txt
Before working on this project, read these files:

- PRODUCT.md
- RULES.md
- TASKS.md
- DECISIONS.md
- QA.md
- HANDOFF.md, if it exists

Then return:
1. What you understand
2. What is missing
3. The safest next task
4. Files you need to inspect
5. Risks before editing

Do not edit until you return a short plan.
```

## Agency operator flow

For agency work, pair this kit with:

1. [Client Brief to Build Brief](../agent-briefs/client-brief-to-build-brief.md)
2. [Repo Audit Brief](../agent-briefs/repo-audit-brief.md)
3. [PR Review Brief](../agent-briefs/pr-review-brief.md)
4. [Delivery QA Brief](../agent-briefs/delivery-qa-brief.md)
5. [Agency Operator Path](../playbook/paths/agency-operator-path.md)

## Rule

If the agent has to guess the project truth, the kit is not ready yet.
