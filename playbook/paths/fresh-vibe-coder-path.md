# Fresh Vibe Coder Path

**Path Profile:** Fresh Vibe Coder | **Length:** 0 to 10 Build Path

---

This path takes a new vibe coder from point 0 to point 10 by building a real project through clean, structured, and safety-aware prompts.

The goal is not to make the builder memorize syntax. The goal is to teach the real process: define truth, control scope, guide the agent, review output, fix safely, and ship with confidence.

---

## Who this path is for

Use this path if you:

- Are new to AI-assisted coding
- Can describe what you want but do not yet know the full build process
- Want to build a real project without turning it into messy generated code
- Want prompts that force the agent to plan, verify, and explain
- Want a repeatable process you can use again

Do not use this path if you only want a one-shot prompt that builds everything at once. That is exactly what this path avoids.

---

## The rule of this path

**Never ask the agent to build before the project truth exists.**

A fresh vibe coder usually fails for one of these reasons:

- The idea is vague
- The scope is too big
- The agent has no stable context
- The builder accepts changes without review
- The first version has no QA gate
- Refactor, feature work, and bug fixing get mixed together

This path fixes that by making each step small and reviewable.

---

## 0 to 10 map

| Level | Stage | Output |
|---|---|---|
| 0 | Operating rules | Safe working rules for the agent |
| 1 | Idea clarity | Real project objective |
| 2 | Project truth | `PRODUCT.md`, `RULES.md`, `TASKS.md` |
| 3 | Stack choice | Simple stack and setup plan |
| 4 | User flow | First user journey and screens |
| 5 | Feature spec | First vertical slice |
| 6 | Build | Small working implementation |
| 7 | Debug | Root-cause bug fixing process |
| 8 | Refactor | Cleaner structure without behavior drift |
| 9 | QA | Review, tests, and manual checks |
| 10 | Ship | Handoff note and next iteration plan |

---

## Level 0: Set operating rules

### Goal

Teach the agent how to work before asking it to build.

### Output

A short working contract between you and the agent.

### Prompt

```txt
You are my coding agent for this project.

Before doing any work, follow these rules:

1. Do not edit files until you return a short plan.
2. Keep changes small and reviewable.
3. Do not mix feature work, bug fixing, and refactoring in the same change.
4. Explain what files you need to inspect before editing.
5. Do not invent project requirements.
6. Mark assumptions clearly.
7. Tell me what you cannot verify.
8. After every change, return files changed, reason, checks, and remaining risks.

First, confirm these rules and ask me for the project idea.
```

### Gate

Move on only when the agent confirms the rules and does not start building immediately.

---

## Level 1: Turn the idea into a real project objective

### Goal

Convert a vague idea into a clear project direction.

### Output

One project objective, audience, problem, and success criteria.

### Prompt

```txt
Help me turn this idea into a real project objective.

Idea:
[write the idea]

Return:
1. One-line project description
2. Target user
3. Main problem
4. Core value proposition
5. First version scope
6. Out-of-scope list
7. Success criteria
8. Questions I must answer before building

Rules:
- Keep the first version small.
- Do not add advanced features yet.
- Separate facts from assumptions.
```

### Gate

Move on only when you can explain the project in one sentence.

---

## Level 2: Create project truth files

### Goal

Create stable context files the agent can read every session.

### Output

At minimum:

- `PRODUCT.md`
- `RULES.md`
- `TASKS.md`

Recommended:

- `DECISIONS.md`
- `QA.md`
- `HANDOFF.md`

Use the [Project Truth Kit](../../project-truth-kit/README.md).

### Prompt

```txt
Use the Project Truth Kit structure to create the initial project truth.

Project summary:
[paste the result from Level 1]

Create content for:
1. PRODUCT.md
2. RULES.md
3. TASKS.md

Keep it simple.

Rules:
- PRODUCT.md should define the product, audience, value, scope, and success criteria.
- RULES.md should define how the agent should work.
- TASKS.md should include only the first small tasks.
- Mark missing information clearly.
- Do not create a large backlog.
```

