'use client';

import React, { useState } from 'react';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    { q: 'How does a project start?', a: 'Tell us what you want to build. We review it, ask the right questions, then come back with a scope and an approach. A conversation always comes before any commitment.' },
    { q: 'Who will work on my project?', a: 'Senior engineers and architects work with you directly. We do not staff projects with junior developers.' },
    { q: 'Can you host and manage our servers?', a: 'Yes. We set up and secure VPS and cloud servers, containerize applications, build CI/CD pipelines, and watch production with 24/7 alerts and database optimization.' },
    { q: 'Do you work with international clients?', a: 'Yes. We are remote-first and ship worldwide.' },
    { q: 'What happens after launch?', a: 'We stay on: monitoring, server issue resolution, database optimization and ongoing improvements as your product grows.' },
    { q: 'How much does it cost?', a: 'It depends on scope and the engagement model you choose. Share your idea and we reply with a proposal.' }
  ];
  return (
<section id="faq" className="sec" style={{ paddingTop: '40px' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '56px', alignItems: 'start' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <p className="eyebrow">09 / FAQ</p>
      <h2 className="h2">Questions we hear first.</h2>
      <p style={{ fontSize: '18px', lineHeight: 1.55, color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '420px' }}>Not here? Write to contact@kompilex.com and an engineer will answer.</p>
    </div>
    <div style={{ gridColumn: 'span 2', minWidth: 0, borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
      {faqs.map((f, i) => {
        const isOpen = openFaq === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
            <button
              type="button"
              className="faq-q"
              onClick={() => setOpenFaq(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{f.q}</span>
              <span
                className="plus"
                style={{
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  background: isOpen ? 'var(--kpx-accent-lime, #C8F53C)' : 'transparent',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--kpx-text-main, #0C1410)" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </span>
            </button>
            {isOpen && (
              <p style={{ padding: '0 64px 28px 0', fontSize: '18px', lineHeight: 1.6, color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}
