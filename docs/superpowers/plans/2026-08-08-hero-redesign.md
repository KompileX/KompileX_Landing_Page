# Hero Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the KompileX landing page hero section into a dark, cinematic, futuristic hero with a layered glowing SVG arc centerpiece, matching `docs/superpowers/specs/2026-08-08-hero-redesign-design.md`.

**Architecture:** Three collaborating client components — `HeroSection.tsx` (layout/copy/CTAs, always-dark, no more `isLight` branching), `HeroBackground.tsx` (starfield + radial glow + ambient particles, zero required props besides an optional scroll-parallax value), and a new `HeroArc.tsx` (self-contained layered SVG arc/ring visual). Built incrementally: layout skeleton first (with a throwaway background placeholder), then the real atmospheric background, then the arc, then a responsive/cleanup pass. This project has **no test framework** (`package.json` has no test script/library) — "tests" in this plan are browser-based visual checks via the preview tooling (dev server + screenshot/console/resize), following the codebase's existing convention of visual-only verification.

**Tech Stack:** Next.js 15, React 18, TypeScript, Tailwind CSS 3, `motion` (Framer Motion successor, already a dependency — no new packages), `lucide-react` icons.

## Global Constraints

- Hero is **always dark/cinematic** — do not read `useTheme()`/`isLight` inside `HeroSection.tsx` or `HeroBackground.tsx`.
- No new npm dependencies. Use `motion`, `lucide-react`, Tailwind, and raw SVG only.
- No AI-generated image assets — avatar row uses inline gradient circles + a `lucide-react` `User` icon (Higgsfield image-gen session was unavailable this session).
- Scope is the hero section only: do not touch `Navbar.tsx`, `AboutSection.tsx`, or any section below the hero. The tech-ticker block at the bottom of `HeroSection.tsx` (outside the `<section>`) stays as-is — do not modify it.
- Colors: cyan `#22d3ee` → indigo `#6366f1` → purple `#a855f7` gradient for the arc; base background `#05050f` → `#0a0a22`. These are literal hex values (not the shared `--accent-*` CSS vars, since those flip with the site-wide light/dark toggle and the hero must not).
- Follow existing file conventions: `'use client'` at top, deterministic index-based generation for any repeated decorative elements (no `Math.random()` in render — see `PARTICLES` pattern already in the old `HeroBackground.tsx`), keyframes added to `app/globals.css` under the `/* ==================== HERO BACKGROUND ... ==================== */` block and also added to the existing `@media (prefers-reduced-motion: reduce)` block right below it (`app/globals.css:589-598`).

---

## Task 1: Hero layout skeleton (copy, avatars, CTAs) on a placeholder dark background

**Files:**
- Create: `.claude/launch.json`
- Modify: `components/HeroSection.tsx` (full rewrite)
- Modify: `components/HeroBackground.tsx` (temporary placeholder — full rewrite, replaced again in Task 2)

**Interfaces:**
- Produces: `HeroBackground({ parallaxY }: { parallaxY?: MotionValue<number> })` — the prop signature every later task must keep. No `isLight` prop anymore.
- Produces: `HeroSection` default export — no props, unchanged external usage from `app/page.tsx` (already `<HeroSection />`, no edit needed there).

- [ ] **Step 1: Add a dev server launch config**

Create `.claude/launch.json`:

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "kompilex-dev",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "port": 3000
    }
  ]
}
```

- [ ] **Step 2: Replace `HeroBackground.tsx` with a temporary placeholder**

This keeps the app compiling while Task 1 focuses on layout. Task 2 replaces the body of this file with the real starfield/glow background — the prop signature below must stay stable.

```tsx
'use client'

import { motion, type MotionValue } from 'motion/react'

interface HeroBackgroundProps {
  parallaxY?: MotionValue<number>
}

export default function HeroBackground({ parallaxY }: HeroBackgroundProps) {
  return (
    <motion.div className="absolute inset-0" style={parallaxY ? { y: parallaxY } : undefined}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#06061a] to-[#0a0a22]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(99,102,241,0.25),transparent_70%)]" />
    </motion.div>
  )
}
```

- [ ] **Step 3: Rewrite `HeroSection.tsx`**

```tsx
'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { User } from 'lucide-react'
import HeroBackground from './HeroBackground'

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'GraphQL', 'AWS', 'Docker', 'Vercel',
]

const AVATAR_GRADIENTS = [
  'from-cyan-400 to-blue-500',
  'from-blue-500 to-violet-500',
  'from-violet-500 to-fuchsia-500',
  'from-fuchsia-500 to-purple-600',
  'from-purple-600 to-cyan-400',
]

const contentVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={sectionRef}
        className="relative flex min-h-screen flex-col overflow-hidden bg-[#05050f]"
      >
        <HeroBackground parallaxY={parallaxY} />

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="show"
          className="container relative z-10 mx-auto flex flex-1 flex-col items-center justify-center px-4 pb-48 pt-28 text-center md:pb-64 md:pt-32"
        >
          {/* Badge: avatars + label */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <div className="flex -space-x-3">
              {AVATAR_GRADIENTS.map((gradient, i) => (
                <div
                  key={i}
                  className={`flex size-8 items-center justify-center rounded-full bg-gradient-to-br ${gradient} ring-2 ring-[#05050f]`}
                >
                  <User className="size-3.5 text-white/90" strokeWidth={2.5} />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-white/50">Trusted by growing teams</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-balance text-[42px] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px] lg:leading-[1.05]"
          >
            Engineering Powerful
            <br />
            <span className="text-white/70">Digital Experiences</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-base text-white/55 sm:text-lg"
          >
            We design, build, and ship full-stack products for startups and teams who need to move fast.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a14] transition-transform duration-200 hover:scale-[1.04] hover:bg-white/90"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-colors duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              See Our Work
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Tech ticker ── */}
      <div className="w-full py-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-5">
            <div className="flex-1 md:flex-none">
              <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">Technologies we work with</p>
            </div>
            <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                initial={{ x: '-50%' }}
                animate={{ x: 0 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                className="-translate-x-1/2 flex flex-none gap-4 pr-4"
              >
                {[...technologies, ...technologies].map((name, i) => (
                  <div key={i} className="flex h-8 items-center whitespace-nowrap rounded-full border border-border px-4">
                    <span className="text-sm font-medium text-muted-foreground">{name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
```

Note: the tech-ticker block (everything after `{/* ── Tech ticker ── */}`) is copied unchanged from the current file — do not alter it.

- [ ] **Step 4: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors referencing `HeroSection.tsx` or `HeroBackground.tsx`. (Pre-existing unrelated errors elsewhere in the repo, if any, are out of scope.)

- [ ] **Step 5: Visual check via dev server**

Use the browser preview tool: start the `kompilex-dev` server from `.claude/launch.json`, navigate to `/`, and confirm:
- Hero fills the viewport (100vh), dark background, no console errors (`read_console_messages`).
- Avatar row + "Trusted by growing teams" renders above the headline.
- Headline reads "Engineering Powerful" / "Digital Experiences" on two lines, subtitle below, two pill CTA buttons below that.
- Content is vertically centered in the upper-middle portion of the section (empty space below reserved for the arc in Task 3).

- [ ] **Step 6: Commit**

```bash
git add .claude/launch.json components/HeroSection.tsx components/HeroBackground.tsx
git commit -m "feat(hero): rebuild hero layout, copy, and CTAs on dark background"
```

---

## Task 2: Atmospheric background — starfield, radial glow, ambient particles

**Files:**
- Modify: `components/HeroBackground.tsx` (replace placeholder body from Task 1 — same prop signature)
- Modify: `app/globals.css` (add `hero-star-twinkle` / `hero-glow-pulse` keyframes near `app/globals.css:589` block)

**Interfaces:**
- Consumes: `HeroBackgroundProps { parallaxY?: MotionValue<number> }` from Task 1 — unchanged.
- Produces: same default export/signature; Task 3 will add one import + one JSX line to this file to mount `HeroArc`, so keep the closing structure simple (a single top-level `<div className="absolute inset-0 overflow-hidden">...</div>`).

- [ ] **Step 1: Add starfield/glow-pulse keyframes to `app/globals.css`**

Insert right after the existing `.hero-ring-spin-reverse { ... }` line (`app/globals.css:587`), before the `@media (prefers-reduced-motion: reduce)` block:

```css
@keyframes hero-star-twinkle {
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50% { opacity: 0.9; transform: scale(1.15); }
}

@keyframes hero-glow-pulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 0.85; }
}

.hero-star { animation: hero-star-twinkle 4s ease-in-out infinite; }
.hero-glow-pulse { animation: hero-glow-pulse 8s ease-in-out infinite; }
```

Then extend the existing reduced-motion block (`app/globals.css:589-598`) so it reads:

```css
@media (prefers-reduced-motion: reduce) {
  .hero-blob-1,
  .hero-blob-2,
  .hero-grid-pan,
  .hero-particle,
  .hero-ring-spin,
  .hero-ring-spin-reverse,
  .hero-star,
  .hero-glow-pulse {
    animation: none;
  }
}
```

- [ ] **Step 2: Replace `HeroBackground.tsx` body with the real background**

```tsx
'use client'

import { useMemo } from 'react'
import { motion, type MotionValue } from 'motion/react'

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: `${(i * 17.3) % 100}%`,
  top: `${(i * 29.7) % 62}%`,
  size: i % 5 === 0 ? 2 : 1,
  duration: 3 + (i % 4) * 1.1,
  delay: (i % 10) * 0.3,
}))

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${20 + ((i * 53) % 70)}%`,
  size: 2 + (i % 3),
  duration: 6 + (i % 5) * 1.4,
  delay: (i % 7) * 0.4,
  color: i % 2 === 0 ? '#22d3ee' : '#a78bfa',
}))

interface HeroBackgroundProps {
  parallaxY?: MotionValue<number>
}

export default function HeroBackground({ parallaxY }: HeroBackgroundProps) {
  const stars = useMemo(() => STARS, [])
  const particles = useMemo(() => PARTICLES, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#06061a] to-[#0a0a22]" />

      {/* Radial glow, center-lower */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_100%,rgba(34,211,238,0.14),transparent_70%)]" />
      <div className="hero-glow-pulse absolute inset-0 bg-[radial-gradient(45%_40%_at_50%_105%,rgba(99,102,241,0.28),transparent_75%)]" />

      {/* Parallax layer: stars + particles */}
      <motion.div className="absolute inset-0" style={parallaxY ? { y: parallaxY } : undefined}>
        <div className="absolute inset-0">
          {stars.map((s) => (
            <span
              key={s.id}
              className="hero-star absolute rounded-full bg-white"
              style={{
                left: s.left,
                top: s.top,
                width: s.size,
                height: s.size,
                animationDuration: `${s.duration}s`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 hidden sm:block">
          {particles.map((p) => (
            <span
              key={p.id}
              className="hero-particle absolute rounded-full"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 6px 1px ${p.color}`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no new errors.

- [ ] **Step 4: Visual check via dev server**

Reload the hero page in the browser preview. Confirm: dark navy/black base, soft blue radial glow pulsing near the bottom-center, small twinkling stars in the upper area, ambient cyan/violet particles drifting (desktop viewport). Check `read_console_messages` for errors.

- [ ] **Step 5: Commit**

```bash
git add components/HeroBackground.tsx app/globals.css
git commit -m "feat(hero): add starfield, radial glow, and ambient particles to hero background"
```

---

## Task 3: Glowing SVG arc centerpiece

**Files:**
- Create: `components/HeroArc.tsx`
- Modify: `components/HeroBackground.tsx` (mount `HeroArc`)
- Modify: `app/globals.css` (add `hero-arc-rotate` keyframe)

**Interfaces:**
- Produces: `HeroArc` — default export, no props, self-contained.
- Consumes: nothing from other components; mounted as a sibling at the end of `HeroBackground.tsx`'s root `<div>`.

- [ ] **Step 1: Add the arc-rotation keyframe to `app/globals.css`**

Insert next to the `hero-star-twinkle`/`hero-glow-pulse` keyframes added in Task 2:

```css
@keyframes hero-arc-rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.hero-arc-rotate { animation: hero-arc-rotate 140s linear infinite; }
```

Add `.hero-arc-rotate` to the reduced-motion list from Task 2 so it reads:

```css
@media (prefers-reduced-motion: reduce) {
  .hero-blob-1,
  .hero-blob-2,
  .hero-grid-pan,
  .hero-particle,
  .hero-ring-spin,
  .hero-ring-spin-reverse,
  .hero-star,
  .hero-glow-pulse,
  .hero-arc-rotate {
    animation: none;
  }
}
```

- [ ] **Step 2: Create `components/HeroArc.tsx`**

```tsx
'use client'

import { motion } from 'motion/react'

const CX = 550
const CY = 560

const RINGS = [
  { r: 340, width: 2.5, opacity: 0.85, dash: undefined as string | undefined },
  { r: 400, width: 1.5, opacity: 0.55, dash: '1 3' },
  { r: 460, width: 1.5, opacity: 0.4, dash: undefined },
  { r: 520, width: 1, opacity: 0.3, dash: '2 14' },
]

// First 2 rings always render; the outer 2 only add detail on larger screens.
const CORE_RINGS = RINGS.slice(0, 2)
const EXTRA_RINGS = RINGS.slice(2)

// Precomputed points along the r=520 ring (upper semicircle, θ 190°→350°) for the light trail to travel.
const TRAIL_CX = [38.0, 99.7, 215.7, 372.2, 550, 727.8, 884.3, 1000.3, 1062.1]
const TRAIL_CY = [469.7, 300.0, 161.7, 71.4, 40, 71.4, 161.7, 300.0, 469.7]

const PARTICLE_ANGLES = [200, 218, 236, 254, 272, 290, 308, 326, 344]
const PARTICLES = PARTICLE_ANGLES.map((deg, i) => {
  const rad = (deg * Math.PI) / 180
  const r = 380 + (i % 3) * 45
  return {
    id: i,
    cx: CX + r * Math.cos(rad),
    cy: CY + r * Math.sin(rad),
    size: 2 + (i % 3),
    delay: i * 0.35,
  }
})

// First 4 particles always render; the rest only add density on larger screens.
const CORE_PARTICLES = PARTICLES.slice(0, 4)
const EXTRA_PARTICLES = PARTICLES.slice(4)

export default function HeroArc() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-1/2 w-[min(900px,150vw)] -translate-x-1/2 sm:w-[min(1400px,180vw)]">
      <svg viewBox="0 0 1100 560" className="h-auto w-full" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id="arc-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <filter id="arc-blur-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="arc-blur-tight" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Soft bloom pass (static, wider strokes) */}
        <g filter="url(#arc-blur-soft)">
          {CORE_RINGS.map((ring) => (
            <circle key={`glow-${ring.r}`} cx={CX} cy={CY} r={ring.r} fill="none" stroke="url(#arc-gradient)" strokeWidth={ring.width * 3} opacity={ring.opacity * 0.5} />
          ))}
          <g className="hidden sm:inline">
            {EXTRA_RINGS.map((ring) => (
              <circle key={`glow-${ring.r}`} cx={CX} cy={CY} r={ring.r} fill="none" stroke="url(#arc-gradient)" strokeWidth={ring.width * 3} opacity={ring.opacity * 0.5} />
            ))}
          </g>
        </g>

        {/* Crisp ring pass — slow rotation */}
        <g className="hero-arc-rotate" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          {CORE_RINGS.map((ring) => (
            <circle key={ring.r} cx={CX} cy={CY} r={ring.r} fill="none" stroke="url(#arc-gradient)" strokeWidth={ring.width} strokeDasharray={ring.dash} strokeLinecap="round" opacity={ring.opacity} filter="url(#arc-blur-tight)" />
          ))}
          <g className="hidden sm:inline">
            {EXTRA_RINGS.map((ring) => (
              <circle key={ring.r} cx={CX} cy={CY} r={ring.r} fill="none" stroke="url(#arc-gradient)" strokeWidth={ring.width} strokeDasharray={ring.dash} strokeLinecap="round" opacity={ring.opacity} filter="url(#arc-blur-tight)" />
            ))}
          </g>
        </g>

        {/* Orbiting particles (pulse in place) */}
        {CORE_PARTICLES.map((p) => (
          <motion.circle
            key={p.id}
            cx={p.cx}
            cy={p.cy}
            r={p.size}
            fill="#e0f2ff"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.9, 0.2], r: [p.size, p.size * 1.6, p.size] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
            style={{ filter: 'url(#arc-blur-tight)' }}
          />
        ))}
        <g className="hidden sm:inline">
          {EXTRA_PARTICLES.map((p) => (
            <motion.circle
              key={p.id}
              cx={p.cx}
              cy={p.cy}
              r={p.size}
              fill="#e0f2ff"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.9, 0.2], r: [p.size, p.size * 1.6, p.size] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
              style={{ filter: 'url(#arc-blur-tight)' }}
            />
          ))}
        </g>

        {/* Light trail traveling along the outer ring */}
        <motion.circle
          r={4}
          fill="#a5f3fc"
          animate={{ cx: TRAIL_CX, cy: TRAIL_CY }}
          transition={{ duration: 9, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
          style={{ filter: 'url(#arc-blur-tight)' }}
        />
      </svg>
    </div>
  )
}
```

- [ ] **Step 3: Mount `HeroArc` in `HeroBackground.tsx`**

In `components/HeroBackground.tsx`, add the import at the top:

```tsx
import HeroArc from './HeroArc'
```

And add `<HeroArc />` as the last child of the root `<div className="absolute inset-0 overflow-hidden">`, **after** the closing `</motion.div>` of the parallax layer (i.e. as a sibling, not nested inside it — this keeps the arc anchored to the bottom edge instead of drifting with scroll parallax):

```tsx
      </motion.div>

      <HeroArc />
    </div>
  )
}
```

- [ ] **Step 4: Type-check**

Run: `npx tsc --noEmit`
Expected: no new errors.

- [ ] **Step 5: Visual check via dev server**

Reload the hero page. Confirm: a large glowing multi-ring arc emerges from the bottom of the viewport, cyan→indigo→purple gradient, soft bloom glow behind crisp segmented rings, small particles near the arc pulsing, one brighter dot slowly traveling back and forth along the outer ring, rings rotating very slowly. Screenshot it. Check `read_console_messages` for errors (SVG filter/gradient typos surface as rendering issues, not console errors, so visually confirm the gradient/glow actually render — not flat black rings).

- [ ] **Step 6: Commit**

```bash
git add components/HeroArc.tsx components/HeroBackground.tsx app/globals.css
git commit -m "feat(hero): add layered glowing SVG arc centerpiece"
```

---

## Task 4: Responsive pass, cleanup, and final verification

**Files:**
- Modify: `components/HeroSection.tsx` (only if responsive check finds issues)
- Modify: `components/HeroArc.tsx` (only if responsive check finds issues)

**Interfaces:** None new — this task only verifies and polishes Tasks 1–3.

- [ ] **Step 1: Check for dead code / unused imports**

Run: `npm run lint`
Expected: no lint errors in `components/HeroSection.tsx`, `components/HeroBackground.tsx`, `components/HeroArc.tsx`. Specifically confirm no leftover references to `useTheme`, `isLight`, `featureCards`, `Code2`/`Server`/`Cloud`/`LifeBuoy` icon imports, or the old mouse-trail tech-icon logic (`TECH_ICONS`, `handleMouseMove`, `AnimatePresence` trail) — all of that should be gone from the hero files per the spec.

- [ ] **Step 2: Desktop check**

Using the browser preview tool, `resize_window` to `preset: "desktop"` (1280×800), reload, and confirm: full 100vh hero, large headline, large arc visible and well-proportioned, no horizontal scrollbar (`javascript_tool`: `document.documentElement.scrollWidth <= document.documentElement.clientWidth`).

- [ ] **Step 3: Tablet check**

`resize_window` to `preset: "tablet"` (768×1024), reload, confirm typography and arc scale down proportionally, layout doesn't break, no horizontal overflow.

- [ ] **Step 4: Mobile check**

`resize_window` to `preset: "mobile"` (375×812), reload, confirm: headline in the ~42–52px range and readable, subtitle 16–18px, CTA buttons stacked vertically, arc still visible at the bottom but simplified (fewer rings/particles from the `hidden sm:inline` groups in `HeroArc.tsx`), no horizontal overflow, avatar row doesn't wrap awkwardly.

- [ ] **Step 5: Cross-browser sanity via console + network**

`read_console_messages` (no errors/warnings) and `read_network_requests` (no 404s) at each of the three breakpoints above.

- [ ] **Step 6: Take final screenshots**

`computer` `{action: "screenshot"}` at desktop and mobile sizes for the record.

- [ ] **Step 7: Commit any fixes**

Only if Steps 2–5 required changes:

```bash
git add components/HeroSection.tsx components/HeroArc.tsx
git commit -m "fix(hero): responsive polish for hero arc and layout"
```

If no changes were needed, skip this step — Task 4 is verification-only.

---

## Self-Review Notes

- **Spec coverage:** dark-only hero (Task 1/2), dropped feature cards + mouse-trail effect (Task 1 rewrite doesn't reintroduce them, Task 4 Step 1 double-checks), avatar row with icon placeholders (Task 1), 2-line headline + subtitle + CTAs (Task 1), starfield/glow/particles (Task 2), layered SVG arc with bloom/particles/light-trail/slow-rotation (Task 3), responsive scaling incl. simplified mobile arc (Task 3 built-in + Task 4 verified), reduced-motion support for new CSS keyframes (Tasks 2–3), tech ticker untouched (Task 1 explicit note), no new dependencies (Global Constraints) — all covered.
- **Type consistency:** `HeroBackgroundProps { parallaxY?: MotionValue<number> }` is introduced in Task 1 and never changes shape in Tasks 2–3. `HeroArc` takes no props throughout.
- **Scope:** single subsystem (hero section), no decomposition needed.
