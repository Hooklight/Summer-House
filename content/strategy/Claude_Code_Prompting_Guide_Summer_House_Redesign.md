# How to Prompt Claude Code to Actually Redesign Summer House

## The Core Problem

Claude Code treated the design plan as a **content strategy** — it nailed the SEO architecture (209 pages, schema markup, symptom-first routing, persona pages) but applied the brand vision as a color palette swap, not a design transformation. The site reads correctly but doesn't *feel* like Summer House.

What you have now: a well-structured, warm-toned medspa site with great content and SEO bones.

What you need: a site that makes someone feel like they just walked into a Nancy Meyers kitchen — where every scroll feels like linen curtains catching a breeze, where the typography breathes, where the photography makes you exhale.

The gap isn't content. It's **craft**. And Claude Code won't get there from a 40-page strategy document. It needs short, visual, component-level prompts that describe exactly what to build, one piece at a time.

---

## Why Your Current Approach Isn't Working

Long strategy documents are great for humans. They're terrible for Claude Code prompts. Here's why:

1. **Claude Code optimizes for completion, not feeling.** When you hand it a 17-part design plan, it pattern-matches to "implement these specs" and checks boxes. It doesn't sit with the brand vision and let it inform every `padding` and `border-radius` decision.

2. **Design is iterative, not declarative.** You can't spec "Nancy Meyers warmth" in a requirements doc. You get there by building a hero section, looking at it, saying "the type needs more air" and "that shadow is too sharp," and refining.

3. **Claude Code needs to SEE what it's building.** The most effective workflow is: build → screenshot → critique → refine. Not: read 40-page doc → build everything → hope it works.

---

## The Prompting Framework

### Rule 1: One Component Per Prompt

Don't say "redesign the homepage." Say "redesign the hero section." Then look at it. Then move to the next section.

### Rule 2: Show, Don't Spec

Instead of hex codes and clamp() values, describe the feeling and give reference URLs. Claude Code can look at reference sites.

### Rule 3: Critique Loop

After every component, take a screenshot and ask Claude Code to critique it against the brand vision. This is the most important step that most people skip.

### Rule 4: Use a CLAUDE.md File

Create a `CLAUDE.md` in your project root that Claude Code reads on every prompt. This is your persistent brand bible.

---

## Step 0: Create CLAUDE.md (Do This First)

Paste this into a `CLAUDE.md` file in your project root:

```markdown
# Summer House Brand System

## The Feeling
Cape Cod coastal meets Michigan lake house. Nancy Meyers meets midwestern Ralph Lauren polo.
The naturally beautiful girl who is stunning in an unassuming way. Golden retriever, green grass,
clear skies, ice cream on a summer's night. A wedding band under a white tent late into the night.
Fireworks on the beach.

This site should make people EXHALE. It should feel like walking into a beautifully lit room
where someone already poured you a glass of wine.

## Design Principles (in priority order)
1. **Breathing room over density.** When in doubt, add more whitespace. Then add more.
2. **Warmth over precision.** Soft edges, gentle shadows, organic shapes. Nothing sharp or clinical.
3. **Photography over graphics.** Every section should feel like it could exist in a lifestyle magazine.
4. **Restraint over impact.** Whisper, don't shout. No bold CTAs, no urgency language, no "Book Now!" energy.
5. **Texture over flat.** Subtle grain, linen-like backgrounds, layered depth. Not flat design.

## Color Usage Rules
- Cream (#FFF8EF) is the dominant color. It should cover 60%+ of any page.
- Navy (#182446) is for headings only. Never for large background blocks.
- Terracotta (#BB4B28) is precious — use it ONLY for the single most important CTA on each page.
- Sage (#7A9E7E) is for secondary actions and subtle accents.
- Sandy gold (#C8B897) is for dividers, borders, and subtle warmth.
- Dusty blue (#8FA8B7) is for hover states and light accents only.

## Typography Feel
- Fraunces for headlines — it should feel editorial, like a magazine masthead. Letter-spacing: slightly loose.
- Space Grotesk for body — clean but not cold. Line-height should be generous (1.7-1.8).
- Headlines should feel like they have ROOM. Massive top/bottom padding. Never cramped.

## What This Site Is NOT
- Not a medical website with warm colors
- Not a spa website with good SEO
- Not a generic medspa template
- It IS a lifestyle brand that happens to offer aesthetic treatments

## Photography Direction (until real shoot happens)
Use Unsplash/Pexels images that feel like:
- Natural light pouring through windows
- Linen textures, soft fabrics, warm wood
- People laughing naturally (not posed)
- Coastal New England or lake house settings
- Golden hour everything
Avoid: studio lighting, pure white backgrounds, close-up injection photos, stock medical imagery
```

