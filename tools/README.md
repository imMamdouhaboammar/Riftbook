# Tool Stack

A curated directory of software development utilities, CLI applications, SaaS engines, and browser extensions that improve build throughput and visual quality.

Every tool listed has a dedicated **Tool Card** detailing its use cases, installation scripts, and post-installation prompts for coding agents.

---

## Tool Catalog

| Tool | Category | Tier | Best For | Card |
|---|---|---|---|---|
| **RTK** | Token Efficiency | Premium Pick | Compact terminal output, cleaner context, long AI coding sessions, test-heavy workflows | [![View Card](../assets/icons/eye-box.svg)](./token-efficiency/rtk.md) |
| **Serena** | Agent Infrastructure | Top Selected | Semantic code retrieval, symbol-level editing, refactoring, large codebase navigation | [![View Card](../assets/icons/eye-box.svg)](./agent-infrastructure/serena.md) |
| **Code Review Graph** | Review Intelligence | Top Selected | PR review, blast-radius analysis, affected flows, token-efficient review context, CI review comments | [![View Card](../assets/icons/eye-box.svg)](./review-intelligence/code-review-graph.md) |
| **React Doctor** | React Quality | Use Case Tool | Auditing AI-written React, state/effects issues, performance checks, accessibility, CI PR review | [![View Card](../assets/icons/eye-box.svg)](./react-quality/react-doctor.md) |
| **Superpowers** | Agentic Coding | Standard | Structured AI coding workflows, TDD, planning, review | [![View Card](../assets/icons/eye-box.svg)](./agentic-coding/superpowers.md) |
| **Cursor** | Coding | Standard | Codebase context-aware edits, inline edits, multi-file refactors | [![View Card](../assets/icons/eye-box.svg)](./coding/cursor.md) |
| **Chrome DevTools MCP** | Coding | Standard | Browser testing, console log inspection, UI automation | [![View Card](../assets/icons/eye-box.svg)](./coding/chrome-devtools-mcp.md) |
| **Coolors** | Design | Standard | Theme palette generation, color contrasting | [![View Card](../assets/icons/eye-box.svg)](./design/coolors.md) |
| **UI UX Pro Max** | AI UI/UX Skill | Standard | Helping coding agents generate better UI direction and design systems | [![View Card](../assets/icons/eye-box.svg)](../skills/ui-ux/ui-ux-pro-max.md) |
| **Markdownlint** | Writing | Standard | Markdown style checking, documentation formatting | [![View Card](../assets/icons/eye-box.svg)](./writing/markdownlint.md) |
| **Perplexity AI** | Research | Standard | Conversational web queries, latest tech stack analysis | [![View Card](../assets/icons/eye-box.svg)](./research/perplexity-ai.md) |
| **GitHub Actions** | Automation | Standard | Continuous integration, staging deployments, test execution | [![View Card](../assets/icons/eye-box.svg)](./automation/github-actions.md) |

---

## How to Add a Tool

To add a tool to the catalog:
1. Determine the appropriate subfolder (e.g., `coding/`, `design/`, `agentic-coding/`).
2. Create a new markdown file named after the tool (e.g., `tools/coding/my-tool.md`).
3. Follow the layout defined in [`templates/tool-template.md`](../templates/tool-template.md).
4. Register the new tool in the catalog table above.
