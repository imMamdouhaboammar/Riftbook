# RTK

<img src="../../assets/badges/premium-pick.svg" alt="Premium Pick" height="28" />

![Token Efficiency](https://img.shields.io/badge/Token%20Efficiency-111827?style=for-the-badge)
![CLI Proxy](https://img.shields.io/badge/CLI%20Proxy-3B82F6?style=for-the-badge)
![Rust](https://img.shields.io/badge/Rust-F59E0B?style=for-the-badge)
![AI Coding](https://img.shields.io/badge/AI%20Coding-8B5CF6?style=for-the-badge)

## Tags

`premium-pick` `token-efficiency` `cli-proxy` `rust` `claude-code` `cursor` `codex` `gemini-cli` `windsurf` `terminal-output` `context-compression` `vibe-coding`

## What it is

RTK, short for Rust Token Killer, is a CLI proxy that compresses terminal command output before it reaches your AI coding agent’s context window.

Instead of sending raw noisy output from commands like `git status`, `git diff`, `grep`, `find`, `pytest`, `npm test`, `cargo test`, or `docker ps`, RTK filters and condenses the output so the agent receives the important signal with fewer tokens.

Official repo:
[https://github.com/rtk-ai/rtk](https://github.com/rtk-ai/rtk)

## Why it is a Premium Pick

RTK earns Premium Pick because it solves a painful problem in AI coding sessions: terminal output noise.

AI coding agents often waste large parts of the context window reading long command outputs, repeated logs, huge diffs, dependency lists, test noise, and directory trees. RTK sits between the agent and the shell, compresses that output, and keeps the parts that matter.

This makes it especially useful for long coding sessions, debugging, refactoring, and test-heavy projects.

## Best use cases

### 1. Long Claude Code sessions
Use RTK when Claude Code keeps running shell commands and filling the context with noisy output.

### 2. Test-heavy projects
Useful when commands like `pytest`, `npm test`, `cargo test`, `go test`, `ruff check`, `tsc`, or `eslint` produce long output.

### 3. Git-heavy workflows
Good for compressing `git status`, `git diff`, `git log`, and commit-related output.

### 4. Large repos
Useful when commands like `ls`, `tree`, `find`, `grep`, and `rg` produce too much output.

### 5. Terminal-based AI agents
Strong fit for AI coding tools that read shell output, including Claude Code, Cursor, Codex, Gemini CLI, Windsurf, Aider, and similar tools.

### 6. Context window protection
Use it when the agent keeps wasting context on raw logs instead of reasoning about the task.

## How it helps in real work

* Reduces terminal output token waste
* Keeps AI context cleaner
* Makes long coding sessions last longer
* Reduces noisy command output
* Helps the agent focus on meaningful errors and diffs
* Works without changing normal shell habits after setup
* Supports many common dev commands
* Useful for debugging, tests, diffs, search, repo exploration, and deployment checks
* Pairs well with Caveman and Graphify

## Good fit for

* Claude Code users
* Cursor users
* Codex users
* Gemini CLI users
* Windsurf users
* Aider users
* Developers using terminal-based AI coding agents
* Large codebases
* Test-heavy codebases
* Developers who care about context quality and token cost

## Not a good fit for

* Very small projects
* One-line edits
* Non-terminal workflows
* Tasks where the agent does not read command output
* Cases where you need full raw logs without filtering
* Native Windows setups that need full hook behavior without WSL

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure RTK for my current AI coding setup.

Official repo:
https://github.com/rtk-ai/rtk

Your task:
1. Detect my OS, shell, and AI coding environment.
2. Read the official RTK installation instructions.
3. Install RTK using the safest recommended method for this machine.
4. Prefer Homebrew on macOS when available.
5. Use the official install script only if appropriate.
6. Verify that the `rtk` command works.
7. Initialize RTK for my AI coding agent.
8. Do not make unrelated changes to my project.
9. Explain whether the install is global or project-scoped.
10. If any manual step is needed, stop and tell me exactly what I need to do.

After installation, give me:
- What was installed
- Which command was used
- Which agent was configured
- How to verify it
- How to see token savings
- How to disable or remove it
- Any limitations for my current environment
```

## Quick install reference

```bash
# macOS, recommended
brew install rtk

# Linux / macOS quick install
curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh

# Cargo
cargo install --git https://github.com/rtk-ai/rtk

# Verify
rtk --version
rtk gain
```

## Quick start reference

```bash
# Claude Code / Copilot default
rtk init -g

# Gemini CLI
rtk init -g --gemini

# Codex
rtk init -g --codex

# Cursor
rtk init -g --agent cursor

# Windsurf
rtk init -g --agent windsurf

# Cline / Roo Code
rtk init --agent cline

# Test after restart
git status
```

## Usage prompt after installation

```txt
Use RTK-aware terminal commands for this task.

When you need shell output:
1. Prefer commands that RTK can compress.
2. Use `rtk` explicitly if auto-rewrite is not active.
3. Keep raw logs only when we truly need full output.
4. If a command fails, preserve the exact error message.
5. Do not hide important diagnostics.

Task:
[describe your task here]
```

## Example workflow

```txt
Use RTK for this debugging session.

Goal:
Find why the test suite is failing.

Steps:
1. Run the relevant tests through RTK.
2. Summarize only the meaningful failures.
3. Identify repeated or duplicate errors.
4. Inspect the files connected to the failing tests.
5. Propose the smallest fix.
6. Re-run the tests through RTK.
7. Show me the final verification.
```

## Pairing with other Premium Picks

### RTK + Caveman
Use RTK to reduce terminal output noise.
Use Caveman to reduce the agent’s own verbose replies.

Together, they make long coding sessions easier to read and cheaper to run.

### RTK + Graphify
Use Graphify to understand the project structure.
Use RTK to keep shell exploration and test output compact.

Together, they help the agent understand more while wasting less context.

### RTK + Superpowers
Use Superpowers for structured planning and TDD.
Use RTK for compact command output during implementation and verification.

Together, they make the coding process more disciplined and less noisy.

## Quality checklist

Before relying on RTK in a project, check:

* `rtk --version` works
* `rtk gain` works
* The correct AI agent was initialized
* The AI coding tool was restarted after setup
* Auto-rewrite works for shell commands
* Important test failures are preserved
* Full raw logs can still be accessed when needed
* Generated or modified config files are reviewed before commit
* Windows users understand the native Windows limitations
* The team knows when to use explicit `rtk command` calls

## Notes

RTK is strongest when the agent reads a lot of terminal output.

It does not replace careful debugging. It compresses output, so important findings should still be verified when the task is risky.

For Claude Code, remember that built-in tools like Read, Grep, and Glob may not pass through the Bash hook. For RTK output, use shell commands or explicit RTK commands when needed.

For native Windows, RTK filtering can work, but full hook auto-rewrite behavior is better through WSL.

## Links

* GitHub: [https://github.com/rtk-ai/rtk](https://github.com/rtk-ai/rtk)
* Website: [https://www.rtk-ai.app/](https://www.rtk-ai.app/)
* Releases: [https://github.com/rtk-ai/rtk/releases](https://github.com/rtk-ai/rtk/releases)
