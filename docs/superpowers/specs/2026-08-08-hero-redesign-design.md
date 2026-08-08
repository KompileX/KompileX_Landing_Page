# Hero Section Redesign — Design Spec

Date: 2026-08-08
Branch: `feature/hero_modification`

## Goal

Redesign KompileX landing page hero section into a dark, cinematic,
futuristic tech-startup hero (inspired by a Fluidity-style reference image),
while keeping brand tone enterprise/professional (not crypto/Web3).

Scope: **hero section only**. Navbar and all sections below the hero
(tech ticker included) are untouched.

## Decisions

- **Theme**: hero is always dark/cinematic, regardless of site-wide
  light/dark toggle. Rest of the site keeps `ThemeContext` as-is.
- **Feature cards**: the 4 floating cards (Web & Mobile, APIs, Cloud,
  Support) are removed from the hero for a clean, centered composition
  matching the reference.
- **Mouse-trail tech icon effect**: removed (not part of target design,
  conflicts with clean minimal composition).
- **Avatars**: 4–5 generated placeholder avatar images (neutral,
  professional, diverse), saved to `public/images/avatars/`, used in a
  small overlapping-circle row above the headline.
- **Copy**:
  - Badge row: avatar stack + "Trusted by growing teams"
  - Headline (2 lines): "Engineering Powerful" / "Digital Experiences"
  - Subtitle: "We design, build, and ship full-stack products for
    startups and teams who need to move fast."
  - Primary CTA: "Start a Project" → `#contact`
  - Secondary CTA: "See Our Work" → `#work`
- **Arc visual technique**: layered SVG (multiple concentric stroked arc
  paths, varying radius/opacity/dash + `feGaussianBlur` glow filter),
  radial-gradient glow layers behind/around it, small floating particles,
  slow CSS rotation on outer ring layers. Matches existing codebase
  pattern already used in `HeroBackground.tsx` (SVG paths + blur filter +
  `motion` path animation) — no new dependencies.
- **Colors**: electric blue/cyan primary glow, subtle purple/magenta
  secondary highlights (KompileX's existing violet `#8c45ff` accent
  extended toward cyan for the arc, keeping brand continuity rather than
  switching to a pure Web3 palette).

## Components touched

- `components/HeroSection.tsx` — rewritten. Layout: badge row (avatars +
  text) → 2-line headline → subtitle → CTA row → arc visual anchored at
  bottom of section. Drops `isLight`/`featureCards`/`useTheme` usage in
  hero (hero is always-dark). `min-h-screen` (100vh) section, content
  vertically centered in upper-middle portion. Tech ticker block below
  the `<section>` stays unchanged.
- `components/HeroBackground.tsx` — rewritten. Renders: dark navy/black
  base gradient, radial blue glow (center/lower), star-field (small
  twinkling dots, upper area), ambient particles (reuse existing
  particle pattern), and mounts the new arc visual.
- `components/HeroArc.tsx` — **new**. Self-contained SVG component for
  the glowing arc/ring centerpiece: 4–5 concentric arc paths (only upper
  ~55–65% of each circle drawn, i.e. large radius circles clipped near
  viewport bottom), radial + linear gradients (cyan → blue → purple),
  `feGaussianBlur` bloom filters, small glowing particle dots along/near
  the arc with slow orbit via `motion`, one or two thin "light trail"
  segments animating slowly along a path (`motion` `pathLength`/offset
  animation, same technique as the existing connector-line animation in
  `HeroBackground.tsx`).
- `public/images/avatars/` — new generated avatar images (4–5, small
  square/circular-croppable PNGs).

## Layout / responsive

- Desktop: full `100vh` hero, headline ~700–850px max width, large arc
  (viewBox scaled via container, e.g. `min(90vw, 900px)` wide) anchored
  at bottom, ~55–65% visible (rest clipped below viewport/section edge).
- Tablet: typography and arc scale down proportionally via Tailwind
  breakpoints, same structure.
- Mobile: headline `text-[42px]`–`text-[52px]` equivalent Tailwind
  scale, subtitle `text-base`/`text-lg`, CTAs stack vertically
  (`flex-col`), arc simplified (fewer concentric paths / particles) but
  still visible at bottom, not overwhelming content.

## Animation

- Content: fade-up entrance (badge → headline → subtitle → CTAs,
  staggered), reusing `motion` (already a dependency, same as rest of
  site).
- Background: slow pulsing glow opacity, twinkling stars (CSS keyframes,
  matches existing `hero-particle`-style keyframe approach in
  `app/globals.css`), slow outer-ring rotation.
- Arc: particles drift slowly, one light-trail segment loops slowly
  around an arc path.
- CTAs: existing hover transition style kept/extended (scale/opacity or
  border-glow on hover), pill shape.
- All animation kept subtle/performant — no new heavy libraries, reuse
  `motion` + CSS keyframes exactly as the current codebase already does
  in `app/globals.css` (`hero-blob`, `hero-grid-pan`, `hero-ring-spin`,
  `hero-particle` keyframes) — new keyframes added there following the
  same naming convention.

## Out of scope

- Navbar changes.
- Any section below hero (About, Stack, tech ticker, etc.) — untouched.
- Site-wide theme system changes.
