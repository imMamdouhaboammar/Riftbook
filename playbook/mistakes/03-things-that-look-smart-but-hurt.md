# Things That Look Smart But Hurt

![RED FLAG](../../playbook/assets/badges/red-flag.svg) ![FIELD TESTED](https://img.shields.io/badge/FIELD%20TESTED-10B981?style=flat-square)

---

These are the moves that feel productive, look sophisticated, and consistently cause problems. They are harder to avoid than obvious mistakes because they come with a convincing rationale.

---

## Running all agents simultaneously "for more options"

**What it looks like:** Opening Claude Code, Codex, and Gemini with the same prompt to compare their approaches before picking the best one.

**Why it feels smart:** More perspectives, better chance of finding the right approach.

**Why it hurts:** Each agent makes assumptions about architecture, structure, and conventions. When you pick one approach, the assumptions it carries conflict with the assumptions in other parts of the codebase. The "best option" comparison turns into a hidden compatibility audit.

**Better move:** Pick a lead. Use it. Bring in support agents for specific sub-tasks, not for parallel architecture proposals.

---

## Asking the agent to "do its best" without a spec

**What it looks like:** "Here is the goal, build it however you think is best."

**Why it feels smart:** You trust the agent. You want to see what it comes up with.

**Why it hurts:** "Its best" is not defined by your project's constraints — it is defined by patterns in its training. You will get something technically reasonable that does not match your actual needs. Correcting it takes longer than specifying it upfront.

**Better move:** Write a one-paragraph spec first. Even a rough one. The agent's output will be much closer to what you actually want.

---

## Overloading context with documentation

**What it looks like:** Pasting API docs, README files, your whole `TASKS.md`, and three related files into the prompt before asking a question.

**Why it feels smart:** More context, better answer.

**Why it hurts:** More context is not always better. Agents perform better with relevant, focused context than with large amounts of mixed information. The relevant signal gets diluted by the noise.

**Better move:** Give the agent only what it needs for the specific task. One file, one spec, one constraint. If it needs more, it will ask.

---

## Refactoring as a warm-up

**What it looks like:** Before starting the real task, cleaning up the codebase a bit, improving naming, reorganizing files.

**Why it feels smart:** A clean codebase makes the real work easier.

**Why it hurts:** Refactoring changes the map the agent is working with. If the refactoring introduces any inconsistency, or if the agent's model of the codebase does not update cleanly, the subsequent work is built on a slightly wrong foundation. Also, refactoring is a great way to spend an hour doing something that felt useful without making the actual progress.

**Better move:** If a refactor is needed, make it a deliberate, scoped task — not a warm-up. Document what changed in `TASKS.md`.

---

## Keeping long sessions alive past their useful life

**What it looks like:** A three-hour session where the agent's output quality dropped an hour ago but you are "almost done."

**Why it feels smart:** Momentum. Stopping and restarting feels like lost progress.

**Why it hurts:** Degraded context produces degraded output. The hour of work after context saturation often contains inconsistencies that take two hours to fix in the next session.

**Better move:** Set natural breakpoints. At the end of each feature or major task, update your context files and either end the session or explicitly re-anchor the agent with fresh context.

---

## Using complexity as a signal of quality

**What it looks like:** An agent produces a sophisticated, multi-layered solution with careful abstractions, well-named interfaces, and elegant patterns.

**Why it feels smart:** It looks like good engineering.

**Why it hurts:** Complexity in a system that does not need it is not quality — it is overhead. Every abstraction is a place where something can go wrong. Every interface is something that needs to be understood and maintained. Simple systems that work are better than complex ones.

**Better move:** When the agent produces something complex, ask: "What is the simplest version of this that would work?" Compare the two. Often the simpler version is the right one.

---

## Accepting "no issues found" as a sign of quality

**What it looks like:** A review tool runs and finds nothing. The agent says the code is clean. Everything passes.

**Why it feels smart:** Nothing flagged means nothing wrong.

**Why it hurts:** Tools and agents find categories of issues they are designed to find. They do not find issues they are not designed for. "No issues found" means "no issues this tool knows to look for" — not "no issues."

**Better move:** After automated review, always do one manual check with a specific question: "What would break this in production?" Look for one specific edge case. It is a different kind of review than the automated kind and it catches different things.

---

*← Back to [Mistakes](./README.md)*
