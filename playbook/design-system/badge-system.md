# Badge System

Riftbook uses a standardized system of 15 inline signal badges to categorize advice and highlight critical sections in lessons.

---

## 1. PRO TIP
- **Meaning:** A small practical shortcut that pays off quickly.
- **Tone rule:** Professional, concise, highly actionable.
- **Example section title:** `## Optimizing Context Retrieval`
- **Overuse warning:** Limit to 2 per lesson; too many tips distract from core workflows.
- **One valid use case:** Explaining a specific CLI flag (e.g. `--no-install` in `dt`) that saves time.
- **One invalid use case:** Tagging a standard setup command that everyone has to run anyway.
- **Markdown:** `![PRO TIP](../assets/badges/pro-tip.svg)`

---

## 2. DON'T BREAK
- **Meaning:** Something builders often damage without noticing.
- **Tone rule:** Firm, protective, cautionary.
- **Example section title:** `## Core Imports and Exports`
- **Overuse warning:** Use only when an action is fragile and has downstream consequences.
- **One valid use case:** Warning against changing global export formatting standards in files that multiple agents read.
- **One invalid use case:** Explaining normal git commands.
- **Markdown:** `![DON'T BREAK](../assets/badges/dont-break.svg)`

---

## 3. BIG ISSUE
- **Meaning:** A serious pattern that can waste hours of time or break the codebase.
- **Tone rule:** Urgent, serious, analytical.
- **Example section title:** `## Designing Without Constraints`
- **Overuse warning:** Do not use for minor syntax bugs; reserve for conceptual and process failures.
- **One valid use case:** Describing how running multiple coding agents concurrently corrupts file structure.
- **One invalid use case:** Describing a missing semicolon or lint warning.
- **Markdown:** `![BIG ISSUE](../assets/badges/big-issue.svg)`

---

## 4. MY MISTAKE
- **Meaning:** A real mistake from direct experience.
- **Tone rule:** Confessional, honest, retrospective.
- **Example section title:** `## Writing Too Much Code at Once`
- **Overuse warning:** Limit to mistakes sections and case studies.
- **One valid use case:** Sharing how you wasted three days building a state sync database when a local file was enough.
- **One invalid use case:** General rules of coding that did not happen to you.
- **Markdown:** `![MY MISTAKE](../assets/badges/my-mistake.svg)`

---

## 5. STORY
- **Meaning:** A real-world case study or short account.
- **Tone rule:** Narrative, descriptive, experience-grounded.
- **Example section title:** `## How I Standardized My Prompts`
- **Overuse warning:** Only use at the top of case studies or stories.
- **One valid use case:** Labeling the top header of a case study detail file.
- **One invalid use case:** Decorating a short code block in a tutorial lesson.
- **Markdown:** `![STORY](../assets/badges/story.svg)`

---

## 6. TRY IT
- **Meaning:** A practical exercise to apply the lesson immediately.
- **Tone rule:** Encouraging, brief, task-focused.
- **Example section title:** `## Run a Spec Diagnostic`
- **Overuse warning:** Maximum 1 per lesson, at the very end.
- **One valid use case:** Prompting the user to run the audit script locally on their active repository.
- **One invalid use case:** Telling the user to write their entire backend schema.
- **Markdown:** `![TRY IT](../assets/badges/try-it.svg)`

---

## 7. QUICK WIN
- **Meaning:** A change that gives visible results immediately.
- **Tone rule:** Direct, positive, high-impact.
- **Example section title:** `## Setting Up Shell Aliases`
- **Overuse warning:** Limit to simple configuration actions.
- **One valid use case:** Recommending a two-line configuration change that stops agents from auto-installing npm dependencies.
- **One invalid use case:** Designing an entire API architecture.
- **Markdown:** `![QUICK WIN](../assets/badges/quick-win.svg)`

---

## 8. DEFAULT STACK
- **Meaning:** A recommended setup or configuration to use as a starting point.
- **Tone rule:** Authoritative, clear, opinionated.
- **Example section title:** `## The Core Agent Tooling`
- **Overuse warning:** Only use when defining stack choices.
- **One valid use case:** Describing why Node.js and TypeScript are the default stack choice for API layers.
- **One invalid use case:** Tagging a paragraph about a single, temporary npm package.
- **Markdown:** `![DEFAULT STACK](../assets/badges/default-stack.svg)`

