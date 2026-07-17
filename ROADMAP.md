# Riftbook Roadmap

This roadmap keeps Riftbook focused as it grows.

Riftbook should stay practical, curated, and workflow-first. The goal is not to add more links. The goal is to help AI-assisted builders make better decisions and run better workflows.

---

## Phase 1: Governance and quality

Status: In progress

Goals:

- Keep contribution rules aligned with the repo structure
- Add curation rules and acceptance standards
- Improve templates for tools, skills, prompts, and workflows
- Add basic GitHub quality workflows
- Make every new entry easier to review

Completed:

- [x] Add structured issue forms for confirmed bugs and researched resource proposals
- [x] Add a practical content review checklist
- [x] Add repository-specific Markdown content validation
- [x] Add unit tests for content validation rules
- [x] Run content quality validation in GitHub Actions

Next work:

- [ ] Define a stable link-check policy for rate limits, redirects, and intentionally unreachable development URLs
- [ ] Add metadata guidance for cards without forcing a migration of all existing content
- [ ] Add pull request templates for content-only and automation changes
- [ ] Audit existing cards against the review checklist in small, evidence-based batches
- [ ] Add regression fixtures for edge cases found during the first full content audit

---

## Phase 2: Navigation and discovery

Status: Planned

Goals:

- Make the repo easier to browse as it grows
- Help visitors find the right starting point quickly
- Reduce repeated manual index updates

Planned work:

- Add `INDEX.md` for all cards
- Add `TAGS.md` for common tags
- Add category landing pages with clearer descriptions
- Add comparison pages for similar tools
- Add decision trees for common workflows

---

## Phase 3: Playbook expansion

Status: Planned

Goals:

- Turn Riftbook into a practical field guide, not just a directory
- Add real-world cases and mistakes
- Create stronger paths for different builder types

Planned work:

- Add more case studies under `playbook/stories/`
- Add agency operator path
- Add frontend builder path improvements
- Add mistake library entries
- Add reusable agent brief templates

---

## Phase 4: Graph intelligence depth

Status: Planned

Goals:

- Make graph-based tooling easier to understand and compare
- Help builders choose the right graph layer
- Add stronger workflows for project context, review, memory, and RAG

Planned work:

- Add Graphify vs Code Review Graph comparison
- Add GraphRAG vs Graphiti comparison
- Add graph workflow examples
- Add generated-files policy for graph outputs
- Add sample prompts for graph-assisted review

---

## Phase 5: Visual and social polish

Status: Planned

Goals:

- Make Riftbook easier to scan and share
- Keep the visual system consistent across README and category pages

Planned work:

- Add category banners
- Add more local SVG badges
- Add social preview image
- Add visual stack maps for review, frontend, and graph intelligence

---

## Phase 6: Automation and generated indexes

Status: Future

Goals:

- Reduce manual maintenance
- Keep indexes consistent as the repo grows

Planned work:

- Add optional metadata blocks for cards
- Generate `INDEX.md` from metadata
- Generate tag listings
- Add stale-link reporting
- Add simple docs health report

---

## Confirmed issues and opportunities

Confirmed:

- Content quality rules previously existed only as prose and were not enforced automatically.
- Contributors did not have structured issue forms for separating reproducible bugs from future proposals.
- The roadmap did not distinguish completed governance work from pending tasks.

Future opportunities requiring a separate audit:

- Generate a repository-wide card index from agreed metadata.
- Add reader-facing decision trees after the current content inventory is measured.
- Improve mobile scanning in long index pages without duplicating navigation.
- Add stale-link reporting after the current link-check behavior is documented and tuned.

---

## Current priority

The current priority remains governance, templates, and quality checks.

The next development round should run the new validator against the full repository, classify any findings, tune only proven false positives, and then begin a measured navigation inventory before adding generated indexes or new discovery layers.
