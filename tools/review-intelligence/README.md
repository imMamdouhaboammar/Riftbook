# Review Intelligence

Tools that help AI coding agents review code changes with better context.

Use this section for tools that map blast radius, affected flows, test gaps, PR risk, architecture coupling, and review context. These tools are most useful when a normal diff is not enough.

## Tools Directory

| Tool | Focus | Target Environments | Card |
|---|---|---|---|
| Code Review Graph | PR review, blast-radius analysis, affected flows, token-efficient review context, CI review comments | Python 3.10+, CLI, MCP, GitHub Actions | [![View Card](../../assets/icons/open-card.svg)](./code-review-graph.md) |
| **Open Code Review** | AI code review automation, precise line-level comments, branch reviews, full-file scans, custom review rules | Node.js 18+, CLI, CI, Claude Code / Codex / Cursor | [![View Card](../../assets/icons/open-card.svg)](./open-code-review.md) |
| **reviewdog** | Routing linter and static-analysis output into PR comments, checks, annotations, and local diff feedback | GitHub Actions, GitLab CI, Bitbucket, Local CLI | [![View Card](../../assets/icons/open-card.svg)](./reviewdog.md) |

## Related

- [Graph Intelligence Stack](../../frameworks/graph-intelligence-stack.md) - Decision map for Graphify, Microsoft GraphRAG, Graphiti, and Code Review Graph.
- [Graph Intelligence Workflow](../../workflows/graph-intelligence-workflow.md) - Step-by-step workflow for graph-informed implementation and review.
- [Graphify](../../skills/project-intelligence/graphify.md) - Project graphing before risky implementation work.
