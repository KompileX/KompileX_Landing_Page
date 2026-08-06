'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, type MotionValue } from 'motion/react'

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
] as const

const TRAIL_ICON_LIFETIME_MS = 1200
const TRAIL_SPAWN_THRESHOLD_PX = 80

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: 2 + (i % 3),
  duration: 6 + (i % 5) * 1.4,
  delay: (i % 7) * 0.4,
}))

interface HeroBackgroundProps {
  isLight: boolean
  parallaxY?: MotionValue<number>
}

export default function HeroBackground({ isLight, parallaxY }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [trail, setTrail] = useState<{ id: string; x: number; y: number; techIndex: number }[]>([])
  const lastSpawnRef = useRef({ x: 0, y: 0 })
  const iconIndexRef = useRef(0)
  const pointerOkRef = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    pointerOkRef.current = mq.matches
    const handleChange = (e: MediaQueryListEvent) => {
      pointerOkRef.current = e.matches
    }
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      if (!pointerOkRef.current) return
      const el = containerRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        return
      }

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const dist = Math.hypot(x - lastSpawnRef.current.x, y - lastSpawnRef.current.y)

      if (dist > TRAIL_SPAWN_THRESHOLD_PX) {
        lastSpawnRef.current = { x, y }
        const id = Math.random().toString(36).substring(2, 9)
        const techIndex = iconIndexRef.current
        iconIndexRef.current = (iconIndexRef.current + 1) % TECH_ICONS.length

        setTrail((prev) => [...prev, { id, x, y, techIndex }])

        setTimeout(() => {
          setTrail((prev) => prev.filter((item) => item.id !== id))
        }, TRAIL_ICON_LIFETIME_MS)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const lineStroke = isLight ? 'rgba(139,92,246,0.35)' : 'rgba(184,148,255,0.4)'
  const dotFill = isLight ? '#a78bfa' : '#b894ff'

  const particles = useMemo(() => PARTICLES, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Gradient wash */}
      {isLight ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-violet-50/60 via-white to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(65%_65%_at_center_40%,rgba(139,92,246,0.10)_0%,rgba(167,139,250,0.05)_55%,transparent_80%)]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.35)_15%,rgb(14,0,36,0.55)_78%,transparent)]" />
      )}

      {/* Parallax layer: mesh blobs, grid, glow lines, geometry, particles */}
      <motion.div className="absolute inset-0" style={parallaxY ? { y: parallaxY } : undefined}>
        {/* Mesh gradient blobs */}
        <div
          className={`hero-blob-1 absolute -left-24 top-[8%] size-72 rounded-full blur-[80px] md:size-[420px] ${
            isLight ? 'bg-violet-300/25' : 'bg-[#8c45ff]/25'
          }`}
        />
        <div
          className={`hero-blob-2 absolute -right-20 bottom-[6%] size-64 rounded-full blur-[90px] md:size-96 ${
            isLight ? 'bg-fuchsia-200/25' : 'bg-[#5c2ee6]/25'
          }`}
        />

        {/* Grid */}
        <div
          className="hero-grid-pan absolute inset-0 [mask-image:radial-gradient(65%_55%_at_center,black,transparent_75%)]"
          style={{
            backgroundImage: `linear-gradient(${isLight ? 'rgba(139,92,246,0.14)' : 'rgba(184,148,255,0.14)'} 1px, transparent 1px), linear-gradient(90deg, ${isLight ? 'rgba(139,92,246,0.14)' : 'rgba(184,148,255,0.14)'} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Glowing connector lines */}
        <svg className="absolute inset-0 hidden size-full sm:block" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <defs>
            <filter id="hero-line-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          {[
            'M 60 620 C 260 560, 340 460, 560 480 S 860 380, 1140 300',
            'M 40 200 C 220 260, 380 200, 520 260 S 840 200, 1160 160',
          ].map((d, i) => (
            <motion.path
              key={d}
              d={d}
              fill="none"
              stroke={lineStroke}
              strokeWidth={1.5}
              strokeLinecap="round"
              filter="url(#hero-line-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.8, 0.8, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 1.6,
              }}
            />
          ))}
        </svg>

        {/* Rotating geometric accents */}
        <div
          className={`hero-ring-spin absolute left-1/2 top-1/2 hidden size-[420px] rounded-3xl border md:block md:size-[620px] ${
            isLight ? 'border-violet-300/25' : 'border-white/15'
          }`}
        >
          <span className={`absolute -left-1 top-1/2 size-1.5 -translate-y-1/2 rounded-full ${isLight ? 'bg-violet-400/60' : 'bg-white/70'}`} />
          <span className={`absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full ${isLight ? 'bg-violet-400/60' : 'bg-white/70'}`} />
        </div>

        <div
          className={`hero-ring-spin-reverse absolute left-1/2 top-1/2 hidden size-[300px] rounded-[2.5rem] border border-dashed md:block md:size-[460px] ${
            isLight ? 'border-violet-200/35' : 'border-white/15'
          }`}
        />

        {/* Ambient particles */}
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
                backgroundColor: dotFill,
                boxShadow: `0 0 6px 1px ${dotFill}`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Mouse Swipe Trail Icons */}
      <AnimatePresence>
        {trail.map((item) => {
          const tech = TECH_ICONS[item.techIndex]
          const activeGlow = isLight && (tech as any).glowColorLight ? (tech as any).glowColorLight : tech.glowColor
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
                  filter: !isLight && (tech as any).invertInDark ? 'invert(1) brightness(2)' : 'none',
                }}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
