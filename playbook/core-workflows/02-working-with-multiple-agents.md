# Working with Multiple Agents

![WORKFLOW](https://img.shields.io/badge/WORKFLOW-111827?style=flat-square) ![INTERMEDIATE](https://img.shields.io/badge/INTERMEDIATE-111827?style=flat-square)

---

## Why This Matters

Multiple agents can multiply your output — or your confusion. The difference is structure.

Without a clear structure, multiple agents produce multiple architectural visions. You end up reconciling five different opinions about how something should work. With structure, they act like a real team: one lead, specialists on specific pieces, clear integration points.

---

## The Rule

**One lead. The others support.**

The lead agent holds the project context. Support agents work on specific sub-tasks and bring their output back for integration.

Do not give all agents the same prompt and pick the best answer. That produces divergence, not results.

---

## The Structure That Works

```
You → Lead Agent → defines task → You → Support Agent
Support Agent → produces output → You → review → Lead Agent → integrate
```

You are always in the loop. You are always the integration point between agents.

---

## When to Bring in a Support Agent

- The lead agent is stuck on a specific implementation detail
- You want an alternative approach to a hard problem
- You need faster iteration on a focused, isolated sub-task
- The lead's context is getting saturated on a specific area

---

## Handing Off Between Agents

When routing a task to a support agent:

1. Describe the specific problem — not the whole project
2. Provide the relevant context (the specific file, function, or interface the task touches)
3. Specify what format or structure you want the output in so it integrates cleanly
4. Bring the output back and review it before giving it to the lead

![PRO TIP](../../playbook/assets/badges/pro-tip.svg)

> Ask the support agent: "How does this integrate with the existing structure?" before accepting its output. If it cannot answer that, it does not have enough context.

---

## What I Got Wrong

![MY MISTAKE](../../playbook/assets/badges/my-mistake.svg)

Early on I would open all agents simultaneously, describe the whole project, and ask each one to start. I got four different architectures, four different naming conventions, and four different opinions on what the main entry point should look like. None of them fit together. I spent more time reconciling than building.

---

*← Back to [Core Workflows](./README.md)*
