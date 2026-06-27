# Debugging Workflow

Systematic tracking, verification, and resolution of codebase bugs and errors.

- **Goal**: Identify root-cause of application issues and fix them without introducing regressions.
- **When to Use**: Tests fail, application crashes, or user reports unexpected behavior.
- **Inputs**: Exception trace, error logs, or bug report description.
- **Tools Needed**: IDE, terminal debugger, Chrome DevTools (if web app), Code Review Graph (for blast-radius and impact mapping), React Doctor (for React state/effects/performance analysis).

## Steps

1. **Reproduction**:
   - Write a failing test or perform manual actions to trigger the error reliably.
2. **Analysis**:
   - Feed the traceback or console logs to the AI debugging assistant.
   - Trace backwards from the crash location.
3. **Drafting Fix**:
   - Modify target files to resolve the issue.
   - Keep changes isolated to the bug scope.
4. **Verification**:
   - Re-run reproduction steps to ensure the error does not trigger.
   - Run the full test suite to catch regressions.

## Quality Checks

- [ ] Does the bug reproduce under the same conditions? (Verify fix)
- [ ] Do all pre-existing tests pass successfully?
