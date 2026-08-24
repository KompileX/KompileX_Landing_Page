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
    id: 'commerceos',
    category: 'web',
    categoryLabel: 'Multi-Tenant SaaS E-Commerce Platform',
    title: 'CommerceOS',
    client: 'Internal Product / SaaS Platform',
    role: 'Full-Stack Platform Engineering',
    timeline: '2026–Present',
    tagline: 'Multi-tenant e-commerce CMS for agencies and solution providers.',
    description:
      'You can sell commerce solutions to your customers without having to build the entire platform yourself.',
    highlight: 'Multi-Tenant SaaS Platform',
    images: ['/images/case-studies/commerceos.png'],
    techStack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Multi-Tenant Architecture'],
    overview:
      "CommerceOS is a multi-tenant e-commerce CMS built for agencies, software companies, and digital solution providers that want to offer their customers a powerful alternative to WordPress and Shopify without investing in a full commerce platform from the ground up. Partners can use the platform as a scalable foundation for launching and managing customer stores, reducing development time, infrastructure overhead, and recurring maintenance effort. At the same time, its modular architecture allows the engineering team to extend the platform or deliver fully custom solutions when a customer's requirements go beyond a standard CMS.",
    keyFeatures: [
      'Multi-tenant architecture for managing multiple customer stores from a centralized platform',
      'Self-service store creation with customizable storefront and business configurations',
      'Complete product, category, inventory, order, customer, and content management',
      'Built-in e-commerce workflows for cart, checkout, payments, shipping, and order fulfillment',
      'Scalable architecture designed for agencies and solution providers managing multiple merchants',
      'Flexible APIs and modular services for integrating third-party systems and custom business requirements',
      'Modern, customizable storefront experience built for performance and responsive commerce',
      'Agency-ready foundation that reduces the cost and development effort of launching customer stores',
      'Extensible architecture for delivering custom web and e-commerce solutions beyond standard CMS capabilities',
    ],
    challenge:
      'Agencies and software companies needed a way to launch and manage customer commerce stores without investing in building and maintaining a full e-commerce platform from scratch.',
    solution:
      'Built a multi-tenant e-commerce CMS with self-service store creation, complete product/inventory/order management, and modular APIs so partners can launch and manage stores from one centralized platform.',
    outcome: 'Gave partners a scalable foundation that cuts development time, infrastructure overhead, and maintenance effort while staying extensible for fully custom solutions.',
  },
  {
    id: 'social-engagement-platform',
    category: 'web',
    categoryLabel: 'Multi-Tenant SaaS · Social Media Management · Customer Engagement',
    title: 'Social Engagement Platform',
    client: 'Internal Product / SaaS Platform',
    role: 'Full-Stack Platform Engineering',
    timeline: '2026–Present',
    tagline: 'Omnichannel social engagement platform for agencies and technology providers.',
    description:
      'A multi-tenant social engagement platform built for agencies and technology providers to offer unified social media management, customer communication, automation, and analytics to their clients—without building the entire platform from scratch.',
    highlight: 'AI-Powered Social Engagement',
    images: ['/images/case-studies/social-media.png'],
    techStack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL', 'REST APIs', 'AI Automation'],
    overview:
      'A scalable multi-tenant social media and customer engagement platform designed for agencies, technology providers, and digital solution companies that want to offer centralized social communication and customer management capabilities to their customers without building the entire infrastructure from scratch. The platform brings multiple social and communication channels into a unified workspace, allowing businesses to manage conversations, comments, customer interactions, teams, automation, and performance from a single platform. Its multi-tenant architecture enables partner organizations to create and manage dedicated workspaces for multiple customers while maintaining secure tenant-level data isolation. Built as a flexible SaaS foundation, the platform can serve as a ready-to-deploy solution for standard social media and customer communication requirements while remaining extensible for custom workflows, integrations, automation, and client-specific business requirements.',
    keyFeatures: [
      'Multi-Tenant Workspace Management — create and manage isolated workspaces for multiple customers from a centralized platform',
      'Unified Social Inbox — manage conversations and customer interactions across connected social and communication channels from one workspace',
      'Team & Role Management — assign agents, supervisors, and administrators with role-based permissions and responsibilities',
      'Conversation & Customer Management — centralize customer conversations, interaction history, tags, notes, assignments, and follow-ups',
      'Social Media Management — manage comments, messages, mentions, and customer interactions across connected social platforms',
      'Workflow Automation — automate repetitive communication, routing, assignment, notifications, and operational workflows',
      'AI-Powered Assistance — enable intelligent responses, customer intent detection, automated support, and human handover workflows',
      'Real-Time Dashboards & Analytics — monitor response performance, conversation volume, agent activity, customer sentiment, and operational KPIs',
      'Scalable & Extensible Architecture — designed for third-party integrations, APIs, custom workflows, and partner-specific requirements',
      'Agency & Partner Ready — provide a reusable technology foundation that partners can offer across multiple customers and business verticals',
    ],
    challenge:
      'Agencies and technology providers needed a single platform to manage social conversations, customer communication, and analytics for multiple clients without building separate infrastructure per client.',
    solution:
      'Built a multi-tenant workspace platform with a unified social inbox, role-based team management, workflow automation, and AI-powered response assistance, isolated per tenant.',
    outcome: 'Gave partners a reusable, extensible foundation to offer social media management and customer engagement across multiple customers and verticals from a single workspace.',
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
