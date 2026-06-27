# Lesson Layout

Every playbook lesson must follow this standard layout.

## Layout Structure

1. **Lesson Hero Card:**
   Embed the custom SVG hero card at the top of the file.
   ```markdown
   ![01 - How to Start a New Project](../assets/lesson-heroes/01-how-to-start-a-new-project.svg)
   ```

2. **Breadcrumb / Metadata Table:**
   Provide reading context right under the hero:
   ```markdown
   | Level | Duration | Path | Prerequisites | Tools Mentioned |
   |---|---|---|---|---|
   | Beginner | 8 mins | Start Here | None | Claude Code |
   ```

3. **Active Signals Block:**
   A simple list of badges that appear inside the lesson:
   ```markdown
   ### Active Signals in this Lesson
   - ![MENTAL MODEL](../assets/badges/mental-model.svg) · ![DO THIS FIRST](../assets/badges/do-this-first.svg) · ![TRY IT](../assets/badges/try-it.svg)
   ```

4. **Introduction:**
   A short paragraph explaining the problem and what this lesson solves.

5. **Core Content:**
   Delineated by horizontal rules and callout blocks.

6. **Actionable Task / Try It:**
   A practical step for the builder to perform immediately.

7. **Ship Check:**
   A deployment or milestone verification checklist.

8. **Footer Link:**
   ```markdown
   ---
   *Part of [The Real Vibe Coding Playbook](../README.md)*
   ```
