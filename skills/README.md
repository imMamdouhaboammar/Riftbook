# Skills

Reusable instructions, tool specifications, and structured rulesets that give AI agents and assistants capabilities in specific domains.

Every skill listed has a dedicated **Skill Card** detailing its purpose, inputs, and post-installation prompts.

---

## Skills Catalog

| Skill | Category | Tier | Best For | Card |
|---|---|---|---|---|
| **Caveman** | Token Efficiency | Premium Pick | Shorter agent replies, token savings, PR reviews, commit messages, memory compression | [Open card](./token-efficiency/caveman.md) |
| **Graphify** | Project Intelligence | Premium Pick | Codebase maps, knowledge graphs, architecture context, refactors, debugging | [Open card](./project-intelligence/graphify.md) |
| **UI UX Pro Max** | UI/UX | Standard | Design systems, landing pages, dashboards, app UI, frontend polish | [Open card](./ui-ux/ui-ux-pro-max.md) |
| **Clean Code Audit** | Coding | Standard | Auditing code changes for DRY, SOLID, and readability before committing | [Open category](./coding/) |
| **Competitor Matrix** | Marketing | Standard | Compares product features against main competitors | [Open category](./marketing/) |
| **Fact Checker** | Content | Standard | Verifies technical API names and links in docs | [Open category](./content/) |
| **Codebase Mapping** | AI Agents | Standard | Traverses repository to build module dependency map | [Open category](./ai-agents/) |

---

## Categories

- [Token Efficiency](./token-efficiency/) — Optimizing token usage, agent output compression, and scanner tools.
- [Project Intelligence](./project-intelligence/) — Codebase maps, knowledge graphs, architecture context, refactors, and debugging.
- [UI/UX](./ui-ux/) — Designing, auditing, and implementing better user interfaces.
- [AI Agents](./ai-agents/) — Custom instructions and MCP tool bundles for autonomous agent systems.
- [Coding](./coding/) — Rulesets, language standards, linting directives, and design patterns.
- [Marketing](./marketing/) — Campaign analysis templates, positioning playbooks, and strategy execution guidelines.
- [Content](./content/) — Verification rules, styling guidelines, and structural patterns.

---

## How to Add a Skill

To add a skill:
1. Create a markdown file or directory under the relevant category subfolder (e.g., `skills/ui-ux/ui-ux-pro-max.md`).
2. Follow the template layout in [`templates/skill-template.md`](../templates/skill-template.md).
3. Update the category subfolder index and register the card in the catalog table above.
