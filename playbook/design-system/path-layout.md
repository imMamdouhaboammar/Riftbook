# Path Layout

This document defines how reading paths in `playbook/paths/` are structured to guide developers through curated sequences.

---

## 1. Title and Meta
- **Purpose:** Identify the specific target persona and the total length of the reading path.
- **When to use:** Placed at the top of every path file in `playbook/paths/`.
- **When not to use:** For standard lesson files.
- **Markdown example:**
  ```markdown
  # Solo Builder Path

  **Path Profile:** Solo Builder | **Length:** 11 Lessons

  ---
  ```
- **Common mistakes:** Using dynamic shields.io badges or omitting the total lesson count.
- **Good example:** `/playbook/paths/beginner-path.md`
- **"Do not" rules for agents:**
  * Do not use external shields.io links for path metadata headers.
  * Do not leave lesson counts out of sync with the lessons listed in the table.

---

## 2. Persona Description
- **Purpose:** Describe the target profile, their common friction points, and why this path is relevant to them.
- **When to use:** Placed immediately below the header divider.
- **When not to use:** To list generic developer onboarding rules. Keep it specific to the profile.
- **Markdown example:**
  ```markdown
  This reading path is designed for solo developers who must manage the entire product lifecycle...
  ```
- **Common mistakes:** Making the description too broad or generic.
- **Good example:** `/playbook/paths/frontend-path.md`
- **"Do not" rules for agents:**
  * Do not write descriptions longer than two short paragraphs.

---

## 3. Curated Lessons Order (Sequence Table)
- **Purpose:** Provide a clear, tabular view of the lesson sequence, why each lesson matters, and its core status.
- **When to use:** The central body component of every path file.
- **When not to use:** Outside path files.
- **Markdown example:**
  ```markdown
  | Sequence | Lesson | Why it matters | Status |
  |---|---|---|---|
  | 1 | [From MVP Idea to Agent-Ready Spec](../getting-started/01-turn-your-mvp-idea-into-an-agent-ready-spec.md) | Baseline setup | Core |
  ```
- **Common mistakes:** Using incorrect relative paths to lesson files, or leaving columns empty.
- **Good example:** `/playbook/paths/solo-builder-path.md`
- **"Do not" rules for agents:**
  * Do not use absolute repository links; links must be relative to the `/playbook/paths/` folder.
  * Do not skip the "Why it matters" column.

---

## 4. Required Tools and Skills
- **Purpose:** Outline the concrete utilities the builder must install and configure before executing the path.
- **When to use:** Following the sequence table.
- **When not to use:** If no custom stack choices are recommended for the path.
- **Markdown example:**
  ```markdown
  ## Required Tools

  * **Claude Code** (CLI agent)
  * **Cursor** (Editor workspace)
  ```
- **Common mistakes:** Listing general IDEs or tools that aren't specific to the path's focus.
- **Good example:** `/playbook/paths/agency-operator-path.md`
- **"Do not" rules for agents:**
  * Do not list more than 5 tools under this section.

---

## 5. Expected Outcome
- **Purpose:** Define the exact skill milestone or repository state the reader will achieve after completing the path.
- **When to use:** The final section of a path document.
- **When not to use:** To list abstract developer career advice. Keep it repository-focused.
- **Markdown example:**
  ```markdown
  ## Expected Outcome

  By the end of this path, you will have a production-ready repository truth layer and...
  ```
- **Common mistakes:** Being too vague (e.g. "you will code better").
- **Good example:** `/playbook/paths/product-minded-path.md`
- **"Do not" rules for agents:**
  * Do not write outcomes that cannot be validated in a codebase.
