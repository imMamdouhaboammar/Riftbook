# Tool Stack

A curated directory of software development utilities, CLI applications, SaaS engines, and browser extensions that improve build throughput and visual quality.

Every tool listed has a dedicated **Tool Card** detailing its use cases, installation scripts, and post-installation prompts for coding agents.

---

## Tool Catalog

| Tool | Category | Best For | Card |
|---|---|---|---|
| **Superpowers** | Agentic Coding | Structured AI coding workflows, TDD, planning, review | [Open card](./agentic-coding/superpowers.md) |
| **Cursor** | Coding | Codebase context-aware edits, inline edits, multi-file refactors | [Open card](./coding/cursor.md) |
| **Chrome DevTools MCP** | Coding | Browser testing, console log inspection, UI automation | [Open card](./coding/chrome-devtools-mcp.md) |
| **Coolors** | Design | Theme palette generation, color contrasting | [Open card](./design/coolors.md) |
| **UI UX Pro Max** | AI UI/UX Skill | Helping coding agents generate better UI direction and design systems | [Open skill card](../skills/ui-ux/ui-ux-pro-max.md) |
| **Markdownlint** | Writing | Markdown style checking, documentation formatting | [Open card](./writing/markdownlint.md) |
| **Perplexity AI** | Research | Conversational web queries, latest tech stack analysis | [Open card](./research/perplexity-ai.md) |
| **GitHub Actions** | Automation | Continuous integration, staging deployments, test execution | [Open card](./automation/github-actions.md) |

---

## How to Add a Tool

To add a tool to the catalog:
1. Determine the appropriate subfolder (e.g., `coding/`, `design/`, `agentic-coding/`).
2. Create a new markdown file named after the tool (e.g., `tools/coding/my-tool.md`).
3. Follow the layout defined in [`templates/tool-template.md`](../templates/tool-template.md).
4. Register the new tool in the catalog table above.
