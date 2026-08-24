'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Globe, Smartphone, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { LayerStack, Card } from '@/components/ui/layer-stack'

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
    id: 'commerceos',
    category: 'web',
    title: 'CommerceOS',
    client: 'Internal Product / SaaS Platform',
    tagline: 'Multi-tenant e-commerce CMS for agencies and solution providers',
    description:
      'You can sell commerce solutions to your customers without having to build the entire platform yourself.',
    highlight: 'Multi-Tenant SaaS Platform',
    image: '/images/case-studies/commerceos.png',
    techStack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Multi-Tenant Architecture'],
    challenge:
      'Agencies and software companies needed a way to launch and manage customer commerce stores without investing in building and maintaining a full e-commerce platform from scratch.',
    solution:
      'Built a multi-tenant e-commerce CMS with self-service store creation, complete product/inventory/order management, and modular APIs so partners can launch and manage stores from one centralized platform.',
    outcome: 'Gave partners a scalable foundation that cuts development time, infrastructure overhead, and maintenance effort while staying extensible for fully custom solutions.',
  },
  {
    id: 'social-engagement-platform',
    category: 'web',
    title: 'Social Engagement Platform',
    client: 'Internal Product / SaaS Platform',
    tagline: 'Omnichannel social engagement platform for agencies and technology providers',
    description:
      'A multi-tenant social engagement platform built for agencies and technology providers to offer unified social media management, customer communication, automation, and analytics to their clients—without building the entire platform from scratch.',
    highlight: 'AI-Powered Social Engagement',
    image: '/images/case-studies/social-media.png',
    techStack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL', 'REST APIs', 'AI Automation'],
    challenge:
      'Agencies and technology providers needed a single platform to manage social conversations, customer communication, and analytics for multiple clients without building separate infrastructure per client.',
    solution:
      'Built a multi-tenant workspace platform with a unified social inbox, role-based team management, workflow automation, and AI-powered response assistance, isolated per tenant.',
    outcome: 'Gave partners a reusable, extensible foundation to offer social media management and customer engagement across multiple customers and verticals from a single workspace.',
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

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="group flex flex-col justify-start overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl cursor-pointer relative size-full">
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
      <div className="flex flex-col justify-between gap-4 p-5 bg-card border-t border-border/40 rounded-b-xl relative z-10 flex-grow">
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
            className="inline-flex w-full items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground group/btn"
          >
            <span>View Details</span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="w-full py-14 lg:py-20 bg-background relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
          className="mb-14 lg:mb-20 text-center flex flex-col items-center gap-5 sm:gap-6"
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl tracking-wider leading-[1.15] bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Case Studies
          </h2>

          <p className="max-w-2xl mx-auto text-base text-muted-foreground sm:text-lg leading-relaxed">
            Explore real-world web and mobile applications engineered to scale with speed, security, and exceptional user experience.
          </p>
        </motion.div>

        {/* Project Cards Layer Stack */}
        <div className="max-w-[1163px] mx-auto">
          <LayerStack cardWidth={355} cardGap={15} stageHeight={460}>
            {caseStudies.map((study) => (
              <Card key={study.id} className="relative bg-card border border-border rounded-xl">
                <CaseStudyCard study={study} />
              </Card>
            ))}
          </LayerStack>
        </div>

      </div>
    </section>
  )
}
