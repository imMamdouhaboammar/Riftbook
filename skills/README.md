# Skills

Reusable instructions, tool specifications, and structured rulesets that give AI agents and assistants capabilities in specific domains.

Every skill listed has a dedicated **Skill Card** detailing its purpose, inputs, and post-installation prompts.

---

## Skills Catalog

| Skill | Category | Tier | Best For | Card |
|---|---|---|---|---|
| **Caveman** | Token Efficiency | Premium Pick | Shorter agent replies, token savings, PR reviews, commit messages, memory compression | [![View Card](../assets/icons/open-card.svg)](./token-efficiency/caveman.md) |
| **Graphify** | Project Intelligence | Premium Pick | Codebase maps, knowledge graphs, architecture context, refactors, debugging | [![View Card](../assets/icons/open-card.svg)](./project-intelligence/graphify.md) |
| **Taste Skill** | Frontend Design | Hot Skill | Anti-slop UI, frontend polish, redesigns, image-to-code workflows | [![View Card](../assets/icons/open-card.svg)](./hot-skills/taste-skill.md) |
| **Impeccable** | AI Frontend Design | Top Selected | Design guidance, frontend quality, UI audit, polish, layout, typography, detector checks | [![View Card](../assets/icons/open-card.svg)](./top-selected/impeccable.md) |
| **Last30Days** | Research | Use Case Skill | Recent-signal research, meeting prep, competitor research, product validation, trend tracking | [![View Card](../assets/icons/open-card.svg)](./use-case-skills/last30days.md) |
| **UI UX Pro Max** | UI/UX | Standard | Design systems, landing pages, dashboards, app UI, frontend polish | [![View Card](../assets/icons/open-card.svg)](./ui-ux/ui-ux-pro-max.md) |
| **Clean Code Audit** | Coding | Standard | Auditing code changes for DRY, SOLID, and readability before committing | [![View Card](../assets/icons/open-card.svg)](./coding/) |
| **Competitor Matrix** | Marketing | Standard | Compares product features against main competitors | [![View Card](../assets/icons/open-card.svg)](./marketing/) |
| **Fact Checker** | Content | Standard | Verifies technical API names and links in docs | [![View Card](../assets/icons/open-card.svg)](./content/) |
| **Codebase Mapping** | AI Agents | Standard | Traverses repository to build module dependency map | [![View Card](../assets/icons/open-card.svg)](./ai-agents/) |
| **Delegate Team (`dt`)** | Installable Skills | Installable Skill | Delegating coding tasks from Claude Code to Codex, MiniMax, GLM, OpenCode, OpenRouter, Gemini, Vertex AI | [![View Card](../assets/icons/open-card.svg)](./installable-skills/delegate-team.md) |

---

## Categories

- [Installable Skills](./installable-skills/) — Real, runnable, maintained tools you install — not just prompt instructions.
- [Token Efficiency](./token-efficiency/) — Optimizing token usage, agent output compression, and scanner tools.
- [Project Intelligence](./project-intelligence/) — Codebase maps, knowledge graphs, architecture context, refactors, and debugging.
- [Hot Skills](./hot-skills/) — Field-tested AI skills that provide clear practical value in real AI-assisted workflows.
- [Top Selected Skills](./top-selected/) — Highly curated default recommendations for specific AI-assisted workflows.
- [Use Case Skills](./use-case-skills/) — Specialized skills built for specific recurring problems.
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
