# Code Review Graph

<img src="../../assets/badges/review-intelligence.svg" alt="Review Intelligence" height="28" />

![Code Review](https://img.shields.io/badge/Code%20Review-84CC16?style=for-the-badge)
![MCP](https://img.shields.io/badge/MCP-3B82F6?style=for-the-badge)
![Local First](https://img.shields.io/badge/Local%20First-111827?style=for-the-badge)
![Token Efficiency](https://img.shields.io/badge/Token%20Efficiency-F59E0B?style=for-the-badge)

## Tags

`top-selected` `review-intelligence` `code-review` `mcp` `local-first` `blast-radius` `tree-sitter` `token-efficiency` `pr-review` `risk-scoring` `github-action` `large-repos` `monorepos` `architecture-map` `context-reduction`

## What it is

Code Review Graph is a local-first code intelligence graph for MCP and CLI.

It builds a persistent structural map of your codebase so AI coding assistants can review changes with targeted context instead of rereading large parts of the repository.

Official repo:
[https://github.com/tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)

## Why it is Top Selected

Code Review Graph is Top Selected because code review is one of the places where AI agents waste the most context.

A normal agent often reviews a PR by reading changed files, grepping around, opening related files, and guessing the blast radius. That works for small changes, but it becomes weak in large repos, monorepos, and cross-file refactors.

Code Review Graph gives the agent a graph of functions, classes, imports, calls, inheritance, test coverage, communities, hubs, bridges, and affected flows. This helps the agent answer the real review question:

What can this change break?

## Best use cases

### 1. PR review with blast radius

Use it when a change touches a function, module, API, route, model, or component that may affect other areas.

### 2. Large repo review

Use it when the agent keeps reading too many files or misses related files during review.

### 3. Monorepos

Useful when a small change can affect code across packages, services, apps, or shared modules.

### 4. Pre-merge checks

Use it before merging to identify affected flows, risky functions, test gaps, and unexpected coupling.

### 5. Architecture review

Useful when you want hubs, bridges, communities, chokepoints, and structural weaknesses.

### 6. Test gap analysis

Use it when a change has impact but the connected test coverage is weak or unclear.

### 7. CI review comments

Use the GitHub Action to post risk-scored PR comments automatically.

## How it helps in real work

* Builds a structural graph of the repo
* Gives AI assistants targeted review context
* Reduces token waste in code review
* Maps changed files to affected functions, flows, callers, dependents, and tests
* Helps find architectural hotspots
* Supports risk-scored PR review comments in CI
* Keeps the graph updated with hooks, watch mode, or daemon mode
* Works locally without sending source code to external services for core graph analysis
* Supports many common languages and notebooks
* Can export visual graphs, markdown wiki, GraphML, SVG, Obsidian vault, and Neo4j Cypher

## Good fit for

* Serious code review workflows
* Large repos
* Monorepos
* Teams using AI coding assistants
* Claude Code users
* Cursor users
* Codex users
* Gemini CLI users
* GitHub Copilot users
* Projects with complex dependencies
* Teams that want review context, not random diff summaries

## Not a good fit for

* Tiny repos
* One-file scripts
* Trivial copy changes
* Simple static pages
* Teams that do not use PR review
* Projects where full context is already small enough
* Cases where a human reviewer must inspect everything manually for compliance reasons

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt id="ncv6uy"
I want you to install and configure Code Review Graph for this project.

Official repo:
https://github.com/tirth8205/code-review-graph

Your task:
1. Detect my OS, shell, Python version, project root, and AI coding tools.
2. Read the official README before installing.
3. Confirm Python 3.10 or newer is available.
4. Install Code Review Graph using the recommended method.
5. Prefer `pipx install code-review-graph` if pipx is available, otherwise use the official pip install flow.
6. Run `code-review-graph install`.
7. If needed, target the current AI coding platform explicitly.
8. Run `code-review-graph build` from the project root.
9. Verify that the graph was created.
10. Explain which files were created or changed.
11. Do not commit generated graph files unless I explicitly ask.
12. Do not enable CI merge gates automatically.

After setup, give me:
- What was installed
- Which command was used
- Which AI tools were configured
- Where the graph data lives
- How to rebuild the graph
- How to update it incrementally
- How to run a review check
- How to disable or remove it
- Any limitations for this repo
```

## Quick install reference

```bash id="kqwiih"
# Install
pip install code-review-graph

# Alternative
pipx install code-review-graph

# Auto-detect and configure supported AI coding tools
code-review-graph install

# Build the code graph
code-review-graph build
```

## Platform-specific setup

```bash id="xgik7n"
# Configure only Codex
code-review-graph install --platform codex

# Configure only Cursor
code-review-graph install --platform cursor

# Configure only Claude Code
code-review-graph install --platform claude-code

# Configure only Gemini CLI
code-review-graph install --platform gemini-cli

# Configure only GitHub Copilot in VS Code
code-review-graph install --platform copilot

# Configure GitHub Copilot CLI
code-review-graph install --platform copilot-cli
```

## Slash commands

Use these inside supported AI coding tools:

```txt id="t1yuy6"
/code-review-graph:build-graph
/code-review-graph:review-delta
/code-review-graph:review-pr
```

## CLI command cheat sheet

| Command                                             | Use it when                                           |
| --------------------------------------------------- | ----------------------------------------------------- |
| `code-review-graph build`                           | First setup or full rebuild                           |
| `code-review-graph update`                          | Incrementally update changed files                    |
| `code-review-graph status`                          | Check graph stats and health                          |
| `code-review-graph watch`                           | Keep graph updated while working                      |
| `code-review-graph visualize`                       | Generate an interactive HTML graph                    |
| `code-review-graph visualize --format svg`          | Export static SVG graph                               |
| `code-review-graph visualize --format graphml`      | Export for Gephi or yEd                               |
| `code-review-graph visualize --format obsidian`     | Export as Obsidian vault                              |
| `code-review-graph visualize --format cypher`       | Export as Neo4j Cypher                                |
| `code-review-graph wiki`                            | Generate markdown wiki from communities               |
| `code-review-graph detect-changes --brief`          | Read-only risk panel and token savings                |
| `code-review-graph update --brief`                  | Refresh graph, then show risk panel and token savings |
| `code-review-graph detect-changes --brief --verify` | Cross-check token estimate with tokenizer             |
| `code-review-graph register <path>`                 | Register repo in multi-repo registry                  |
| `code-review-graph repos`                           | List registered repos                                 |
| `code-review-graph daemon start`                    | Watch multiple repos in background                    |
| `code-review-graph serve`                           | Start MCP server                                      |

## Smart usage patterns

### Pattern 1: First project setup

```txt id="kuqeqe"
code-review-graph install
code-review-graph build
code-review-graph status
```

Then ask your assistant:

```txt id="s0gkq1"
Use Code Review Graph for this repo.

First:
1. Confirm the graph exists.
2. Show me graph stats.
3. Identify major communities, hubs, bridges, and possible architecture risks.
4. Do not edit files yet.
```

### Pattern 2: Before reviewing a PR

```txt id="ragrtb"
code-review-graph update --brief
```

Then ask:

```txt id="l8qhop"
Use Code Review Graph to review this PR.

Focus on:
1. Changed functions
2. Blast radius
3. Affected callers and dependents
4. Affected execution flows
5. Test gaps
6. Unexpected coupling
7. Files that need human review

Give me a practical review, not a generic diff summary.
```

### Pattern 3: Review current working changes

```txt id="8hp4m8"
code-review-graph detect-changes --brief
```

Then ask:

```txt id="iz1jwc"
Use Code Review Graph to review my uncommitted changes.

Return:
1. Risk score
2. Affected files and symbols
3. Possible broken flows
4. Missing tests
5. Suggested review questions
6. What I should inspect manually before commit
```

### Pattern 4: Debugging a risky change

```txt id="rw5uon"
Use Code Review Graph to debug this issue.

Issue:
[paste bug or failing test]

Process:
1. Start from the changed or failing file.
2. Find affected callers, callees, tests, and flows.
3. Identify graph communities involved.
4. Explain likely blast radius.
5. Suggest the smallest fix path.
6. Verify with tests or typecheck.
```

### Pattern 5: Architecture map

```txt id="c95s0c"
Use Code Review Graph to create an architecture map.

Return:
1. Main communities
2. Hub nodes
3. Bridge nodes
4. Chokepoints
5. Surprising cross-community connections
6. Untested hotspots
7. Suggested cleanup priorities
```

### Pattern 6: CI PR review

Use this only after testing locally.

```yaml id="3jlh0s"
name: Code Review Graph

on:
  pull_request:

permissions:
  contents: read
  pull-requests: write

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: tirth8205/code-review-graph@v2.3.6
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

Do not enable `fail-on-risk` until the team trusts the signal.

## MCP workflow prompts

### Review changes

```txt id="sm8sqm"
Use Code Review Graph's review workflow for my current changes.

I want:
1. Minimal review context first
2. Impact radius
3. Affected flows
4. Risk-scored functions
5. Test gaps
6. Suggested review questions
7. Human-review checklist
```

### Pre-merge check

```txt id="syyfv4"
Use Code Review Graph for a pre-merge check.

Check:
1. Does this change affect more files than the diff suggests?
2. Are there callers or dependents we have not inspected?
3. Are there impacted tests?
4. Are there untested hotspots?
5. Are there surprising connections?
6. Should this PR be split?
7. What should block merge?
```

### Onboard developer

```txt id="2ogtkm"
Use Code Review Graph to onboard me to this repository.

Return:
1. Main architecture communities
2. Most important entry points
3. Hub nodes
4. Bridge nodes
5. Testing structure
6. Where new changes are likely to be risky
7. First files to read
```

## Multi-repo daemon

Use this if you work across multiple repos or your editor does not keep the graph fresh.

```bash id="z4ar0x"
# Register repos
crg-daemon add ~/project-a --alias project-a
crg-daemon add ~/project-b --alias project-b

# Start background watcher
crg-daemon start

# Check status
crg-daemon status

# Tail logs
crg-daemon logs --repo project-a -f

# Stop daemon
crg-daemon stop
```

## Pairing with other tools

### Code Review Graph + reviewdog

Use Code Review Graph to understand blast radius and affected flows.
Use reviewdog to report mechanical linter issues on changed lines.

### Code Review Graph + Open Code Review

Use Code Review Graph to understand blast radius and affected flows.
Use Open Code Review to generate precise, line-level AI comments on the code changes.

### Code Review Graph + Serena

Use Code Review Graph to understand blast radius and review risk.
Use Serena for symbol-level code navigation and edits.

### Code Review Graph + RTK

Use Code Review Graph for targeted context.
Use RTK to compress terminal output during tests, linting, and review verification.

### Code Review Graph + Graphify

Use Graphify for broad project knowledge mapping.
Use Code Review Graph for PR-specific impact and review context.

### Code Review Graph + Caveman

Use Code Review Graph to reduce context waste.
Use Caveman to keep the agent's review responses short and focused.

## Quality checklist

Before relying on Code Review Graph, check:

- [ ] Python 3.10 or newer is available
- [ ] `code-review-graph build` succeeded
- [ ] Graph status looks healthy
- [ ] The right platform was configured
- [ ] The graph is fresh before review
- [ ] Generated graph artifacts are ignored or intentionally committed
- [ ] Large generated files are not committed by accident
- [ ] CI PR comments are tested before being used as a merge gate
- [ ] `fail-on-risk` is not enabled too early
- [ ] Review output separates graph evidence from agent interpretation
- [ ] High-risk changes still get human review
- [ ] The team understands that blast-radius analysis can flag false positives

## Notes

- **Code Review Fit**: Code Review Graph is strongest when the codebase is large enough that a normal diff review is not enough. For tiny changes, the graph context can be heavier than simply reading the changed file.
- **Review Intelligence Layer**: Treat the graph as a review intelligence layer, not as a replacement for human review.
- **CI Safety Gate**: Do not enable CI merge gates automatically; test locally first and avoid enforcing `fail-on-risk` too early.
- **No Remote Exfiltration**: Core graph analysis is local-first and does not send source code to an external service.

## Links

* GitHub: [https://github.com/tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)
* Commands docs: [https://github.com/tirth8205/code-review-graph/blob/main/docs/COMMANDS.md](https://github.com/tirth8205/code-review-graph/blob/main/docs/COMMANDS.md)
* GitHub Action docs: [https://github.com/tirth8205/code-review-graph/blob/main/docs/GITHUB_ACTION.md](https://github.com/tirth8205/code-review-graph/blob/main/docs/GITHUB_ACTION.md)
* Reproducing benchmarks: [https://github.com/tirth8205/code-review-graph/blob/main/docs/REPRODUCING.md](https://github.com/tirth8205/code-review-graph/blob/main/docs/REPRODUCING.md)
* Custom languages: [https://github.com/tirth8205/code-review-graph/blob/main/docs/CUSTOM_LANGUAGES.md](https://github.com/tirth8205/code-review-graph/blob/main/docs/CUSTOM_LANGUAGES.md)
