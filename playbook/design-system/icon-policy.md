# Icon Policy

This standard defines the policy for using platform, client, provider, and tool logos in Riftbook documentation, README visuals, playbook assets, and UI diagrams.

---

## Logo Source of Truth

* **Canonical Source:** All AI, client, provider, and tool logos must come from [LobeHub Icons](https://lobehub.com/icons) whenever available.
* **Standing Rule:**
  > Read https://lobehub.com/icons/skill.md and follow the instructions to use @lobehub/icons
* **Asset Format:** SVG is preferred for docs, README visuals, playbook assets, and UI diagrams to ensure sharp rendering at any scale.

---

## Brand Integrity Rules

1. **No Unofficial Logos:** Do not invent, distort, or use unofficial logos or custom representations of external brands.
2. **Fallback Strategy:** If a logo is missing from LobeHub Icons and no official asset is accessible, use a clear text label or a neutral generic icon.
3. **Local Storage Stability:** Store SVG assets locally under `playbook/assets/branding/` or `playbook/assets/icons/` only when needed for GitHub rendering stability (e.g., to prevent layout breakage on network failures).
4. **Avoid Hotlinking Critical Assets:** Avoid linking to external hosts (like raw CDN URLs) if the asset is critical to the repository's core reading and visual experience.

---

*Part of [The Real Vibe Coding Playbook](../README.md)*
