# Riftbook Integrations

A decision layer for discovering, selecting, installing, validating, operating, and removing AI coding-agent tools.

This directory is not a command to install everything. It turns a large source list into a capability registry that an agent can reason over.

## Start here

1. Read [Selection Policy](./selection-policy.md).
2. Run the read-only [Integration Selector](../scripts/integration-selector.mjs) against the target project.
3. Review the generated candidates and overlap warnings.
4. Use the [Agent Capability Bootstrap Prompt](./prompts/agent-capability-bootstrap.md).
5. Record approved integrations with [ACTIVE_INTEGRATIONS.md](./templates/ACTIVE_INTEGRATIONS.template.md).
6. Follow the [Playbook Integrations lessons](../playbook/integrations/README.md).

## Core files

| File | Purpose |
|---|---|
| [registry.json](./registry.json) | Machine-readable catalog of all 37 candidate repositories |
| [selection-policy.md](./selection-policy.md) | Scoring, overlap, safety, and execution rules |
| [compatibility-matrix.md](./compatibility-matrix.md) | Which categories can coexist and which should not be stacked |
| [Agent Capability Bootstrap Prompt](./prompts/agent-capability-bootstrap.md) | Copy-ready instruction for a coding agent |
| [ACTIVE_INTEGRATIONS template](./templates/ACTIVE_INTEGRATIONS.template.md) | Project record of installed integrations and ownership |
| [Integration Selector](../scripts/integration-selector.mjs) | Read-only stack detector and candidate scorer |

## Execution modes

| Mode | What the agent may do |
|---|---|
| `propose-only` | Inspect and produce a plan. No installation. |
| `project-local-auto` | Install reversible project-local integrations after verification. Stop for global, credentialed, infrastructure, paid, or destructive actions. |
| `full-auto` | Use only when explicitly enabled by the repository owner. Policy gates still apply. |

## Non-negotiable rules

- Do not install every repository.
- Do not install an index or skill library in full.
- Do not activate several tools that solve the same problem without explaining the overlap.
- Prefer one primary integration per capability group.
- Read the latest upstream README before every install or update.
- Verify the local command syntax before execution.
- Keep a rollback path.
- Remove integrations that create more context, maintenance, or risk than value.

## Code intelligence and repository understanding

| Integration | Type | Policy | Best use |
|---|---|---|---|
| [CodeGraph](./catalog/codegraph.md) | CLI + MCP | `project-local-auto` | Builds a local semantic code graph that coding agents can query instead of repeatedly crawling files. |
| [Code Review Graph](./catalog/code-review-graph.md) | CLI + MCP | `conditional-auto` | Builds a persistent local graph for targeted reviews, affected-flow analysis, and test-gap discovery. |
| [RepoWise](./catalog/repowise.md) | Codebase Intelligence + MCP | `conditional-auto` | Provides code health scoring, generated documentation, git analytics, dead-code detection, and architectural context through MCP. |
| [Serena](./catalog/serena.md) | MCP Coding Toolkit | `conditional-auto` | Gives coding agents semantic symbol retrieval, navigation, editing, and project memory similar to an IDE. |
| [Graphify](./catalog/graphify.md) | Knowledge Graph Skill | `conditional-auto` | Turns code, schemas, infrastructure, documents, and media into a queryable project knowledge graph. |
| [Understand Anything](./catalog/understand-anything.md) | Interactive Knowledge Graph | `conditional-auto` | Generates an interactive, searchable knowledge graph for exploring and asking questions about code. |
## Agent governance, planning, and orchestration

| Integration | Type | Policy | Best use |
|---|---|---|---|
| [Agent Kernel](./catalog/agent-kernel.md) | CLI + MCP + Hooks | `conditional-auto` | Provides shared memory, rule distribution, approvals, episodic recall, hooks, and governance for multiple coding agents. |
| [Planning With Files](./catalog/planning-with-files.md) | Agent Skill + Plugin | `project-local-auto` | Persists plans, progress, and completion state in files so long-running agent work survives context loss. |
| [Superpowers](./catalog/superpowers.md) | Skill Framework + Methodology | `conditional-auto` | Introduces structured workflows for brainstorming, planning, TDD, debugging, review, and completion verification. |
| [Harness](./catalog/harness.md) | Meta-Skill | `manual-only` | Designs domain-specific agent teams and generates specialized agents and the skills they use. |
| [Oh My Codex](./catalog/oh-my-codex.md) | Codex Runtime Extension | `manual-only` | Adds hooks, agent teams, worktree workflows, HUDs, and orchestration around Codex. |
## Skill and specialist discovery libraries

| Integration | Type | Policy | Best use |
|---|---|---|---|
| [Claude Skills](./catalog/claude-skills.md) | Skill Library | `reference-only` | A large multi-domain library of skills, commands, agents, and plugins for several coding harnesses. |
| [Garden Skills](./catalog/garden-skills.md) | Skill Library | `reference-only` | A collection of skills for web design, knowledge retrieval, image generation, and related workflows. |
| [Matt Pocock Skills](./catalog/mattpocock-skills.md) | Engineering Skill Library | `reference-only` | A collection of practical engineering skills drawn from a real Claude setup. |
| [Agency Agents](./catalog/agency-agents.md) | Specialized Agent Library | `reference-only` | A large roster of role-specific agents across engineering, design, product, marketing, testing, security, and operations. |
| [Addy Osmani Agent Skills](./catalog/addyosmani-agent-skills.md) | Engineering Skill Pack | `reference-only` | A production-oriented collection of engineering skills for coding agents. |
| [Awesome Agent Skills](./catalog/awesome-agent-skills.md) | Curated Skill Index | `reference-only` | A curated index of official and community agent skills across major coding tools. |
| [Vercel Agent Skills](./catalog/vercel-agent-skills.md) | Official Skill Collection | `conditional-auto` | Vercel's official collection of agent skills for web development and platform workflows. |
| [Agentic Awesome Skills](./catalog/agentic-awesome-skills.md) | Installable Skill Library | `reference-only` | A large installable library of agent skills, plugins, bundles, and workflows for multiple coding agents. |
## Frontend and design quality

