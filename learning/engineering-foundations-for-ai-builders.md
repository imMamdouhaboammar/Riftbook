# Engineering Foundations for AI-Assisted Builders

AI coding agents can write code quickly, but speed becomes dangerous when the person directing the work cannot reason about what the code is doing.

This path teaches the engineering concepts that repeatedly appear underneath real application bugs, architecture decisions, reviews, and production failures. It is designed for people who can already ask an agent to build features but want to understand the software well enough to direct, review, debug, and ship the work responsibly.

The goal is not memorizing definitions. Each concept ends with a practical exercise you can run against a real repository.

## Who this path is for

Use this path if you can build with an AI coding agent but still find yourself asking questions such as:

- Why did refreshing the page lose the user's work?
- Why did the same request create two records?
- Why does this feature work locally but fail in CI?
- Why is an API request slow even though the function itself is fast?
- Why did changing one module break three unrelated screens?
- Why can two requests both pass validation and still corrupt data?
- Why does authentication work while authorization is still wrong?

If those questions feel familiar, study the modules in order.

## How to use this path

For every module:

1. Read the mental model.
2. Find one example in a real codebase.
3. Ask your coding agent to trace the relevant execution path without editing it.
4. Explain the behavior back in your own words.
5. Complete the practice task before moving on.

Do not ask the agent to explain the concept only in abstract terms. Make it point to files, functions, data, and runtime behavior in the repository you are studying.

---

## Module 1: State

### What is this?

State is information the program must remember at a particular moment.

Examples include:

- the currently signed-in user
- items in a cart
- whether a modal is open
- the status of a background job
- the current value stored in a database row
- a draft that has not been submitted yet

State can live in several places: process memory, browser memory, a database, a cache, a file, or a remote service.

### Why should I care?

Many agent-generated bugs are state bugs. The UI shows one value while the server stores another. A variable exists in one request but disappears in the next. Two parts of the application each believe they own the same truth.

When you understand where state lives, who may change it, and how long it survives, those bugs become much easier to diagnose.

### When should I use this concept?

Think explicitly about state whenever a feature must remember something between actions, requests, page loads, processes, or users.

### How does it work?

For every important value, identify four things:

| Question | Example |
|---|---|
| Where is it stored? | PostgreSQL `orders.status` |
| Who can change it? | checkout service |
| How long does it live? | until order deletion |
| What is the source of truth? | database, not the browser |

A useful rule is to avoid having two independent sources of truth for the same fact.

### What can go wrong?

- state is stored only in memory and disappears after restart
- stale UI state overwrites newer server state
- duplicated state drifts out of sync
- one user's state leaks into another user's request
- a process assumes local memory is shared across multiple server instances

### Practice

Pick one feature with visible state, such as login, cart, draft editing, or task status. Ask the agent:

```txt
Trace the complete lifecycle of the state used by this feature.

Show:
1. where the state is created
2. every place it is stored
3. every place it can change
4. which copy is authoritative
5. what happens after refresh, process restart, and concurrent requests
6. any duplicated or stale copies

Do not edit code.
```

Draw the lifecycle in five to ten lines of plain text.

### Learn next

APIs, because state usually crosses process boundaries through an interface.

---

## Module 2: APIs and contracts

### What is this?

An API is a contract between two pieces of software. It defines what may be requested, what data must be supplied, what comes back, and how failures are represented.

The two sides could be a browser and server, two backend services, your application and a payment provider, or even two modules inside one program.

### Why should I care?

Agents often make both sides of an interface change together. That can hide a broken contract because the producer and consumer are accidentally modified to agree with the same mistake.

Thinking in contracts forces you to ask what other callers rely on.

### When should I use this concept?

Whenever one component calls another component whose implementation should be allowed to change independently.

### How does it work?

A useful API contract describes:

- input shape
- output shape
- authentication requirements
- allowed operations
- failure cases
- retry behavior
- timeout expectations
- compatibility expectations

For an HTTP endpoint, status codes and response bodies are part of the contract. For a function, parameter types, return values, exceptions, and side effects are part of the contract.

### What can go wrong?

