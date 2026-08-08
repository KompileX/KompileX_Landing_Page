'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft, CalendarDays, FileClock, Mail, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; heading?: string; items: string[] }
  | { type: 'callout'; title: string; text: string }

export type LegalSection = {
  id: string
  title: string
  blocks: LegalBlock[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  tagline: string
  effectiveDate: string
  updatedDate: string
  intro: string
  sections: LegalSection[]
  email: string
}

const reveal = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, type: 'spring' as const, bounce: 0 },
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function LegalPage({
  eyebrow,
  title,
  tagline,
  effectiveDate,
  updatedDate,
  intro,
  sections,
  email,
}: LegalPageProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-25% 0px -65% 0px' }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    // The last section never crosses the active band when scrolled to the
    // bottom, so pin it once the page is fully scrolled.
    const lastId = sections[sections.length - 1]?.id
    const onScroll = () => {
      if (!lastId) return
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) setActiveId(lastId)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sections])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 size-[420px] rotate-12 rounded-3xl bg-light opacity-25 blur-[90px]" />
        <div className="absolute -right-40 top-[52rem] size-[460px] -rotate-12 rounded-3xl bg-[#8c45ff]/30 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-screen-xl px-4 pb-10 pt-8 md:px-8 lg:pb-16 lg:pt-12">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back to home
          </Link>
        </motion.nav>

        {/* Body: sticky TOC + document */}
        <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Table of contents — fixed to the window, vertically centered */}
          <div className="hidden lg:block">
            <div
              className="pointer-events-none fixed inset-y-0 z-20 hidden w-[260px] items-center lg:flex"
              style={{ left: 'max(2rem, calc((100vw - 1440px) / 2 + 2rem))' }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pointer-events-auto flex max-h-full w-full flex-col gap-1 overflow-y-auto rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm"
              >
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  / Contents
                </p>
                {sections.map((section, i) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                      'flex items-baseline gap-2.5 rounded-lg px-2.5 py-2 text-[13px] leading-snug transition-colors',
                      activeId === section.id
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    )}
                  >
                    <span className="shrink-0 font-mono text-[10px] text-[#8c45ff]">{pad(i + 1)}</span>
                    <span className="font-medium">{section.title}</span>
                  </a>
                ))}

                <a
                  href={`mailto:${email}`}
                  className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2.5 text-xs font-medium text-foreground transition-colors hover:border-[#8c45ff]"
                >
                  <Mail className="size-3.5 text-[#8c45ff]" />
                  Questions? Email us
                </a>
              </motion.div>
            </div>
          </div>

          {/* Document */}
          <article>
            {/* Header — centered within the content column */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, type: 'spring', bounce: 0 }}
              className="mb-8 flex max-w-3xl flex-col items-start gap-4 lg:mb-10"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#8c45ff] opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[#8c45ff]" />
                </span>
                {eyebrow}
              </span>

              <h1 className="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{tagline}</p>

              {/* Meta row */}
              <div className="mt-1 flex flex-wrap items-center justify-start gap-3">
                <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <CalendarDays className="size-3.5" />
                  Effective {effectiveDate}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <FileClock className="size-3.5" />
                  Last updated {updatedDate}
                </span>
              </div>
            </motion.div>

            {/* Intro lead */}
            <motion.div {...reveal} className="mb-8">
              <p className="border-l-2 border-[#8c45ff] pl-5 text-base leading-8 text-foreground sm:text-lg">
                {intro}
              </p>
            </motion.div>

            <div className="flex flex-col">
              {sections.map((section, i) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  {...reveal}
                  className="scroll-mt-28 border-t border-border py-7 first:border-t-0 first:pt-0 lg:py-9"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50 font-mono text-xs font-semibold text-[#8c45ff]">
                      {pad(i + 1)}
                    </span>
                    <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-4 pl-0 sm:pl-[3.25rem]">
                    {section.blocks.map((block, j) => {
                      switch (block.type) {
                        case 'paragraph':
                          return (
                            <p
                              key={j}
                              className="text-[15px] leading-7 text-muted-foreground"
                            >
                              {block.text}
                            </p>
                          )
                        case 'list':
                          return (
                            <div key={j} className="flex flex-col gap-2.5">
                              {block.heading && (
                                <h3 className="text-sm font-semibold text-foreground">{block.heading}</h3>
                              )}
                              <ul className="flex flex-col gap-2.5">
                                {block.items.map((item, k) => (
                                  <li key={k} className="flex items-start gap-3 text-[15px] leading-7 text-muted-foreground">
                                    <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-[#8c45ff]/70" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        case 'callout':
                          return (
                            <div
                              key={j}
                              className="flex flex-col gap-2 rounded-2xl border border-border bg-muted/40 p-5 backdrop-blur-sm"
                            >
                              <div className="flex items-center gap-2.5">
                                <ShieldCheck className="size-4 text-[#8c45ff]" />
                                <h3 className="text-sm font-semibold text-foreground">{block.title}</h3>
                              </div>
                              <p className="text-sm leading-7 text-muted-foreground">{block.text}</p>
                            </div>
                          )
                      }
                    })}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Closing / contact */}
            <motion.div
              {...reveal}
              className="mt-3 rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm sm:p-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-semibold text-foreground">Still have questions?</p>
                  <p className="text-sm text-muted-foreground">
                    Write to us and a real engineer will get back to you within one business day.
                  </p>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#190d2e] via-[#37166a] to-[#4a208a] px-5 py-3 text-sm font-semibold text-white shadow-[0px_0px_16px_rgba(140,69,255,0.6)] transition-all hover:shadow-[0px_0px_22px_rgba(140,69,255,0.85)]"
                >
                  <Mail className="size-4" />
                  {email}
                </a>
              </div>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  )
}
