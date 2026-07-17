# Lesson 2: Choose the Smallest Capability Stack

| Level | Duration | Path | Prerequisites |
|---|---|---|---|
| Intermediate | 12 minutes | Integrations | Lesson 1 and registry signals |

## The target

The best agent stack is not the one with the most names. It is the one with the fewest moving parts that solve the active problems.

A useful stack has one accountable owner for each capability:

- Planning
- Agent governance
- Code understanding
- Editing
- Review
- Design
- Runtime safety
- Context efficiency
- Research or memory

## Score fit

Use the Riftbook score:

| Factor | Score |
|---|---:|
| Solves the active task directly | +4 |
| Required by the framework | +3 |
| Removes a measured recurring failure | +3 |
| Matches an existing project convention | +2 |
| Upstream and installer verified | +2 |
| Project-local and reversible | +2 |
| Duplicates an active capability | -4 |
| Requires global configuration | -3 |
| Requires infrastructure or credentials | -4 |
| Has no validation or uninstall path | -5 |
| Has no concrete use in the task | -6 |

A popular tool can still score below zero.

## Resolve capability conflicts

### Frontend design

Choose one primary:

- Impeccable
- Taste Skill
- Hallmark
- UX UI Agent Skills
- UI UX Pro Max

Then add non-competing checks such as React Doctor or Front-End Checklist.

### Project maps

Choose one primary:

- CodeGraph for local semantic code intelligence and agent queries
- Graphify for mixed project artifacts and broad knowledge graphs
- Understand Anything for an interactive visual map

Serena can be a companion because it owns symbol-level semantic editing, not the same broad project-map role.

### Review

- Code Review Graph owns blast-radius review
- Guard Skills owns focused self-review
- reviewdog owns CI annotations
- React Doctor owns React-specific diagnostics

These can coexist because their responsibilities differ, but only when each is actually used.

### Governance

Agent Kernel can own shared rules, memory, and approvals.

Planning With Files can own persistent task state.

Superpowers can own the development method.

Do not let two systems silently become the canonical source for the same rules or plan.

## Use a stack budget

A practical default:

- Small task: 0 to 2 integrations
- Normal feature: 2 to 4 integrations
- Large existing repo: 3 to 6 integrations
- Multi-agent or research system: more only with explicit ownership

The budget is not a hard limit. It is a warning against tool accumulation.

## Example decision

For a large React refactor:

| Candidate | Reason | Decision |
|---|---|---|
| CodeGraph | Cross-file architecture context | Select |
| Graphify | Overlaps with project map | Reject for this task |
| Serena | Symbol-level navigation and edits | Select |
| React Doctor | React quality audit | Select |
| Impeccable | No visual redesign in scope | Reject |
| Guard Skills | Final clean-code and test review | Select |
| reviewdog | No CI change requested | Defer |
| Planning With Files | Multi-step refactor | Select |

The final stack is five tools, not thirty-seven.

## Copy this

```text
Using the detected signals and Riftbook registry:

1. Score every plausible candidate
2. Show positive and negative factors
3. Group candidates by capability
4. Identify conflicts and current capability owners
5. Select at most one primary per exclusive group
6. Apply a stack budget appropriate to the task
7. Reject candidates that do not change the active work
8. Return the smallest recommended stack

Do not install anything yet.
```

## Ship check

- [ ] Every selected tool solves a named problem
- [ ] Scores include penalties
- [ ] Exclusive groups resolved
- [ ] Discovery libraries rejected as bulk installs
- [ ] One owner per capability
- [ ] Stack size is justified