### Gate

Move on only when `PRODUCT.md`, `RULES.md`, and `TASKS.md` exist or are drafted clearly.

---

## Level 3: Choose the simplest workable stack

### Goal

Avoid choosing tools because they look impressive.

### Output

A small stack that fits the first version.

### Prompt

```txt
Recommend the simplest stack for this project.

Project truth:
[paste PRODUCT.md summary]

My constraints:
- Skill level: beginner
- Goal: build a real first version
- Preference: keep setup simple

Return:
1. Recommended stack
2. Why this stack fits
3. What not to use yet
4. Setup steps
5. First folder structure
6. Commands to run
7. Risks or learning gaps

Rules:
- Prefer fewer tools.
- Do not add databases, auth, payments, or complex infra unless the first version truly needs them.
- Explain tradeoffs in plain language.
```

### Gate

Move on only when the stack is simple enough to explain and run locally.

---

## Level 4: Define the first user flow

### Goal

Make the first user journey clear before building screens.

### Output

One primary flow and a small screen map.

### Prompt

```txt
Define the first user flow for this project.

Project truth:
[paste relevant PRODUCT.md sections]

Return:
1. Primary user flow
2. Screens or sections needed
3. User actions on each screen
4. Empty states
5. Loading states
6. Error states
7. What can be skipped in version one

Rules:
- Keep only one primary flow.
- Do not design every future feature.
- Make the first version usable, not complete.
```

### Gate

Move on only when the first flow is clear enough to build as one vertical slice.

---

## Level 5: Write the first feature spec

### Goal

Turn the user flow into a small buildable unit.

### Output

A feature spec with scope, files, states, and acceptance criteria.

### Prompt

```txt
Create a small feature spec for the first vertical slice.

Project truth:
[paste PRODUCT.md]

User flow:
[paste Level 4 result]

Return:
1. Feature name
2. User story
3. In scope
4. Out of scope
5. UI requirements
6. Data requirements
7. Edge cases
8. Acceptance criteria
9. Likely files to create or edit
10. First 3 small commits

Rules:
- Keep the feature small.
- Make acceptance criteria testable.
- Do not include future features.
```

### Gate

Move on only when the agent can split the work into 3 small commits.

---

## Level 6: Build the first vertical slice

### Goal

Build one working slice without overbuilding.

### Output

A small working implementation.

### Prompt

```txt
Build only the first vertical slice from this spec.

Spec:
[paste Level 5 spec]

Project rules:
[paste relevant RULES.md]

Before editing:
1. Inspect the files you need.
2. Return a short plan.
3. List files you expect to change.
4. Identify risks.

After editing:
1. Summarize what changed.
2. List files changed.
3. Explain how to run it.
4. Explain how to verify it.
5. List what is not implemented yet.

Rules:
- Do not build outside the spec.
- Do not add extra features.
- Keep the change small.
```

### Gate

Move on only when the first slice runs or the agent clearly explains what blocks it.

---

## Level 7: Debug from root cause

### Goal

Teach the builder not to accept random fixes.

### Output

A bug diagnosis and narrow fix.

Use [Bug Fix Brief](../../agent-briefs/bug-fix-brief.md).

### Prompt

```txt
Debug this issue from root cause.

Expected behavior:
[what should happen]

Actual behavior:
[what happens]

Steps to reproduce:
1. [step]
2. [step]
3. [step]

Relevant files or errors:
[paste details]

Before editing:
1. Explain likely root causes.
2. Identify files to inspect.
3. Propose the smallest fix.

After editing:
1. Explain the root cause.
2. Explain the fix.
3. Explain how to verify it.
4. List regression risks.

Rules:
- Do not rewrite unrelated code.
- Do not guess if evidence is weak.
- Do not fix symptoms only.
```

### Gate

Move on only when the root cause is stated clearly.

