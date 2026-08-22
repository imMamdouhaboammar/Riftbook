---
name: implement-and-integrate-new-repository-checker
description: Workflow command scaffold for implement-and-integrate-new-repository-checker in Riftbook.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /implement-and-integrate-new-repository-checker

Use this workflow when working on **implement-and-integrate-new-repository-checker** in `Riftbook`.

## Goal

Implements a new repository quality checker, adds corresponding tests, and integrates it into CI workflows.

## Common Files

- `scripts/*.py`
- `tests/*.py`
- `.github/workflows/*.yml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Add a new checker script in scripts/
- Write corresponding tests in tests/
- Integrate the checker into GitHub Actions by adding a workflow YAML

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.