'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react'
import { Globe, Smartphone, Server, MessageSquare, CheckIcon, type LucideIcon } from 'lucide-react'

interface StackCardData {
  tag: string
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
    tag: 'Automation',
    title: 'Social Media Automation',
    description:
      'We build custom automated engines that manage your social media presence, auto post content, sync client chats, and convert comments into leads automatically.',
    Icon: MessageSquare,
    points: [
      'Automated content publishing and scheduling',
      'Unified inbox and messaging sync',
      'Automated comment replies and lead capture',
      'AI conversation agents for customer inquiries',
    ],
    bg: 'linear-gradient(145deg, #bfdbfe 0%, #1e3a8a 100%)',
    fg: '#091d5a',
    chip: 'rgba(9,29,90,0.08)',
  },
  {
    tag: 'Web',
    title: 'Custom Web Engineering',
    description:
      'We build fast, secure, and visually stunning web applications. From complex SaaS systems to interactive frontends, we write clean React and Next.js code optimized for growth.',
    Icon: Globe,
    points: [
      'High converting marketing sites and SaaS platforms',
      'Optimized React and Next.js codebases',
      'Custom component design systems',
      'Production ready SEO and accessibility',
    ],
    bg: 'linear-gradient(145deg, #b9a6ff 0%, #8c6bff 100%)',
    fg: '#140630',
    chip: 'rgba(20,6,48,0.08)',
  },
  {
    tag: 'Mobile',
    title: 'Mobile Product Engineering',
    description:
      'Launch native apps for iOS and Android from a unified codebase. We build high performance React Native applications that feel native, load fast, and ship on time.',
    Icon: Smartphone,
    points: [
      'Dual platform deployment from one codebase',
      'Native grade performance and integrations',
      'Complete App Store and Google Play publishing',
      'Offline ready experience and push notifications',
    ],
    bg: 'linear-gradient(145deg, #7fe3e0 0%, #35b6c9 100%)',
    fg: '#052224',
    chip: 'rgba(5,34,36,0.08)',
  },
  {
    tag: 'Backend',
    title: 'Backend Systems Engineering',
    description:
      'Architecting secure database schemas and fast server layers with Go, Node.js, and PostgreSQL. We build API infrastructure ready to handle heavy traffic loads.',
    Icon: Server,
    points: [
      'Secure and performant server architectures',
      'Microservices built with Go and Node.js',
      'Custom Stripe billing and CRM integrations',
      'Database design optimized for high concurrency',
    ],
    bg: 'linear-gradient(145deg, #ffd684 0%, #ffb24d 100%)',
    fg: '#301a02',
    chip: 'rgba(48,26,2,0.08)',
  },
]

function StackCard({
  i,
  card,
  total,
  progress,
}: {
  i: number
  card: StackCardData
  total: number
  progress: MotionValue<number>
}) {
  const stepStart = i / total
  const stepEnd = (i + 1) / total
  const settleStart = stepStart === 0 ? -0.0001 : stepStart - 1 / total
  const inputRange = [settleStart, stepStart, stepEnd]

  const isLast = i === total - 1

  // Waiting in the stack -> settled at the front -> lifted away off the top.
  const y = useTransform(progress, inputRange, [`${i * 2}vh`, '0vh', isLast ? '0vh' : '-120vh'])
  const scale = useTransform(progress, inputRange, [1 - i * 0.05, 1, 1])
  const { Icon } = card

  return (
    <div
      className="[grid-area:1/1] flex items-center justify-center"
      style={{ zIndex: total - i }}
    >
      <motion.div
        style={{
          y,
          scale,
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
              {card.tag} · {String(i + 1).padStart(2, '0')}/{String(cards.length).padStart(2, '0')}
            </span>

            <h3 className="text-2xl font-bold leading-tight tracking-wider sm:text-3xl lg:text-[2.4rem]">
              {card.title}
            </h3>

            <p className="max-w-md text-sm leading-relaxed opacity-80 sm:text-base">
              {card.description}
            </p>

            <ul className="mt-2 flex flex-col gap-2.5">
              {card.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-medium">
                  <CheckIcon className="h-4 w-4 mt-0.5 shrink-0" strokeWidth={2.5} style={{ color: card.fg }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
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
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 600, damping: 50, mass: 0.15 })

  return (
    <section
      id="services"
      ref={container}
      className="relative bg-background py-10 lg:py-14"
      style={{ height: `${cards.length * 75}vh` }}
    >
      {/* Main section: horizontally centers everything within the sticky viewport */}
      <div className="sticky top-12 mx-auto flex h-[calc(100vh-3rem)] w-full max-w-screen-xl flex-col items-center justify-center px-4 md:top-16 md:h-[calc(100vh-4rem)] md:px-8">
        {/* Title and subtitle */}
        <div className="mb-14 lg:mb-20 w-full shrink-0 text-center flex flex-col gap-4 sm:gap-5">
          <h2 className="text-3xl font-bold tracking-wider sm:text-4xl lg:text-5xl leading-[1.15] bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            What We Actually Build
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            We don’t do bloated agency pitches or sluggish development. We build clean, high-performance software that solves your business problems and scales without breaking the bank.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full shrink-0">
          {cards.map((card, i) => (
            <StackCard key={card.title} i={i} card={card} total={cards.length} progress={smoothProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}
