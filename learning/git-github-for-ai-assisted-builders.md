# Git and GitHub for AI-Assisted Builders

AI coding agents can edit many files in seconds. Git is the control system that lets you understand, isolate, review, recover, and safely hand off those changes.

This learning path is for builders who can ask an agent to change code but are not yet confident reading repository state, separating work, recovering mistakes, or reviewing a pull request before merge.

The goal is not to memorize commands. The goal is to build a mental model strong enough to notice when an agent is about to make a risky Git decision.

Use a disposable practice repository or a real repository where you have permission to create branches. Do not practice destructive commands on important unpublished work.

## What you should be able to do afterward

By the end of this path, you should be able to:

- Explain the difference between the working tree, index, commit history, branch, and remote
- Read `git status` before trusting an agent's description of repository state
- Create an isolated branch from a known starting commit
- Review a diff before staging or committing it
- Build coherent commits that can be reviewed and reverted independently
- Recover common local mistakes without erasing unrelated work
- Understand the base and head sides of a pull request
- Review a pull request as evidence, not as a summary written by the authoring agent
- Recognize operations that need extra caution, including force pushes and history rewrites

## 1. Build the Git state model

Git tracks several related views of a project:

1. **Working tree** — files as they exist on disk now.
2. **Index** — the exact changes prepared for the next commit.
3. **HEAD** — the commit currently checked out.
4. **Branch** — a movable name pointing at a commit.
5. **Remote-tracking refs** — your local record of branches seen on a remote such as `origin`.

`git status` compares these states. It reports changes between the working tree and index, changes between the index and `HEAD`, and untracked files.

Run:

```bash
git status
git status --short
git log --oneline -5
```

Do not ask the agent what changed before checking repository state yourself. The agent may have incomplete context, while Git records the actual file and commit state.

### Practice

Modify one tracked file and create one new file without committing either. Predict what `git status --short` will show, then run it. Stage only the tracked file and run the command again. Explain why the two files now appear in different states.

