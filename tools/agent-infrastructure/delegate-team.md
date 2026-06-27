# Delegate Team (`dt`)

![Agent Infrastructure](../../playbook/assets/badges/default-stack.svg) ![Advanced Tool](https://img.shields.io/badge/Tier-Advanced%20Tool-F97316?style=flat-square)

---

## What It Is

Delegate Team (`dt`) is a local CLI and delegation runtime designed to let a lead agent (like Claude Code) or a developer delegate focused coding tasks to specialized support backends (such as Codex, MiniMax, Gemini, OpenCode, and VertexCoder) or coordinate team-style workflows while keeping review and commit authority centralized.

It acts as a policy gateway that controls workspaces, runs failover mechanics, and simplifies token consumption to prevent multi-agent chaos.

---

## Why It Matters

When working with multiple agents, builders often run into context drift, token waste, and rate limits. `dt` solves these problems by providing:
- **A Single Lead Controller Model:** The lead agent stays in control of the architecture, while support agents work on narrow tasks.
- **Failover Ring:** Automatically retries tasks on alternative backends if the primary backend is unavailable or rate-limited.
- **Lean Token Protocol:** Minimizes prompt overhead by sending only the files relevant to the specific change.
- **Strict Boundaries:** Keeps delegated agents sandboxed to the current workspace root and prevents unauthorized installation of packages.

---

## When to Use

- When your lead agent (Claude Code) is stuck or loops on a specific implementation block.
- When you need to generate boilerplate, write isolated utility modules, or perform straightforward code transformations.
- When you want to experiment with alternative algorithmic solutions from different LLM providers.
- When you need a team-style workflow split (e.g. separate roles for Architect, Engineer, and Reviewer) for a larger feature branch.

---

## When Not to Use

- For vague, exploratory tasks that lack clear acceptance criteria.
- When you cannot review the code diff due to lack of time or domain knowledge.
- In environments containing production secrets, credentials, or sensitive user data that could leak into support backend contexts.
- When the codebase lacks automated test suites or quality gates to verify code changes.

---

## How to Use

### Safe Startup
Before using `dt` in your workspace, configure and verify its environment:

1. **Verify Installation:**
   ```bash
   dt --help
   ```

2. **Check Backend Status:**
   ```bash
   dt check --strict
   ```

3. **Autopilot Setup:**
   Run setup to verify credentials and set up local virtual environments. *Note: Always review local configuration options before executing:*
   ```bash
   dt setup
   ```

4. **Link Skills:**
   Inject `dt`'s execution guidelines directly into local agent skill paths:
   ```bash
   dt link-skill
   ```

---

## Commands

### Smart Multi-Backend Dispatch
Let `dt` select the optimal backend and manage automatic failovers:
```bash
dt run "implement the signup schema validation using zod"
```

### Force a Backend
Specify a target model directly:
```bash
dt run "write test cases for the JWT module" --backend codex
```

### Large Multi-Module Task (Team Mode)
Run a MetaGPT-inspired role delegation:
```bash
dt run "plan and write the stripe webhook integrations" --team
```

### Workspace-Only Team Mode (Safer Default)
Sandbox the team workflow to prevent dependencies installation:
```bash
dt metagpt "design the dashboard grid layout" --workspace-only --no-install
```

---

## Good Fit For / Not a Good Fit For

### Good Fit For:
- Bounded, single-module implementations.
- Independent helper functions, formatters, and API adapters.
- Generating unit tests for existing files.
- Safe multi-provider failover routing.

### Not a Good Fit For:
- Full project refactoring across all sub-modules.
- Vague tasks containing unspecified business requirements.
- Systems that require fully sandboxed VMs (since `dt` relies on local workspace policies).
- Replacing the human operator or the lead agent.

---

## Notes & Limitations

- **Not a replacement for Claude Code:** Claude Code remains the lead architect and reviewer. `dt` is the delegation gateway.
- **MetaGPT-style team mode:** Team mode is an inspired local roles manager, not a full upstream MetaGPT runtime integration.
- **Untrusted Output:** Treat every result, modified file, and team output as untrusted until verified via manual git diff.
- **No Automatic Commits:** `dt` writes to disk but does not commit changes. Review and commit authority belongs to the developer.
- **Local Policy Gates:** Security controls are local policy barriers (like blocking commands or package installs) rather than sandboxed virtualization.
- **Credentials Required:** Some support backends require active cloud CLI logins (e.g., Google Cloud SDK for VertexCoder) or API keys.

---

## Special Thanks

Special thanks to [@imMamdouhaboammar](https://github.com/imMamdouhaboammar) for creating and maintaining the amazing [delegate-team](https://github.com/imMamdouhaboammar/delegate-team) repository! Your contribution significantly enhances the vibe coding ecosystem. 🌟

---

## Official Link

- **Repository:** [https://github.com/imMamdouhaboammar/delegate-team](https://github.com/imMamdouhaboammar/delegate-team)
