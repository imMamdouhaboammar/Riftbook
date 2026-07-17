# Integration Selection Lab

Use this lab to turn a long list of AI coding tools into the smallest useful project stack.

| Level | Duration | Output |
|---|---:|---|
| Intermediate | 30 to 45 minutes | A scored shortlist, one approved capability owner per group, and an `ACTIVE_INTEGRATIONS.md` record |

## The situation

You have access to dozens of coding-agent skills, CLIs, MCP servers, review tools, design systems, memory layers, and discovery libraries. Installing all of them creates duplicated instructions, conflicting hooks, longer context, more updates, and unclear ownership.

The task is to inspect one real repository and select only the integrations that solve evidenced problems.

## What you will use

- [`integrations/registry.json`](../../integrations/registry.json)
- [Selection Policy](../../integrations/selection-policy.md)
- [Compatibility Matrix](../../integrations/compatibility-matrix.md)
- [Integration Selector](../../scripts/integration-selector.mjs)
- [Agent Capability Bootstrap Prompt](../../integrations/prompts/agent-capability-bootstrap.md)
- [`ACTIVE_INTEGRATIONS.md` template](../../integrations/templates/ACTIVE_INTEGRATIONS.template.md)

## Step 1: Create a clean branch

Run the lab away from active production work.

```bash
git switch -c lab/integration-selection
```

Do not install anything yet.

## Step 2: Run the read-only selector

From the Riftbook repository, point the selector at the project you want to inspect:

```bash
node scripts/integration-selector.mjs --project /absolute/path/to/project
```

For machine-readable output:

```bash
node scripts/integration-selector.mjs --project /absolute/path/to/project --format json
```

Save the report when useful:

```bash
node scripts/integration-selector.mjs --project /absolute/path/to/project > integration-selection-report.md
```

The selector only reads project signals and scores registry entries. It does not install, clone, initialize, or configure any integration.

## Step 3: Challenge the detected signals

Review every signal before accepting it.

| Signal | Evidence found | Correct? | Notes |
|---|---|---|---|
| Framework |  |  |  |
| Repository size |  |  |  |
| CI |  |  |  |
| Tests |  |  |  |
| Agent configuration |  |  |  |
| Runtime safety |  |  |  |
| Planning files |  |  |  |
| Context pressure |  |  |  |

Remove recommendations based on weak or irrelevant signals.

## Step 4: Name the real capability gaps

Write problems, not tool names.

Examples:

- The agent repeatedly re-reads the same large module tree.
- React changes reach review without a framework-specific audit.
- Long tasks lose decisions after context compression.
- Five design skills are active and disagree with one another.
- CI output is too noisy for the agent to identify the first failure.

| Gap | Evidence | Cost today | Needed for this task? |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## Step 5: Score the shortlist manually

Use the selection rubric for every plausible candidate.

| Candidate | Direct task fit | Recurring failure | Reversible | Duplicate penalty | Risk penalty | Final decision |
|---|---:|---:|---:|---:|---:|---|
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

A high score is not enough when the tool duplicates an existing owner or requires unapproved infrastructure.

## Step 6: Resolve overlaps

Choose one primary owner for each capability you actually need.

| Capability | Existing owner | Candidate owner | Keep | Reject and why |
|---|---|---|---|---|
| Design judgment |  |  |  |  |
| Code map |  |  |  |  |
| Semantic editing |  |  |  |  |
| Review graph |  |  |  |  |
| Planning |  |  |  |  |
| Governance |  |  |  |  |
| Context reduction |  |  |  |  |

Do not select two primary tools for the same group unless their roles are distinct and documented.

## Step 7: Use the bootstrap prompt

Copy the [Agent Capability Bootstrap Prompt](../../integrations/prompts/agent-capability-bootstrap.md) into the lead coding agent.

Require it to return the Approval Report before any installation. Compare its shortlist with yours. Reject any recommendation that cannot point to project evidence.

## Step 8: Verify upstream instructions

For every approved candidate:

1. Read its current upstream README.
2. Verify the official package or command.
3. Run local help or version output where available.
4. Identify files, hooks, network access, telemetry, credentials, and services affected.
5. Write rollback and uninstall steps.
6. Stop for approval when the action is global, credentialed, infrastructure-heavy, paid, autonomous, or destructive.

Copied commands in Riftbook are orientation notes, not permanent guarantees.

## Step 9: Install one integration at a time

Install the highest-value approved integration first. Validate it on a real task before adding another.

Examples of proof:

- A code map answers a named architecture question.
- A React audit catches a known issue and passes after the fix.
- A planning skill preserves state after a fresh agent session.
- A terminal-context tool keeps the actual failure and exit code visible.
- A design skill critiques a named component against the project design rules.

Do not count successful installation as successful integration.

## Step 10: Record the active stack

Copy the template into the target project:

```bash
cp integrations/templates/ACTIVE_INTEGRATIONS.template.md /absolute/path/to/project/ACTIVE_INTEGRATIONS.md
```

Record:

- capability owner
- why it was selected
- exact scope and version
- files and hooks changed
- commands executed
- validation evidence
- update and uninstall commands
- review date

## Step 11: Run project checks

Run only checks that exist or are appropriate for the project:

```text
lint
format check
typecheck
tests
build
accessibility checks
manual runtime QA
```

A new integration must not make the existing project checks less trustworthy.

## Step 12: Remove weak choices

Remove an integration when it:

- was not used on a real task
- duplicates another active owner
- adds recurring context noise
- creates fragile hooks
- cannot be updated or removed safely
- requires more maintenance than the problem costs

Document the removal decision in `ACTIVE_INTEGRATIONS.md`.

## Completion gate

- [ ] Selector ran without modifying the target project
- [ ] Detected signals were manually checked
- [ ] Capability gaps were written as problems
- [ ] Candidates were scored and rejected with reasons
- [ ] One primary owner was chosen per overlapping group
- [ ] Current upstream instructions were verified
- [ ] Installations stayed within the approved execution mode
- [ ] Every installed integration proved value on a real task
- [ ] Project checks passed
- [ ] `ACTIVE_INTEGRATIONS.md` contains rollback information
- [ ] Weak or duplicate integrations were removed

## Final reflection

Answer these questions:

1. Which recommendation looked useful but failed the evidence test?
2. Which existing tool already covered a proposed capability?
3. Which integration produced measurable value fastest?
4. What maintenance cost did you discover only after setup?
5. What is the smallest stack you would keep for the next 30 days?

The output of this lab is not a bigger toolbox. It is a smaller, clearer operating stack.
