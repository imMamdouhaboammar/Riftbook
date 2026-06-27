# Case to Lesson Template

This guide helps you transform raw field notes into a step-by-step educational lesson.

---

## Conversion Steps

1. **Verify Lesson Criteria:** Only turn a case into a lesson if the solution is a general workflow that other builders can follow repeatedly.
2. **Copy the Layout:** Use `playbook/templates/lesson-template.md` as the base file.
3. **Map the Intake Fields:**
   * **Hero SVG Name:** Formulate a lesson title from **Intake Q1/Q8** (e.g. `06 - Structuring API Tests`).
   * **Introduction:** Use **Intake Q2/Q3** to describe the problem and the initial failed strategy.
   * **Core Content:** Turn **Intake Q5/Q7** into a chronological sequence of numbered subheadings (`## Step 1: ...`, `## Step 2: ...`).
   * **Try It:** Transform **Intake Q7/Q8** into a 5-minute task for the reader.
   * **Ship Check:** Use **Intake Q8** to formulate verification checkboxes.
4. **Update Section Index:** Add the new lesson to `playbook/getting-started/README.md` or `playbook/core-workflows/README.md` and renumber files if needed.
5. **Run Audit:** Run `node scripts/audit-playbook.mjs` to ensure the new lesson has no broken links.
