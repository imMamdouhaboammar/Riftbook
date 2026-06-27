# Planning the Build

![WORKFLOW](https://img.shields.io/badge/WORKFLOW-111827?style=flat-square) ![HIGH IMPACT](https://img.shields.io/badge/HIGH%20IMPACT-10B981?style=flat-square)

---

## Why This Matters

The biggest waste of time in agent-assisted development is not slow agents. It is building the wrong thing well.

Agents are fast. They can produce significant amounts of code in a short time. Without planning, that speed amplifies misalignment — you get a lot of work done in the wrong direction.

Planning is not slow. Bad planning is slow. Skipping planning is slower.

---

## The Planning Loop

Before writing any code for a feature or project, establish:

1. **What exactly is being built?**
   One sentence. If you cannot write it in one sentence, the scope is not clear yet.

2. **What does done look like?**
   Define the specific conditions that would make this complete. Not just "the feature works" — what does working mean, specifically?

3. **What could go wrong?**
   Name the three most likely failure modes. This is where most planning skips.

4. **What should the architecture look like?**
   Ask the agent to propose an outline before building. Review it. Correct it. Then build.

---

## The Outline-First Technique

![AGENT MOVE](../assets/badges/agent-move.svg)

Before any significant task, use this prompt:

```
Before writing any code, I want you to propose an outline for how you will approach this task.

Task: [describe the task]

Your outline should include:
- The files you will create or modify
- The key decisions you will make
- Any assumptions you are making about how this should work
- Any questions that would change your approach

Do not write code until I confirm the outline.
```

This takes three to five minutes. It catches architectural problems before they are baked into three hundred lines of code.

---

## What Good Planning Produces

A good planning session produces:
- A clear task description that both you and the agent understand the same way
- An architecture outline that you have reviewed and approved
- An explicit list of what is in scope and what is not
- Updated `TASKS.md` with the current task clearly defined

---

## Ship Check

![SHIP CHECK](../assets/badges/ship-check.svg)

Before building anything significant:

- [ ] Task is written in one clear sentence
- [ ] Done condition is explicit
- [ ] Agent has proposed an outline
- [ ] Outline has been reviewed and approved
- [ ] `TASKS.md` is up to date

---

*← Back to [Core Workflows](./README.md)*
