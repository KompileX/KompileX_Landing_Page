'use client';

import React from 'react';

export default function TechMarquee() {
  const tech = [
    'JavaScript',
    'Python',
    'TypeScript',
    'Java',
    'C#',
    'Go',
    'Rust',
    'C++',
    'Kotlin',
    'Dart',
    'React',
    'Next.js',
    'Angular',
    'Vue.js',
    'Express.js',
    'NestJS',
    'Flutter',
    'React Native',
    'Django',
    'FastAPI',
    'Spring Boot',
    'Laravel',
    'ASP.NET Core',
    'Nuxt.js',
    'SvelteKit',
    'Docker',
    'Kubernetes',
    'Linux',
    'Nginx',
    'CI/CD',
  ];

  const fullList = [...tech, ...tech];

  return (
    <section
      aria-label="Technologies we work with"
      className="border-t border-b py-6.5 transition-colors duration-200"
      style={{
        background: 'var(--kpx-surface)',
        borderColor: 'var(--kpx-border)',
      }}
    >
      <div className="mq">
        <div className="mq-track">
          {fullList.map((t, idx) => (
            <span
              key={idx}
              className="disp inline-flex items-center gap-9 pl-9 text-[26px] font-semibold whitespace-nowrap"
              style={{ color: 'var(--kpx-marquee-text)' }}
            >
              <span>{t}</span>
              <span
                className="w-2 h-2 rounded-full border border-black/80"
                style={{ background: 'var(--kpx-marquee-star)' }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
