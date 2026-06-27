# My Own Mistakes

![PERSONAL NOTE](https://img.shields.io/badge/PERSONAL%20NOTE-111827?style=flat-square) ![FIELD TESTED](https://img.shields.io/badge/FIELD%20TESTED-10B981?style=flat-square)

---

This is the honest list. Not the polished version of lessons I could have learned from a book. The actual mistakes I made, what they cost, and what changed after.

---

## I started without a lead agent

The first few projects I ran agents simultaneously without assigning any of them as the lead. I thought more agents meant more output. What I got was more divergence. Each agent made different decisions about architecture, naming, and patterns. Reconciling them became its own project.

**What changed:** Every project now has a named lead agent documented in `PRODUCT.md` before any coding starts.

---

## I skipped rules and paid for every session

For the first month, I did not write a `RULES.md`. I kept correcting the same behavior — wrong export style, missing tests, overly complex solutions — over and over. It felt like fixing a leaky pipe by putting a towel under it.

**What changed:** Every project now has a `RULES.md`. When I correct the agent on something, I add a rule so I do not correct it again.

---

## I trusted output without review

A feature I shipped had a bug in it that the agent introduced three days earlier. I had seen the output, it looked clean, and I moved on. The bug was subtle — a race condition in an async function that only showed up under specific timing conditions. If I had run any structured review, it would have been caught. I did not. It cost me half a day.

**What changed:** Structured review after every significant output. At minimum, one quality tool and one manual check of the diff.

---

## I over-engineered the setup

One project I spent four days building the agent workflow, the configuration files, the review pipeline, and the context management system — before writing a single line of product code. The product took three days. The setup was more sophisticated than the product it was building.

**What changed:** I now give myself one hour to set up a new project's agent configuration. If it takes more than an hour, I am overcomplicating it. Build first, optimize the setup when there is actual complexity to manage.

---

## I switched agents too late

There was a session where I could tell the lead agent was losing coherence — giving inconsistent answers, referring to variables that did not exist, repeating the same wrong approach. I kept going because I was close to finishing the task. I lost another two hours.

**What changed:** I set a rule for myself: if the same mistake appears three times in one session, I stop and reset — either by re-anchoring with context files or by switching to a fresh session.

---

## I used planning as a performance

I would ask the agent to plan, it would produce a nice outline, I would say "looks good," and we would start coding. I did not actually review the plan. I just confirmed that it had been produced.

A plan that is not reviewed is not a plan. It is a document that delays coding by five minutes.

**What changed:** When the agent produces a plan, I now actually check it against what I know about the project. I correct it if something is wrong before we start. If I cannot find anything to correct, I ask: "What would change if I gave you this constraint?" That usually reveals something.

---

## I let TASKS.md fall behind

`TASKS.md` became a historical document instead of a live one. The agent would ask what to do next and I would describe it verbally instead of pointing to the task file. Agents make better decisions with structured context than with conversational description.

**What changed:** `TASKS.md` gets updated as part of every task completion, not when I remember.

---

*← Back to [Mistakes](./README.md)*
