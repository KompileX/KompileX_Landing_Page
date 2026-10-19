export type Member = { name: string; role: string; photo?: string; points: string[] };

export const TEAM: Member[] = [
  {
    name: 'Md. Hridoy Mia',
    role: 'Lead Backend & Systems Architect',
    photo: '/profiles/hridoy.webp',
    points: ['Core architecture (DDD/CQRS)', 'Real-time streaming', 'Background processing', 'Scalable API design', 'High-performance database layer'],
  },
  {
    name: 'Md Mostafizur Rahman',
    role: 'Integrations & Workflow Automation Lead',
    photo: '/profiles/mustafiz.webp',
    points: ['Third-party API ecosystems', 'SaaS/CRM integrations', 'Multi-tenant workflows', 'Messaging automation', 'MCP tool execution'],
  },
  {
    name: 'Md. Mostofa Hasib',
    role: 'AI & Full-Stack Innovations Lead',
    photo: '/profiles/hasib.webp',
    points: ['AI/ML application engineering', 'Cross-platform delivery (Web, Mobile, Desktop)', 'Published R&D solutions', 'End-to-end full-stack feature delivery'],
  },
  {
    name: 'Tareq Bin Bashar',
    role: 'Business Consultant',
    points: ['Business analysis and requirements', 'Project scoping and planning', 'Client success and delivery coordination', 'Partnership and growth strategy'],
  },
];

export const HABITS = [
  { title: 'Senior-only delivery', text: 'You talk to the engineers building your product. No junior hand-offs.' },
  { title: 'Own it end to end', text: 'Design, code, servers and support sit under one roof, so nothing falls between teams.' },
  { title: 'Show progress early', text: 'Working demos at every step, so direction changes cost hours, not months.' },
  { title: 'Stay after launch', text: 'Monitoring, fixes and new features once real users arrive.' },
];
