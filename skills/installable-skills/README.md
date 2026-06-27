# Installable Skills

Full, real, runnable tools — not just prompt instructions. Each entry here is a
maintained, open-source CLI/agent that you install and run, built and maintained
by a contributor to this repo (not a third-party link-out).

These differ from the rest of the `skills/` catalog: a normal skill card here is
a markdown ruleset an assistant reads. An **Installable Skill** is actual software
with its own repo, its own release history, and its own install/setup flow.

## Catalog

| Skill | Category | Best For | Card |
|---|---|---|---|
| **Delegate Team (`dt`)** | Multi-Agent Orchestration | Delegating bounded coding tasks from Claude Code/Cursor to Codex, MiniMax, GLM, OpenCode, OpenRouter, Gemini, or Vertex AI | [![View Card](../../assets/icons/open-card.svg)](./delegate-team.md) |

## How to Add an Installable Skill

1. The skill must be your own maintained, open-source repo (link to the real GitHub repo, not a fork of someone else's work).
2. Create a markdown card under `skills/installable-skills/<name>.md` following the format in [`delegate-team.md`](./delegate-team.md).
3. Register it in the catalog table above and in the root [`skills/README.md`](../README.md).
