# Contributing to Riftbook

Thank you for contributing. Riftbook is a curated, workflow-first field guide for AI-assisted builders.

The goal is not to collect every AI link. The goal is to document resources that help real builders work with AI coding agents in a cleaner, safer, and more repeatable way.

> [!IMPORTANT]
> Riftbook is not a generic awesome-list clone. Plain links are not accepted. Every tool, skill, prompt, workflow, guide, or framework must explain exactly when to use it, how to use it, when to avoid it, and what the agent should do with it.

Before adding anything, read the curation rules in [`CURATION.md`](./CURATION.md).

---

## Contribution rules

1. **No plain links**: A link without workflow context does not belong in Riftbook.
2. **No promotional fluff**: Avoid hype, affiliate language, vague claims, and buzzwords.
3. **Tested or researched resources only**: Do not add tools, prompts, or workflows you have not tested or meaningfully evaluated.
4. **Use the templates**: Start from the matching file in [`/templates`](./templates/).
5. **Update the indexes**: Every new card must be linked from its category README. Important cards should also be linked from the root [`README.md`](./README.md).
6. **Use official links**: Prefer official docs, official repos, official package pages, and primary sources.
7. **No tracking parameters**: Remove `utm_`, referral, affiliate, and campaign parameters from URLs.
8. **No placeholders**: Do not submit `TBD`, `TODO`, `coming soon`, or empty sections.
9. **State limits clearly**: If a tool is costly, slow, experimental, local-only, cloud-only, or risky, say so.
10. **Do not commit secrets**: Never add API keys, tokens, `.env` files, credentials, private logs, or generated graph stores.

---

## Required card schema

Every new entry should include:

- **Name**: Clear and descriptive resource name.
- **Category**: Exact folder and classification.
- **What it is**: Concise explanation of the resource.
- **Why it matters**: Practical value in an AI-assisted workflow.
- **When to use it**: Specific task, phase, or problem.
- **When not to use it**: Cases where it is too much, risky, or irrelevant.
- **How to use it**: Step-by-step process.
- **Commands**: Install, setup, verification, and cleanup commands when applicable.
- **Agent prompts**: Practical prompts that can be copied into Claude Code, Codex, Cursor, Gemini CLI, or another coding agent.
- **Expected output**: What a good result looks like.
- **Quality checks**: Verification steps before trusting the output.
- **Notes and limitations**: Edge cases, cost, token usage, security, and known failure modes.
- **Official links**: Verified source links.

---

## How to add a resource

### Add a tool

1. Choose the right category folder under [`/tools`](./tools/), for example `review-intelligence/`, `agent-infrastructure/`, `react-quality/`, or `token-efficiency/`.
2. Create a new markdown card, for example `tools/review-intelligence/my-tool.md`.
3. Start from [`templates/tool-template.md`](./templates/tool-template.md).
4. Add the card to the relevant category README.
5. Add it to [`tools/README.md`](./tools/README.md).
6. If it is a major resource, add it to the root [`README.md`](./README.md).

### Add a skill

1. Choose the right category folder under [`/skills`](./skills/), for example `project-intelligence/`, `top-selected/`, `hot-skills/`, or `use-case-skills/`.
2. Create a new markdown card or `SKILL.md` if the skill is installable.
3. Start from [`templates/skill-template.md`](./templates/skill-template.md).
4. Add it to the category README.
5. Add it to [`skills/README.md`](./skills/README.md).
6. If it is a major resource, add it to the root [`README.md`](./README.md).

### Add a workflow

1. Create a workflow file under [`/workflows`](./workflows/), for example `workflows/review-before-commit-workflow.md`.
2. Start from [`templates/workflow-template.md`](./templates/workflow-template.md).
3. Add it to [`workflows/README.md`](./workflows/README.md).
4. Link related tools, skills, prompts, or frameworks inside the workflow.

### Add a prompt

1. Choose the right category folder under [`/prompts`](./prompts/), for example `coding/`, `design/`, `writing/`, or `research/`.
2. Create a new markdown card.
3. Start from [`templates/prompt-template.md`](./templates/prompt-template.md).
4. Include the prompt, required context, expected output, and failure modes.
5. Add it to the category README and [`prompts/README.md`](./prompts/README.md) when relevant.

### Add a framework

1. Choose the right folder under [`/frameworks`](./frameworks/), for example `rag/` or `agent-memory/`.
2. Create a framework card.
3. Explain architecture value, setup cost, good fit, bad fit, and verification process.
4. Add it to the framework category README and [`frameworks/README.md`](./frameworks/README.md).

---

## Writing guidelines

- Be practical, not abstract.
- Use short paragraphs and clear headings.
- Prefer specific commands, prompts, and workflows over broad advice.
- Add examples when they help the reader act.
- Mention prerequisites and generated files.
- Warn about costs, tokens, privacy, and security where relevant.
- Avoid duplicate entries. Search the repo first.
- Use plain English. The reader should know exactly what to do next.

---

## Quality checklist before opening a PR

- [ ] The resource has a real use case.
- [ ] The official link works.
- [ ] The card follows the correct template.
- [ ] The category README is updated.
- [ ] The root README is updated when the card is important.
- [ ] There are no placeholders.
- [ ] There are no secrets or private data.
- [ ] There are no tracking parameters in links.
- [ ] The card includes when not to use the resource.
- [ ] The card includes verification steps.
- [ ] The PR explains what changed and why.

---

## Review standard

A good Riftbook contribution should answer this question:

> Will this help an AI-assisted builder make a better decision or run a better workflow today?

If the answer is unclear, the contribution needs more context before it is merged.
