'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const bars = [
    { h: 38, isHighlight: false, delay: '0.50s' },
    { h: 52, isHighlight: false, delay: '0.56s' },
    { h: 44, isHighlight: false, delay: '0.62s' },
    { h: 66, isHighlight: false, delay: '0.68s' },
    { h: 58, isHighlight: false, delay: '0.74s' },
    { h: 74, isHighlight: false, delay: '0.80s' },
    { h: 62, isHighlight: false, delay: '0.86s' },
    { h: 88, isHighlight: false, delay: '0.92s' },
    { h: 70, isHighlight: false, delay: '0.98s' },
    { h: 82, isHighlight: false, delay: '1.04s' },
    { h: 94, isHighlight: true, delay: '1.10s' },
    { h: 78, isHighlight: false, delay: '1.16s' },
  ];

  const clients = ['CipherLock Systems', 'VitalMed Group', 'Apex Commerce', 'FinTech Labs'];

  return (
    <section className="sec pt-16 pb-[72px]">
      <div className="wrap">
        {/* Availability Badge */}
        <div
          className="rise inline-flex items-center gap-3 px-4 py-2 rounded-full border transition-colors"
          style={{
            borderColor: 'var(--kpx-border)',
            background: 'var(--kpx-surface)',
          }}
        >
          <span className="dot" />
          <span className="mono text-[12.5px] tracking-wider uppercase font-medium">
            Available for work · Dhaka
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="disp rise mt-7 text-[clamp(46px,7.6vw,108px)] font-bold tracking-tight leading-[0.96] max-w-[1120px] balance"
          style={{ animationDelay: '0.1s' }}
        >
          Scale your software <span className="hl">without expanding</span> your team.
        </h1>

        {/* Subhead & CTAs */}
        <div
          className="rise mt-10 flex flex-wrap gap-8 justify-between items-end"
          style={{ animationDelay: '0.22s' }}
        >
          <div className="max-w-[600px] flex flex-col gap-3.5">
            <p
              className="mono text-sm tracking-wider font-semibold uppercase"
              style={{ color: 'var(--kpx-accent-emerald)' }}
            >
              Design. Build. Ship. Run.
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed font-normal"
              style={{ color: 'var(--kpx-text-muted)' }}
            >
              KompileX is a Dhaka-based software company. We build intelligent applications that
              automate daily operations, then host, monitor and support them long after launch.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/#contact" className="btn btn-ink">
              <span>Start a Project</span>
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
            <Link href="/#work" className="btn btn-line">
              See Our Work
            </Link>
          </div>
        </div>

        {/* STAGE MOCKUP */}
        <div
          className="stage rise relative mt-16 h-[560px] rounded-[40px] overflow-hidden"
          style={{
            animationDelay: '0.34s',
            backgroundColor: 'var(--kpx-stage-bg)',
            backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.08) 1.2px, transparent 1.2px)',
            backgroundSize: '22px 22px',
          }}
        >
          {/* Central Browser Window */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-16 w-[min(78%,900px)] h-[620px] rounded-[22px] border shadow-2xl overflow-hidden"
            style={{
              background: 'var(--kpx-stage-win-bg)',
              borderColor: 'var(--kpx-border-light)',
            }}
          >
            {/* Window Header */}
            <div
              className="h-12 border-b flex items-center gap-2 px-4.5"
              style={{
                borderColor: 'var(--kpx-border)',
                background: 'var(--kpx-stage-win-header)',
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--kpx-border)' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--kpx-border)' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--kpx-border)' }} />
              <span
                className="mono ml-3.5 h-[26px] px-3.5 rounded-full text-xs flex items-center"
                style={{
                  background: 'var(--kpx-surface-soft)',
                  color: 'var(--kpx-text-muted)',
                }}
              >
                your-product.com / dashboard
              </span>
            </div>

            {/* Window Grid Body */}
            <div className="grid grid-cols-[200px_minmax(0,1fr)] h-[572px]">
              {/* Sidebar */}
              <div
                className="win-side border-r p-5 flex flex-col gap-2.5"
                style={{
                  background: 'var(--kpx-surface-soft)',
                  borderColor: 'var(--kpx-border)',
                }}
              >
                <div
                  className="h-[38px] rounded-[10px]"
                  style={{ background: 'var(--kpx-accent-lime)' }}
                />
                <div
                  className="h-[38px] rounded-[10px] opacity-40"
                  style={{ background: 'var(--kpx-border)' }}
                />
                <div
                  className="h-[38px] rounded-[10px] opacity-40"
                  style={{ background: 'var(--kpx-border)' }}
                />
                <div
                  className="h-[38px] rounded-[10px] opacity-40"
                  style={{ background: 'var(--kpx-border)' }}
                />
                <div
                  className="h-[38px] rounded-[10px] opacity-40"
                  style={{ background: 'var(--kpx-border)' }}
                />
              </div>

              {/* Main Content Area */}
              <div className="p-7 flex flex-col gap-5.5 min-w-0">
                <div className="flex justify-between items-center">
                  <div
                    className="w-44 h-5 rounded-md"
                    style={{ background: 'var(--kpx-text-main)' }}
                  />
                  <div
                    className="w-24 h-8 rounded-full"
                    style={{ background: 'var(--kpx-text-main)' }}
                  />
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3.5">
                  <div
                    className="h-[92px] rounded-2xl border p-3.5 flex flex-col justify-between"
                    style={{ borderColor: 'var(--kpx-border)' }}
                  >
                    <div
                      className="w-1/2 h-2 rounded"
                      style={{ background: 'var(--kpx-border)' }}
                    />
                    <div
                      className="w-[70%] h-5.5 rounded-md"
                      style={{ background: 'var(--kpx-text-main)' }}
                    />
                  </div>
                  <div
                    className="h-[92px] rounded-2xl border p-3.5 flex flex-col justify-between"
                    style={{ borderColor: 'var(--kpx-border)' }}
                  >
                    <div
                      className="w-2/5 h-2 rounded"
                      style={{ background: 'var(--kpx-border)' }}
                    />
                    <div
                      className="w-[55%] h-5.5 rounded-md"
                      style={{ background: 'var(--kpx-text-main)' }}
                    />
                  </div>
                  <div
                    className="h-[92px] rounded-2xl p-3.5 flex flex-col justify-between"
                    style={{ background: 'var(--kpx-btn-ink-bg)' }}
                  >
                    <div
                      className="w-[45%] h-2 rounded"
                      style={{ background: 'var(--kpx-dark-muted)' }}
                    />
                    <div
                      className="w-[65%] h-5.5 rounded-md"
                      style={{ background: 'var(--kpx-accent-lime)' }}
                    />
                  </div>
                </div>

                {/* Staggered Animated Chart */}
                <div
                  className="h-48 rounded-2xl border p-5 flex items-end gap-3"
                  style={{ borderColor: 'var(--kpx-border)' }}
                >
                  {bars.map((b, i) => (
                    <div
                      key={i}
                      className="bar flex-1 rounded-t-md"
                      style={{
                        height: `${b.h}%`,
                        background: b.isHighlight
                          ? 'var(--kpx-stage-bars-highlight)'
                          : 'var(--kpx-stage-bars-default)',
                        animationDelay: b.delay,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Left Card: "Ask KompileX AI" */}
          <div
            className="float-l floaty absolute left-8 top-36 w-[300px] rounded-[20px] border p-4.5 shadow-2xl flex flex-col gap-3"
            style={{
              background: 'var(--kpx-stage-card-float)',
              borderColor: 'var(--kpx-border-light)',
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-7 h-7 rounded-[9px] flex items-center justify-center"
                  style={{ background: 'var(--kpx-accent-lime)' }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--kpx-text-main)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
                  </svg>
                </span>
                <span className="font-bold text-[15px]">Ask KompileX AI</span>
              </div>
              <span
                className="mono text-[10.5px] uppercase tracking-wider"
                style={{ color: 'var(--kpx-text-muted)' }}
              >
                Illustrative
              </span>
            </div>

            <p
              className="text-[14.5px] leading-snug rounded-xl p-3"
              style={{
                background: 'var(--kpx-surface-soft)',
                color: 'var(--kpx-text-main)',
              }}
            >
              Reply to every comment on our launch post and capture the lead.
            </p>

            <div
              className="flex items-center gap-2 text-[13.5px] font-semibold"
              style={{ color: 'var(--kpx-accent-emerald)' }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12l5 5 9-10" />
              </svg>
              <span>Workflow drafted · 3 steps</span>
            </div>
          </div>

          {/* Floating Right Card: "Production" */}
          <div
            className="float-r floaty absolute right-8 top-24 w-[268px] rounded-[20px] p-4.5 shadow-2xl flex flex-col gap-3"
            style={{
              animationDelay: '-3s',
              background: 'var(--kpx-btn-ink-bg)',
              color: 'var(--kpx-dark-text)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="dot" />
              <span
                className="mono text-xs tracking-wider uppercase font-semibold"
                style={{ color: 'var(--kpx-accent-lime)' }}
              >
                Production
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-[14.5px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--kpx-accent-lime)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12l5 5 9-10" />
              </svg>
              <span>Build passed</span>
            </div>

            <div className="flex items-center gap-2.5 text-[14.5px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--kpx-accent-lime)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12l5 5 9-10" />
              </svg>
              <span>Deployed to server</span>
            </div>

            <div className="flex items-center gap-2.5 text-[14.5px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--kpx-accent-lime)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12l5 5 9-10" />
              </svg>
              <span>Monitoring 24/7</span>
            </div>
          </div>
        </div>

        {/* CLIENTS ROW */}
        <div
          className="mt-9 flex flex-wrap items-center gap-x-11 gap-y-5 border-t pt-6.5"
          style={{ borderColor: 'var(--kpx-border-light)' }}
        >
          <span
            className="mono text-xs tracking-wider uppercase font-semibold"
            style={{ color: 'var(--kpx-text-muted)' }}
          >
            Built for teams at
          </span>
          {clients.map((c, i) => (
            <span
              key={i}
              className="disp text-2xl font-semibold opacity-90 transition-opacity hover:opacity-100"
              style={{ color: 'var(--kpx-text-main)' }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
