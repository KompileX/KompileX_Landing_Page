'use client';

import React from 'react';
import Link from 'next/link';

export default function EngagementSection() {
  const models = [
    {
      n: '01',
      t: 'Project delivery',
      d: 'A defined product with a clear scope. We take it from idea to production.',
      pts: ['Scoped milestones and demos', 'One accountable team', 'Launch and handover included'],
    },
    {
      n: '02',
      t: 'Dedicated engineering',
      d: 'Senior engineers who join your roadmap and ship alongside your team.',
      pts: ['Direct access to the engineers', 'Scale up or down as needed', 'No junior hand-offs'],
    },
    {
      n: '03',
      t: 'Architecture consultation',
      d: 'A focused review of your system, stack and plan before you commit budget.',
      pts: ['Architecture and stack review', 'Scaling and cost advice', 'A written roadmap'],
    },
  ];

  return (
    <section
      className="sec border-t border-b transition-colors duration-200"
      style={{
        background: 'var(--kpx-surface)',
        borderColor: 'var(--kpx-border)',
      }}
    >
      <div className="wrap">
        <p className="eyebrow">02 / How we work with you</p>
        <h2 className="h2 mt-4 max-w-[820px]">
          Pick the engagement that fits where you are.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {models.map((m, i) => (
            <div
              key={i}
              className="rounded-[32px] border p-8 md:p-8.5 flex flex-col gap-5 transition-all hover:shadow-md"
              style={{
                borderColor: 'var(--kpx-border)',
                background: 'var(--kpx-surface-tint)',
              }}
            >
              <span
                className="disp text-[72px] font-bold leading-[0.9]"
                style={{ color: 'var(--kpx-text-main)' }}
              >
                {m.n}
              </span>

              <h3 className="disp text-[30px] font-bold leading-tight">
                {m.t}
              </h3>

              <p
                className="text-[17px] leading-relaxed"
                style={{ color: 'var(--kpx-text-muted)' }}
              >
                {m.d}
              </p>

              <ul
                className="flex flex-col gap-2.5 mt-1 pt-5 border-t"
                style={{ borderColor: 'var(--kpx-border)' }}
              >
                {m.pts.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base leading-snug">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'var(--kpx-accent-lime)' }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--kpx-text-main)"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12l5 5 9-10" />
                      </svg>
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className="go mt-auto pt-2 font-bold text-[15px] flex items-center gap-2 min-h-[44px]"
                style={{ color: 'var(--kpx-accent-emerald)' }}
              >
                <span>Talk to us</span>
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
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
