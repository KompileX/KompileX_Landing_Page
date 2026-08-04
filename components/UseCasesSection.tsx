'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { Rocket, Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, CheckIcon } from 'lucide-react'

const useCases = [
  {
    icon: Rocket,
    title: 'Startups & SaaS',
    badge: 'Startups',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'MVP to production in weeks, not months',
      'Fractional CTO-style technical guidance',
      'Scalable architecture from day one',
      'Fast iteration as requirements evolve',
    ],
  },
  {
    icon: Landmark,
    title: 'Fintech',
    badge: 'Fintech',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Secure payment & ledger systems',
      'Compliance-aware data handling',
      'Auditable transaction pipelines',
      'Integrations with banking & payment APIs',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    badge: 'Health',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Patient-data-safe architecture',
      'Scheduling & records platforms',
      'Telehealth-ready infrastructure',
      'Careful, privacy-first data design',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    badge: 'Retail',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Custom storefronts & checkout flows',
      'Inventory & order management',
      'Payment gateway integrations',
      'Performance tuned for conversion',
    ],
  },
  {
    icon: GraduationCap,
    title: 'EdTech',
    badge: 'Education',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Course & content management systems',
      'Progress tracking & analytics',
      'Video & live-session platforms',
      'Accessible, multi-device experiences',
    ],
  },
  {
    icon: Building2,
    title: 'Enterprise',
    badge: 'Enterprise',
    color: 'text-foreground',
    bg: 'bg-muted',
    border: 'border-border',
    items: [
      'Internal tools & workflow automation',
      'Legacy system modernization',
      'SSO & role-based access control',
      'Long-term support & maintenance',
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
    <section id="industries" className="w-full py-20 lg:py-32">
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
            Industries We Serve
          </h2>
          <p className="max-w-xl mx-auto text-sm text-muted-foreground">
            Different industries, same approach — senior engineering focused on what actually moves your product forward.
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
