# Microsoft GraphRAG

<img src="../../assets/badges/core-framework.svg" alt="Core Framework" height="28" />

![RAG Framework](https://img.shields.io/badge/RAG%20Framework-3B82F6?style=for-the-badge)
![Knowledge Graph](https://img.shields.io/badge/Knowledge%20Graph-8B5CF6?style=for-the-badge)
![Microsoft](https://img.shields.io/badge/Microsoft-111827?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-10B981?style=for-the-badge)

## Tags

`core-framework` `rag` `graphrag` `knowledge-graph` `private-data` `llm-pipeline` `retrieval` `global-search` `local-search` `drift-search` `prompt-tuning` `microsoft` `python`

## What it is

Microsoft GraphRAG is a graph-based Retrieval-Augmented Generation framework.

It turns unstructured text into structured graph data, then uses that graph to improve how LLMs answer questions over private or complex datasets.

Official repo:
[https://github.com/microsoft/graphrag](https://github.com/microsoft/graphrag)

## Why it belongs here

GraphRAG belongs in Awesome Vibe Coding because it represents a serious RAG architecture, not a simple prompt trick.

Most basic RAG systems retrieve chunks. That can work for narrow questions, but it often struggles when the question needs relationships, themes, entities, communities, summaries, or high-level reasoning across a large corpus.

GraphRAG is useful when you need the system to reason over a body of documents as a connected knowledge structure.

## Best use cases

### 1. Private document intelligence

Use it when you have internal documents, reports, policies, research notes, transcripts, or knowledge bases and need better answers than chunk search.

### 2. Large corpus analysis

Useful when the answer depends on themes, entities, relationships, and repeated patterns across many documents.

### 3. Research synthesis

Good for extracting high-level insights from long text collections.

### 4. Enterprise knowledge search

Useful when normal vector search returns fragments but misses the bigger picture.

### 5. Entity and relationship discovery

Good when you need to know who is connected to what, which topics cluster together, and which concepts appear across the corpus.

### 6. RAG architecture learning

Useful for developers who want to understand graph-based retrieval, not just use hosted chatbot tools.

## How it helps in real work

* Builds structured graph memory from unstructured text
* Helps answer broader questions over large document sets
* Can surface themes and relationships, not only matching chunks
* Supports command-line indexing and querying
* Supports local and global search patterns
* Useful for research, internal knowledge, policy analysis, and complex documentation
* Good reference for advanced RAG architecture
* Strong companion to project intelligence tools like [Graphify](../../skills/project-intelligence/graphify.md)

## Good fit for

* AI engineers
* RAG builders
* Technical founders
* Research teams
* Internal knowledge-base projects
* Teams with large text corpora
* Developers studying advanced retrieval patterns
* Builders who need entity-level and theme-level understanding

## Not a good fit for

* Simple chatbots
* Tiny datasets
* One-off Q&A
* Lightweight website search
* Teams without budget for indexing runs
* Users who do not want to configure models, embeddings, env files, and indexing
* Projects where basic vector search already solves the problem

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to set up Microsoft GraphRAG for a small test workspace first.

Official repo:
https://github.com/microsoft/graphrag
Official docs:
https://microsoft.github.io/graphrag/

Your task:
1. Read the official GraphRAG docs before making changes.
2. Confirm Python version compatibility.
3. Create an isolated workspace for a small test dataset.
4. Create a virtual environment.
5. Install GraphRAG using the official package.
6. Run `graphrag init`.
7. Explain the generated files: `.env`, `settings.yaml`, and `input/`.
8. Do not run indexing on a large dataset yet.
9. Warn me before any step that can consume significant LLM or embedding tokens.
10. Use a tiny sample corpus first.
11. Do not commit secrets, `.env`, or generated output unless I explicitly ask.

After setup, give me:
- What was installed
- Which Python version was used
- Which files were created
- What I need to put in `.env`
- How to run a small indexing test
- How to query the output
- Expected cost risks
- What should be ignored by git
```

## Quick install reference

```bash
# Create a test workspace
mkdir graphrag_quickstart
cd graphrag_quickstart

# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate

# Install GraphRAG
python -m pip install graphrag

# Initialize workspace
graphrag init
```

## Basic workflow

```bash
# 1. Put text files inside input/
# Example:
# input/book.txt

# 2. Set your API key in .env
# GRAPHRAG_API_KEY=<your_api_key>

# 3. Review settings.yaml before indexing

# 4. Run indexing
graphrag index

# 5. Ask a high-level question
graphrag query "What are the top themes in this corpus?"

# 6. Ask a more specific local question
graphrag query "Who are the main entities and how are they related?" --method local
```

## Usage prompt after setup

```txt
Use GraphRAG for this corpus analysis task.

Dataset:
[describe the documents]

Goal:
[describe the research or search objective]

Before indexing:
1. Estimate whether GraphRAG is appropriate or overkill.
2. Check dataset size.
3. Explain likely token and cost risks.
4. Recommend a small test subset first.
5. Review the GraphRAG settings before running.

After indexing:
1. Run one global query for high-level themes.
2. Run one local query for entity-specific understanding.
3. Compare the answers.
4. Explain what GraphRAG found that normal chunk retrieval may miss.
5. List uncertainties and verification steps.
```

## Good first queries

### Theme discovery

```bash
graphrag query "What are the main themes across these documents?"
```

### Entity relationships

```bash
graphrag query "Which people, organizations, products, or concepts are most connected in this corpus?" --method local
```

### Research synthesis

```bash
graphrag query "What are the most important findings and supporting evidence in this dataset?"
```

### Contradictions

```bash
graphrag query "What tensions, contradictions, or unresolved questions appear across the documents?"
```

### Strategy summary

```bash
graphrag query "What strategic insights can be extracted from this corpus?"
```

## Smart usage patterns

### Pattern 1: Small test before full indexing

```txt
Use GraphRAG on only 3 to 5 representative documents first.
Check output quality.
Tune prompts if needed.
Then decide whether to index the full corpus.
```

### Pattern 2: Global first, local second

```txt
Start with a global query to understand themes.
Then use local search for specific entities, people, products, or relationships.
```

### Pattern 3: Compare against normal RAG

```txt
Ask the same question with basic vector search and GraphRAG.
Compare:
1. coverage
2. relationship awareness
3. evidence quality
4. hallucination risk
5. cost
```

### Pattern 4: Prompt tuning before serious use

```txt
If the first results feel generic or wrong, do not keep indexing blindly.
Review prompts and settings.
Tune on a small dataset first.
```

## Quality checklist

Before using GraphRAG on a serious dataset, check:

* Dataset is worth graph-based retrieval
* Python version is compatible
* `.env` is not committed
* `settings.yaml` is reviewed
* Small test corpus works first
* Indexing cost is understood
* Output folder policy is clear
* Prompt tuning is considered
* Global and local search are both tested
* Results are verified against source documents
* High-stakes answers get human review
* The team understands this is not a simple plug-and-play chatbot

## Notes

GraphRAG can be powerful, but it is not the first tool to reach for.

Start with basic RAG if your dataset is small or your questions are simple.

Use GraphRAG when relationships, themes, communities, entity links, and corpus-level reasoning matter enough to justify the setup and indexing cost.

Treat it as RAG infrastructure, not a quick AI coding skill.

## Links

* GitHub: [https://github.com/microsoft/graphrag](https://github.com/microsoft/graphrag)
* Docs: [https://microsoft.github.io/graphrag/](https://microsoft.github.io/graphrag/)
* Getting Started: [https://microsoft.github.io/graphrag/get_started/](https://microsoft.github.io/graphrag/get_started/)
* Microsoft Research Blog: [https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/)
* arXiv: [https://arxiv.org/abs/2404.16130](https://arxiv.org/abs/2404.16130)