Official reference: [git-status](https://git-scm.com/docs/git-status).

## 2. Read before you write

Before an agent edits a repository, establish a starting point.

A useful preflight is:

```bash
git status
git branch --show-current
git log -1 --oneline
git remote -v
```

Then inspect the relevant files, tests, open work, and repository instructions.

This prevents a common agent failure: starting from an unknown branch with unrelated local edits, then mixing new work into an existing change.

### Agent exercise

Give an agent this constraint:

```txt
Inspect the repository before editing.
Report:
- current branch
- current HEAD commit
- working-tree status
- files that control the requested behavior
- relevant tests
Do not modify files yet.
```

Verify its report against Git output. The exercise is complete only when you can identify which claims came from Git and which came from code inspection.

## 3. Isolate one intention on one branch

Branches let you develop a change without moving the default branch itself. GitHub pull requests then compare a head branch containing proposed work with a base branch that will receive the change.

A safe local sequence is:

```bash
git switch main
git pull --ff-only
git switch -c feat/short-description
```

Use the repository's actual default branch name instead of assuming it is `main`.

`git pull --ff-only` is useful when you expect only a fast-forward update and do not want the pull command to create a merge commit automatically.

### Practice

Create a branch for one tiny documentation change. Make the change, then run:

```bash
git status
git diff
```

Explain why the branch isolates commit history but does not automatically prevent you from editing unrelated files.

Official references: [git-switch](https://git-scm.com/docs/git-switch) and [GitHub branches](https://docs.github.com/en/pull-requests/reference/branches).

## 4. Treat the diff as the unit of review

An agent's explanation is not proof of what changed. Review the diff.

Use:

```bash
git diff
git diff --stat
git diff --name-only
```

After staging:

```bash
git diff --staged
git diff --staged --stat
```

Review for:

- Files outside the requested scope
- Deleted checks or weakened assertions
- Debug output
- Generated files that should not be committed
- Configuration changes hidden beside feature code
- Secrets or local credentials
- Large rewrites where a targeted edit was expected

### Practice

Ask an agent to make a two-file change. Before staging, describe the intended change in one sentence. Then inspect `git diff --name-only` and the full diff. If a third file changed, require a reason or restore that file before continuing.

## 5. Build coherent commits

A useful commit represents one reviewable decision. It should be possible to understand why it exists, test it, and revert it without undoing unrelated work.

Prefer:

```txt
fix(auth): reject expired reset tokens
```

Over:

```txt
updates
```

Do not create artificial commits merely to increase commit count. Split work when changes are independently meaningful, not when a line-count target says so.

Before committing:

```bash
git status
git diff --staged
```

Stage intentionally:

```bash
git add path/to/file path/to/test
```

Then commit:

```bash
git commit -m "fix(scope): describe the behavior change"
```

### Practice

Take one existing large commit in a practice repository. Use `git show --stat <commit>` and `git show <commit>` to identify whether it contains more than one intention. Write a hypothetical commit split without rewriting history.

## 6. Recover local mistakes without panic

Recovery starts by identifying which Git state contains the good version.

### Unstage a file but keep its working-tree changes

```bash
git restore --staged path/to/file
```

### Discard an unwanted working-tree change to a tracked file

```bash
git restore path/to/file
```

This discards local changes in that file. Inspect the diff first.

### Inspect previous commits

```bash
git log --oneline
git show <commit>
```

### Create a new commit that reverses an earlier commit

```bash
git revert <commit>
```

`git revert` preserves history by adding a new inverse commit. That is often safer for shared branches than rewriting published history.

Avoid reaching for `git reset --hard`, force push, interactive rebase, or other history-rewriting operations until you can state exactly which commits and uncommitted changes will be affected.

### Recovery drill

1. Modify two files.
2. Stage both.
3. Unstage one while preserving its content.
4. Restore the other file to `HEAD`.
5. Run `git status` and explain what remains.

Official references: [git-restore](https://git-scm.com/docs/git-restore) and [git-revert](https://git-scm.com/docs/git-revert).

## 7. Understand remotes before pushing

A local branch and a remote branch are different references. Pushing publishes commits to a remote repository; fetching updates your local knowledge of remote refs.

Useful inspection commands:

```bash
git remote -v
git branch -vv
git fetch origin
```

Before pushing agent-created work, confirm:

- You are on the intended branch
- The branch contains only intended commits
- The remote is the expected repository
- You are not pushing directly to a protected default branch
- Required tests or checks have run

A normal first push for a new branch is often:

```bash
git push -u origin feat/short-description
```

Do not let an agent use `--force` or `--force-with-lease` merely to make a push succeed. A rejected push is information about divergent history and should be investigated.

## 8. Read a pull request as a comparison

A pull request proposes merging commits from a **head** branch into a **base** branch. Review the actual changed files and commit state, not only the PR description.

A strong review asks:

- What user or system behavior is supposed to change?
- Does every changed file support that objective?
- What behavior must remain unchanged?
- Where is the regression evidence?
- Which checks ran against the current head commit?
- Are there unresolved review comments?
- Has the base branch moved enough that the change needs refreshing?

GitHub supports line comments, suggestions, approvals, and requests for changes. Branch protection or rulesets can require reviews and status checks before merge.

Official references: [Reviewing proposed changes](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request) and [Protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

## 9. Use agents without surrendering repository control

A coding agent can accelerate Git work, but keep control boundaries explicit.

Good agent responsibilities:

- Inspect repository state
- Create a dedicated feature branch when authorized
- Make scoped edits
- Run repository-defined checks
- Show the diff
- Create coherent commits
- Push the feature branch
- Open a pull request

Human or independent-review responsibilities should remain clear for:

- Approving risky or architectural changes
- Deciding whether evidence is sufficient
- Reviewing security-sensitive changes
- Resolving unclear merge conflicts
- Merging into protected branches when your workflow requires independent approval

A useful completion rule is:

```txt
No completion claim without fresh evidence from the final commit.
```

If tests ran before the last meaningful edit, the evidence is stale.

## 10. Capstone: ship one tiny change safely

Choose one small real change: fix a typo that affects instructions, repair a test assertion, improve one error message, or make another low-risk behavior change.

Produce this evidence record:

```txt
Repository:
Default branch:
Starting commit:
Working tree clean at start: yes/no
Task:
Branch:
Files expected to change:
Files actually changed:
Tests or checks required:
Commands run:
Commit:
Remote branch:
Pull request:
Independent review findings:
Remaining risk:
```

Complete the work in this order:

1. Inspect repository instructions and current status.
2. Identify the exact behavior or text to change.
3. Create a branch from the verified default-branch head.
4. Make the smallest complete change.
5. Review the working-tree diff.
6. Run the most relevant check.
7. Stage only intended files.
8. Review the staged diff.
9. Commit with a descriptive message.
10. Verify the final commit and repository status.
11. Push the branch and open a pull request if the repository workflow permits it.
12. Review the PR diff and current checks independently.

The capstone is complete when another reviewer can reproduce your evidence and explain why the change is safe to consider for merge.

## Failure modes to recognize

| Failure mode | Why it is risky | Better response |
|---|---|---|
| Agent edits on an unknown branch | Unrelated work can be mixed together | Inspect status, branch, and `HEAD` first |
| Agent says "only one file changed" | The claim may be stale or incomplete | Check `git diff --name-only` |
| Everything is staged with `git add .` | Unrelated and local files can enter the commit | Stage named paths intentionally |
| A failing test is deleted | The evidence is removed instead of the defect | Investigate the failure and preserve coverage |
| Force push is used after rejection | Published history may be overwritten | Fetch and understand the divergence |
| PR description is treated as proof | Descriptions can omit or misstate changes | Review files, commits, and checks |
| Checks passed before a later edit | Verification no longer covers final state | Re-run relevant checks on the final head |
| A giant commit contains several intentions | Review and rollback become harder | Split only genuinely independent decisions |

## What to learn next

Continue with [Engineering Foundations for AI-Assisted Builders](./engineering-foundations-for-ai-builders.md) if you need deeper understanding of state, APIs, databases, concurrency, testing, CI, and architecture. Use the [Debugging and Recovery Lab](../playbook/labs/debugging-recovery-lab.md) to practice evidence-driven recovery. Use the [PR Review Brief](../agent-briefs/pr-review-brief.md) to turn the review section into a repeatable workflow.

*Back to [Learning Paths](./README.md).*