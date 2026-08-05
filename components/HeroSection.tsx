'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { useRef, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Code2, Server, Cloud, LifeBuoy } from 'lucide-react'
import HeroBackground from './HeroBackground'

// ── Tech Icons for Mouse Trail (Devicon slugs) ──
const TECH_ICONS = [
  { name: 'Python', slug: 'python/python-original.svg', bestFor: 'AI, Machine Learning, Data Science, Backend', glowColor: 'rgba(55, 118, 171, 0.45)' },
  { name: 'JavaScript', slug: 'javascript/javascript-original.svg', bestFor: 'Frontend, Backend (Node.js), Full Stack', glowColor: 'rgba(247, 223, 30, 0.45)' },
  { name: 'TypeScript', slug: 'typescript/typescript-original.svg', bestFor: 'Large Web Applications, React, Angular', glowColor: 'rgba(49, 120, 198, 0.45)' },
  { name: 'Java', slug: 'java/java-original.svg', bestFor: 'Enterprise Software, Android', glowColor: 'rgba(234, 45, 46, 0.45)' },
  { name: 'C#', slug: 'csharp/csharp-original.svg', bestFor: '.NET, Unity Game Development', glowColor: 'rgba(162, 125, 231, 0.45)' },
  { name: 'Go (Golang)', slug: 'go/go-original.svg', bestFor: 'Cloud, Microservices, Backend APIs', glowColor: 'rgba(0, 173, 216, 0.45)' },
  { name: 'C++', slug: 'cplusplus/cplusplus-original.svg', bestFor: 'Game Engines, High-Performance Software', glowColor: 'rgba(0, 89, 156, 0.45)' },
  { name: 'Rust', slug: 'rust/rust-original.svg', bestFor: 'Systems Programming, Security', glowColor: 'rgba(240, 102, 50, 0.45)' },
  { name: 'PHP', slug: 'php/php-original.svg', bestFor: 'Laravel, WordPress, Web Development', glowColor: 'rgba(119, 123, 180, 0.45)' },
  { name: 'Dart', slug: 'dart/dart-original.svg', bestFor: 'Flutter Mobile & Cross-platform Apps', glowColor: 'rgba(1, 117, 194, 0.45)' },
  { name: 'React', slug: 'react/react-original.svg', bestFor: 'Frontend Web Development', glowColor: 'rgba(0, 216, 255, 0.45)' },
  { name: 'Next.js', slug: 'nextjs/nextjs-original.svg', invertInDark: true, bestFor: 'Full-Stack React Applications', glowColor: 'rgba(255, 255, 255, 0.35)', glowColorLight: 'rgba(0, 0, 0, 0.25)' },
  { name: 'Angular', slug: 'angular/angular-original.svg', bestFor: 'Enterprise Web Applications', glowColor: 'rgba(221, 0, 49, 0.45)' },
  { name: 'Vue.js', slug: 'vuejs/vuejs-original.svg', bestFor: 'Frontend Development', glowColor: 'rgba(66, 184, 131, 0.45)' },
  { name: 'Flutter', slug: 'flutter/flutter-original.svg', bestFor: 'Cross-platform Mobile Apps', glowColor: 'rgba(64, 196, 255, 0.45)' },
  { name: 'Express.js', slug: 'express/express-original.svg', invertInDark: true, bestFor: 'Node.js Backend APIs', glowColor: 'rgba(255, 255, 255, 0.35)', glowColorLight: 'rgba(0, 0, 0, 0.25)' },
  { name: 'NestJS', slug: 'nestjs/nestjs-original.svg', bestFor: 'Scalable Backend Applications', glowColor: 'rgba(234, 40, 69, 0.45)' },
  { name: 'Django', slug: 'django/django-plain.svg', bestFor: 'Backend & AI Web Applications', glowColor: 'rgba(9, 46, 32, 0.45)' },
  { name: 'Spring Boot', slug: 'spring/spring-original.svg', bestFor: 'Enterprise Backend Development', glowColor: 'rgba(109, 179, 63, 0.45)' },
  { name: 'Laravel', slug: 'laravel/laravel-original.svg', bestFor: 'Full-Stack Web Development', glowColor: 'rgba(255, 45, 32, 0.45)' },
]

const STAR_IMAGE = '/stars.png'

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'GraphQL', 'AWS', 'Docker', 'Vercel',
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

  // Mouse trail state and refs
  const [trail, setTrail] = useState<{ id: string; x: number; y: number; techIndex: number }[]>([])
  const lastSpawnRef = useRef({ x: 0, y: 0 })
  const iconIndexRef = useRef(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const dist = Math.hypot(x - lastSpawnRef.current.x, y - lastSpawnRef.current.y)

    if (dist > 80) {
      lastSpawnRef.current = { x, y }
      const id = Math.random().toString(36).substring(2, 9)
      const techIndex = iconIndexRef.current
      iconIndexRef.current = (iconIndexRef.current + 1) % TECH_ICONS.length

      setTrail((prev) => [...prev, { id, x, y, techIndex }])

      setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== id))
      }, 1200)
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <motion.section
        ref={sectionRef}
        {...(!isLight && {
          animate: { backgroundPositionX: 2400 },
          transition: { duration: 120, repeat: Number.POSITIVE_INFINITY, ease: 'linear' },
        })}
        onMouseMove={handleMouseMove}
        className="[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] relative flex h-[492px] items-center overflow-hidden md:h-[800px]"
      >
        <HeroBackground isLight={isLight} parallaxY={parallaxY} />

        {/* Floating feature cards — desktop only */}
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

        {/* Mouse Swipe Trail Icons */}
        <AnimatePresence>
          {trail.map((item) => {
            const tech = TECH_ICONS[item.techIndex]
            const activeGlow = isLight && tech.glowColorLight ? tech.glowColorLight : tech.glowColor
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.4, x: item.x - 40, y: item.y - 40, rotate: -15 }}
                animate={{
                  opacity: [0, 1, 0.8, 0],
                  scale: [0.4, 1.1, 1, 0.7],
                  y: item.y - 40 - 85,
                  rotate: 15,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className={`absolute left-0 top-0 pointer-events-none z-30 flex items-center justify-center size-20 rounded-full border backdrop-blur-md shadow-lg ${isLight ? 'bg-white/85 border-violet-100' : 'bg-black/30 border-white/10'}`}
                style={{
                  boxShadow: `0 0 15px ${activeGlow}`,
                }}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}`}
                  alt={tech.name}
                  className="size-11 object-contain"
                  style={{
                    filter: !isLight && tech.invertInDark ? 'invert(1) brightness(2)' : 'none',
                  }}
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.section>

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
