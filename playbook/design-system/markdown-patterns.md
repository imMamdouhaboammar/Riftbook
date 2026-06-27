# Markdown Patterns

This document defines standard formatting patterns for writing Markdown files in the playbook. Following these ensures a consistent, clean, and highly scannable reading experience on GitHub.

## 1. Callout Blocks

Every signal badge should be followed by a standard blockquote to group the related advice:

```markdown
![PRO TIP](../assets/badges/pro-tip.svg)

> **Write a clear title:** Always start the callout with a bold summary line.
> Add the supporting details or instructions here. Use standard spacing.
```

## 2. Horizontal Rules

Use horizontal rules (`---`) to separate major conceptual sections of a lesson. Avoid back-to-back horizontal rules or using them between small paragraphs.

## 3. Lists and Checklists

- Use standard dashes (`-`) for bullet lists.
- Keep list items concise. Avoid paragraph-length list items.
- For checklists (e.g. `SHIP CHECK` lists), use task notation:
  ```markdown
  - [ ] Action item 1
  - [ ] Action item 2
  ```

## 4. Tables

Keep tables clean and readable. Use tables for:
- Command references
- Tool comparisons
- Reading paths
- Onboarding steps

Example:
```markdown
| Step | Action | Focus |
|---|---|---|
| 1 | Create spec | `PRODUCT.md` |
| 2 | Set rules | `RULES.md` |
```
