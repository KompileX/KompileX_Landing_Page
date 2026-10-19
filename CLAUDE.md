# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Commands

```bash
npm run dev      # Next dev server
npm run build    # Production build
npm run start    # next start
npx tsc --noEmit # Typecheck
```

No tests. `npm run dev` and `.next/` can be shared by several running dev servers; to test
without disturbing them, use another port and a separate `distDir`.

## Stack

Next.js 15 App Router, React 18, TypeScript, Tailwind 3, `motion` (motion/react), `lenis`
(smooth scroll), `lucide-react`, `sonner`. **Server mode** (not a static export): route handlers
and middleware are in use.

## Layout

- `app/page.tsx` – the single-page site, an ordered list of sections wrapped in `Reveal`.
- `components/layout/` – `Navbar` (sticky, scroll-spy, real logo), `Footer`.
- `components/sections/home/` – one file per section (ids: `services`, `process`, `devops`, `work`,
  `why`, `technologies`, `careers`, `faq`, `contact`). Keep navbar items in sync with these ids.
- `components/effects/` – `AuroraBackground`, `ScrollProgress`, `Reveal`, `SmoothScroll`.
- `components/chat/AIChatWidget.tsx` – bottom-right AI chat; backend is `app/api/chat/route.ts`
  (needs `GROQ_API_KEY`; Google Calendar booking via `lib/googleCalendar.ts`).
- `components/case-study/`, `components/CaseStudyDetailClient.tsx`, `lib/case-studies-data.ts` – case studies.
- `lib/content/tech.ts` – tech marquee data; logos are SVGs in `public/tech/`.

## Admin / theme

- `/admin` and the floating theme studio are protected by `middleware.ts` + `lib/adminAuth.ts`
  (httpOnly signed cookie). Set `ADMIN_PASSWORD` (and optionally `ADMIN_SESSION_SECRET`) in env.
- Theme edits are stored in the admin's browser (`localStorage`) via `context/ThemeCustomizerContext.tsx`;
  visitors always see the defaults.
- All colours come from `--kpx-*` CSS variables (`app/globals.css`, `lib/theme-config.ts`).
  shadcn-style tokens (`bg-card`, `text-foreground`…) are bridged to them at the bottom of `globals.css`.
- `app/redesign-exact.css` holds the page styles (`.btn`, `.sec`, `.wrap`, `kx-*`). It still contains
  three pasted stylesheet copies that could be merged.

## Content rules

Do not describe the company as Dhaka-based on the public site (legal pages may keep the address).
