# Client Brief to Build Brief

Use this brief when you need to turn loose project notes into an agent-ready build plan.

## Best for

- New client projects
- Landing page requests
- Feature requests
- Redesign requests
- Internal agency handoff

## Brief to copy

```txt
You are turning project notes into an agent-ready build plan.

Goal:
Create clear project truth, scope, risks, and first build steps.

Project notes:
[add notes here]

Project context:
[describe product, audience, current state, and business goal]

Constraints:
[deadline, stack, brand rules, technical limits, approval needs]

Your task:
1. Extract the real objective.
2. Separate confirmed facts from assumptions.
3. Identify missing information.
4. Convert the request into build scope.
5. Split the scope into small phases.
6. Define what should not be built yet.
7. Suggest the first 3 to 5 small tasks.
8. Create a review checklist.

Rules:
- Do not invent requirements.
- Mark assumptions clearly.
- Keep the first build small.
- Explain what needs confirmation.

Return:
1. Project truth summary
2. Confirmed requirements
3. Assumptions
4. Missing questions
5. Build scope
6. Out of scope
7. Suggested small tasks
8. Review checklist
9. Confirmation note
```

## Expected output

The agent should return a structured project brief that can become `PRODUCT.md`, `TASKS.md`, and the first implementation plan.

## Review checklist

- [ ] Facts and assumptions are separated
- [ ] Scope is small enough to start
- [ ] Missing questions are clear
- [ ] The first tasks are reviewable
- [ ] The confirmation note is clear

## Related

- [Agency Operator Path](../playbook/paths/agency-operator-path.md)
- [Repo Audit Brief](./repo-audit-brief.md)
- [Refactor Brief](./refactor-brief.md)
