export type Category = 'Languages' | 'Frontend' | 'Backend' | 'Mobile' | 'Data' | 'DevOps & Cloud' | 'AI';
export type Tool = { name: string; cat: Category; icon?: string };

// `icon` = file name in /public/tech (devicon). Without one, a lettered tile is shown.
export const CATEGORIES: Category[] = ['Languages', 'Frontend', 'Backend', 'Mobile', 'Data', 'DevOps & Cloud', 'AI'];

export const TOOLS: Tool[] = [
  { name: 'JavaScript', cat: 'Languages', icon: 'javascript' }, { name: 'TypeScript', cat: 'Languages', icon: 'typescript' },
  { name: 'Python', cat: 'Languages', icon: 'python' }, { name: 'Go', cat: 'Languages', icon: 'go' },
  { name: 'Rust', cat: 'Languages', icon: 'rust' }, { name: 'Java', cat: 'Languages', icon: 'java' },
  { name: 'C#', cat: 'Languages', icon: 'csharp' }, { name: 'C++', cat: 'Languages', icon: 'cplusplus' },
  { name: 'Kotlin', cat: 'Languages', icon: 'kotlin' }, { name: 'Dart', cat: 'Languages', icon: 'dart' },
  { name: 'React', cat: 'Frontend', icon: 'react' }, { name: 'Next.js', cat: 'Frontend', icon: 'nextjs' },
  { name: 'Angular', cat: 'Frontend', icon: 'angularjs' }, { name: 'Vue.js', cat: 'Frontend', icon: 'vuejs' },
  { name: 'Nuxt.js', cat: 'Frontend', icon: 'nuxtjs' }, { name: 'SvelteKit', cat: 'Frontend', icon: 'svelte' },
  { name: 'Tailwind CSS', cat: 'Frontend', icon: 'tailwindcss' },
  { name: 'Node.js', cat: 'Backend', icon: 'nodejs' }, { name: 'Express.js', cat: 'Backend', icon: 'express' },
  { name: 'NestJS', cat: 'Backend', icon: 'nestjs' }, { name: 'Django', cat: 'Backend', icon: 'django' },
  { name: 'FastAPI', cat: 'Backend', icon: 'fastapi' }, { name: 'Spring Boot', cat: 'Backend', icon: 'spring' },
  { name: 'Laravel', cat: 'Backend', icon: 'laravel' }, { name: 'ASP.NET Core', cat: 'Backend', icon: 'dotnetcore' },
  { name: 'Stripe', cat: 'Backend' },
  { name: 'React Native', cat: 'Mobile', icon: 'react' }, { name: 'Flutter', cat: 'Mobile', icon: 'flutter' },
  { name: 'WebRTC', cat: 'Mobile' },
  { name: 'PostgreSQL', cat: 'Data', icon: 'postgresql' }, { name: 'Redis', cat: 'Data', icon: 'redis' },
  { name: 'MongoDB', cat: 'Data', icon: 'mongodb' }, { name: 'MySQL', cat: 'Data', icon: 'mysql' },
  { name: 'Docker', cat: 'DevOps & Cloud', icon: 'docker' }, { name: 'Kubernetes', cat: 'DevOps & Cloud', icon: 'kubernetes' },
  { name: 'Linux', cat: 'DevOps & Cloud', icon: 'linux' }, { name: 'Nginx', cat: 'DevOps & Cloud', icon: 'nginx' },
  { name: 'GitHub Actions', cat: 'DevOps & Cloud', icon: 'githubactions' }, { name: 'Terraform', cat: 'DevOps & Cloud', icon: 'terraform' },
  { name: 'AWS', cat: 'DevOps & Cloud' }, { name: 'DigitalOcean', cat: 'DevOps & Cloud', icon: 'digitalocean' },
  { name: 'Hetzner', cat: 'DevOps & Cloud' }, { name: 'Cloudflare', cat: 'DevOps & Cloud', icon: 'cloudflare' },
  { name: 'Prometheus', cat: 'DevOps & Cloud', icon: 'prometheus' }, { name: 'Grafana', cat: 'DevOps & Cloud', icon: 'grafana' },
  { name: 'LLM apps', cat: 'AI' }, { name: 'RAG', cat: 'AI' }, { name: 'MCP', cat: 'AI' },
  { name: 'PyTorch', cat: 'AI', icon: 'pytorch' },
];
