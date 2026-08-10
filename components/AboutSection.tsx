'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { value: '4', label: 'People on the team' },
  { value: '10+', label: 'Products shipped' },
  { value: '3', label: 'Years building together' },
  { value: '100%', label: 'Remote-first' },
]

const team = [
  {
    name: 'Asaduzzaman Ashik',
    role: 'Frontend & Mobile Application Specialist',
    image: '/profiles/ashik.webp',
    blurb: 'UI/UX design implementation, client-side performance, responsive web applications, interactive user interfaces.',
  },
  {
    name: 'Md. Hridoy Mia',
    role: 'Lead Backend & Systems Architect',
    image: '/profiles/hridoy.webp',
    blurb: 'Core application architecture (DDD/CQRS), real-time streaming, background processing, scalable API design, high-performance database layer.',
  },
  {
    name: 'Md Mostafizur Rahman',
    role: 'Integrations & Workflow Automation Lead',
    image: '/profiles/mustafiz.webp',
    blurb: 'Third-party API ecosystems, SaaS/CRM integrations, multi-tenant workflows, messaging automation, MCP tool execution.',
  },
  {
    name: 'Md. Mostofa Hasib',
    role: 'AI & Full-Stack Innovations Lead',
    image: '/profiles/hasib.webp',
    blurb: 'AI/ML application engineering, cross-platform product delivery (Web, Mobile, Desktop), published R&D solutions, end-to-end full-stack feature delivery.',
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
          className="mb-8 lg:mb-12 flex flex-col items-center gap-5 sm:gap-6 text-center"
        >
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl tracking-wider leading-[1.15] bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Four engineers, each a specialist in their lane
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            KompileX designs, builds, and ships full products end to end — frontend &amp; mobile,
            backend &amp; systems, integrations, and AI — with no hand-offs.
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
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 group hover:shadow-lg bg-card/60 backdrop-blur-sm">
                <CardContent className="flex flex-col gap-5 p-6">
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border/60">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{member.role}</p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{member.blurb}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
