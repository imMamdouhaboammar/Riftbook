# How I Use Claude Code

![STORY](../../playbook/assets/badges/story.svg) ![PERSONAL NOTE](https://img.shields.io/badge/PERSONAL%20NOTE-111827?style=flat-square)

---

## Context

This is not a tutorial on how to use Claude Code. It is a description of how I actually use it — the actual workflow, not the idealized version.

Claude Code is my lead agent on most projects. It has been for a while. The workflow I use now is the result of a lot of trial and error — earlier versions were either too loose or too rigid.

---

## What Happened

I started using Claude Code the way most people do: I would open it, describe what I wanted, and wait for output. It worked reasonably well for small, isolated tasks. It worked poorly for anything that required continuity — anything where what I built in one session needed to fit cleanly with what the next session would add.

The turning point was when I started giving Claude Code a job description instead of just task descriptions.

I started each project by telling Claude Code explicitly: "You are the lead engineer on this project. Your job is not just to write code — it is to maintain the architectural integrity of the codebase and flag anything that conflicts with the design decisions we have made."

That framing change produced different behavior. Claude Code started asking questions it had not asked before. It started flagging scope creep. It started noting when a proposed approach conflicted with an earlier decision.

---

## What I Thought

I thought Claude Code was just an advanced code generator. I used it like one. I thought the value was in the quality of individual outputs.

The actual value was in context management — its ability to hold a coherent view of the project and use that view to make better decisions. But it could only do that if I gave it the right structure and the right role.

---

## What Actually Mattered

Two things changed everything:

1. **The lead agent framing.** Explicitly telling Claude Code that it is the lead engineer — responsible for architectural coherence, not just task execution — changes what questions it asks and what it flags.

2. **The context files.** `PRODUCT.md`, `RULES.md`, and `TASKS.md` give Claude Code the information it needs to hold the project across sessions. Without them, every session starts from scratch. With them, there is continuity.

---

## Lesson Learned

Coding agents are not just code generators. They are context-aware reasoning systems that can hold a project together over time — but only if you give them the structure to do so.

The agent does not know your project by default. You have to tell it what it is building, what the constraints are, and what its role is. Once you do that, the quality of the collaboration changes significantly.

---

## What I Would Do Now

Same thing, earlier. If I were starting over:

1. Write `PRODUCT.md`, `RULES.md`, and `TASKS.md` before the first session
2. Tell Claude Code explicitly that it is the lead agent with architectural responsibility
3. Start with a small, validatable first slice — not the full project
4. End every session by updating `TASKS.md` with the current state

That is the whole thing.

---

*← Back to [Stories](./README.md)*
