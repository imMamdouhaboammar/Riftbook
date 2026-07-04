# Repo Audit Brief

Use this brief when you want an AI coding agent to inspect a repository before making changes.

## Best for

- First pass on an unfamiliar repo
- Finding weak structure before development
- Preparing a cleanup plan
- Identifying missing docs, tests, workflows, or configuration
- Creating a safe improvement backlog

## Brief to copy

```txt
You are auditing this repository before making changes.

Goal:
Find the most important issues that affect maintainability, correctness, developer experience, and AI-agent usability.

Project context:
[describe the project]

Repository path or files:
[add path, files, or repo link]

Focus areas:
1. Structure and navigation
2. Documentation quality
3. Setup instructions
4. Test coverage and verification steps
5. Build and CI configuration
6. Risky or confusing code areas
7. Missing project rules for AI agents
8. Security-sensitive or private material that should not be public
9. Generated files that should not be committed
10. Quick wins for the next small commits

Rules:
- Do not edit files yet.
- Read before judging.
- Prefer concrete file paths over general comments.
- Separate critical issues from nice-to-have improvements.
- Do not invent problems if evidence is weak.

Return:
1. Executive summary
2. Repo map
3. Critical issues
4. High-value improvements
5. Missing files or docs
6. Suggested small commits
7. Files to inspect manually
8. Questions before editing
```

## Expected output

The agent should return an audit report with file paths, priority levels, and a suggested commit plan.

## Review checklist

- [ ] The report mentions specific files or folders
- [ ] The report separates facts from assumptions
- [ ] The suggested work can be split into small commits
- [ ] The agent did not edit files during the audit
- [ ] Manual review items are clear

## Related

- [Graphify](../skills/project-intelligence/graphify.md)
- [Graph Intelligence Workflow](../workflows/graph-intelligence-workflow.md)
- [Review Guide](../REVIEW.md)
