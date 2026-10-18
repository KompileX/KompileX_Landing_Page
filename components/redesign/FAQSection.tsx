'use client';

import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does a project start?',
      a: 'Tell us what you want to build. We review it, ask the right questions, then come back with a scope and an approach. A conversation always comes before any commitment.',
    },
    {
      q: 'Who will work on my project?',
      a: 'Senior engineers and architects work with you directly. We do not staff projects with junior developers or pass you through account managers.',
    },
    {
      q: 'Can you host and manage our servers?',
      a: 'Yes. We set up and secure VPS and cloud servers, containerize applications, build CI/CD pipelines, and watch production with 24/7 alerts and database optimization.',
    },
    {
      q: 'Do you work with international clients?',
      a: 'Yes. We are remote-first, based in Dhaka, and ship worldwide with clients across North America, Europe, Asia, and Australia.',
    },
    {
      q: 'What happens after launch?',
      a: 'We stay on: monitoring, server issue resolution, database optimization, security patching, and ongoing feature iterations as your product scales.',
    },
    {
      q: 'How much does it cost?',
      a: 'It depends on scope and the engagement model you choose (Fixed-scope project delivery, Dedicated engineering sprint capacity, or Architecture consultation). Share your requirements and we reply with a clear, transparent proposal.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="sec pt-10">
      <div className="wrap grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
        {/* Left Information */}
        <div className="flex flex-col gap-5.5">
          <p className="eyebrow">09 / FAQ</p>
          <h2 className="h2">Questions we hear first.</h2>
          <p
            className="text-lg leading-relaxed max-w-[420px]"
            style={{ color: 'var(--kpx-text-muted)' }}
          >
            Not here? Write to{' '}
            <a
              href="mailto:contact@kompilex.com"
              className="font-semibold underline decoration-2"
              style={{ color: 'var(--kpx-accent-emerald)' }}
            >
              contact@kompilex.com
            </a>{' '}
            and an engineer will answer.
          </p>
        </div>

        {/* Right Accordion */}
        <div
          className="lg:col-span-2 min-w-0 border-t"
          style={{ borderColor: 'var(--kpx-border-light)' }}
        >
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b transition-colors"
                style={{ borderColor: 'var(--kpx-border-light)' }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="faq-q w-full"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl md:text-2xl font-semibold">{f.q}</span>
                  <span
                    className="plus shrink-0"
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      background: isOpen ? 'var(--kpx-accent-lime)' : 'transparent',
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--kpx-text-main)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-7 pr-4 md:pr-16 text-lg leading-relaxed animate-in fade-in-50 duration-200">
                    <p style={{ color: 'var(--kpx-text-muted)' }}>{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
