# Serena

<img src="../../assets/badges/agent-infrastructure.svg" alt="Agent Infrastructure" height="28" />

![MCP Toolkit](https://img.shields.io/badge/MCP%20Toolkit-3B82F6?style=for-the-badge)
![Semantic Code Tools](https://img.shields.io/badge/Semantic%20Code%20Tools-14B8A6?style=for-the-badge)
![Agent IDE](https://img.shields.io/badge/Agent%20IDE-8B5CF6?style=for-the-badge)
![Refactoring](https://img.shields.io/badge/Refactoring-F59E0B?style=for-the-badge)

## Tags

`top-selected` `agent-infrastructure` `mcp` `semantic-code-retrieval` `symbolic-editing` `refactoring` `language-server` `lsp` `jetbrains` `claude-code` `codex` `cursor` `gemini-cli` `opencode` `copilot` `large-codebases` `ai-coding-agents`

## What it is

Serena is an MCP toolkit that gives AI coding agents IDE-like capabilities.

It helps agents retrieve, understand, edit, refactor, and navigate code at the symbol level instead of relying only on text search, line numbers, grep, or full-file reading.

Official repo: [oraios/serena](https://github.com/oraios/serena)

## Why it is Top Selected

Serena is Top Selected because it solves a core problem in serious AI coding work:

Agents can write code, but they often understand codebases through weak tools.

Without semantic navigation, an agent may use grep, read large files, guess relationships, and edit text in fragile ways. Serena gives the agent stronger primitives: find symbols, inspect file outlines, find references, edit symbol bodies, rename symbols, use project memory, and work with language-server or JetBrains-backed code intelligence.

That makes it especially valuable for larger repos, refactors, multi-file changes, and any task where code structure matters.

## Best use cases

### 1. Large codebase navigation

Use Serena when the agent keeps reading too many files or using grep repeatedly to understand where things live.

### 2. Symbol-aware edits

Use it when the task needs edits around functions, classes, methods, modules, or components.

### 3. Cross-file refactoring

Useful for renaming symbols, finding references, moving through dependencies, and reducing fragile search-and-replace behavior.

### 4. Debugging complex code paths

Good when the bug crosses several files and the agent needs to understand relationships before editing.

### 5. Long-lived project work

Useful when you want an agent memory system that can work with project workflows across sessions.

### 6. MCP-based AI coding setups

Strong fit if you use Claude Code, Codex, OpenCode, Gemini CLI, Cursor, VS Code, JetBrains tools, Copilot, or other MCP-enabled clients.

## How it helps in real work

* Gives agents IDE-like code understanding
* Reduces blind grep and full-file reading
* Helps agents work at symbol level
* Makes multi-file edits less fragile
* Supports semantic retrieval, editing, refactoring, and debugging workflows
* Works through MCP with many AI coding clients
* Supports language-server backend by default
* Can use a JetBrains backend for stronger IDE analysis
* Includes memory management for longer agent workflows
* Useful for large and complex projects

## Good fit for

* Large repos
* Complex codebases
* Multi-language projects
* Refactoring tasks
* Debugging across files
* Claude Code users
* Codex users
* Gemini CLI users
* Cursor users
* OpenCode users
* VS Code and JetBrains users
* Teams building serious AI-assisted coding workflows

## Not a good fit for

* Tiny scripts
* One-file edits
* Simple landing pages
* Non-code research tasks
* Users who do not want MCP setup
* Teams that only need quick text edits
* Projects where language-server support is not available or hard to configure

## Important warning

Do not install Serena through random MCP or plugin marketplaces.

The official README warns that marketplace entries may contain outdated or weaker install commands. Use the official Quick Start instructions from the Serena repo and docs.

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure Serena for my current AI coding setup.

Official repo:
https://github.com/oraios/serena

Your task:
1. Detect my OS, shell, project root, and AI coding client.
2. Read the official Serena README and Quick Start before installing.
3. Do not use MCP or plugin marketplace installation commands.
4. Install Serena using the official uv-based method.
5. Verify that the `serena` command is available.
6. Run `serena init` and confirm initialization succeeds.
7. Configure Serena for my current MCP client.
8. Prefer project-scoped configuration for this repo unless I explicitly ask for global setup.
9. If I use Claude Code, follow Serena's official Claude Code setup guidance.
10. If Claude Code is biased toward internal tools, explain the system prompt override option.
11. If hooks are recommended, explain what each hook does before adding it.
12. Do not change unrelated files.
13. If any language server dependency is missing, stop and tell me exactly what to install.

After setup, give me:
- What was installed
- Which command was used
- Which MCP client was configured
- Whether setup is global or project-scoped
- How to verify the MCP connection
- How to activate the project
- Which Serena tools are available
- Any limitations or manual steps
```

## Quick install reference

```bash
# Serena requires uv
# Install Serena
uv tool install -p 3.13 serena-agent

# Verify command exists
serena --version

# Initialize Serena
serena init
```

## Claude Code setup reference

```bash
# Official quick setup
serena setup claude-code

# User-level MCP config
claude mcp add --scope user serena -- serena start-mcp-server --context claude-code --project-from-cwd

# Project-level MCP config
claude mcp add serena -- serena start-mcp-server --context claude-code --project "$(pwd)"

# Recommended Claude Code startup override when needed
claude --system-prompt="$(serena prompts print-cc-system-prompt-override)"
```

## Usage prompt after setup

```txt
Use Serena for this coding task.

Before editing:
1. Activate the current project with Serena if it is not active.
2. Read Serena's initial instructions.
3. Use symbol-level tools before reading full files.
4. Prefer find symbol, symbol overview, references, and semantic editing where appropriate.
5. Avoid fragile search-and-replace unless the edit is truly simple.
6. Explain what symbols or files are relevant before modifying code.

Task:
[describe the coding task here]
```

## Project activation prompt

```txt
Activate the current project with Serena.

Then:
1. Read the initial Serena instructions.
2. Summarize the project structure at a high level.
3. Identify the main symbols, modules, or entry points relevant to this task.
4. Do not edit files yet.
```

## Refactor prompt

```txt
Use Serena for this refactor.

Goal:
[describe refactor]

Process:
1. Find the target symbol.
2. Find all references.
3. Identify affected files.
4. Explain the safe edit plan.
5. Use symbolic editing or rename tools where possible.
6. Run tests or typechecks after editing.
7. Summarize what changed and what was verified.
```

## Debugging prompt

```txt
Use Serena to debug this issue.

Issue:
[paste error or behavior]

Process:
1. Locate the relevant symbols and call path.
2. Inspect references and implementations.
3. Avoid reading unrelated full files.
4. Identify the likely root cause.
5. Propose the smallest fix.
6. Make the fix.
7. Run the most relevant verification command.
```

## Large repo exploration prompt

```txt
Use Serena to explore this codebase.

Goal:
[describe what I need to understand]

Return:
1. Relevant modules
2. Important symbols
3. Key relationships
4. Files worth reading
5. Files to avoid for now
6. Suggested next command or edit path

Do not make changes yet.
```

## Smart usage patterns

### Pattern 1: First session in a repo

```txt
Activate project with Serena
Read initial instructions
Get symbol overview for the main entry points
Find relevant symbols for the task
Only then start editing
```

### Pattern 2: Safer refactor

```txt
Find target symbol
Find references
Plan affected files
Use symbolic edit or rename
Run tests
Review diff
```

### Pattern 3: Large bug hunt

```txt
Start from error
Find related symbol
Find references and implementations
Trace call path
Patch smallest cause
Verify
```

### Pattern 4: Pair with Graphify

```txt
Use Graphify for project-level map
Use Serena for symbol-level navigation and editing
Use RTK for compact command output
Use Caveman for short agent replies
```

## Quality checklist

Before relying on Serena in a project, check:

* `uv` is installed
* `serena` is available in shell
* `serena init` succeeded
* The MCP client is connected
* The project is activated correctly
* The right context is used for the client
* Language server dependencies are installed where needed
* Claude Code users verified `/mcp`
* Hooks are understood before enabling
* The agent is actually using Serena tools
* Symbol-level edits are verified with tests, typecheck, or manual review
* Destructive tools are not auto-approved blindly

## Notes

Serena is strongest when code structure matters.

For small text edits, built-in agent tools may be enough.

For serious coding tasks, Serena can become part of your default stack because it gives the agent a better way to understand and change code.

Do not treat Serena as magic. It gives better tools to the agent, but the agent still needs clear goals, verification, and review.

## Links

* GitHub: [oraios/serena](https://github.com/oraios/serena)
* Documentation: [Serena Docs](https://oraios.github.io/serena/)
* MCP Client Setup: [Connecting Your MCP Client](https://oraios.github.io/serena/02-usage/030_clients.html)