- callers depend on undocumented response fields
- errors return the same status as success
- a retry repeats a non-safe operation
- a timeout is treated as proof the operation failed
- producer and consumer deploy at different times with incompatible schemas

### Practice

Choose one API endpoint and write a contract without reading its implementation first. Then compare your contract to the real handler, tests, and callers.

Record any behavior that callers depend on but the contract did not make obvious.

### Learn next

Authentication and authorization, because many APIs must decide both who is calling and what that caller may do.

---

## Module 3: Authentication and authorization

### What is this?

Authentication answers: **Who are you?**

Authorization answers: **Are you allowed to do this?**

They are related but separate decisions.

### Why should I care?

A user can be correctly logged in and still be allowed to read or modify data they do not own. That is an authorization failure, not an authentication failure.

AI-generated code frequently checks only that a session exists and forgets object-level permissions.

### When should I use this concept?

Any time behavior or data differs by user, role, tenant, organization, subscription, ownership, or permission.

### How does it work?

A typical request flow is:

1. validate the caller's identity
2. resolve the resource being requested
3. evaluate whether that identity may perform the requested action on that resource
4. perform the action
5. record security-relevant events when appropriate

Keep authorization close to the protected action. Do not rely only on hiding buttons in the UI.

### What can go wrong?

- checking login without checking ownership
- trusting a client-supplied user or tenant ID
- inconsistent permission rules across endpoints
- admin checks scattered throughout unrelated code
- sensitive actions allowed through a second unprotected route

### Practice

Pick one resource that belongs to a user or organization. Trace read, update, and delete operations separately. For each operation, identify exactly where authorization occurs.

If the only protection is in frontend code, treat that as a finding.

### Learn next

Databases and transactions, because authorization normally protects persistent data.

---

## Module 4: Databases and transactions

### What is this?

A database stores durable application data. A transaction groups related database operations so they succeed or fail as one unit when the database supports that guarantee.

### Why should I care?

Many production bugs are not query syntax problems. They are data-consistency problems: half-finished operations, duplicated writes, missing constraints, race conditions, or code that assumes data relationships the database does not enforce.

### When should I use this concept?

Whenever a feature changes durable data, especially when multiple rows or tables must remain consistent.

### How does it work?

Suppose checkout must:

1. create an order
2. reserve inventory
3. record payment status

If step two fails after step one succeeds, you may now have an order that cannot be fulfilled. A transaction can make a group of compatible database operations atomic, but external services such as payment providers require additional coordination patterns.

Database constraints are also executable rules. Unique constraints, foreign keys, and check constraints can stop invalid states even when application code has a bug.

### What can go wrong?

- relying only on application validation for uniqueness
- reading a value and writing an update without considering another concurrent writer
- long transactions holding locks
- deleting parent data while dependent data remains
- migrations that are incompatible with older application instances during deployment

### Practice

Find one write-heavy feature. List every durable write in execution order. Mark which writes are protected by the same transaction and which cross an external service boundary.

Then answer: what visible partial state remains if execution stops after each step?

### Learn next

Concurrency, because multiple requests may touch the same data at the same time.

---

## Module 5: Concurrency and race conditions

### What is this?

Concurrency means multiple operations can make progress during overlapping periods of time.

A race condition occurs when the result depends on timing between those operations.

### Why should I care?

A feature can pass every normal manual test and still fail when two requests arrive almost simultaneously.

### When should I use this concept?

Think about concurrency when code:

- increments counters
- reserves scarce resources
- changes account balances
- consumes jobs
- checks whether a record exists before creating it
- processes webhooks
- updates shared files or state

### How does it work?

Consider this sequence:

```txt
Request A reads stock = 1
Request B reads stock = 1
Request A decides purchase is allowed
Request B decides purchase is allowed
Request A writes stock = 0
Request B writes stock = 0
```

Both requests individually look correct. Together they sold two items while recording zero remaining.

Correct solutions depend on the data store and operation: atomic updates, locks, uniqueness constraints, compare-and-swap behavior, serialized processing, or other coordination techniques.

### What can go wrong?

- check-then-act logic with no atomic protection
- assuming asynchronous code is automatically safe
- adding a local in-process lock while running multiple application instances
- retrying an operation and accidentally duplicating its effect