| Integration | Type | Policy | Best use |
|---|---|---|---|
| [Taste Skill](./catalog/taste-skill.md) | Agent Skill | `project-local-auto` | Adds frontend design judgment and anti-generic rules for coding agents. |
| [UX UI Agent Skills](./catalog/ux-ui-agent-skills.md) | Agent Skill Pack | `conditional-auto` | A broad design architecture pack covering tokens, components, accessibility, and framework-aware UI implementation. |
| [Impeccable](./catalog/impeccable.md) | Design Skill + CLI + Detectors | `project-local-auto` | Adds a design language, frontend commands, live iteration, and deterministic anti-slop detectors. |
| [Hallmark](./catalog/hallmark.md) | Agent Skill | `conditional-auto` | A focused anti-AI-slop design skill for Claude Code, Cursor, and Codex. |
| [UI UX Pro Max Skill](./catalog/ui-ux-pro-max-skill.md) | Agent Skill | `conditional-auto` | Provides broad UI and UX design intelligence for multiple platforms and interface types. |
## Code, test, documentation, and release quality

| Integration | Type | Policy | Best use |
|---|---|---|---|
| [Guard Skills](./catalog/guard-skills.md) | Agent Skill Pack | `project-local-auto` | Provides focused clean-code, test, documentation, WordPress, and WooCommerce review guards. |
| [React Doctor](./catalog/react-doctor.md) | React Audit CLI + Skill + CI | `project-local-auto` | Audits React code for structural, state, effect, performance, accessibility, and security problems. |
| [reviewdog](./catalog/reviewdog.md) | CI Review Bridge | `conditional-auto` | Converts linter and static-analysis output into pull-request comments, checks, and annotations. |
| [Andrej Karpathy Skills](./catalog/andrej-karpathy-skills.md) | Behavior Rules | `manual-only` | A compact behavior guide derived from recurring LLM coding failure patterns. |
| [Front-End Checklist](./catalog/front-end-checklist.md) | Checklist + Reference | `reference-only` | A broad release checklist for modern frontend quality, semantics, performance, accessibility, SEO, and compatibility. |
## Runtime safety and experimental React helpers

| Integration | Type | Policy | Best use |
|---|---|---|---|
| [React Error Boundary](./catalog/react-error-boundary.md) | React Library | `dependency-auto` | Provides reusable React error boundaries, fallback rendering, reset behavior, and error callbacks. |
| [React Fix It](./catalog/react-fix-it.md) | Experimental React Tool | `manual-only` | Explores generating tests from captured React errors. |
## Research, RAG, memory, and search infrastructure

| Integration | Type | Policy | Best use |
|---|---|---|---|
| [Autoresearch](./catalog/autoresearch.md) | Autonomous Iteration Skill | `manual-only` | Runs goal-directed modify, verify, keep-or-discard loops for measurable research and engineering targets. |
| [Graphiti](./catalog/graphiti.md) | Temporal Knowledge Graph Framework | `manual-only` | Builds real-time temporal knowledge graphs for agents that need changing facts, provenance, and historical context. |
| [Microsoft GraphRAG](./catalog/graphrag.md) | RAG Framework | `manual-only` | A modular graph-based retrieval system for reasoning over complex document collections. |
| [SearXNG](./catalog/searxng.md) | Self-Hosted Metasearch | `manual-only` | A self-hosted metasearch engine that aggregates multiple search services without profiling users. |
## Context and terminal efficiency

| Integration | Type | Policy | Best use |
|---|---|---|---|
| [Caveman](./catalog/caveman.md) | Communication Skill | `conditional-auto` | Reduces verbose agent output so long coding sessions consume less context. |
| [RTK](./catalog/rtk.md) | CLI Proxy + Agent Hook | `conditional-auto` | Compresses common development command output before it enters the agent context window. |

## Recommended baseline recipes

### Small general project

- Planning With Files only when the task spans multiple steps
- Guard Skills for a focused final review
- Front-End Checklist when shipping a visible web surface

### React product

- React Doctor
- React Error Boundary or the framework-native equivalent
- One primary design skill: Impeccable, Taste Skill, Hallmark, UX UI Agent Skills, or UI UX Pro Max
- Guard Skills
- reviewdog only when CI and linters already exist

### Large or unfamiliar codebase

- One primary code map: CodeGraph, Graphify, or Understand Anything
- Serena when symbol-level semantic editing is needed
- Code Review Graph for high-risk diffs
- Planning With Files
- RTK when terminal output is consuming context

### Multi-agent repository

- Agent Kernel or another approved governance owner
- Planning With Files
- Superpowers or the project's existing development methodology
- Harness only when a stable specialist team is justified
- A single lead agent remains accountable for review and merge

### Research or memory product

- SearXNG only when a self-hosted search backend is required
- GraphRAG only for document-corpus retrieval
- Graphiti only for temporal application memory
- Autoresearch only with a deterministic evaluator, budget, and rollback

## Maintenance cadence

Re-evaluate active integrations when:

- The project stack changes
- The primary coding agent changes
- An upstream tool changes its installer or data model
- A tool has not been used for two meaningful work cycles
- Two tools repeatedly produce the same output
- The integration breaks lint, tests, build, CI, or local agent startup

The goal is not the largest stack. The goal is the smallest stack that changes the quality or speed of real work.
