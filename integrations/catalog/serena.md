# Serena

> **Source:** [oraios/serena](https://github.com/oraios/serena)

## What it is

Gives coding agents semantic symbol retrieval, navigation, editing, and project memory similar to an IDE.

## Classification

| Field | Value |
|---|---|
| Category | `code-intelligence` |
| Integration type | MCP Coding Toolkit |
| Tier | `primary` |
| Install policy | `conditional-auto` |
| Preferred scope | `project` |
| Exclusive group | `semantic-editor` |
| Selection threshold | `6` |
| Relevant signals | `medium_repo`, `large_repo`, `semantic_edit`, `refactor_task` |

## Use it when

- The agent needs symbol-level navigation and precise edits in an existing codebase.
- Language-server-backed understanding is more useful than broad file search.

## Do not use it when

- The language or environment is not supported.
- Another semantic coding MCP is already the primary editor.

## Integration approach

Follow the current upstream MCP setup for the selected client. Activate only the target project and verify language-server support.

Before setup, verify the current upstream instructions, resolve capability overlap, prefer project-local scope, and document rollback.

## Validation

- Symbol lookup returns definitions from the current project.
- A small edit lands in the correct symbol without broad file replacement.
- Project memory does not contain secrets.


## Operating rule

Use the [selection policy](../selection-policy.md), prove value on a real task, and record install, validation, ownership, update, and removal details in `ACTIVE_INTEGRATIONS.md`.
