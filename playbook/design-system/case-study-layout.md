# Case Study Layout

This layout is used for deep-dive stories and workflow validation case studies (e.g. `Delegate Team` in `playbook/stories/`).

---

## 1. Title and Badges
- **Purpose:** Declare the story name and apply immediate thematic signal classifications.
- **When to use:** The absolute top of every case study/story document.
- **When not to use:** For standard lesson files or readme files.
- **Markdown example:**
  ```markdown
  # Case Study: [Title]

  ![STORY](../assets/badges/story.svg) ![FIELD TESTED](../assets/badges/field-tested.svg)
  ```
- **Common mistakes:** Omitting the `STORY` badge, or using lesson metadata tables (Level/Duration) which are reserved for lessons.
- **Good example:** `/playbook/stories/02-when-i-should-have-used-codex.md`
- **"Do not" rules for agents:**
  * Do not place lesson hero images or metadata tables in case study documents.

---

## 2. Core Components (The 5-Point Structure)
- **Purpose:** Force case study documents into a consistent retrospect template to ensure readable lessons.
- **When to use:** The main content sections of case studies.
- **When not to use:** To write open-ended blog posts or general opinions.
- **Markdown example:**
  ```markdown
  ## 1. The Project
  [Description of what was built]

  ## 2. The Problem
  [The specific workflow bottleneck]

  ## 3. The Agent Setup
  [Which tools and how they were instructed]

  ## 4. What Went Wrong
  [Decisions that failed]

  ## 5. Reusable Lessons
  [What to do instead]
  ```
- **Common mistakes:** Changing section titles or combining multiple sections.
- **Good example:** `/playbook/stories/03-a-project-i-overcomplicated.md`
- **"Do not" rules for agents:**
  * Do not omit any of the 5 core headings.
  * Do not write fictional case studies; always ground content in observed real developer events.
