'use client';

import React from 'react';
import Link from 'next/link';

export default function DevOpsSection() {
  const infra = [
    'VPS and server setup, hardened',
    'Docker and Kubernetes deployments',
    'CI/CD pipelines',
    '24/7 monitoring and alerting',
    'Backups and recovery plans',
    'SSL, DNS, CDN and firewalls',
  ];

  const rack = [
    { d: '0s', d2: '0.8s' },
    { d: '0.5s', d2: '1.3s' },
    { d: '1.0s', d2: '1.8s' },
    { d: '1.5s', d2: '2.3s' },
  ];

  return (
    <section
      id="devops"
      className="sec dark rounded-[48px] my-6 transition-colors duration-200"
      style={{
        background: 'var(--kpx-dark-bg)',
        color: 'var(--kpx-dark-text)',
      }}
    >
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Information */}
        <div className="flex flex-col gap-6.5">
          <p className="eyebrow">04 / DevOps &amp; hosting</p>
          <h2 className="h2 text-white">We run what we ship.</h2>

          <p
            className="text-lg md:text-[19px] leading-relaxed max-w-[540px]"
            style={{ color: 'var(--kpx-dark-muted)' }}
          >
            Launching is the middle of the story. We set up your servers, automate your deployments and
            watch production around the clock, whether you host on a VPS or in the cloud.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-2">
            {infra.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[16.5px] leading-snug">
                <span
                  className="w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'var(--kpx-accent-lime)' }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--kpx-btn-ink-bg)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/technologies" className="btn btn-lime">
              <span>Explore our stack</span>
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
            <Link href="/#contact" className="btn btn-lineL">
              Ask about hosting
            </Link>
          </div>
        </div>

        {/* Right Illustration: Terminal + Server Rack + Uptime */}
        <div
          className="infra relative h-[540px]"
          role="img"
          aria-label="Illustration of a deploy terminal, a server rack and an uptime chart"
        >
          {/* Terminal Box */}
          <div
            className="absolute left-0 top-0 w-[82%] rounded-[22px] border overflow-hidden shadow-2xl"
            style={{
              background: 'var(--kpx-rack-unit-bg)',
              borderColor: 'var(--kpx-dark-border)',
            }}
          >
            <div
              className="h-10.5 border-b flex items-center gap-2 px-4"
              style={{ borderColor: 'var(--kpx-dark-border)' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              <span
                className="mono ml-2.5 text-[11.5px]"
                style={{ color: 'var(--kpx-dark-muted)' }}
              >
                deploy · illustrative
              </span>
            </div>

            <div
              className="code-mono p-5 md:p-6 text-[13.5px] leading-loose"
              style={{ color: 'var(--kpx-dark-muted)' }}
            >
              <div>
                <span className="opacity-60">$</span> git push origin main
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: 'var(--kpx-rack-led-green)' }}>✓</span> tests passed
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: 'var(--kpx-rack-led-green)' }}>✓</span> container image built
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: 'var(--kpx-rack-led-green)' }}>✓</span> deployed to server
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: 'var(--kpx-rack-led-lime)' }}>✓</span> health checks green
              </div>
            </div>
          </div>

          {/* Server Rack Chassis with Blinking LEDs */}
          <div
            className="absolute right-0 top-28 w-[48%] rounded-[22px] p-4 flex flex-col gap-2.5 shadow-2xl"
            style={{ background: 'var(--kpx-surface-tint)' }}
          >
            {rack.map((u, i) => (
              <div
                key={i}
                className="h-14 rounded-xl flex items-center gap-2 px-3.5 shadow-inner"
                style={{ background: 'var(--kpx-rack-bg)' }}
              >
                {/* Lime Active LED */}
                <span
                  className="led w-2 h-2 rounded-full"
                  style={{
                    background: 'var(--kpx-rack-led-lime)',
                    animationDelay: u.d,
                  }}
                />
                {/* Green Status LED */}
                <span
                  className="led w-2 h-2 rounded-full"
                  style={{
                    background: 'var(--kpx-rack-led-green)',
                    animationDelay: u.d2,
                  }}
                />

                {/* Patch Cable Connectors */}
                <span className="ml-auto flex gap-1">
                  <span className="w-6.5 h-1 rounded" style={{ background: '#3A4A41' }} />
                  <span className="w-6.5 h-1 rounded" style={{ background: '#3A4A41' }} />
                  <span
                    className="w-3.5 h-1 rounded"
                    style={{ background: 'var(--kpx-rack-cables)' }}
                  />
                </span>
              </div>
            ))}
          </div>

          {/* Floating Uptime Graphic */}
          <div
            className="floaty absolute left-[6%] bottom-0 w-[64%] rounded-[22px] p-5 shadow-2xl flex flex-col gap-2"
            style={{
              background: 'var(--kpx-accent-lime)',
              color: 'var(--kpx-text-main)',
            }}
          >
            <div className="flex justify-between items-center">
              <span className="mono text-xs tracking-wider uppercase font-bold">Uptime</span>
              <span className="mono text-[11px] opacity-75 font-semibold">99.98% SLA</span>
            </div>
            <svg
              viewBox="0 0 300 70"
              width="100%"
              height="70"
              fill="none"
              stroke="var(--kpx-text-main)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 46 L40 40 L76 44 L112 28 L150 34 L188 18 L226 26 L264 12 L298 16" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
