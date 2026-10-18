'use client';

import React from 'react';

export default function StatsSection() {
  const stats = [
    { v: '10+', l: 'Products shipped' },
    { v: '3', l: 'Years building together' },
    { v: '100%', l: 'Remote-first' },
    { v: '24/7', l: 'Monitoring after launch' },
  ];

  return (
    <section className="pt-18 px-5 md:px-10">
      <div
        className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[32px] border overflow-hidden shadow-sm transition-colors duration-200"
        style={{
          borderColor: 'var(--kpx-border)',
          background: 'var(--kpx-surface)',
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-8 md:p-8.5 border-b sm:border-b-0 sm:border-r last:border-r-0 flex flex-col gap-2"
            style={{ borderColor: 'var(--kpx-border)' }}
          >
            <span
              className="disp text-[clamp(52px,5.4vw,76px)] font-extrabold leading-[0.95]"
              style={{ color: 'var(--kpx-text-main)' }}
            >
              {s.v}
            </span>
            <span
              className="mono text-[12.5px] font-semibold tracking-wider uppercase"
              style={{ color: 'var(--kpx-text-muted)' }}
            >
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
