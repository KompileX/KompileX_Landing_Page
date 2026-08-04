# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next dev server (http://localhost:3000)
npm run build    # Static export -> dist/
npm run start    # Serve production build
npm run lint     # next lint
npx tsc --noEmit # Typecheck (build does this too; tsconfig is noEmit)
```

Both `bun.lock` and `package-lock.json` exist. There are no tests and no test runner.

## Stack

Next.js 15 App Router + React 18 + TypeScript (strict) + Tailwind 3. UI primitives are
shadcn/ui-style local components on Radix (`components/ui/`). Animation is `motion`
(Framer Motion v12, imported from `motion/react`). Icons: `lucide-react`. Toasts: `sonner`.

`next.config.ts` sets `output: 'export'` + `distDir: 'dist'` + `images.unoptimized`.
**Static export only** — no route handlers, no server actions, no dynamic rendering, no
Next middleware. Anything needing a backend must be a client-side fetch or a `mailto:` link.

## Architecture

Single-page landing site. `app/page.tsx` is just an ordered list of section components; each
section in `components/` is self-contained and owns its own copy, data, and layout. Content
lives in typed `const` arrays at the top of each section file — there is no CMS or data layer.

Section anchors and the `navItems` array in [Navbar.tsx](components/Navbar.tsx) are the routing
model: `#about`, `#services` (FeaturesSection), `#work` (StackSection), `#process`
(HowItWorksSection), `#faq`, `#contact`. `TechStackSection` (`#tech-stack`) and
`UseCasesSection` (`#industries`) render but are not linked from the navbar. Keep these in sync
when adding or renaming a section.

Nearly every section is `'use client'` — they use `motion` scroll hooks, `useTheme`, or form
state. Only `app/page.tsx` and `app/layout.tsx` are server components.

## Theming — read before touching styles

Two coexisting token families, both defined in [app/globals.css](app/globals.css):

1. **shadcn tokens** — `--background`, `--foreground`, `--card`, `--primary`, `--secondary`,
   `--muted`, `--accent`, `--border`, `--input`, `--ring`, `--radius`, plus project extras
   `--button-border` and `--light` (the blue used by the glow blobs). Exposed through
   `tailwind.config.js` as `bg-background`, `text-muted-foreground`, `border-border`, etc.
   **Use these for new work.**
2. **Legacy KompileX tokens** — `--bg-primary`, `--text-primary/secondary/tertiary`,
   `--border-primary`, `--accent-primary/secondary/blue`, `--input-*`, `--scrollbar-*`, and the
   `.btn-primary-blue` / `.btn-outline` / `.btn-cta` / `.feature-card` / `.input-dark` component
   classes. Still referenced by older sections. Don't extend; migrate opportunistically.

Theme switching is **`data-theme="light"` on `<html>`**, set by
[ThemeContext.tsx](context/ThemeContext.tsx) — *not* Tailwind's `dark:` variant and not a
`.dark` class. Tailwind `dark:` classes will not respond to the toggle. Dark is the default
(no attribute); light is the opt-in override block in `globals.css`.

The Tailwind color values are raw `var(--x)` hex, not `<alpha-value>` templates, so Tailwind
cannot inject alpha — treat modifiers like `bg-background/90` as approximate. For real
translucency use the rgba-valued legacy vars or an explicit `rgba()`.

`ThemeProvider` renders `children` *without* the context provider until mounted, so `useTheme()`
returns the default `'dark'` on first paint. Both `<html>` and `<body>` set
`suppressHydrationWarning` for this reason.

## Section conventions

Match these when adding or editing a section:

- Wrapper: `<section id="…" className="w-full py-14 lg:py-20">`, inner container
  `max-w-screen-xl mx-auto px-4 md:px-8` (some use `max-w-7xl`). Vertical rhythm is
  deliberately tight — `py-14 lg:py-20` everywhere.
- Entry animation: `motion.section` / `motion.div` with
  `initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}`
  and a spring transition with `bounce: 0`.
- Heading: pill badge (`rounded-full border text-xs text-muted-foreground` + pulsing dot), then
  `h2` with `bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent`.
- Ambient blue glow: absolutely positioned `bg-light blur-[70px]` rotated bar, `pointer-events-none`.
- `cn()` from [lib/utils.ts](lib/utils.ts) for class merging; `cva` variants for anything reusable.

## Toasts

Two systems are wired up. Use **`toast` from `sonner`** (the `<Toaster richColors />` in
[layout.tsx](app/layout.tsx)) for new code. [components/Toast.tsx](components/Toast.tsx) is a
hand-rolled `ToastProvider`/`useToast` backed by the `.gooey-toast*` CSS in `globals.css`; it
still wraps the page but nothing calls it. Prefer sonner rather than adding to it.

## Stale artifacts — do not trust

The repo was migrated from a Vite + vanilla-TS site and the old files were left in place:

- **`README.md` describes the pre-migration Vite stack** (port 5173, `bun run preview`,
  `src/scripts/main.ts`, waitlist API). It is wrong about the current build; prefer this file.
- `src/`, `vite.config.ts`, `.gitignore.web` — dead. `tsconfig.json` explicitly excludes `src`
  and `vite.config.ts`.
- `.env.example` / `VITE_API_BASE_URL` (passed through in `next.config.ts`) is left over from the
  waitlist API. Nothing reads it — `ContactSection` opens a `mailto:` to `hello@kompilex.dev`.
- `docker-compose.yml` (Postgres + Redis) belongs to the backend, not this static site.
- `claudePlan.md` / `webPlan.md` are historical plans for the *old* AI-transcription-product
  positioning. The live copy has since been rewritten toward a dev-studio/portfolio framing
  (see `StackSection`, `AboutSection`), so treat those docs as outdated content specs.
- `public/images/screenshots/` are product screenshots from that earlier positioning; most are
  now unreferenced.

Metadata in `app/layout.tsx` still carries the old AI-transcription SEO copy while the page body
sells a studio — flag rather than silently rewrite, since which one is canonical is a content call.

## Design skill

A `frontend-design` skill is vendored per-agent-tool (`.claude/`, `.cursor/`, `.agent/`,
`.agents/`, `.windsurf/` — all identical copies). Consult
[.claude/skills/frontend-design/SKILL.md](.claude/skills/frontend-design/SKILL.md) for UI work.
