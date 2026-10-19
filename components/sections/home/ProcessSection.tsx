'use client';

import React from 'react';

export default function ProcessSection() {
  return (
<section id="process" className="sec">
  <div className="wrap">
    <p className="eyebrow">03 / Our process</p>
    <h2 className="h2" style={{ marginTop: '16px', maxWidth: '820px' }}>From first call to production, in five steps.</h2>
    <div style={{ marginTop: '64px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap: '28px' }}>
      
        <div style={{ position: 'relative', borderTop: '2px solid var(--kpx-text-main, #0C1410)', paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={{ position: 'absolute', left: '0', top: '-9px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '2px solid var(--kpx-text-main, #0C1410)' }}></span>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>01</span>
          <h3 className="disp" style={{ fontSize: '32px', lineHeight: '1', fontWeight: '700' }}>Discover</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>We learn your goals, users and constraints, then agree on scope.</p>
          <p className="mono" style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--kpx-tag-text, #2C3830)', marginTop: '4px' }}>Requirements · scope</p>
        </div>
      
        <div style={{ position: 'relative', borderTop: '2px solid var(--kpx-text-main, #0C1410)', paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={{ position: 'absolute', left: '0', top: '-9px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '2px solid var(--kpx-text-main, #0C1410)' }}></span>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>02</span>
          <h3 className="disp" style={{ fontSize: '32px', lineHeight: '1', fontWeight: '700' }}>Design</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Flows, interfaces and architecture, reviewed with you before code.</p>
          <p className="mono" style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--kpx-tag-text, #2C3830)', marginTop: '4px' }}>UX flows · UI · architecture</p>
        </div>
      
        <div style={{ position: 'relative', borderTop: '2px solid var(--kpx-text-main, #0C1410)', paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={{ position: 'absolute', left: '0', top: '-9px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '2px solid var(--kpx-text-main, #0C1410)' }}></span>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>03</span>
          <h3 className="disp" style={{ fontSize: '32px', lineHeight: '1', fontWeight: '700' }}>Build</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Short sprints with working demos, so you see progress every step.</p>
          <p className="mono" style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--kpx-tag-text, #2C3830)', marginTop: '4px' }}>Sprints · demos · reviews</p>
        </div>
      
        <div style={{ position: 'relative', borderTop: '2px solid var(--kpx-text-main, #0C1410)', paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={{ position: 'absolute', left: '0', top: '-9px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '2px solid var(--kpx-text-main, #0C1410)' }}></span>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>04</span>
          <h3 className="disp" style={{ fontSize: '32px', lineHeight: '1', fontWeight: '700' }}>Launch</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Testing, deployment and handover to a production environment.</p>
          <p className="mono" style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--kpx-tag-text, #2C3830)', marginTop: '4px' }}>QA · deploy · handover</p>
        </div>
      
        <div style={{ position: 'relative', borderTop: '2px solid var(--kpx-text-main, #0C1410)', paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={{ position: 'absolute', left: '0', top: '-9px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '2px solid var(--kpx-text-main, #0C1410)' }}></span>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>05</span>
          <h3 className="disp" style={{ fontSize: '32px', lineHeight: '1', fontWeight: '700' }}>Support</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Monitoring, fixes and new features once real users arrive.</p>
          <p className="mono" style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--kpx-tag-text, #2C3830)', marginTop: '4px' }}>Monitoring · upkeep · growth</p>
        </div>
      
    </div>
  </div>
</section>
  );
}
