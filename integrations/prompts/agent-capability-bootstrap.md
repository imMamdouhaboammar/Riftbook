# Agent Capability Bootstrap Prompt

Copy this prompt into the lead coding agent before implementation.

```text
You are responsible for preparing the smallest useful capability stack for this repository.

Your goal is not to install the largest number of tools.
Your goal is to inspect the project, identify real capability gaps, select only the integrations that materially improve this task, install them through the correct current upstream method, validate them, and remove weak or duplicate choices.

## Execution mode

Use: project-local-auto

In this mode you may automatically run reversible project-local install or setup commands only after verifying them.

Stop and request approval before:
- Global or user-wide installs
- Global hooks or config changes
- Credentials, API keys, paid services, or external accounts
- Docker, databases, hosted services, or persistent infrastructure
- Telemetry changes
- Destructive actions
- Commands without a verified uninstall or rollback path
- Installing a second tool from the same exclusive capability group

## Phase 1: Inspect

Before installing anything, inspect:

1. Project type, languages, framework, package manager, and lockfiles
2. Repository size, monorepo structure, and major modules
3. Current task, risk, and delivery phase
4. Existing agent instructions, skills, plugins, MCP servers, hooks, and CI
5. Existing planning, memory, review, testing, design, and runtime-safety layers
6. Known failures, slow workflows, repeated context loss, or review gaps
7. Security, privacy, network, credential, and infrastructure restrictions

Do not start production implementation yet.

## Phase 2: Use the Riftbook registry

Read:
- integrations/registry.json
- integrations/selection-policy.md
- integrations/compatibility-matrix.md

When those files are not present in the target repository, use the candidate sources listed below and reproduce the same policy.

Score each plausible candidate:
- Directly solves active task: +4
- Required by detected framework: +3
- Removes a measured recurring failure: +3
- Existing convention supports it: +2
- Upstream and installer verified: +2
- Project-local and reversible: +2
- Duplicates active capability: -4
- Requires global configuration: -3
- Requires infrastructure or credentials: -4
- No validation or uninstall path: -5
- No concrete use in this task: -6

Reject candidates below their registry threshold.

## Phase 3: Resolve overlap

Use at most one primary tool in each overlapping group unless you explain a specific complementary role:

- Primary design skill: Impeccable, Taste Skill, Hallmark, UX UI Agent Skills, UI UX Pro Max
- Project code map: CodeGraph, Graphify, Understand Anything
- Review graph: Code Review Graph or an equivalent
- Semantic editor: Serena or an equivalent
- Planning system: Planning With Files or an existing persistent plan system
- Agent governance: Agent Kernel or an existing shared memory and approval owner
- Development methodology: Superpowers or an existing mandatory lifecycle method
- Application memory: Graphiti or another temporal memory store
- RAG architecture: GraphRAG or another corpus-level RAG system

Never install an entire discovery library.

## Phase 4: Verify current upstream installation

For every selected candidate:

1. Open its current upstream README and installation docs
2. Confirm the official owner, package, repository, and supported agent
3. Inspect local `--help`, `help`, `--version`, `--list`, or dry-run output
4. Explain files, config, hooks, network access, telemetry, services, and credentials affected
5. Prefer project-local scope
6. Pin or record the selected version when possible
7. Identify uninstall and rollback steps
8. Keep generated indexes, caches, screenshots, and reports out of Git unless approved

Do not rely on a stale copied command.

## Phase 5: Execute within policy

Automatically execute only project-local, reversible, credential-free setup that passes the score and policy.

For global, user-wide, credentialed, paid, infrastructure, autonomous-loop, or destructive setup:
- List the exact command
- Explain why it is needed
- Explain risk and rollback
- Stop for approval

## Phase 6: Validate

An installed integration must prove value on a real project task.

Examples:
- Code map answers a real architecture or blast-radius question
- Semantic editor finds and edits the correct symbol
- Review guard catches a known weak diff
- React audit reports exact file and rule findings
- Design skill improves or critiques a named component
- Planning system survives a simulated context reset
- Context tool preserves failures and exit codes
- Memory or RAG system returns source-backed answers

Then run applicable project checks:
- lint
- typecheck
- tests
- build
- accessibility
- manual runtime QA

## Phase 7: Record active integrations

Create or update `ACTIVE_INTEGRATIONS.md` with:

- Name and source
- Capability owner
- Why selected
- Scope and version
- Files and hooks changed
- Commands executed
- Validation evidence
- Update command
- Uninstall and rollback
- Review date
- Responsible owner

## Phase 8: Final report

Return:

1. Detected project signals
2. Existing capability inventory
3. Candidates scored
4. Rejected candidates and reasons
5. Overlap decisions
6. Integrations installed automatically
7. Actions waiting for approval
8. Validation evidence
9. Project checks
10. Rollback plan
11. The smallest recommended active stack
12. The first implementation task now safe to start

## Candidate sources

- https://github.com/colbymchenry/codegraph
- https://github.com/Leonxlnx/taste-skill
- https://github.com/amElnagdy/guard-skills
- https://github.com/tirth8205/code-review-graph
- https://github.com/plugin87/ux-ui-agent-skills
- https://github.com/imMamdouhaboammar/agent-kernel
- https://github.com/alirezarezvani/claude-skills
- https://github.com/OthmanAdi/planning-with-files
- https://github.com/ConardLi/garden-skills
- https://github.com/millionco/react-doctor
- https://github.com/pbakaus/impeccable
- https://github.com/Nutlope/hallmark
- https://github.com/obra/superpowers
- https://github.com/uditgoenka/autoresearch
- https://github.com/bvaughn/react-error-boundary
- https://github.com/MicheleBertoli/react-fix-it
- https://github.com/revfactory/harness
- https://github.com/reviewdog/reviewdog
- https://github.com/multica-ai/andrej-karpathy-skills
- https://github.com/mattpocock/skills
- https://github.com/msitarzewski/agency-agents
- https://github.com/repowise-dev/repowise
- https://github.com/oraios/serena
- https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- https://github.com/JuliusBrussee/caveman
- https://github.com/Graphify-Labs/graphify
- https://github.com/addyosmani/agent-skills
- https://github.com/Egonex-AI/Understand-Anything
- https://github.com/thedaviddias/Front-End-Checklist
- https://github.com/rtk-ai/rtk
- https://github.com/VoltAgent/awesome-agent-skills
- https://github.com/getzep/graphiti
- https://github.com/vercel-labs/agent-skills
- https://github.com/Yeachan-Heo/oh-my-codex
- https://github.com/microsoft/graphrag
- https://github.com/sickn33/agentic-awesome-skills
- https://github.com/searxng/searxng

Remember:
- A tool collection is not a capability stack.
- Install only what changes real work.
- One clear owner per capability.
- Verify upstream instructions immediately before execution.
- Remove integrations that do not prove value.
```

## Suggested use

Keep `project-local-auto` for normal work. Change it to `propose-only` for sensitive repositories or `full-auto` only when the repository owner has explicitly approved broader automation.
