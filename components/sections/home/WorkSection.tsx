'use client';

import React, { useState } from 'react';

export default function WorkSection() {
  const [workFilter, setWorkFilter] = useState<'all' | 'web' | 'mobile'>('all');
  const allWorks = [
    { id: 'commerceos', title: 'CommerceOS', isWeb: true, isMobile: false, kind: 'web', meta: 'Web app · Internal product', desc: 'A multi-tenant e-commerce CMS for agencies and solution providers, built as an alternative to WordPress and Shopify.', stack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL'], bg: '#DCE6D0', ac: '#C8F53C', href: '/case-studies/commerceos' },
    { id: 'social-engagement', title: 'Social Engagement Platform', isWeb: true, isMobile: false, kind: 'web', meta: 'Web app · Internal product', desc: 'A multi-tenant platform for agencies to offer social media management, messaging, automation and analytics.', stack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL'], bg: '#0C1410', ac: '#C8F53C', href: '/case-studies/social-engagement-platform' },
    { id: 'vaultx', title: 'VaultX Enterprise', isWeb: true, isMobile: false, kind: 'web', meta: 'Web app · CipherLock Systems', desc: 'A security-first app for managing, auditing and injecting secrets into CI/CD pipelines.', stack: ['React', 'TypeScript', 'Tailwind CSS', 'Go'], bg: '#E4E1F2', ac: '#0C1410', href: '/case-studies/vaultx-security' },
    { id: 'carepulse', title: 'CarePulse Health', isWeb: false, isMobile: true, kind: 'mobile', meta: 'Mobile app · VitalMed Group', desc: 'Patients schedule visits, join HD video consultations and manage digital prescriptions.', stack: ['React Native', 'TypeScript', 'WebRTC', 'Node.js'], bg: '#CFE7E0', ac: '#1FB36B', href: '/case-studies/carepulse-health' },
    { id: 'flowline', title: 'Flowline CRM', isWeb: true, isMobile: false, kind: 'web', meta: 'Web app · Apex Commerce', desc: 'A CRM for growing sales teams, with real-time deal sync and automated email sequences.', stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], bg: '#F3E3D3', ac: '#0C1410', href: '/case-studies/flowline-crm' },
    { id: 'zenith', title: 'Zenith Pay', isWeb: false, isMobile: true, kind: 'mobile', meta: 'Mobile app · FinTech Labs', desc: 'A mobile wallet with sub-second transfers, bill payments and merchant QR pay.', stack: ['React Native', 'TypeScript', 'Node.js', 'Redis'], bg: '#C8F53C', ac: '#0C1410', href: '/case-studies/zenith-pay' }
  ];

  const filteredWorks = allWorks.filter(w => workFilter === 'all' || w.kind === workFilter);
  return (
<section id="work" className="sec">
  <div className="wrap">
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '28px' }}>
      <div>
        <p className="eyebrow">05 / Selected work</p>
        <h2 className="h2" style={{ marginTop: '16px', maxWidth: '760px' }}>Products we have shipped.</h2>
      </div>
      <div role="group" aria-label="Filter work" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <button
          type="button"
          className={workFilter === 'all' ? 'chip on' : 'chip'}
          onClick={() => setWorkFilter('all')}
          aria-pressed={workFilter === 'all'}
        >
          All work
        </button>
        <button
          type="button"
          className={workFilter === 'web' ? 'chip on' : 'chip'}
          onClick={() => setWorkFilter('web')}
          aria-pressed={workFilter === 'web'}
        >
          Web
        </button>
        <button
          type="button"
          className={workFilter === 'mobile' ? 'chip on' : 'chip'}
          onClick={() => setWorkFilter('mobile')}
          aria-pressed={workFilter === 'mobile'}
        >
          Mobile
        </button>
      </div>
    </div>

    <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '28px' }}>
      {filteredWorks.map((w) => (
        <a key={w.id} href={w.href} className="card" style={{ display: 'flex', flexDirection: 'column', background: 'var(--kpx-surface, #fff)', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', overflow: 'hidden' }}>
          <div style={{ height: '250px', position: 'relative', overflow: 'hidden', background: w.bg }}>
            {w.isWeb && (
              <div style={{ position: 'absolute', left: '34px', right: '34px', top: '36px', bottom: '-30px', background: 'var(--kpx-surface, #fff)', borderRadius: '14px', border: '1px solid rgba(12,20,16,.12)', overflow: 'hidden' }}>
                <div style={{ height: '30px', borderBottom: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }}></span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '54px minmax(0, 1fr)', height: '100%' }}>
                  <div style={{ background: 'var(--kpx-bg-page, #F4F6F1)', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ height: '16px', borderRadius: '5px', background: w.ac }}></div>
                    <div style={{ height: '16px', borderRadius: '5px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
                    <div style={{ height: '16px', borderRadius: '5px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
                  </div>
                  <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ width: '46%', height: '12px', borderRadius: '4px', background: 'var(--kpx-text-main, #0C1410)' }}></div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ flex: 1, height: '44px', borderRadius: '8px', background: w.ac }}></div>
                      <div style={{ flex: 1, height: '44px', borderRadius: '8px', background: 'var(--kpx-tag-bg, #EEF1E8)' }}></div>
                      <div style={{ flex: 1, height: '44px', borderRadius: '8px', background: 'var(--kpx-tag-bg, #EEF1E8)' }}></div>
                    </div>
                    <div style={{ height: '10px', borderRadius: '4px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
                    <div style={{ width: '70%', height: '10px', borderRadius: '4px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
                  </div>
                </div>
              </div>
            )}
            {w.isMobile && (
              <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '30px', width: '128px', height: '290px', background: 'var(--kpx-surface, #fff)', border: '6px solid var(--kpx-text-main, #0C1410)', borderRadius: '28px', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <div style={{ width: '44px', height: '6px', borderRadius: '3px', background: 'var(--kpx-text-main, #0C1410)', alignSelf: 'center' }}></div>
                <div style={{ height: '62px', borderRadius: '12px', background: w.ac }}></div>
                <div style={{ display: 'flex', gap: '7px' }}>
                  <div style={{ flex: 1, height: '34px', borderRadius: '9px', background: 'var(--kpx-tag-bg, #EEF1E8)' }}></div>
                  <div style={{ flex: 1, height: '34px', borderRadius: '9px', background: 'var(--kpx-tag-bg, #EEF1E8)' }}></div>
                </div>
                <div style={{ height: '9px', borderRadius: '4px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
                <div style={{ width: '65%', height: '9px', borderRadius: '4px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
                <div style={{ height: '30px', borderRadius: '999px', background: 'var(--kpx-text-main, #0C1410)', marginTop: 'auto' }}></div>
              </div>
            )}
          </div>
          <div style={{ padding: '26px 28px 30px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
            <div className="mono" style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>{w.meta}</div>
            <h3 className="disp" style={{ fontSize: '30px', lineHeight: 1.05, fontWeight: 700 }}>{w.title}</h3>
            <p style={{ fontSize: '16.5px', lineHeight: 1.5, color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>{w.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {w.stack.map((s, idx) => (
                <span key={idx} className="tag">{s}</span>
              ))}
            </div>
            <div className="go" style={{ marginTop: 'auto', paddingTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '15.5px' }}>
              Explore project
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"></path></svg>
            </div>
          </div>
        </a>
      ))}
    </div>

    <div style={{ marginTop: '56px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
      <span className="mono" style={{ fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', marginRight: '10px' }}>Industries we build for</span>
      <span className="ind">E-commerce & retail</span>
      <span className="ind">Healthcare</span>
      <span className="ind">Fintech & payments</span>
      <span className="ind">Cybersecurity</span>
      <span className="ind">Sales & CRM</span>
      <span className="ind">Agencies & marketing</span>
    </div>
  </div>
</section>
  );
}
