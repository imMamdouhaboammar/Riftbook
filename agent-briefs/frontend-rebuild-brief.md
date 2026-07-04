# Frontend Rebuild Brief

Use this brief when you want an AI coding agent to rebuild, polish, or correct a frontend section while preserving design intent.

## Best for

- Rebuilding a section from screenshot or reference
- Fixing AI-generated UI slop
- Improving spacing, hierarchy, typography, and responsiveness
- Matching an existing design system
- Cleaning a component without changing the product goal

## Brief to copy

```txt
You are rebuilding or polishing a frontend section.

Goal:
Improve the frontend quality while preserving the intended content, layout purpose, and product meaning.

Project context:
[describe the product and page]

Target section:
[component, route, file, or screenshot]

Design intent:
[describe the intended visual direction]

Reference:
[add screenshot, link, design notes, or current component path]

Must preserve:
1. Product meaning
2. Main copy
3. Required actions
4. Accessibility basics
5. Responsive behavior
6. Existing brand direction unless I say otherwise

Improve:
1. Layout structure
2. Spacing rhythm
3. Visual hierarchy
4. Typography
5. Component consistency
6. Mobile behavior
7. Empty, loading, and error states if relevant

Constraints:
1. Do not add random sections.
2. Do not invent fake data unless placeholders are requested.
3. Do not introduce a new design system.
4. Do not hide overflow problems with shortcuts.
5. Do not break existing routes or state.

Before editing:
1. Inspect the current implementation.
2. Identify design and code problems.
3. Propose a small rebuild plan.

After editing:
1. Explain what changed.
2. List responsive checks.
3. List accessibility checks.
4. Mention any manual visual QA needed.

Return:
1. Design diagnosis
2. Rebuild plan
3. Files changed
4. Visual QA checklist
5. Remaining risks
```

## Expected output

The agent should return a cleaner frontend implementation with a clear visual QA checklist.

## Review checklist

- [ ] The design intent is preserved
- [ ] The section is responsive
- [ ] Spacing and hierarchy are improved
- [ ] Accessibility basics are considered
- [ ] No unrelated sections were added

## Related

- [Impeccable](../skills/top-selected/impeccable.md)
- [Taste Skill](../skills/hot-skills/taste-skill.md)
- [React Doctor](../tools/react-quality/react-doctor.md)
