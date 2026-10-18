'use client';

import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      n: '01',
      t: 'Discover',
      d: 'We learn your goals, users and constraints, then agree on scope.',
      o: 'Requirements · scope',
    },
    {
      n: '02',
      t: 'Design',
      d: 'Flows, interfaces and architecture, reviewed with you before code.',
      o: 'UX flows · UI · architecture',
    },
    {
      n: '03',
      t: 'Build',
      d: 'Short sprints with working demos, so you see progress every step.',
      o: 'Sprints · demos · reviews',
    },
    {
      n: '04',
      t: 'Launch',
      d: 'Testing, deployment and handover to a production environment.',
      o: 'QA · deploy · handover',
    },
    {
      n: '05',
      t: 'Support',
      d: 'Monitoring, fixes and new features once real users arrive.',
      o: 'Monitoring · upkeep · growth',
    },
  ];

  return (
    <section id="process" className="sec">
      <div className="wrap">
        <p className="eyebrow">03 / Our process</p>
        <h2 className="h2 mt-4 max-w-[820px]">
          From first call to production, in five steps.
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative pt-7 flex flex-col gap-3.5 border-t-2"
              style={{ borderColor: 'var(--kpx-text-main)' }}
            >
              {/* Node indicator */}
              <span
                className="absolute left-0 -top-2.5 w-4 h-4 rounded-full border-2"
                style={{
                  background: 'var(--kpx-accent-lime)',
                  borderColor: 'var(--kpx-text-main)',
                }}
              />

              <span
                className="mono text-[13px] font-bold"
                style={{ color: 'var(--kpx-accent-emerald)' }}
              >
                {s.n}
              </span>

              <h3 className="disp text-[32px] font-bold leading-none">
                {s.t}
              </h3>

              <p
                className="text-[16.5px] leading-relaxed"
                style={{ color: 'var(--kpx-text-muted)' }}
              >
                {s.d}
              </p>

              <p
                className="mono text-xs leading-relaxed font-semibold mt-1"
                style={{ color: 'var(--kpx-text-main)' }}
              >
                {s.o}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
