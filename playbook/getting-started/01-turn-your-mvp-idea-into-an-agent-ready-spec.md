<p align="center">
  <img src="../assets/lesson-heroes/01-turn-your-mvp-idea-into-an-agent-ready-spec.svg" alt="Lesson 01 Hero" width="100%" />
</p>

# From MVP Idea to Agent-Ready Spec

> **Don’t ask the agent to build before you teach it what problem is worth solving.**

| Level | Duration | Path | Prerequisites | Tools Mentioned |
|---|---|---|---|---|
| Beginner | 7 mins | Start Here | Lesson 00 | Claude Code, Spec Kit, Delegate Team, TDD |

### Active Signals in this Lesson
- ![DO THIS FIRST](../assets/badges/do-this-first.svg) · ![MENTAL MODEL](../assets/badges/mental-model.svg) · ![COPY THIS](../assets/badges/copy-this.svg) · ![AGENT MOVE](../assets/badges/agent-move.svg) · ![DON'T BREAK](../assets/badges/dont-break.svg) · ![SHIP CHECK](../assets/badges/ship-check.svg)

---

## Why This Matters

Most people use coding agents too early.

They open a terminal agent or Cursor pane with a half-shaped idea, write a prompt like "build me a freelancer dashboard app," and expect the agent to turn that raw idea into a production-grade product.

That is where the drift starts. 

Without a clear problem definition or scope boundary, the coding agent is forced to guess. It makes assumptions about your database schema, user flows, and stack. Within an hour, you are fighting context bloat, refactoring code that should never have been written, and trying to fix bugs in a solution you didn't actually want.

The first step is not opening the coding agent. It is explaining the problem well enough that the agent can stop guessing.

---

## Core Mental Model: Thinking Client vs Coding Agent

![MENTAL MODEL](../assets/badges/mental-model.svg)

To build reliably with AI, you must separate **thinking** from **building**. These are two different phases that require different roles and distinct contexts:

1. **AI Client for Thinking (Product Thinking Partner)**
   * **Tools:** ChatGPT, Claude Web UI, Gemini Advanced.
   * **Job:** Act as a product manager. It helps you shape the idea, questions your assumptions, defines the MVP scope, and establishes user flows.
   * **Output:** A locked-down, approved MVP Specification.
2. **Coding Agent for Building (Build Operator)**
   * **Tools:** Claude Code, Cursor, Gemini CLI, etc.
   * **Job:** Act as a staff engineer. It takes the approved MVP spec, inspects the repo, sets up the project truth files, initializes workflows, and writes the code.
   * **Output:** A working, verified codebase.

If you ask the Build Operator to do the job of the Product Thinking Partner, it will start writing files before it knows *why* those files should exist.

---

## The Basic Workflow

The basic workflow consists of defining the problem before moving to the spec:

1. **Explain the Problem First:** Explain the problem to the thinking client before discussing features.
2. **Transform Your Raw Idea:** Translate a vague idea into a targeted problem statement.

### Example of Problem Transformation

* **Raw MVP Idea:**
  > "I want to build a fitness tracking app with social features and workout shares."
* **Clearer Problem Statement (Ready for Spec):**
  > "Busy remote workers need a friction-free way to log their daily bodyweight exercises in under 30 seconds, because current fitness apps require too many taps and distract them with social feeds."

---

## Copy This: Product Thinking Prompt

![COPY THIS](../assets/badges/copy-this.svg)

Open your preferred AI client (ChatGPT, Claude Web, Gemini) and paste this initial prompt to begin the product discovery phase:

```
I want to turn a raw product idea into a clear MVP spec before I open any coding agent.

Act as a product thinking partner, not a coding assistant yet.

My raw idea is:
[WRITE YOUR IDEA HERE]

The problem I think I am solving is:
[WRITE THE PROBLEM HERE]

The target user or team segment is:
[WRITE WHO WILL USE IT HERE]

My objective is:
[WRITE WHY THIS SHOULD EXIST HERE]

Before suggesting features, ask me the minimum useful questions needed to clarify:
1. the real problem
2. who feels this problem most
3. what the current workaround looks like
4. what the first useful version should do
5. what should be intentionally excluded from v1
6. what success looks like after the first version

Rules:
* Do not write code
* Do not choose a stack yet
* Do not turn this into a bloated SaaS idea
* Keep the MVP small, but real
* Treat this as a solution to a specific problem, not a toy demo
* Push back if the idea is vague
* Ask one group of questions first, then wait for my answers

After I answer, produce:
* Problem statement
* Target segment
* MVP objective
* First user flow
* Core features for v1
* Non-goals for v1
* Key assumptions
* Acceptance criteria
* Open questions
* Recommended next step before coding
```

Work with the thinking client until you are satisfied. Copy the final generated MVP spec.

---

## Copy This: Coding Agent Handoff Prompt

![COPY THIS](../assets/badges/copy-this.svg)

Paste the following handoff prompt into your coding agent to initiate the repo setup under strict constraints:

```
You are my coding agent for this project.

Your job is not to start coding immediately.

Your job is to turn the approved MVP spec into a controlled project setup, then prepare the repository for safe implementation.

Context:
I already clarified the MVP idea with an AI product-thinking client.
Here is the MVP spec:

[PASTE THE MVP SPEC HERE]

Operating rules:
* Do not write production code yet
* Do not install dependencies without asking first
* Do not run global linking commands without asking first
* Do not modify shell profile files
* Do not commit anything without my approval
* Do not choose a stack based on habit
* Treat generated output from helper agents as untrusted until reviewed
* Keep all work scoped to this repository

First, inspect the repository and tell me:
1. whether this is a new project or an existing project
2. what files already exist
3. what project type this seems to be
4. what constraints should affect the setup
5. what questions are still blocking setup

Then prepare the project truth layer.
Create or update these files:
* PRODUCT.md
* DESIGN.md
* AGENT.md
* STACK_DECISION.md
* IMPLEMENTATION_PLAN.md
* OPEN_QUESTIONS.md

Wait for my approval before writing production code.
```

---

## Basic Version: If you use only ChatGPT + Claude Code

If you are just getting started, you do not need advanced tooling or custom configurations:

1. **Thinking Phase:** Paste the **Product Thinking Prompt** into ChatGPT's web interface. Have a conversation, refine the scope, and copy the final MVP spec text.
2. **Handoff Phase:** Open your terminal in a fresh directory, start Claude Code, and paste the **Coding Agent Handoff Prompt** along with your spec text.
3. **Execution:** Claude Code will inspect the directory and automatically bootstrap the required Initial Truth Layer files (`PRODUCT.md`, `DESIGN.md`, etc.). Once approved, you tell Claude Code what slice to build first and write code directly in the main terminal context.

---

## Advanced Version: If you use Spec Kit + Delegate Team + TDD

If you are running complex client projects or working in a larger repository, extend the workflow by enabling advanced coordination and engineering gates:

1. **Spec Kit Initialization:** The handoff prompt directs the agent to verify or install Spec Kit to enforce a structured workflow: *Constitution -> Specify -> Plan -> Tasks -> Implement* (see `playbook/design-system/project-truth-layer.md`).
2. **Multi-Agent Delegation:** Give the lead agent (Claude Code) access to `delegate-team` (`dt`). The lead agent can offload deep code generation (e.g. boilerplate or unit tests) to specialized support backends (like Codex or Gemini) without polluting its active terminal memory.
3. **Test-Driven Development (TDD):** For critical business logic or state transitions, enforce a strict "failing tests first" rule before implementing features.
4. **SVG Asset Policy:** Integrate `lobehub/icons` using the canonical [Icon Policy](../design-system/icon-policy.md) to dynamically search and fetch static brand assets for UIs or system architecture documents.

---

## Tool Notes

### Spec Kit (Spec Discipline)
* **What:** A structured template and workflow kit that forces agents to verify architecture and milestones before writing code.
* **Why:** Prevents the coding agent from drifting or writing code before it has fully clarified *what* the code should accomplish.

### Delegate Team (Delegation Runtime)
* **What:** A unified multi-backend developer agent dispatch suite (`dt`) running locally.
* **Why:** Keeps your lead agent's context clean and avoids token bloat by delegating heavy boilerplate or test-writing tasks to subagents.

### TDD / Superpowers (Engineering Discipline)
* **What:** An engineering methodology enforcing test-first development.
* **Why:** Writing a failing test *first* ensures the agent writes exactly what is needed to pass, rather than guessing or over-engineering.

### SVG & Brand Icons (LobeHub Icons)
* **What:** A comprehensive AI/LLM icon library.
* **Why:** Avoids unofficial or messy image placeholders. We follow the canonical [Icon Policy](../design-system/icon-policy.md) to query static SVG assets for dashboards, architecture documentation, or buttons.

---

## Ship Check

![SHIP CHECK](../assets/badges/ship-check.svg)

Before writing the first line of code, confirm that you have completed these checks:

- [ ] Divided the workflow into a **Thinking Phase** (AI Client) and a **Building Phase** (Coding Agent).
- [ ] Stated the core problem clearly before discussing feature implementation.
- [ ] Generated an MVP specification detailing core flows, goals, and non-goals.
- [ ] Copied the spec into the repository and let the coding agent generate the **Project Truth** files (`PRODUCT.md`, `DESIGN.md`, etc.).
- [ ] Selected the engineering discipline (Basic ChatGPT + Claude Code or Advanced Spec Kit + Delegate Team) that fits the scale of the task.
- [ ] Established approval gates for dependency installation and code commits.

<p align="center">
  <a href="./00-step-zero-build-the-project-truth.md">
    <img src="../assets/navigation/prev-lesson.svg" alt="Previous Lesson" />
  </a>
  <a href="./README.md">
    <img src="../assets/navigation/back-to-index.svg" alt="View Index" />
  </a>
  <a href="./02-choose-your-lead-agent.md">
    <img src="../assets/navigation/next-lesson.svg" alt="Next Lesson" />
  </a>
</p>

