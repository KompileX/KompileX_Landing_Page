'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react'
import { ArrowUp } from 'lucide-react'

const CONTACT_EMAIL = 'contact@kompilex.com'
const WORDMARK = 'KOMPILEX'
const TAGLINE = 'Four engineers. One studio. Software that ships.'

const linkGroups = [
  {
    title: 'Studio',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Our Work', href: '#work' },
      { label: 'How We Work', href: '#process' },
      { label: 'Tech Stack', href: '#tech-stack' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Industries', href: '#industries' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com', external: true },
      { label: 'X / Twitter', href: 'https://x.com', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
      { label: 'Email us', href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
]

/* ---------- Dhaka local time ---------- */

function useDhakaTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date())

    setTime(format())
    const id = setInterval(() => setTime(format()), 20_000)
    return () => clearInterval(id)
  }, [])

  return time
}

/* ---------- Procedural cloud skyline (no image asset, theme-aware via CSS vars) ---------- */

function FooterClouds() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1600 480"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <filter id="footerCloudTexture" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="2" seed="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="24" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter="url(#footerCloudTexture)">
        <path
          fill="var(--footer-cloud-back)"
          opacity="0.9"
          d="M0,480 L0,190 Q70,140 150,210 Q260,300 380,420 Q480,400 600,420 Q720,400 850,420 Q970,400 1100,420 Q1220,400 1340,420 Q1430,330 1490,230 Q1540,160 1600,200 L1600,480 Z"
        />
        <path
          fill="var(--footer-cloud-front)"
          d="M0,480 L0,380 Q70,260 150,290 Q230,310 300,400 Q380,220 460,270 Q540,320 620,400 Q700,240 790,275 Q880,320 970,390 Q1050,230 1140,270 Q1220,330 1300,400 Q1380,260 1460,290 Q1530,320 1600,350 L1600,480 Z"
        />
      </g>
    </svg>
  )
}

/* ---------- One letter of the rising wordmark ---------- */

function RisingLetter({
  char,
  index,
  total,
  progress,
  reduced,
}: {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
  reduced: boolean
}) {
  // Each letter starts a little later than the one before it.
  const start = 0.1 + (index / total) * 0.3
  const y = useTransform(progress, [start, Math.min(start + 0.45, 1)], ['115%', '0%'])
  const opacity = useTransform(progress, [start, Math.min(start + 0.2, 1)], [0, 1])

  return (
    <span className="inline-block overflow-hidden pb-[0.06em] align-bottom">
      <motion.span
        className="inline-block will-change-transform"
        style={reduced ? undefined : { y, opacity }}
      >
        {char}
      </motion.span>
    </span>
  )
}

export default function Footer() {
  const reduced = useReducedMotion() ?? false
  const time = useDhakaTime()
  const year = new Date().getFullYear()

  const trackRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [footerHeight, setFooterHeight] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => setFooterHeight(entry.contentRect.height))
    observer.observe(el)
    setFooterHeight(el.getBoundingClientRect().height)

    const onResize = () => setViewportHeight(window.innerHeight)
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Curtain mode pins the footer behind the page content. Only safe while the footer
  // fits the viewport — taller than that and its top would be scrolled out of reach,
  // so fall back to an ordinary in-flow footer (the wordmark still rises).
  const curtain = footerHeight > 0 && viewportHeight > 0 && footerHeight <= viewportHeight

  // Progress 0 -> 1 as the footer is revealed.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start end', 'end end'],
  })
  const staticProgress = useMotionValue(1)
  const progress = reduced ? staticProgress : scrollYProgress

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <div ref={trackRef} style={curtain ? { height: footerHeight } : undefined}>
      <footer
        className={`w-full overflow-hidden bg-background ${
          curtain ? 'fixed bottom-0 left-0 z-0' : 'relative'
        }`}
      >
        <div ref={contentRef} className="relative">
          <div className="mx-auto w-full max-w-screen-xl px-4 pt-14 md:px-8 lg:pt-20">
            {/* ---------- Brand + link columns ---------- */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              <div className="col-span-2 flex flex-col gap-4">
                <Link href="/" className="w-fit text-lg font-bold tracking-tight transition hover:opacity-70">
                  KompileX
                </Link>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  A four-person software development studio designing, building, and shipping
                  full-stack products end to end.
                </p>

                {/* Availability + Dhaka clock */}
                <div className="mt-1 flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Available for work
                  <span className="text-border">|</span>
                  <span className="font-mono tabular-nums text-foreground">
                    {time ? `${time} DHAKA` : '—— DHAKA'}
                  </span>
                </div>
              </div>

              {linkGroups.map((group) => (
                <div key={group.title} className="flex flex-col gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    / {group.title}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          {...('external' in link && link.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ---------- Email mega-link ---------- */}
            <div className="mt-14 flex flex-col gap-6 border-t pt-10">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  / Start a project
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group w-fit text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                >
                  <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-out group-hover:bg-[length:100%_1px]">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* ---------- Tagline marquee ---------- */}
          <div className="mt-10 flex select-none overflow-hidden border-y py-3">
            <div className={`flex shrink-0 ${reduced ? '' : 'animate-marquee'}`}>
              {Array.from({ length: 2 }).map((_, group) => (
                <div key={group} className="flex shrink-0" aria-hidden={group > 0}>
                  {Array.from({ length: 4 }).map((__, i) => (
                    <span
                      key={i}
                      className="flex shrink-0 items-center gap-8 pr-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                    >
                      {TAGLINE}
                      <span className="text-border">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Wordmark zone: giant letters bleed to the edges, BACK TO TOP
               and the meta row float on top of them, exactly like the reference footers ---------- */}
          <div className="relative overflow-hidden pt-10 pb-4 sm:pt-14 sm:pb-6 lg:pt-20 lg:pb-8">
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
              <FooterClouds />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent sm:h-20" />
            </div>

            <div
              aria-label={WORDMARK}
              role="img"
              className="relative z-[5] flex w-full justify-center overflow-hidden pointer-events-none leading-[0.78]"
            >
              <span
                className="flex whitespace-nowrap font-bold uppercase tracking-[-0.045em] text-foreground"
                style={{ fontSize: 'clamp(4rem, 24vw, 21rem)' }}
              >
                {WORDMARK.split('').map((char, i) => (
                  <RisingLetter
                    key={`${char}-${i}`}
                    char={char}
                    index={i}
                    total={WORDMARK.length}
                    progress={progress}
                    reduced={reduced}
                  />
                ))}
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="group absolute right-4 top-3 z-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground md:right-8 md:top-4"
            >
              Back to top
              <span className="flex size-7 items-center justify-center rounded-full border bg-background/70 backdrop-blur transition group-hover:-translate-y-0.5 group-hover:border-foreground">
                <ArrowUp className="size-3.5" />
              </span>
            </button>

            <div className="absolute inset-x-4 bottom-2 z-10 flex flex-col items-center justify-between gap-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:flex-row md:inset-x-8">
              <span>Copyright KompileX. All rights reserved</span>
              <span className="hidden md:inline">Built in Dhaka, shipped worldwide</span>
              <span>©{year}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
