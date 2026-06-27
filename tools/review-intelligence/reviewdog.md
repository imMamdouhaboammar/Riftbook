# reviewdog

<img src="../../assets/badges/ci-review-bridge.svg" alt="CI Review Bridge" height="28" />

![Code Review](https://img.shields.io/badge/Code%20Review-84CC16?style=for-the-badge)
![CI Feedback](https://img.shields.io/badge/CI%20Feedback-3B82F6?style=for-the-badge)
![Lint Bridge](https://img.shields.io/badge/Lint%20Bridge-111827?style=for-the-badge)
![PR Comments](https://img.shields.io/badge/PR%20Comments-8B5CF6?style=for-the-badge)

## Tags

`review-intelligence` `ci-review` `lint-bridge` `github-actions` `pr-comments` `github-checks` `annotations` `reviewdog` `eslint` `markdownlint` `shellcheck` `actionlint` `tsc` `pyright` `static-analysis` `quality-gate` `vibe-coding`

## What it is

reviewdog is a review automation tool that takes output from linters, compilers, formatters, and static analysis tools, then reports findings directly on pull requests, checks, annotations, or local diff output.

It is not an AI reviewer.

It is a deterministic bridge between your quality tools and your code review surface.

Official repo:
[https://github.com/reviewdog/reviewdog](https://github.com/reviewdog/reviewdog)

## Why it belongs here

reviewdog belongs in Riftbook because vibe-coded projects often fail in a boring way:

The AI agent writes code quickly, but quality feedback stays buried inside CI logs.

That means the builder has to open the failing job, scroll logs, find the file, understand the issue, and then ask the agent to fix it.

reviewdog moves that feedback into the PR, close to the changed line.

For vibe coders, this is useful because it turns automated checks into readable review comments the agent and human can act on.

## When to use it

### 1. After your project already has linters

Use reviewdog after tools like ESLint, Biome, markdownlint, shellcheck, actionlint, pyright, tsc, golangci-lint, rubocop, or hadolint already work.

Do not start with reviewdog if your linter setup is broken.

### 2. When CI logs are too noisy

Use it when your CI runs checks but the feedback is hard to read.

reviewdog helps put issues in the PR instead of hiding them inside terminal logs.

### 3. When you only want new issues

Use diff filtering when you do not want the PR blocked by old project debt.

This is useful for legacy projects or fast-moving vibe-coded repos.

### 4. When the agent keeps reintroducing the same lint problems

Use reviewdog to make those issues visible every time they appear in changed lines.

### 5. Before making CI stricter

Start with comments or annotations first.

Only make it blocking after the team trusts the signal and noise level.

## How it helps in real work

* Turns linter output into PR comments
* Filters findings by changed lines or changed files
* Works with many languages because it reads tool output
* Supports GitHub Checks, PR reviews, annotations, GitLab, Bitbucket, Gerrit, and local mode
* Supports common formats such as errorformat, RDFormat, diff, checkstyle, and SARIF
* Helps prevent CI logs from becoming the only feedback surface
* Makes automated feedback easier for AI agents to fix
* Works well as a deterministic layer beside AI review tools

## Good fit for

* GitHub Actions workflows
* Teams with existing linters
* Vibe-coded apps that need cleaner PR feedback
* Repos with many small AI-generated changes
* Projects that want “new issues only” review
* Markdown, shell, YAML, Dockerfile, JavaScript, TypeScript, Python, Go, Ruby, Terraform, and similar toolchains
* Teams that want CI comments without relying only on AI review

## Not a good fit for

* Projects with no linters or analyzers
* Business logic review
* UX review
* Architecture reasoning
* Security review without a security scanner
* Tiny projects where CI logs are already enough
* Teams that want AI interpretation instead of deterministic tool output

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to add reviewdog to this project as a CI review bridge.

Official repo:
https://github.com/reviewdog/reviewdog

Your task:
1. Detect the project stack and existing quality tools.
2. Do not add reviewdog before confirming at least one linter, compiler, formatter, or analyzer already works.
3. Start with one high-signal tool only.
4. Prefer GitHub Actions if this repo uses GitHub.
5. Use reviewdog in advisory mode first.
6. Do not block merges yet.
7. Configure reviewdog to comment only on relevant PR changes where possible.
8. Keep the setup minimal and understandable.
9. Do not introduce a noisy workflow that comments on every old issue in the repo.
10. Explain every file you create or change.

After setup, give me:
- Which quality tool was connected to reviewdog
- Which reporter was selected
- Which filter mode was used
- Whether it comments or blocks
- How to test it with a small PR
- How to make it stricter later
```

## Quick install reference

```bash
# macOS / Linuxbrew
brew install reviewdog/tap/reviewdog

# Go install
go install github.com/reviewdog/reviewdog/cmd/reviewdog@latest

# Script install
curl -sfL https://raw.githubusercontent.com/reviewdog/reviewdog/master/install.sh | sh -s

# GitHub Actions setup
uses: reviewdog/action-setup@v1
```

## First workflow to add

For most projects, do not start with 10 reviewdog checks.

Start with one.

Example: markdownlint for docs-heavy repos.

```yaml
name: reviewdog

on:
  pull_request:

permissions:
  contents: read
  pull-requests: write
  checks: write

jobs:
  markdownlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: reviewdog/action-setup@v1
        with:
          reviewdog_version: latest

      - name: Run markdownlint with reviewdog
        env:
          REVIEWDOG_GITHUB_API_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          npx markdownlint-cli2 "**/*.md" 2>&1 \
            | reviewdog -efm="%f:%l %m" -name="markdownlint" -reporter=github-pr-review -filter-mode=added -level=warning
```

## Common reporter choices

| Reporter                | Use it when                                |
| ----------------------- | ------------------------------------------ |
| `local`                 | You want local diff-filtered output        |
| `github-pr-review`      | You want inline PR review comments         |
| `github-pr-check`       | You want GitHub Checks on PRs              |
| `github-check`          | You want checks on push and PR             |
| `github-pr-annotations` | You want GitHub Actions annotations on PRs |
| `gitlab-mr-discussion`  | You use GitLab merge requests              |
| `bitbucket-code-report` | You use Bitbucket Code Insights            |

## Filter mode guide

| Filter mode    | Meaning                           | Use when                                   |
| -------------- | --------------------------------- | ------------------------------------------ |
| `added`        | Only added or modified lines      | Default for clean PR feedback              |
| `diff_context` | Changed lines plus nearby context | You want slightly broader comments         |
| `file`         | Any finding inside changed files  | Useful when issues are near changes        |
| `nofilter`     | Report everything                 | Only for strict full scans or mature repos |

## Vibe coder workflow

Use reviewdog like this:

```txt
1. Let the agent build or edit the feature.
2. Run tests and linters locally.
3. Add reviewdog for one quality tool.
4. Open a small PR.
5. Check if comments are useful or noisy.
6. Ask the agent to fix only relevant findings.
7. Tune filter mode and reporter.
8. Add more checks only when the first one is stable.
```

## Prompt after reviewdog comments

```txt
reviewdog posted comments on this PR.

Your task:
1. Read only the reviewdog comments related to this PR.
2. Group them into:
   - must fix
   - should fix
   - safe to ignore
   - false positive
3. Fix must-fix items first.
4. Do not rewrite unrelated files.
5. Do not silence rules unless there is a clear reason.
6. After changes, explain what was fixed and why.
```

## Prompt for choosing first check

```txt
I want to add reviewdog, but I do not want noisy CI.

Inspect this repo and recommend the first single check to connect.

Choose based on:
1. existing scripts
2. project language
3. most common agent mistakes
4. low false-positive risk
5. easy PR feedback

Do not add multiple tools at once.
Give me the first reviewdog workflow only.
```

## Suggested first checks by project type

| Project type              | Good first reviewdog check     |
| ------------------------- | ------------------------------ |
| Markdown-heavy repo       | markdownlint                   |
| JavaScript or TypeScript  | ESLint or Biome                |
| TypeScript app            | tsc                            |
| GitHub Actions-heavy repo | actionlint                     |
| Shell scripts             | shellcheck                     |
| Docker-heavy repo         | hadolint                       |
| Python                    | pyright, mypy, ruff, or pylint |
| Go                        | golangci-lint                  |
| Terraform                 | tflint or terraform validate   |

## Pairing with other review tools

### reviewdog + Open Code Review

Use reviewdog for deterministic linter findings.
Use Open Code Review for AI reasoning over the diff.

### reviewdog + Code Review Graph

Use Code Review Graph to understand blast radius.
Use reviewdog to report mechanical issues on changed lines.

### reviewdog + React Doctor

Use React Doctor for React-specific analysis.
Use reviewdog when you want findings to appear directly in PR review.

### reviewdog + RTK

Use RTK to keep terminal logs compact.
Use reviewdog to move important linter feedback into the PR.

## Quality checklist

Before trusting a reviewdog setup, check:

* The underlying linter works without reviewdog
* The workflow runs only where intended
* Permissions are minimal and correct
* PR comments are not noisy
* Filter mode matches the repo state
* Old backlog is not dumped into every PR
* The reporter choice is suitable
* `GITHUB_TOKEN` or other tokens are handled by CI secrets
* False positives have a clear suppression policy
* Merge blocking is not enabled too early
* The agent knows how to respond to reviewdog comments

## Notes

reviewdog is strongest when your quality tools already work.

It does not find issues by itself. It routes and filters findings from other tools.

For vibe coders, the best use is simple:

Let the agent build, let linters check, let reviewdog comment, then ask the agent to fix the comments.

Do not use reviewdog as a replacement for AI review, graph-based review, or human review.

## Links

* GitHub: [https://github.com/reviewdog/reviewdog](https://github.com/reviewdog/reviewdog)
* GitHub Actions setup: [https://github.com/reviewdog/action-setup](https://github.com/reviewdog/action-setup)
* Reviewdog actions: [https://github.com/reviewdog](https://github.com/reviewdog)
