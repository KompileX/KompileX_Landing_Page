'use client';

import React from 'react';

export default function WhyUsSection() {
  const pillars = [
    {
      n: '01',
      t: 'AI-assisted speed',
      d: 'AI tools handle the repetitive work and boilerplate, so the team spends its time on architecture and ships in days rather than months.',
      icon: 'M13 2L4 14h7l-1 8 9-12h-7z',
    },
    {
      n: '02',
      t: 'Continuous systems monitoring',
      d: '24/7 alerts, server issue resolution and database optimization keep what we ship healthy long after launch.',
      icon: 'M3 12h4l3-8 4 16 3-8h4',
    },
    {
      n: '03',
      t: 'Pure senior engineering',
      d: 'You work directly with veteran architects. No junior developers, no hand-offs, no telephone game.',
      icon: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
    },
  ];

  return (
    <section
      id="why"
      className="sec rounded-t-[48px] transition-colors duration-200"
      style={{
        background: 'var(--kpx-accent-lime)',
        color: 'var(--kpx-text-main)',
      }}
    >
      <div className="wrap">
        <p className="eyebrow" style={{ color: 'var(--kpx-text-main)' }}>
          06 / Why us
        </p>
        <h2 className="h2 mt-4 max-w-[860px]">
          Why ambitious teams partner with us.
        </h2>

        <div className="dark mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="rounded-[28px] p-8 md:p-9 flex flex-col gap-5 min-h-[340px] shadow-xl"
              style={{
                background: 'var(--kpx-btn-ink-bg)',
                color: 'var(--kpx-dark-text)',
              }}
            >
              <div className="flex justify-between items-center">
                <span
                  className="mono text-[13px] font-semibold"
                  style={{ color: 'var(--kpx-dark-muted)' }}
                >
                  {p.n}
                </span>
                <span
                  className="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--kpx-accent-lime)' }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--kpx-text-main)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={p.icon} />
                  </svg>
                </span>
              </div>

              <h3 className="disp text-[32px] font-bold leading-tight mt-auto">
                {p.t}
              </h3>

              <p
                className="text-[17px] leading-relaxed"
                style={{ color: 'var(--kpx-dark-muted)' }}
              >
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
