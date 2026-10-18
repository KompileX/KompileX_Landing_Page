const fs = require('fs');

// We have the exact component data from Script 1
const componentScript = `
const bars = [38, 52, 44, 66, 58, 74, 62, 88, 70, 82, 94, 78].map((h, i) => ({
  h, c: i === 10 ? 'var(--kpx-accent-lime, #C8F53C)' : 'var(--kpx-text-main, #0C1410)', d: (i * 0.06 + 0.5).toFixed(2) + 's'
}));

const stats = [
  { v: '10+', l: 'Products shipped' },
  { v: '3', l: 'Years building together' },
  { v: '100%', l: 'Remote-first' },
  { v: '24/7', l: 'Monitoring after launch' }
];

const insights = [
  { cat: 'Engineering', bg: '#DCE6D0', icon: 'M9 7l-5 5 5 5M15 7l5 5-5 5' },
  { cat: 'DevOps', bg: '#CFE7E0', icon: 'M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z' },
  { cat: 'AI & Automation', bg: '#F3E3D3', icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z' }
];

const clients = ['CipherLock Systems', 'VitalMed Group', 'Apex Commerce', 'FinTech Labs'];

const tech = ['JavaScript','Python','TypeScript','Java','C#','Go','Rust','C++','Kotlin','Dart','React','Next.js','Angular','Vue.js','Express.js','NestJS','Flutter','React Native','Django','FastAPI','Spring Boot','Laravel','ASP.NET Core','Nuxt.js','SvelteKit','Docker','Kubernetes','Linux','Nginx','CI/CD'];
const techLoop = tech.concat(tech);

const tag = 'Software that ships.';
const tagLoop = [tag, tag, tag, tag, tag, tag];

const services = [
  { n: '01', t: 'Web Application Development', d: 'Marketing sites, SaaS platforms and internal tools on React and Next.js, built for speed and SEO.', icon: 'M3 5h18v14H3zM3 9h18' },
  { n: '02', t: 'Mobile App Development', d: 'iOS and Android from one React Native codebase, with store publishing and offline support.', icon: 'M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2' },
  { n: '03', t: 'Backend & API Engineering', d: 'Secure services in Go, Node.js and .NET with databases designed for high concurrency.', icon: 'M4 6h16v5H4zM4 13h16v5H4zM7.5 8.5h.01M7.5 15.5h.01' },
  { n: '04', t: 'Automation & Integrations', d: 'Social media workflows, unified inboxes, CRM and Stripe integrations that remove manual work.', icon: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2' },
  { n: '05', t: 'AI & LLM Solutions', d: 'Conversational agents, retrieval over your own data and tool execution wired into your systems.', icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z' },
  { n: '06', t: 'DevOps, Cloud & VPS Hosting', d: 'Server setup, containers, CI/CD pipelines and managed hosting on VPS or cloud.', icon: 'M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z' },
  { n: '07', t: 'UI/UX & Product Design', d: 'Flows, interfaces and component design systems that engineers can build without guessing.', icon: 'M4 20l4-1 11-11-3-3L5 16zM14 7l3 3' },
  { n: '08', t: 'QA, Maintenance & Support', d: 'Testing before launch, then 24/7 monitoring, fixes and continuous improvement after.', icon: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5' },
  { n: '09', t: 'Business & Tech Consulting', d: 'Scoping, architecture reviews and roadmaps, so budget goes to the right product first.', icon: 'M12 3a9 9 0 100 18 9 9 0 000-18zM15.5 8.5l-2 5-5 2 2-5z' }
];

const models = [
  { n: '01', t: 'Project delivery', d: 'A defined product with a clear scope. We take it from idea to production.',
    pts: ['Scoped milestones and demos', 'One accountable team', 'Launch and handover included'] },
  { n: '02', t: 'Dedicated engineering', d: 'Senior engineers who join your roadmap and ship alongside your team.',
    pts: ['Direct access to the engineers', 'Scale up or down as needed', 'No junior hand-offs'] },
  { n: '03', t: 'Architecture consultation', d: 'A focused review of your system, stack and plan before you commit budget.',
    pts: ['Architecture and stack review', 'Scaling and cost advice', 'A written roadmap'] }
];

const steps = [
  { n: '01', t: 'Discover', d: 'We learn your goals, users and constraints, then agree on scope.', o: 'Requirements · scope' },
  { n: '02', t: 'Design', d: 'Flows, interfaces and architecture, reviewed with you before code.', o: 'UX flows · UI · architecture' },
  { n: '03', t: 'Build', d: 'Short sprints with working demos, so you see progress every step.', o: 'Sprints · demos · reviews' },
  { n: '04', t: 'Launch', d: 'Testing, deployment and handover to a production environment.', o: 'QA · deploy · handover' },
  { n: '05', t: 'Support', d: 'Monitoring, fixes and new features once real users arrive.', o: 'Monitoring · upkeep · growth' }
];

const infra = [
  'VPS and server setup, hardened', 'Docker and Kubernetes deployments', 'CI/CD pipelines',
  '24/7 monitoring and alerting', 'Backups and recovery plans', 'SSL, DNS, CDN and firewalls'
];

const rack = [0, 1, 2, 3].map(i => ({ d: (i * 0.5) + 's', d2: (i * 0.5 + 0.8) + 's' }));

const pillars = [
  { n: '01', t: 'AI-assisted speed', d: 'AI tools handle the repetitive work and boilerplate, so the team spends its time on architecture and ships in days rather than months.', icon: 'M13 2L4 14h7l-1 8 9-12h-7z' },
  { n: '02', t: 'Continuous systems monitoring', d: '24/7 alerts, server issue resolution and database optimization keep what we ship healthy long after launch.', icon: 'M3 12h4l3-8 4 16 3-8h4' },
  { n: '03', t: 'Pure senior engineering', d: 'You work directly with veteran architects. No junior developers, no hand-offs, no telephone game.', icon: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z' }
];

const industries = ['E-commerce & retail', 'Healthcare', 'Fintech & payments', 'Cybersecurity', 'Sales & CRM', 'Agencies & marketing'];

const quotes = [{ co: 'COMPANY' }, { co: 'COMPANY' }, { co: 'COMPANY' }];

const faqSrc = [
  ['How does a project start?', 'Tell us what you want to build. We review it, ask the right questions, then come back with a scope and an approach. A conversation always comes before any commitment.'],
  ['Who will work on my project?', 'Senior engineers and architects work with you directly. We do not staff projects with junior developers.'],
  ['Can you host and manage our servers?', 'Yes. We set up and secure VPS and cloud servers, containerize applications, build CI/CD pipelines, and watch production with 24/7 alerts and database optimization.'],
  ['Do you work with international clients?', 'Yes. We are remote-first, based in Dhaka, and ship worldwide.'],
  ['What happens after launch?', 'We stay on: monitoring, server issue resolution, database optimization and ongoing improvements as your product grows.'],
  ['How much does it cost?', 'It depends on scope and the engagement model you choose. Share your idea and we reply with a proposal. [ADD YOUR PRICING POLICY OR STARTING RANGE]']
];

const allWorks = [
  { id: 'commerceos', title: 'CommerceOS', kind: 'web', meta: 'Web app · Internal product', desc: 'A multi-tenant e-commerce CMS for agencies and solution providers, built as an alternative to WordPress and Shopify.', stack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL'], bg: '#DCE6D0', ac: '#C8F53C', href: '/case-studies/commerceos' },
  { id: 'social-engagement', title: 'Social Engagement Platform', kind: 'web', meta: 'Web app · Internal product', desc: 'A multi-tenant platform for agencies to offer social media management, messaging, automation and analytics.', stack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL'], bg: '#0C1410', ac: '#C8F53C', href: '#work' },
  { id: 'vaultx', title: 'VaultX Enterprise', kind: 'web', meta: 'Web app · CipherLock Systems', desc: 'A security-first app for managing, auditing and injecting secrets into CI/CD pipelines.', stack: ['React', 'TypeScript', 'Tailwind CSS', 'Go'], bg: '#E4E1F2', ac: '#0C1410', href: '#work' },
  { id: 'carepulse', title: 'CarePulse Health', kind: 'mobile', meta: 'Mobile app · VitalMed Group', desc: 'Patients schedule visits, join HD video consultations and manage digital prescriptions.', stack: ['React Native', 'TypeScript', 'WebRTC', 'Node.js'], bg: '#CFE7E0', ac: '#1FB36B', href: '#work' },
  { id: 'flowline', title: 'Flowline CRM', kind: 'web', meta: 'Web app · Apex Commerce', desc: 'A CRM for growing sales teams, with real-time deal sync and automated email sequences.', stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], bg: '#F3E3D3', ac: '#0C1410', href: '#work' },
  { id: 'zenith', title: 'Zenith Pay', kind: 'mobile', meta: 'Mobile app · FinTech Labs', desc: 'A mobile wallet with sub-second transfers, bill payments and merchant QR pay.', stack: ['React Native', 'TypeScript', 'Node.js', 'Redis'], bg: '#C8F53C', ac: '#0C1410', href: '#work' }
];
`;

console.log('Component script prepared.');
