# RULES.md

Use this file to define how the agent should work inside the project.

The agent should follow these rules unless the task explicitly says otherwise.

## General rules

- Read `PRODUCT.md` and `TASKS.md` before editing.
- Ask for a plan before changing broad areas.
- Keep changes small and reviewable.
- Do not mix refactor, feature work, and bug fixing in the same change.
- Explain every file changed.
- Prefer project conventions over personal preference.

## Stack rules

**Framework:** [framework]

**Language:** [language]

**Package manager:** [npm / pnpm / yarn / bun / other]

**Build command:** `[command]`

**Test command:** `[command]`

**Lint command:** `[command]`

## Coding rules

- [Rule]
- [Rule]
- [Rule]

## Design rules

- [Rule]
- [Rule]
- [Rule]

## Content rules

- [Rule]
- [Rule]
- [Rule]

## Naming rules

- [Rule]
- [Rule]
- [Rule]

## Files the agent should avoid unless asked

- [File or folder]
- [File or folder]
- [File or folder]

## Generated files policy

Generated files should stay out of commits unless this file explicitly allows them.

Allowed generated files:

- [File or folder]

Ignored generated files:

- [File or folder]

## Review rules

Before finishing, the agent should return:

1. Files changed
2. Why each file changed
3. Commands run
4. Checks passed
5. Remaining risks
