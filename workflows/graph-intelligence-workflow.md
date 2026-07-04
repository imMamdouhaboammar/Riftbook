# Graph Intelligence Workflow

Use this workflow when an AI coding agent needs graph-based context before risky edits, reviews, refactors, or memory design.

The goal is not to use every graph tool every time. The goal is to choose the right graph layer for the problem.

## When to use this workflow

Use it when:

- The repo is unfamiliar
- The change touches multiple files
- The bug crosses modules, routes, services, or schemas
- The agent keeps rereading the same files
- A PR needs blast-radius review
- A knowledge base needs relationship-aware search
- An agent needs memory that changes over time

Do not use it for trivial edits, copy changes, one-file scripts, or tiny prototypes.

## Step 1: Classify the problem

Ask the agent:

```txt
Classify this task before using graph tooling.

Task:
[paste task]

Choose one:
1. Project understanding
2. Code review / blast radius
3. Document-corpus reasoning
4. Temporal agent memory
5. Simple task that does not need graph tooling

Explain why.
```

## Step 2: Pick the graph layer

| Problem | Tool |
|---|---|
| Project understanding | [Graphify](../skills/project-intelligence/graphify.md) |
| Code review and blast radius | [Code Review Graph](../tools/review-intelligence/code-review-graph.md) |
| Document-corpus reasoning | [Microsoft GraphRAG](../frameworks/rag/graphrag.md) |
| Temporal agent memory | [Graphiti](../frameworks/agent-memory/graphiti.md) |

## Step 3: Map before editing

For repo work, start with Graphify.

```txt
Use Graphify before making changes.

1. Generate or refresh the project graph.
2. Read GRAPH_REPORT.md.
3. Identify the main modules related to this task.
4. List the files that must be inspected manually.
5. Explain risky relationships.
6. Do not edit until the plan is approved.
```

## Step 4: Make the smallest useful change

```txt
Implement the smallest useful change based on the graph-informed plan.

Rules:
1. Touch only the files needed for the task.
2. Do not rewrite unrelated code.
3. Keep generated graph output out of commits unless explicitly requested.
4. Run the relevant checks after editing.
5. Summarize the exact changed files.
```

## Step 5: Review blast radius

Use Code Review Graph after editing.

```txt
Use Code Review Graph to review the current diff.

Return:
1. changed symbols
2. affected callers and dependents
3. affected flows
4. test gaps
5. risk score
6. files needing human review
7. whether this should be split into smaller commits
```

## Step 6: Use GraphRAG only for document collections

Use Microsoft GraphRAG when the question depends on themes, entities, relationships, or patterns across many documents.

```txt
Evaluate whether GraphRAG fits this corpus.

Dataset:
[describe documents]

Before indexing:
1. estimate size and cost risk
2. choose a tiny sample first
3. explain expected value over normal RAG
4. do not commit `.env` or generated outputs
5. verify results against source documents
```

## Step 7: Use Graphiti only for evolving memory

Use Graphiti when the agent must remember changing facts over time.

```txt
Design a Graphiti memory model for this agent.

Agent:
[describe agent]

Return:
1. entity types
2. relationship types
3. episode sources
4. examples of facts that change over time
5. provenance rules
6. privacy and deletion risks
7. why Graphiti is better than simple notes or vector search here
```

## Step 8: Verification gate

Before finalizing any graph-assisted answer or code change:

```txt
Run a verification gate.

Check:
1. Which claims came from graph output?
2. Which claims were verified from source files or source documents?
3. Which relationships are inferred?
4. Which generated folders should not be committed?
5. Which tests or manual checks are still required?
```

## Output format

The agent should return:

```txt
Graph Intelligence Report

Task type:
Selected tool:
Why this tool:
Files or sources inspected:
Key nodes:
Key relationships:
Risks:
Manual verification needed:
Recommended next step:
```

## Pairing guide

| Pair | Use it when |
|---|---|
| Graphify + Code Review Graph | You need to understand a repo, then review the change impact |
| GraphRAG + Graphiti | You have static documents plus evolving agent memory |
| Graphify + GraphRAG | You have code plus docs and need architecture plus document reasoning |
| Graphiti + MCP | You want Claude, Cursor, or another MCP client to use temporal memory |
| Code Review Graph + reviewdog | You want static-analysis findings and graph-informed review context in PRs |

## Final rule

Graph tooling should make the agent calmer and more precise.

If it makes the task slower, noisier, or more abstract without better decisions, do not use it.
