'use client'

import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { ArrowRight, Bot, Clock, Award, type LucideIcon } from 'lucide-react'

interface Step {
  title: string
  subtitle: string
  icon: LucideIcon
  gradient: string
}

const steps: Step[] = [
  {
    title: 'AI-Powered Development',
    subtitle:
      'We leverage cutting-edge AI tools and automation frameworks to accelerate delivery cycles, reduce bugs, and ship production-ready features faster.',
    icon: Bot,
    gradient: 'linear-gradient(145deg, #b9a6ff 0%, #8c6bff 100%)',
  },
  {
    title: '24/7 Support',
    subtitle:
      'Our dedicated support team is available around the clock to monitor your systems, resolve incidents, and keep your platforms performant and available.',
    icon: Clock,
    gradient: 'linear-gradient(145deg, #7fe3e0 0%, #35b6c9 100%)',
  },
  {
    title: 'Senior Engineering Excellence',
    subtitle:
      'Work with senior engineers, solution architects, and AI specialists rigorously vetted through multi-stage technical benchmarks.',
    icon: Award,
    gradient: 'linear-gradient(145deg, #ffd684 0%, #ffb24d 100%)',
  },
]

function QueueCard({ step, className = '' }: { step: Step; className?: string }) {
  const Icon = step.icon
  return (
    <Card className={`group overflow-hidden rounded-2xl border border-black/30 bg-card/60 shadow-none backdrop-blur-sm ${className}`}>
      <div className="flex h-64 items-center justify-center" style={{ background: step.gradient }}>
        <Icon className="h-14 w-14 text-black/70" strokeWidth={1.25} />
      </div>

      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{step.subtitle}</p>

        <a
          href="#"
          className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </Card>
  )
}

// Wraps a card in its own scroll-linked parallax, independent of the entrance
// animation on its parent - each card moves at a different speed so they
// don't drift in lockstep. Pure translateY (no scale/opacity) so it reads as
// being physically pushed up/down rather than zooming into place.
function FloatingCard({ y, children }: { y: MotionValue<number>; children: React.ReactNode }) {
  return <motion.div style={{ y, transformPerspective: 1200 }}>{children}</motion.div>
}

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  // Bound directly to raw scroll progress - no spring, so there's zero lag between
  // your scroll input and the card position (no more "dropping" delay). The
  // ease-in-out curve softens each leg of the motion so it glides to a stop instead
  // of moving at a constant mechanical speed, which is what reads as fluid/water-like
  // rather than linear ("on rails"). Each card arrives, settles at 0, and exits on its
  // own schedule - different total distance AND a different settle window.
  const y1 = useTransform(scrollYProgress, [0, 0.4, 0.55, 1], [270, 0, 0, -270], { ease: easeInOutCubic })
  const y2 = useTransform(scrollYProgress, [0, 0.5, 0.65, 1], [510, 0, 0, -510], { ease: easeInOutCubic })
  const y3 = useTransform(scrollYProgress, [0, 0.45, 0.6, 1], [390, 0, 0, -390], { ease: easeInOutCubic })

  return (
    <section id="process" ref={sectionRef} className="w-full py-14 lg:py-20">
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-8">
        <div className="why-choose-grid">
          {/* DOM order puts the title first for a sane mobile reading order; grid-area
              placement on desktop is independent of source order, so this doesn't
              affect the desktop layout, where it renders between card 1 and card 3,
              above card 2. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
            className="why-choose-title flex flex-col gap-5 sm:gap-6 text-center md:mt-16 lg:mt-20 md:text-left"
          >
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl tracking-wider leading-[1.15] bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
              Why Leading Enterprises Choose Us
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed md:mx-0">
              We combine AI velocity, 24/7 dedicated support, and senior engineering talent to deliver enterprise-grade software that scales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05, type: 'spring', bounce: 0 }}
            className="why-choose-card1"
          >
            <FloatingCard y={y1}>
              <QueueCard step={steps[0]} />
            </FloatingCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, type: 'spring', bounce: 0 }}
            className="why-choose-card2 md:mt-10"
          >
            <FloatingCard y={y2}>
              <QueueCard step={steps[1]} />
            </FloatingCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, type: 'spring', bounce: 0 }}
            className="why-choose-card3 md:mt-20"
          >
            <FloatingCard y={y3}>
              <QueueCard step={steps[2]} />
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}