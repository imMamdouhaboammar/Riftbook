# Visual Principles

The Riftbook design language is built to serve practical, builder-first workflows. It avoids generic aesthetic trends and corporate documentation standards in favor of a clean, structured "field guide" vibe.

## 1. Field Guide, Not Course Platform
- **Concept:** The playbook should feel like a developer's notebook—personal, interactive, and full of raw, high-signal annotations.
- **Aesthetic:** Clean boxes, grid paper lines, typewriter or console aesthetics, and high-contrast readable layouts.
- **Execution:** Avoid generic stock photography, multi-color modern gradients, or dashboard frames. Rely on clear typography and distinct icons.

## 2. Practical, Not Motivational
- **Concept:** Every element must serve a learning goal. We do not use decorative graphics or fluffy illustrations.
- **Aesthetic:** Badges have specific structural meanings (e.g. `DON'T BREAK` or `COPY THIS`).
- **Execution:** Do not add SVGs or elements that don't directly guide the reader's eye or group relevant information.

## 3. Honest and Real, Not Polished Fake-Success
- **Concept:** Riftbook is built from real mistakes and real lessons.
- **Aesthetic:** We use raw colors and annotations. We highlight mistakes (`MY MISTAKE`, `RED FLAG`) with high-contrast warning indicators.
- **Execution:** Do not hide errors. Structure stories with a focus on "What went wrong" and "What actually worked".

## 4. High Scannability
- **Concept:** Builders scan documents quickly to find specific configurations, rules, or checklists.
- **Aesthetic:** Short paragraphs, visual anchors (badges) before critical sections, clear heading hierarchy, and structured tables.
- **Execution:** Use callout blocks to break long sections of text. Keep code blocks compact.

## 5. Modular and Extensible
- **Concept:** Anyone should be able to write a new lesson or story that matches the visual language.
- **Aesthetic:** Simple markdown syntax and reusable SVG templates.
- **Execution:** Use standard SVG dimensions for header assets and standard classes.

## 6. GitHub-Native First
- **Concept:** The repository is read directly on GitHub. Every visual component must render natively without CSS sheets or JS engines.
- **Aesthetic:** SVG assets with inline styles and web-safe system fonts.
- **Execution:** Do not use advanced SVG features that GitHub sanitizes (like external fonts, custom CSS blocks, interactive scripts, or complex filters). Keep SVGs clean and semantic.
