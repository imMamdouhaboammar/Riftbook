# Engineering Foundations for AI-Assisted Builders

AI coding agents can produce code quickly. That does not remove the need to understand the engineering decisions underneath the code.

This path is for builders who can already work with a coding agent but want stronger judgment when directing, reviewing, debugging, and shipping software. It focuses on stable software-engineering concepts rather than model-specific tricks.

For each module, use a real repository. Ask the agent to trace evidence, then explain the behavior yourself before asking it to change anything.

## 1. State

State is information the program must remember at a particular moment. It may live in browser memory, process memory, a database, a cache, a file, or a remote service.

For every important value, identify where it is stored, who can change it, how long it survives, and which copy is authoritative. Bugs appear when duplicated state drifts, local memory is mistaken for shared state, or stale UI state overwrites newer server state.

Practice: choose login, a cart, draft editing, or job status. Trace where the state is created, stored, changed, and lost after refresh or process restart.

## 2. APIs and contracts

An API is a contract between software components. The contract includes inputs, outputs, failure behavior, authentication requirements, timeout expectations, side effects, and compatibility assumptions.

Agents often modify producer and consumer together, which can hide a broken interface. Review the contract independently from either implementation.

Practice: pick one endpoint. Write its observable contract, then compare that description with its handler, tests, and callers. Record undocumented behavior that callers rely on.

## 3. Authentication and authorization

Authentication answers who the caller is. Authorization decides whether that caller may perform a specific action on a specific resource.

A valid session is not sufficient evidence that a user may read or modify a record. Keep authorization close to protected actions and do not treat hidden UI controls as access control.

Practice: choose one user-owned or organization-owned resource. Trace read, update, and delete separately and identify the exact authorization decision for each operation.

## 4. Databases and transactions

Durable data needs consistency rules. Transactions can group compatible database operations so they succeed or fail together, while database constraints can reject invalid states even when application code is wrong.

External services do not automatically participate in a database transaction. A workflow that writes an order, calls a payment provider, and reserves inventory needs an explicit failure model.

Practice: list every durable write in one feature. Mark transaction boundaries and ask what partial state remains if execution stops after each step.

## 5. Concurrency and race conditions

Concurrency means operations can overlap. A race condition exists when correctness depends on their timing.

A classic failure is check-then-act logic: two requests both read the same valid state, both decide an operation is allowed, then both mutate it. Correct protection may require atomic updates, constraints, locks, compare-and-swap behavior, or serialized processing.

Practice: find one find-then-create, read-then-update, reservation, or counter operation. Simulate two overlapping executions line by line.

## 6. Idempotency

An idempotent operation can receive the same logical request again without producing additional unintended effects.

Retries are normal because a caller may not know whether a timed-out operation succeeded. Payments, webhook consumers, job workers, imports, provisioning, and form submissions often need an idempotency strategy.

Practice: choose one side-effecting operation. Explain what happens if the same logical input arrives twice simultaneously, again five seconds later, and again after a process restart.

## 7. Queues and background work

A queue separates submission of work from execution of work. That changes the failure model: jobs can be delayed, retried, duplicated, timed out, or permanently fail.

A useful queue design defines acknowledgement timing, retry limits, duplicate handling, job timeout, ordering requirements, failed-job handling, and visibility of job status.

Practice: trace one background job from producer to queue, worker, side effect, and acknowledgement. Mark every point where execution can fail.

## 8. Caching

A cache stores a cheaper copy of information. The tradeoff is another copy that can become stale.

For each cache, identify its key, authoritative source, expiration rule, invalidation behavior, miss behavior, and acceptable staleness. Be especially careful with user, tenant, permission, and pricing scope.

Practice: locate one cache and write those six properties from code and documentation. Treat anything you cannot prove as uncertainty.

## 9. Process lifecycle

Servers and workers are operating-system processes that start, initialize, accept work, stop accepting work, release resources, and exit.

Local success can hide production assumptions about restarts, multiple replicas, readiness, shutdown, in-flight work, and volatile memory.

Practice: find a server or worker entrypoint. Trace initialization, readiness, signal handling, resource cleanup, and what happens to in-flight work during termination.

## 10. Testing and test boundaries

Tests are executable evidence about behavior. Unit, integration, and end-to-end tests answer different questions.

A useful regression test fails for the reason the defect exists before the fix and passes for the right reason afterward. Excessive mocking can remove the failure mode the test is supposed to prove.

Practice: inspect one recent bug fix. Ask whether the original bug could return while its regression test still passes, and identify the smallest stronger test boundary if so.

## 11. Git and change isolation

Git is most useful when commits represent coherent decisions rather than arbitrary save points. Agent-assisted work can touch many files quickly, which makes diff review and change isolation more important.

A practical sequence is inspect, branch, make one coherent change, test, review the diff, then commit.

Practice: inspect one large recent commit. Group changed files by intention and describe how independent intentions could have been separated.

## 12. Continuous integration

CI runs agreed repository checks in a repeatable environment. It provides stronger shared evidence than a claim that a change worked locally.

For each workflow, know its triggers, runtime, commands, blocking status, and local equivalent. A green workflow is meaningful only if it actually covers the changed behavior.

Practice: map one repository workflow into a table of check, trigger, command, blocking status, and local equivalent. Run the local command when possible.

## 13. Architecture boundaries

A boundary separates responsibilities so one area can change without forcing unrelated areas to change with it. Boundaries may be modules, packages, services, components, APIs, or queue contracts.

For each boundary, ask what it owns, what it exposes, what it may depend on, who may depend on it, and which invariants must survive internal changes.

Practice: choose one feature and list every module it touches. Name the contract at each connection. If the contract cannot be described without explaining internals, inspect whether the boundary is weak.

## Capstone: explain one feature end to end

Choose a real feature with a user action, persistent data, and a server-side operation. Produce a concise engineering map containing:

```txt
Feature:
User-visible contract:
State and source of truth:
API boundary:
Authentication:
Authorization:
Database writes and transaction boundary:
Concurrency risks:
Idempotency strategy:
Queued work:
Caches:
Process assumptions:
Tests proving behavior:
CI checks:
Architecture boundaries:
Known uncertainty:
```

Then ask a coding agent to review the map against the repository. Require file and symbol evidence for every claim, mark unsupported claims as unverified, and ask for one realistic failure mode you missed. Do not let the agent edit code during this exercise.

The capstone is complete when you can explain the feature without relying on the agent's wording.

## What to learn next

Use the [Path Finder](../playbook/paths/path-finder.md) to choose a workflow problem where these concepts can be applied. For failure-oriented practice, continue with the [Debugging and Recovery Lab](../playbook/labs/debugging-recovery-lab.md). For review work, use the [PR Review Brief](../agent-briefs/pr-review-brief.md).

*Back to [Learning Paths](./README.md).*
