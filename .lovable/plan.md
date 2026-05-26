# Nexus² Polish + IA Consolidation Pass

This is a large structural cleanup. I'll keep the existing aesthetic (cream canvas, sage accent, Instrument Serif italics, soft cards, black pill buttons) and rework structure, copy, and motion. Roughly 30+ files touched.

## 1. IA Consolidation (URL + Nav restructure)

**New top nav:** `Platform · Solutions · Pricing · Company` (+ logo, + Request a demo)

**Route moves (with 301 redirects via a `<Navigate replace>` on old routes):**
- `/what-is-nexus` → `/platform`
- `/products` → `/solutions`
- `/products/<vertical>` → `/solutions/<vertical>`
- `/industries` (currently `/verticals`) → `/solutions`
- `/about` → `/company`

Old paths kept in router as `<Navigate to="..." replace />` so links don't break.

`Solutions` index = current Products overview unchanged (just title swap).

`Industries` page deleted; metrics + case studies folded into each `/solutions/<vertical>` page.

## 2. Vertical pages — 12-section structure

Edit `VerticalPage.tsx` to add new `proof` (3 stat cards w/ count-up), `caseStudy` (problem / implementation / result), and `steps` sections. Pull existing metrics + case studies from `Verticals.tsx` into each of the four vertical config files (Education, Enterprise, E-commerce, Healthcare).

## 3. Copy changes site-wide
- Home hero H1, sub, demo card ("Nexus² Assistant", rotating prompts, single "● Live" sage chip)
- Home "Trusted by" band, split platforms vs connectors, "How it works in 60s" strip, new final CTA
- Company mission + breakthrough card copy
- Footer tagline + 4-column structure + newsletter band
- Replace "chatbot/navigation assistant" with "Nexus² assistant" throughout

## 4. Pricing page rebuild
- Single hero, single price per plan (Starter ₹8k, Growth ₹14.5k "Most popular", Enterprise ₹10k + BYO key)
- Sage pills replace colored badges; sage check rows
- Delta-aware comparison table w/ `<details>` for inherited features
- Voice band re-skinned cream + sage
- 30-day rollover copy
- New CTA labels: Start free / Choose Growth / Talk to sales

## 5. Motion (framer-motion)
- Reusable `<Reveal>` wrapper (fade + 16px rise, 320ms, on scroll)
- Word-by-word headline reveal helper (40ms stagger, first-paint only)
- Count-up stat cards (~1.2s)
- Solutions diagram dashed-line draw-in on scroll, hover highlight
- Pricing card stagger (80ms), Growth +2px lift
- All gated by `prefers-reduced-motion`

## 6. Nav polish
- Solutions mega-menu (2 cols: By industry / Explore)
- Active-route sage underline draw-in
- Theme toggle compacted next to Request a demo
- Mobile drawer w/ stacked mega-menu

## 7. Platform page
- Convert four-vertical example block into tabbed switcher

## 8. Company page
- Add big sage serif-italic numerals (I, II, III) + 1px sage hairline left edge on three cards

## 9. Micro-polish
- Floating mic widget (if still mounted): emerald → sage #6E9F82, breathing animation, sage halo
- Consistent final CTA component across all pages

## Files touched (approximate)

**New:**
- `src/components/Reveal.tsx` — scroll fade-rise wrapper
- `src/components/AnimatedHeadline.tsx` — word stagger
- `src/components/CountUp.tsx`
- `src/components/FinalCTASection.tsx` — shared CTA
- `src/components/MegaMenu.tsx` (or inline in Navigation)
- `src/components/RotatingPrompts.tsx`
- `src/pages/Platform.tsx` (re-export of WhatIsNexus content w/ tabbed verticals)
- `src/pages/Solutions.tsx` (rename of Products)
- `src/pages/Company.tsx` (rename of About)
- `src/pages/Solution<Vertical>.tsx` × 4 (config now includes proof + caseStudy)
- Redirect stubs for old routes

**Edited:**
- `src/App.tsx` — new routes + redirects
- `src/components/Navigation.tsx` — new nav, mega-menu, active underline
- `src/components/Footer.tsx` — 4 cols + newsletter + new tagline
- `src/components/Hero.tsx` — new H1, sub, demo card, RRotatingPrompts, Live chip
- `src/components/Integrations.tsx` — split into platforms + connectors subsections
- `src/components/FinalCTA.tsx` — new copy
- `src/components/Pricing.tsx` — full rebuild per spec
- `src/pages/PricingPage.tsx` — single hero, voice band re-skin, FAQ unchanged
- `src/components/VerticalPage.tsx` — add proof, case study, steps sections + animations
- `src/components/FlowMap.tsx` — animated dashed lines + hover highlight
- `src/components/ChatWidget.tsx` — sage color + breathing (if used)
- `src/index.css` / `tailwind.config.ts` — verify sage `#6E9F82`, add any needed keyframes
- Vertical config files × 4 — add proof + caseStudy data

**Deleted/redirected:**
- `src/pages/Verticals.tsx` → still exists but route 301s to /solutions; content harvested into vertical configs first

## What I will NOT touch
- Color tokens, typography, card radii, button styles
- Solutions index visual design (only adds the line animation)
- About's three-card structure (only adds numerals + hairline)
- Platform capability cards (only converts vertical examples to tabs)
- Supabase, email functions, demo request flow

## Confirmation needed before I start
This is ~3–5 medium changes worth of work in one pass. I'll execute it in this order: (1) router + redirects + page renames, (2) shared motion components, (3) Vertical page restructure + data harvesting from Industries, (4) Pricing rebuild, (5) Home + Footer + Nav polish, (6) Platform + Company polish, (7) micro-polish + widget color.

Approving this plan kicks off the full pass.