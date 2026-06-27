# Reviewing Agent Output

![04 - Reviewing Agent Output](../assets/lesson-heroes/04-reviewing-agent-output.svg)

| Level | Duration | Path | Prerequisites | Tools Mentioned |
|---|---|---|---|---|
| Intermediate | 5 mins | Core Workflows | None | Claude Code, Open Code Review, reviewdog, React Doctor, Impeccable |

### Active Signals in this Lesson
- ![DO THIS FIRST](../assets/badges/do-this-first.svg)

---

## Why This Matters

Agent output is not production code. It is a first draft. The review step is what converts a first draft into something you can trust.

Most builders understand this in principle but skip it in practice — because the code looks correct, runs without errors, and the agent sounds confident. None of these are indicators of quality.

Review is not optional. Build it into the rhythm.

---

## What Review Actually Checks

The question is not "does this code run?" The question is:

- **Correctness** — does it do what was asked?
- **Consistency** — does it follow the rules and patterns established in the project?
- **Security** — are there any obvious vulnerabilities?
- **Scope** — did the agent modify anything outside the task scope?
- **Quality** — is this code readable and maintainable?

---

## The Review Workflow

![DO THIS FIRST](../assets/badges/do-this-first.svg)

After every significant task:

1. **Read the diff** — what actually changed?
2. **Run the relevant quality tool** — React Doctor, Open Code Review, or the project linter
3. **Check for scope creep** — did the agent touch files it was not supposed to?
4. **Check for new dependencies** — were any added without discussion?
5. **Spot-check one edge case** — what happens at the boundary?

---

## Tools That Help

| Tool | What it checks |
|---|---|
| **Open Code Review** | Structural AI review: patterns, security, architecture |
| **reviewdog** | Linter annotations in a reviewable format |
| **React Doctor** | React-specific issues: state, effects, performance, a11y |
| **Impeccable** | UI quality: design, layout, visual consistency |

---

## Ship Check

![SHIP CHECK](../assets/badges/ship-check.svg)

Before accepting any significant agent output:

- [ ] The diff was read manually
- [ ] At least one quality tool was run
- [ ] No files were modified outside the task scope
- [ ] No new dependencies were added silently
- [ ] One edge case was manually tested

<p align="center">
  <a href="./03-debugging-with-agents.md">
    <img src="../assets/navigation/prev-lesson.svg" alt="Previous Lesson" />
  </a>
  <a href="./README.md">
    <img src="../assets/navigation/back-to-index.svg" alt="View Index" />
  </a>
  <a href="./05-shipping-with-confidence.md">
    <img src="../assets/navigation/next-lesson.svg" alt="Next Lesson" />
  </a>
</p>
