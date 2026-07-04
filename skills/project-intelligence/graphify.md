# Graphify

<img src="../../assets/badges/premium-pick.svg" alt="Premium Pick" height="28" />

![Project Intelligence](https://img.shields.io/badge/Project%20Intelligence-3B82F6?style=for-the-badge)
![Knowledge Graph](https://img.shields.io/badge/Knowledge%20Graph-8B5CF6?style=for-the-badge)
![Context Layer](https://img.shields.io/badge/Context%20Layer-10B981?style=for-the-badge)
![AI Coding](https://img.shields.io/badge/AI%20Coding-F59E0B?style=for-the-badge)

## Tags

`premium-pick` `knowledge-graph` `project-intelligence` `context-compression` `claude-code` `codex` `cursor` `gemini-cli` `ai-agents` `codebase-mapping` `graph-rag`

## What it is

Graphify is an AI coding assistant skill that turns a project folder into a queryable knowledge graph.

It maps code, SQL schemas, scripts, docs, papers, images, videos, and other project files into graph outputs that your AI coding agent can inspect instead of repeatedly grepping through files.

Official repo:
[https://github.com/Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

## Why it is a Premium Pick

Graphify earns Premium Pick because it solves a core problem in AI coding workflows: weak project understanding.

Most AI coding agents can read files, but they often miss how the project fits together. They search for text, open scattered files, and guess relationships between modules. Graphify gives the agent a structured map of the project: concepts, files, dependencies, communities, relationships, gaps, and suggested questions.

This is especially valuable in large codebases, inherited projects, refactors, debugging sessions, and any task where architecture context matters.

> [!WARNING]
> **Not a Truth Engine**: Graphify is a navigation layer, not a truth engine. It is excellent at pointing agents in the right direction, but critical relationships, dependencies, or sensitive refactors must still be verified from the original source files before editing.

## Best use cases

### 1. Understanding an unfamiliar codebase

Use Graphify before asking the agent to make changes in a repo it has never seen before.

### 2. Large refactors

Useful when you need to understand dependencies, affected modules, and hidden relationships before touching code.

### 3. Debugging complex flows

Good when the bug may involve multiple files, services, schemas, or layers.

### 4. Architecture review

Use it to generate a high-level map of project structure and important concepts.

### 5. Agent memory layer

Useful when you want the agent to query a compact graph instead of rereading full files every session.

### 6. Mixed project folders

Strong fit for projects that contain code, docs, SQL schemas, papers, diagrams, images, or videos.

### 7. Reducing context waste

Helpful when the agent keeps reading too many files just to understand the same relationships again.

## How it helps in real work

- Gives the agent a project map before coding
- Turns scattered files into a queryable graph
- Helps reveal important modules and relationships
- Produces a human-readable graph report
- Produces an interactive graph view
- Produces machine-readable graph JSON
- Can export readable call-flow HTML with Mermaid diagrams
- Helps with architecture discovery
- Helps reduce repeated file reading
- Useful before refactors, audits, debugging, and onboarding
- Makes long agent sessions more grounded

## Good fit for

- Large repos
- Unknown repos
- Refactoring projects
- Debugging multi-file problems
- Claude Code users
- Codex users
- Cursor users
- Gemini CLI users
- OpenCode users
- GitHub Copilot CLI users
- Developers working with AI coding agents
- Teams that need better project onboarding
- Vibe coders building beyond small prototypes

## Not a good fit for

- Tiny projects with only a few files
- One-line edits
- Simple landing pages
- Repos where you already know every file
- Tasks that do not need architecture context
- Situations where you cannot spend time generating the graph first

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure Graphify for my current AI coding setup.

Official repo:
https://github.com/Graphify-Labs/graphify

Your task:
1. Detect my OS and current AI coding environment.
2. Read the official Graphify install instructions.
3. Install the official package only.
4. Important: the official PyPI package is `graphifyy` with double-y, while the CLI command is `graphify`.
5. Prefer `uv tool install graphifyy` when suitable.
6. Register the Graphify skill with my AI assistant using the official method.
7. Use project-scoped installation if I ask for it, otherwise explain the difference between user-level and project-level install.
8. Verify that the `graphify` command works.
9. Do not make unrelated changes to my project.
10. If any manual step is needed, stop and tell me exactly what I need to do.

After installation, give me:
- What was installed
- Which command was used
- Which assistant was configured
- How to run Graphify on this repo
- Where the output files will be created
- How to query the generated graph
- Any prerequisites or limitations
```

## Quick install reference

```bash
# Recommended
uv tool install graphifyy

# Alternatives
pipx install graphifyy
pip install graphifyy

# Register skill with assistant
graphify install

# Project-scoped install
graphify install --project

# Run inside an AI coding assistant
/graphify .

# PowerShell note
graphify .
```

## Expected output

After running Graphify, expect a `graphify-out/` folder with files like:

```txt
graphify-out/
├── graph.html
├── GRAPH_REPORT.md
└── graph.json
```

Use them like this:

- `GRAPH_REPORT.md` for the human-readable project summary
- `graph.html` for interactive exploration
- `graph.json` for machine-readable graph queries

Optional architecture output:

```bash
graphify export callflow-html
```

## Usage prompt after installation

```txt
Use Graphify for this repo before making changes.

First:
1. Run Graphify on the project root.
2. Read the generated GRAPH_REPORT.md.
3. Inspect the graph outputs enough to understand the project structure.
4. Identify the main modules, important relationships, and risky areas.
5. Then create a short plan for the task.

Task:
[describe your coding task here]

Do not start editing files until you have used the graph context.
```

## Example workflow

```txt
Use Graphify first.

I want to refactor the authentication flow.

Steps:
1. Generate or update the project graph.
2. Identify auth-related modules, routes, database tables, services, middleware, and UI entry points.
3. Show me the affected areas.
4. Propose a safe refactor plan.
5. Only then start implementation.
```

## Query workflow example

```txt
Use the generated Graphify output to answer:

Which files, functions, modules, schemas, or docs are connected to authentication?

Use:
- GRAPH_REPORT.md for the summary
- graph.html if visual inspection helps
- graph.json or graphify query if needed

Then give me:
1. Key nodes
2. Important relationships
3. Risky dependencies
4. Files to inspect before editing
```

## Quality checklist

Before using Graphify output for coding decisions, check:

- [ ] The graph was generated from the correct project root
- [ ] `graphify-out/GRAPH_REPORT.md` exists
- [ ] `graphify-out/graph.html` exists
- [ ] `graphify-out/graph.json` exists
- [ ] The agent has read the report before editing
- [ ] Generated relationships are treated as guidance, not absolute truth
- [ ] Ambiguous or inferred relationships are verified manually
- [ ] Large generated files are not accidentally committed unless intended
- [ ] `graphify-out/` is handled according to the project git policy

## Pair it with

- [Code Review Graph](../../tools/review-intelligence/code-review-graph.md) for review blast radius
- [Microsoft GraphRAG](../../frameworks/rag/graphrag.md) for document-corpus reasoning
- [Graphiti](../../frameworks/agent-memory/graphiti.md) for temporal agent memory
- [Graph Intelligence Workflow](../../workflows/graph-intelligence-workflow.md) for the full decision path

## Notes

- **Navigation Layer Warning**: Graphify helps direct the agent to relevant files, but critical architecture mappings and dependencies must be manually verified from actual source files before refactoring or major edits.
- **Project Size**: Graphify is strongest when the codebase is big enough that raw search is not enough.
- **Not a File Reader Replacement**: Treat the graph as a navigation layer, not a replacement for reading critical files before editing.
- **Git Policy**: Avoid auto-committing large generated outputs under `graphify-out/` unless specifically requested.

## Links

- GitHub: [https://github.com/Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

---

## Special Thanks

Special thanks to [Graphify Labs](https://github.com/Graphify-Labs) for building and maintaining [Graphify](https://github.com/Graphify-Labs/graphify).
