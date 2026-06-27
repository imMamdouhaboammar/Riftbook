# Design Tokens

This file lists the official design tokens for the Riftbook Playbook. Use these constants for any new assets, covers, or badges.

## Color Tokens

The visual system uses a curated, warm color palette to feel like an engineer's paper notebook.

| Token | Hex Value | Intent / Usage | Color Group |
|---|---|---|---|
| **Ink Black** | `#111827` | Primary text, titles, borders, dark text inside SVGs | Neutrals |
| **Muted Graphite** | `#4B5563` | Subtitles, helper text, grid line strokes | Neutrals |
| **Paper Background** | `#F8F5EE` | Primary card background, SVG backdrop | Neutrals |
| **Soft Sand** | `#EFE7D8` | Subtle card background, grid gridline overlays | Neutrals |
| **Signal Blue** | `#2563EB` | `AGENT MOVE`, `DEFAULT STACK`, workflow focus | Functional |
| **Warning Red** | `#DC2626` | `DON'T BREAK`, `RED FLAG`, `BIG ISSUE`, critical notes | Functional |
| **Learning Green** | `#16A34A` | `PRO TIP`, `TRY IT`, `QUICK WIN`, tips & wins | Functional |
| **Story Purple** | `#7C3AED` | `STORY`, `MY MISTAKE`, personal confessions | Functional |
| **Command Amber** | `#D97706` | `COPY THIS`, `DO THIS FIRST`, code or setup actions | Functional |

## Typography Tokens

Inside SVG assets, we rely on clean, readable system fonts that match standard operating systems and the GitHub web viewer.

- **Primary Headings:** `Inter`, `Outfit`, `system-ui`, `-apple-system`, `sans-serif`
- **Subheadings & Meta:** `Inter`, `Arial`, `sans-serif`
- **Code & Console Blocks:** `JetBrains Mono`, `Courier New`, `monospace`

## Asset Dimensions

Use these exact aspect ratios and dimensions to ensure pixel-perfect rendering in GitHub:

- **Playbook Cover Card:** `1200 x 520` (Ratio `30:13`)
- **Section Header Card:** `1200 x 360` (Ratio `10:3`)
- **Lesson Hero Card:** `1200 x 420` (Ratio `20:7`)
- **Signal Badges:** Variable width (depending on text length) x `32` height (rx: `16`)
