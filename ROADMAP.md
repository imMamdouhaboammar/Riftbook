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

- Added curation and review guidance
- Added templates for common content types
- Added scoped Markdown linting and CI failure-triage guidance
- Added a deterministic internal Markdown link checker with tests and CI
- Added integration-registry structural validation and selector checks

Confirmed follow-up work:

- Resolve repository-wide Markdown lint failures without weakening rules
- Classify external link failures separately from repository-local breakage
- Resolve or supersede the remaining unmergeable content-quality pull request
- Add metadata guidance for cards
- Extend internal-link validation to heading anchors and reference-style links when justified by real failures

---

## Phase 2: Navigation and discovery

Status: In progress

Goals:

- Make the repo easier to browse as it grows
- Help visitors find the right starting point quickly
- Reduce repeated manual index updates

Completed:

- Added `INDEX.md` for major cards and sections
- Added comparison pages for similar graph tools
- Added a problem-based Path Finder that connects workflow symptoms to lessons, briefs, tools, and next actions
- Linked playbook paths from the main index

Planned work:

- Add `TAGS.md` for common tags
- Add category landing pages with clearer descriptions
- Add more decision guides for tool selection and review workflows
- Define metadata required for future generated indexes

---

## Phase 3: Playbook expansion

Status: In progress

Goals:

- Turn Riftbook into a practical field guide, not just a directory
- Add real-world cases and mistakes
- Create stronger paths for different builder types

Completed:

- Added Fresh Vibe Coder, Beginner, Solo Builder, Frontend, Product-Minded, and Agency Operator paths
- Added the First Real Project Lab
- Added the Debugging and Recovery Lab
- Added reusable agent brief templates

Planned work:

- Add more case studies under `playbook/stories/`
- Add frontend path exercises tied to a real interface review
- Add mistake library entries grounded in real failed builds

---

## Phase 4: Graph intelligence depth

Status: In progress

Goals:

- Make graph-based tooling easier to understand and compare
- Help builders choose the right graph layer
- Add stronger workflows for project context, review, memory, and RAG

Completed:

- Added Graphify vs Code Review Graph comparison
- Added GraphRAG vs Graphiti comparison
- Added the Graph Intelligence Stack and workflow

Planned work:

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
- Add stale external-link reporting
- Add a simple docs health report that separates internal and external findings

---

## Current priority

The current priority is to make repository quality findings deterministic and actionable before adding generated discovery layers.

The next development round should resolve the remaining content-quality pull request, run the new internal-link check against `main`, classify any confirmed failures, and then define minimal card metadata for future indexes.
