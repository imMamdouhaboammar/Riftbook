# Path Layout

This document defines how reading paths in `playbook/paths/` are structured.

## Layout Structure

1. **Title and Meta:**
   Clear title indicating the target persona (e.g. `Solo Builder Path`).
   ```markdown
   # Solo Builder Path
   
   *A structured reading path for single-developer teams building products alone.*
   ```

2. **Persona Description:**
   Define who this is for, why it matters, and what challenges they face.

3. **Curated Lessons Order:**
   A clean table showing the recommended reading sequence:
   ```markdown
   | Sequence | Lesson | Why it matters | Status |
   |---|---|---|---|
   | 1 | [From MVP Idea to Agent-Ready Spec](../getting-started/01-turn-your-mvp-idea-into-an-agent-ready-spec.md) | baseline setup | Core |
   ```

4. **Required Tools and Skills:**
   A summary of tools and skills recommended for this path.

5. **Expected Outcome:**
   What the reader should be able to do after completing this path.
