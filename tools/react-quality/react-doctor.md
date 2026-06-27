# React Doctor

<img src="../../assets/badges/react-quality-gate.svg" alt="React Quality Gate" height="28" />

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge)
![Quality Gate](https://img.shields.io/badge/Quality%20Gate-84CC16?style=for-the-badge)
![Agent Skill](https://img.shields.io/badge/Agent%20Skill-8B5CF6?style=for-the-badge)
![CI Review](https://img.shields.io/badge/CI%20Review-111827?style=for-the-badge)

## Tags

`react-quality` `quality-gate` `react` `nextjs` `vite` `tanstack` `react-native` `expo` `agent-skill` `ci-review` `state-effects` `performance` `architecture` `security` `accessibility` `vibe-coding`

## What it is

React Doctor is a deterministic scanner for React codebases.

It catches issues across state and effects, performance, architecture, security, and accessibility. It can run as a one-time audit, install as an agent skill, or run in CI to review pull requests.

Official repo:
[https://github.com/millionco/react-doctor](https://github.com/millionco/react-doctor)

## Why it belongs here

React Doctor is a strong use case tool for vibe coders because AI agents often write React that looks correct at first glance but contains problems that show up later.

The page works, but the code may have unnecessary re-renders, weak effect usage, unstable keys, architecture drift, accessibility gaps, or risky patterns.

React Doctor gives the vibe coder a practical checkpoint:

Before trusting AI-written React, run the doctor.

## When to use it

### 1. Right after the agent builds a React feature

Use it after the AI agent finishes a screen, component, flow, or feature.

Best moment:

```txt
The UI is working, but I have not reviewed the React quality yet.
```

Run:

```bash
npx react-doctor@latest
```

### 2. When the UI feels slow or weird

Use it when the app works but feels heavy, laggy, flickery, or inconsistent.

Good symptoms:

* typing feels delayed
* component keeps re-rendering
* state updates feel strange
* loading states behave weirdly
* UI changes more than expected
* a simple page feels heavier than it should

### 3. Before shipping a vibe-coded React app

Use it as a pre-ship quality gate.

Good moment:

```txt
The feature is done. Now check if the React code is safe enough to ship.
```

### 4. Before merging a pull request

Use the CI mode when you want React Doctor to comment on new PR issues only, not the old backlog.

Run:

```bash
npx react-doctor@latest ci install
```

### 5. When teaching the agent not to repeat mistakes

After an audit, install the React Doctor skill so the agent learns from the issues and can avoid similar mistakes in future changes.

Run:

```bash
npx react-doctor@latest install
```

## How it helps in real work

* Finds React-specific issues the agent may miss
* Gives the vibe coder a quality checkpoint after AI implementation
* Helps catch state and effect mistakes
* Helps catch performance and architecture problems
* Helps catch security and accessibility issues
* Works across common React stacks
* Can be installed as an agent skill
* Can run in CI and review PRs
* Helps prevent the same React mistakes from repeating across sessions

## Good fit for

* Vibe-coded React apps
* Next.js projects
* Vite React projects
* TanStack projects
* React Native projects
* Expo apps
* AI-generated dashboards
* SaaS interfaces
* Landing pages with complex state
* Forms, modals, tables, filters, and interactive UI
* Teams using AI coding agents

## Not a good fit for

* Non-React projects
* Static HTML pages
* Backend-only work
* Tiny one-line copy edits
* Projects where React quality is already covered by strong internal rules
* Cases where you only need visual design review
* Cases where you need full human code review for business logic

## The vibe coder workflow

Use React Doctor like this:

```txt
1. Ask the agent to build the React feature
2. Run the app locally
3. Check the UI manually
4. Run React Doctor
5. Ask the agent to fix the findings
6. Run React Doctor again
7. Add CI only when the project is stable enough
```

The key idea:

Do not run React Doctor before the feature exists.
Do not wait until production either.
Run it when the UI works but before you trust the React code.

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to use React Doctor on this project.

Official repo:
https://github.com/millionco/react-doctor

Your task:
1. Confirm this is a React project.
2. Detect the framework: Next.js, Vite, TanStack, React Native, Expo, or other.
3. Run a first audit using:
   `npx react-doctor@latest`
4. Read the findings carefully.
5. Group issues by:
   - state and effects
   - performance
   - architecture
   - security
   - accessibility
6. Do not fix everything blindly.
7. Prioritize the issues that can affect real users or future maintenance.
8. Propose a fix plan first.
9. Fix the highest-impact issues.
10. Run React Doctor again after fixes.
11. Show me before and after results.

Important:
Do not install CI yet.
Do not change unrelated files.
Do not suppress rules without explaining why.
```

## Quick command reference

```bash
# One-time project audit
npx react-doctor@latest

# One-time audit without telemetry
npx react-doctor@latest --no-telemetry

# Install the skill for coding agents
npx react-doctor@latest install

# Install CI review
npx react-doctor@latest ci install

# Configure CI behavior
react-doctor ci config

# Upgrade CI action
react-doctor ci upgrade
```

## Prompt after first audit

```txt
React Doctor found issues in this project.

Your task:
1. Read the audit output.
2. Explain the top issues in plain language.
3. Tell me which ones matter now and which can wait.
4. Do not fix cosmetic or low-risk findings first.
5. Start with issues that affect state correctness, performance, accessibility, security, or future maintainability.
6. Give me a prioritized fix plan.
7. Then fix only the first batch.
8. Re-run React Doctor and compare the result.
```

## Prompt for slow React UI

```txt
This React UI works but feels slow.

Use React Doctor as the first quality check.

Focus on:
1. unnecessary re-renders
2. state and effect misuse
3. expensive rendering paths
4. component structure
5. unstable keys or props
6. unnecessary client-side work
7. accessibility issues caused by interactive UI

After the audit, explain what likely affects user experience and what is only code hygiene.
```

## Prompt before shipping

```txt
We are close to shipping this React feature.

Use React Doctor as a pre-release quality gate.

Steps:
1. Run React Doctor.
2. Identify blocking issues.
3. Identify non-blocking cleanup.
4. Fix only the issues that should block release.
5. Re-run the scan.
6. Give me a short release-readiness summary.

Do not rewrite the whole feature.
Do not refactor unrelated components.
```

## Prompt for CI setup

```txt
I want to add React Doctor to CI for this repo.

Before installing:
1. Explain what the CI workflow will do.
2. Confirm it will review new PR issues and not just dump the existing backlog.
3. Explain the gate options.
4. Tell me what files will be added or changed.
5. Then run:
   `npx react-doctor@latest ci install`

After installing:
1. Show me the workflow file.
2. Explain how to configure scan scope and comments.
3. Do not enable strict blocking gates until we review the first few PRs.
```

## Suggested rules of use

| Situation                          | What to do                                          |
| ---------------------------------- | --------------------------------------------------- |
| Agent just created a React feature | Run `npx react-doctor@latest`                       |
| Audit shows many issues            | Prioritize user-facing and correctness issues first |
| Same mistakes keep happening       | Run `npx react-doctor@latest install`               |
| Project is ready for PR discipline | Run `npx react-doctor@latest ci install`            |
| CI comments are too noisy          | Use `react-doctor ci config`                        |
| You need privacy around telemetry  | Use `--no-telemetry`                                |
| Old backlog is large               | Use CI mode to focus on newly introduced issues     |

## Smart usage patterns

### Pattern 1: Build then diagnose

```txt
Ask the agent to build the feature.
Run the app.
Run React Doctor.
Fix the highest-impact findings.
Run React Doctor again.
```

### Pattern 2: Slow UI diagnosis

```txt
Run React Doctor.
Group findings by performance and state/effects.
Fix the biggest user-facing issue first.
Avoid broad rewrites.
```

### Pattern 3: Agent training loop

```txt
Run audit.
Install agent skill.
Ask the agent to explain the rules it violated.
Fix issues.
Ask the agent to avoid those patterns in future React changes.
```

### Pattern 4: PR quality gate

```txt
Install CI.
Start with comment-only mode.
Watch the first few PRs.
Tune config.
Only then decide if any gate should block merge.
```

## Quality checklist

Before trusting a React feature from an AI agent, check:

- [ ] App runs locally
- [ ] UI works manually
- [ ] React Doctor audit was run
- [ ] High-impact findings are fixed
- [ ] State and effect issues are reviewed
- [ ] Performance findings are not ignored blindly
- [ ] Accessibility findings are considered
- [ ] Security findings are checked carefully
- [ ] CI is not too strict too early
- [ ] Existing backlog is separated from newly introduced issues
- [ ] Telemetry preference is understood
- [ ] Agent did not rewrite unrelated components just to satisfy the tool

## Pairing with other tools

### React Doctor + reviewdog

Use React Doctor for React-specific analysis and static scanning.
Use reviewdog when you want findings from React Doctor (or other linters) to appear directly as inline comments on the PR rather than searching through CI logs.

## Notes

- **After-Implementation Gate**: React Doctor is strongest when used after implementation and before trust.
- **Not a QA Tool**: It is not a replacement for product QA, visual review, or business logic review.
- **Rules Configuration**: Rules can be customized and disabled in `doctor.config.ts` if some heuristics are too strict.
- **Telemetry Opt-Out**: Telemetry can be skipped using the `--no-telemetry` flag.

## Links

* GitHub: [https://github.com/millionco/react-doctor](https://github.com/millionco/react-doctor)
* Website: [https://react.doctor](https://react.doctor)
* CI docs: [https://react.doctor](https://react.doctor)
