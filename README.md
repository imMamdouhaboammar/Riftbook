# Awesome Vibe Coding

A living cheat sheet and practical guide for vibe coding. Tools, prompts, workflows, skills, templates, and ideas for building AI-assisted apps without starting from scratch every time.

[![Prompts](https://img.shields.io/badge/Prompts-8B5CF6?style=for-the-badge)](./prompts/)
[![Skills](https://img.shields.io/badge/Skills-3B82F6?style=for-the-badge)](./skills/)
[![Tools](https://img.shields.io/badge/Tools-10B981?style=for-the-badge)](./tools/)
[![Workflows](https://img.shields.io/badge/Workflows-F59E0B?style=for-the-badge)](./workflows/)
[![Templates](https://img.shields.io/badge/Templates-14B8A6?style=for-the-badge)](./templates/)
[![Cheat Sheets](https://img.shields.io/badge/Cheat%20Sheets-EF4444?style=for-the-badge)](./cheat-sheets/)
[![Playbooks](https://img.shields.io/badge/Playbooks-92400E?style=for-the-badge)](./playbooks/)
[![Resources](https://img.shields.io/badge/Resources-6B7280?style=for-the-badge)](./resources/)
[![Examples](https://img.shields.io/badge/Examples-EAB308?style=for-the-badge)](./examples/)
[![Ideas](https://img.shields.io/badge/Ideas-EC4899?style=for-the-badge)](./ideas/)

---

## Introduction

This repository is a structured, practical library of resources used while building applications using AI coding tools. It is designed to prevent repeated setup, minimize guesswork, and establish clear workflows for "vibe coding" (high-level, AI-assisted development). 

This is not a list of random bookmark dumps or hype-driven links. Every entry is selected for utility, tested in real workflows, and formatted for rapid execution.

---

## Premium Picks

Handpicked tools and skills that solve a real workflow problem and are worth trying early.

| Pick | Category | Why it matters | Card |
|---|---|---|---|
| **Caveman** | Token Efficiency | Cuts verbose agent output and makes long coding sessions easier to scan | [[👁️]](./skills/token-efficiency/caveman.md) |
| **Graphify** | Project Intelligence | Turns a repo into a queryable graph so agents understand structure before editing | [[👁️]](./skills/project-intelligence/graphify.md) |

---

## Table of Contents

- [Premium Picks](#premium-picks)
- [Prompt Library](#prompt-library)
- [Skills](#skills)
- [Tool Stack](#tool-stack)
- [Workflows](#workflows)
- [Templates](#templates)
- [Cheat Sheets](#cheat-sheets)
- [Playbooks](#playbooks)
- [Resources](#resources)
- [Examples](#examples)
- [Ideas](#ideas)
- [How to Use This Repo](#how-to-use-this-repo)
- [Quality Rules](#quality-rules)
- [What is Not Included](#what-is-not-included)
- [How to Contribute](#how-to-contribute)

---

## How to Use This Repo

- **Browse Prompts** when you need tested instructions for specific engineering, design, or writing tasks.
- **Follow Workflows** when starting a structured development, debugging, or shipping cycle.
- **Copy Templates** to standardize your prompts, custom skills, tools, and workflows.
- **Consult Cheat Sheets** for quick, low-latency syntax reminders and command lookups.
- **Explore the Tool Stack** to find proven development utilities and extensions.
- **Execute Playbooks** for larger, end-to-end repeatable processes (e.g., launching an app).

---

## Section Previews

### Prompt Library
Curated, high-performing prompts categorized by domain. Use these to get high-quality, predictable outputs from LLMs.
* **Link:** [`/prompts`](./prompts/)
* **Categories:** [Coding](./prompts/coding/), [Design](./prompts/design/), [Writing](./prompts/writing/), [Research](./prompts/research/), [Automation](./prompts/automation/)

### Skills
Reusable instructions and configurations designed for AI agents, custom MCP tools, and LLM system prompts.
* **Link:** [`/skills`](./skills/)
* **UI/UX Design:** [UI UX Pro Max](./skills/ui-ux/ui-ux-pro-max.md) — Design system and interface intelligence for AI coding agents.
* **Categories:** [UI/UX](./skills/ui-ux/), [AI Agents](./skills/ai-agents/), [Coding](./skills/coding/), [Marketing](./skills/marketing/), [Content](./skills/content/)

### Tool Stack
A curated index of tools, IDE extensions, MCP servers, and utilities that speed up the dev loop.
* **Link:** [`/tools`](./tools/)
* **Agentic Coding:** [Superpowers](./tools/agentic-coding/superpowers.md) — A structured skills framework and development methodology for coding agents.
* **Featured Cards:** [Cursor](./tools/coding/cursor.md), [Chrome DevTools MCP](./tools/coding/chrome-devtools-mcp.md), [Coolors](./tools/design/coolors.md), [Markdownlint](./tools/writing/markdownlint.md), [Perplexity AI](./tools/research/perplexity-ai.md), [GitHub Actions](./tools/automation/github-actions.md)

### Workflows
Step-by-step guides mapping sequential actions from task start to completion.
* **Link:** [`/workflows`](./workflows/)
* **Files:** [Vibe Coding](./workflows/vibe-coding-workflow.md), [Debugging](./workflows/debugging-workflow.md), [Research](./workflows/research-workflow.md), [Design](./workflows/design-workflow.md), [Shipping](./workflows/shipping-workflow.md)

### Templates
Standardized layouts for creating prompts, documentation, skills, and tools.
* **Link:** [`/templates`](./templates/)
* **Files:** [Prompt Template](./templates/prompt-template.md), [Tool Template](./templates/tool-template.md), [Skill Template](./templates/skill-template.md), [Workflow Template](./templates/workflow-template.md), [Resource Template](./templates/resource-template.md)

### Cheat Sheets
High-density, single-page references for quick lookups during active coding sessions.
* **Link:** [`/cheat-sheets`](./cheat-sheets/)
* **Files:** [Prompt Patterns](./cheat-sheets/prompt-patterns.md), [AI Coding](./cheat-sheets/ai-coding-cheat-sheet.md), [Git](./cheat-sheets/git-cheat-sheet.md), [Debugging](./cheat-sheets/debugging-cheat-sheet.md)

### Playbooks
End-to-end handbooks detailing strategies for larger-scale projects and product launches.
* **Link:** [`/playbooks`](./playbooks/)
* **Files:** [App Building](./playbooks/app-building-playbook.md), [Launch](./playbooks/launch-playbook.md), [AI Agents](./playbooks/ai-agent-playbook.md)

### Resources
Curated learning materials, articles, repositories, and reference documentation.
* **Link:** [`/resources`](./resources/)
* **Files:** [Repositories](./resources/repos.md), [Articles](./resources/articles.md), [Learning](./resources/learning.md)

### Examples
Real-world before/after case studies, prompt outputs, and workflow implementations.
* **Link:** [`/examples`](./examples/)
* **Files:** [Prompt Examples](./examples/prompt-examples.md), [Workflow Examples](./examples/workflow-examples.md), [Before/After Cases](./examples/before-after.md)

### Ideas
Backlog of product, automation, and research concepts.
* **Link:** [`/ideas`](./ideas/)
* **Files:** [Raw Ideas](./ideas/raw-ideas.md)

---

## Quality Rules

Every item added to this repository must follow a strict schema:
1. **Name**: Clear and descriptive name.
2. **Category**: Exact folder/file classification.
3. **Use Case**: The precise problem this solves.
4. **Why it is Useful**: Rationalization of its benefit.
5. **How to Use**: Practical step-by-step instructions.
6. **Example**: Real-world input and output where applicable.
7. **Link**: Working target URL if referencing external tools.
8. **Notes / Limitations**: Edge cases, known issues, or constraints.

---

## What is Not Included

To maintain a high signal-to-noise ratio, this repository excludes:
- Untested links or products.
- Hype-only AI tools with no practical coding value.
- Empty or generic prompt lists (e.g., "Act as a developer").
- Broad advice lacking explicit use cases.
- Outdated, broken, or unmaintained repositories.

---

## How to Contribute

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed rules on how to format your additions, follow templates, and submit pull requests.
