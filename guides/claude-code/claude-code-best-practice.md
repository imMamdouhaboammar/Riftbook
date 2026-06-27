# Claude Code Best Practice

<img src="../../assets/badges/best-practice.svg" alt="Best Practice" height="28" />

![Claude Code](https://img.shields.io/badge/Claude%20Code-3B82F6?style=for-the-badge)
![Agentic Engineering](https://img.shields.io/badge/Agentic%20Engineering-8B5CF6?style=for-the-badge)
![Reference Hub](https://img.shields.io/badge/Reference%20Hub-10B981?style=for-the-badge)
![Workflows](https://img.shields.io/badge/Workflows-F59E0B?style=for-the-badge)

## Tags

`best-practice` `claude-code` `agentic-engineering` `vibe-coding` `commands` `agents` `skills` `hooks` `mcp` `memory` `workflows` `claude-md` `reference-hub`

## What it is

Claude Code Best Practice is a large reference hub for moving from casual vibe coding to more structured agentic engineering with Claude Code.

It collects Claude Code concepts, examples, workflows, implementation references, tips, reports, and community-backed practices around agents, commands, skills, hooks, MCP servers, settings, memory, workflows, and development orchestration.

Official repo:
[https://github.com/shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)

## Why it belongs here

This is not a tool you install once.

It is a reference system for understanding how Claude Code can be structured into repeatable development workflows.

It belongs in Awesome Vibe Coding because it helps builders stop treating Claude Code like a chatbot and start treating it like an engineering environment made of reusable primitives: commands, agents, skills, hooks, memory, and workflows.

## Best use cases

### 1. Learning Claude Code primitives

Use it when you want to understand the difference between agents, commands, skills, hooks, MCP, settings, and memory.

### 2. Designing your own Claude Code workflow

Useful when you want to build repeatable workflows instead of writing the same prompts every session.

### 3. Improving CLAUDE.md

Good when your `CLAUDE.md` is too long, too vague, or missing setup, test, and project instructions.

### 4. Building command to agent to skill flows

Useful when you want Claude Code to run structured workflows like research, planning, implementation, review, and shipping using the **Command → Agent → Skill** pattern.

### 5. Reviewing advanced Claude Code patterns

Good for studying agent teams, worktrees, hooks, MCP, slash commands, skills, and project memory.

### 6. Team onboarding

Useful when a team needs a shared language for Claude Code usage instead of each person inventing their own process.

## How it helps in real work

* Turns Claude Code from chat usage into a structured engineering workflow
* Helps you understand which primitive to use for each job
* Gives examples for commands, agents, skills, hooks, MCP, memory, and settings
* Helps you restructure `CLAUDE.md`
* Helps identify repeated workflows that should become commands or skills
* Helps reduce messy prompt repetition
* Useful for designing agentic coding systems
* Strong companion resource for Superpowers, Graphify, RTK, and Caveman

## Good fit for

* Claude Code users
* Vibe coders moving toward structured workflows
* Developers building reusable AI coding systems
* Teams standardizing Claude Code usage
* People designing command, agent, skill, and hook systems
* Builders who want practical Claude Code references instead of random tips

## Not a good fit for

* People who do not use Claude Code
* One-off coding edits
* Users looking for a single package to install
* Beginners who want a short tutorial only
* Teams that do not want to maintain Claude-specific workflow files

## Study prompt

Copy this prompt and give it to your AI assistant:

```txt
I want to study Claude Code Best Practice and turn it into a practical setup for my own repo.

Official repo:
https://github.com/shanraisshan/claude-code-best-practice

Your task:
1. Review the repo as a reference hub, not as a package to install.
2. Identify the most useful patterns for my current project.
3. Explain the difference between commands, agents, skills, hooks, MCP, memory, and settings.
4. Recommend what should go into:
   - CLAUDE.md
   - .claude/commands/
   - .claude/agents/
   - .claude/skills/
   - .claude/hooks/
   - .mcp.json
   - .claude/settings.json
5. Suggest a simple Claude Code workflow for this project.
6. Keep the output practical and repo-specific.
7. Do not copy everything blindly.
8. Explain what I should add now, what I should skip, and what can wait.

Output format:
- Project diagnosis
- Useful Claude Code primitives
- Recommended files to create
- Suggested workflow
- What to avoid
- Next actions
```

## Usage prompt for improving CLAUDE.md

```txt
Use Claude Code Best Practice as a reference.

Review my current CLAUDE.md and tell me:
1. What is missing
2. What is too vague
3. What should move to .claude/rules/
4. What should become a slash command
5. What should become a skill
6. What should be enforced through settings instead of memory
7. What setup, test, build, and lint commands should be added

Then rewrite CLAUDE.md to be shorter, clearer, and easier for Claude Code to follow.
```

## Usage prompt for workflow design

```txt
Use Claude Code Best Practice as a reference.

I want to design a reusable Claude Code workflow for:
[describe workflow]

Create a practical structure using:
- command
- agent
- skill
- hook if needed
- memory rule if needed
- settings if needed

Do not over-engineer it.
Give me the exact folder/file structure and starter content for each file.
```

## Example workflow

```txt
I want a repeatable workflow for shipping a new feature.

Use Claude Code Best Practice to design it.

The workflow should include:
1. Research
2. Plan
3. Implement
4. Test
5. Review
6. Ship

Create:
- one slash command
- optional subagents
- one skill if needed
- quality checks
- what should be stored in CLAUDE.md
```

## Suggested reading order

1. Concepts
2. Orchestration Workflow (Command → Agent → Skill)
3. Development Workflows (Research → Plan → Execute → Review → Ship)
4. Tips and Tricks
5. CLAUDE.md and .claude/rules notes
6. Commands
7. Agents
8. Skills
9. Hooks
10. Reports
11. How to Use

## Quality checklist

Before applying anything from this repo, check:

- [ ] Does this project actually use Claude Code?
- [ ] Is the pattern useful for this repo or just interesting?
- [ ] Should this be a command, agent, skill, hook, or memory rule?
- [ ] Is the instruction short enough to stay reliable?
- [ ] Can a new developer run tests after opening Claude Code?
- [ ] Are setup, build, lint, and test commands documented?
- [ ] Are project-specific rules separated from global preferences?
- [ ] Are risky actions controlled by settings or permissions?
- [ ] Are workflows committed to git where the team can review them?

## Notes

- **Reference Mindset**: Treat this repo as a reference hub. Do not copy every pattern or file blindly into your project.
- **Start Small**: Start with the smallest useful setup: a clear `CLAUDE.md`, one or two slash commands, one focused skill, essential setup and test instructions, and optional hooks only when they solve a real workflow problem.
- **Workflow Primitives**: The value is not in having many Claude Code files. The value is knowing which primitive fits which job (Command → Agent → Skill).
- **Enforcement Layer**: Ensure setup, build, test, and lint commands are defined clearly for Claude Code environments to automate quality gates correctly.

## Links

* GitHub: [https://github.com/shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)
