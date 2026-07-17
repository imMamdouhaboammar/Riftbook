# Debugging and Recovery Lab

Use this lab when an AI coding agent has produced a broken build, repeated patches, or a fix that creates new regressions.

The lab trains one habit: stop patching symptoms and build an evidence-backed recovery path.

## Objective

By the end, you should have:

- A reproducible failure
- A short evidence log
- A root-cause hypothesis ranked by confidence
- One minimal fix
- Regression coverage for the failed behavior
- A recovery note another builder can follow

## Scenario

Choose a real project with one confirmed failure. Good examples include:

- A route returns the wrong state after refresh
- A form submits twice
- A mobile layout hides an important action
- A build passes locally but fails in CI
- A dependency update breaks one flow
- A fix works for one case but fails for another

Do not use an invented bug. The exercise depends on actual evidence.

## Rules

1. Do not edit code before reproducing the failure.
2. Do not ask the agent for ten possible fixes.
3. Do not change unrelated files.
4. Do not weaken or delete a failing test.
5. Stop after each checkpoint and review the evidence.
6. Keep a recovery log while working.

## Step 1: Capture the failure

Record:

```txt
Failure title:
Expected behavior:
Actual behavior:
Exact reproduction steps:
Environment:
First known occurrence:
Relevant error output:
Files suspected before investigation:
```

Run the smallest command or interaction that reproduces the issue. Save the exact output rather than paraphrasing it.

### Checkpoint

Continue only when another person could reproduce the same failure from your notes.

## Step 2: Ask for an evidence map

Give the agent this prompt:

```txt
Investigate this confirmed failure without editing files yet.

Failure record:
[paste the completed failure record]

Return an evidence map with:
1. the execution path involved
2. files and symbols that control the behavior
3. the earliest point where actual behavior diverges from expected behavior
4. logs, tests, state, or data needed to confirm each hypothesis
5. hypotheses ranked as high, medium, or low confidence
6. the smallest next experiment

Do not propose a fix until the divergence point is supported by evidence.
```

Verify the agent's file references against the repository.

## Step 3: Run one discriminating experiment

Choose the experiment that separates the top two hypotheses with the least code or configuration change.

Examples:

- Add one temporary assertion in a local test
- Compare input state before and after one function
- Run the failing test with verbose output
- Inspect the generated build artifact
- Reproduce with and without one dependency or feature flag

Record:

```txt
Experiment:
Hypothesis tested:
Observed result:
Hypothesis strengthened or rejected:
Temporary changes removed:
```

### Checkpoint

You should now be able to name the most likely root cause and explain why the strongest alternative is weaker.

## Step 4: Define the minimal fix contract

Before editing, write:

```txt
Root cause:
Behavior that must change:
Behavior that must remain unchanged:
Files expected to change:
Regression test required:
Checks required before completion:
```

Then use this prompt:

```txt
Implement the smallest fix that satisfies this contract.

[paste the fix contract]

Constraints:
1. Touch only the required files.
2. Add or update a regression test that fails before the fix and passes after it.
3. Do not suppress errors or relax assertions.
4. Do not refactor unrelated code.
5. Explain any scope expansion before making it.
6. After editing, list each changed file and its purpose.
```

## Step 5: Verify the recovery

Run checks in this order:

1. The focused regression test
2. The nearest related test group
3. Lint, type-check, or formatting for touched code
4. The full test or build command available in the repository
5. The original manual reproduction steps

Record every command and result.

```txt
Check:
Command:
Result:
Evidence:
```

A fix is incomplete when only the new test passes.

## Step 6: Review for accidental damage

Inspect the full diff and answer:

- Did the change alter behavior outside the failure path?
- Was any debug output left behind?
- Were temporary fixtures or generated files committed?
- Did a test become less strict?
- Does the commit include unrelated cleanup?
- Can the fix be reverted independently?

Split unrelated work into another branch instead of hiding it in the recovery commit.

## Step 7: Write the recovery note

Create a concise handoff:

```txt
Problem:
Root cause:
Evidence:
Fix:
Regression coverage:
Checks run:
Known limits:
Follow-up work:
```

The note should let a reviewer understand the change without reconstructing the full debugging session.

## Completion gate

The lab is complete only when:

- [ ] The original failure is reproducible from written steps
- [ ] The divergence point is supported by evidence
- [ ] The fix is smaller than the investigation scope
- [ ] A regression test covers the failed behavior
- [ ] Related checks pass
- [ ] Manual reproduction confirms the recovery
- [ ] Temporary instrumentation is removed
- [ ] The diff contains no unrelated work
- [ ] Remaining uncertainty is documented

## Failure modes to watch

| Failure mode | Correct response |
|---|---|
| The agent edits before reproducing | Revert the edit and restart from the failure record |
| Many hypotheses are listed without evidence | Select one discriminating experiment |
| The proposed fix changes several modules | Ask which evidence requires each file |
| The new test only tests implementation details | Test the user-visible or contract-level behavior |
| CI fails after the focused test passes | Treat CI as new evidence, not noise |
| The agent suggests disabling a check | Reject it and investigate the actual failure |

## Related resources

- [Debugging with Agents](../core-workflows/03-debugging-with-agents.md)
- [Bug Fix Brief](../../agent-briefs/bug-fix-brief.md)
- [PR Review Brief](../../agent-briefs/pr-review-brief.md)
- [Code Review Graph](../../tools/review-intelligence/code-review-graph.md)
- [Common Vibe Coding Mistakes](../mistakes/01-common-vibe-coding-mistakes.md)

*Back to [Labs](./README.md) or [Playbook Home](../README.md).*