---

## 9. RED FLAG
- **Meaning:** A warning sign that something is wrong or about to fail.
- **Tone rule:** Direct, critical, analytical.
- **Example section title:** `## Cluttered Context Directories`
- **Overuse warning:** If every warning is a red flag, none are. Limit to critical indicators.
- **One valid use case:** Pointing out when an agent claims it is "finished" but has left 10 TODO comments in the code.
- **One invalid use case:** Reminding the user to pull from git.
- **Markdown:** `![RED FLAG](../assets/badges/red-flag.svg)`

---

## 10. COPY THIS
- **Meaning:** A prompt, command, or script ready to copy directly.
- **Tone rule:** Operational, brief, directive.
- **Example section title:** `## The Repository Bootstrapping Prompt`
- **Overuse warning:** Do not use before every minor terminal command.
- **One valid use case:** Placing directly above a 40-line copy-ready system prompt for Claude Code.
- **One invalid use case:** Placing above a simple `npm run dev` command.
- **Markdown:** `![COPY THIS](../assets/badges/copy-this.svg)`

---

## 11. AGENT MOVE
- **Meaning:** A smart way to use a coding agent inside a workflow.
- **Tone rule:** Practical, technical, workflow-focused.
- **Example section title:** `## Delegating Boilerplate Generation`
- **Overuse warning:** Reserve for unique agent workflows (e.g. Spec Kit sequence).
- **One valid use case:** Prompting the agent to read `PRODUCT.md` and check for alignment before generating code.
- **One invalid use case:** Normal typing by the human developer.
- **Markdown:** `![AGENT MOVE](../assets/badges/agent-move.svg)`

---

## 12. SHIP CHECK
- **Meaning:** A final check before moving on or shipping something.
- **Tone rule:** Objective, checklist-oriented, thorough.
- **Example section title:** `## Pre-Launch Verification`
- **Overuse warning:** Limit to the end of lessons or build sections.
- **One valid use case:** A list of 5 concrete requirements to verify before making a production merge.
- **One invalid use case:** Checking off the setup steps of a local dev server.
- **Markdown:** `![SHIP CHECK](../assets/badges/ship-check.svg)`

---

## 13. MENTAL MODEL
- **Meaning:** A concept that changes how you think about working with AI.
- **Tone rule:** Concept-driven, insightful, structural.
- **Example section title:** `## Product Thinking vs Build Operating`
- **Overuse warning:** Maximum 1 per lesson; concepts should be deep and memorable.
- **One valid use case:** Explaining why the repository is the canonical source of truth for AI agents.
- **One invalid use case:** A simple tip on how to type a prompt.
- **Markdown:** `![MENTAL MODEL](../assets/badges/mental-model.svg)`

---

## 14. DO THIS FIRST
- **Meaning:** The first action to take in a given situation.
- **Tone rule:** Urgent, foundational, directional.
- **Example section title:** `## Establish the Project Truth`
- **Overuse warning:** Use only at the beginning of a setup sequence or lesson introduction.
- **One valid use case:** Ordering the developer to create `PRODUCT.md` before initializing any coding agent.
- **One invalid use case:** Telling a developer to write a test at the end of a build session.
- **Markdown:** `![DO THIS FIRST](../assets/badges/do-this-first.svg)`

---

## 15. WHEN TO SWITCH
- **Meaning:** Signals that it is time to change tools, agents, or approaches.
- **Tone rule:** Decision-oriented, analytical.
- **Example section title:** `## Escaping the Correction Loop`
- **Overuse warning:** Limit to lessons discussing multiple tools or agent delegation boundaries.
- **One valid use case:** Describing when to shift from terminal-based Claude Code to editor-based Cursor (e.g., when refactoring large UI layouts).
- **One invalid use case:** Switching branch names in git.
- **Markdown:** `![WHEN TO SWITCH](../assets/badges/when-to-switch.svg)`
