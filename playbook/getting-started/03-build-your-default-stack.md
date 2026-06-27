<p align="center">
  <img src="../assets/lesson-heroes/03-build-your-default-stack.svg" alt="Lesson 03 Hero" width="100%" />
</p>

# Build Your Default Stack

| Level | Duration | Path | Prerequisites | Tools Mentioned |
|---|---|---|---|---|
| Beginner | 5 mins | Start Here | Lesson 02 | Claude Code, Cursor, RTK, Serena |

### Active Signals in this Lesson
- ![DEFAULT STACK](../assets/badges/default-stack.svg) · ![DON'T BREAK](../assets/badges/dont-break.svg) · ![RED FLAG](../assets/badges/red-flag.svg) · ![COPY THIS](../assets/badges/copy-this.svg) · ![SHIP CHECK](../assets/badges/ship-check.svg)

---

## Why This Matters

Every time you start a new project, you face a version of the same question: what tools should I use?

If you answer it from scratch every time, you are burning decision energy on something that does not need to be decided repeatedly. You also end up with inconsistent setups — projects where you used one review tool, others where you used nothing, codebases where the quality gates differ depending on how much energy you had that day.

A default stack solves this. It is your baseline configuration — the tools and agents you use on every project unless you have a specific reason not to.

It removes the question. You just start.

---

## What a Default Stack Is

A default stack is not a rigid specification. It is a starting configuration that you evolve over time.

It answers:
- Who is my lead agent?
- Which support agents do I bring in and when?
- What code review tools do I run before trusting output?
- What quality gates do I run before shipping?
- What tools help agents navigate and understand the codebase?

Once you have answers to these questions, starting a new project is faster, more consistent, and less mentally expensive.

---

## A Strong Default Stack to Start With

![DEFAULT STACK](../assets/badges/default-stack.svg)

This is a practical starting configuration that works well across most project types:

### Agents

| Role | Agent | When to use |
|---|---|---|
| Lead | **Claude Code** | Every session. Holds context and architecture. |
| Code generation | **Codex** | Deep implementation, alternative code approaches |
| Creative / experimental | **Minimax** | When you want a very different take on a problem |
| Broad reasoning | **Gemini** | Second opinion, analysis, exploration |
| Local / fast | **OpenCode** | Specific focused tasks, privacy-sensitive contexts |

### Code Review

| Tool | Purpose |
|---|---|
| **Open Code Review** | Structured AI review on diffs and full-file scans |
| **reviewdog** | Linter output turned into reviewable annotations in CI |

### Quality Gates

| Tool | Purpose |
|---|---|
| **React Doctor** | Catches React issues: state, effects, perf, a11y, security |
| **Impeccable** | Design quality gate for any UI work |

### Project Intelligence

| Tool | Purpose |
|---|---|
| **Graphify** | Turns the repo into a queryable graph for agent context |
| **Serena** | Semantic navigation and editing for agents in real codebases |

---

## Adding Quality Gates Early

Quality gates are not just for production. They are for staying sane during development. If you wait until you are ready to ship to configure linters, formatters, and AI reviewers, you will spend your final hours correcting hundreds of styling and logic errors.

Add these gates before you have written significant code:
- **React Doctor** — for React codebases, catches structural and hook logic issues early.
- **Open Code Review** — structured AI review on your local git diffs before staging.
- **reviewdog** — pipes linter and check outputs into inline reviewable comments.
- **Impeccable** — provides the agent with the design system visual boundaries to prevent UI styling drift.
- **Serena** — enables semantic navigation so the agent doesn't get lost in deep file hierarchies.

---

## How to Customize It

The stack above is not prescriptive. It is a starting point.

Customize based on:

- **Project type** — a CLI tool needs different tools than a React app
- **Team size** — solo builders and teams have different review needs
- **Language** — some tools are language-specific
- **Phase** — early exploration needs different tools than production hardening

**The rule:** only change the default when you have a clear reason. Otherwise, keep it consistent and let it compound over time.

---

## Document Your Stack

Your tech stack choices are officially recorded and justified in `STACK_DECISION.md` as part of the Initial Truth Layer (see [Project Truth Layer Standard](../design-system/project-truth-layer.md)).

Optionally, you can create a `STACK.md` file in the project root to serve as a short operational summary of your active local configuration. If you use `STACK.md`, it must not replace `STACK_DECISION.md`, and it should link back to `STACK_DECISION.md` for architectural context.

Here is a template for the operational `STACK.md` file:

```markdown
# Stack

## Lead Agent
Claude Code

## Support Agents
- Codex — deep code generation and alternative implementations
- Gemini — broad reasoning and second opinions

## Code Review
- Open Code Review — structural AI review on diffs
- reviewdog — linter annotations in CI

## Quality Gates
- React Doctor — React quality audit before merges
- Impeccable — UI design quality check

## Project Intelligence
- Graphify — repo as queryable graph
- Serena — semantic navigation for Claude Code

## Notes
[Anything project-specific]
```

This file is also useful to give to the lead agent at the start of sessions so it knows what tools are available and can suggest or use them.

---

## The Anti-Pattern

![RED FLAG](../assets/badges/red-flag.svg)

The most common mistake with stacks is building the stack instead of the product.

Signs you are doing this:
- You spent more than a day configuring tools before writing any code
- You keep evaluating new tools instead of using the ones you have
- Your `STACK_DECISION.md` is longer than your `PRODUCT.md`
- The stack changes every project

The stack should take one hour to set up. Then you use it. The refinements come from actual use, not from research.

---

## Runtime Safety Layer

![DON'T BREAK](../assets/badges/dont-break.svg)

> **DON'T BREAK:** Do not build a serious React UI without an error boundary or the framework equivalent. If the app crashes into a blank screen, you lose the ability to understand what broke.

If your stack includes React, add a runtime safety layer before building major UI flows.

At minimum, the app should have:

- A top-level Error Boundary or route-level framework equivalent
- A fallback UI that tells the user something went wrong
- A reset / retry action where possible
- A logging point for the error and component stack
- A small test component or test route that intentionally throws an error so you can verify the boundary works

This is not polish. This is visibility.

Without it, the coding agent can create a UI that looks complete, but fails silently when one component throws during rendering.

### Stack-specific rule

| Stack | Required safety setup |
|---|---|
| React + Vite | Add a reusable `ErrorBoundary` and wrap the app root or major feature areas |
| Next.js App Router | Add `error.tsx` for important route segments and `global-error.tsx` only when root-level handling is needed |
| Remix / React Router | Add route-level error boundaries where the framework supports them |
| Non-React UI stack | Ask the agent to identify the framework equivalent before building major UI flows |

> **What Error Boundaries do not catch:** normal event-handler errors, SSR errors, async callback errors, and errors thrown inside the boundary component itself. These must be handled manually.

![COPY THIS](../assets/badges/copy-this.svg)

```markdown
Before building more UI, add the runtime safety layer for this stack.

Inspect the project and tell me:
1. Is this React, Next.js, Remix, Vue, Svelte, or another UI stack?
2. What is the correct error boundary or runtime error handling pattern for this stack?
3. Where should it live in this repo?
4. What fallback UI should users see?
5. How will errors be logged during development?
6. How can we verify it works?

Rules:
- Do not build new features yet
- Do not add a monitoring vendor unless I approve it
- Do not hide errors silently
- Do not catch errors in a way that makes debugging harder
- Add a minimal fallback UI
- Add a safe test case that intentionally throws so we can verify the boundary
- Explain what this boundary does not catch
```

---

## Ship Check

![SHIP CHECK](../assets/badges/ship-check.svg)

- [ ] Lead agent chosen
- [ ] At least one support agent identified
- [ ] At least one code review tool configured
- [ ] At least one quality gate chosen
- [ ] `STACK_DECISION.md` written and saved in the project (and optionally `STACK.md` summarized)
- [ ] If this is a React app, an Error Boundary or framework equivalent is installed before building major UI flows

<p align="center">
  <a href="./02-choose-your-lead-agent.md">
    <img src="../assets/navigation/prev-lesson.svg" alt="Previous Lesson" />
  </a>
  <a href="./README.md">
    <img src="../assets/navigation/back-to-index.svg" alt="View Index" />
  </a>
  <a href="./04-set-rules-before-you-build.md">
    <img src="../assets/navigation/next-lesson.svg" alt="Next Lesson" />
  </a>
</p>
