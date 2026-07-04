# Graphify vs Code Review Graph

Graphify and Code Review Graph both use graph ideas, but they solve different problems.

Use this comparison when you are deciding whether the agent needs a project map before work or a review map after changes.

## Short answer

| Need | Start with |
|---|---|
| Understand an unfamiliar repo before editing | Graphify |
| Review a PR or local diff for impact | Code Review Graph |
| Plan a refactor safely | Graphify first, then Code Review Graph |
| Find affected flows after a change | Code Review Graph |
| Create a broad project map for onboarding | Graphify |

## What Graphify is for

[Graphify](../skills/project-intelligence/graphify.md) is best used before editing.

It helps the agent understand project structure, important files, relationships, architecture areas, and likely places to inspect.

Use Graphify when:

- The repo is unfamiliar
- The task may affect multiple files
- The agent keeps reading scattered files
- You need a project map before planning
- You want a human-readable project report

## What Code Review Graph is for

[Code Review Graph](../tools/review-intelligence/code-review-graph.md) is best used during review.

It helps the agent inspect changed files through affected symbols, dependents, callers, flows, risk, and possible test gaps.

Use Code Review Graph when:

- You have a PR to review
- You have local changes to inspect
- You need blast-radius analysis
- You want to know what a change could break
- You need a review checklist before merging

## Where they overlap

Both tools can help with project understanding.

The difference is timing:

- Graphify helps before you make changes
- Code Review Graph helps after or during changes

## Recommended workflow

```txt
1. Use Graphify to map the repo.
2. Ask the agent to identify relevant modules and risky areas.
3. Make the smallest useful change.
4. Use Code Review Graph to review the diff.
5. Check affected flows and missing tests.
```

## Use both when

Use both when the task is risky, broad, or unfamiliar.

Examples:

- Authentication refactor
- Routing changes
- Database model changes
- Component architecture cleanup
- Shared utility changes
- Monorepo package changes

## Do not use either when

Skip both when:

- The change is one small typo
- The repo is tiny
- You already know the affected files
- The task does not need architecture context
- A normal file read is enough

## Agent prompt

```txt
Use Graphify first and Code Review Graph second.

Task:
[describe task]

Before editing:
1. Use Graphify to identify the relevant project areas.
2. List files that need manual inspection.
3. Explain risky relationships.

After editing:
1. Use Code Review Graph to inspect the diff.
2. Report affected symbols and flows.
3. List missing tests and manual checks.
```

## Related

- [Graph Intelligence Stack](../frameworks/graph-intelligence-stack.md)
- [Graph Intelligence Workflow](../workflows/graph-intelligence-workflow.md)
- [Graphify](../skills/project-intelligence/graphify.md)
- [Code Review Graph](../tools/review-intelligence/code-review-graph.md)
