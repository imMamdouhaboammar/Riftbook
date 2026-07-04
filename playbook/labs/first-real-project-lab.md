# First Real Project Lab

This lab helps a fresh vibe coder build one real project from idea to handoff.

It follows the [Fresh Vibe Coder Path](../paths/fresh-vibe-coder-path.md), but turns it into a practical build exercise.

## Lab objective

Build one small working project without asking the agent to generate the whole app at once.

By the end, you should have:

- A clear project objective
- Project truth files
- One simple stack
- One primary user flow
- One vertical slice
- A bug fix or debug pass
- A small refactor
- A QA note
- A handoff note

## Recommended project types

Pick one simple project:

| Project type | Example |
|---|---|
| Personal utility | Habit tracker, reading tracker, simple planner |
| Marketing page | Landing page for a small product or service |
| Internal tool | Lead tracker, content idea board, task board |
| Directory | Small list with filters and detail view |
| Calculator | Pricing calculator, ROI calculator, budget splitter |

Avoid complex projects for this lab.

Do not start with marketplaces, social networks, payments, chat systems, or multi-role dashboards.

---

## Step 1: Pick a small project idea

### Output

A one-sentence idea.

### Prompt

```txt
Help me choose a small first project for vibe coding practice.

My interests:
[write interests]

My current skill level:
[beginner / intermediate]

Return 5 ideas.

For each idea, include:
1. What it is
2. Why it is good for a first build
3. What the first version includes
4. What to avoid in version one

Rules:
- Keep ideas small.
- Prefer projects with one primary flow.
- Avoid auth, payments, realtime features, and complex dashboards.
```

### Checkpoint

Pick one idea only.

---

## Step 2: Create project truth

### Output

Drafts for:

- `PRODUCT.md`
- `RULES.md`
- `TASKS.md`

Use the [Project Truth Kit](../../project-truth-kit/README.md).

### Prompt

```txt
Create initial project truth files for this first project.

Project idea:
[paste selected idea]

Use this structure:
1. PRODUCT.md
2. RULES.md
3. TASKS.md

Keep the project small.

Return the content for each file.

Rules:
- Do not add future features.
- Mark assumptions clearly.
- TASKS.md should include only the first 3 small tasks.
```

### Checkpoint

Do not build until these files are ready.

---

## Step 3: Choose the stack

### Output

A simple stack and setup commands.

### Prompt

```txt
Recommend the simplest stack for this project.

Project truth:
[paste PRODUCT.md]

Constraints:
- I am learning the real process.
- I want a small working version.
- I want to avoid unnecessary complexity.

Return:
1. Recommended stack
2. Why it fits
3. What not to add yet
4. Setup commands
5. First folder structure
6. Risks
```

### Checkpoint

You should understand what each tool is doing before installing it.

---

## Step 4: Define one user flow

### Output

One clear flow and screen map.

### Prompt

```txt
Define the first user flow.

Project truth:
[paste PRODUCT.md]

Return:
1. Primary user flow
2. Screens or sections needed
3. User actions
4. Empty state
5. Error state
6. What can wait until later

Rules:
- Only one primary flow.
- No extra features.
- Keep the first version usable.
```

### Checkpoint

If there is more than one core flow, choose one and delay the rest.

---

## Step 5: Build the first vertical slice

### Output

One working slice.

### Prompt

```txt
Build the first vertical slice only.

Project truth:
[paste PRODUCT.md and RULES.md]

Current task:
[paste current task from TASKS.md]

User flow:
[paste Step 4 output]

Before editing:
1. Inspect the files needed.
2. Return a short plan.
3. List files you expect to change.
4. List risks.

After editing:
1. Summarize what changed.
2. List files changed.
3. Explain how to run it.
4. Explain how to verify it.
5. List what is not implemented.

Rules:
- Do not build outside the current task.
- Keep the change small.
```

### Checkpoint

The slice should run or have a clear blocker.

---

## Step 6: Run a debug pass

### Output

One root-cause diagnosis.

Use [Bug Fix Brief](../../agent-briefs/bug-fix-brief.md).

### Prompt

```txt
Run a debug pass on the current project.

Expected behavior:
[write expected behavior]

Actual behavior:
[write actual behavior]

Relevant files or errors:
[paste details]

Return:
1. Likely root cause
2. Files to inspect
3. Smallest fix
4. Verification steps
5. Regression risks

Rules:
- Do not rewrite unrelated code.
- Do not guess without evidence.
```

### Checkpoint

The agent must explain the root cause before the fix.

---

## Step 7: Refactor one small area

### Output

One small cleanup.

Use [Refactor Brief](../../agent-briefs/refactor-brief.md).

### Prompt

```txt
Refactor one small area of the project.

Target area:
[file or component]

Problem:
[what is messy]

Rules:
- Preserve behavior.
- Do not add features.
- Keep the change small.

Return:
1. Refactor plan
2. Files changed
3. Why behavior should be unchanged
4. Verification steps
5. Follow-up ideas, if any
```

### Checkpoint

If the refactor changes behavior, it is too broad.

---

## Step 8: Run QA

### Output

A QA report.

Use [Delivery QA Brief](../../agent-briefs/delivery-qa-brief.md).

### Prompt

```txt
Run QA before I consider this project done.

Project truth:
[paste PRODUCT.md]

Completed work:
[paste summary]

Return:
1. Scope match
2. Blockers
3. Polish items
4. Manual QA checklist
5. Risks
6. Ready or not ready

Rules:
- Separate blockers from polish.
- Mark anything not verified.
```

### Checkpoint

Fix blockers before handoff.

---

## Step 9: Create handoff

### Output

A handoff note.

Use `HANDOFF.md` from the [Project Truth Kit](../../project-truth-kit/HANDOFF.template.md).

### Prompt

```txt
Create the final handoff note.

Project:
[paste project name]

What changed:
[paste summary]

QA result:
[paste QA summary]

Return:
1. Delivery summary
2. Files changed
3. What was verified
4. What was not verified
5. Known limitations
6. Next 3 tasks
```

### Checkpoint

You should know exactly what shipped and what remains.

---

## Step 10: Review what you learned

### Output

A short learning review.

### Prompt

```txt
Help me review what I learned from this build.

Project:
[paste project summary]

Process notes:
[paste what happened]

Return:
1. What went well
2. What went wrong
3. Which prompts helped most
4. Which mistakes I almost made
5. What I should improve next time
6. My next small project idea
```

## Done criteria

You finished the lab when you have:

- Project truth files
- One working vertical slice
- One debug pass
- One small refactor
- One QA report
- One handoff note
- One learning review

---

*← Back to [Labs](./README.md)*
