# Research Workflow

Workflow for system analysis, codebase mapping, and technical planning before starting feature implementation.

- **Goal**: Understand dependencies and project constraints to build a viable design.
- **When to Use**: Approaching a new project, picking up legacy codebases, or selecting new packages.
- **Inputs**: Task description or repo structure.
- **Tools Needed**: Grep, search tools, dependency visualizers.

## Steps

1. **Mapping**:
   - List the directories to establish structural boundaries.
   - Run grep searches to locate symbols or critical patterns.
2. **Reviewing Docs**:
   - Read local documentation and project files (`README`, `PRODUCT.md`, `DESIGN.md`).
3. **Drafting Strategy**:
   - Compile a short implementation plan detailing modifications.
4. **Stress Testing**:
   - Verify design against compatibility constraints (e.g. Node versions, database drivers).

## Quality Checks

- [ ] Are all affected packages and entrypoints identified?
- [ ] Has compatibility with the existing tech stack been verified?

## Recommended Skills

- **[Last30Days](../skills/use-case-skills/last30days.md)**: AI agent skill for researching recent signals across Reddit, X, YouTube, HN, Polymarket, and the web.

