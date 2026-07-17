# Integration Compatibility Matrix

Use this matrix after scoring candidates. It prevents the agent from combining tools that compete for the same role.

## Capability matrix

| Capability | Primary choices | Useful companions | Avoid stacking |
|---|---|---|---|
| Project code map | CodeGraph, Graphify, Understand Anything | Serena, Code Review Graph | Multiple project maps without a specific comparison goal |
| Semantic editing | Serena | One project map | Multiple semantic editors controlling the same client |
| Review intelligence | Code Review Graph | Guard Skills, reviewdog, React Doctor | Multiple review graphs on every diff |
| Agent governance | Agent Kernel | Planning With Files, Guard Skills | Two systems owning shared rules, approvals, or memory |
| Planning discipline | Planning With Files | Superpowers, Agent Kernel | Multiple plan formats without a declared source of truth |
| Development methodology | Superpowers | Guard Skills, reviewdog | Several mandatory lifecycle frameworks |
| Frontend design | Impeccable, Taste Skill, Hallmark, UX UI Agent Skills, UI UX Pro Max | React Doctor, Front-End Checklist | More than one primary design skill by default |
| React runtime safety | Framework-native boundary or react-error-boundary | React Doctor | Multiple nested boundaries with no recovery design |
| CI feedback | reviewdog | Existing linters, React Doctor CI | Duplicate PR comments from several reporters |
| Context efficiency | RTK, Caveman | Planning With Files | Compressing raw debugging evidence when it is needed |
| Skill discovery | Awesome Agent Skills, Agentic Awesome Skills, Claude Skills, Garden Skills, Addy Osmani Skills, Matt Pocock Skills | A named installed skill | Installing entire libraries |
| Specialist agents | Agency Agents | Harness, Agent Kernel | A large roster with no lead and no handoff rules |
| Codex orchestration | Oh My Codex | Planning With Files, Guard Skills | Another runtime that owns the same Codex hooks |
| Application memory | Graphiti | SearXNG as a source, application retrieval | Treating it as repository memory |
| Document RAG | Microsoft GraphRAG | SearXNG for discovery, a normal vector baseline | Using it for code navigation |
| Search infrastructure | SearXNG | Research agents, RAG ingestion | Installing it for occasional searches |
| Autonomous iteration | Autoresearch | Tests, benchmarks, rollback tooling | Subjective goals or unbounded loops |

## Recommended combinations

### React frontend quality

1. One design skill
2. React Doctor
3. Framework-native error boundary or `react-error-boundary`
4. Guard Skills
5. Front-End Checklist before release
6. reviewdog only when CI already has analyzers

### Large existing repository

1. One project map
2. Serena for symbol-level work
3. Planning With Files for long tasks
4. Code Review Graph for risky diffs
5. RTK when command output is consuming context

### Multi-agent operation

1. One lead agent
2. Agent Kernel as governance owner
3. Planning With Files as task state
4. Superpowers or the existing development method
5. One or two specialist agents
6. Guard Skills for independent final review

### Research application

1. SearXNG only when controlled search is required
2. GraphRAG only for complex document-corpus reasoning
3. Graphiti only for temporal application memory
4. Autoresearch only for bounded experiments with a deterministic evaluator

## Conflict report template

Before installing overlapping candidates, the agent must report:

```markdown
## Capability conflict

Capability:
Current owner:
Candidate:
Overlap:
What the candidate adds:
Why the current owner cannot provide it:
Extra files, hooks, services, and context:
Validation:
Removal plan:
Decision: keep current / replace / run temporary comparison
```
