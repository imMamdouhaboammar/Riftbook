# Graphiti

<img src="../../assets/badges/core-framework.svg" alt="Core Framework" height="28" />

![Agent Memory](https://img.shields.io/badge/Agent%20Memory-3B82F6?style=for-the-badge)
![Temporal Graph](https://img.shields.io/badge/Temporal%20Graph-8B5CF6?style=for-the-badge)
![Context Graph](https://img.shields.io/badge/Context%20Graph-10B981?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-F59E0B?style=for-the-badge)

## Tags

`core-framework` `agent-memory` `temporal-knowledge-graph` `context-graph` `graphiti` `zep` `mcp` `hybrid-retrieval` `provenance` `neo4j` `falkordb` `python` `ai-agents`

## What it is

Graphiti is an open-source framework for building and querying temporal context graphs for AI agents.

It is designed for memory that changes over time. Instead of treating memory as flat notes or static chunks, Graphiti models entities, relationships, facts, validity windows, and the raw episodes that produced those facts.

Official repo:
[https://github.com/getzep/graphiti](https://github.com/getzep/graphiti)

## Why it belongs here

Graphiti belongs in Riftbook because long-running agents need more than files and prompts.

A coding agent can use Graphify to understand a repo. A review agent can use Code Review Graph to understand change impact. A product or support agent may need something different: memory that updates as users, requirements, decisions, tickets, and business facts change.

That is where Graphiti fits. It gives builders a way to think about agent memory as a temporal graph, not a pile of chat history.

## Best use cases

### 1. Long-running agent memory

Use it when an agent needs to remember users, projects, decisions, facts, and relationships across sessions.

### 2. Evolving business context

Useful when facts change and the agent needs to know what is true now, what used to be true, and where the fact came from.

### 3. Personalized assistants

Good fit for agents that need user preferences, prior interactions, accounts, teams, or project history.

### 4. Support and CRM-style agents

Useful when tickets, companies, contacts, products, and issues keep changing over time.

### 5. Research and knowledge agents

Useful when the agent needs to combine structured data, unstructured notes, and ongoing conversation into one queryable memory layer.

### 6. MCP-based memory experiments

Graphiti includes an MCP server path, which makes it relevant for Claude, Cursor, and other MCP clients that need graph-backed memory.

## How it helps in real work

- Stores entities, relationships, and facts as a graph
- Tracks temporal validity instead of assuming facts never change
- Keeps provenance through episodes
- Supports structured and unstructured inputs
- Supports semantic, keyword, and graph traversal retrieval patterns
- Can be paired with an MCP server for assistant workflows
- Helps avoid raw chat-history memory becoming messy and unreliable
- Gives production agents a clearer memory architecture to build around

## Good fit for

- AI agent memory systems
- Product assistants
- Support assistants
- Research agents
- CRM-style agents
- Multi-session user assistants
- Teams studying temporal knowledge graphs
- Builders who can run or manage graph infrastructure

## Not a good fit for

- Simple static documentation search
- Tiny projects with no long-term memory need
- One-off coding tasks
- Basic chatbot prototypes
- Teams that do not want to run Neo4j, FalkorDB, or another supported graph backend
- Cases where a plain database table or simple vector search is enough

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to evaluate and set up Graphiti for a small local agent-memory experiment.

Official repo:
https://github.com/getzep/graphiti

Your task:
1. Read the official Graphiti README and docs before installing anything.
2. Confirm the required Python version and package manager.
3. Explain which graph backend you recommend for a small local test: Neo4j or FalkorDB.
4. Create an isolated test workspace.
5. Install the official package only: `graphiti-core`.
6. Do not use a real production dataset first.
7. Create a tiny sample memory dataset with 5 to 10 episodes.
8. Add the episodes to the graph.
9. Run at least two retrieval examples:
   - one current-state question
   - one historical or relationship question
10. Do not commit secrets, database credentials, generated data, or local graph files.
11. If an API key or database password is needed, stop and tell me exactly what to set.

After setup, give me:
- What was installed
- Which backend was used
- Which environment variables are required
- Where sample data lives
- How episodes are added
- How search works
- What should be ignored by git
- What Graphiti is good at in this repo
- What it should not be used for
```

## Quick install reference

```bash
# Basic package
pip install graphiti-core

# or with uv
uv add graphiti-core

# FalkorDB support
pip install "graphiti-core[falkordb]"

# or with uv
uv add "graphiti-core[falkordb]"
```

## Backend notes

Graphiti commonly needs a graph backend. Start small.

| Backend | Use it when |
|---|---|
| Neo4j | You want the most familiar graph-database setup and browser-based exploration |
| FalkorDB | You want a lightweight local or Docker-friendly graph backend |
| Amazon Neptune | You are already in AWS and need managed graph infrastructure |

Avoid building on a deprecated backend for new work unless the official project explicitly recommends it for your use case.

## Usage prompt after setup

```txt
Use Graphiti as the temporal memory layer for this agent experiment.

Context:
[describe the agent and what it needs to remember]

Before coding:
1. Define the entity types.
2. Define the relationship types.
3. Define what counts as an episode.
4. Define which facts need temporal validity.
5. Define which source data must be preserved for provenance.

Then:
1. Create a tiny sample dataset.
2. Ingest it.
3. Query current facts.
4. Query historical changes.
5. Show me where Graphiti helps and where it is overkill.
```

## Example memory design

```txt
Agent:
Product research assistant.

Entities:
- User
- Product
- Competitor
- Feature
- Decision
- Source

Relationships:
- User requested Feature
- Product competes with Competitor
- Decision replaced Decision
- Source supports Fact

Episodes:
- Meeting notes
- Slack summaries
- User messages
- Product research notes
- Release notes
```

## Quality checklist

Before using Graphiti seriously, check:

- [ ] The use case needs evolving memory, not static search
- [ ] A small local sample works first
- [ ] API keys and database passwords are not committed
- [ ] The graph backend choice is documented
- [ ] Entity and relationship types are clear
- [ ] Every derived fact has a source episode
- [ ] Current facts and historical facts are tested separately
- [ ] Retrieval is compared against simpler storage or RAG
- [ ] Human review exists for high-stakes memory
- [ ] Data deletion and privacy policy are considered before production use

## Pair it with

- [Graphify](../../skills/project-intelligence/graphify.md) for repo and project-folder maps
- [Microsoft GraphRAG](../rag/graphrag.md) for corpus-level document reasoning
- [Code Review Graph](../../tools/review-intelligence/code-review-graph.md) for PR blast-radius review
- [Graph Intelligence Workflow](../../workflows/graph-intelligence-workflow.md) for deciding when each graph tool belongs

## Notes

Graphiti is not a generic replacement for vector search. Use it when time, source history, changing facts, and relationship-aware memory matter.

For simple static documents, start with normal search or basic RAG. For dynamic agents that need memory with history, Graphiti is worth studying.

## Links

- GitHub: [https://github.com/getzep/graphiti](https://github.com/getzep/graphiti)
- Zep: [https://www.getzep.com/](https://www.getzep.com/)
- Paper: [https://arxiv.org/abs/2501.13956](https://arxiv.org/abs/2501.13956)

---

## Special Thanks

Special thanks to [@getzep](https://github.com/getzep) for building and maintaining [Graphiti](https://github.com/getzep/graphiti).
