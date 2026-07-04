# Delivery QA Brief

Use this brief before handing work to a client, stakeholder, or internal reviewer.

## Best for

- Landing page delivery
- Feature delivery
- Frontend polish passes
- Bug fix handoff
- Client approval rounds
- Final review before merge or deploy

## Brief to copy

```txt
You are running delivery QA before handoff.

Goal:
Check that the delivered work matches scope, works as expected, and is ready for review.

Project context:
[describe the project]

Delivered work:
[describe what changed]

Scope to verify:
[add accepted scope or task list]

Files or routes to inspect:
[add files, routes, components, or links]

Your task:
1. Compare delivered work against scope.
2. Identify missing or incomplete items.
3. Check obvious UX, content, and responsive issues.
4. Check error, empty, and loading states when relevant.
5. Identify manual QA steps.
6. Prepare a clear handoff note.

Rules:
- Do not invent completed work.
- Mark anything unverified.
- Separate blockers from polish items.
- Keep the handoff note concise.

Return:
1. Delivery status
2. Scope match
3. Blockers
4. Polish items
5. Manual QA checklist
6. Risks or unknowns
7. Handoff note
```

## Expected output

The agent should return a practical delivery review and a handoff note that can be shared after human review.

## Review checklist

- [ ] Scope was checked
- [ ] Blockers are separated from polish
- [ ] Manual QA steps are clear
- [ ] Unverified areas are marked
- [ ] Handoff note is concise

## Related

- [Agency Operator Path](../playbook/paths/agency-operator-path.md)
- [Frontend Rebuild Brief](./frontend-rebuild-brief.md)
- [PR Review Brief](./pr-review-brief.md)
