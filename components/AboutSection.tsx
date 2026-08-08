'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Compass, Code2, Server, Palette } from 'lucide-react'

const stats = [
  { value: '4', label: 'People on the team' },
  { value: '10+', label: 'Products shipped' },
  { value: '3', label: 'Years building together' },
  { value: '100%', label: 'Remote-first' },
]

const team = [
  {
    name: 'Alex Rivera',
    role: 'Product & Strategy',
    blurb: 'Turns fuzzy ideas into shippable roadmaps and keeps every project scoped to what actually matters.',
    Icon: Compass,
    bg: 'linear-gradient(145deg, #b9a6ff 0%, #8c6bff 100%)',
    fg: '#140630',
  },
  {
    name: 'Jordan Lee',
    role: 'Frontend Engineering',
    blurb: 'Builds the interfaces users touch every day, fast, accessible, and polished down to the last pixel.',
    Icon: Code2,
    bg: 'linear-gradient(145deg, #7fe3e0 0%, #35b6c9 100%)',
    fg: '#052224',
  },
  {
    name: 'Sam Patel',
    role: 'Backend Engineering',
    blurb: 'Designs the systems underneath: APIs, databases, and infrastructure that hold up under real traffic.',
    Icon: Server,
    bg: 'linear-gradient(145deg, #ffd684 0%, #ffb24d 100%)',
    fg: '#301a02',
  },
  {
    name: 'Morgan Chen',
    role: 'Product Design',
    blurb: 'Shapes the look and feel of every product, from first wireframe to the details no one notices but everyone feels.',
    Icon: Palette,
    bg: 'linear-gradient(145deg, #ff9fc0 0%, #ff6f9c 100%)',
    fg: '#33071a',
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

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-14 lg:py-20">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
          className="flex flex-col items-center gap-4 mb-10 text-center"
        >
          <h2 className="max-w-2xl text-3xl font-bold text-transparent sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text">
            Four engineers, one software company
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            We&apos;re KompileX a software development company built by four engineers who design,
            build, and ship full-stack products for our clients end to end. No hand-offs, no bloated
            process, just a small team that owns every project from first line of code to production.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 mb-10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col items-center gap-1 py-6 text-center border rounded-2xl border-border bg-card/60 backdrop-blur-sm"
            >
              <span className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</span>
              <span className="text-xs text-muted-foreground sm:text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Team grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => {
            const { Icon } = member
            return (
              <motion.div key={member.name} variants={itemVariants}>
                <Card className="h-full transition-all duration-300 group hover:shadow-lg bg-card/60 backdrop-blur-sm">
                  <CardContent className="flex flex-col gap-5 p-6">
                    <div
                      className="flex items-center justify-center h-14 w-14 rounded-2xl"
                      style={{ background: member.bg }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: member.fg }} />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm font-medium text-muted-foreground">{member.role}</p>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">{member.blurb}</p>
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
