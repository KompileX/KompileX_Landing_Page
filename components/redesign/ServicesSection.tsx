'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      n: '01',
      t: 'Web Application Development',
      d: 'Marketing sites, SaaS platforms and internal tools on React and Next.js, built for speed and SEO.',
      icon: 'M3 5h18v14H3zM3 9h18',
    },
    {
      n: '02',
      t: 'Mobile App Development',
      d: 'iOS and Android from one React Native codebase, with store publishing and offline support.',
      icon: 'M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2',
    },
    {
      n: '03',
      t: 'Backend & API Engineering',
      d: 'Secure services in Go, Node.js and .NET with databases designed for high concurrency.',
      icon: 'M4 6h16v5H4zM4 13h16v5H4zM7.5 8.5h.01M7.5 15.5h.01',
    },
    {
      n: '04',
      t: 'Automation & Integrations',
      d: 'Social media workflows, unified inboxes, CRM and Stripe integrations that remove manual work.',
      icon: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2',
    },
    {
      n: '05',
      t: 'AI & LLM Solutions',
      d: 'Conversational agents, retrieval over your own data and tool execution wired into your systems.',
      icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z',
    },
    {
      n: '06',
      t: 'DevOps, Cloud & VPS Hosting',
      d: 'Server setup, containers, CI/CD pipelines and managed hosting on VPS or cloud.',
      icon: 'M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z',
    },
    {
      n: '07',
      t: 'UI/UX & Product Design',
      d: 'Flows, interfaces and component design systems that engineers can build without guessing.',
      icon: 'M4 20l4-1 11-11-3-3L5 16zM14 7l3 3',
    },
    {
      n: '08',
      t: 'QA, Maintenance & Support',
      d: 'Testing before launch, then 24/7 monitoring, fixes and continuous improvement after.',
      icon: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5',
    },
    {
      n: '09',
      t: 'Business & Tech Consulting',
      d: 'Scoping, architecture reviews and roadmaps, so budget goes to the right product first.',
      icon: 'M12 3a9 9 0 100 18 9 9 0 000-18zM15.5 8.5l-2 5-5 2 2-5z',
    },
  ];

  return (
    <section id="services" className="sec">
      <div className="wrap">
        <div className="flex flex-wrap justify-between items-end gap-7">
          <div>
            <p className="eyebrow">01 / Services</p>
            <h2 className="h2 mt-4 max-w-[820px]">
              Everything it takes to build, ship and run software.
            </h2>
          </div>
          <Link href="/services" className="btn btn-line">
            <span>All services</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Link
              key={i}
              href="/services"
              className="card svc flex flex-col gap-4.5 rounded-[28px] border p-7.5 min-h-[268px] group transition-all"
              style={{
                background: 'var(--kpx-surface)',
                borderColor: 'var(--kpx-border)',
              }}
            >
              <div className="flex justify-between items-center">
                <span
                  className="ico w-14 h-14 rounded-[18px] flex items-center justify-center transition-colors"
                  style={{ background: 'var(--kpx-card-icon-bg)' }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--kpx-card-icon-stroke)"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={s.icon} />
                  </svg>
                </span>
                <span
                  className="mono text-[12.5px] font-semibold"
                  style={{ color: 'var(--kpx-text-muted)' }}
                >
                  {s.n}
                </span>
              </div>

              <h3 className="disp text-[27px] font-bold leading-tight mt-auto">
                {s.t}
              </h3>

              <p
                className="text-[16.5px] leading-relaxed"
                style={{ color: 'var(--kpx-text-muted)' }}
              >
                {s.d}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
