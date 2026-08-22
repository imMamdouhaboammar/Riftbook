---
name: add-new-github-issue-template
description: Workflow command scaffold for add-new-github-issue-template in Riftbook.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-github-issue-template

Use this workflow when working on **add-new-github-issue-template** in `Riftbook`.

## Goal

Adds a new issue template to guide contributors in reporting bugs or proposing resources.

## Common Files

- `.github/ISSUE_TEMPLATE/*.yml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create a new YAML file in .github/ISSUE_TEMPLATE/
- Define the structure and fields for the template

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.