# GraphRAG vs Graphiti

Microsoft GraphRAG and Graphiti both use graph-based context, but they are not interchangeable.

Use this comparison when you need to choose between reasoning over a document collection and building memory for an agent that changes over time.

## Short answer

| Need | Start with |
|---|---|
| Analyze a large set of documents | GraphRAG |
| Build memory for a long-running agent | Graphiti |
| Find themes across reports or transcripts | GraphRAG |
| Track changing facts and relationships | Graphiti |
| Combine static knowledge with evolving memory | Use both, but keep layers separate |

## What GraphRAG is for

[Microsoft GraphRAG](../frameworks/rag/graphrag.md) is for document-corpus reasoning.

Use it when the source is mostly a set of documents and the questions need themes, entities, relationships, or high-level synthesis.

Good examples:

- Research notes
- Reports
- Internal policies
- Transcripts
- Long documentation sets
- Market research archives

## What Graphiti is for

[Graphiti](../frameworks/agent-memory/graphiti.md) is for temporal agent memory.

Use it when the facts change over time and the agent needs to know what is current, what changed, and where a fact came from.

Good examples:

- User preferences
- Product decisions
- Customer issues
- Team notes
- Support history
- Ongoing research agents

## Where they overlap

Both can help with retrieval and relationships.

The difference is the source shape:

- GraphRAG is stronger for static or semi-static document collections
- Graphiti is stronger for dynamic memory built from episodes and updates

## Recommended workflow

```txt
If the data is a document collection:
1. Start with GraphRAG.
2. Test a small sample first.
3. Ask global and local questions.
4. Verify results from source documents.

If the data changes over time:
1. Start with Graphiti.
2. Define entities and relationships.
3. Define what counts as an episode.
4. Query current and historical facts separately.
```

## Use both when

Use both only when you have two layers:

1. A static corpus that needs analysis
2. A living memory layer that changes as the agent works

Example:

- GraphRAG analyzes historical research documents
- Graphiti tracks new decisions, user notes, and ongoing findings

## Do not use either when

Skip both when:

- The dataset is tiny
- A normal search is enough
- The question is one-off
- You do not need relationships or history
- You cannot verify outputs from source material

## Agent prompt

```txt
Choose between GraphRAG and Graphiti for this task.

Dataset:
[describe source data]

Goal:
[describe goal]

Return:
1. Which tool fits better
2. Why
3. What data shape you assumed
4. What would be overkill
5. A small first test
6. Verification steps
```

## Related

- [Graph Intelligence Stack](../frameworks/graph-intelligence-stack.md)
- [Graph Intelligence Workflow](../workflows/graph-intelligence-workflow.md)
- [Microsoft GraphRAG](../frameworks/rag/graphrag.md)
- [Graphiti](../frameworks/agent-memory/graphiti.md)
