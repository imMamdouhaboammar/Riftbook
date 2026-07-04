# Agency Operator Path

**Path Profile:** Agency Operator | **Length:** 11 Lessons + Operating System

---

**This path is for you if:** You run multiple projects or clients at the same time and want coding agents to work through a repeatable system instead of scattered prompts.

Agency operators have a different problem than solo builders: they cannot hold the full context of every project in their head at once. The system needs to hold it.

This path is not about using more agents. It is about making agent work predictable enough for client delivery.

---

## Your reading order

### Foundation, non-negotiable

0. [Build the Project Truth Before You Build](../getting-started/00-step-zero-build-the-project-truth.md) - build the truth layer first
1. [From MVP Idea to Agent-Ready Spec](../getting-started/01-turn-your-mvp-idea-into-an-agent-ready-spec.md) - systemize this for every client
2. [Choose Your Lead Agent](../getting-started/02-choose-your-lead-agent.md) - choose the lead builder for client projects
3. [Build Your Default Stack](../getting-started/03-build-your-default-stack.md) - your stack is an agency asset
4. [Set Rules Before You Build](../getting-started/04-set-rules-before-you-build.md) - rules templates save hours per client

### Workflows that scale

5. [Planning the Build](../core-workflows/01-planning-the-build.md)
6. [Working with Multiple Agents](../core-workflows/02-working-with-multiple-agents.md) - critical for parallel workstreams
7. [Reviewing Agent Output](../core-workflows/04-reviewing-agent-output.md)
8. [Shipping with Confidence](../core-workflows/05-shipping-with-confidence.md)

### Mistakes that hit agencies hardest

9. [Common Vibe Coding Mistakes](../mistakes/01-common-vibe-coding-mistakes.md)
10. [Things That Look Smart But Hurt](../mistakes/03-things-that-look-smart-but-hurt.md)

---

## The agency operator's core principle

**The system works. You oversee.**

Your job is to build a system that can handle execution reliably, then spend your energy on judgment: client communication, scope decisions, quality calls, and strategic direction.

If you are manually managing every agent interaction on every project, you have not built a system. You have built a complicated job.

---

## The agency AI operating system

Use this operating system for every client project.

| Stage | Goal | Agent brief |
|---|---|---|
| Intake | Turn messy client input into project truth | [Client Brief to Build Brief](../../agent-briefs/client-brief-to-build-brief.md) |
| Project truth | Create stable files the agent can read every session | [Project Truth Kit](../../project-truth-kit/README.md) |
| Audit | Understand the repo or project before changing it | [Repo Audit Brief](../../agent-briefs/repo-audit-brief.md) |
| Plan | Convert scope into small commits and review gates | [Refactor Brief](../../agent-briefs/refactor-brief.md) when cleanup is needed |
| Build | Execute the smallest useful change | Use the relevant workflow or task brief |
| Frontend | Rebuild or polish UI without losing intent | [Frontend Rebuild Brief](../../agent-briefs/frontend-rebuild-brief.md) |
| Fix | Diagnose bugs from root cause | [Bug Fix Brief](../../agent-briefs/bug-fix-brief.md) |
| Review | Check risk, affected flows, and missing tests | [PR Review Brief](../../agent-briefs/pr-review-brief.md) |
| Delivery | Verify the work before client handoff | [Delivery QA Brief](../../agent-briefs/delivery-qa-brief.md) |

---

## Default client project files

For every client project, create these files or their equivalent.

| File | Purpose | Template |
|---|---|---|
| `PRODUCT.md` | Product goal, audience, value proposition, core flows | [Template](../../project-truth-kit/PRODUCT.template.md) |
| `RULES.md` | Coding rules, design rules, naming rules, constraints | [Template](../../project-truth-kit/RULES.template.md) |
| `TASKS.md` | Active tasks, status, priorities, next actions | [Template](../../project-truth-kit/TASKS.template.md) |
| `DECISIONS.md` | Important decisions and why they were made | [Template](../../project-truth-kit/DECISIONS.template.md) |
| `QA.md` | Review checklist, manual QA, known risks | [Template](../../project-truth-kit/QA.template.md) |
| `HANDOFF.md` | What was delivered, what changed, what the client should know | [Template](../../project-truth-kit/HANDOFF.template.md) |

The agent should read these before acting. If they do not exist, create them before scaling the work.

---

## Weekly agency cadence

Use this cadence when multiple projects are active.

### Monday: project truth refresh

- Update `TASKS.md`
- Check if client goals changed
- List blocked items
- Reconfirm priorities

### Before each build session

- Read `PRODUCT.md`, `RULES.md`, and `TASKS.md`
- Pick one narrow task
- Ask the agent for a plan before edits
- Keep commits small

### Before each delivery

- Run PR Review Brief
- Run Delivery QA Brief
- Update `HANDOFF.md`
- Send only what is verified

### End of week

- Update `DECISIONS.md`
- Move unresolved issues into next week
- Document what the agent got wrong repeatedly
- Improve rules before the next cycle

---

## What makes this scalable

- Standardized context files per client
- A default stack that applies unless explicitly changed
- Agent briefs instead of vague prompts
- Review gates before merge and delivery
- Clear handoff points where you audit and approve before the next phase
- A project memory trail that survives team changes and long pauses

---

## What to avoid

- Starting from a client WhatsApp message and asking the agent to build immediately
- Letting every project use different rules with no reason
- Running multiple agents without one lead agent
- Accepting UI changes without visual QA
- Shipping without a handoff note
- Mixing refactor, bug fix, and feature work in the same commit
- Letting the agent invent project context that should be written down

---

## First task for agency operators

Use this sequence on one real client project:

1. Copy [Project Truth Kit](../../project-truth-kit/README.md) templates into the project.
2. Create `PRODUCT.md`, `RULES.md`, and `TASKS.md` first.
3. Run [Client Brief to Build Brief](../../agent-briefs/client-brief-to-build-brief.md).
4. Run [Repo Audit Brief](../../agent-briefs/repo-audit-brief.md) if a repo already exists.
5. Ask the agent for a 5-commit improvement plan.
6. Execute one commit only.
7. Run [PR Review Brief](../../agent-briefs/pr-review-brief.md).
8. Update `HANDOFF.md`.

Do not scale to all clients until this works once.

---

*← Back to [Paths](./README.md)*
