'use client';

import React from 'react';

export default function CareersSection() {
  return (
<section id="careers" style={{ padding: '0 40px 112px' }}>
  <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between', alignItems: 'center', background: 'var(--kpx-stage-bg, #E3EAD9)', border: '1px solid var(--kpx-border-strong, #CBD2C3)', borderRadius: '40px', padding: 'clamp(26px,3.6vw,46px)' }}>
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <p className="eyebrow">Careers</p>
      <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,37px)', lineHeight: '1.02', fontWeight: '800', textWrap: 'balance' }}>Want to build with us?</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>We are remote-first. If you care about senior-level engineering, say hello. [ADD CAREERS EMAIL OR OPEN-ROLES LINK]</p>
    </div>
    <a href="/careers" className="btn btn-ink">See open roles
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
    </a>
  </div>
</section>
  );
}
