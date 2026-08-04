'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { Mic, BrainCircuit, ShieldCheck, Users, ArrowUpRight, type LucideIcon } from 'lucide-react'

interface StackCardData {
  title: string
  description: string
  Icon: LucideIcon
  points: string[]
  bg: string
  fg: string
  chip: string
}

const cards: StackCardData[] = [
  {
    title: 'Capture every word, live',
    description:
      'Real-time transcription and speaker identification turn any meeting, call, or debate into a searchable, fact-checked record as it happens.',
    Icon: Mic,
    points: ['95%+ live transcription accuracy', 'System audio + mic capture', 'Instant speaker identification'],
    bg: 'linear-gradient(145deg, #b9a6ff 0%, #8c6bff 100%)',
    fg: '#140630',
    chip: 'rgba(20,6,48,0.08)',
  },
  {
    title: 'Train against an AI that adapts',
    description:
      'Practice negotiation, sales, and interrogation scenarios against opponents that scale with you, then get scored on strategy and delivery.',
    Icon: BrainCircuit,
    points: ['Adaptive difficulty per session', 'Custom & story scenarios', 'Performance scoring & feedback'],
    bg: 'linear-gradient(145deg, #7fe3e0 0%, #35b6c9 100%)',
    fg: '#052224',
    chip: 'rgba(5,34,36,0.08)',
  },
  {
    title: 'Catch manipulation before it lands',
    description:
      'Persuasion tactics, logical fallacies, and emotional manipulation are flagged in real time so you always know what is actually being argued.',
    Icon: ShieldCheck,
    points: ['Live fallacy & tactic detection', 'Source-cited fact verification', 'Instant misinformation alerts'],
    bg: 'linear-gradient(145deg, #ffd684 0%, #ffb24d 100%)',
    fg: '#301a02',
    chip: 'rgba(48,26,2,0.08)',
  },
  {
    title: 'Bring your whole team in',
    description:
      'Peer-to-peer rooms sync transcription and analysis for every participant, while every session is archived into a searchable knowledge base.',
    Icon: Users,
    points: ['WebRTC P2P audio streaming', 'Synced live scoring for all users', 'Full history, tagged & searchable'],
    bg: 'linear-gradient(145deg, #ff9fc0 0%, #ff6f9c 100%)',
    fg: '#33071a',
    chip: 'rgba(51,7,26,0.08)',
  },
]

function StackCard({
  i,
  card,
  progress,
  range,
  targetScale,
}: {
  i: number
  card: StackCardData
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}) {
  const scale = useTransform(progress, range, [1, targetScale])
  const { Icon } = card

  return (
    <div className="sticky top-16 md:top-20 h-screen flex items-center justify-center px-4 md:px-8">
      <motion.div
        style={{
          scale,
          top: `calc(-6vh + ${i * 22}px)`,
          background: card.bg,
          color: card.fg,
        }}
        className="relative w-full max-w-7xl origin-top overflow-hidden rounded-[28px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
      >
        <div className="grid gap-8 p-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:p-14 lg:p-16">
          {/* Copy */}
          <div className="flex flex-col justify-center gap-5">
            <span
              className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              style={{ backgroundColor: card.chip }}
            >
              {String(i + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
            </span>

            <h3 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2.4rem]">
              {card.title}
            </h3>

            <p className="max-w-md text-sm leading-relaxed opacity-80 sm:text-base">
              {card.description}
            </p>

            <ul className="mt-2 flex flex-col gap-2.5">
              {card.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-medium">
                  <span
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: card.fg }}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: card.fg }}
            >
              Explore this
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Icon panel */}
          <div className="relative hidden items-center justify-center md:flex">
            <div
              className="flex h-40 w-40 items-center justify-center rounded-[32px] lg:h-52 lg:w-52"
              style={{ backgroundColor: card.chip }}
            >
              <Icon className="h-20 w-20 lg:h-24 lg:w-24" strokeWidth={1.25} style={{ color: card.fg }} />
            </div>
            <div
              className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full opacity-40 blur-2xl"
              style={{ backgroundColor: card.fg }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function StackSection() {
  const container = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={container} className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto mb-14 max-w-screen-xl px-4 text-center md:px-8">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Everything Stacks in Your Favor
        </h2>
        <p className="mx-auto max-w-xl text-base text-muted-foreground">
          Scroll to see how KompileX layers transcription, training, and analysis into one workflow.
        </p>
      </div>

      {cards.map((card, i) => {
        const targetScale = 1 - (cards.length - i) * 0.05
        return (
          <StackCard
            key={card.title}
            i={i}
            card={card}
            progress={scrollYProgress}
            range={[i * (1 / cards.length), 1]}
            targetScale={targetScale}
          />
        )
      })}
    </section>
  )
}
