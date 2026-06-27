# Last30Days

<img src="../../assets/badges/use-case-skill.svg" alt="Use Case Skill" height="28" />

![Research Skill](https://img.shields.io/badge/Research%20Skill-3B82F6?style=for-the-badge)
![Social Signals](https://img.shields.io/badge/Social%20Signals-06B6D4?style=for-the-badge)
![Market Signals](https://img.shields.io/badge/Market%20Signals-10B981?style=for-the-badge)
![AI Agents](https://img.shields.io/badge/AI%20Agents-8B5CF6?style=for-the-badge)

## Tags

`use-case-skill` `research` `last-30-days` `social-search` `reddit` `x` `youtube` `hacker-news` `polymarket` `github` `market-research` `meeting-research` `trend-research` `competitive-research`

## What it is

Last30Days is an AI agent skill for researching what happened around a person, company, topic, product, tool, trend, or event in the last 30 days.

It searches across social platforms, developer communities, prediction markets, GitHub, and the web, then synthesizes a grounded brief from the signals it finds.

Official repo:
[https://github.com/mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)

## Why it is a Use Case Skill

Last30Days is not a general productivity skill.

It solves a specific recurring pain:

You need to understand what is happening right now, but the useful signals are scattered across Reddit, X, YouTube, Hacker News, GitHub, Polymarket, and the web.

Google may show official pages and SEO articles. LinkedIn may show polished profiles. Generic AI may be stale or missing social context. Last30Days is useful when you need the live-ish community signal: what people are saying, what developers are shipping, what markets are pricing, what communities are debating, and what changed recently.

That makes it a strong Use Case Skill.

You do not need it for every task. But when you need fresh context before a meeting, comparison, strategy, research sprint, or build decision, it can save hours.

## Best use cases

### 1. Before a meeting

Use it to understand what a person, founder, company, or product has been doing recently.

Example:

```txt
/last30days Peter Steinberger
```

### 2. Competitive research

Use it to compare tools, companies, frameworks, products, or communities based on recent discussion.

Example:

```txt
/last30days OpenClaw vs Hermes vs Paperclip
```

### 3. Trend research

Use it when a topic is moving fast and static search is not enough.

Example:

```txt
/last30days Nano Banana Pro prompting
```

### 4. Product validation

Use it before building a feature to see what users are complaining about, praising, requesting, or debating.

Example:

```txt
/last30days AI code review tools pain points
```

### 5. Market and narrative tracking

Use it when you need to understand how a topic is being framed by communities, creators, prediction markets, and technical people.

Example:

```txt
/last30days AI browsers
```

### 6. Travel or event research

Use it when official pages are outdated and real user experience matters.

Example:

```txt
/last30days Universal Epic Universe
```

### 7. Hiring and company signals

Use it to detect what a company appears to be prioritizing based on hiring pages, social signals, and public activity.

Example:

```txt
/last30days Listen Labs --hiring-signals
```

## How it helps in real work

* Finds recent signals across disconnected platforms
* Reduces manual research across Reddit, X, YouTube, HN, GitHub, Polymarket, and the web
* Helps before calls, pitches, meetings, and sales research
* Helps compare fast-moving tools or products
* Helps detect community sentiment
* Helps identify what users are actually talking about
* Can produce a shareable HTML brief
* Useful for strategy, content, product research, competitor research, and trend monitoring

## Good fit for

* Strategists
* Founders
* Product builders
* Researchers
* Marketers
* Sales teams
* Content teams
* AI builders tracking fast-moving tools
* Vibe coders deciding what to build next
* People who need recent signal, not generic summaries

## Not a good fit for

* Evergreen documentation lookup
* Simple factual questions
* Private data research
* Deep academic literature review
* Legal, medical, or financial decisions without expert review
* Topics where public social signal is weak or misleading
* Users who cannot or do not want to configure platform access where needed

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure Last30Days for my current AI agent setup.

Official repo:
https://github.com/mvanhorn/last30days-skill

Your task:
1. Detect which AI agent or coding environment I am using.
2. Read the official README and install instructions.
3. If I am using Claude Code, prefer the marketplace plugin flow.
4. If I am using Codex, Cursor, Copilot, Gemini CLI, or another supported Agent Skills host, use the `npx skills add` flow.
5. Explain the difference between global and project-scoped installation.
6. Verify that the `/last30days` command or equivalent skill trigger is available.
7. Do not make unrelated project changes.
8. If platform keys, browser sessions, or manual auth are required, stop and tell me exactly what I need to configure.

After installation, give me:
- What was installed
- Which command was used
- Which host was configured
- How to run a basic query
- Which sources work with zero config
- Which sources need setup
- Where generated briefs or memory files are saved
- Any privacy or API-key notes I should understand
```

## Quick install reference

```bash
# Claude Code marketplace flow
/plugin marketplace add mvanhorn/last30days-skill
/plugin install last30days

# Codex, Cursor, Copilot, Gemini CLI, or Agent Skills hosts
npx skills add mvanhorn/last30days-skill -g

# Project-scoped install
npx skills add mvanhorn/last30days-skill
```

## Usage prompt after installation

```txt
Use Last30Days for this research task.

Topic:
[insert person, company, product, tool, trend, or event]

Goal:
[meeting prep / competitive research / trend research / product validation / content research]

Return:
1. Executive summary
2. What changed recently
3. Strongest community signals
4. Notable quotes or claims
5. Developer or GitHub signals if relevant
6. Market or Polymarket signals if relevant
7. Contradictions or uncertainty
8. What I should do next
9. Sources and caveats
```

## Meeting prep prompt

```txt
Use Last30Days to prepare me for a meeting with:

[person or company]

I need:
1. What they have been doing recently
2. Their current projects, launches, posts, talks, or public discussions
3. Any GitHub or product activity if relevant
4. Topics I can bring up intelligently
5. Risks or sensitive topics to avoid
6. 5 smart questions I can ask
7. A short briefing I can read in 3 minutes
```

## Competitive research prompt

```txt
Use Last30Days to compare:

[Tool A] vs [Tool B] vs [Tool C]

Focus on:
1. What people actually use each tool for
2. Recent launches or changes
3. Developer complaints
4. Community praise
5. Pricing or access concerns if visible
6. GitHub activity if relevant
7. Which one is gaining momentum
8. Which one I should test first and why
```

## Product validation prompt

```txt
Use Last30Days for product validation.

Idea:
[describe product idea]

Find:
1. Recent complaints around this problem
2. Existing tools people mention
3. Gaps in current solutions
4. Language users use when describing the pain
5. Communities where this problem appears
6. Signals that the pain is urgent
7. Signals that the pain may be weak
8. Suggested positioning based on the evidence
```

## Shareable brief prompt

```txt
Use Last30Days and generate a shareable HTML brief.

Topic:
[insert topic]

The brief should be useful for Slack, email, or Notion.

Keep it:
- cited
- concise
- structured
- readable by a busy team
- clear about uncertainty
```

## Quality checklist

Before trusting the output, check:

* The topic was resolved correctly
* The right platforms were searched
* The output cites its claims
* Social virality is not confused with truth
* Recent does not automatically mean important
* Polymarket odds are treated as market signal, not fact
* Reddit and X takes are treated as community signals, not final evidence
* The synthesis separates evidence from interpretation
* Sensitive or high-stakes topics get extra verification
* The final brief includes caveats

## Notes

Last30Days is strongest when recent public discussion matters.

It is weaker when the topic has little social activity, when platform access is missing, or when the right answer requires private data, official confirmation, or expert review.

Treat it as a recent-signal engine, not a truth engine.

## Links

* GitHub: [https://github.com/mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)
* Runtime skill spec: [https://github.com/mvanhorn/last30days-skill/blob/main/skills/last30days/SKILL.md](https://github.com/mvanhorn/last30days-skill/blob/main/skills/last30days/SKILL.md)
