# Shipping Workflow

Final checks and deployment steps to release stable releases.

- **Goal**: Safely deploy application changes without downtime or crashes.
- **When to Use**: Merging features to primary branch or pushing builds to hosting platforms.
- **Inputs**: Completed task branches, test logs.
- **Tools Needed**: Git commands, build runner engine, Code Review Graph (for pre-merge impact validation), Open Code Review (for precise line-level reviews), reviewdog (for routing linter output to PR comments), React Doctor (for React quality gates).

## Steps

1. **Pre-build check**:
   - Clean local workspace, pull latest upstream.
   - Run compilation check.
2. **Test & Review validation**:
   - Run exhaustive test scripts, execute Code Review Graph checks to identify blast-radius risks, run Open Code Review checks on diff ranges, trigger reviewdog to report linter/static-analysis results directly on the PR, and run React Doctor audits for frontend quality.
3. **Commit & Push**:
   - Push code to main branch to trigger automation flows.
4. **Post-deploy check**:
   - Run live smoke tests to verify runtime integrity.

## Quality Checks

- [ ] Does the remote build succeed with zero warnings?
- [ ] Are live database migrations complete and active?
