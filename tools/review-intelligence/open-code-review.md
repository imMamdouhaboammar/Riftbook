# Open Code Review

<img src="../../assets/badges/ai-reviewer.svg" alt="AI Reviewer" height="28" />

![Code Review](https://img.shields.io/badge/Code%20Review-84CC16?style=for-the-badge)
![AI Reviewer](https://img.shields.io/badge/AI%20Reviewer-A3E635?style=for-the-badge)
![CLI](https://img.shields.io/badge/CLI-111827?style=for-the-badge)
![Line Level Comments](https://img.shields.io/badge/Line%20Level%20Comments-3B82F6?style=for-the-badge)

## Tags

`top-selected` `review-intelligence` `ai-reviewer` `code-review` `open-code-review` `ocr` `cli` `line-level-comments` `git-diff` `pull-request-review` `full-file-scan` `ci-review` `llm-agent` `deterministic-pipeline` `ruleset` `token-efficiency`

## What it is

Open Code Review is an AI-powered code review CLI from Alibaba.

It reviews Git diffs, changed files, commits, branches, or full files, then produces structured review comments with line-level precision.

It combines deterministic review pipelines with an LLM agent. The deterministic part controls file selection, bundling, rule matching, positioning, and reflection. The agent handles deeper reasoning and context retrieval.

Official repo:
[https://github.com/alibaba/open-code-review](https://github.com/alibaba/open-code-review)

## Why it is Top Selected

Open Code Review is Top Selected because it solves a common AI coding problem:

General-purpose agents can review code, but their review quality is often unstable.

They may skip files, drift to the wrong line, over-comment, miss important context, or give generic feedback. Open Code Review is built specifically for code review, so it gives the workflow stronger constraints and a more predictable review process.

It is especially useful when you want AI review to be part of your actual development loop, not just a chat prompt.

## Best use cases

### 1. Review current workspace changes

Use it when your coding agent has just edited files and you want a focused review before commit.

```bash
ocr review
```

### 2. Review a feature branch against main

Use it before opening or merging a pull request.

```bash
ocr review --from main --to feature-branch
```

### 3. Review a single commit

Use it when you want a clean review of one specific change.

```bash
ocr review --commit abc123
```

### 4. Audit an unfamiliar codebase

Use `ocr scan` when there is no meaningful diff, or when you want to inspect a directory or full repo.

```bash
ocr scan
ocr scan --path internal/agent
```

### 5. Agent-assisted review

Install it as a skill or plugin so your coding agent can invoke OCR during the workflow.

### 6. CI review

Use JSON output in CI when you want automated PR/MR review comments or structured review results.

```bash
ocr review --from origin/main --to <commit_sha> --format json
```

## How it helps in real work

* Reviews actual Git diffs
* Produces structured line-level comments
* Reduces generic review feedback
* Can review staged, unstaged, and untracked workspace changes
* Can compare branch ranges
* Can review a single commit
* Can scan full files or directories
* Supports custom review rules
* Supports OpenAI-compatible and Anthropic-compatible endpoints
* Works as CLI, skill, plugin, or CI step
* Helps the vibe coder catch issues after agent edits and before commit

## Good fit for

* AI-written code review
* PR review workflows
* Feature branch checks
* Pre-commit checks
* Teams that want AI review with fewer false positives
* Projects needing line-level review comments
* Alibaba-style deterministic plus agent review pipelines
* Claude Code users
* Codex users
* Cursor users
* CI/CD pipelines

## Not a good fit for

* Tiny one-line changes
* Visual design review
* Product UX critique
* Business logic that needs domain experts only
* Projects where source code cannot be sent to the configured LLM endpoint
* Teams that want maximum recall even if noise increases
* Repos without a clear LLM provider setup

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure Open Code Review for this project.

Official repo:
https://github.com/alibaba/open-code-review

Your task:
1. Detect my OS, shell, project root, Node/npm availability, and Git status.
2. Read the official README before installing.
3. Install the OCR CLI using the recommended NPM method:
   `npm install -g @alibaba-group/open-code-review`
4. Verify the `ocr` command works.
5. Configure the LLM provider interactively unless I ask for CI/non-interactive setup.
6. Run:
   `ocr config provider`
   `ocr config model`
   `ocr llm test`
7. Do not store API keys in the repo.
8. Do not commit `~/.opencodereview/config.json`.
9. Do not run an expensive scan on the whole repo without previewing first.
10. Start with reviewing the current workspace changes or a small branch diff.

After setup, give me:
- What was installed
- Which provider was configured
- Which model was selected
- Whether connectivity passed
- Which command I should run first
- How to review current changes
- How to review a branch against main
- How to scan a directory safely
- Any privacy or cost risks
```

## Quick install reference

```bash
# Recommended
npm install -g @alibaba-group/open-code-review

# Alternative macOS / Linux binary install
curl -fsSL https://raw.githubusercontent.com/alibaba/open-code-review/main/install.sh | sh

# Verify
ocr version
```

## LLM setup

Interactive setup:

```bash
ocr config provider
ocr config model
ocr llm test
```

Non-interactive setup example:

```bash
ocr config set provider anthropic
ocr config set providers.anthropic.api_key your-api-key-here
ocr config set providers.anthropic.model claude-sonnet-4-6
```

Custom OpenAI-compatible gateway example:

```bash
ocr config set provider my-gateway
ocr config set custom_providers.my-gateway.url https://my-llm-gateway.internal/v1
ocr config set custom_providers.my-gateway.protocol openai
ocr config set custom_providers.my-gateway.api_key your-api-key-here
ocr config set custom_providers.my-gateway.model gpt-4o
```

## Core command cheat sheet

| Command                                      | Use it when                                            |
| -------------------------------------------- | ------------------------------------------------------ |
| `ocr review`                                 | Review current workspace changes                       |
| `ocr review --preview`                       | Preview which files will be reviewed without LLM calls |
| `ocr review --from main --to feature-branch` | Review branch diff                                     |
| `ocr review --commit abc123`                 | Review one commit                                      |
| `ocr review --format json --audience agent`  | Agent-friendly machine-readable review                 |
| `ocr scan`                                   | Review whole repo files without diff                   |
| `ocr scan --preview`                         | Preview file list before full scan                     |
| `ocr scan --path internal/agent`             | Scan a specific directory                              |
| `ocr scan --max-tokens-budget 500000`        | Cap token usage on large scan                          |
| `ocr rules check <file>`                     | Preview which rule applies to a file                   |
| `ocr config provider`                        | Select or add provider                                 |
| `ocr config model`                           | Select model                                           |
| `ocr llm test`                               | Test provider connectivity                             |
| `ocr llm providers`                          | List built-in providers                                |
| `ocr viewer`                                 | View review session history locally                    |

## Vibe coder workflow

Use Open Code Review like this:

```txt
1. Let the AI agent build or edit the feature.
2. Run the app or tests manually.
3. Run `ocr review --preview`.
4. Run `ocr review`.
5. Ask the agent to classify findings by priority.
6. Fix high-confidence issues only.
7. Re-run `ocr review`.
8. Commit after the important issues are resolved.
```

The key idea:

Do not use OCR as a replacement for thinking.
Use it as a review checkpoint after AI changes and before commit or PR.

## Prompt after agent changes

```txt
Use Open Code Review to review the current workspace changes.

Steps:
1. Run `ocr review --preview`.
2. Explain which files will be reviewed.
3. Run `ocr review`.
4. Group findings into:
   - Must fix
   - Should fix
   - Nice to fix
   - Probably ignore
5. Do not apply fixes blindly.
6. Explain why each Must Fix matters.
7. Fix only high-confidence Must Fix issues first.
8. Re-run the review and compare the result.
```

## Branch review prompt

```txt
Use Open Code Review to review this branch against main.

Command:
`ocr review --from main --to HEAD`

Focus on:
1. Correctness bugs
2. Security risks
3. Concurrency or async issues
4. API contract breaks
5. Data handling mistakes
6. Error handling gaps
7. Test gaps

Return a concise review plan before editing anything.
```

## Full scan prompt

```txt
Use Open Code Review to audit this directory.

Target:
[insert path]

Steps:
1. Run `ocr scan --path [path] --preview`.
2. Estimate cost and scope before running the scan.
3. If the scope is too large, propose a narrower scan.
4. Run the scan only after scope is clear.
5. Group findings by severity and theme.
6. Do not rewrite unrelated files.
```

## Agent skill install

```bash
npx skills add alibaba/open-code-review --skill open-code-review
```

Use this when you want your AI coding agent to know how to call OCR, classify issues, and optionally help fix them.

## Claude Code plugin

```txt
/plugin marketplace add alibaba/open-code-review
/plugin install open-code-review@open-code-review
```

This registers:

```txt
/open-code-review:review
```

## Codex plugin prompts

```txt
@Open Code Review review my current changes
@Open Code Review review this branch against main
@Open Code Review review and fix high-confidence issues
```

## Cursor plugin prompts

```txt
@Open Code Review review my current changes
@Open Code Review review this branch against main
@Open Code Review review and fix high-confidence issues
```

## CI command

```bash
ocr review \
  --from "origin/main" \
  --to "<commit_sha>" \
  --format json
```

Use this for structured CI output.

Start in report/comment mode. Do not block merges until the team has reviewed the signal quality across several PRs.

## Custom review rules

Project-level rules live at:

```txt
.opencodereview/rule.json
```

Example:

```json
{
  "rules": [
    {
      "path": "**/*.java",
      "rule": "Check for null safety, resource leaks, thread-safety issues, and missing input validation.",
      "merge_system_rule": true
    },
    {
      "path": "**/*mapper*.xml",
      "rule": "Check SQL for injection risks, parameter errors, and missing closing tags."
    }
  ],
  "exclude": ["**/generated/**", "vendor/**"]
}
```

## Pairing with other review tools

### Open Code Review + reviewdog

Use reviewdog for deterministic linter findings.
Use Open Code Review for AI reasoning over the diff.

### Open Code Review + Code Review Graph

Use Code Review Graph for blast radius and affected flows.
Use Open Code Review for actual AI review comments on the diff.

### Open Code Review + Serena

Use Serena to navigate and fix symbols precisely after OCR finds issues.

### Open Code Review + RTK

Use RTK to compress command output during tests and verification.

### Open Code Review + Caveman

Use Caveman to keep review summaries short and focused.

## Quality checklist

Before trusting OCR output, check:

* `ocr llm test` passes
* The reviewed diff is the intended diff
* `ocr review --preview` does not include irrelevant files
* API keys are not committed
* Provider configuration is local or CI-secret based
* Findings are grouped by severity before fixing
* High-confidence issues are fixed first
* False positives are not fixed blindly
* Full scans use preview and token budget
* CI starts as advisory before blocking merges
* Security findings get human review
* Critical business logic still gets human review

## Notes

Open Code Review is best used after the AI agent changes code and before commit or PR.

For large repos, always preview before running expensive scans.

For CI, prefer JSON output and start with advisory review comments before making it a hard gate.

Treat it as a code review automation layer, not as a replacement for human judgment.

## Links

* GitHub: [https://github.com/alibaba/open-code-review](https://github.com/alibaba/open-code-review)
* GitHub Actions examples: [https://github.com/alibaba/open-code-review/tree/main/examples/github_actions](https://github.com/alibaba/open-code-review/tree/main/examples/github_actions)
* GitLab CI examples: [https://github.com/alibaba/open-code-review/tree/main/examples/gitlab_ci](https://github.com/alibaba/open-code-review/tree/main/examples/gitlab_ci)
