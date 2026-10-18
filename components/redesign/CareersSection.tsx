'use client';

import React from 'react';
import Link from 'next/link';

export default function CareersSection() {
  return (
    <section className="px-5 md:px-10 pb-28">
      <div
        className="wrap flex flex-wrap gap-8 justify-between items-center rounded-[40px] border p-8 md:p-16 transition-colors duration-200"
        style={{
          background: 'var(--kpx-surface-tint)',
          borderColor: 'var(--kpx-border-light)',
        }}
      >
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <p className="eyebrow">Careers</p>
          <h2 className="disp text-[clamp(32px,4vw,52px)] font-extrabold leading-tight balance">
            Want to build with us?
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--kpx-text-muted)' }}
          >
            We are remote-first and based in Dhaka. If you care about senior-level engineering, fast execution,
            and shipping production systems, say hello.
          </p>
        </div>

        <Link href="/about-us" className="btn btn-ink">
          <span>See open roles</span>
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
    </section>
  );
}
