# Common Vibe Coding Mistakes

![MISTAKE LOG](https://img.shields.io/badge/MISTAKE%20LOG-111827?style=flat-square) ![HIGH IMPACT](https://img.shields.io/badge/HIGH%20IMPACT-EF4444?style=flat-square)

---

Most mistakes with coding agents are not random. They follow patterns. The same misunderstandings, the same overconfidence, the same skipped steps — they appear across different builders, different tools, and different projects.

This is the list of the ones that show up most consistently.

---

## 1. Starting with the stack instead of the structure

**The mistake:** Opening an agent and immediately asking "what should I use, React or Next.js?" before knowing what you are building or why.

**Why it happens:** Stack decisions feel productive. They feel like progress. But they are premature when you do not yet have a clear picture of the product.

**What to do instead:** Define what you are building, for whom, and what done looks like — before any technical decision. The stack becomes obvious after that.

---

## 2. Treating every agent as a lead

**The mistake:** Using three or four agents simultaneously without any structure — all of them getting the same prompt, all of them making independent decisions.

**Why it happens:** More agents feels like more output. It is actually more divergence. Each agent makes different assumptions and different architectural choices. The result is a codebase where nothing quite fits together.

**What to do instead:** One lead agent. Support agents work on specific pieces and bring results back to the lead for integration.

---

## 3. No rules, no constraints

**The mistake:** Starting to build without a `RULES.md` and assuming the agent will follow your implicit preferences.

**Why it happens:** The preferences feel obvious to you. They are not obvious to the agent. It will make consistent decisions — they just will not be your decisions.

**What to do instead:** Write five rules before the first coding session. Add more as you encounter inconsistencies.

![DON'T BREAK](../assets/badges/dont-break.svg)

> Without rules, the agent is consistent to itself. That is not the same as being consistent to you.

---

## 4. Skipping the planning phase

**The mistake:** Describing the full project to the agent and asking it to start building immediately.

**Why it happens:** Planning feels slow. It feels like it is delaying the actual work.

**What it causes:** The architecture gets decided implicitly, by whichever way the agent first approaches the problem. If that first approach is wrong, everything built on top of it is wrong too. The planning phase that would have taken an hour turns into three days of debugging and rewriting.

**What to do instead:** Ask the agent to propose an architecture outline before writing any code. Review it. Correct it. Then build.

---

## 5. Trusting output without review

**The mistake:** Reading the agent's response, seeing that it looks right, and moving on without actually checking it.

**Why it happens:** Agent output looks confident and clean. The formatting is good. The code compiles. The logic reads correctly at a glance. But looking correct and being correct are different things — especially for edge cases, security, and cross-file consistency.

**What to do instead:** Build review into the workflow, not just the end state. Use Open Code Review, reviewdog, React Doctor, or run the relevant linter after every significant task.

---

## 6. Letting context degrade without resetting

**The mistake:** Running a very long session without re-anchoring the agent to the project state, then wondering why the output quality dropped.

**Why it happens:** Sessions feel continuous. But context windows are not infinite and they degrade over long conversations — especially when the conversation includes a lot of code.

**What to do instead:** At natural transition points (finishing a feature, switching to a different part of the codebase), reset the agent with the current state of `PRODUCT.md` and `TASKS.md`. It takes two minutes and prevents hours of drift correction.

---

## 7. Building the whole thing at once

**The mistake:** Describing the complete product to the agent and asking it to build all of it in one session.

**Why it happens:** It feels efficient. Why do the small version when you could just do the full version?

**What it causes:** Errors and wrong assumptions early in the build compound through every layer built on top of them. By the time you notice something is wrong, three interconnected parts are affected.

**What to do instead:** Build and validate one slice at a time. The first version should be the smallest thing that actually works end to end. Validate it. Then build the next layer.

---

## 8. Switching agents without managing context

**The mistake:** Switching to a support agent when the lead gets stuck, without giving the new agent proper context — just pasting the failed attempt and asking it to try.

**Why it happens:** It feels like a direct handoff. The new agent sees the failure and presumably does better.

**What it causes:** The new agent does not understand the broader project context. It might solve the immediate problem in a way that conflicts with decisions made earlier. You now have two agents with different architectural views.

**What to do instead:** When switching agents, always provide the context files. Describe specifically what the lead got stuck on. Ask for an alternative approach to the specific problem — not the whole project.

---

## 9. Adding quality gates at the end

**The mistake:** Planning to review everything before shipping, but adding no review mechanisms during development.

**Why it happens:** Review feels like a pre-shipping step. During development it feels like overhead.

**What it causes:** Issues that would have been caught early accumulate. They interact with each other. A structural problem discovered in one file turns out to be present in twelve files. Review at the end becomes repair at the end.

**What to do instead:** Add at least one review mechanism before you write significant code. React Doctor, Open Code Review, or even just committing to run a linter after every task. Small consistent gates are better than one big gate at the end.

---

## 10. Overcomplicating the system before using it

**The mistake:** Spending more time setting up the agent workflow, configuring tools, and building the meta-system than actually building the product.

**Why it happens:** Configuration feels safe. The product is uncertain. The system is something you control completely.

**What it causes:** A beautifully configured system for a product that never gets built.

**What to do instead:** Start with a simple setup and let complexity develop from real need. If you find yourself configuring for more than an hour before writing any product code, stop and build something first.

---

*← Back to [Mistakes](./README.md)*
