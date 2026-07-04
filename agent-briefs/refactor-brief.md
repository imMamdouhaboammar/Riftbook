# Refactor Brief

Use this brief when you want an AI coding agent to refactor safely without changing product behavior by accident.

## Best for

- Cleaning messy code
- Splitting large files
- Improving naming and structure
- Reducing duplication
- Moving logic into clearer modules
- Preparing code for tests or future features

## Brief to copy

```txt
You are refactoring this project area.

Goal:
Improve structure, readability, and maintainability without changing intended behavior.

Project context:
[describe the project]

Target area:
[files, folders, components, functions, or modules]

Current problem:
[describe what feels messy, fragile, duplicated, or hard to understand]

Constraints:
1. Preserve current behavior unless I explicitly approve a behavior change.
2. Keep the refactor small and reviewable.
3. Avoid broad rewrites.
4. Do not introduce new dependencies unless necessary.
5. Explain every file you modify.
6. Keep public APIs stable unless the task requires otherwise.

Before editing:
1. Inspect the target files.
2. Identify dependencies and callers.
3. Propose a small refactor plan.
4. List risks and files that need manual review.

After editing:
1. Summarize what changed.
2. Explain why the new structure is better.
3. List behavior that should remain unchanged.
4. Provide verification steps.
5. Suggest follow-up commits if needed.

Return:
1. Plan
2. Files inspected
3. Changes made
4. Behavior preserved
5. Verification steps
6. Remaining risks
```

## Expected output

The agent should produce a small, reviewable refactor with a clear explanation of behavior preservation.

## Review checklist

- [ ] The refactor has a narrow scope
- [ ] Behavior changes are not mixed into cleanup
- [ ] File movement or renaming is justified
- [ ] Public interfaces are preserved or explicitly noted
- [ ] Verification steps are practical

## Related

- [Code Review Graph](../tools/review-intelligence/code-review-graph.md)
- [Graphify vs Code Review Graph](../comparisons/graphify-vs-code-review-graph.md)
- [Workflows](../workflows/README.md)
