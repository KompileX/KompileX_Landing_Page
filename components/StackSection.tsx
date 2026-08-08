'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react'
import { Globe, Smartphone, Server, Cloud, CheckIcon, type LucideIcon } from 'lucide-react'

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
    tag: 'Web',
    title: 'Web Application Development',
    description:
      'From marketing sites to full SaaS products, we build responsive React & Next.js frontends with performance and accessibility built in.',
    Icon: Globe,
    points: [
      'Marketing sites to full SaaS products',
      'React / Next.js frontends',
      'Design systems & component libraries',
      'Performance & accessibility built in',
    ],
    bg: 'linear-gradient(145deg, #b9a6ff 0%, #8c6bff 100%)',
    fg: '#140630',
    chip: 'rgba(20,6,48,0.08)',
  },
  {
    tag: 'Mobile',
    title: 'Mobile App Development',
    description:
      'iOS & Android applications built from one codebase using React Native & native modules, ready for App Store & Play Store launches.',
    Icon: Smartphone,
    points: [
      'iOS & Android from one codebase',
      'React Native & native modules',
      'App Store & Play Store launches',
      'Offline-first & push notifications',
    ],
    bg: 'linear-gradient(145deg, #7fe3e0 0%, #35b6c9 100%)',
    fg: '#052224',
    chip: 'rgba(5,34,36,0.08)',
  },
  {
    tag: 'Backend',
    title: 'Backend & API Engineering',
    description:
      'REST & GraphQL API design with Node.js, Go, and PostgreSQL. Built with secure authentication, billing, and scalable architecture.',
    Icon: Server,
    points: [
      'REST & GraphQL API design',
      'Node.js, Go, and PostgreSQL',
      'Auth, billing, and integrations',
      'Built to scale with real traffic',
    ],
    bg: 'linear-gradient(145deg, #ffd684 0%, #ffb24d 100%)',
    fg: '#301a02',
    chip: 'rgba(48,26,2,0.08)',
  },
  {
    tag: 'Infra',
    title: 'Cloud & DevOps',
    description:
      'Automated CI/CD pipelines, containerized deployments on AWS, Vercel, and Docker with real-time monitoring and cost-aware infrastructure.',
    Icon: Cloud,
    points: [
      'CI/CD pipelines & automated testing',
      'AWS, Vercel, and Docker deployments',
      'Monitoring, logging, and alerting',
      'Cost-aware, production-ready infra',
    ],
    bg: 'linear-gradient(145deg, #ff9fc0 0%, #ff6f9c 100%)',
    fg: '#33071a',
    chip: 'rgba(51,7,26,0.08)',
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

            <h3 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2.4rem]">
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
        <div className="mb-10 w-full shrink-0 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            What We Build
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            From first line of code to production, we cover the full stack: web, mobile, backend, and the infrastructure that keeps it all running.
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
