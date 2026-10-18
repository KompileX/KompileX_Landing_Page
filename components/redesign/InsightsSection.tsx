'use client';

import React from 'react';
import Link from 'next/link';

export default function InsightsSection() {
  const insights = [
    {
      cat: 'Engineering',
      date: 'OCT 2026',
      title: 'Designing Zero-Downtime Database Migrations on High-Volume SaaS',
      summary: 'How we manage schema changes on high-concurrency PostgreSQL clusters without downtime or locking tables.',
      bg: '#DCE6D0',
      icon: 'M9 7l-5 5 5 5M15 7l5 5-5 5',
    },
    {
      cat: 'DevOps',
      date: 'SEP 2026',
      title: 'Why We Run Docker & Kubernetes on Hardened Hetzner VPS',
      summary: 'Cutting cloud infrastructure expenses by 70% while improving latency and maintaining automated failover.',
      bg: '#CFE7E0',
      icon: 'M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z',
    },
    {
      cat: 'AI & Automation',
      date: 'AUG 2026',
      title: 'Building Reliable Multi-Tenant AI Agent Workflows with MCP',
      summary: 'Connecting LLMs to structured corporate databases and external APIs safely without hallucinated function calls.',
      bg: '#F3E3D3',
      icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z',
    },
  ];

  return (
    <section className="sec pt-10">
      <div className="wrap">
        <div className="flex flex-wrap justify-between items-end gap-7">
          <div>
            <p className="eyebrow">08 / Insights</p>
            <h2 className="h2 mt-4 max-w-[760px]">
              Notes from the engineering desk.
            </h2>
          </div>
          <Link href="/#contact" className="btn btn-line">
            <span>All articles</span>
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {insights.map((a, i) => (
            <div
              key={i}
              className="card flex flex-col rounded-[28px] border overflow-hidden transition-all group"
              style={{
                background: 'var(--kpx-surface)',
                borderColor: 'var(--kpx-border)',
              }}
            >
              <div
                className="h-[190px] grid place-items-center"
                style={{ background: a.bg }}
              >
                <span
                  className="w-[84px] h-[84px] rounded-[26px] border-2 border-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"
                  style={{ background: '#FFFFFF' }}
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--kpx-text-main)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={a.icon} />
                  </svg>
                </span>
              </div>

              <div className="p-7 flex flex-col gap-3 flex-1">
                <div
                  className="mono text-xs uppercase tracking-wider font-semibold"
                  style={{ color: 'var(--kpx-text-muted)' }}
                >
                  {a.cat} · {a.date}
                </div>

                <h3 className="disp text-[25px] font-extrabold leading-snug">
                  {a.title}
                </h3>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--kpx-text-muted)' }}
                >
                  {a.summary}
                </p>

                <div
                  className="go mt-auto pt-2 flex items-center gap-2 font-bold text-[15px]"
                  style={{ color: 'var(--kpx-accent-emerald)' }}
                >
                  <span>Read article</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