---

## Step 1: The Homepage Hero (Prompt Series)

### Prompt 1a: Build the Hero
```
Redesign the homepage hero section. Right now it feels like a standard medspa header.
I want it to feel like opening a Nancy Meyers movie — warm, cinematic, inviting.

Specific direction:
- Full-viewport height hero with a lifestyle photo background (use a warm,
  golden-hour image of a coastal/lake house setting from Unsplash — something
  that says "summer evening")
- Overlay: subtle cream gradient from bottom (not a dark overlay — we're going
  for warmth, not drama)
- Headline "You're already beautiful. We help you feel like it." in Fraunces,
  large (clamp 3rem to 5rem), cream colored, with generous letter-spacing
- Subtitle in Space Grotesk, smaller, cream with slight transparency
- ONE button: "Start a Conversation" in terracotta with rounded corners (border-radius
  2rem), generous padding, no uppercase
- Below the fold: a subtle scroll indicator (thin line or gentle chevron animation)
- The entire section should feel like taking a deep breath

After building this, take a screenshot and show me.
```

### Prompt 1b: Critique and Refine
```
Look at the hero section you just built. Compare it to the CLAUDE.md brand vision.

Ask yourself:
- Does this make me exhale, or does it feel like a website?
- Is there enough breathing room around the headline?
- Does the photo feel like Summer House (warm, coastal, natural) or generic?
- Is the CTA button too aggressive? It should feel like an invitation, not a sales push.
- Would this look at home in a Kinfolk or Cereal magazine spread?

Make 3 specific refinements based on your critique. Show me before and after screenshots.
```

### Prompt 1c: The Scroll Transition
```
Add a section below the hero that transitions into the philosophy statement.

This should NOT be a hard cut to a white section. Instead:
- Gentle parallax: the hero image scrolls slightly slower than the content
- The cream background fades in gradually over 100vh of scroll
- The philosophy line "We don't transform people. We reveal them." appears with a
  subtle fade-in as you scroll, centered, in Fraunces italic, with a thin sandy-gold
  line above and below it
- Generous vertical padding — this quote should sit alone in its own visual moment,
  like a chapter title page in a book

The feeling: turning the page in a beautiful coffee table book.
```

---

## Step 2: Service Cards (Prompt Series)

### Prompt 2a: Redesign the Service Card Component
```
The current service cards feel like a design system component. I want them to feel
like pages from a lookbook.

Redesign the service card:
- No visible card border or shadow. The card is defined by whitespace and a lifestyle
  photo at the top.
- Photo should be 3:2 ratio, with a very subtle rounded corner (8px max)
- Below the photo: treatment name in Fraunces (not too large), then a one-line
  description in Space Grotesk
- Instead of a "Learn more" link, use a subtle arrow (→) that slides right on hover
- On hover: photo zooms very slightly (scale 1.02, transition 0.6s ease), and the
  treatment name color shifts to terracotta
- The overall effect should feel like browsing a curated shop, not scrolling a menu

Build one card first and screenshot it. Then apply to the grid.
```

### Prompt 2b: The Grid Itself
```
The services grid should feel like a magazine layout, not a product catalog.

- Desktop: 3 columns, but with generous gaps (gap: 3rem or more)
- The grid should be offset — not perfectly aligned. Consider making the middle
  column slightly lower than the sides (transform: translateY(2rem)) to create
  visual movement
- Between service categories, add a thin sandy-gold divider with a small botanical
  SVG accent (a simple leaf or branch line drawing, single color, subtle)
- The section header for each category should be in Fraunces italic, left-aligned,
  with a lot of space above it

Screenshot the full services page when done.
```

---

## Step 3: Photography & Texture (Prompt Series)

This is where the brand gap is widest. The current site has zero lifestyle imagery.

