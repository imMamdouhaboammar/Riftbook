# Internal Markdown link validation

Riftbook separates repository-local link integrity from external URL availability.

A relative link either resolves inside the checked-out repository or it does not. That makes internal navigation suitable for a deterministic check with no network dependency.

## What the checker validates

Run:

```bash
node --test scripts/check-internal-links.test.mjs
node scripts/check-internal-links.mjs .
```

The checker scans Markdown files and validates normal inline links and image targets that resolve to repository-local files.

It supports:

- relative file links
- links to directories that contain `README.md`
- query strings and fragments on local targets
- percent-encoded filenames
- angle-bracket destinations containing spaces
- fenced code examples without treating example links as real navigation

It ignores external HTTP(S), mail, telephone, data, JavaScript, and same-page anchor destinations because they are outside this check's responsibility.

## Failure classes

`missing-target`

The resolved repository-local file does not exist.

`outside-repository`

The Markdown destination resolves outside the repository root. This is rejected even if a file happens to exist at that path on the runner. Repository documentation must not depend on files outside the checkout.

`invalid-percent-encoding`

The destination contains malformed percent encoding. The checker reports the individual link instead of aborting the entire repository scan.

Every finding includes the source file and line number. Missing and out-of-bound targets also include the resolved path when available.

## Why this is separate from external link checking

External links can fail because of redirects, authentication, rate limits, bot protection, DNS, or upstream outages. Those failures require different triage.

The Internal Links workflow performs no network requests. A failure should therefore be treated as repository-owned navigation debt unless the parser itself has a confirmed bug.

## CI behavior

`.github/workflows/internal-links.yml` runs when Markdown or the checker changes. It executes the focused Node test suite first, then scans the complete repository checkout.

A broken internal link is blocking because it is deterministic and reproducible from repository state.

## Current boundaries

The checker intentionally does not validate:

- heading-anchor existence
- reference-style Markdown links
- raw HTML `href` or `src` attributes
- contextual correctness of a destination that exists
- external URL availability

Extend the parser only when a real repository failure justifies the added complexity. Keep the internal check deterministic and dependency-free.
