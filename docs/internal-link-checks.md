# Internal Link Checks

Riftbook now has a deterministic repository-local check for relative Markdown links.

The existing external link workflow remains useful for checking remote URLs. This check has a narrower job: prove that links between Riftbook pages, files, images, and category directories resolve inside the checked-out repository.

## What the checker validates

The checker scans every Markdown file and verifies relative targets such as:

```md
[Open the guide](../guides/example.md)
[Browse tools](../tools/)
![Diagram](../assets/example.svg)
```

Directory targets resolve to that directory's `README.md`.

The checker removes query strings and fragments before resolving the file path, and supports percent-encoded filenames.

## What it deliberately skips

The checker does not make network requests. It skips:

- `http` and `https` URLs
- Email and telephone links
- Same-page anchor-only links
- Links shown inside fenced code examples

External availability, redirects, authentication failures, and rate limits remain the responsibility of the external link workflow.

## Run locally

Run the focused tests:

```bash
node --test scripts/check-internal-links.test.mjs
```

Check the complete repository:

```bash
node scripts/check-internal-links.mjs .
```

A failure reports the source file, line number, written target, and resolved repository path.

## Failure policy

When the check fails:

1. Confirm the target is intended to be local.
2. Correct the relative path or restore the missing destination.
3. Do not replace it with an unrelated page just to make CI pass.
4. Add a regression test when the failure exposes a parser or path-resolution defect.
5. Keep the pull request open while branch-caused failures remain.

## Confirmed limitations

- Same-page and cross-page heading anchors are not validated yet.
- Reference-style Markdown links are not parsed yet.
- HTML `href` and `src` attributes are not parsed yet.
- The check validates repository existence, not the meaning or freshness of the destination.

## Next improvements

Prioritize these only after real failures justify them:

1. Validate cross-page heading anchors using GitHub-compatible slugs.
2. Add reference-style link parsing.
3. Add HTML link and image target parsing.
4. Produce a small docs health report that separates internal breakage from external availability failures.
