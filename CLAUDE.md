# Summer House Brand System

> Read this before touching any file. Every spacing, color, and type decision should pass the Summer House test: *"Does this feel like ice cream on a summer night?"*

---

## The Feeling

Cape Cod coastal meets Michigan lake house. Nancy Meyers meets midwestern Ralph Lauren polo.
The naturally beautiful girl who is stunning in an unassuming way. Golden retriever, green grass,
clear skies, ice cream on a summer's night. A wedding band under a white tent late into the night.
Fireworks on the beach.

This site should make people **exhale**. It should feel like walking into a beautifully lit room
where someone already poured you a glass of wine.

---

## Design Principles (in priority order)

1. **Breathing room over density.** When in doubt, add more whitespace. Then add more.
2. **Warmth over precision.** Soft edges, gentle shadows, organic shapes. Nothing sharp or clinical.
3. **Photography over graphics.** Every section should feel like it could exist in a lifestyle magazine.
4. **Restraint over impact.** Whisper, don't shout. No bold CTAs, no urgency language, no "Book Now!" energy.
5. **Texture over flat.** Subtle grain, linen-like backgrounds, layered depth. Not flat design.

---

## Color Usage Rules

| Color | Hex | Rule |
|-------|-----|------|
| Cream | `#FFF8EF` | **Dominant color — 60%+ of every page.** Default background. |
| Navy | `#182446` | **Headings ONLY.** Never for large background blocks. |
| Terracotta | `#BB4B28` | **PRECIOUS — single most important CTA per page only.** Not links, not accents. |
| Sage | `#7A9E7E` | Secondary actions, subtle accents, secondary CTAs. |
| Sandy gold | `#C8B897` | Dividers, borders, card accents, subtle warmth. |
| Dusty blue | `#8FA8B7` | Hover states, light accents only. |

---

## Typography Feel

- **Fraunces** for headlines — editorial, like a magazine masthead. Letter-spacing slightly loose. Must have **room** — massive top/bottom padding. Never cramped.
- **Space Grotesk** for body — clean but not cold.
- **Line-height**: 1.75–1.8 for all readable body text. Not 1.5, not 1.625. **Generous.**
- Headlines should feel like they breathe. If a section feels dense, the answer is always more padding, not smaller type.

---

## What This Site Is NOT

- Not a medical website with warm colors
- Not a spa website with good SEO
- Not a generic medspa template
- **It IS a lifestyle brand that happens to offer aesthetic treatments**

---

## Photography Direction

Until the real brand shoot happens, use images that feel like:
- Natural light pouring through windows
- Linen textures, soft fabrics, warm wood
- People laughing naturally (not posed)
- Coastal New England or lake house settings
- Golden hour everything

**Avoid:** studio lighting, pure white backgrounds, close-up injection photos, stock medical imagery, anything that reads "medical" or "before/after dramatic transformation."

---

## The Critique Loop

After every component change, ask:

> "Does this make me exhale, or does it feel like a website?"

If below 7/10 on brand feeling, the usual culprits are:
1. Not enough whitespace (#1 issue, always)
2. Navy used for section backgrounds (wrong — headings only)
3. Terracotta used decoratively (wrong — CTAs only)
4. Shadows too sharp (use high spread, high blur, low opacity)
5. Line-height too tight (target 1.75–1.8)
6. Sections too short (let content breathe vertically — min py-16, prefer py-20+)

---

## Project Structure Notes

- Framework: Next.js 14 App Router, TypeScript, Tailwind CSS v4
- Deployed: Netlify (auto-deploy from GitHub main)
- 209 static pages: 42 services, 61 locations, 52 blog posts, 30 personas, 7 conditions
- Design tokens: `src/app/globals.css`
- Content: `src/lib/content.ts`, `src/lib/conditions.ts`, `src/lib/blog.ts`, etc.
- Real images available: `public/images/logo.webp`, `public/images/salon-suite.webp`
