# Shipping Workflow

Final checks and deployment steps to release stable releases.

- **Goal**: Safely deploy application changes without downtime or crashes.
- **When to Use**: Merging features to primary branch or pushing builds to hosting platforms.
- **Inputs**: Completed task branches, test logs.
- **Tools Needed**: Git commands, build runner engine, Code Review Graph (for pre-merge impact validation).

## Steps

1. **Pre-build check**:
   - Clean local workspace, pull latest upstream.
   - Run compilation check.
2. **Test & Review validation**:
   - Run exhaustive test scripts and execute Code Review Graph checks to identify blast-radius risks.
3. **Commit & Push**:
   - Push code to main branch to trigger automation flows.
4. **Post-deploy check**:
   - Run live smoke tests to verify runtime integrity.

## Quality Checks

- [ ] Does the remote build succeed with zero warnings?
- [ ] Are live database migrations complete and active?
