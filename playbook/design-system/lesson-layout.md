# Lesson Layout

Every playbook lesson must follow this standard layout sequence. Future agents must respect this structure.

---

## 1. Lesson Hero Card
- **Purpose:** Visually identify the lesson title, sequence, and key promise using the playbook SVG style.
- **When to use:** Placed at the absolute top of every lesson.
- **When not to use:** Root READMEs or section index files.
- **Markdown example:**
  ```markdown
  ![01 - Planning the Build](../assets/lesson-heroes/01-planning-the-build.svg)
  ```
- **Common mistakes:** Omitting the card or putting text headers above it.
- **Good example:** `/playbook/core-workflows/01-planning-the-build.md`
- **"Do not" rules for agents:**
  * Do not create lesson files without a matching SVG hero card.
  * Do not put markdown headers above the hero card.

---

## 2. Metadata Table
- **Purpose:** Inform the reader about difficulty, reading time, path location, prerequisites, and key tooling.
- **When to use:** Directly under the hero card (separated by one blank line).
- **When not to use:** On section index READMEs or path files.
- **Markdown example:**
  ```markdown
  | Level | Duration | Path | Prerequisites | Tools Mentioned |
  |---|---|---|---|---|
  | Beginner | 5 mins | Start Here | None | Claude Code |
  ```
- **Common mistakes:** Adding columns or missing the table divider row.
- **Good example:** `/playbook/mistakes/01-common-vibe-coding-mistakes.md`
- **"Do not" rules for agents:**
  * Do not change the 5-column header names.
  * Do not omit the metadata table.

---

## 3. Active Signals Block
- **Purpose:** Preview the types of inline visual callouts that will appear in the lesson content.
- **When to use:** Placed under the metadata table to serve as a visual key.
- **When not to use:** Outside of canonical lesson headers.
- **Markdown example:**
  ```markdown
  ### Active Signals in this Lesson
  - ![PRO TIP](../assets/badges/pro-tip.svg) · ![RED FLAG](../assets/badges/red-flag.svg)
  ```
- **Common mistakes:** Listing badges that are not actually used in the text.
- **Good example:** `/playbook/core-workflows/03-debugging-with-agents.md`
- **"Do not" rules for agents:**
  * Do not list duplicate badges in the active signals block.
  * Do not list a badge unless it is physically present in the file.

---

## 4. Introduction
- **Purpose:** Describe the core problem, why current practices fail, and the promise of this lesson.
- **When to use:** Immediately following the header divider.
- **When not to use:** As a lengthy conceptual tutorial. Keep it under three short paragraphs.
- **Markdown example:**
  ```markdown
  ## Why This Matters

  Most vibe coders get stuck because...
  ```
- **Common mistakes:** Explaining complex systems in the intro before defining the problem.
- **Good example:** `/playbook/getting-started/00-step-zero-build-the-project-truth.md`
- **"Do not" rules for agents:**
  * Do not use complex diagrams in the introduction block.

---

## 5. Core Content
- **Purpose:** Walk the reader step-by-step through the workflow or solution.
- **When to use:** The main body of the lesson, structured by standard markdown subheadings (`##`).
- **When not to use:** As an unstructured wall of text.
- **Markdown example:**
  ```markdown
  ## Step 1: Write a Spec

  Before coding, write a `PRODUCT.md`...
  ```
- **Common mistakes:** Adding too many sub-levels (`####`) or omitting callouts.
- **Good example:** `/playbook/getting-started/01-turn-your-mvp-idea-into-an-agent-ready-spec.md`
- **"Do not" rules for agents:**
  * Do not write prose blocks longer than 150 words without a heading, list, or callout break.

---

## 6. Actionable Task / Try It
- **Purpose:** Direct the reader to immediately apply what they learned on their local setup.
- **When to use:** Near the end of the lesson, using the `TRY IT` badge.
- **When not to use:** If the lesson is purely historical or conceptual.
- **Markdown example:**
  ```markdown
  ## Try It

  ![TRY IT](../assets/badges/try-it.svg)

  Write a three-line prompt and test it in your console...
  ```
- **Common mistakes:** Making the exercise too large or open-ended.
- **Good example:** `/playbook/core-workflows/01-planning-the-build.md`
- **"Do not" rules for agents:**
  * Do not write multi-hour tasks; keep the exercise under 10 minutes.

---

## 7. Ship Check
- **Purpose:** Provide a bulletproof checklist of verification criteria that proves the user has completed the lesson's goal successfully.
- **When to use:** Immediately before the footer navigation link.
- **When not to use:** On mistakes logs, stories, or case studies.
- **Markdown example:** Refer to [Markdown Patterns](./markdown-patterns.md#4-ship-check).
- **Common mistakes:** Formatting checkboxes as standard bullet items without markdown task box syntax (`[ ]`).
- **Good example:** `/playbook/getting-started/03-build-your-default-stack.md`
- **"Do not" rules for agents:**
  * Do not use pre-checked boxes (`[x]`) in the Ship Check template list.

---

## 8. Footer Link
- **Purpose:** Provide next-step navigation linking to the section README and the next lesson.
- **When to use:** The last line of every lesson.
- **When not to use:** Anywhere else in the document.
- **Markdown example:**
  ```html
  <p align="center">
    <a href="./01-turn-your-mvp-idea-into-an-agent-ready-spec.md">
      <img src="../assets/navigation/prev-lesson.svg" alt="Previous Lesson" />
    </a>
    <a href="./README.md">
      <img src="../assets/navigation/back-to-index.svg" alt="View Index" />
    </a>
    <a href="./03-build-your-default-stack.md">
      <img src="../assets/navigation/next-lesson.svg" alt="Next Lesson" />
    </a>
  </p>
  ```
- **Common mistakes:** Linking to deprecated lesson paths, using raw text arrows, or using absolute file system directories.
- **Good example:** `/playbook/getting-started/01-turn-your-mvp-idea-into-an-agent-ready-spec.md`
- **"Do not" rules for agents:**
  * Do not omit the back/next footer links.
  * Do not leave broken local directory references.
