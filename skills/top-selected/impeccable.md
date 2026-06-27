# Impeccable

<img src="../../assets/badges/top-selected.svg" alt="Top Selected" height="28" />

![Design Skill](https://img.shields.io/badge/Design%20Skill-3B82F6?style=for-the-badge)
![AI Frontend](https://img.shields.io/badge/AI%20Frontend-8B5CF6?style=for-the-badge)
![Detector Rules](https://img.shields.io/badge/Detector%20Rules-F59E0B?style=for-the-badge)
![Live Iteration](https://img.shields.io/badge/Live%20Iteration-10B981?style=for-the-badge)

## Tags

`top-selected` `design-skill` `frontend-design` `ai-frontend` `anti-slop` `visual-quality` `design-system` `claude-code` `cursor` `codex` `gemini-cli` `github-copilot` `opencode` `layout` `typeset` `audit` `polish` `detector-rules`

## What it is

Impeccable is a design guidance system for AI coding agents.

It gives your agent a shared design language through one skill, a set of practical commands, live browser iteration, and deterministic detector rules for common AI-generated frontend design problems.

Official repo:
[https://github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)

## Why it is Top Selected

Impeccable is Top Selected because it solves one of the biggest problems in vibe-coded products:

The app may work, but the interface still looks like default AI output.

Instead of asking the agent vague things like “make it better” or “improve the design”, Impeccable gives you exact commands for design work.

You can tell the agent to audit, critique, polish, fix layout, improve typography, add motion, harden edge cases, or create a stronger first-run experience.

That makes it more usable than a generic design prompt.

## Best use cases

### 1. Starting a new frontend project

Run `/impeccable init` before serious UI work so the agent writes product and design context.

### 2. Fixing generic AI UI

Use it when the interface looks like the same SaaS template every AI agent keeps producing.

### 3. Final design pass before shipping

Use `/impeccable polish` when the feature works but needs visual cleanup before release.

### 4. UI audit

Use `/impeccable audit` when you want technical quality checks around accessibility, responsiveness, performance, and design issues.

### 5. Product design critique

Use `/impeccable critique` when you want a deeper UX review around clarity, hierarchy, emotional feel, and user understanding.

### 6. Layout and spacing repair

Use `/impeccable layout` when the page feels messy, cramped, unbalanced, or visually flat.

### 7. Typography repair

Use `/impeccable typeset` when font choices, sizing, hierarchy, line length, or readability feel weak.

### 8. Edge-case hardening

Use `/impeccable harden` when the UI needs error states, long text handling, i18n, overflow handling, and real-world cases.

### 9. Browser-based iteration

Use `/impeccable live` when you want to test visual variants directly in the browser.

## How it helps in real work

* Gives the agent exact design commands instead of vague design feedback
* Creates project-level design context through `PRODUCT.md` and `DESIGN.md`
* Helps avoid repeated AI design patterns
* Adds checks for accessibility, responsiveness, performance, and design quality
* Helps fix typography, layout, spacing, motion, color, copy clarity, and edge cases
* Works across several AI coding tools
* Can run detector checks without an AI harness
* Makes frontend review more repeatable

## Good fit for

* Vibe-coded frontend apps
* SaaS landing pages
* Dashboards
* Product MVPs
* Marketing sites
* Tools with real UI complexity
* Claude Code users
* Cursor users
* Codex users
* Gemini CLI users
* GitHub Copilot users
* Builders who want better design output from AI coding agents

## Not a good fit for

* Backend-only tasks
* CLI-only projects
* Tiny one-line UI edits
* Projects with a locked design system that cannot change
* Cases where you need a human designer’s final approval
* Teams that do not want AI tools editing design context files

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure Impeccable for my current AI coding setup.

Official repo:
https://github.com/pbakaus/impeccable

Your task:
1. Detect my current project root.
2. Detect which AI coding tools are present or likely used in this project.
3. Read the official Impeccable README before installing.
4. Install Impeccable using the recommended CLI installer.
5. Prefer project-scoped installation unless I explicitly ask for global install.
6. Use the right providers for my setup.
7. Verify that the skill is available in the AI coding tool.
8. Explain whether hooks were installed and where.
9. Do not change unrelated project files.
10. If the tool requires a manual approval step, stop and tell me exactly what I need to do.

Recommended command:
npx impeccable install

After installation, give me:
- What was installed
- Which providers were detected
- Which scope was used
- Which files were created or changed
- How to run `/impeccable init`
- How to update later
- Any manual approval step required
```

## Quick install reference

```bash
# Recommended interactive install
npx impeccable install

# Scripted install example
npx impeccable install --providers=claude,codex,cursor --scope=project

# Update
npx impeccable update

# Detector without AI harness
npx impeccable detect src/
npx impeccable detect index.html
npx impeccable detect https://example.com
npx impeccable detect --json .
```

## First run prompt

Use this after installation:

```txt
Run Impeccable setup for this project.

Command:
`/impeccable init`

Answer the setup questions based on this project:
- Product type:
- Target users:
- Brand lane:
- Visual direction:
- What to avoid:
- Main screens:
- Components:
- Typography direction:
- Color direction:
- Design risks:

After init:
1. Show me what was written to PRODUCT.md and DESIGN.md.
2. Tell me what you recommend running next.
3. Do not start redesigning yet.
```

## Command cheat sheet

| Command                 | Use it when                                | Copy-ready prompt                                                                |
| ----------------------- | ------------------------------------------ | -------------------------------------------------------------------------------- |
| `/impeccable init`      | New project or first time using Impeccable | `/impeccable init`                                                               |
| `/impeccable shape`     | You want UX/UI plan before code            | `/impeccable shape the landing page before implementing`                         |
| `/impeccable craft`     | You want a full shape-then-build flow      | `/impeccable craft a polished pricing page with visual iteration`                |
| `/impeccable document`  | Existing project has no DESIGN.md          | `/impeccable document this project and generate DESIGN.md from the current UI`   |
| `/impeccable extract`   | You want reusable components and tokens    | `/impeccable extract reusable UI components and design tokens from this project` |
| `/impeccable critique`  | You want UX review, not code fixes yet     | `/impeccable critique the onboarding flow`                                       |
| `/impeccable audit`     | You want technical UI checks               | `/impeccable audit the dashboard`                                                |
| `/impeccable polish`    | Final pass before shipping                 | `/impeccable polish the settings page before release`                            |
| `/impeccable layout`    | Spacing, grid, rhythm, structure feel off  | `/impeccable layout the homepage hero and feature grid`                          |
| `/impeccable typeset`   | Typography feels weak                      | `/impeccable typeset the blog post page`                                         |
| `/impeccable colorize`  | UI needs stronger color direction          | `/impeccable colorize the product dashboard without making it noisy`             |
| `/impeccable animate`   | UI needs purposeful motion                 | `/impeccable animate the onboarding steps with subtle motion`                    |
| `/impeccable clarify`   | UX copy is unclear                         | `/impeccable clarify the empty states and error messages`                        |
| `/impeccable harden`    | Edge cases and real user states            | `/impeccable harden the checkout form`                                           |
| `/impeccable onboard`   | First-run experience is weak               | `/impeccable onboard the new user dashboard`                                     |
| `/impeccable bolder`    | Design is too safe or boring               | `/impeccable bolder the landing page hero`                                       |
| `/impeccable quieter`   | Design is too loud                         | `/impeccable quieter the pricing section`                                        |
| `/impeccable distill`   | UI is too complex                          | `/impeccable distill the dashboard navigation`                                   |
| `/impeccable adapt`     | Needs better device support                | `/impeccable adapt the signup flow for mobile`                                   |
| `/impeccable live`      | Need browser visual variants               | `/impeccable live the hero section and compare 3 variants`                       |
| `/impeccable overdrive` | Want advanced visual effects               | `/impeccable overdrive the product demo section, but keep performance safe`      |
| `/impeccable delight`   | Need small interaction moments             | `/impeccable delight the success state after form submission`                    |

## Smart usage patterns

### Pattern 1: New landing page

```txt
/impeccable init
/impeccable shape landing page
/impeccable craft landing page
/impeccable critique landing page
/impeccable polish landing page
```

### Pattern 2: Existing bad AI UI

```txt
/impeccable document
/impeccable audit current UI
/impeccable layout the main screen
/impeccable typeset the main screen
/impeccable polish current UI
```

### Pattern 3: Product flow before release

```txt
/impeccable critique onboarding flow
/impeccable harden onboarding flow
/impeccable clarify onboarding copy
/impeccable polish onboarding flow
```

### Pattern 4: Dashboard cleanup

```txt
/impeccable audit dashboard
/impeccable layout dashboard
/impeccable typeset dashboard
/impeccable colorize dashboard
/impeccable polish dashboard
```

### Pattern 5: Mobile adaptation

```txt
/impeccable adapt checkout flow for mobile
/impeccable harden checkout flow
/impeccable audit checkout flow
/impeccable polish checkout flow
```

## Natural-language examples

You can also use `/impeccable` directly with a description:

```txt
/impeccable redo this hero section
```

```txt
/impeccable make this dashboard feel less generic and more like a serious analytics product
```

```txt
/impeccable review this signup flow and tell me what blocks trust or clarity
```

```txt
/impeccable make the pricing page clearer without changing the core offer
```

## Pin commands

If you use a command often, pin it:

```txt
/impeccable pin audit
```

Then you can use:

```txt
/audit
```

Good shortcuts to pin:

```txt
/impeccable pin audit
/impeccable pin polish
/impeccable pin critique
/impeccable pin layout
/impeccable pin harden
```

## Detector CLI examples

Use these outside the AI harness:

```bash
npx impeccable detect src/
npx impeccable detect index.html
npx impeccable detect https://example.com
npx impeccable detect --json .
npx impeccable detect --no-config src/
```

Ignore examples:

```bash
npx impeccable ignores list
npx impeccable ignores add-file "src/legacy/**"
npx impeccable ignores add-value overused-font Inter --reason "Brand font"
```

Inline waiver example:

```html
<!-- impeccable-disable overused-font: exported brand doc -->
```

## Quality checklist

Before marking UI work complete, the agent should confirm:

* `/impeccable init` was run for this project or design context already exists
* `PRODUCT.md` and `DESIGN.md` were reviewed where relevant
* The command chosen matches the actual problem
* Audit findings were separated from taste opinions
* Layout, typography, color, copy, motion, and responsiveness were checked
* Edge cases were considered
* The output is not a generic AI SaaS template
* Detector results were reviewed
* Any ignored detector rules are justified
* Final UI was verified manually or in browser where possible

## Notes

Impeccable is strongest when used as a workflow, not as a single magic command.

For a new project, start with `init`.

For an existing project, start with `document` or `audit`.

For final release, use `polish`.

For risky product flows, use `critique`, `harden`, and `clarify`.

Do not run every command blindly. Pick the command that matches the current UI problem.

## Links

* GitHub: [https://github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)
* Docs: [https://impeccable.style](https://impeccable.style)
* Hooks docs: [https://impeccable.style/docs/hooks](https://impeccable.style/docs/hooks)
* Detector docs: [https://impeccable.style/docs/detector](https://impeccable.style/docs/detector)
