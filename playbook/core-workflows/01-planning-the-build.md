# Planning the Build

![01 - Planning the Build](../assets/lesson-heroes/01-planning-the-build.svg)

| Level | Duration | Path | Prerequisites | Tools Mentioned |
|---|---|---|---|---|
| Intermediate | 5 mins | Core Workflows | Lesson 00, Lesson 01 | Claude Code |

### Active Signals in this Lesson
- ![AGENT MOVE](../assets/badges/agent-move.svg) · ![COPY THIS](../assets/badges/copy-this.svg)

---

## Why This Matters

The biggest waste of time in agent-assisted development is not slow agents. It is building the wrong thing well.

Agents are fast. They can produce significant amounts of code in a short time. Without planning, that speed amplifies misalignment — you get a lot of work done in the wrong direction.

Planning is not slow. Bad planning is slow. Skipping planning is slower.

---

## Before You Plan

Before formulating a plan or starting a build session, verify that you have completed the prerequisite setup from the **Getting Started** path:

- [ ] **MVP Spec:** An approved, locked-down MVP specification exists.
- [ ] **PRODUCT.md:** The project's core purpose and scope are recorded.
- [ ] **STACK_DECISION.md:** The technology stack and constraints are defined.
- [ ] **Non-goals:** The non-goals and exclusions are explicit in the spec.
- [ ] **First Slice:** The first actionable implementation slice has been identified.
- [ ] **Repo Inspection:** The coding agent has physically inspected the workspace directory structure and existing code files.

![COPY THIS](../assets/badges/copy-this.svg)

Copy this planning prompt into your lead agent to create your build plan:

```
Use the approved MVP spec and project truth files to produce a build plan. Do not change scope. Do not add features. If a decision is missing, add it to OPEN_QUESTIONS.md.
```

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

![AGENT MOVE](../assets/badges/agent-move.svg) · ![COPY THIS](../assets/badges/copy-this.svg)

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

<p align="center">
  <a href="./README.md">
    <img src="../assets/navigation/back-to-index.svg" alt="View Index" />
  </a>
  <a href="./02-working-with-multiple-agents.md">
    <img src="../assets/navigation/next-lesson.svg" alt="Next Lesson" />
  </a>
</p>
