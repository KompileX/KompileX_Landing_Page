# Hero Section Redesign — Design Spec (revised)

Date: 2026-08-08
Branch: `feature/hero_modification`

## Goal

Add a dark, cinematic, futuristic glowing-arc visual to the KompileX hero
background (inspired by a Fluidity-style reference image), **without**
removing or restructuring any existing hero content.

Scope: **hero background visual only**. `HeroSection.tsx` (copy, feature
cards, badge, CTAs, tech ticker) stays exactly as it is today. Navbar and
all sections below the hero are untouched.

## Decisions (revised — supersedes the original version of this doc)

- **Nothing existing is removed.** Feature cards, mouse-trail tech-icon
  effect, grid, mesh blobs, connector lines, rotating square rings,
  ambient particles, badge copy, headline "We Ship Software That Works",
  CTAs, tech ticker — all stay as-is in `HeroSection.tsx` and
  `HeroBackground.tsx`.
- **Light/dark toggle stays respected.** `HeroBackground` keeps its
  `isLight` prop. The new arc visual renders in both themes, with a more
  vivid cyan/indigo/purple gradient in dark mode and a softer
  violet/fuchsia version in light mode (consistent with the existing
  `isLight` branching pattern already in the file).
- **Addition only:** a new `HeroArc.tsx` component (layered SVG rings +
  glow + particles + a slow-moving light-trail dot) is mounted at the
  bottom of the existing `HeroBackground.tsx`, on top of/alongside its
  current content — not replacing it.

## Components touched

- `components/HeroArc.tsx` — **new**. Self-contained SVG arc/ring visual:
  4 concentric circles (only the upper half of each drawn, via a center
  pushed to the bottom edge of the viewBox), `feGaussianBlur` bloom glow
  behind crisp segmented rings, small pulsing particles, one light-trail
  dot animating slowly along the outer ring. Takes an `isLight` prop to
  swap the gradient/opacity for the two themes. No new dependencies
  (`motion`, already used elsewhere in the file).
- `components/HeroBackground.tsx` — small addition only: import
  `HeroArc`, render `<HeroArc isLight={isLight} />` near the end of the
  existing markup. No existing JSX removed.
- `components/HeroSection.tsx` — **untouched**.

## Out of scope

- Any change to `HeroSection.tsx` content/layout/copy/cards.
- Navbar, any section below the hero.
- Site-wide theme system changes.
