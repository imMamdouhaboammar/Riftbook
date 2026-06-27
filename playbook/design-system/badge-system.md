# Badge System

Riftbook uses a standardized system of 15 inline signal badges to categorize advice and highlight critical sections in lessons.

---

## 1. PRO TIP
- **Meaning:** A small practical shortcut that pays off quickly.
- **When to use:** Non-obvious tricks, configuration settings, or command flags.
- **When not to use:** Basic instructions.
- **Color:** Learning Green (`#16A34A`)
- **Markdown:** `![PRO TIP](../assets/badges/pro-tip.svg)`

---

## 2. DON'T BREAK
- **Meaning:** Something builders often damage without noticing.
- **When to use:** Architectural constraints, fragile context boundaries, or files that agents easily break.
- **When not to use:** General advice.
- **Color:** Warning Red (`#DC2626`)
- **Markdown:** `![DON'T BREAK](../assets/badges/dont-break.svg)`

---

## 3. BIG ISSUE
- **Meaning:** A serious pattern that can waste hours of time or break the codebase.
- **When to use:** Major anti-patterns, infinite loops in agent behavior, or context window bloating.
- **When not to use:** Small code bugs.
- **Color:** Warning Red (`#DC2626`)
- **Markdown:** `![BIG ISSUE](../assets/badges/big-issue.svg)`

---

## 4. MY MISTAKE
- **Meaning:** A real mistake from direct experience.
- **When to use:** Sharing a personal confession or wrong turn to save the reader from repeating it.
- **When not to use:** Generic list of errors.
- **Color:** Story Purple (`#7C3AED`)
- **Markdown:** `![MY MISTAKE](../assets/badges/my-mistake.svg)`

---

## 5. STORY
- **Meaning:** A real-world case study or short account.
- **When to use:** Explaining a workflow or decision through a narrative of what happened on a real project.
- **When not to use:** Theoretical examples.
- **Color:** Story Purple (`#7C3AED`)
- **Markdown:** `![STORY](../assets/badges/story.svg)`

---

## 6. TRY IT
- **Meaning:** A practical exercise to apply the lesson immediately.
- **When to use:** Small tasks at the end of a lesson that can be completed in 5-10 minutes.
- **When not to use:** Huge project prompts.
- **Color:** Learning Green (`#16A34A`)
- **Markdown:** `![TRY IT](../assets/badges/try-it.svg)`

---

## 7. QUICK WIN
- **Meaning:** A change that gives visible results immediately.
- **When to use:** Quick configurations or installations.
- **When not to use:** Long-term strategies.
- **Color:** Learning Green (`#16A34A`)
- **Markdown:** `![QUICK WIN](../assets/badges/quick-win.svg)`

---

## 8. DEFAULT STACK
- **Meaning:** A recommended setup or configuration to use as a starting point.
- **When to use:** Tool stack lists, `.claudecoderc` files, or project directory structures.
- **When not to use:** Highlighting single random tools.
- **Color:** Signal Blue (`#2563EB`)
- **Markdown:** `![DEFAULT STACK](../assets/badges/default-stack.svg)`

---

## 9. RED FLAG
- **Meaning:** A warning sign that something is wrong or about to fail.
- **When to use:** Warning signals in terminal outputs, agent degradation patterns, or lint errors.
- **When not to use:** General mistakes.
- **Color:** Warning Red (`#DC2626`)
- **Markdown:** `![RED FLAG](../assets/badges/red-flag.svg)`

---

## 10. COPY THIS
- **Meaning:** A prompt, command, or script ready to copy directly.
- **When to use:** Preceding a code block or prompt template.
- **When not to use:** Explanatory commands.
- **Color:** Command Amber (`#D97706`)
- **Markdown:** `![COPY THIS](../assets/badges/copy-this.svg)`

---

## 11. AGENT MOVE
- **Meaning:** A smart way to use a coding agent inside a workflow.
- **When to use:** Prompting techniques, delegation workflows, or commands to send to agents.
- **When not to use:** Normal developer actions.
- **Color:** Signal Blue (`#2563EB`)
- **Markdown:** `![AGENT MOVE](../assets/badges/agent-move.svg)`

---

## 12. SHIP CHECK
- **Meaning:** A final check before moving on or shipping something.
- **When to use:** Deployment checklists, verification steps, or code review rules.
- **When not to use:** Normal todo items.
- **Color:** Learning Green (`#16A34A`)
- **Markdown:** `![SHIP CHECK](../assets/badges/ship-check.svg)`

---

## 13. MENTAL MODEL
- **Meaning:** A concept that changes how you think about working with AI.
- **When to use:** Key theoretical frameworks (e.g. Lead Agent vs Support Agent).
- **When not to use:** Simple workflow steps.
- **Color:** Story Purple (`#7C3AED`)
- **Markdown:** `![MENTAL MODEL](../assets/badges/mental-model.svg)`

---

## 14. DO THIS FIRST
- **Meaning:** The first action to take in a given situation.
- **When to use:** Initial setup steps, planning phases, or onboarding milestones.
- **When not to use:** Mid-project workflow items.
- **Color:** Command Amber (`#D97706`)
- **Markdown:** `![DO THIS FIRST](../assets/badges/do-this-first.svg)`

---

## 15. WHEN TO SWITCH
- **Meaning:** Signals that it is time to change tools, agents, or approaches.
- **When to use:** When the lead agent is stuck, when a context is bloated, or when moving from Claude Code to Cursor.
- **When not to use:** General workflow loops.
- **Color:** Command Amber (`#D97706`)
- **Markdown:** `![WHEN TO SWITCH](../assets/badges/when-to-switch.svg)`
