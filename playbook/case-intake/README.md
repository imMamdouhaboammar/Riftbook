# Case Intake System

This directory houses the system for capturing raw builder experiences — debugging battles, workflow breakdowns, agent coordination successes, and mistakes — and turning them into structured playbook content.

Instead of writing academic documentation, we capture direct builder field notes first, then transform them.

---

## The Workflow

```txt
[ Raw Battle in Repo ]
         │
         ▼
1. Capture Field Notes (case-intake-template.md)
         │
         ├───► 2a. Turn into Lesson (case-to-lesson-template.md)
         ├───► 2b. Turn into Story/Case Study (case-to-story-template.md)
         └───► 2c. Turn into Coding Agent Plan (case-to-coding-agent-plan-template.md)
```

---

## Intake Tools

* **[case-intake-template.md](./case-intake-template.md):** The starting point. Fill this out immediately after a build session to record the raw facts.
* **[case-to-lesson-template.md](./case-to-lesson-template.md):** Used when the experience reveals a general pattern that needs a step-by-step tutorial.
* **[case-to-story-template.md](./case-to-story-template.md):** Used when the narrative sequence is the main value (a retrospective case study or mistake log).
* **[case-to-coding-agent-plan-template.md](./case-to-coding-agent-plan-template.md):** Used to feed the learnings back into your active project configuration files (e.g. `RULES.md` or `IMPLEMENTATION_PLAN.md`).

---

*Part of [The Real Vibe Coding Playbook](../README.md)*
