# Case Study Layout

This layout is used for deep-dive stories and workflow validation case studies (e.g. `Delegate Team` in `playbook/stories/`).

## Layout Structure

1. **Title and Badges:**
   A human-focused title, accompanied by `STORY` and either `MY MISTAKE` or `FIELD TESTED` badges.
   ```markdown
   # Case Study: [Title]
   
   ![STORY](../assets/badges/story.svg) ![FIELD TESTED](https://img.shields.io/badge/FIELD%20TESTED-10B981?style=flat-square)
   ```

2. **Core Components:**
   Each case study must answer the following 5 points using clean block structures:

   ### 1. The Project
   - Short description of what was built.

   ### 2. The Problem
   - The specific workflow bottleneck or issue that occurred.

   ### 3. The Agent Setup
   - Which tools were used (e.g. Claude Code, Cursor) and what tasks they were given.

   ### 4. What Went Wrong
   - The mistakes made during execution.

   ### 5. Reusable Lessons
   - A structured checklist or markdown pattern that others can copy.
