'use client';

import React from 'react';

export default function WhyUsSection() {
  return (
<section id="why" className="sec" style={{ background: 'var(--kpx-accent-lime, #C8F53C)', borderRadius: '48px 48px 0 0' }}>
  <div className="wrap">
    <p className="eyebrow" style={{ color: 'var(--kpx-text-main, #0C1410)' }}>06 / Why us</p>
    <h2 className="h2" style={{ marginTop: '16px', maxWidth: '860px' }}>Why ambitious teams partner with us.</h2>
    <div className="dark" style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '20px' }}>
      
        <div style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '28px', padding: '36px 32px 40px', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '340px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>01</span>
            <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7z"></path></svg>
            </span>
          </div>
          <h3 className="disp" style={{ fontSize: '32px', lineHeight: '1.05', fontWeight: '700', marginTop: 'auto' }}>AI-assisted speed</h3>
          <p style={{ fontSize: '17px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>AI tools handle the repetitive work and boilerplate, so the team spends its time on architecture and ships in days rather than months.</p>
        </div>
      
        <div style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '28px', padding: '36px 32px 40px', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '340px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>02</span>
            <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"></path></svg>
            </span>
          </div>
          <h3 className="disp" style={{ fontSize: '32px', lineHeight: '1.05', fontWeight: '700', marginTop: 'auto' }}>Continuous systems monitoring</h3>
          <p style={{ fontSize: '17px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>24/7 alerts, server issue resolution and database optimization keep what we ship healthy long after launch.</p>
        </div>
      
        <div style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '28px', padding: '36px 32px 40px', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '340px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>03</span>
            <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"></path></svg>
            </span>
          </div>
          <h3 className="disp" style={{ fontSize: '32px', lineHeight: '1.05', fontWeight: '700', marginTop: 'auto' }}>Pure senior engineering</h3>
          <p style={{ fontSize: '17px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>You work directly with veteran architects. No junior developers, no hand-offs, no telephone game.</p>
        </div>
      
    </div>
  </div>
</section>
  );
}
