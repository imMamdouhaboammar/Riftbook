# Lesson 3: Install and Verify Safely

| Level | Duration | Path | Prerequisites |
|---|---|---|---|
| Intermediate | 15 minutes | Integrations | Approved candidate stack |

## Why copied commands are dangerous

Installers change. Package names move. Agent config paths evolve. A command that worked last month can now:

- Install a different package
- Write to user scope
- Add hooks
- Enable telemetry
- Create background services
- Replace existing instructions
- Put generated files inside Git

Riftbook cards are decision aids. The upstream project remains the source for the current installer.

## The verification sequence

For each selected integration:

### 1. Confirm identity

- Official repository owner
- Official package or binary name
- License
- Supported platform and coding agent
- Current release or documented install path

### 2. Confirm local fit

- Existing package manager
- Node, Python, Rust, Docker, or runtime requirements
- Project or user scope
- Existing config collision
- Monorepo workspace location

### 3. Inspect the command

Use the appropriate command before installation:

- `--help`
- `help`
- `--version`
- `--list`
- `--dry-run`
- Package-manager information commands

Do not run a shell pipe from the internet without reviewing the upstream source and owner.

### 4. Explain side effects

The agent must list:

- Files created or changed
- Hooks added
- MCP configuration changed
- Background processes
- Network access
- Telemetry
- Credentials
- Generated caches
- Git ignore changes
- Uninstall method

### 5. Choose execution mode

`project-local-auto` can execute only reversible, credential-free, project-local setup.

Stop for approval on:

- Global or user-wide install
- Infrastructure
- Secrets
- Paid services
- Persistent daemons
- Autonomous loops
- Destructive migration
- Unclear rollback

### 6. Validate the integration

A version command proves only that a binary exists.

Prove the capability:

- Code graph answers one real question
- Skill reviews one real artifact
- React audit identifies a real issue
- Planning files survive a reset
- CI bridge annotates a test PR
- Error boundary catches a controlled failure

### 7. Re-run project checks

Run what applies:

- lint
- typecheck
- tests
- build
- accessibility
- runtime QA

## Rollback-first record

Before execution, create an entry in `ACTIVE_INTEGRATIONS.md` with:

- Exact command
- Expected files
- Expected hooks
- Version
- Validation
- Uninstall
- Rollback

Update it after execution with actual results.

## Copy this

```text
For each approved integration:

1. Read the current upstream install and uninstall docs
2. Confirm official package identity and supported agent
3. Inspect local help, version, list, or dry-run output
4. List every expected file, hook, service, network call, credential, and telemetry change
5. Prefer project-local scope
6. Write rollback steps before execution
7. Execute only when allowed by project-local-auto policy
8. Validate the real capability
9. Run project checks
10. Record evidence in ACTIVE_INTEGRATIONS.md

Stop for approval on any global, credentialed, infrastructure, autonomous, destructive, or unclear action.
```

## Ship check

- [ ] Current upstream docs checked
- [ ] Local command syntax checked
- [ ] Side effects listed
- [ ] Scope chosen deliberately
- [ ] Rollback written
- [ ] Capability validated
- [ ] Project checks passed
- [ ] Active integration record updated
