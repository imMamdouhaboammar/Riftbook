# Lesson 5: Maintain and Remove Integrations

| Level | Duration | Path | Prerequisites |
|---|---|---|---|
| Intermediate | 10 minutes | Integrations | Active integrations record |

## Tool debt is real

Integrations age even when the product code does not.

Common failure modes:

- Installer changes
- Package renamed
- Agent config path changes
- Hooks duplicate another tool
- Generated files grow
- A primary agent is replaced
- A skill becomes part of the model or framework
- A once-useful tool is no longer called
- An index or cache stops refreshing

Maintenance is part of the capability stack.

## Review cadence

Review active integrations when:

- The framework or package manager changes
- The lead coding agent changes
- A new major version lands
- The integration fails
- CI becomes noisy
- The tool is not used for two meaningful work cycles
- Two tools return the same output
- Security or telemetry policy changes

## Measure value

For each integration, record one metric or evidence type.

Examples:

- Code graph: discovery tool calls reduced on a real task
- Planning: session resumed without reconstructing the plan
- React Doctor: defects found before merge
- Design skill: named UI issues fixed
- reviewdog: useful PR annotations versus noise
- RTK: terminal context reduced without hiding errors
- Agent Kernel: decisions or approvals recovered across agents
- Guard Skills: weak code, tests, or docs caught in review

Do not keep a tool because installation was difficult.

## Update safely

Before updating:

1. Read the upstream changelog
2. Inspect migration notes
3. Record current version
4. Snapshot or commit config
5. Run dry-run where possible
6. Update one integration at a time
7. Repeat capability validation
8. Repeat project checks

## Remove completely

Removal includes more than uninstalling a package.

Check:

- Project skill folders
- User skill folders
- MCP config
- Hooks
- CI workflows
- Generated caches
- Ignore rules
- Background processes
- Planning or memory files
- Documentation and routing tables

Record the removal in `ACTIVE_INTEGRATIONS.md`.

## Removal decision

Remove when any is true:

- No current owner
- No real use
- No current validation
- Duplicate capability
- Context or CI noise
- Broken upstream
- Unsupported stack
- Security or privacy mismatch
- Difficult rollback
- Maintenance cost exceeds value

## Copy this

```text
Audit ACTIVE_INTEGRATIONS.md.

For every integration:
1. Confirm current version and upstream source
2. Show where it is configured
3. Show when it was last used
4. Show validation evidence
5. Identify capability overlap
6. Estimate maintenance and context cost
7. Recommend keep, update, replace, or remove
8. For removal, list every file, hook, config, cache, process, and document to clean
9. Re-run project checks after changes
10. Update the removal log

Do not keep an integration without an owner and evidence.
```

## Ship check

- [ ] Versions reviewed
- [ ] Owners reviewed
- [ ] Usage evidence reviewed
- [ ] Overlap reviewed
- [ ] Weak integrations removed
- [ ] Config and caches cleaned
- [ ] Project checks pass
- [ ] Removal log updated