### Practice

Find one `find-then-create`, `read-then-update`, or counter operation. Ask the agent to simulate two overlapping executions line by line.

Do not accept “unlikely to happen” as a correctness argument.

### Learn next

Idempotency, because retries and concurrent delivery frequently produce duplicate requests.

---

## Module 6: Idempotency

### What is this?

An operation is idempotent when repeating the same logical request does not create additional unintended effects after the first successful application.

### Why should I care?

Networks fail in ambiguous ways. A client may send a request, the server may complete it, and the response may never reach the client. Retrying is normal. Without idempotency, retries can create duplicate orders, charges, emails, records, or jobs.

### When should I use this concept?

Use idempotency thinking for:

- payments
- webhook consumers
- job workers
- form submissions
- import pipelines
- provisioning actions
- any command likely to be retried

### How does it work?

A common pattern gives each logical operation a stable identifier. Before applying the side effect, the system checks whether that operation has already been processed and returns the previous result or avoids reapplying the effect.

The storage and atomicity of that check matter. A separate “check” followed by “insert” can still race unless the persistence layer protects the uniqueness of the operation identifier.

### What can go wrong?

- generating a new idempotency key on every retry
- storing processed keys only in volatile memory
- expiring keys before delayed retries arrive
- marking a request processed before its real side effect succeeds
- protecting the application check but not enforcing uniqueness in storage

### Practice

Pick one endpoint or worker that creates a side effect. Describe what happens if the same input arrives twice at the same millisecond, twice five seconds apart, and again after a process restart.

### Learn next

Queues, because background work and delivery retries are common places where idempotency matters.

---

## Module 7: Queues and background work

### What is this?

A queue lets one part of a program submit work for another process to execute later.

Typical queued work includes email delivery, image processing, imports, report generation, notifications, and webhook handling.

### Why should I care?

Moving work to a queue changes the failure model. The user request can finish before the work finishes. Jobs may be delayed, retried, delivered more than once, or fail permanently.

### When should I use this concept?

Queues are useful when work is slow, bursty, retryable, or does not need to complete before responding to the user.

They are not automatically better for short work that must finish synchronously.

### How does it work?

A basic lifecycle is:

```txt
producer -> queue -> worker -> side effect -> acknowledgement
```

A production design also needs answers for:

- retry policy
- duplicate delivery
- job timeout
- poison or permanently failing jobs
- visibility of job status
- ordering requirements
- shutdown behavior

### What can go wrong?

- acknowledging before the side effect is durable
- retrying forever
- assuming exactly-once delivery without proving it
- processing the same job concurrently
- hiding background failure from users and operators

### Practice

Find one background task. Trace the job from creation to final acknowledgement. Identify where failure can occur before and after each durable step.

### Learn next

Caching, because caches are another form of state with special consistency rules.

---

## Module 8: Caching

### What is this?

A cache stores a copy of data that is cheaper or faster to retrieve than recomputing or refetching the original.

### Why should I care?

Caching can reduce latency and load, but it creates another copy of information that can become stale.

### When should I use this concept?

Cache when repeated work is meaningfully expensive and some controlled amount of staleness is acceptable.

Do not add a cache merely because a request “might be faster.” Measure the bottleneck first.

### How does it work?

Every cache needs an invalidation or expiration rule. Ask:

- what is the cache key?
- what is the authoritative source?
- when does the cached value expire?
- what happens after the authoritative value changes?
- what happens during a cache miss?
- can many misses trigger the same expensive computation simultaneously?

### What can go wrong?

- serving stale authorization or pricing data
- cache keys missing tenant or user scope
- unbounded growth
- a cache stampede after a popular key expires
- tests passing against cached data while fresh computation is broken

### Practice

Locate one cache in a real repository. Write its key format, source of truth, expiration rule, invalidation path, and worst acceptable stale value.

If you cannot determine one of those from code or documentation, record it as technical uncertainty.

### Learn next

Process management, because applications and workers live inside operating-system processes that start, stop, crash, and restart.

---

## Module 9: Processes, lifecycle, and graceful shutdown

