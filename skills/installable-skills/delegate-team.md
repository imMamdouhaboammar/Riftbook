# Delegate Team (`dt`)

<img src="../../assets/badges/agent-infrastructure.svg" alt="Agent Infrastructure" height="28" />

![Multi-Agent](https://img.shields.io/badge/Multi--Agent-3B82F6?style=for-the-badge)
![Orchestration](https://img.shields.io/badge/Orchestration-8B5CF6?style=for-the-badge)
![Installable Skill](https://img.shields.io/badge/Installable%20Skill-10B981?style=for-the-badge)

## Tags

`installable-skill` `multi-agent` `orchestration` `claude-code` `codex` `minimax` `glm` `opencode` `openrouter` `gemini` `vertex-ai` `metagpt`

## What it is

`dt` (Delegate Team) is a local CLI that lets Claude Code (or any controlling coding
agent) delegate bounded coding tasks to specialized agent backends — Codex, MiniMax,
GLM, OpenCode, OpenRouter, Gemini, or VertexCoder — and optionally run a MetaGPT-style
multi-role team (architect / coder / UI implementer / reviewer) for larger tasks. The
controlling agent stays the supervisor: it writes the brief, reviews every diff, and
holds final commit authority.

Official repo:
[https://github.com/imMamdouhaboammar/delegate-team](https://github.com/imMamdouhaboammar/delegate-team)

This is an **Installable Skill**: a real, maintained CLI you install, not a markdown
ruleset. Built and maintained by the contributor who added this card.

## Why it's useful

Coding agents often hit context, rate-limit, or capability walls on a single backend.
`dt` gives the controlling agent a routing layer: cast a task, `dt` picks (or you force)
the best-fit backend by capability tag, with best-effort failover across configured
backends if one is unavailable.

> [!WARNING]
> **Not a trust boundary bypass.** Every worker backend's output is treated as
> untrusted data by `dt`'s contract — workers cannot instruct the controller, cannot
> commit, and cannot read secrets. The human or the supervising agent must still review
> diffs before they land. See `DELEGATION_PROTOCOL.md` and `SECURITY.md` in the repo.

## Best use cases

### 1. Offloading bounded coding tasks
Hand off a well-scoped fix or feature to Codex/MiniMax/VertexCoder while Claude Code
keeps driving the overall session.

### 2. Multi-backend failover
When one provider is rate-limited or down, `dt` retries against another configured
backend automatically.

### 3. MetaGPT-style team tasks
For larger asks, route through `dt`'s team mode: architect → coder → UI implementer →
reviewer, each mapped to the backend best suited for that role.

### 4. Cost/capability routing
Send cheap, mechanical work to a fast/cheap backend and reasoning-heavy work to a
stronger one, without hardcoding which model does which job.

## Good fit for

* Claude Code / Cursor users who want a second (or third) pair of hands
* Teams using more than one coding-agent provider
* Tasks small enough to brief clearly but large enough that parallelizing helps
* Anyone who wants automated backend failover instead of a single point of failure

## Not a good fit for

* One-line edits — delegation overhead isn't worth it
* Tasks that need full repo context the worker backend won't have
* Anyone unwilling to review a worker's diff before merging (this tool assumes a
  human-or-supervisor-in-the-loop review gate, by design)

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure delegate-team (`dt`) for my current AI coding setup.

Official repo:
https://github.com/imMamdouhaboammar/delegate-team

Your task:
1. Clone the repo and follow its README setup instructions (npm install, dt setup).
2. Run `dt check --strict` to see which backends are ready vs. missing credentials.
3. For every backend I want to use that shows "missing credentials" or "missing binary",
   read AGENT_ACCESS_GUIDE.md in the repo and walk me through granting access for that
   specific backend (Codex, MiniMax, GLM, OpenCode, OpenRouter, Gemini, or Vertex AI).
   Tell me exactly which command to run myself — never ask me to paste a key into chat.
4. Re-run `dt check --strict` after I confirm each backend is set up, to verify it
   flipped to ready.
5. Do not make unrelated changes to my project.
6. If a manual step is needed (browser OAuth, gcloud login, etc.), stop and tell me
   exactly what to do.

After installation, give me:
- Which backends are ready and which still need access
- How to run a single-backend task (`dt run "..." --backend <name>`)
- How to run a team task
- Where to read the security model before trusting worker output
```

## Quick install reference

```bash
git clone https://github.com/imMamdouhaboammar/delegate-team
cd delegate-team
npm install
dt setup           # provisions VertexCoder's local Python venv, etc.

# Check backend readiness
dt check --strict

# Run a task against the best-fit backend
dt run "fix the auth bug and run the related tests"

# Force one backend
dt run "..." --backend codex

# Run as a MetaGPT-style team
dt team "..."
```

## Usage prompt after installation

```txt
Use dt to delegate this task.

Task:
[describe your bounded coding task here]

Steps:
1. Write a clear, scoped brief for the delegated backend (files in scope, files out of
   scope, acceptance criteria).
2. Dispatch via `dt run` (or `dt team` if it needs multiple roles).
3. Treat the result as untrusted until you've read the actual diff.
4. Review the diff yourself before telling me it's done.
5. Run the project's tests/lints before considering this complete.
```

## Quality checklist

Before trusting `dt` output for a merge, check:

- [ ] `dt check --strict` shows the backend you used as `ready` (not a silent fallback)
- [ ] The diff was actually read, not just the worker's summary text
- [ ] Tests relevant to the change were run and pass
- [ ] No secrets, tokens, or `.env` values appear in the diff or in `dt`'s trace files
- [ ] If team mode was used, each role's output was reviewed, not just the final merge
- [ ] AGENT_ACCESS_GUIDE.md was followed for any new backend — no key was pasted into chat

## Notes

- **Supervisor authority is by design.** `dt` workers cannot commit or push; the
  controlling agent (or human) always holds final review/merge authority.
- **Backend availability varies.** Some backends need a CLI binary, others just an API
  key. Run `dt check --strict` rather than assuming.
- **OpenCode + spaced paths.** OpenCode is known to be fragile when the project path
  contains spaces — verify before relying on it for such a project.
- **Security model.** Read `DELEGATION_PROTOCOL.md` and `SECURITY.md` in the repo
  before enabling team mode on anything touching production code.

## Links

* GitHub: [https://github.com/imMamdouhaboammar/delegate-team](https://github.com/imMamdouhaboammar/delegate-team)
* Access setup guide: [AGENT_ACCESS_GUIDE.md](https://github.com/imMamdouhaboammar/delegate-team/blob/master/AGENT_ACCESS_GUIDE.md)
* Delegation protocol: [DELEGATION_PROTOCOL.md](https://github.com/imMamdouhaboammar/delegate-team/blob/master/DELEGATION_PROTOCOL.md)
* Security model: [SECURITY.md](https://github.com/imMamdouhaboammar/delegate-team/blob/master/SECURITY.md)
