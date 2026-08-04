'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { LayoutTemplate, Server, ShieldCheck, Gauge } from 'lucide-react'

const cards = [
  {
    icon: LayoutTemplate,
    title: 'Modern Web Stack',
    description:
      'We build on a stack chosen for developer velocity and long-term maintainability, not just what\'s trendy.',
    features: ['Next.js & React', 'TypeScript everywhere', 'Tailwind CSS'],
    color: 'text-foreground',
    glow: '',
  },
  {
    icon: Server,
    title: 'Robust Backends',
    description:
      'APIs and services built to handle real production traffic, with clean data models from day one.',
    features: ['Node.js & Go', 'PostgreSQL', 'REST & GraphQL'],
    color: 'text-foreground',
    glow: '',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    description:
      'Authentication, authorization, and data handling done properly, not bolted on after launch.',
    features: ['Auth & RBAC', 'Encrypted data at rest', 'Dependency auditing'],
    color: 'text-foreground',
    glow: '',
  },
  {
    icon: Gauge,
    title: 'Cloud-Native Delivery',
    description:
      'CI/CD, containerization, and monitoring set up so shipping updates is routine, not risky.',
    features: ['AWS & Vercel', 'Docker & CI/CD', 'Monitoring & alerting'],
    color: 'text-foreground',
    glow: '',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const, bounce: 0 } },
}

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="w-full py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
          className="mb-16 text-center flex flex-col gap-3"
        >
          <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            The Stack We Build With
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-muted-foreground">
            No hype, just tools we trust to ship reliable software.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div key={card.title} variants={cardVariants}>
                <Card
                  className={`group h-full transition-all duration-300 hover:shadow-xl ${card.glow} bg-card/60 backdrop-blur-sm border-border hover:border-border/80`}
                >
                  <CardContent className="p-8 flex flex-col gap-5">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-muted border border-border ${card.color}`}>
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      {card.features.map((f) => (
                        <Badge key={f} variant="outline" className="text-xs font-medium">
                          {f}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
