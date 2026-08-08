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
// Rounded to 2 decimals: raw Math.cos/sin output can differ in the last
// float digit between server and client JS engines, which fails hydration.
const round2 = (n: number) => Math.round(n * 100) / 100

const PARTICLES = PARTICLE_ANGLES.map((deg, i) => {
  const rad = (deg * Math.PI) / 180
  const r = 380 + (i % 3) * 45
  return {
    id: i,
    cx: round2(CX + r * Math.cos(rad)),
    cy: round2(CY + r * Math.sin(rad)),
    size: 2 + (i % 3),
    delay: i * 0.35,
  }
})

// First 4 particles always render; the rest only add density on larger screens.
const CORE_PARTICLES = PARTICLES.slice(0, 4)
const EXTRA_PARTICLES = PARTICLES.slice(4)

interface HeroArcProps {
  isLight: boolean
}

export default function HeroArc({ isLight }: HeroArcProps) {
  const gradientStops = isLight
    ? [
        { offset: '0%', color: '#a78bfa' },
        { offset: '50%', color: '#8b5cf6' },
        { offset: '100%', color: '#e879f9' },
      ]
    : [
        { offset: '0%', color: '#22d3ee' },
        { offset: '50%', color: '#6366f1' },
        { offset: '100%', color: '#a855f7' },
      ]
  const trailColor = isLight ? '#c4b5fd' : '#a5f3fc'
  const particleColor = isLight ? '#f5f3ff' : '#e0f2ff'
  const opacityScale = isLight ? 0.9 : 1

  return (
    <div className="pointer-events-none absolute bottom-0 left-1/2 w-[min(900px,150vw)] -translate-x-1/2 sm:w-[min(1400px,180vw)]">
      <svg viewBox="0 0 1100 560" className="h-auto w-full" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id="hero-arc-gradient" x1="0" y1="0" x2="1" y2="0">
            {gradientStops.map((stop) => (
              <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
            ))}
          </linearGradient>
          <filter id="hero-arc-blur-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="hero-arc-blur-tight" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Soft bloom pass (static, wider strokes) */}
        <g filter="url(#hero-arc-blur-soft)">
          {CORE_RINGS.map((ring) => (
            <circle key={`glow-${ring.r}`} cx={CX} cy={CY} r={ring.r} fill="none" stroke="url(#hero-arc-gradient)" strokeWidth={ring.width * 3} opacity={ring.opacity * 0.5 * opacityScale} />
          ))}
          <g className="hidden sm:inline">
            {EXTRA_RINGS.map((ring) => (
              <circle key={`glow-${ring.r}`} cx={CX} cy={CY} r={ring.r} fill="none" stroke="url(#hero-arc-gradient)" strokeWidth={ring.width * 3} opacity={ring.opacity * 0.5 * opacityScale} />
            ))}
          </g>
        </g>

        {/* Crisp ring pass — slow rotation */}
        <g className="hero-arc-rotate" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          {CORE_RINGS.map((ring) => (
            <circle key={ring.r} cx={CX} cy={CY} r={ring.r} fill="none" stroke="url(#hero-arc-gradient)" strokeWidth={ring.width} strokeDasharray={ring.dash} strokeLinecap="round" opacity={ring.opacity * opacityScale} filter="url(#hero-arc-blur-tight)" />
          ))}
          <g className="hidden sm:inline">
            {EXTRA_RINGS.map((ring) => (
              <circle key={ring.r} cx={CX} cy={CY} r={ring.r} fill="none" stroke="url(#hero-arc-gradient)" strokeWidth={ring.width} strokeDasharray={ring.dash} strokeLinecap="round" opacity={ring.opacity * opacityScale} filter="url(#hero-arc-blur-tight)" />
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
            fill={particleColor}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.9 * opacityScale, 0.2], r: [p.size, p.size * 1.6, p.size] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
            style={{ filter: 'url(#hero-arc-blur-tight)' }}
          />
        ))}
        <g className="hidden sm:inline">
          {EXTRA_PARTICLES.map((p) => (
            <motion.circle
              key={p.id}
              cx={p.cx}
              cy={p.cy}
              r={p.size}
              fill={particleColor}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.9 * opacityScale, 0.2], r: [p.size, p.size * 1.6, p.size] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
              style={{ filter: 'url(#hero-arc-blur-tight)' }}
            />
          ))}
        </g>

        {/* Light trail traveling along the outer ring */}
        <motion.circle
          r={4}
          fill={trailColor}
          animate={{ cx: TRAIL_CX, cy: TRAIL_CY }}
          transition={{ duration: 9, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
          style={{ filter: 'url(#hero-arc-blur-tight)' }}
        />
      </svg>
    </div>
  )
}
