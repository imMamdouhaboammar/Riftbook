# Project Truth Layer Standard

This standard defines the canonical naming and lifecycle conventions for repository-level context files in Riftbook projects.

The Project Truth Layer acts as a boundary-enforcing mechanism for AI coding agents, moving critical project context from volatile LLM chat memories into the repository itself.

---

## The Two-Layer Lifecycle

To prevent agent confusion, context files are divided into two distinct layers based on when they are created:

```txt
1. Initial Truth Layer (Required Before Coding)
   ├── PRODUCT.md
   ├── DESIGN.md
   ├── AGENT.md
   ├── STACK_DECISION.md
   ├── IMPLEMENTATION_PLAN.md
   └── OPEN_QUESTIONS.md
        │
        ▼
2. Operational Layer (Required Before Implementation Sessions)
   ├── RULES.md
   └── TASKS.md
```

---

## File Specifications and Lifecycle

| Layer | File Name | Purpose | When to Create |
|---|---|---|---|
| **Initial Truth** | `PRODUCT.md` | Core product definition, target users, MVP scope, and explicit non-goals. | Before writing any code or installing dependencies. |
| **Initial Truth** | `DESIGN.md` | Spacing, color schemes, typography, layout rules, and component states. | Before writing any code or styling components. |
| **Initial Truth** | `AGENT.md` | Instructions specifying the agent's role, constraints, and behavior boundaries. | Before writing any code or initiating agent work. |
| **Initial Truth** | `STACK_DECISION.md` | Technical stack justification, frameworks, databases, and library selections. | Before selecting scaffolding or initializing the app. |
| **Initial Truth** | `IMPLEMENTATION_PLAN.md` | Logical step-by-step breakdown of milestones and feature slices. | Before starting the codebase execution. |
| **Initial Truth** | `OPEN_QUESTIONS.md` | A living list of unresolved architecture, product, or design queries. | At project bootstrap; updated throughout the lifecycle. |
| **Operational** | `RULES.md` | Specific coding style, safety constraints, and behavioral "always/never/ask" rules. | Created immediately after the initial truth layer, before first build session. |
| **Operational** | `TASKS.md` | Current task board listing active, backlog, and completed work slices. | Created immediately after the initial truth layer, before first build session. |

---

## Operational Stack Summaries (`STACK.md`)

* **Standard Rule:** `STACK.md` must not replace `STACK_DECISION.md`.
* **Purpose of `STACK_DECISION.md`:** Holds the strategic reasoning and architecture decisions (e.g., why Next.js was chosen over Vite).
* **Usage of `STACK.md`:** `STACK.md` is optional. If used, it must only serve as a short operational summary (such as active developer tools, lint configurations, or CI status) and must contain a prominent link pointing to `STACK_DECISION.md` for architectural context.

---

*Part of [The Real Vibe Coding Playbook](../README.md)*
