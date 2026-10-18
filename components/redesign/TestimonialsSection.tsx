'use client';

import React from 'react';

export default function TestimonialsSection() {
  const quotes = [
    {
      co: 'CipherLock Systems',
      name: 'Alexei Vance',
      role: 'VP of Engineering',
      text: 'KompileX delivered our CI/CD secrets infrastructure 3 weeks ahead of schedule. Their senior architects wrote cleaner code than our internal team was expecting.',
    },
    {
      co: 'VitalMed Group',
      name: 'Dr. Sarah Lin',
      role: 'Chief Medical Officer',
      text: 'Our telehealth mobile app required zero downtime WebRTC video visits. KompileX orchestrated the entire backend and store publishing flawlessly.',
    },
    {
      co: 'Apex Commerce',
      name: 'Marcus Brody',
      role: 'Head of Growth',
      text: 'The multi-tenant architecture they built handles peak flash sales without breaking a sweat. And their 24/7 post-launch monitoring gives us total peace of mind.',
    },
  ];

  return (
    <section className="sec">
      <div className="wrap">
        <p className="eyebrow">07 / Client words</p>
        <h2 className="h2 mt-4 max-w-[820px]">
          What partners say after launch.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="m-0 rounded-[28px] border p-8 md:p-8.5 flex flex-col gap-6 min-h-[300px] shadow-sm transition-all hover:shadow-md"
              style={{
                background: 'var(--kpx-surface)',
                borderColor: 'var(--kpx-border)',
              }}
            >
              <span
                className="disp text-[80px] leading-[0.6] font-bold select-none opacity-40"
                style={{
                  color: 'var(--kpx-text-muted)',
                  WebkitTextStroke: '2px var(--kpx-text-main)',
                }}
                aria-hidden="true"
              >
                “
              </span>

              <blockquote className="m-0 text-xl font-medium leading-relaxed">
                {q.text}
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3.5 pt-2">
                <span
                  className="w-12 h-12 rounded-full border border-dashed flex items-center justify-center font-bold text-sm shrink-0"
                  style={{
                    background: 'var(--kpx-surface-tint)',
                    borderColor: 'var(--kpx-border)',
                  }}
                >
                  {q.name.charAt(0)}
                </span>
                <span className="flex flex-col">
                  <span className="font-bold text-sm">{q.name}</span>
                  <span
                    className="mono text-[12.5px]"
                    style={{ color: 'var(--kpx-text-muted)' }}
                  >
                    {q.role} · {q.co}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
