'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { GraduationCap, Briefcase, Mic2, Radio, Newspaper, Scale, CheckIcon } from 'lucide-react'

const useCases = [
  {
    icon: GraduationCap,
    title: 'Students & Educators',
    badge: 'Education',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Transcribe lectures automatically',
      'Generate study notes and flashcards',
      'Fact-check educational content',
      'Research mode with clip library',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business Professionals',
    badge: 'Business',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Meeting transcription & minutes',
      'Sales call analysis',
      'Negotiation preparation',
      'Presentation feedback',
    ],
  },
  {
    icon: Mic2,
    title: 'Debaters & Public Speakers',
    badge: 'Speaking',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Argument strength analysis',
      'Fallacy detection',
      'Speech coaching',
      'Performance tracking',
    ],
  },
  {
    icon: Radio,
    title: 'Content Creators & Podcasters',
    badge: 'Content',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Interview transcription',
      'Topic analysis',
      'Clip management',
      'Content insights',
    ],
  },
  {
    icon: Newspaper,
    title: 'Journalists & Researchers',
    badge: 'Research',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Interview recording & analysis',
      'Fact verification',
      'Quote extraction',
      'Source organization',
    ],
  },
  {
    icon: Scale,
    title: 'Legal & Compliance',
    badge: 'Legal',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Deposition transcription',
      'Statement analysis',
      'Evidence documentation',
      'Audit trails',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const, bounce: 0 } },
}

export default function UseCasesSection() {
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
            Who Benefits from Cortify?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-muted-foreground">
            From students to professionals, Cortify empowers everyone to communicate better.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {useCases.map((uc) => {
            const Icon = uc.icon
            return (
              <motion.div key={uc.title} variants={itemVariants}>
                <Card className="group h-full hover:shadow-lg transition-all duration-300 bg-card/60 backdrop-blur-sm">
                  <CardContent className="p-8 flex flex-col gap-5">
                    {/* Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${uc.bg} ${uc.border} ${uc.color}`}>
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <Badge variant="outline" className={`text-xs ${uc.color} ${uc.border}`}>
                        {uc.badge}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-foreground">{uc.title}</h3>

                    {/* Items */}
                    <ul className="flex flex-col gap-2">
                      {uc.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckIcon className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${uc.color}`} strokeWidth={2.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
