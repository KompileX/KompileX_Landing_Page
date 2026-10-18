'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function WorkSection() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');

  const allWorks = [
    {
      title: 'CommerceOS',
      kind: 'web',
      meta: 'Web app · Internal product',
      desc: 'A multi-tenant e-commerce CMS for agencies and solution providers, built as an alternative to WordPress and Shopify.',
      stack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL'],
      bg: '#DCE6D0',
      ac: 'var(--kpx-accent-lime)',
      href: '/case-studies/commerceos',
    },
    {
      title: 'Social Engagement Platform',
      kind: 'web',
      meta: 'Web app · Internal product',
      desc: 'A multi-tenant platform for agencies to offer social media management, messaging, automation and analytics.',
      stack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL'],
      bg: 'var(--kpx-btn-ink-bg)',
      ac: 'var(--kpx-accent-lime)',
      href: '/#contact',
    },
    {
      title: 'VaultX Enterprise',
      kind: 'web',
      meta: 'Web app · CipherLock Systems',
      desc: 'A security-first app for managing, auditing and injecting secrets into CI/CD pipelines.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Go'],
      bg: '#E4E1F2',
      ac: 'var(--kpx-text-main)',
      href: '/#contact',
    },
    {
      title: 'CarePulse Health',
      kind: 'mobile',
      meta: 'Mobile app · VitalMed Group',
      desc: 'Patients schedule visits, join HD video consultations and manage digital prescriptions.',
      stack: ['React Native', 'TypeScript', 'WebRTC', 'Node.js'],
      bg: '#CFE7E0',
      ac: '#1FB36B',
      href: '/#contact',
    },
    {
      title: 'Flowline CRM',
      kind: 'web',
      meta: 'Web app · Apex Commerce',
      desc: 'A CRM for growing sales teams, with real-time deal sync and automated email sequences.',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      bg: '#F3E3D3',
      ac: 'var(--kpx-text-main)',
      href: '/#contact',
    },
    {
      title: 'Zenith Pay',
      kind: 'mobile',
      meta: 'Mobile app · FinTech Labs',
      desc: 'A mobile wallet with sub-second transfers, bill payments and merchant QR pay.',
      stack: ['React Native', 'TypeScript', 'Node.js', 'Redis'],
      bg: 'var(--kpx-accent-lime)',
      ac: 'var(--kpx-text-main)',
      href: '/#contact',
    },
  ];

  const filteredWorks = allWorks.filter(w => filter === 'all' || w.kind === filter);

  const industries = [
    'E-commerce & retail',
    'Healthcare',
    'Fintech & payments',
    'Cybersecurity',
    'Sales & CRM',
    'Agencies & marketing',
  ];

  return (
    <section id="work" className="sec">
      <div className="wrap">
        {/* Header & Filter Controls */}
        <div className="flex flex-wrap justify-between items-end gap-7">
          <div>
            <p className="eyebrow">05 / Selected work</p>
            <h2 className="h2 mt-4 max-w-[760px]">Products we have shipped.</h2>
          </div>

          <div role="group" aria-label="Filter work" className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`chip ${filter === 'all' ? 'on' : ''}`}
            >
              All work
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`chip ${filter === 'web' ? 'on' : ''}`}
            >
              Web
            </button>
            <button
              type="button"
              onClick={() => setFilter('mobile')}
              className={`chip ${filter === 'mobile' ? 'on' : ''}`}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Works Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((w, idx) => (
            <Link
              key={idx}
              href={w.href}
              className="card flex flex-col rounded-[28px] border overflow-hidden transition-all group"
              style={{
                background: 'var(--kpx-surface)',
                borderColor: 'var(--kpx-border)',
              }}
            >
              {/* Card Thumbnail / Mockup Container */}
              <div
                className="h-[250px] relative overflow-hidden"
                style={{ background: w.bg }}
              >
                {w.kind === 'web' ? (
                  /* Web Browser Mockup Frame */
                  <div className="absolute left-[34px] right-[34px] top-9 bottom-[-30px] rounded-t-xl border border-black/10 overflow-hidden shadow-md bg-white">
                    <div
                      className="h-7 border-b flex items-center gap-1.5 px-3"
                      style={{
                        borderColor: 'var(--kpx-border)',
                        background: 'var(--kpx-surface-soft)',
                      }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ background: 'var(--kpx-border)' }} />
                      <span className="w-2 h-2 rounded-full" style={{ background: 'var(--kpx-border)' }} />
                      <span className="w-2 h-2 rounded-full" style={{ background: 'var(--kpx-border)' }} />
                    </div>
                    <div className="grid grid-cols-[54px_minmax(0,1fr)] h-full">
                      <div
                        className="border-r p-3 flex flex-col gap-2"
                        style={{
                          borderColor: 'var(--kpx-border)',
                          background: 'var(--kpx-surface-soft)',
                        }}
                      >
                        <div className="h-4 rounded" style={{ background: w.ac }} />
                        <div className="h-4 rounded opacity-40" style={{ background: 'var(--kpx-border)' }} />
                        <div className="h-4 rounded opacity-40" style={{ background: 'var(--kpx-border)' }} />
                      </div>
                      <div className="p-3.5 flex flex-col gap-2.5">
                        <div className="w-[46%] h-3 rounded" style={{ background: 'var(--kpx-text-main)' }} />
                        <div className="flex gap-2">
                          <div className="flex-1 h-11 rounded" style={{ background: w.ac }} />
                          <div className="flex-1 h-11 rounded" style={{ background: 'var(--kpx-surface-soft)' }} />
                          <div className="flex-1 h-11 rounded" style={{ background: 'var(--kpx-surface-soft)' }} />
                        </div>
                        <div className="h-2.5 rounded opacity-40" style={{ background: 'var(--kpx-border)' }} />
                        <div className="w-[70%] h-2.5 rounded opacity-40" style={{ background: 'var(--kpx-border)' }} />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Mobile Phone Mockup Frame */
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-7.5 w-[128px] h-[290px] border-[6px] rounded-[28px] p-3 flex flex-col gap-2 bg-white shadow-xl"
                    style={{ borderColor: 'var(--kpx-btn-ink-bg)' }}
                  >
                    <div
                      className="w-11 h-1.5 rounded-full self-center"
                      style={{ background: 'var(--kpx-btn-ink-bg)' }}
                    />
                    <div className="h-15.5 rounded-xl" style={{ background: w.ac }} />
                    <div className="flex gap-1.5">
                      <div className="flex-1 h-8 rounded-lg" style={{ background: 'var(--kpx-surface-soft)' }} />
                      <div className="flex-1 h-8 rounded-lg" style={{ background: 'var(--kpx-surface-soft)' }} />
                    </div>
                    <div className="h-2 rounded opacity-40" style={{ background: 'var(--kpx-border)' }} />
                    <div className="w-[65%] h-2 rounded opacity-40" style={{ background: 'var(--kpx-border)' }} />
                    <div
                      className="h-7.5 rounded-full mt-auto"
                      style={{ background: 'var(--kpx-btn-ink-bg)' }}
                    />
                  </div>
                )}
              </div>

              {/* Card Meta & Details */}
              <div className="p-7 flex flex-col gap-3.5 flex-1">
                <div
                  className="mono text-xs uppercase tracking-wider font-semibold"
                  style={{ color: 'var(--kpx-text-muted)' }}
                >
                  {w.meta}
                </div>

                <h3 className="disp text-[30px] font-bold leading-tight">
                  {w.title}
                </h3>

                <p
                  className="text-[16.5px] leading-relaxed"
                  style={{ color: 'var(--kpx-text-muted)' }}
                >
                  {w.desc}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {w.stack.map((s, idx) => (
                    <span key={idx} className="tag font-semibold">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div
                  className="go mt-auto pt-3 flex items-center gap-2 font-bold text-[15px]"
                  style={{ color: 'var(--kpx-accent-emerald)' }}
                >
                  <span>View details</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Industries Bar */}
        <div className="mt-14 flex flex-wrap items-center gap-3.5 pt-4">
          <span
            className="mono text-xs tracking-wider uppercase font-semibold mr-2.5"
            style={{ color: 'var(--kpx-text-muted)' }}
          >
            Industries we build for
          </span>
          {industries.map((ind, i) => (
            <span key={i} className="ind cursor-default">
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
