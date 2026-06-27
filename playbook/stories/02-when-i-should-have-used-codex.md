# When I Should Have Used Codex

![02 - When I Should Have Used Codex](../assets/lesson-heroes/02-when-i-should-have-used-codex.svg)

| Level | Duration | Path | Prerequisites | Tools Mentioned |
|---|---|---|---|---|
| Intermediate | 5 mins | Stories | Lesson 02, Lesson 03 | Claude Code, Codex |

### Active Signals in this Lesson
- ![STORY](../assets/badges/story.svg) · ![WHEN TO SWITCH](../assets/badges/when-to-switch.svg)

---

## Context

I was working on a data processing module that needed to transform a complex nested data structure. The logic was intricate — lots of edge cases, specific transformation rules, and performance constraints. The task was pure implementation: take this input shape, produce this output shape, handle these edge cases.

I gave it to Claude Code as the lead, which is my default. Claude Code is strong at reasoning, planning, and architectural decisions. What followed was instructive.

---

## What Happened

Claude Code produced an implementation. It worked for the main cases. The edge cases were wrong — not because of a reasoning error, but because the implementation strategy it chose was overly abstract for the task. It was building a general transformer instead of solving the specific problem.

I corrected it. It adjusted. The adjustment fixed some edge cases and introduced new ones.

I corrected again. Same pattern.

After the third cycle, I stopped and thought: why am I having this much trouble with what should be a mechanical implementation task?

I switched to Codex. I gave it the input/output spec and the edge cases explicitly. It produced the implementation in one pass. The edge cases were handled correctly. It did not try to generalize — it just solved the specific problem.

---

## What I Thought

I had defaulted to my lead agent because I always default to my lead agent. I was not thinking about whether this was the right task for the lead.

The lead agent's strength is reasoning through complex, open-ended problems. This was not that. This was a well-defined implementation task with clear constraints. Codex is built for exactly that.

---

## What Actually Mattered

Not all tasks are the same type of task. The right agent for a reasoning-heavy architectural decision is not necessarily the right agent for a constrained, deep implementation task.

The lead does not have to do everything. The job of the lead is to hold the project together — not to execute every piece of it personally.

---

## Lesson Learned

![WHEN TO SWITCH](../assets/badges/when-to-switch.svg)

Match the task to the agent's strength.

- Complex reasoning, architectural decisions, ambiguous problems → lead agent (Claude Code)
- Deep implementation with clear constraints, algorithm work, transformation logic → Codex
- Creative alternatives, different approaches to the same problem → Minimax
- Broad analysis, multiple perspectives, exploration → Gemini

This is not rigid. But it is directionally right, and it has saved me many correction cycles since.

---

## What I Would Do Now

Before routing a task to the lead agent, ask: is this a reasoning task or an implementation task?

If it is clearly implementation — well-defined input, well-defined output, clear constraints — consider starting with a support agent that specializes in code generation. Bring the output back to the lead for integration and review.

<p align="center">
  <a href="./01-how-i-use-claude-code-and-delegate-team.md">
    <img src="../assets/navigation/prev-lesson.svg" alt="Previous Lesson" />
  </a>
  <a href="./README.md">
    <img src="../assets/navigation/back-to-index.svg" alt="View Index" />
  </a>
  <a href="./03-a-project-i-overcomplicated.md">
    <img src="../assets/navigation/next-lesson.svg" alt="Next Lesson" />
  </a>
</p>
