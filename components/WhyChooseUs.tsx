'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, useScroll, useTransform } from 'motion/react'
import { Bot, Clock, Award, type LucideIcon } from 'lucide-react'

interface Step {
  number: string
  icon: LucideIcon
  title: string
  description: string
  badge: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: Bot,
    title: 'AI-Powered Development',
    description:
      'We leverage cutting-edge AI tools and automation frameworks to accelerate delivery cycles, reduce bugs, and ship production-ready features up to 40% faster than traditional development approaches.',
    badge: 'AI Velocity',
  },
  {
    number: '02',
    icon: Clock,
    title: '24/7 Support',
    description:
      'Our dedicated support team is available around the clock to monitor your systems, resolve incidents, and ensure your platforms stay performant and available — with guaranteed SLA response times.',
    badge: 'Always On',
  },
  {
    number: '03',
    icon: Award,
    title: 'Senior Engineering Excellence',
    description:
      'Work with senior engineers, solution architects, and AI specialists rigorously vetted through multi-stage technical benchmarks. No juniors, no guesswork — only proven talent delivering enterprise-grade results.',
    badge: 'Vetted Talent',
  },
]

// Fixed card footprint used both for the Tailwind width class and the slot math below,
// so the computed offsets always line up with what's actually rendered.
const CARD_WIDTH = 380
const GAP = 32
const SLOT = CARD_WIDTH + GAP

function QueueCard({ step, className = '' }: { step: Step; className?: string }) {
  const Icon = step.icon
  return (
    <Card className={`h-full bg-card/60 backdrop-blur-sm ${className}`}>
      <CardContent className="p-8 flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center border bg-muted border-border text-foreground">
            <Icon className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <span className="text-4xl font-black text-muted-foreground/20 leading-none select-none">
            {step.number}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {step.badge}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function HowItWorksSection() {
  const container = useRef<HTMLDivElement>(null)
  const [offscreen, setOffscreen] = useState(0)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const measure = () => setOffscreen(window.innerWidth)
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Card 0: visible & centered immediately, then eases into its final left slot
  // in lockstep with card 1's arrival window — same breakpoints as x1 below, so
  // the gap between them shrinks monotonically to the resting gap and never overlaps.
  const x0 = useTransform(scrollYProgress, [0, 0.15, 0.5, 1], [SLOT, SLOT, 0, 0])

  // Card 1: hidden off-screen right until it joins mid-scroll, then settles into its slot.
  const x1 = useTransform(scrollYProgress, [0, 0.15, 0.5, 1], [offscreen, offscreen, 0, 0])
  const o1 = useTransform(scrollYProgress, [0, 0.15, 0.28, 1], [0, 0, 1, 1])

  // Card 2: hidden off-screen right until the final third of the scroll, then settles in.
  const x2 = useTransform(scrollYProgress, [0, 0.5, 0.85, 1], [offscreen, offscreen, 0, 0])
  const o2 = useTransform(scrollYProgress, [0, 0.5, 0.63, 1], [0, 0, 1, 1])

  return (
    <section id="process" className="w-full py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
          className="mb-10 text-center flex flex-col gap-3"
        >
          <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Why Leading Enterprises Choose Us
          </h2>
          <p className="max-w-xl mx-auto text-sm text-muted-foreground">
            We combine AI velocity, 24/7 dedicated support, and senior engineering talent to deliver enterprise-grade software that scales.
          </p>
        </motion.div>
      </div>

      {/* Desktop/tablet: cards join one at a time, sliding left to make room, never fully hidden as a group */}
      <div ref={container} className="hidden md:block" style={{ height: `${steps.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center gap-8">
          <motion.div style={{ x: x0, opacity: 1 }} className="shrink-0">
            <QueueCard step={steps[0]} className="w-[380px]" />
          </motion.div>
          <motion.div style={{ x: x1, opacity: o1 }} className="shrink-0">
            <QueueCard step={steps[1]} className="w-[380px]" />
          </motion.div>
          <motion.div style={{ x: x2, opacity: o2 }} className="shrink-0">
            <QueueCard step={steps[2]} className="w-[380px]" />
          </motion.div>
        </div>
      </div>

      {/* Mobile fallback: native horizontal scroll, no scroll-jack */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-2 -mx-4">
        {steps.map((step) => (
          <div key={step.number} className="w-[85vw] shrink-0 snap-center">
            <QueueCard step={step} />
          </div>
        ))}
      </div>
    </section>
  )
}
