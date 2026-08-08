'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Code2, Server, Cloud, LifeBuoy } from 'lucide-react'
import HeroBackground from './HeroBackground'


const TECH_STACK_ITEMS = [
  // Languages
  { name: 'JavaScript', slug: 'javascript/javascript-original.svg', desc: 'Web Development' },
  { name: 'Python', slug: 'python/python-original.svg', desc: 'AI & Data Science' },
  { name: 'TypeScript', slug: 'typescript/typescript-original.svg', desc: 'Large Web Apps' },
  { name: 'Java', slug: 'java/java-original.svg', desc: 'Enterprise & Android' },
  { name: 'C#', slug: 'csharp/csharp-original.svg', desc: '.NET & Game Dev' },
  { name: 'Go (Golang)', slug: 'go/go-original.svg', desc: 'Cloud & Backend' },
  { name: 'Rust', slug: 'rust/rust-original.svg', desc: 'Systems & Performance' },
  { name: 'C++', slug: 'cplusplus/cplusplus-original.svg', desc: 'Game Engines & Embedded' },
  { name: 'Kotlin', slug: 'kotlin/kotlin-original.svg', desc: 'Android Development' },
  { name: 'Dart', slug: 'dart/dart-original.svg', desc: 'Flutter Mobile Apps' },
  // Frameworks
  { name: 'React', slug: 'react/react-original.svg', desc: 'JavaScript' },
  { name: 'Next.js', slug: 'nextjs/nextjs-original.svg', desc: 'React', invertInDark: true },
  { name: 'Angular', slug: 'angular/angular-original.svg', desc: 'TypeScript' },
  { name: 'Vue.js', slug: 'vuejs/vuejs-original.svg', desc: 'JavaScript' },
  { name: 'Express.js', slug: 'express/express-original.svg', desc: 'JavaScript', invertInDark: true },
  { name: 'NestJS', slug: 'nestjs/nestjs-original.svg', desc: 'TypeScript' },
  { name: 'Flutter', slug: 'flutter/flutter-original.svg', desc: 'Dart' },
  { name: 'React Native', slug: 'react/react-original.svg', desc: 'JS / TS' },
  { name: 'Django', slug: 'django/django-plain.svg', desc: 'Python' },
  { name: 'FastAPI', slug: 'fastapi/fastapi-original.svg', desc: 'Python' },
  { name: 'Spring Boot', slug: 'spring/spring-original.svg', desc: 'Java' },
  { name: 'Laravel', slug: 'laravel/laravel-original.svg', desc: 'PHP' },
  { name: 'ASP.NET Core', slug: 'dotnetcore/dotnetcore-original.svg', desc: 'C#' },
  { name: 'Nuxt.js', slug: 'nuxtjs/nuxtjs-original.svg', desc: 'Vue' },
  { name: 'SvelteKit', slug: 'svelte/svelte-original.svg', desc: 'Svelte' },
]

const featureCards = [
  { side: 'left' as const, topClass: 'top-[30%]', xFrom: -40, delay: 0.25, Icon: Code2, title: 'Web & Mobile Apps', desc: 'Full-stack products built from scratch or extended.' },
  { side: 'left' as const, topClass: 'top-[62%]', xFrom: -40, delay: 0.38, Icon: Server, title: 'APIs & Backends', desc: 'Reliable services that scale with your users.' },
  { side: 'right' as const, topClass: 'top-[30%]', xFrom: 40, delay: 0.30, Icon: Cloud, title: 'Cloud Infrastructure', desc: 'CI/CD, hosting, and monitoring done right.' },
  { side: 'right' as const, topClass: 'top-[62%]', xFrom: 40, delay: 0.43, Icon: LifeBuoy, title: 'Ongoing Support', desc: 'We stick around after launch, not just before it.' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <>
      {/* ── Hero ── */}
      <motion.section
        ref={sectionRef}
        className="[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] relative flex h-[492px] items-center overflow-hidden md:h-[800px]"
      >
        <HeroBackground isLight={isLight} parallaxY={parallaxY} />

        {/* Floating feature cards - desktop only */}
        {featureCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: card.xFrom }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: card.delay, type: 'spring' as const, bounce: 0 }}
            className={`absolute hidden lg:block w-48 xl:w-56 ${card.side === 'left' ? 'left-[18%] xl:left-[20%]' : 'right-[18%] xl:right-[20%]'} ${card.topClass} -translate-y-1/2`}
            style={{ zIndex: 7 }}
          >
            <div className={`rounded-2xl border p-4 backdrop-blur-md ${isLight ? 'bg-white/95 border-border/60 shadow-[0_4px_20px_rgba(139,92,246,0.08),0_1px_4px_rgba(0,0,0,0.05)]' : 'bg-white/5 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.35)]'}`}>
              <div className={`mb-3 flex items-center justify-center w-8 h-8 rounded-xl ${isLight ? 'bg-violet-50 border border-violet-100/80' : 'bg-white/10 border border-white/10'}`}>
                <card.Icon className={`w-4 h-4 ${isLight ? 'text-violet-500' : 'text-white/70'}`} />
              </div>
              <p className={`text-xs font-bold leading-snug mb-1.5 ${isLight ? 'text-foreground' : 'text-white'}`}>{card.title}</p>
              <p className={`text-[11px] leading-relaxed ${isLight ? 'text-muted-foreground' : 'text-white/45'}`}>{card.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Center content */}
        <div className="container mx-auto relative z-10 -mt-16 text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${isLight ? 'border-violet-200 bg-violet-50/80 backdrop-blur-sm' : 'border-white/10 bg-white/5'}`}>
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-[#8c45ff] opacity-75 animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-[#8c45ff]" />
              </span>
              <span className={`text-sm font-semibold ${isLight ? 'text-violet-700' : 'text-white/70'}`}>Software Development Studio</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className={`text-center font-semibold tracking-tighter text-4xl md:text-6xl lg:text-7xl lg:leading-none ${isLight ? 'text-foreground' : 'text-white'}`}>
            We Ship Software<br />That Works
          </h1>

          {/* Subtitle */}
          <p className={`mx-auto mt-5 max-w-xl text-center text-lg md:text-xl ${isLight ? 'text-muted-foreground' : 'text-white/70'}`}>
            KompileX is a four-person team designing, building, and shipping full-stack products for startups and teams who need to move fast.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="relative cursor-pointer rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-4 py-2.5 text-sm font-medium text-white shadow-[0px_0px_12px_#8c45ff]"
            >
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]" />
              </div>
              <span className="relative">Start a Project</span>
            </a>

            <a
              href="#work"
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition ${isLight ? 'border-border bg-white/70 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-foreground/20' : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white'}`}
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              See Our Work
            </a>
          </div>
        </div>

      </motion.section>

      {/* ── Tech ticker ── */}
      <div className="w-full py-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-50%' }}
                transition={{ repeat: Infinity, duration: 65, ease: 'linear' }}
                className="flex gap-4 w-max"
              >
                {[...TECH_STACK_ITEMS, ...TECH_STACK_ITEMS].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 rounded-2xl border border-border/70 bg-card/40 px-5 py-3 backdrop-blur-sm transition hover:border-primary/50 hover:bg-muted/30 group"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.slug}`}
                      alt={item.name}
                      className={`size-7 object-contain transition-transform duration-300 group-hover:scale-110 ${
                        item.invertInDark ? 'dark:invert' : ''
                      }`}
                      loading="lazy"
                    />
                    <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
    </>
  )
}
