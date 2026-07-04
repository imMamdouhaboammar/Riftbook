# Graph Intelligence Stack

This is the practical map for adding graph-based intelligence to AI-assisted work.

The key idea is simple: not every graph tool solves the same problem. Some tools map a repo, some reason over documents, some build agent memory, and some review code changes.

## The stack

| Layer | Tool | Use it for | Do not use it for |
|---|---|---|---|
| Project map | [Graphify](../skills/project-intelligence/graphify.md) | Understanding a repo or mixed project folder before editing | Long-term user memory |
| Corpus reasoning | [Microsoft GraphRAG](./rag/graphrag.md) | Reasoning over private documents, research, reports, transcripts, policies, and text collections | Quick one-file code edits |
| Temporal memory | [Graphiti](./agent-memory/graphiti.md) | Agents that need evolving memory, provenance, current facts, and historical facts | Static docs with no changing state |
| Review blast radius | [Code Review Graph](../tools/review-intelligence/code-review-graph.md) | Reviewing PRs and uncommitted changes through affected files, symbols, flows, and tests | General document Q&A |

## Decision map

| Situation | Start with |
|---|---|
| The agent does not understand the repo | Graphify |
| You need to refactor across many files | Graphify, then Code Review Graph |
| You are reviewing a PR | Code Review Graph |
| You need to understand a large document collection | Microsoft GraphRAG |
| You need an agent to remember changing facts over time | Graphiti |
| You need both project context and review risk | Graphify first, Code Review Graph second |
| You need a production memory layer | Graphiti first, then evaluate Zep or managed infrastructure |
| You just need a quick answer from a few files | Normal file reading or search |

## Recommended order for coding agents

### Phase 1: Map

Use Graphify to build a project map.

```txt
Use Graphify first.
Generate the project graph, read GRAPH_REPORT.md, identify the main modules, and show the files that matter for this task before editing.
```

### Phase 2: Plan

Ask the agent to turn the graph context into a small task plan.

```txt
Based on the graph output, create a safe implementation plan.
Include:
1. files to inspect
2. dependencies that may be affected
3. tests to run
4. risks to verify manually
Do not edit yet.
```

### Phase 3: Edit

Let the agent make the smallest useful change.

```txt
Implement the plan with minimal changes.
Do not touch unrelated files.
After editing, summarize the exact files changed and why.
```

### Phase 4: Review

Use Code Review Graph for blast-radius analysis.

```txt
Use Code Review Graph to review the current changes.
Return:
1. affected files and symbols
2. possible broken flows
3. missing tests
4. risky coupling
5. human-review checklist
```

### Phase 5: Learn

If the project needs persistent memory, decide whether Graphiti belongs.

```txt
Evaluate whether this project needs temporal agent memory.
If yes, propose a Graphiti memory model:
1. entity types
2. relationship types
3. episode sources
4. retention rules
5. privacy risks
If no, explain why normal docs, database tables, or simple RAG are enough.
```

## Recommended order for knowledge products

### Phase 1: Static corpus

Use Microsoft GraphRAG when the source is a body of documents.

Good examples:
- internal policies
- research notes
- transcripts
- market reports
- product documentation
- strategy archives

### Phase 2: Living memory

Use Graphiti when the source keeps changing.

Good examples:
- user interactions
- customer support tickets
- product decisions
- team notes
- CRM data
- ongoing agent conversations

### Phase 3: Verification

Do not treat graph output as final truth.

```txt
For every important answer:
1. show source files or episodes
2. list assumptions
3. mark inferred relationships
4. verify high-risk claims from original sources
```

## Why this matters for Riftbook

Vibe coding breaks down when the agent edits before understanding.

This stack gives the agent a better sequence:
1. map the repo
2. understand relationships
3. edit with context
4. review blast radius
5. preserve useful memory only when it is worth it

## Common mistakes

| Mistake | Better approach |
|---|---|
| Running graph tools on tiny tasks | Use normal file reading |
| Treating graph output as truth | Verify from source files |
| Building memory before defining entities | Design the memory model first |
| Indexing huge corpora before a sample test | Start with a tiny subset |
| Committing generated graph outputs by accident | Add generated folders to git policy |
| Using GraphRAG for every question | Use it only when graph reasoning is useful |
| Using Graphiti for static docs | Use Graphiti when facts change over time |

## Minimum starter kit

For most AI-assisted repos, start with:

```txt
1. Graphify for project understanding
2. Code Review Graph for review and blast radius
3. GraphRAG only for large document collections
4. Graphiti only for evolving agent memory
```

## Related workflow

Follow the full step-by-step workflow here:

[Graph Intelligence Workflow](../workflows/graph-intelligence-workflow.md)
