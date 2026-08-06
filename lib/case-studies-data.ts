export interface CaseStudy {
  id: string
  category: 'web' | 'mobile'
  categoryLabel: string
  title: string
  client: string
  role: string
  timeline: string
  tagline: string
  description: string
  highlight: string
  images: string[]
  techStack: string[]
  overview: string
  keyFeatures: string[]
  challenge: string
  solution: string
  outcome: string
  demoUrl?: string
  sourceUrl?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'pulse-analytics',
    category: 'web',
    categoryLabel: 'Enterprise SaaS Web Application',
    title: 'Pulse Analytics (PMS)',
    client: 'MetricsFlow Inc.',
    role: 'Lead Full-Stack Architect',
    timeline: '2025–2026',
    tagline: 'Enterprise-grade telemetry SaaS Property & Analytics Management System with AI automation.',
    description:
      'A scalable web analytics platform that turns millions of raw event logs into live interactive charts and instant anomaly alerts.',
    highlight: '< 60ms Real-time Latency',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST API', 'Sass'],
    overview:
      'Pulse Analytics is an enterprise-grade analytics platform designed to streamline data operations and enhance system insights through intelligent automation and AI-driven telemetry. The platform provides a comprehensive management system enabling operational teams to track real-time traffic, event logs, automated alerts, system health, revenue performance, and workforce task assignment from a centralized dashboard.',
    keyFeatures: [
      'Comprehensive telemetry monitoring and event stream processing integration',
      'Real-time data visualization and interactive live metric charting',
      'Automated anomaly detection with instant notification triggers',
      'Billing, invoicing, and revenue performance analytics modules',
      'Centralized team workspace and task assignment workflows',
      'Custom API integration for third-party cloud data warehouses',
    ],
    challenge:
      'Handling high-throughput telemetry data streams from over 10,000 connected client apps without causing browser UI freezing.',
    solution:
      'Engineered an event-driven WebSocket pipeline paired with offscreen HTML5 Canvas rendering and optimized state buffer caching.',
    outcome: 'Reduced dashboard initial load time by 75% while maintaining smooth 60fps chart updates across 500,000+ daily events.',
    demoUrl: 'https://kompilex.com',
    sourceUrl: 'https://github.com',
  },
  {
    id: 'nexus-mobility',
    category: 'mobile',
    categoryLabel: 'Cross-Platform Mobile Application',
    title: 'Nexus Mobility',
    client: 'FleetTech Global',
    role: 'Mobile Systems Architect',
    timeline: '2025–2026',
    tagline: 'Next-generation fleet tracking, GPS route optimization, and driver dispatch mobile app.',
    description:
      'An intuitive iOS & Android application allowing dispatchers and fleet drivers to sync route updates and track shipments live.',
    highlight: '4.9 ★ Rating on App Store',
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1400&q=80',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'GraphQL', 'AWS Lambda', 'SQLite', 'Tailwind CSS'],
    overview:
      'Nexus Mobility is a cross-platform fleet management application engineered for real-time logistics operations. It connects vehicle telematics with driver dispatching, automated job assignments, route optimization, and digital proof of delivery to ensure max operational efficiency across national highway corridors.',
    keyFeatures: [
      'Live GPS fleet tracking and turn-by-turn route optimization',
      'Offline-first architecture with SQLite background sync queue',
      'Instant push notifications for job dispatches and urgent re-routes',
      'Digital signature capture and automated delivery receipts',
      'Driver safety analytics and fuel consumption diagnostics',
      'Role-based driver and dispatcher mobile portals',
    ],
    challenge:
      'Enabling seamless offline background location tracking and data synchronization across low-connectivity highway corridors.',
    solution:
      'Built custom native iOS/Android bridge modules with SQLite offline transaction queues and intelligent background sync.',
    outcome: 'Streamlined fleet operations across 12 countries with 99.8% operational uptime.',
    demoUrl: 'https://kompilex.com',
    sourceUrl: 'https://github.com',
  },
  {
    id: 'vaultx-security',
    category: 'web',
    categoryLabel: 'Enterprise Security Web App',
    title: 'VaultX Enterprise',
    client: 'CipherLock Systems',
    role: 'Security & Lead Frontend Engineer',
    timeline: '2024–2025',
    tagline: 'Zero-knowledge credentials manager, environment secrets vault, and access control suite.',
    description:
      'A security-first web application for engineering teams to manage, audit, and inject environment secrets securely into CI/CD pipelines.',
    highlight: 'SOC2 Type II Certified',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Go', 'Docker', 'PostgreSQL', 'WebAuthn'],
    overview:
      'VaultX Enterprise is a zero-trust credentials management solution built for modern software teams. It provides client-side end-to-end encryption for API keys, database credentials, and SSH certificates, preventing unauthorized server access while enabling seamless environment synchronization across developer machines and build servers.',
    keyFeatures: [
      'Client-side AES-256-GCM zero-knowledge encryption engine',
      'Granular role-based access controls (RBAC) and team policy management',
      'Real-time compliance auditing and key access trail logging',
      'Hardware security key support via WebAuthn and YubiKey SSO',
      'Automated secret rotation for database connection strings',
      'Native CLI and Webhook integrations for popular CI/CD tools',
    ],
    challenge:
      'Guaranteeing absolute zero-knowledge privacy where server databases never store unencrypted team credentials.',
    solution:
      'Implemented client-side AES-256-GCM encryption before payload transmission and WebAuthn multi-factor authentication.',
    outcome: 'Passed 3 independent penetration audits with zero critical vulnerabilities, onboarding 40+ enterprise teams.',
    demoUrl: 'https://kompilex.com',
    sourceUrl: 'https://github.com',
  },
  {
    id: 'carepulse-health',
    category: 'mobile',
    categoryLabel: 'Telehealth & Care Mobile App',
    title: 'CarePulse Health',
    client: 'VitalMed Group',
    role: 'Senior React Native Developer',
    timeline: '2025–2026',
    tagline: 'HIPAA-compliant telemedicine platform, virtual consultation suite, and patient portal.',
    description:
      'A mobile app empowering patients to schedule doctor visits, join HD video consultations, and manage digital prescriptions effortlessly.',
    highlight: '100k+ Active Patients',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1400&q=1400',
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1400&q=80',
    ],
    techStack: ['React Native', 'TypeScript', 'WebRTC', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    overview:
      'CarePulse Health transforms patient care delivery by providing secure, remote healthcare consultations. Patients can browse specialist profiles, book appointments, attend WebRTC video calls, and access encrypted electronic medical records (EMR) directly from their iOS or Android smartphones.',
    keyFeatures: [
      'Encrypted peer-to-peer WebRTC video and audio consultations',
      'Automated appointment scheduling with Google & Apple calendar sync',
      'Digital prescription issuance and pharmacy delivery tracking',
      'HIPAA-compliant patient record storage and health metrics dashboard',
      'In-app chat messaging with doctors and care coordinators',
      'Smart symptom checker powered by medical AI algorithms',
    ],
    challenge:
      'Delivering crisp WebRTC HD video consults over low-bandwidth 3G mobile networks without dropouts.',
    solution:
      'Integrated adaptive bitrate video streaming fallback paired with end-to-end media encryption.',
    outcome: 'Hosted over 50,000 successful video consultations with a 98% patient satisfaction score.',
    demoUrl: 'https://kompilex.com',
    sourceUrl: 'https://github.com',
  },
  {
    id: 'flowline-crm',
    category: 'web',
    categoryLabel: 'Sales Automation Web App',
    title: 'Flowline CRM',
    client: 'Apex Commerce',
    role: 'Lead Frontend Developer',
    timeline: '2024–2025',
    tagline: 'Lightweight sales pipeline manager, lead scoring engine, and deal automation suite.',
    description:
      'A web application designed for fast-growing sales teams who outgrew spreadsheets, featuring real-time deal sync and automated email sequences.',
    highlight: '+140% Conversion Increase',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Zustand'],
    overview:
      'Flowline CRM is a streamlined, high-velocity sales CRM created for high-growth revenue teams. It replaces cluttered legacy software with an ultra-responsive drag-and-drop deal board, automated email sequences, intelligent lead scoring, and instant pipeline conversion forecasting.',
    keyFeatures: [
      'Interactive drag-and-drop Kanban deal management board',
      'Automated email campaign drip sequences and open rate tracking',
      'AI-assisted lead scoring and deal closure probability metrics',
      'Centralized contact history timeline with email and call logging',
      'Customizable deal stages and revenue forecast analytics',
      'Multi-currency support and real-time team collaboration notes',
    ],
    challenge:
      'Creating a highly reactive drag-and-drop Kanban board handling thousands of active deals with multi-user concurrency.',
    solution:
      'Built an optimistic UI state machine with instant local updates and background sync reconciliation.',
    outcome: 'Shortened average deal closing cycles by 40% for over 200 active enterprise sales representatives.',
    demoUrl: 'https://kompilex.com',
    sourceUrl: 'https://github.com',
  },
  {
    id: 'zenith-pay',
    category: 'mobile',
    categoryLabel: 'Fintech Payment Mobile App',
    title: 'Zenith Pay',
    client: 'FinTech Labs',
    role: 'Full-Stack Mobile Engineer',
    timeline: '2025–2026',
    tagline: 'Next-generation peer-to-peer digital wallet, QR checkout, and instant transfer mobile app.',
    description:
      'A sleek mobile wallet enabling instant sub-second money transfers, utility bill payments, and merchant QR scan-and-pay.',
    highlight: '$50M+ Transactions Processed',
    images: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1556742049-0a67daf4005a?auto=format&fit=crop&w=1400&q=80',
    ],
    techStack: ['React Native', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'Tailwind CSS'],
    overview:
      'Zenith Pay is a secure digital wallet app empowering users to make sub-second peer-to-peer money transfers, pay utility bills, and complete merchant QR code checkouts. Built with double-entry accounting ledgers and biometrically authenticated transaction approvals.',
    keyFeatures: [
      'Instant P2P transfers using QR code scanning or phone contacts',
      'Biometric authentication (FaceID & Fingerprint) for payments',
      'Virtual and physical debit card issuing and spending limits',
      'Real-time transaction history with instant push notifications',
      'Automated recurring bill payment scheduling and reminders',
      'Bank-grade TLS 1.3 encryption and anti-fraud anomaly flags',
    ],
    challenge:
      'Guaranteeing sub-second transaction speed during high-volume flash sale traffic spikes without duplicate transfers.',
    solution:
      'Architected a distributed Redis lock queue backed by atomic double-entry ledger transactions.',
    outcome: 'Successfully processed over 2 million transactions with zero financial discrepancies.',
    demoUrl: 'https://kompilex.com',
    sourceUrl: 'https://github.com',
  },
]

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.id === id)
}
