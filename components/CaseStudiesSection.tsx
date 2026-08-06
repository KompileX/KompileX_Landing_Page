'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import {
  Globe,
  Smartphone,
  ArrowUpRight,
  X,
  CheckCircle2,
  Layers,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface CaseStudy {
  id: string
  category: 'web' | 'mobile'
  title: string
  client: string
  tagline: string
  description: string
  highlight: string
  image: string
  techStack: string[]
  challenge: string
  solution: string
  outcome: string
}


const caseStudies: CaseStudy[] = [
  {
    id: 'pulse-analytics',
    category: 'web',
    title: 'Pulse Analytics',
    client: 'MetricsFlow Inc.',
    tagline: 'Real-time telemetry dashboard & event streaming platform',
    description:
      'A scalable web analytics platform that turns millions of raw event logs into live interactive charts and instant anomaly alerts.',
    highlight: '< 60ms Real-time Latency',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    challenge:
      'Handling high-throughput telemetry data streams from over 10,000 connected client apps without causing browser UI freezing.',
    solution:
      'Engineered an event-driven WebSocket pipeline paired with offscreen HTML5 Canvas rendering and optimized state buffer caching.',
    outcome: 'Reduced dashboard initial load time by 75% while maintaining smooth 60fps chart updates across 500,000+ daily events.',
  },
  {
    id: 'nexus-mobility',
    category: 'mobile',
    title: 'Nexus Mobility',
    client: 'FleetTech Global',
    tagline: 'Cross-platform fleet management & driver dispatch mobile app',
    description:
      'An intuitive iOS & Android application allowing dispatchers and fleet drivers to sync route updates and track shipments live.',
    highlight: '4.9 ★ Rating on App Store',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    techStack: ['React Native', 'Expo', 'TypeScript', 'GraphQL', 'AWS Lambda'],
    challenge:
      'Enabling seamless offline background location tracking and data synchronization across low-connectivity highway corridors.',
    solution:
      'Built custom native iOS/Android bridge modules with SQLite offline transaction queues and intelligent background sync.',
    outcome: 'Streamlined fleet operations across 12 countries with 99.8% operational uptime.',
  },
  {
    id: 'vaultx-security',
    category: 'web',
    title: 'VaultX Enterprise',
    client: 'CipherLock Systems',
    tagline: 'Zero-knowledge credentials manager and identity access control',
    description:
      'A security-first web application for engineering teams to manage, audit, and inject environment secrets securely into CI/CD pipelines.',
    highlight: 'SOC2 Type II Certified',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Go', 'Docker', 'PostgreSQL'],
    challenge:
      'Guaranteeing absolute zero-knowledge privacy where server databases never store unencrypted team credentials.',
    solution:
      'Implemented client-side AES-256-GCM encryption before payload transmission and WebAuthn multi-factor authentication.',
    outcome: 'Passed 3 independent penetration audits with zero critical vulnerabilities, onboarding 40+ enterprise teams.',
  },
  {
    id: 'carepulse-health',
    category: 'mobile',
    title: 'CarePulse Health',
    client: 'VitalMed Group',
    tagline: 'HIPAA-compliant telemedicine app & patient care portal',
    description:
      'A mobile app empowering patients to schedule doctor visits, join HD video consultations, and manage digital prescriptions effortlessly.',
    highlight: '100k+ Active Patients',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    techStack: ['React Native', 'TypeScript', 'WebRTC', 'Node.js', 'PostgreSQL'],
    challenge:
      'Delivering crisp WebRTC HD video consults over low-bandwidth 3G mobile networks without dropouts.',
    solution:
      'Integrated adaptive bitrate video streaming fallback paired with end-to-end media encryption.',
    outcome: 'Hosted over 50,000 successful video consultations with a 98% patient satisfaction score.',
  },
  {
    id: 'flowline-crm',
    category: 'web',
    title: 'Flowline CRM',
    client: 'Apex Commerce',
    tagline: 'Lightweight sales pipeline, lead scoring, and automated deal workflow',
    description:
      'A web application designed for fast-growing sales teams who outgrew spreadsheets, featuring real-time deal sync and automated email sequences.',
    highlight: '+140% Conversion Increase',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    challenge:
      'Creating a highly reactive drag-and-drop Kanban board handling thousands of active deals with multi-user concurrency.',
    solution:
      'Built an optimistic UI state machine with instant local updates and background sync reconciliation.',
    outcome: 'Shortened average deal closing cycles by 40% for over 200 active enterprise sales representatives.',
  },
  {
    id: 'zenith-pay',
    category: 'mobile',
    title: 'Zenith Pay',
    client: 'FinTech Labs',
    tagline: 'Next-gen peer-to-peer payments, QR checkout, and digital wallet',
    description:
      'A sleek mobile wallet enabling instant sub-second money transfers, utility bill payments, and merchant QR scan-and-pay.',
    highlight: '$50M+ Transactions Processed',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    techStack: ['React Native', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL'],
    challenge:
      'Guaranteeing sub-second transaction speed during high-volume flash sale traffic spikes without duplicate transfers.',
    solution:
      'Architected a distributed Redis lock queue backed by atomic double-entry ledger transactions.',
    outcome: 'Successfully processed over 2 million transactions with zero financial discrepancies.',
  },
]

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'mobile'>('all')
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)

  const filteredStudies = caseStudies.filter((study) => {
    if (activeTab === 'all') return true
    return study.category === activeTab
  })

  return (
    <section id="case-studies" className="w-full py-14 lg:py-20 bg-background relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
          className="mb-10 text-center flex flex-col items-center gap-3"
        >
          <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Case Studies
          </h2>

          <p className="max-w-xl mx-auto text-sm text-muted-foreground leading-relaxed">
            Explore real-world web and mobile applications engineered to scale with speed, security, and exceptional user experience.
          </p>

          {/* Filter Tabs: All, Web, Mobile */}
          <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-muted/40 p-1.5 backdrop-blur-sm">
            {[
              { id: 'all', label: 'All Projects', icon: Layers },
              { id: 'web', label: 'Web Applications', icon: Globe },
              { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'all' | 'web' | 'mobile')}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-full bg-background border border-border shadow-sm"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <Icon className="relative z-10 size-3.5" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
              >
                {/* Top 70% Height Image Banner Area */}
                <div className="relative h-60 w-full overflow-hidden bg-muted">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="outline" className="flex items-center gap-1.5 border-white/20 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1">
                      {study.category === 'web' ? (
                        <Globe className="size-3 text-sky-400" />
                      ) : (
                        <Smartphone className="size-3 text-emerald-400" />
                      )}
                      <span className="capitalize">{study.category}</span>
                    </Badge>
                  </div>

                  {/* Overlaid Title on Image Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-primary">
                      {study.title}
                    </h3>
                    <p className="text-[11px] font-medium text-white/70">{study.client}</p>
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="flex flex-col justify-between gap-4 p-5">
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {study.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {study.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.techStack.length > 4 && (
                      <span className="rounded-md border border-border/60 bg-muted/30 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                        +{study.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Details Button */}
                  <div className="pt-2">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex w-full items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
