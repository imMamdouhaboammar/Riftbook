# Working with Multiple Agents Without Creating Chaos

![INTERMEDIATE](https://img.shields.io/badge/INTERMEDIATE-111827?style=flat-square) ![WORKFLOW](https://img.shields.io/badge/WORKFLOW-111827?style=flat-square) ![HIGH IMPACT](https://img.shields.io/badge/HIGH%20IMPACT-10B981?style=flat-square)

---

## Why This Matters

Multi-agent work is the natural extension of vibe coding. When one agent is powerful, five agents cooperating must be five times better, right?

In practice, the opposite is usually true. 

Without a clear workflow, multi-agent systems devolve into chaos. The agents contradict each other's code styles, duplicate files, waste millions of tokens processing redundant context, and run into conflicting rate limits. Instead of shipping features faster, you spend your time arbitrating between different agent opinions or trying to stitch together mismatched implementations.

Working with multiple agents requires a strict delegation structure, clear boundaries, and centralized control.

---

## The Short Answer

The secret to multi-agent success is simple:

> **Do not use multiple agents as a crowd. Use one lead agent and let the rest act like specialists.**

You must establish a single "Controller" (the lead agent) that holds the architectural context. All other agents are treated as "Workers" (support agents) that receive focused tasks, produce changes, and feed them back to the controller for verification.

---

## Why Multi-Agent Work Fails

Multi-agent workflows usually fail because of three root causes:

1. **Context Fragmentation:** If you chat with three different agents simultaneously about different parts of the code, no single agent understands how they connect. The system lacks a single source of truth.
2. **Infinite Loops and Conflicting Designs:** Agent A writes a helper. Agent B does not like the structure and rewrites it. Agent A rewrites it back. Without a coordinator, there is no final decision-maker.
3. **Token Ballooning:** Giving every agent the full codebase to read on every turn is incredibly expensive. You quickly hit token limit ceilings and cost spikes.

---

## The Solution: A Delegation Gateway

A **Delegation Gateway** is a runtime tool or CLI that sits between your lead agent (like Claude Code) and your support backends (like Codex, Gemini, MiniMax, or VertexCoder). 

Instead of you manually copying files and prompts back and forth, the gateway manages the communication contract:

- It defines a **strict boundary** for what the support agent can see and modify.
- It translates a high-level goal into a **Lean Token Protocol** contract (sending only files relevant to the change).
- It handles **provider failover** (if Codex hits a rate limit, try VertexCoder).
- It returns the result as a structured contract that the lead agent can audit.

By using a gateway like `delegate-team` (`dt`), your lead agent (Claude Code) stays inside your terminal context while delegating heavy generation or alternative task execution.

---

## How to Split Work Between Agents

![MENTAL MODEL](../assets/badges/mental-model.svg)

Assign clear roles based on the agent's strengths. Here is how to structure the division of labor:

### 1. The Controller (Claude Code)
- **Role:** Staff Engineer, Planner, and Reviewer.
- **Tasks:** Scopes the project, writes tests, reviews all diffs, merges the changes, and runs verification gates.
- **Context:** Holds the complete workspace layout, rules list, and product timeline.

### 2. The Specialist Coder (Codex / VertexCoder / OpenCode)
- **Role:** Coder / Implementer.
- **Tasks:** Takes a very narrow specification, implements the logic, writes inline documentation, and returns the modified code block.
- **Context:** Minimal. Only sees the target file and the direct dependencies.

### 3. The Innovator (MiniMax / Gemini)
- **Role:** Critic / Alternative Architect.
- **Tasks:** Evaluates a complex algorithm and suggests alternative implementations. Used when the lead is stuck or needs creative ideas.

---

## How to Review Delegated Output

Never let any support agent write directly to your codebase without a gateway check or manual diff review. 

![DON'T BREAK](../assets/badges/dont-break.svg)

> **DON'T BREAK:** Never let delegated output write, install, commit, delete, or change auth/cloud settings without explicit approval.

Follow this workflow for reviewing any delegated change:

```txt
                       [ Delegated Output Received ]
                                     ↓
1. Inspect Result Contract ──→ Did it touch the right files?
                                     ↓ Yes
2. Run Linter / Static Review → Does the syntax conform to rules?
                                     ↓ Yes
3. Execute Test Suite ───────→ Did the change pass local tests?
                                     ↓ Yes
4. Audit Diff Manually ──────→ Look for security flaws & redundant code
                                     ↓ Approved
                       [ Commit to Git Repository ]
```

---

## How Delegate Team Fits Into This Workflow

`delegate-team` (`dt`) provides the runtime policies that make this workflow practical.

### 1. Bounded Workspaces
Instead of letting a support agent scour your entire system, `dt` restricts file tool actions to the current workspace root.

### 2. Policy-Driven Execution
You can run delegation with strict constraints directly from your command line:

```bash
# Check if backends are configured and ready
dt check --strict

# Run an isolated task on a specific file using VertexCoder
dt run "implement the signup validations" --backend vertexcoder

# Run a team-style workflow in sandbox mode
dt metagpt "design and implement the user profile module" --workspace-only --no-install
```

### 3. Lean Routing
When a task is sent through `dt`, it packages only the relevant files instead of the entire project tree. This preserves tokens and keeps the focus narrow.

---

## The Human is the Final Authority

No matter how advanced your multi-agent routing is:

> **The final commit must always be human-approved.**

The lead agent (Claude Code) acts as your coordinator, and the delegation runtime (`dt`) acts as your execution engine. But you are the product owner. You are the one who understands the business context and the non-negotiables. Treat every merge as your personal responsibility.

---

## Try It

![TRY IT](../assets/badges/try-it.svg)

In your current project workspace, try to delegate a small, isolated task (like adding a helper utility) instead of asking your lead agent to write it directly:

1. Confirm `dt` is installed and ready: `dt check`
2. Run: `dt run "write a date formatter utility that formats ISO to 'DD/MM/YYYY'" --backend codex`
3. Inspect the diff in your workspace.
4. Let your lead agent review the code and integrate it.

---

## Ship Check

![SHIP CHECK](../assets/badges/ship-check.svg)

Before adopting a multi-agent workflow:

- [ ] A single controller (lead agent) is assigned
- [ ] Support backends are verified via `dt check`
- [ ] Boundary policies (`--workspace-only`, `--no-install`) are active for team-based generation
- [ ] Human review step is in place before committing code

---

*← Back to [Core Workflows](./README.md) | Next: [Debugging with Agents →](./03-debugging-with-agents.md)*
