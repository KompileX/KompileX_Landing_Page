'use client'

import { motion } from 'motion/react'

interface CubeSpec {
  className: string
  size: number
  rotate: string
  duration: number
  delay: number
}

const CUBES: CubeSpec[] = [
  { className: 'left-[5%] top-[20%]', size: 54, rotate: 'rotateX(-28deg) rotateY(35deg)', duration: 7, delay: 0 },
  { className: 'left-[9%] top-[64%]', size: 32, rotate: 'rotateX(-20deg) rotateY(50deg)', duration: 9, delay: 1.2 },
  { className: 'right-[5%] top-[24%]', size: 46, rotate: 'rotateX(-25deg) rotateY(-40deg)', duration: 8, delay: 0.6 },
  { className: 'right-[9%] top-[60%]', size: 30, rotate: 'rotateX(-15deg) rotateY(-55deg)', duration: 6.5, delay: 1.8 },
]

interface HeroFloatingShapesProps {
  isLight: boolean
}

function FloatingCube({ spec, isLight }: { spec: CubeSpec; isLight: boolean }) {
  const half = spec.size / 2
  const borderOpacity = isLight ? 'border-violet-300/30' : 'border-white/15'
  const faceTop = isLight ? 'from-violet-400/25 to-fuchsia-400/10' : 'from-cyan-400/25 to-blue-500/10'
  const faceRight = isLight ? 'from-violet-500/20 to-purple-400/10' : 'from-indigo-500/25 to-violet-600/10'
  const faceFront = isLight ? 'from-fuchsia-400/15 to-violet-300/5' : 'from-purple-500/20 to-fuchsia-500/10'

  return (
    <motion.div
      className={`pointer-events-none absolute hidden xl:block [perspective:900px] ${spec.className}`}
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: spec.duration, repeat: Infinity, ease: 'easeInOut', delay: spec.delay }}
    >
      <div
        className="relative"
        style={{ width: spec.size, height: spec.size, transformStyle: 'preserve-3d', transform: spec.rotate }}
      >
        <div
          className={`absolute inset-0 rounded-lg border bg-gradient-to-br ${borderOpacity} ${faceTop}`}
          style={{ transform: `translateZ(${half}px)` }}
        />
        <div
          className={`absolute inset-0 rounded-lg border bg-gradient-to-br ${borderOpacity} ${faceRight}`}
          style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}
        />
        <div
          className={`absolute inset-0 rounded-lg border bg-gradient-to-br ${borderOpacity} ${faceFront}`}
          style={{ transform: `rotateX(90deg) translateZ(${half}px)` }}
        />
      </div>
    </motion.div>
  )
}

export default function HeroFloatingShapes({ isLight }: HeroFloatingShapesProps) {
  return (
    <>
      {CUBES.map((spec, i) => (
        <FloatingCube key={i} spec={spec} isLight={isLight} />
      ))}
    </>
  )
}