### What is this?

A process is a running instance of a program. Servers, background workers, schedulers, and build tools all execute as processes with lifecycles.

### Why should I care?

Code that works inside one long-lived local process may fail when production restarts it, runs several copies, or stops it while work is in progress.

### When should I use this concept?

Whenever software runs continuously, owns resources, handles background work, or may be deployed with multiple replicas.

### How does it work?

A healthy process lifecycle considers:

```txt
start -> initialize -> accept work -> stop accepting work -> finish or release work -> close resources -> exit
```

Initialization and shutdown paths deserve tests and observability just like request handlers.

### What can go wrong?

- jobs lost during shutdown
- ports or files not released
- database connections leaked
- startup accepting traffic before required dependencies are ready
- state stored only in one process while requests are distributed across several

### Practice

Find the main server or worker entrypoint. Identify startup, readiness, signal handling, resource cleanup, and exit behavior.

Then answer what happens to an in-flight request or job when the process receives a termination signal.

### Learn next

Testing, because lifecycle and failure behavior must be verified rather than assumed.

---

## Module 10: Testing and test boundaries

### What is this?

Tests are executable evidence about behavior. Different test scopes provide different confidence.

A useful distinction is:

- unit tests: small logic boundaries
- integration tests: multiple real components cooperating
- end-to-end tests: user-visible flow across a deployed or near-real stack

### Why should I care?

AI agents can produce tests that merely repeat implementation details or mock every meaningful dependency. Such tests may be green while the real feature is broken.

### When should I use this concept?

Before implementing a bug fix or behavior change, decide what observable contract needs evidence.

### How does it work?

A good test fails for the right reason before the fix and passes for the right reason afterward. It should be narrow enough to diagnose failures but realistic enough to prove the behavior you care about.

### What can go wrong?

- testing private implementation instead of behavior
- excessive mocking
- deleting assertions to make a test pass
- adding only happy-path coverage
- relying on one large end-to-end suite for every defect

### Practice

Choose one recent bug fix. Read the test added for it and ask:

1. Could the original bug return while this test still passes?
2. Does the test reproduce the user-visible contract?
3. Which dependency is mocked, and does the mock remove the failure mode?
4. What is the smallest stronger test boundary?

### Learn next

Git and CI, because tests become useful team evidence when changes are isolated and automatically verified.

---

## Module 11: Git, commits, and change isolation

### What is this?

Git records changes as a graph of commits. A commit is more useful than a save point: it is a reviewable statement about one coherent change.

### Why should I care?

Coding agents can modify many files very quickly. Without disciplined change isolation, it becomes difficult to understand what changed, review risk, revert one decision, or identify which change introduced a failure.

### When should I use this concept?

For every non-trivial repository change.

### How does it work?

A healthy change sequence is usually:

```txt
inspect -> branch -> small coherent edit -> test -> review diff -> commit
```

Useful Git skills include reading diffs, inspecting history, comparing branches, reverting commits, and understanding conflicts. You do not need advanced Git internals before learning to keep changes small and reviewable.

### What can go wrong?

- unrelated refactors mixed with a bug fix
- generated files hiding important changes
- one huge agent commit with several independent decisions
- resolving a conflict by choosing one whole side without understanding both changes

### Practice

Take one recent large commit and divide its changed files into independent intentions. If you identify three different reasons for change, describe how you would have split them into separate commits.

### Learn next

CI, because repository changes need repeatable verification outside one developer machine.

---

## Module 12: Continuous integration

### What is this?

Continuous integration, or CI, automatically runs defined checks when code changes.

Typical checks include tests, linting, type checks, builds, security analysis, documentation checks, and packaging validation.

### Why should I care?

“Works on my machine” is weak evidence. CI runs the repository's agreed checks in a clean, repeatable environment and makes failures visible before integration.

### When should I use this concept?

As soon as a repository has checks important enough that forgetting to run them could ship a defect.

### How does it work?

A CI workflow should answer:

- which events trigger it?
- which runtime and dependencies does it install?
- which commands run?
- which failures block integration?
- which artifacts or logs help diagnose failures?

### What can go wrong?

