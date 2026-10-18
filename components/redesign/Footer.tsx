'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const tags = [
    'Software that ships.',
    'Software that ships.',
    'Software that ships.',
    'Software that ships.',
    'Software that ships.',
    'Software that ships.',
  ];

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="dark rounded-t-[48px] overflow-hidden transition-colors duration-200"
      style={{
        background: 'var(--kpx-dark-bg)',
        color: 'var(--kpx-dark-text)',
      }}
    >
      {/* Top Banner */}
      <div className="sec pb-18">
        <div className="wrap flex flex-wrap justify-between items-center gap-10">
          <div className="max-w-[720px]">
            <p className="eyebrow">Start a project</p>
            <h2 className="disp mt-4 text-[clamp(40px,6vw,88px)] font-bold leading-[0.98] balance">
              Your next product starts here.
            </h2>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/#contact" className="btn btn-lime">
                <span>Get started</span>
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
              <a
                href="mailto:contact@kompilex.com"
                className="text-lg pb-0.5 border-b transition-colors"
                style={{
                  color: 'var(--kpx-dark-muted)',
                  borderColor: 'var(--kpx-dark-border)',
                }}
              >
                contact@kompilex.com
              </a>
            </div>
          </div>

          {/* Floating Spiral Doodle */}
          <div className="floaty hidden sm:block">
            <svg
              width="190"
              height="150"
              viewBox="0 0 190 150"
              fill="none"
              stroke="var(--kpx-accent-lime)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 112C40 148 112 138 120 92c8-44-52-52-52-14 0 34 50 30 80-34" />
              <path d="M128 36l22 10-8 22" />
            </svg>
          </div>
        </div>
      </div>

      {/* Marquee Divider */}
      <div
        className="mq mq-fast py-5.5 border-t border-b"
        style={{ borderColor: 'var(--kpx-dark-border)' }}
        aria-hidden="true"
      >
        <div className="mq-track">
          {tags.map((t, idx) => (
            <span
              key={idx}
              className="disp inline-flex items-center gap-9 pl-9 text-4xl md:text-[44px] font-bold whitespace-nowrap"
            >
              <span>{t}</span>
              <span style={{ color: 'var(--kpx-dark-accent)', fontSize: '34px' }}>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Columns */}
      <div className="sec pt-16 pb-10">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="flex flex-col gap-4.5 max-w-[320px] sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span
                className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center"
                style={{ background: 'var(--kpx-accent-lime)' }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--kpx-btn-ink-bg)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
                </svg>
              </span>
              <span className="disp text-[23px] font-bold">
                Kompile<span style={{ color: 'var(--kpx-accent-lime)' }}>X</span>
              </span>
            </div>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--kpx-dark-muted)' }}
            >
              A software company designing, building, shipping and running full-stack products end to end.
            </p>
          </div>

          {/* Studio Links */}
          <div className="flex flex-col gap-3">
            <span
              className="mono text-xs tracking-wider uppercase font-bold"
              style={{ color: 'var(--kpx-accent-lime)' }}
            >
              Studio
            </span>
            <Link className="flink" href="/services">
              Services
            </Link>
            <Link className="flink" href="/technologies">
              Technologies
            </Link>
            <Link className="flink" href="/#work">
              Our Work
            </Link>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3">
            <span
              className="mono text-xs tracking-wider uppercase font-bold"
              style={{ color: 'var(--kpx-accent-lime)' }}
            >
              Company
            </span>
            <Link className="flink" href="/about-us">
              About Us
            </Link>
            <Link className="flink" href="/#contact">
              Contact
            </Link>
            <Link className="flink" href="/#why">
              Why Us
            </Link>
          </div>

          {/* Connect Links */}
          <div className="flex flex-col gap-3">
            <span
              className="mono text-xs tracking-wider uppercase font-bold"
              style={{ color: 'var(--kpx-accent-lime)' }}
            >
              Connect
            </span>
            <a className="flink" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="flink" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a className="flink" href="mailto:contact@kompilex.com">
              Email us
            </a>
          </div>

          {/* Legal & Admin */}
          <div className="flex flex-col gap-3">
            <span
              className="mono text-xs tracking-wider uppercase font-bold"
              style={{ color: 'var(--kpx-accent-lime)' }}
            >
              System
            </span>
            <Link className="flink" href="/admin">
              Admin & Theme Panel
            </Link>
            <Link className="flink" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="flink" href="/terms-of-service">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          className="wrap mt-14 pt-6 border-t flex flex-wrap justify-between items-center gap-4 text-sm"
          style={{
            borderColor: 'var(--kpx-dark-border)',
            color: 'var(--kpx-dark-muted)',
          }}
        >
          <button
            onClick={scrollToTop}
            className="flink text-sm flex items-center gap-1 cursor-pointer"
          >
            Back to top ↑
          </button>
          <span>
            Built in Dhaka, shipped worldwide · ©{new Date().getFullYear()} KompileX. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
