# Content Review Checklist

Use this checklist for new lessons, resource cards, workflows, comparisons, and practical templates.

The goal is not to make every file look identical. The goal is to make every addition useful, connected, verifiable, and easy to maintain.

## 1. Product fit

- [ ] The contribution solves a clear problem for an AI-assisted builder.
- [ ] It fits an existing Riftbook category, learning path, or workflow.
- [ ] It is more than a plain link, generic explanation, or rewritten documentation page.
- [ ] The expected reader outcome is stated clearly.
- [ ] Similar content was checked before adding a new file.

## 2. Evidence

- [ ] Claims are supported by official documentation, primary sources, tested commands, or repository evidence.
- [ ] Facts, personal experience, and recommendations are distinguishable.
- [ ] Commands and setup steps were checked where practical.
- [ ] Limitations, cost, privacy, security, and prerequisites are stated when relevant.
- [ ] External URLs use canonical links without tracking parameters.

## 3. Structure

- [ ] The file starts with one clear H1 title.
- [ ] The opening explains what the reader will learn or accomplish.
- [ ] Headings follow a logical sequence.
- [ ] Paragraphs are short enough to scan on mobile.
- [ ] Lists are used for steps or comparisons, not as a substitute for explanation.
- [ ] Code blocks include enough context to run or adapt them safely.
- [ ] Placeholder text such as `TBD`, `TODO`, or `coming soon` is absent from published content.

## 4. Practical value

- [ ] The contribution includes a decision rule, workflow, example, template, command, or verification step.
- [ ] Good-fit and bad-fit cases are both explained.
- [ ] The reader knows what to do next after finishing the page.
- [ ] Expected outputs are concrete enough to review.
- [ ] Failure modes or common mistakes are included when they materially help.

## 5. Navigation and discovery

- [ ] The new file is linked from its category README or relevant index.
- [ ] It links back to the most useful parent page.
- [ ] Related lessons, tools, skills, or workflows are linked where they reduce reader effort.
- [ ] Link text describes the destination instead of using vague labels such as `click here`.
- [ ] The contribution has a clear place in an existing reading path, or the path is updated.

## 6. Repository quality

- [ ] `python -m unittest discover -s tests -p "test_*.py" -v` passes.
- [ ] `python scripts/check_content_quality.py` passes locally when the full repository is available.
- [ ] The link-check workflow is expected to pass.
- [ ] No generated files, local databases, credentials, logs, or temporary artifacts were committed.
- [ ] The diff contains only intentional changes.

## 7. Review decision

A contribution is ready when a reviewer can answer yes to all three questions:

1. Does this help a reader make a better decision or run a better workflow?
2. Can the reader verify the important claims and outputs?
3. Can the reader discover this page from the rest of Riftbook without guessing its path?

If any answer is unclear, revise the contribution before merging it.