### Prompt 3a: Add Texture to Backgrounds
```
The site backgrounds are flat cream. I want them to feel like linen.

Add a very subtle paper/linen texture to the main background. Requirements:
- Almost imperceptible at normal viewing — you should FEEL it more than see it
- Use a CSS approach: either a subtle noise SVG filter or a tiled micro-texture
- The texture should be warm (slightly yellow-toned noise, not gray)
- It should look like cream-colored linen stationery
- Test at multiple screen sizes — it should never become distracting

Show me a before/after comparison.
```

### Prompt 3b: Add Lifestyle Photography to Key Sections
```
Add placeholder lifestyle images to these sections (use high-quality Unsplash photos):

1. Homepage hero: coastal/lake house golden hour scene
2. About section: warm interior with natural light (think Nancy Meyers kitchen —
   white cabinets, wood counters, soft morning light)
3. Between service sections: horizontal "breather" images — landscapes, textures
   (close-up of linen, dappled sunlight on wood, ocean at golden hour)
4. Testimonial section background: soft, blurred lifestyle image with cream overlay

For each image, use Unsplash URLs with these search terms:
- "golden hour coastal home"
- "warm kitchen morning light"
- "linen texture natural"
- "lake house sunset"

Every image should feel warm (2700K-3500K color temperature feeling).
No cool-toned, blue-heavy, or studio-lit images.

Show me the homepage with images added.
```

---

## Step 4: The Form Experience (Prompt Series)

### Prompt 4a: Redesign the Consultation Form
```
The current form feels like a form. I want it to feel like writing a note
to a friend.

Redesign the consultation form:
- Remove all visible borders from input fields
- Instead: subtle bottom-border only, in sandy gold, that brightens on focus
- Labels above fields in Space Grotesk, small, muted color — they should
  feel like gentle suggestions
- Reduce to 3 visible fields: First Name, Email or Phone (let them choose),
  and "What brings you to Summer House?" (open text, 2-3 lines)
- The submit button: "Let's Talk" in terracotta, same style as hero CTA
- Wrap the form in a section with a warm background (#F5ECE0) and generous
  padding on all sides
- Add a small note below the form: "We'll reach out within one business day.
  No pressure, no sales pitch." in small, muted text

The feeling: writing on beautiful stationery, not filling out a medical intake form.
```

---

## Step 5: Persona Pages (Prompt Series)

### Prompt 5a: Make Persona Pages Feel Distinct
```
The persona pages (/for/men, /for/women-over-50, etc.) currently feel like the
main site with different copy. They should feel like the site is speaking DIRECTLY
to that person.

For /for/men:
- Hero image: something that feels masculine but not aggressive. Think: a man's
  hands on a steering wheel, a well-worn leather chair, a clean shave in warm light.
  NOT: a shirtless gym bro.
- Color temperature shift: lean slightly more into the navy and sandy gold,
  pull back on the sage
- Typography: slightly tighter, slightly bolder headings
- Copy tone: direct, no-nonsense, but warm. "You want to look sharp. Not done."
- The overall feeling: a well-edited men's magazine feature, not a sales page

For /for/women-over-50:
- Hero image: a woman in her 50s-60s, laughing naturally, in beautiful natural
  light. The J.Crew catalog version of aging gracefully.
- Color temperature shift: lean into cream, sage, and dusty blue
- Typography: slightly larger base font (18px), more generous line-height
- An "Our Approach for You" section that specifically addresses their concerns
  (looking natural, not overdone, respecting their features)
- The overall feeling: a warm conversation with a trusted friend, not a medical consultation

After each persona page, screenshot it and compare it to the main homepage.
They should feel like siblings, not clones.
```

---

## Step 6: Micro-Interactions & Polish (Prompt Series)

### Prompt 6a: Add Subtle Animation
```
The site feels static. Add subtle life without making it feel like a tech startup.

Animations to add:
1. Scroll-triggered fade-ins: sections should gently appear as you scroll down
   (opacity 0→1, translateY 20px→0, duration 0.8s, ease-out). Not every element —
   just section-level blocks.
2. The philosophy quote on the homepage: subtle letter-spacing animation on scroll
   (letters gently space out as quote enters viewport)
3. Navigation: on scroll down, nav background becomes slightly more opaque cream
   with a very subtle backdrop-blur
4. Image hover on service cards: gentle zoom (1.02 scale) with a 0.6s ease transition
5. Wave underline on section headings: thin SVG underline that draws itself on scroll
   (stroke-dashoffset animation)

Rules:
- prefers-reduced-motion: respect it. All animations should have a media query fallback.
- Nothing should bounce, overshoot, or feel "techy"
- Everything should feel like natural movement — a curtain swaying, not a button bouncing
- Duration: 0.4s-0.8s for most transitions. Nothing instant, nothing slow.
```

