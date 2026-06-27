# How to Start a New Project as a Vibe Coder

![FOUNDATION](https://img.shields.io/badge/FOUNDATION-111827?style=flat-square) ![GETTING STARTED](https://img.shields.io/badge/GETTING%20STARTED-111827?style=flat-square) ![HIGH IMPACT](https://img.shields.io/badge/HIGH%20IMPACT-10B981?style=flat-square)

---

## Why This Matters

Most people who start using AI coding agents start wrong.

Not wrong in an obvious way. They use the tools correctly. They write coherent prompts. They get the agent running. But something feels off after the first hour. The project gets messy. The agent starts making decisions you didn't expect. You spend time correcting instead of building.

This is not bad luck. It is a predictable outcome of starting without structure.

The way you begin a project shapes everything that comes after it. The agent inherits your setup, your context, your rules — or the absence of all three.

This lesson is about how to start a project in a way that sets you up to actually finish it.

---

## The Short Answer

The first question most people ask is: **what stack should I use?**

That is the wrong question.

The right first question is:

> **Who is my lead coding agent?**

Everything else — stack, tools, workflow — comes after that decision.

---

## The Real Mental Model

![MENTAL MODEL](../../playbook/assets/badges/mental-model.svg)

Think of a real software team. There is a lead engineer who holds the full picture of the project. They know the architecture, the decisions that were made, and why certain things were built the way they were. When something needs to get done, they either do it themselves or direct someone else.

Support engineers work on specific pieces. They do not need to know everything. They just need to understand their piece clearly.

Your multi-agent setup works the same way.

**One lead agent. The others support.**

The lead agent holds the project context. It carries the architectural memory. It makes the structural decisions. Support agents come in when you need deep code generation, a second opinion, or a different approach to a specific problem.

If you do not have a clear lead, no agent holds the full picture — and nothing ever quite fits together.

---

## Step 1: Pick Your Lead Agent

![DO THIS FIRST](../../playbook/assets/badges/do-this-first.svg)

Your lead agent is the one that will hold project context across sessions. It is the one you talk to first, the one you give your `PRODUCT.md` and `RULES.md` to, and the one responsible for keeping the overall structure coherent.

Choose based on what you need from a lead:

| Agent | Best as lead when... |
|---|---|
| **Claude Code** | You need a thoughtful engineering partner who can plan, review, and execute. Good for complex projects where reasoning matters as much as code output. |
| **Codex** | You need deep code generation as the main activity. Less strong for architectural reasoning, very strong for implementation. |
| **Gemini (via Antigravity)** | You need broad reasoning and multi-perspective analysis. Good for exploration-heavy early phases. |
| **OpenCode** | You need a fast, local, privacy-friendly lead for specific contexts. |
| **Minimax** | Better used as a support agent for creative alternatives and experimentation. Not typically a lead. |

For most projects — especially product builds, full-stack work, and anything that requires ongoing architectural judgment — **Claude Code is the strongest default lead.**

![PRO TIP](../../playbook/assets/badges/pro-tip.svg)

> **My setup:** I use Claude Code as the lead agent — treating it like a staff engineer who sees the whole project. I use Codex for heavy implementation tasks, Minimax for creative or experimental alternatives, and Gemini when I want another reasoning angle. I also use a custom skill that helps Claude Code coordinate with other agents when needed, so it can delegate specific tasks without losing project context.

---

## Step 2: Pick Your Support Agents

Support agents are not optional, but they are not always active. You bring them in when:

- The lead agent is stuck on a specific implementation
- You want a second approach to a hard problem
- You need faster iteration on a focused sub-task
- The lead's context is getting saturated

**Do not run five agents in parallel without structure.** It feels productive and produces chaos. You end up with five different answers and no way to reconcile them.

**The structure that works:**

```
Lead agent → delegates or you manually route → Support agent
Support agent output → reviewed → fed back to lead
```

That is it. One direction of flow. One source of truth.

![BIG ISSUE](../../playbook/assets/badges/big-issue.svg)

> **The biggest mistake with multi-agent setups:** Treating every agent as equal and giving all of them the same prompt. You get five responses with different assumptions baked in, and now reconciling them becomes the project. Pick a lead. Route through the lead.

---

## Step 3: Define the Job Before the Build

Before a single line of code, answer these four questions:

1. **What am I building?**
   Not the full spec — just one clear sentence. "A tool that lets freelancers track client invoices and flag overdue payments."

2. **For whom?**
   Who uses this? What do they care about? What would make them stop using it?

3. **What does done look like?**
   What is the first version that a real person could use? Not the final vision — the first ship.

4. **What should never happen?**
   The non-negotiables. Things that, if broken, invalidate the whole product. Write these down. They become your quality gates.

![MY MISTAKE](../../playbook/assets/badges/my-mistake.svg)

> I used to skip question 4. I told myself it was obvious. It was not obvious to the agent. The agent has no way to know that "user data should never be visible to other users" is a hard constraint unless you say it explicitly. I learned this by finding a bug where exactly that happened.

---

## Step 4: Create Project Context Files

This is the structural foundation that makes your agent consistent across sessions.

Create these files before asking the agent to write any code:

### `PRODUCT.md`

What you are building, for whom, and what done looks like. The lead agent reads this at the start of every major session.

```markdown
# Product

## What it is
[One sentence description]

## Who it is for
[One sentence about the target user]

## First version
[What the first shipped version includes — and explicitly excludes]

## Non-negotiables
- [Hard constraint 1]
- [Hard constraint 2]
```

### `DESIGN.md`

Visual direction, component conventions, design decisions. If you are using a design system or specific component patterns, document them here.

### `TASKS.md`

The current task list. Updated as the project progresses. This is what the lead agent references when deciding what to work on next.

```markdown
# Tasks

## In Progress
- [ ] [Current task]

## Backlog
- [ ] [Upcoming task]

## Done
- [x] [Completed task]
```

### `RULES.md`

Behavioral rules for the agent. Things it should always do, never do, and follow without asking.

```markdown
# Rules

## Always
- Write tests for any new logic
- Use TypeScript strict mode

## Never
- Modify authentication logic without explicit instruction
- Add new dependencies without explaining why

## Format
- Use named exports only
- Max file length: 300 lines
```

![PRO TIP](../../playbook/assets/badges/pro-tip.svg)

> Once these files exist, start every major session by telling the lead agent: "Read PRODUCT.md, TASKS.md, and RULES.md before we continue." This re-anchors the agent to the project state and prevents drift.

---

## Step 5: Build Your Default Stack

Your default stack is the set of tools and agents you use on every project as a baseline. It removes the decision overhead of "what should I use for this?" every time you start something new.

A strong default stack for most projects:

| Role | Tool |
|---|---|
| Lead agent | Claude Code |
| Code generation support | Codex |
| Alternative reasoning | Gemini |
| Experimental / creative | Minimax |
| Code review | Open Code Review + reviewdog |
| React quality gate | React Doctor |
| Project graph | Graphify |
| Semantic navigation | Serena |

![DEFAULT STACK](../../playbook/assets/badges/default-stack.svg)

> **Your default stack is not final.** It is your starting configuration. You will evolve it over time as you find what works for the types of projects you build. The point is to have a starting point that is not blank.

---

## Step 6: Start Small

This is where most people make the last mistake: trying to build the whole project in one session.

**Start with:**

1. **Outline** — a rough description of the architecture and main components
2. **Architecture** — the actual structure (files, folders, how it fits together)
3. **First slice** — the smallest piece that does something real
4. **Validation** — does this slice work? Is it the right foundation?
5. **Expand** — build the next piece on top of the validated foundation

This is not cautious slow building. This is fast building that does not break itself.

The projects that fail do so because the foundation was wrong and nobody caught it for three days of work. Starting with a first slice and validating it catches that problem in one hour.

---

## Step 7: Add Quality Gates Early

Quality gates are not just for production. They are for staying sane during development.

Add these before you have written significant code:

- **React Doctor** — for React codebases, catches structural and logic issues early
- **Open Code Review** — structured AI review on your changes
- **reviewdog** — pipes linter output into reviewable annotations
- **Impeccable** — if you are building any UI, gives the agent a design language to follow
- **Serena** — for semantic navigation and refactoring as the codebase grows

![AGENT MOVE](../../playbook/assets/badges/agent-move.svg)

> **Tell the lead agent to use quality gates, not just build.** Something like: "After completing each feature, run React Doctor and summarize any issues before moving to the next task." This builds review into the rhythm instead of leaving it to the end.

---

## Step 8: Know When to Switch Agents

![WHEN TO SWITCH](../../playbook/assets/badges/when-to-switch.svg)

Your lead agent is not infallible. There are clear signals that it is time to bring in a support agent or restart context:

**Switch when the lead agent:**
- Gives the same wrong answer three times in a row
- Starts contradicting earlier decisions without explanation
- Proposes a solution that is far more complex than the problem warrants
- Loses track of the file structure or starts creating files that already exist
- Produces output that no longer matches the rules you set

**When you switch:**
- Do not just paste the whole conversation into a new agent
- Give the new agent the context files (`PRODUCT.md`, `RULES.md`, `TASKS.md`)
- Describe specifically what the lead got stuck on
- Ask for an alternative approach — not the same approach

---

## Try It

![TRY IT](../../playbook/assets/badges/try-it.svg)

Before your next project, do this:

1. Write a one-sentence description of what you are building
2. Write the four questions from Step 3 (what, for whom, done, never)
3. Create a `RULES.md` with at least three rules
4. Choose your lead agent
5. Then — and only then — open the agent and start

Notice how different the first session feels.

---

## Copy This

![COPY THIS](../../playbook/assets/badges/copy-this.svg)

Use this prompt to start any new project with Claude Code as your lead:

```
I am starting a new project. Before we write any code, I want to set up the foundation.

Here is the product description:
[paste PRODUCT.md content]

Here are the rules for this project:
[paste RULES.md content]

Here is the first task:
[describe first task]

Before starting the task:
1. Confirm you have read and understood the product description
2. Confirm you will follow the rules listed
3. Ask any questions that would change how you approach the task
4. Propose a brief architecture outline before writing code

Do not start coding until I confirm the outline.
```

---

## Ship Check

![SHIP CHECK](../../playbook/assets/badges/ship-check.svg)

Before starting any new project, confirm:

- [ ] Lead agent selected
- [ ] `PRODUCT.md` written with non-negotiables
- [ ] `RULES.md` written with at least 3 rules
- [ ] `TASKS.md` created with first task defined
- [ ] Default stack decided (even partially)
- [ ] First slice identified (not the full project)
- [ ] Quality gate decided (even one is better than none)

---

## Final Takeaway

Starting a project well is not about doing more upfront. It is about making the right decisions upfront so you do not have to undo them later.

**One lead agent. Clear rules. Small first step.**

That is the whole framework.

Everything else in this playbook builds on top of these three things.

---

*← Back to [Getting Started](./README.md) | Next: [Choose Your Lead Agent →](./02-choose-your-lead-agent.md)*
