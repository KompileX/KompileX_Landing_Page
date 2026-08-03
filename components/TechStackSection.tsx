'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { BrainCircuit, Zap, ShieldCheck, Gauge } from 'lucide-react'

const cards = [
  {
    icon: BrainCircuit,
    title: 'Advanced AI Models',
    description:
      'Powered by state-of-the-art language models fine-tuned for debate analysis, argument detection, and real-time reasoning.',
    features: ['GPT-4 Integration', 'Custom Fine-tuning', 'Multi-modal AI'],
    color: 'text-foreground',
    glow: '',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description:
      'Ultra-low latency speech recognition and analysis engine processes your audio stream with under 500ms delay.',
    features: ['<500ms Latency', 'Streaming API', 'Parallel Processing'],
    color: 'text-foreground',
    glow: '',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-First Design',
    description:
      'Your conversations stay private. End-to-end encryption, zero-log policy, and GDPR-compliant data handling.',
    features: ['E2E Encryption', 'Zero-Log Policy', 'GDPR Compliant'],
    color: 'text-foreground',
    glow: '',
  },
  {
    icon: Gauge,
    title: 'Lightning Fast',
    description:
      'Optimized infrastructure delivers blazing-fast responses across our global edge network.',
    features: ['Global CDN', '99.9% Uptime', 'Auto-scaling'],
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
    <section className="w-full py-20 lg:py-32">
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
            Built with World-Class Technology
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-muted-foreground">
            Enterprise-grade infrastructure powering consumer-grade simplicity.
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
