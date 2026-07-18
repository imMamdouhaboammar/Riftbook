# CI Checks and Failure Triage

Use this guide when a Riftbook pull request fails Markdown lint, link checking, or another repository validation.

## The rule

A pull request must not hide, suppress, or weaken a confirmed failure. It should also avoid blocking an unrelated change because of legacy findings outside its diff.

Riftbook therefore uses two scopes:

| Event | Validation scope | Purpose |
|---|---|---|
| Pull request | Files changed from the target branch | Prove the proposed change does not add new violations |
| Push to `main` | Full repository | Keep legacy debt visible and measure repository health |

## Markdown lint

Pull requests lint changed Markdown files with the pinned CLI version used in GitHub Actions.

Run the equivalent check locally:

```bash
mapfile -t files < <(git diff --name-only --diff-filter=ACMR main...HEAD -- '*.md')
if (( ${#files[@]} > 0 )); then
  npx --yes markdownlint-cli2@0.17.2 "${files[@]}"
fi
```

Run the full repository check:

```bash
npx --yes markdownlint-cli2@0.17.2 "**/*.md"
```

When a lint failure appears:

1. Confirm whether the failing path is part of the pull request.
2. Fix branch-caused violations in the same branch.
3. Do not edit unrelated legacy files merely to make a focused PR green.
4. Record repository-wide legacy failures as confirmed backlog work.
5. Do not disable a rule unless repository evidence shows that the rule conflicts with Riftbook's accepted content structure.

## Link check

Classify every failed URL before editing content:

| Failure type | Response |
|---|---|
| Broken internal relative link | Fix in the same pull request when introduced or touched by the branch |
| External page permanently moved | Replace with the canonical destination after verification |
| External page removed | Remove or replace the reference, then update surrounding guidance |
| Authentication or rate-limit response | Re-run once and document it as transient if the target is otherwise verified |
| Localhost or example URL used intentionally | Keep only when the page clearly labels it as an example and the link checker policy supports it |

Do not replace a source with an unrelated page merely to satisfy the checker.

## Reporting check results

A pull request should name the command or workflow and record one of these results:

- `Passed`
- `Failed: caused by this branch`
- `Failed: confirmed pre-existing issue`
- `Not run: explain why`

Avoid vague statements such as `checks look good` or `should pass`.

## Safe completion gate

Before requesting review:

- Review the full diff.
- Remove temporary files and debug output.
- Run changed-file Markdown lint.
- Verify new and changed internal links.
- Run any project-specific tests affected by the change.
- Wait for GitHub Actions results.
- Keep the pull request open when a branch-caused check is failing.

A green check is evidence, not a substitute for reviewing the actual change.
