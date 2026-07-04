# Bug Fix Brief

Use this brief when you want an AI coding agent to diagnose and fix a specific bug without guessing.

## Best for

- Reproducible bugs
- Runtime errors
- Broken UI behavior
- Failing tests
- Regressions after a recent change
- Confusing edge cases

## Brief to copy

```txt
You are fixing a specific bug.

Goal:
Find the root cause, make the smallest safe fix, and verify the bug is resolved.

Project context:
[describe the project]

Bug description:
[what is broken]

Expected behavior:
[what should happen]

Actual behavior:
[what happens instead]

Reproduction steps:
1. [step]
2. [step]
3. [step]

Relevant files or logs:
[add files, screenshots, logs, or error output]

Constraints:
1. Do not rewrite unrelated code.
2. Do not fix symptoms only.
3. Do not add new dependencies unless necessary.
4. Preserve existing behavior outside the bug.
5. Explain the root cause before editing.

Before editing:
1. Reproduce or reason through the bug.
2. Identify likely files and functions.
3. Explain the root cause.
4. Propose the smallest fix.

After editing:
1. Explain what changed.
2. Explain why it fixes the root cause.
3. Add or suggest a test when possible.
4. Provide manual verification steps.

Return:
1. Root cause
2. Files inspected
3. Fix made
4. Why the fix works
5. Verification steps
6. Regression risks
```

## Expected output

The agent should return a focused bug fix with root-cause reasoning and verification steps.

## Review checklist

- [ ] The root cause is explained
- [ ] The fix is narrow
- [ ] Unrelated code was not changed
- [ ] The bug can be verified manually or by test
- [ ] Regression risks are listed

## Related

- [Workflows](../workflows/README.md)
- [React Doctor](../tools/react-quality/react-doctor.md)
- [Open Code Review](../tools/review-intelligence/open-code-review.md)
