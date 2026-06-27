# UI UX Pro Max

![UI UX Skill](https://img.shields.io/badge/UI%2FUX%20Skill-8B5CF6?style=for-the-badge)
![Design System](https://img.shields.io/badge/Design%20System-3B82F6?style=for-the-badge)
![Frontend](https://img.shields.io/badge/Frontend-10B981?style=for-the-badge)
![AI Coding](https://img.shields.io/badge/AI%20Coding-F59E0B?style=for-the-badge)

## What it is

UI UX Pro Max is an AI skill that gives coding agents stronger UI/UX judgment.

It helps the agent generate design systems, choose suitable layouts, recommend visual styles, pick colors and typography, avoid common design mistakes, and apply stack-specific UI guidance.

Official repo:
[https://github.com/nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

## Why it matters

Most AI coding agents can build functional interfaces, but they often produce generic screens.

UI UX Pro Max helps push the agent toward more intentional design decisions. It is useful when you want the agent to think about the product category, audience, visual direction, accessibility, layout pattern, typography, colors, motion, and delivery checks before writing UI code.

It is not a replacement for a designer, but it can make AI-built interfaces less random and more structured.

## Best use cases

### 1. Landing pages
Use it when building SaaS, service, product, agency, portfolio, or conversion-focused landing pages.

### 2. Dashboards
Useful for analytics screens, admin panels, reporting interfaces, CRM views, and data-heavy products.

### 3. App UI generation
Good for mobile apps, web apps, desktop apps, and cross-platform interface work.

### 4. Redesigning weak AI-generated UI
Use it when the first UI version looks generic, messy, or visually inconsistent.

### 5. Design system generation
Helpful when you need a starting design direction with layout patterns, color palette, typography, effects, and anti-patterns.

### 6. Stack-specific UI guidance
Useful when working with React, Next.js, shadcn/ui, Vue, Nuxt, Angular, Laravel, Svelte, Astro, SwiftUI, React Native, Flutter, HTML + Tailwind, and other supported stacks.

## How it helps in real work

* Makes the coding agent consider design before implementation
* Generates a clearer visual direction
* Helps avoid generic AI-looking interfaces
* Suggests layout patterns based on the product type
* Gives color and typography direction
* Adds accessibility and responsive checks
* Provides stack-specific UI guidance
* Helps improve landing pages, dashboards, and app screens
* Useful for turning rough vibe-coded UI into something more presentable

## Good fit for

* Vibe coders building product interfaces
* Frontend developers using AI coding agents
* Founders building MVPs
* Indie hackers
* Designers who work with coding agents
* Teams using Claude Code, Cursor, Windsurf, Codex CLI, Gemini CLI, OpenCode, GitHub Copilot, or similar tools

## Not a good fit for

* Backend-only work
* CLI tools with no visual interface
* One-line UI fixes
* Projects with a finished design system that must not be changed
* Teams that need strict brand compliance without human design review

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure UI UX Pro Max for my current AI coding setup.

Official repo:
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

Your task:
1. Detect which AI coding environment I am using.
2. Check the official README for the correct installation method.
3. Prefer the recommended CLI installation when suitable.
4. Install the skill for my current assistant only unless I explicitly ask for global installation.
5. Verify that the skill files were installed correctly.
6. Do not make unrelated changes to my project.
7. If installation needs a manual step, stop and tell me exactly what I need to do.

Important:
The package name mentioned by the repo is `ui-ux-pro-max-cli`, and it installs the `uipro` command.
Do not use older stale package names unless the official README says otherwise.

After installation, give me:
- What was installed
- Which command was used
- Which assistant it was configured for
- How to trigger the skill
- How to update it later
- Any prerequisites or limitations
```

## Quick install reference

```bash
npm install -g ui-ux-pro-max-cli

# Install for a specific assistant
uipro init --ai claude
uipro init --ai cursor
uipro init --ai windsurf
uipro init --ai codex
uipro init --ai gemini
uipro init --ai opencode

# Install for all supported assistants
uipro init --ai all

# Update
uipro update

# Uninstall
uipro uninstall
```

## Usage prompt after installation

Use this after the skill is installed:

```txt
Use UI UX Pro Max for this task.

Before writing code:
1. Identify the product type and target user.
2. Recommend the best layout pattern.
3. Recommend a visual style that fits the product.
4. Suggest a color palette and typography direction.
5. Mention UI/UX anti-patterns we should avoid.
6. Create a short implementation plan.
7. Then build or update the UI.
8. Run a final UI/UX quality check before saying it is done.

Task:
[describe your UI task here]
```

## Example prompts

```txt
Use UI UX Pro Max to redesign this SaaS landing page.
Make it feel more credible, clearer, and less like a generic AI template.
Keep the current content structure unless you find a strong reason to change it.
```

```txt
Use UI UX Pro Max to create a dashboard UI for a marketing analytics product.
Prioritize readability, data hierarchy, responsive behavior, and clear empty states.
```

```txt
Use UI UX Pro Max to improve this mobile app UI.
Check spacing, hierarchy, colors, typography, tap targets, and accessibility issues.
```

## Quality checklist

Before marking work complete, the agent should confirm:

* Product type is understood
* UI direction matches the use case
* Layout has clear hierarchy
* Colors are consistent
* Typography is readable
* Components have clear states
* Clickable elements look clickable
* Responsive behavior is checked
* Accessibility basics are covered
* No generic AI visual patterns unless intentionally selected
* Known limitations are documented

## Notes

UI UX Pro Max is most useful when the task involves visual judgment, layout decisions, interface quality, or design system direction.

It may be too much for tiny UI edits.

For serious brand or product work, still review the output manually. Treat it as a design intelligence layer for the agent, not as final creative approval.

## Links

* GitHub: [https://github.com/nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
* Website: [https://uupm.cc](https://uupm.cc)
