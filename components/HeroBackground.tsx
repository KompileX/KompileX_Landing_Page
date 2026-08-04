'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, type MotionValue } from 'motion/react'
import {
  Atom,
  Box,
  Boxes,
  Braces,
  Cloud,
  CloudCog,
  Database,
  FileCode2,
  GitBranch,
  Hexagon,
  Layers,
  Server,
  Terminal,
  Triangle,
} from 'lucide-react'

const TECH_ICONS = [
  { name: '.NET', Icon: Braces },
  { name: 'Node.js', Icon: Hexagon },
  { name: 'Python', Icon: Terminal },
  { name: 'Go', Icon: Layers },
  { name: 'React', Icon: Atom },
  { name: 'Next.js', Icon: Triangle },
  { name: 'TypeScript', Icon: FileCode2 },
  { name: 'PostgreSQL', Icon: Database },
  { name: 'Docker', Icon: Box },
  { name: 'Kubernetes', Icon: Boxes },
  { name: 'Redis', Icon: Server },
  { name: 'AWS', Icon: Cloud },
  { name: 'Azure', Icon: CloudCog },
  { name: 'Git', Icon: GitBranch },
] as const

type TechIcon = (typeof TECH_ICONS)[number]

type FloatingIcon = {
  id: number
  x: number
  y: number
  name: TechIcon['name']
  Icon: TechIcon['Icon']
  rotate: number
  driftX: number
  driftY: number
  scale: number
}

const MAX_ICONS = 5
const SPAWN_INTERVAL_MS = 260
const MOVE_THRESHOLD_PX = 70
const ICON_LIFETIME_MS = 2400

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
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  const idRef = useRef(0)
  const lastSpawnRef = useRef(0)
  const lastPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const pendingPosRef = useRef<{ x: number; y: number } | null>(null)
  const recentTechRef = useRef<string[]>([])
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

  const spawnIcon = useCallback((x: number, y: number) => {
    const pool = TECH_ICONS.filter((t) => !recentTechRef.current.includes(t.name))
    const choices = pool.length ? pool : TECH_ICONS
    const tech = choices[Math.floor(Math.random() * choices.length)]
    recentTechRef.current = [...recentTechRef.current, tech.name].slice(-4)

    const id = idRef.current++
    const angle = Math.random() * Math.PI * 2
    const offset = 40 + Math.random() * 34

    const next: FloatingIcon = {
      id,
      x: x + Math.cos(angle) * offset,
      y: y + Math.sin(angle) * offset,
      name: tech.name,
      Icon: tech.Icon,
      rotate: (Math.random() - 0.5) * 22,
      driftX: (Math.random() - 0.5) * 36,
      driftY: -26 - Math.random() * 28,
      scale: 0.92 + Math.random() * 0.22,
    }

    setIcons((prev) => {
      const merged = [...prev, next]
      return merged.length > MAX_ICONS ? merged.slice(merged.length - MAX_ICONS) : merged
    })

    window.setTimeout(() => {
      setIcons((prev) => prev.filter((i) => i.id !== id))
    }, ICON_LIFETIME_MS)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const processPending = () => {
      rafRef.current = null
      const pos = pendingPosRef.current
      if (!pos || !pointerOkRef.current) return

      const dist = Math.hypot(pos.x - lastPosRef.current.x, pos.y - lastPosRef.current.y)
      const now = performance.now()

      if (dist > MOVE_THRESHOLD_PX && now - lastSpawnRef.current > SPAWN_INTERVAL_MS) {
        lastSpawnRef.current = now
        lastPosRef.current = pos
        spawnIcon(pos.x, pos.y)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!pointerOkRef.current) return
      const rect = el.getBoundingClientRect()
      pendingPosRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(processPending)
      }
    }

    el.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [spawnIcon])

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
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -left-24 top-[8%] size-72 rounded-full blur-[80px] md:size-[420px] ${
            isLight ? 'bg-violet-300/25' : 'bg-[#8c45ff]/25'
          }`}
        />
        <motion.div
          animate={{ x: [0, -36, 0], y: [0, 24, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -right-20 bottom-[6%] size-64 rounded-full blur-[90px] md:size-96 ${
            isLight ? 'bg-fuchsia-200/25' : 'bg-[#5c2ee6]/25'
          }`}
        />

        {/* Grid */}
        <motion.div
          animate={{ backgroundPosition: ['0px 0px', '64px 64px'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 [mask-image:radial-gradient(65%_55%_at_center,black,transparent_75%)]"
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
        <motion.div
          animate={{ rotate: '1turn' }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          style={{ x: '-50%', y: '-50%' }}
          className={`absolute left-1/2 top-1/2 hidden size-[420px] rotate-45 rounded-3xl border md:block md:size-[620px] ${
            isLight ? 'border-violet-300/25' : 'border-white/15'
          }`}
        >
          <span className={`absolute -left-1 top-1/2 size-1.5 -translate-y-1/2 rounded-full ${isLight ? 'bg-violet-400/60' : 'bg-white/70'}`} />
          <span className={`absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full ${isLight ? 'bg-violet-400/60' : 'bg-white/70'}`} />
        </motion.div>

        <motion.div
          animate={{ rotate: '-1turn' }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          style={{ x: '-50%', y: '-50%' }}
          className={`absolute left-1/2 top-1/2 hidden size-[300px] rounded-[2.5rem] border border-dashed md:block md:size-[460px] ${
            isLight ? 'border-violet-200/35' : 'border-white/15'
          }`}
        />

        {/* Ambient particles */}
        <div className="absolute inset-0 hidden sm:block">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                backgroundColor: dotFill,
                boxShadow: `0 0 6px 1px ${dotFill}`,
              }}
              animate={{ y: [0, -14, 0], opacity: [0.15, 0.7, 0.15] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </motion.div>

      {/* Mouse-follow technology icons */}
      <AnimatePresence>
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: icon.scale,
              x: icon.driftX,
              y: icon.driftY,
              rotate: icon.rotate,
            }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: ICON_LIFETIME_MS / 1000, ease: 'easeOut' }}
            className="pointer-events-none absolute left-0 top-0 z-[6] will-change-transform"
            style={{ left: icon.x, top: icon.y }}
          >
            <div
              className={`flex items-center gap-2 rounded-2xl border px-4 py-2.5 backdrop-blur-md ${
                isLight
                  ? 'border-violet-200/70 bg-white/80 shadow-[0_4px_16px_rgba(139,92,246,0.2)]'
                  : 'border-white/15 bg-white/5 shadow-[0_0_16px_rgba(140,69,255,0.4)]'
              }`}
            >
              <icon.Icon className={`size-6 ${isLight ? 'text-violet-500' : 'text-[#b794ff]'}`} />
              <span className={`whitespace-nowrap text-sm font-medium ${isLight ? 'text-violet-700' : 'text-white/80'}`}>
                {icon.name}
              </span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