- CI and local commands differ
- workflows silently skip important file paths
- flaky checks train developers to ignore failures
- required checks are disabled to merge urgent work
- secrets or permissions are broader than the workflow needs

### Practice

Open the repository's CI configuration and build a table:

| Check | Trigger | Command | Blocking? | Local equivalent |
|---|---|---|---|---|

Run one local equivalent and compare the command with CI.

### Learn next

Architecture boundaries, because CI protects changes but good boundaries limit how far a change can spread.

---

## Module 13: Architecture boundaries

### What is this?

An architecture boundary separates responsibilities so one part of the software can change without forcing unrelated parts to change with it.

A boundary could be a module, service, package, component, library, queue contract, or API.

### Why should I care?

Agentic coding becomes much safer when work can be delegated to small areas with clear interfaces. Poor boundaries create large blast radii: changing one requirement forces edits across routing, database access, UI, business rules, and integration code at once.

### When should I use this concept?

Use boundary thinking when a module has multiple reasons to change, when tests require many unrelated dependencies, or when a simple feature touches surprising parts of the repository.

### How does it work?

A useful boundary has:

- one clear responsibility
- an interface consumers can understand without reading internals
- dependencies pointing in deliberate directions
- tests that can exercise its contract
- ownership of its own rules and invariants

Ask of every module:

```txt
What does it own?
What does it expose?
What may it depend on?
Who may depend on it?
What must remain true even if its internals change?
```

### What can go wrong?

- shared utility modules that accumulate unrelated business logic
- UI code directly manipulating persistence details
- domain rules duplicated across handlers
- circular dependencies
- cross-module state mutation with no explicit contract

### Practice

Pick one feature and list the modules it touches. For each connection, label the contract between them. If you cannot describe the contract without discussing internal implementation, the boundary may be weak.

### Learn next

Return to the [Path Finder](../playbook/paths/path-finder.md) and choose a workflow problem to apply these concepts to.

---

## Capstone: explain one feature end to end

Choose a real feature that includes a user action, persistent data, and at least one server-side operation.

Produce a one-page engineering map covering:

```txt
Feature:
User-visible contract:
State and source of truth:
API boundary:
Authentication:
Authorization:
Database writes:
Transaction boundary:
Concurrency risks:
Idempotency strategy:
Queued work:
Caches:
Process/lifecycle assumptions:
Tests proving behavior:
CI checks:
Architecture boundaries:
Known uncertainty:
```

Then ask an agent to challenge the map rather than generate it for you:

```txt
Review this engineering map against the repository.

For every claim:
- cite the file and symbol that supports it
- mark unsupported claims as unverified
- identify one realistic failure mode I missed
- do not edit code

My map:
[paste map]
```

The capstone is complete when you can explain the feature without relying on the agent's wording.

## Completion checklist

- [ ] I can locate the source of truth for important state
- [ ] I can describe an API as a contract, not just a URL or function call
- [ ] I can separate authentication from authorization
- [ ] I can identify database operations that should remain consistent
- [ ] I can reason through two concurrent executions
- [ ] I can explain why a retried operation may need idempotency
- [ ] I can trace a queued job through retry and acknowledgement
- [ ] I can state a cache's key, authority, and expiration rule
- [ ] I can explain what happens during process startup and shutdown
- [ ] I can distinguish useful unit, integration, and end-to-end evidence
- [ ] I can inspect a change as a series of coherent Git commits
- [ ] I can map local validation commands to CI checks
- [ ] I can describe architecture boundaries in terms of ownership and contracts

## Related Riftbook resources

- [Beginner Path](../playbook/paths/beginner-path.md)
- [Path Finder](../playbook/paths/path-finder.md)
- [Debugging and Recovery Lab](../playbook/labs/debugging-recovery-lab.md)
- [Repo Audit Brief](../agent-briefs/repo-audit-brief.md)
- [Bug Fix Brief](../agent-briefs/bug-fix-brief.md)
- [PR Review Brief](../agent-briefs/pr-review-brief.md)
- [Project Truth Kit](../project-truth-kit/README.md)

*Back to [Learning Paths](./README.md).*
