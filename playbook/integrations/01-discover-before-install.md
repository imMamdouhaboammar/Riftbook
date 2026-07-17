# Lesson 1: Discover Before You Install

| Level | Duration | Path | Prerequisites |
|---|---|---|---|
| Beginner | 10 minutes | Integrations | Project Truth files or a clear task brief |

## The mistake

A long list of impressive repositories creates a false sense of progress. The agent starts installing skills, plugins, MCP servers, hooks, libraries, and infrastructure before it understands the project.

The result is usually:

- Conflicting instructions
- Duplicate code intelligence
- More context consumed by tool descriptions
- Hooks running on every edit
- Global configuration changes nobody owns
- Generated caches committed by accident
- More maintenance than useful work

The first integration task is not installation. It is diagnosis.

## Build the capability inventory

Ask the lead agent to inspect six layers.

### 1. Project layer

- Languages
- Frameworks
- Package manager and lockfiles
- Monorepo or single package
- Repository size
- Current branch and working-tree state

### 2. Task layer

- Feature, bug, review, refactor, research, or migration
- Risk level
- Expected duration
- Whether the task crosses modules
- Whether the output is visual
- Whether the work has a measurable evaluator

### 3. Agent layer

- Lead coding agent
- Support agents
- Existing skills and plugins
- MCP servers
- Hooks
- User-level and project-level configuration

### 4. Quality layer

- Lint
- Typecheck
- Tests
- Build
- CI
- Accessibility
- Runtime error handling
- Review process

### 5. Context layer

- Existing project truth files
- Planning files
- Decision log
- Shared memory
- Context-loss problems
- Terminal-output pressure

### 6. Constraint layer

- Credentials
- Network restrictions
- Private code
- Telemetry policy
- Global install policy
- Infrastructure budget
- Required approvals

## Turn evidence into signals

The registry uses signals such as:

- `react`
- `frontend`
- `large_repo`
- `multi_agent`
- `long_running`
- `review_task`
- `context_pressure`
- `document_corpus`
- `agent_memory`
- `codex`

Signals must come from the repository or task. The agent must not invent them to justify a tool.

## Example

A React dashboard has:

- React and TypeScript
- No error boundary
- A large existing codebase
- Claude Code as lead
- Repeated hook mistakes
- No CI annotations
- A visual redesign task

Useful signals:

- `react`
- `frontend`
- `ui_task`
- `large_repo`
- `missing_error_boundary`
- `review_task`

That does not mean install every matching tool.

It means the next lesson can compare:

- React Doctor
- One design skill
- React Error Boundary or the framework equivalent
- One code map
- Guard Skills
- reviewdog only if CI and analyzer output already exist

## Copy this

```text
Inspect this project before recommending integrations.

Return:
1. Languages, frameworks, package managers, and lockfiles
2. Repo size and monorepo shape
3. Current task and risk
4. Existing skills, plugins, MCP servers, hooks, and CI
5. Existing planning, memory, review, design, and runtime-safety layers
6. Missing capabilities supported by repository evidence
7. Security, privacy, credential, global-install, and infrastructure constraints
8. A normalized signal list for the Riftbook integration registry

Do not install anything.
Do not recommend a tool unless you can name the current problem it solves.
```

## Ship check

- [ ] Project stack detected
- [ ] Active task defined
- [ ] Existing capability inventory complete
- [ ] Constraints recorded
- [ ] Signals grounded in evidence
- [ ] No install command executed