---

## Step 7: Mobile Excellence (Prompt)

```
Review the entire mobile experience (375px viewport).

The mobile site should feel like a beautiful app, not a squeezed desktop site.

Specific checks:
1. Hero: does the headline have enough breathing room? (Min padding: 2rem sides)
2. Is the sticky CTA bar at the bottom elegant? (It should be: cream background,
   subtle top shadow, "Call Us" and "Book" buttons in terracotta and sage,
   rounded, spaced apart)
3. Service cards: single column, but do they still feel like a lookbook?
   (Full-width photos, generous spacing between cards)
4. Forms: are inputs large enough for comfortable thumb tapping? (Min 48px height)
5. Typography: is the base font 16px+ to prevent iOS zoom?
6. Does scrolling feel smooth? No layout shifts, no janky transitions.
7. Persona pages: do they still feel distinct on mobile, or does everything
   collapse into sameness?

Take a mobile screenshot of each major section and show me.
```

---

## The Critique Loop (Use After Every Major Change)

This is the most important prompt in this entire document. Use it after completing each step above:

```
Take a screenshot of [the section you just built].

Now evaluate it honestly against this question:

"Does this feel like Cape Cod coastal meets Michigan lake house? Like Nancy Meyers
meets midwestern Ralph Lauren? Like ice cream on a summer's night? Like a wedding
band under a white tent?"

Rate it 1-10 on brand feeling. If it's below 7, identify what's pulling it toward
"generic medspa" and fix it. Common culprits:
- Not enough whitespace (always the #1 issue)
- Photos too clinical or too stock-y
- Shadows too sharp (use spread, blur, and low opacity)
- Colors too saturated (mute everything 10-15%)
- Typography too tight (increase line-height and letter-spacing)
- Sections too short (let content breathe vertically)

Show me the updated screenshot after fixes.
```

---

## Prompt Sequencing Cheat Sheet

Use this order for best results:

| Order | What | Why |
|-------|------|-----|
| 0 | Create CLAUDE.md | Sets persistent brand context |
| 1 | Homepage hero | First impression, sets the tone for everything |
| 2 | Background textures | Changes the whole site feel instantly |
| 3 | Lifestyle photography | Biggest visual gap right now |
| 4 | Service cards | High-traffic component |
| 5 | Consultation form | The conversion moment |
| 6 | Persona pages | Differentiation magic |
| 7 | Micro-interactions | Polish layer |
| 8 | Mobile review | Final QA |

Between each step, use the Critique Loop prompt.

---

## What NOT to Do

- **Don't paste the entire 40-page design plan into Claude Code.** It'll skim it and check boxes.
- **Don't ask for everything at once.** "Redesign the whole site" → mediocre. "Redesign the hero" → great.
- **Don't skip the critique loop.** Building without looking is how you got here.
- **Don't describe feelings in hex codes.** Say "this should feel like linen" not "use #F5ECE0."
- **Don't accept the first output.** The first version is always 70%. The magic is in the 2-3 refinement passes.

---

## The Nuclear Option: If Claude Code Still Won't Get the Feel Right

If after following this guide the site still feels too "designed" and not enough "felt," try this prompt:

```
I'm going to show you two websites.

First, look at summerhousedallas.com (the old Squarespace site).
Notice how it FEELS — the warmth, the softness, the brand soul.

Now look at summerhousemedspa.com (our current Next.js site).
It's functionally better but emotionally worse.

Your job: steal the SOUL of the old site and inject it into the
new site's architecture. The new site should keep its structure,
SEO, and content — but its visual and emotional experience should
feel like the old site grew up and got more sophisticated.

Start with the homepage. Show me before and after screenshots.
```

This works because Claude Code can actually *look* at both sites and understand the gap viscerally, rather than interpreting a written spec.
