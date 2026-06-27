# How I Use Claude Code and Delegate Team

![STORY](../assets/badges/story.svg) ![FIELD TESTED](https://img.shields.io/badge/FIELD%20TESTED-10B981?style=flat-square)

---

## Context

When I started building larger applications with AI agents, I quickly hit a wall. 

Single-file edits or simple script creations worked well. But as soon as I tried to build complex features that crossed multiple files — like a complete JWT authentication flow or modular payment billing integrations — the workflow became incredibly messy. I needed a way to coordinate multiple agents without losing context or wasting tokens.

---

## The Problem I Had

Initially, I tried running multiple agents directly. I would open one terminal window running Claude Code, another with Cursor, and maybe a browser tab with Gemini. I would copy-paste the same prompt to all of them, hoping to compare solutions. 

This became a nightmare. 

Each agent made its own architectural assumptions. One used default exports; another used named exports. One structured the helper functions inside a `/utils` folder; another placed them in `/helpers`. When I tried to merge the code, the conflict resolution took longer than writing it from scratch. On top of that, running multiple agents manually meant I was constantly copy-pasting code, burning through context tokens, and hitting API rate limits.

---

## Why I Made Claude Code the Lead

I realized I needed a single coordinator. I chose **Claude Code** to be my Lead Engineer (or Controller). 

Claude Code stays open in my primary workspace terminal. It holds the main context files (`PRODUCT.md`, `RULES.md`, `TASKS.md`) and makes all the structural and architectural decisions. It reviews the directory layout and has the final say on style and pattern consistency.

Instead of writing all the code blocks directly, Claude Code acts as a planner. But I still needed a way to generate heavy boilerplate or test alternative setups without cluttering Claude Code's active memory.

---

## Why Delegate Team Became the Gateway

To solve this, I integrated [Delegate Team](https://github.com/imMamdouhaboammar/delegate-team) (`dt`) into my CLI toolset. 

`delegate-team` is a local delegation gateway. It allows Claude Code (or me) to dispatch specific, isolated coding tasks directly to specialized support backends (like Codex, MiniMax, Gemini, OpenCode, or VertexCoder) or to MetaGPT-inspired team roles, and get the output back as a structured diff.

Using `dt` changed the multi-agent dynamic from a chaotic crowd to a structured hierarchy:

1. Claude Code plans the architectural changes.
2. For heavy code generation or isolated helper functions, Claude Code runs `dt run` or `dt metagpt` with a structured brief.
3. The delegation runtime handles token limits, provider credentials, and failovers behind the scenes.
4. The support agent returns the code changes.
5. Claude Code audits the diff against our rules and integrates it.

---

## What Changed in My Workflow

The differences were immediate:

- **Token Efficiency:** Claude Code no longer burns millions of tokens generating simple, repetitive boilerplate files. It delegates those to Codex or OpenCode through `dt`, sending only the relevant file context.
- **Robustness:** If Codex hits a rate limit or fails to respond, the `Failover Ring` in `dt` automatically routes the request to VertexCoder or Gemini without interrupting my active terminal session.
- **Architectural Coherence:** Because Claude Code reviews and integrates every delegated output, the code styles and structural patterns stay consistent. No more mismatched conventions.

---

## What Still Needs Review

It is easy to look at a system like this and think it is completely automated. It is not. Here are the things I still have to review manually:

- **The Delegation Brief:** If the brief sent to `dt` is vague, the support agent will return garbage. I have to make sure the requirements, files, and tests are explicitly stated.
- **Unintended Changes:** Even with workspace policies (`--workspace-only`), delegated agents sometimes try to refactor unrelated utilities or delete files. I always review the git diff before committing.
- **Dependency Gates:** I keep the `--no-install` flag active in `dt` to prevent external agents from silently installing unverified dependencies. If a package is needed, I install it myself.

---

## What I Would Tell a New Vibe Coder

If you are starting out with multiple agents, do not overcomplicate your setup too early. 

Start with **one lead agent** (like Claude Code) and get used to managing your project files (`PRODUCT.md`, `TASKS.md`, `RULES.md`). Once you hit the boundaries of token limits or need specialized code generation, introduce a delegation gateway like `delegate-team` to scale your work. 

Always keep in mind:

> Delegate Team is a powerful gateway, but it does not replace the need for unit tests, clear project rules, and final human approval.

---

*← Back to [Stories](./README.md)*
