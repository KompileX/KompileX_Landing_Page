'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { Globe, Smartphone, Server, Cloud, CheckIcon } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    badge: 'Web',
    items: [
      'Marketing sites to full SaaS products',
      'React / Next.js frontends',
      'Design systems & component libraries',
      'Performance & accessibility built in',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    badge: 'Mobile',
    items: [
      'iOS & Android from one codebase',
      'React Native & native modules',
      'App Store & Play Store launches',
      'Offline-first & push notifications',
    ],
  },
  {
    icon: Server,
    title: 'Backend & API Engineering',
    badge: 'Backend',
    items: [
      'REST & GraphQL API design',
      'Node.js, Go, and PostgreSQL',
      'Auth, billing, and integrations',
      'Built to scale with real traffic',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    badge: 'Infra',
    items: [
      'CI/CD pipelines & automated testing',
      'AWS, Vercel, and Docker deployments',
      'Monitoring, logging, and alerting',
      'Cost-aware, production-ready infra',
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

export default function FeaturesSection() {
  return (
    <section id="services" className="w-full py-20 lg:py-32 bg-background">
      <div className="px-4 mx-auto max-w-screen-xl md:px-8">

        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' as const, bounce: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-foreground">
            What We Build
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground">
            From first line of code to production, we cover the full stack — web, mobile, backend, and the infrastructure that keeps it all running.
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
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="group h-full hover:shadow-lg transition-all duration-300 bg-card/60 backdrop-blur-sm">
                  <CardContent className="p-8 flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.badge}
                      </Badge>
                    </div>

                    <h3 className="text-base font-semibold text-foreground">{service.title}</h3>

                    <ul className="flex flex-col gap-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-foreground" strokeWidth={2.5} />
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
