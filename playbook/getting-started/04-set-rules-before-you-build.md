# Set Rules Before You Build

![FOUNDATION](https://img.shields.io/badge/FOUNDATION-111827?style=flat-square) ![HIGH IMPACT](https://img.shields.io/badge/HIGH%20IMPACT-10B981?style=flat-square)

---

## Why This Matters

Agents are not opinionated by default. They are adaptive. They try to match what they think you want, and when your wants are not explicit, they fill the gap with assumptions.

Those assumptions are not always wrong. But they are inconsistent. The agent may use named exports today and default exports tomorrow. It may add TypeScript strict checks in one file and skip them in another. It may choose different state management patterns depending on what the previous file looked like.

This drift is not the agent's fault. It is the absence of rules.

Rules are what make agent behavior predictable. A coding agent with clear rules writes consistent code. One without rules writes whatever seems appropriate at the time — which changes with every session.

---

## What Rules Actually Are

Rules are explicit behavioral instructions for the agent. They define:

- What the agent should always do
- What the agent should never do
- How the agent should handle ambiguous decisions
- What the agent should ask before doing

They are not suggestions. They are the behavioral contract between you and the agent for this project.

A good set of rules removes a large class of agent errors before they happen.

---

## The `RULES.md` File

Create a `RULES.md` at the project root before writing any code.

```markdown
# Rules

These rules apply to all coding work on this project.
Follow them without exception unless I explicitly override one.

## Always

- Write TypeScript in strict mode
- Use named exports only — no default exports
- Write unit tests for any new business logic
- Keep files under 300 lines — split if they grow beyond that
- Use descriptive variable names — no single-letter variables outside loop counters
- Add a comment explaining *why* when making a non-obvious decision

## Never

- Modify authentication logic without explicit instruction
- Add a new dependency without explaining why it is needed and what it replaces
- Leave `any` types in TypeScript files
- Remove existing tests
- Refactor code outside the scope of the current task

## Ask First

- Before changing the folder structure
- Before changing the data model
- Before adding a new API route that was not in the task
- Before changing any shared utility

## Code Style

- Functional components only (React)
- No class components
- Prefer `const` over `let` — never `var`
- Async/await over `.then()` chains

## Quality

- After completing a task, run the relevant linter before reporting done
- Flag any section of code you are not confident about
- If a task would take more than 100 lines, propose an outline first
```

---

## Why Most People Skip This

![MY MISTAKE](../../playbook/assets/badges/my-mistake.svg)

Most people skip `RULES.md` for one of two reasons:

1. **They think the rules are obvious.** They are not obvious to the agent. The agent has no way to know your conventions unless you tell it.

2. **They think rules will slow down the agent.** Rules do not slow agents down. They remove the correction cycles that come from inconsistent output. A project with rules is faster overall, even if individual sessions feel slightly more structured.

I skipped rules on three early projects. All three needed significant refactoring within a week because naming conventions, file structure, and state management were all over the place. The fourth project I wrote rules first. It took fifteen minutes. The codebase stayed consistent for months.

---

## Types of Rules Worth Having

Not every rule matters equally. These categories cover the most impactful areas:

### Structural rules
How the codebase is organized. File naming, folder conventions, where certain types of code live.

### Code quality rules
TypeScript settings, testing requirements, complexity limits.

### Behavioral rules
What the agent should ask before doing, what it should never do without explicit permission.

### Review rules
What the agent should check before calling a task done.

### Communication rules
How the agent should report what it did, how it should flag uncertainty.

---

## Starting Small

You do not need a perfect `RULES.md` on day one. Start with five rules and add more as you discover what the agent gets wrong.

The best rules are written reactively: when the agent does something wrong that you did not expect, add a rule that prevents it next time.

Over time, your `RULES.md` becomes a record of what you have learned about working with agents on your type of projects.

![PRO TIP](../../playbook/assets/badges/pro-tip.svg)

> **Template rules for any project:** Start with these five as your baseline.
> 1. Never leave `TODO` comments without adding a task to `TASKS.md`
> 2. Flag uncertainty — do not silently guess
> 3. Ask before refactoring anything outside the current task scope
> 4. After each task, state what you did and what the next logical step would be
> 5. If a task is ambiguous, propose two interpretations and ask which one I mean

---

## The `RULES.md` Is a Living Document

Update it throughout the project. When you correct the agent on something, add a rule. When you see a pattern that keeps coming up, formalize it.

At the end of a project, your `RULES.md` is worth reviewing. The rules that mattered most should make it into your default template for future projects.

---

## Copy This

![COPY THIS](../../playbook/assets/badges/copy-this.svg)

Use this to introduce rules to the agent at the start of a session:

```
Before we continue, please read and confirm the following rules for this project.
These apply to all code you write during this session.

[paste RULES.md content]

Confirm you have read these.
If any rule seems to conflict with what I ask you to do today, flag the conflict
before proceeding — do not silently override a rule.
```

---

## Ship Check

![SHIP CHECK](../../playbook/assets/badges/ship-check.svg)

- [ ] `RULES.md` exists in the project root
- [ ] At least 5 rules written
- [ ] At least one "ask first" rule defined
- [ ] At least one "never" rule for something project-critical
- [ ] Agent has confirmed it has read the rules before the first coding session

---

*← Back to [Getting Started](./README.md)*
