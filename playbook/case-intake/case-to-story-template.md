# Case to Story Template

This guide helps you transform raw field notes into a narrative case study or mistake entry.

---

## Conversion Steps

1. **Verify Story Criteria:** Use the story format if the value is in the narrative itself — the specific debugging journey, the wrong turn, and the retrospective realization.
2. **Copy the Layout:** Use `playbook/templates/story-template.md` (for mistake logs) or `playbook/templates/case-study-template.md` (for successful builds).
3. **Map the Intake Fields:**
   * **Title & Badges:** Map **Intake Q9** to assign signals (e.g. `STORY` + `MY MISTAKE` or `FIELD TESTED`).
   * **Context:** Use **Intake Q1** to introduce what you were trying to build.
   * **What Happened / The Problem:** Combine **Intake Q2, Q3, and Q5** to describe the chain of events.
   * **What I Thought:** Use **Intake Q6** to discuss your incorrect assumptions at the time.
   * **What Actually Mattered:** Use **Intake Q7** to explain the root cause and the real solution.
   * **Lesson Learned:** Turn **Intake Q8** into a behavioral principle.
   * **What I Would Do Now:** Detail how you would approach this situation next time.
4. **Update Section Index:** Add to `/playbook/stories/README.md` or `/playbook/mistakes/README.md`.
5. **Run Audit:** Run `node scripts/audit-playbook.mjs` to verify integrity.
