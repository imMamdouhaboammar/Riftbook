# Debugging with Agents

![WORKFLOW](https://img.shields.io/badge/WORKFLOW-111827?style=flat-square) ![PRACTICAL](https://img.shields.io/badge/PRACTICAL-3B82F6?style=flat-square)

---

## Why This Matters

Debugging with agents is one of the most underrated skills in vibe coding. Most people use agents to generate code. Fewer use them effectively to debug it.

Done well, debugging with an agent is faster than debugging alone. Done poorly, it produces an endless loop of fixes that create new problems.

---

## The Core Technique

When something breaks:

1. **Do not ask the agent to fix it.** Ask the agent to explain what it thinks is happening.
2. Review that explanation. Is the reasoning correct?
3. If yes: ask for the fix.
4. If no: correct the reasoning first, then ask for the fix.

This one change prevents 80% of the fix-then-break-something-else cycles.

---

## The Debugging Prompt

![COPY THIS](../../playbook/assets/badges/copy-this.svg)

```
Something is broken. Before suggesting a fix, I want you to:

1. State what you think the root cause is
2. Explain why you think that
3. Identify which file(s) are most likely involved
4. List any assumptions you are making

Only after I confirm your diagnosis should you propose a fix.
```

---

## When to Use a Support Agent for Debugging

Sometimes the lead agent is too deep in the context of its own decisions to debug clearly. Signs of this:

- It keeps proposing the same fix with minor variations
- Its explanation of the bug contradicts the code it wrote
- Every fix introduces a new problem in a different place

When this happens: open a fresh support agent, give it only the relevant file(s) and error, and ask for a clean diagnosis. No project history, no context debt.

---

## Ship Check

![SHIP CHECK](../../playbook/assets/badges/ship-check.svg)

Before marking a bug as fixed:

- [ ] Root cause was identified (not just patched)
- [ ] The fix addresses the root cause, not just the symptom
- [ ] Related areas were checked for the same issue
- [ ] Tests were run or manually verified

---

*← Back to [Core Workflows](./README.md)*
