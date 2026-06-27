# Case to Coding Agent Plan Template

This guide helps you translate raw field notes directly into active repository configuration files (`RULES.md`, `IMPLEMENTATION_PLAN.md`, or `.claudecoderc`) so coding agents do not repeat the failure on future sessions.

---

## Conversion Steps

1. **Verify Plan Criteria:** Use this when the mistake or win was caused by a configuration issue or a project-specific architectural pattern that must be enforced automatically.
2. **Translate to RULES.md:**
   * Look at **Intake Q8** (the repeatable rule).
   * Formulate a strict behavioral directive for coding agents.
   * Add it under the relevant category in your project `RULES.md`.
   * *Example:*
     ```markdown
     # Database Migrations
     - NEVER run npm run db:migrate automatically. Always generate the migration file, print the SQL to the console, and wait for human review before applying.
     ```
3. **Translate to IMPLEMENTATION_PLAN.md / TASKS.md:**
   * Look at **Intake Q5** (where the workflow broke) and **Intake Q7** (what fixed it).
   * If you are continuing the task, add verification tasks in `TASKS.md` to verify the fragile component first.
   * *Example:*
     ```markdown
     - [ ] Verify export formatting matches commonJS requirements before generating imports
     ```
4. **Translate to Agent Configuration:**
   * If the issue was related to files the agent shouldn't read (e.g. huge build folders bloating the context), update `.gitignore` or `.claudecodeignore` to exclude them.
