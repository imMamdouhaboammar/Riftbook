# Components

The Riftbook Visual System is composed of 9 core components designed to improve readability and scanability.

---

## 1. Playbook Cover Card
- **Purpose:** Provide a visually striking entry point for the entire repository.
- **When to use:** Only at the absolute top of the main `/playbook/README.md`.
- **When not to use:** Anywhere else (no lessons, no sub-READMEs).
- **Markdown example:**
  ```markdown
  ![The Real Vibe Coding Playbook](./assets/branding/cover.svg)
  ```
- **Common mistakes:** Linking to it using absolute web URLs instead of relative paths, or embedding it twice.
- **Good example:** `/playbook/README.md`
- **"Do not" rules for agents:**
  * Do not copy the cover card SVG to other directories.
  * Do not change the image alt text from `The Real Vibe Coding Playbook`.

---

## 2. Section Header Cards
- **Purpose:** Serve as a clean, branded banner at the entry point of a playbook section.
- **When to use:** Only at the top of section index README files (e.g., `/playbook/getting-started/README.md`).
- **When not to use:** Inside individual lessons or learning paths.
- **Markdown example:**
  ```markdown
  ![Getting Started](../assets/section-headers/getting-started.svg)
  ```
- **Common mistakes:** Using a lesson hero SVG in place of a section header.
- **Good example:** `/playbook/getting-started/README.md`
- **"Do not" rules for agents:**
  * Do not use `<img src="..." />` tags with pixel dimensions for section headers.
  * Do not point to assets outside of `assets/section-headers/`.

---

## 3. Lesson Hero Cards
- **Purpose:** Establish the lesson number, category, and direct value promise as soon as the reader opens the page.
- **When to use:** At the top of every single lesson markdown page (e.g., `/playbook/core-workflows/01-planning-the-build.md`).
- **When not to use:** On section READMEs or main directories.
- **Markdown example:**
  ```markdown
  ![01 - Planning the Build](../assets/lesson-heroes/01-planning-the-build.svg)
  ```
- **Common mistakes:** Placing text or headings above the Hero SVG card.
- **Good example:** `/playbook/core-workflows/01-planning-the-build.md`
- **"Do not" rules for agents:**
  * Do not insert raw text headers or titles above the hero card.
  * Do not reference lesson heroes that do not exist on disk.

---

## 4. Signal Badges
- **Purpose:** Deliver immediate visual categorizations of advice block type within the lesson body text.
- **When to use:** Before high-value instructions, warnings, tools, or tips.
- **When not to use:** At the beginning of every paragraph or to decorate general prose.
- **Markdown example:**
  ```markdown
  ![PRO TIP](../assets/badges/pro-tip.svg)
  ```
- **Common mistakes:** Using shields.io links instead of local SVG files, or cluttering text by putting three badges side-by-side.
- **Good example:** `/playbook/mistakes/03-things-that-look-smart-but-hurt.md`
- **"Do not" rules for agents:**
  * Do not use external shields.io links inside lessons; always use relative links to the local `assets/badges/` folder.
  * Do not combine warning and positive badges on the same paragraph block.

---

## 5. Callout Blocks
- **Purpose:** Draw high-contrast attention to critical tips, warnings, or personal confessions.
- **When to use:** Highlighting highly actionable rules or critical failure modes.
- **When not to use:** For lengthy blocks of code or general narrative explanation.
- **Markdown example:**
  ```markdown
  ![DON'T BREAK](../assets/badges/dont-break.svg)

  > Always ensure all active tasks are recorded in `TASKS.md` before ending a session.
  ```
- **Common mistakes:** Omitting the signal badge above the blockquote, or nesting bullet points inside callouts.
- **Good example:** `/playbook/core-workflows/02-working-with-multiple-agents.md`
- **"Do not" rules for agents:**
  * Do not use the `>` character without placing a corresponding SVG signal badge above it.
  * Do not write multi-paragraph blockquotes.

---

## 6. Learning Path Cards
- **Purpose:** Help readers determine which sequence of lessons fits their experience level or builder role.
- **When to use:** Inside path guides to map the recommended lesson sequences.
- **When not to use:** Inside general lesson content.
- **Markdown example:**
  ```markdown
  | Sequence | Lesson | Why it matters | Status |
  |---|---|---|---|
  | 1 | [Step 0: Build the Project Truth](../getting-started/00-step-zero-build-the-project-truth.md) | Baseline setup | Core |
  ```
- **Common mistakes:** Using bloated visual tables with redundant info or broken relative path links.
- **Good example:** `/playbook/paths/beginner-path.md`
- **"Do not" rules for agents:**
  * Do not use absolute directory paths; keep links relative to `/playbook/paths/`.
  * Do not change the standard table headers (`Sequence`, `Lesson`, `Why it matters`, `Status`).

---

## 7. Case Study Block
- **Purpose:** Document real-world narrative experiences in a clean, consistent retrospective format.
- **When to use:** When outlining lessons learned from specific real project implementations (e.g., `/playbook/stories/`).
- **When not to use:** For standard educational lessons.
- **Markdown example:** Refer to [Case Study Layout](./case-study-layout.md).
- **Common mistakes:** Straying from the 5-point layout structure.
- **Good example:** `/playbook/stories/01-how-i-use-claude-code-and-delegate-team.md`
- **"Do not" rules for agents:**
  * Do not add random headings outside the standard 5 points (`The Project`, `The Problem`, `The Agent Setup`, `What Went Wrong`, `Reusable Lessons`).
  * Do not combine multiple unrelated case studies into a single file.

---

## 8. Progress Map
- **Purpose:** Anchor the reader within the playbook structure, indicating current progress and next steps.
- **When to use:** At the very bottom of every lesson markdown page.
- **When not to use:** On index files or templates.
- **Markdown example:**
  ```markdown
  *← Back to [Getting Started](./README.md) | Next: [Choose Your Lead Agent →](./02-choose-your-lead-agent.md)*
  ```
- **Common mistakes:** Using incorrect relative paths or listing links in the wrong sequence order.
- **Good example:** `/playbook/getting-started/00-step-zero-build-the-project-truth.md`
- **"Do not" rules for agents:**
  * Do not omit the progress map link from the bottom of any lesson.
  * Do not reference lessons out of their canonical order.

---

## 9. Platform & Tool Logos
- **Purpose:** Display official brand representations to help readers immediately identify target systems.
- **When to use:** Playbook diagrams, tool setup guides, and environment specifications.
- **When not to use:** Decorating generic paragraphs.
- **Markdown example:**
  ```markdown
  * <img src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg" width="16" height="16" valign="middle" /> **OpenAI**
  ```
- **Common mistakes:** Inventing unofficial logos or hotlinking unstable URLs.
- **Good example:** `/playbook/getting-started/01-turn-your-mvp-idea-into-an-agent-ready-spec.md`
- **"Do not" rules for agents:**
  * Do not use unofficial logos.
  * Do not add images of logos directly inside running text sentences; keep them in bulleted lists or headers.
