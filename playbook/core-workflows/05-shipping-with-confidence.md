# Shipping with Confidence

![05 - Shipping with Confidence](../assets/lesson-heroes/05-shipping-with-confidence.svg)

| Level | Duration | Path | Prerequisites | Tools Mentioned |
|---|---|---|---|---|
| Intermediate | 5 mins | Core Workflows | None | Claude Code |

### Active Signals in this Lesson
- ![SHIP CHECK](../assets/badges/ship-check.svg)

---

## Why This Matters

Shipping too early breaks trust. Shipping too late means nothing gets validated. The question "is this ready?" needs a clear answer — and that answer should come from a checklist, not a feeling.

Agents make shipping feel easier than it is. The code is clean, the agent is confident, the tests pass. But confidence from an agent is not the same as confidence from evidence.

---

## The Ship Decision

Before shipping anything, answer three questions:

1. **Does it do what it was supposed to do?**
   Not what the agent built — what was in the task specification.

2. **Have the non-negotiables been checked?**
   The hard constraints you defined in `PRODUCT.md`. These should be verified manually.

3. **Is the next person who touches this better off than if they had started from scratch?**
   The code should be clean enough that future work is easier, not harder.

---

## The Ship Check

![SHIP CHECK](../assets/badges/ship-check.svg)

Before any ship:

- [ ] Task specification was met (not just a similar thing)
- [ ] Non-negotiables from `PRODUCT.md` are intact
- [ ] Quality gate was run (React Doctor, linter, Open Code Review)
- [ ] No dead code or commented-out blocks left in
- [ ] No `console.log`, `TODO`, or debug artifacts remaining
- [ ] Edge cases verified manually or with tests
- [ ] The diff was reviewed — no scope creep
- [ ] `TASKS.md` updated to reflect what shipped

---

## What Shipping Is Not

Shipping is not when the agent says it is done. Shipping is when you verify it is done.

That is a different thing.

<p align="center">
  <a href="./04-reviewing-agent-output.md">
    <img src="../assets/navigation/prev-lesson.svg" alt="Previous Lesson" />
  </a>
  <a href="./README.md">
    <img src="../assets/navigation/back-to-index.svg" alt="View Index" />
  </a>
</p>