---

## Level 8: Refactor safely

### Goal

Improve structure without changing behavior by accident.

### Output

A small refactor with behavior preserved.

Use [Refactor Brief](../../agent-briefs/refactor-brief.md).

### Prompt

```txt
Refactor this project area safely.

Target area:
[file, component, function, or folder]

Current problem:
[what is messy or hard to maintain]

Constraints:
1. Preserve behavior.
2. Keep the refactor small.
3. Do not add new features.
4. Do not introduce new dependencies unless necessary.

Before editing:
1. Inspect dependencies and callers.
2. Propose a small refactor plan.
3. List risks.

After editing:
1. Explain what changed.
2. Explain why behavior should be unchanged.
3. List verification steps.
4. Suggest follow-up work separately.
```

### Gate

Move on only when the refactor is smaller than the feature work that came before it.

---

## Level 9: Review and QA

### Goal

Check the work before trusting it.

### Output

A review report and manual QA checklist.

Use:

- [PR Review Brief](../../agent-briefs/pr-review-brief.md)
- [Delivery QA Brief](../../agent-briefs/delivery-qa-brief.md)
- `QA.md` from [Project Truth Kit](../../project-truth-kit/QA.template.md)

### Prompt

```txt
Review this work before I consider it done.

Project truth:
[paste PRODUCT.md summary]

Task:
[paste TASKS.md current task]

Changes:
[paste diff summary, files, or commit notes]

Return:
1. What matches the task
2. What does not match the task
3. Blocking issues
4. Non-blocking improvements
5. Missing tests or manual checks
6. Responsive or UI risks if relevant
7. Final recommendation

Rules:
- Separate blockers from polish.
- Reference files or flows when possible.
- Do not approve if important checks were not performed.
```

### Gate

Move on only when blockers are fixed or explicitly accepted.

---

## Level 10: Ship and plan the next iteration

### Goal

Finish the cycle cleanly and prepare the next one.

### Output

A handoff note and next iteration plan.

Use `HANDOFF.md` from [Project Truth Kit](../../project-truth-kit/HANDOFF.template.md).

### Prompt

```txt
Prepare the delivery handoff and next iteration plan.

Project truth:
[paste PRODUCT.md summary]

Completed task:
[paste task]

Changes made:
[paste files or summary]

QA result:
[paste QA summary]

Return:
1. Delivery summary
2. What changed
3. What was verified
4. What was not verified
5. Known limitations
6. Next 3 recommended tasks
7. What should be updated in PRODUCT.md, TASKS.md, DECISIONS.md, QA.md, or HANDOFF.md

Rules:
- Be honest about limits.
- Do not claim something was verified if it was not.
- Keep the next iteration small.
```

### Gate

The cycle is complete when you can explain what shipped, what is still missing, and what the next small task is.

---

## Final skill checkpoint

A fresh vibe coder reaches point 10 when they can:

- Define project truth before building
- Keep scope small
- Use prompts that force planning before edits
- Build one vertical slice
- Debug from root cause
- Refactor without behavior drift
- Review output before accepting it
- Maintain `PRODUCT.md`, `RULES.md`, `TASKS.md`, `DECISIONS.md`, `QA.md`, and `HANDOFF.md`
- Ship one small version and plan the next one

---

## Suggested companion resources

- [Project Truth Kit](../../project-truth-kit/README.md)
- [Agent Briefs](../../agent-briefs/README.md)
- [Bug Fix Brief](../../agent-briefs/bug-fix-brief.md)
- [Frontend Rebuild Brief](../../agent-briefs/frontend-rebuild-brief.md)
- [PR Review Brief](../../agent-briefs/pr-review-brief.md)
- [Delivery QA Brief](../../agent-briefs/delivery-qa-brief.md)
- [Beginner Path](./beginner-path.md)
- [Agency Operator Path](./agency-operator-path.md)

---

*← Back to [Paths](./README.md)*
