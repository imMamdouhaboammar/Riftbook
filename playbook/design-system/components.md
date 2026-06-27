# Components

The Riftbook Visual System is composed of 8 core components designed to improve readability and scanability.

## 1. Playbook Cover Card
- **Use Case:** Top banner of the main `/playbook/README.md`.
- **Dimensions:** `1200 x 520`px.
- **Visuals:** Warm paper background (`#F8F5EE`), grid lines, bold title, human subtitle, and 4 meta chips (`Real workflows`, `Personal mistakes`, `Agent systems`, `Builder notes`).

## 2. Section Header Cards
- **Use Case:** Header banner for section indices (e.g. `getting-started/README.md`).
- **Dimensions:** `1200 x 360`px.
- **Visuals:** Warm background with section title, short guiding description, a custom section vector icon, and 3 key topic chips.

## 3. Lesson Hero Cards
- **Use Case:** Top banner of every lesson markdown page.
- **Dimensions:** `1200 x 420`px.
- **Visuals:** Large background lesson number (e.g. `01`), category breadcrumb, lesson title, a one-line promise sentence, and metadata badges.

## 4. Signal Badges
- **Use Case:** Inline highlights in the text.
- **Dimensions:** height `32`px, variable width, border radius `16`px, charcoal background (`#111827`).
- **Visuals:** Left-aligned icon, colored outline, and bold capitalized label using the functional color tokens.

## 5. Callout Blocks
- **Use Case:** Highlighting tips, warnings, or confessions.
- **Pattern:**
  ```markdown
  ![PRO TIP](../assets/badges/pro-tip.svg)

  > Blockquote text here.
  ```

## 6. Learning Path Cards
- **Use Case:** Categorized paths in `/playbook/paths/`.
- **Visuals:** Standardized tables or boxes describing who the path is for, where to start, and what is unlocked.

## 7. Case Study Block
- **Use Case:** Showcasing real-world builds (e.g. `Delegate Team`).
- **Visuals:** Delineated structure outlining the Project, Problem, Agent Setup, Pitfalls, and Reusable Lesson.

## 8. Progress Map
- **Use Case:** Navigation helper showing "You are here", "What came before", and "What comes next".

## 9. Platform & Tool Logos
- **Use Case:** Brand representations in playbook diagrams, headers, and specifications.
- **Rule:** Follow the canonical [Icon Policy](./icon-policy.md) — load logos from LobeHub Icons and enforce brand integrity.
