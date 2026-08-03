'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { motion } from 'motion/react'
import { LayoutGrid, Mic, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: LayoutGrid,
    title: 'Select Your Mode',
    description:
      'Choose from Listen & Analyze, P2P Debate, AI Training, Decode Mode, or Knowledge Base — each optimized for different learning and communication needs.',
    badge: 'Setup',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
  },
  {
    number: '02',
    icon: Mic,
    title: 'Start Recording',
    description:
      'Begin your conversation, lecture, meeting, or debate. KompileX captures audio in real-time with support for Zoom, Google Meet, Teams, YouTube and Discord.',
    badge: 'Capture',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Get Live Insights',
    description:
      'Receive real-time transcription, argument analysis, fact-checking, counter-arguments, and actionable feedback as the conversation unfolds.',
    badge: 'Analyze',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const, bounce: 0 } },
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-20 lg:py-32">
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
            How It Works
          </h2>
          <p className="max-w-xl mx-auto text-sm text-muted-foreground">
            Get started in minutes. No complex setup required.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div key={step.number} variants={itemVariants} className="relative">
                {/* Connector line between cards (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%+0px)] w-6 z-10">
                    <Separator className="w-full" />
                  </div>
                )}

                <Card className="group h-full hover:shadow-lg transition-all duration-300 bg-card/60 backdrop-blur-sm">
                  <CardContent className="p-8 flex flex-col gap-6">
                    {/* Top row: icon + step number */}
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${step.bg} ${step.border} ${step.color}`}>
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-4xl font-black text-muted-foreground/20 leading-none select-none">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`text-xs ${step.color} ${step.border}`}>
                          {step.badge}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
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
