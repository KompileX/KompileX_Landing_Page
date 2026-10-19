'use client';

import TechOrbit from './TechOrbit';
import TechnologiesGrid from '@/components/sections/shared/TechnologiesGrid';

import React from 'react';
import Link from 'next/link';

export default function TechnologiesPage() {
  return (
    <div className="exact-exacttechnologies-container" style={{ color: 'var(--kpx-text-main, #0C1410)' }}>
      <div>
{/*  HERO  */}
<section className="sec" style={{ paddingTop: '88px', paddingBottom: '64px' }}>
  <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ flex: '1 1 560px', minWidth: '0' }}>
      <p className="eyebrow rise">Technologies</p>
      <h1 className="disp rise" style={{ animationDelay: '.08s', marginTop: '20px', fontSize: 'clamp(32px,4.8vw,69px)', lineHeight: '.96', fontWeight: '700', textWrap: 'balance' }}>The stack behind <span className="hl">what we ship.</span></h1>
      <p className="rise" style={{ animationDelay: '.2s', marginTop: '32px', fontSize: '21px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '620px', textWrap: 'pretty' }}>Languages, frameworks, databases and infrastructure we use every week. We pick the tool that fits your product, then deploy and run it ourselves.</p>
      <div className="rise" style={{ animationDelay: '.3s', marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <a href="#infra" className="btn btn-ink">DevOps &amp; hosting
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </a>
        <a href="/" className="btn btn-line">Talk to an engineer</a>
      </div>
    </div>
    <TechOrbit />
  </div>
</section>

{/*  GRID  */}
<TechnologiesGrid bare />

<section id="infra" className="sec dark" style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '48px' }}>
  <div className="wrap">
    <p className="eyebrow">DevOps, cloud &amp; hosting</p>
    <h2 className="h2" style={{ marginTop: '16px', maxWidth: '900px' }}>We do not hand you a repo and disappear. We run it.</h2>
    <p style={{ marginTop: '24px', fontSize: '20px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)', maxWidth: '720px', textWrap: 'pretty' }}>Your own VPS, your cloud account or our managed hosting: we set it up, secure it, automate releases and keep watch.</p>

    {/*  pipeline  */}
    <div style={{ marginTop: '56px', background: '#121C17', border: '1px solid #24332B', borderRadius: '32px', padding: 'clamp(26px,2.9vw,32px)', overflowX: 'auto' }}>
      <svg viewBox="0 0 1100 200" width="100%" style={{ minWidth: '760px' }} role="img" aria-label="Release pipeline from developer to Git, CI, container registry, server and monitoring">
        <g stroke="#C8F53C" strokeWidth="3" strokeLinecap="round" className="flow"><path d="M110 80 H200"></path><path d="M310 80 H400"></path><path d="M510 80 H600"></path><path d="M710 80 H800"></path><path d="M910 80 H980"></path></g>
        <g fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="600" textAnchor="middle" fill="#F4F6F1">
          <rect x="10" y="40" width="100" height="80" rx="20" fill="#0C1410" stroke="#3A4A41" strokeWidth="2"></rect><text x="60" y="87">Dev</text><text x="60" y="160" fill="#DCE6D0" fontSize="13">commit</text>
          <rect x="210" y="40" width="100" height="80" rx="20" fill="#0C1410" stroke="#3A4A41" strokeWidth="2"></rect><text x="260" y="87">Git</text><text x="260" y="160" fill="#DCE6D0" fontSize="13">review</text>
          <rect x="410" y="40" width="100" height="80" rx="20" fill="#0C1410" stroke="#3A4A41" strokeWidth="2"></rect><text x="460" y="87">CI</text><text x="460" y="160" fill="#DCE6D0" fontSize="13">build &amp; test</text>
          <rect x="610" y="40" width="100" height="80" rx="20" fill="#0C1410" stroke="#3A4A41" strokeWidth="2"></rect><text x="660" y="87">Image</text><text x="660" y="160" fill="#DCE6D0" fontSize="13">container</text>
          <rect x="810" y="40" width="100" height="80" rx="20" fill="#C8F53C"></rect><text x="860" y="87" fill="#0C1410">Server</text><text x="860" y="160" fill="#DCE6D0" fontSize="13">VPS / cloud</text>
          <circle cx="1040" cy="80" r="48" fill="#0C1410" stroke="#C8F53C" strokeWidth="3"></circle><text x="1040" y="86" fill="#FFFFFF" fontSize="14">watch</text><text x="1040" y="160" fill="#DCE6D0" fontSize="13">24/7 alerts</text>
        </g>
      </svg>
    </div>

    <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: '16px' }}>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16v5H4zM4 13h16v5H4zM7.5 8.5h.01M7.5 15.5h.01"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>VPS & server setup</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>We provision, harden and document your servers: users, firewalls, updates, SSH, and sane defaults from day one.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-5 9 5v7l-9 5-9-5zM3 9l9 5 9-5M12 14v7"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Containers & orchestration</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>Docker images for every service, run with Compose on a single VPS or Kubernetes when you outgrow it.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3v12M6 15a3 3 0 106 0 3 3 0 00-6 0zM18 9a3 3 0 100-6 3 3 0 000 6zM18 9v3a6 6 0 01-6 6"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>CI/CD pipelines</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>Every push is built, tested and deployed the same way, so releases are routine instead of events.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Monitoring & alerting</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>24/7 alerts, server issue resolution and database optimization, so problems find us before your users.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M4 19h16"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Backups & recovery</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>Scheduled, tested backups and a written recovery plan for databases and files.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Domains, SSL & CDN</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>DNS, certificates, caching and edge delivery configured and renewed for you.</p>
        </div>
      
    </div>

    <div style={{ marginTop: '56px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
      <span className="mono" style={{ fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)', marginRight: '12px' }}>We deploy to</span>
      <span className="pill">Your own VPS</span><span className="pill">AWS</span><span className="pill">DigitalOcean</span><span className="pill">Hetzner</span><span className="pill">Cloudflare</span><span className="pill">On-premise servers</span>
    </div>
  </div>
</section>

{/*  CTA  */}
<section style={{ padding: '112px 40px' }}>
  <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between', alignItems: 'center', background: 'var(--kpx-accent-lime, #C8F53C)', borderRadius: '40px', padding: 'clamp(26px,4.3vw,52px)' }}>
    <div style={{ maxWidth: '660px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2 className="disp" style={{ fontSize: 'clamp(26px,3.3vw,46px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>One partner for the code and the servers it runs on.</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.5', textWrap: 'pretty' }}>Tell us your stack, or let us choose one with you.</p>
    </div>
    <a href="/" className="btn btn-ink">Start a Project
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
    </a>
  </div>
</section>

</div>
    </div>
  );
}
