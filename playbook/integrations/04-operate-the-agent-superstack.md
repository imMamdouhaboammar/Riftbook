# Lesson 4: Operate the Agent Superstack

| Level | Duration | Path | Prerequisites |
|---|---|---|---|
| Intermediate | 12 minutes | Integrations | Validated active stack |

## Installation is not operation

A tool that exists but is never called is not part of the stack.

A tool loaded into every prompt even when irrelevant is context debt.

The lead agent needs a routing sequence.

## Phase routing

### Before planning

Use:

- Project truth files
- Planning With Files for long tasks
- Agent Kernel when shared rules or memory are active
- One project map for unfamiliar or cross-module work

Do not run every review and design tool yet.

### Before implementation

Use:

- Serena for precise symbol navigation when active
- One primary design skill for visible UI work
- Framework-specific safety requirements
- Superpowers or the approved development method

### During implementation

Use:

- The smallest relevant skill
- Tests and type checks close to the changed code
- RTK only when command output is genuinely noisy
- Delegated specialists only for bounded tasks

### Before review

Use:

- Code Review Graph for blast radius when risk justifies it
- Guard Skills for clean code, tests, or documentation
- React Doctor for React
- Impeccable, Taste Skill, or another selected design owner for UI
- Front-End Checklist near release

### In CI

Use:

- Existing linters and tests
- reviewdog to route trusted analyzer output
- React Doctor CI only when the team wants its gate and comments

### For research or application architecture

Use:

- SearXNG as a search backend only when self-hosting is required
- GraphRAG for document corpora
- Graphiti for temporal product memory
- Autoresearch for bounded, measurable experiments

These are not normal coding-session plugins.

## Capability routing table

Create this inside `ACTIVE_INTEGRATIONS.md`:

| Situation | Primary integration | Fallback | Evidence expected |
|---|---|---|---|
| Understand unfamiliar flow | | | |
| Make symbol-level edit | | | |
| Plan long task | | | |
| Review risky diff | | | |
| Review React | | | |
| Review UI | | | |
| Reduce terminal noise | | | |
| Preserve shared agent state | | | |

## Keep the lead agent accountable

Specialists can research, review, or implement bounded slices.

The lead agent must still:

- Reconcile conflicts
- Verify source files
- Run project checks
- Own the final diff
- Explain risk
- Follow merge policy

No plugin removes accountability.

## Copy this

```text
Read ACTIVE_INTEGRATIONS.md and route this task through only the capabilities it needs.

Before each tool call:
1. Name the current phase
2. Name the capability required
3. Use the active owner for that capability
4. Do not load overlapping tools
5. State the evidence expected from the tool
6. Verify the result against source files or project checks

At the end, report which integrations were actually used and which were intentionally skipped.
```

## Ship check

- [ ] Each active integration has a phase
- [ ] Routing table exists
- [ ] Unused tools are not loaded
- [ ] Lead agent owns reconciliation and verification
- [ ] Review tools produce evidence
- [ ] Application infrastructure is not confused with coding-session tooling
