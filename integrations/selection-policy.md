# Integration Selection Policy

This policy tells a coding agent how to choose from the Riftbook integration registry without turning the project into a tool collection.

## 1. Inspect the project first

Collect evidence before scoring candidates:

- Project type and framework
- Languages and package managers
- Repository size and monorepo shape
- Existing agent instructions, skills, plugins, MCP servers, hooks, and CI
- Current task, risk, and delivery phase
- Existing quality failures
- Context-window pressure
- Team and agent count
- Security, privacy, credential, and infrastructure restrictions

Do not infer a need from the name of a tool. The need must be visible in the repository or the active task.

## 2. Classify the candidate

Every registry entry has an install policy.

| Policy | Meaning |
|---|---|
| `project-local-auto` | May be installed project-locally after verification when the fit threshold is met |
| `conditional-auto` | May be installed only when a strong project signal is present and overlap is resolved |
| `dependency-auto` | May be added as an application dependency when the framework and runtime need are confirmed |
| `manual-only` | Requires explicit approval because it changes user scope, architecture, infrastructure, or autonomous behavior |
| `reference-only` | Use for discovery or review. Do not install the collection itself |

## 3. Score the fit

Use this scoring model:

| Factor | Score |
|---|---:|
| Directly solves the active task | +4 |
| Required by the detected framework | +3 |
| Removes a measured recurring failure | +3 |
| Existing project convention supports it | +2 |
| Maintained upstream and current installer verified | +2 |
| Project-local and reversible | +2 |
| Duplicates an active capability | -4 |
| Requires global hooks or user configuration | -3 |
| Adds infrastructure or credentials | -4 |
| No validation or uninstall path | -5 |
| The agent cannot name a concrete use in this task | -6 |

A candidate must meet its registry threshold after penalties.

## 4. Resolve overlap

Choose at most one primary integration from each exclusive group unless the plan explains why two are complementary.

Important overlap groups:

- `primary-design-skill`: Impeccable, Taste Skill, Hallmark, UX UI Agent Skills, UI UX Pro Max
- `code-map`: CodeGraph, Graphify, Understand Anything
- `review-graph`: Code Review Graph and any equivalent review graph
- `semantic-editor`: Serena and any equivalent semantic editor
- `planning-system`: Planning With Files and another persistent planning protocol
- `agent-governance`: Agent Kernel and another shared memory or approval owner
- `development-methodology`: Superpowers and another mandatory end-to-end development method
- `application-memory`: Graphiti and another temporal memory store
- `rag-architecture`: GraphRAG and another corpus-level RAG architecture

Do not stack tools merely because they are popular.

## 5. Choose scope

Use this order:

1. Project-local skill or config
2. Project-local package dependency
3. Project-local MCP registration
4. User-level skill or plugin
5. Global CLI
6. Infrastructure or hosted service

Move down the list only when the upstream tool requires it or the user has approved a broader scope.

## 6. Verify before executing

For every command:

1. Open the current upstream README.
2. Confirm the repository owner and official package name.
3. Check the local environment and package manager.
4. Run the relevant `--help`, `help`, `--version`, `--list`, or dry-run command.
5. Explain files, config, hooks, services, network access, telemetry, and credentials affected.
6. Confirm the uninstall or rollback path.
7. Record the exact command before execution.

Never execute a copied command solely because it appears in Riftbook. Upstream installation instructions can change.

## 7. Auto-execution boundary

In `project-local-auto` mode, an agent may automatically execute only when all are true:

- The candidate meets its threshold
- The setup is project-local
- No credentials or paid service are required
- No persistent infrastructure is created
- No global configuration is changed
- The command is reversible
- The current branch is clean or changes are isolated
- The command and version are verified
- A rollback command or file list is known

The agent must stop for approval when any condition fails.

## 8. Validate value

Installation success is not enough.

The integration must produce an observable result:

- A code graph answers a real architecture question
- A review guard catches a known weak example
- A design skill improves a named component
- A React audit produces exact findings
- A planning system survives a simulated context reset
- A memory system preserves provenance and time
- A terminal compressor preserves failures and exit codes

Record the evidence in `ACTIVE_INTEGRATIONS.md`.

## 9. Remove weak integrations

Remove an integration when:

- It has not been used in two meaningful work cycles
- Another active tool provides the same capability
- It increases context noise
- It changes too many files or hooks for its value
- It breaks the project checks
- Its upstream source is no longer trustworthy or maintained
- The team cannot explain who owns it

A smaller stack is easier to understand, update, and trust.
