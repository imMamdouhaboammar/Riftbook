# PR Review Brief

Use this brief when you want an AI coding agent to review a pull request, branch, or local diff before merge.

## Best for

- Reviewing risky changes
- Checking affected flows
- Finding missing tests
- Reviewing code written by an AI agent
- Preparing a merge decision
- Creating review comments for a contributor

## Brief to copy

```txt
You are reviewing this change before merge.

Goal:
Assess correctness, risk, maintainability, test coverage, and workflow impact.

Project context:
[describe the project]

Change under review:
[PR link, branch name, diff, or files]

Focus areas:
1. Correctness
2. Affected flows
3. Missing tests
4. Breaking changes
5. State, data, or API assumptions
6. Accessibility or UX regressions if frontend is involved
7. Documentation updates needed
8. Files that require manual review

Rules:
1. Do not rewrite the change unless I ask.
2. Review the diff, not the whole repo randomly.
3. Separate blocking issues from suggestions.
4. Use file paths when possible.
5. Avoid vague comments.

Return:
1. Merge recommendation
2. Blocking issues
3. Non-blocking suggestions
4. Affected files and flows
5. Missing tests or checks
6. Manual QA steps
7. Suggested follow-up commits
```

## Expected output

The agent should return a practical review that helps decide whether the change is safe to merge.

## Review checklist

- [ ] Blocking issues are separated from suggestions
- [ ] The review references specific files or flows
- [ ] Missing tests are named clearly
- [ ] Manual QA steps are practical
- [ ] The merge recommendation is explicit

## Related

- [Code Review Graph](../tools/review-intelligence/code-review-graph.md)
- [Open Code Review](../tools/review-intelligence/open-code-review.md)
- [reviewdog](../tools/review-intelligence/reviewdog.md)
- [Graphify vs Code Review Graph](../comparisons/graphify-vs-code-review-graph.md)
