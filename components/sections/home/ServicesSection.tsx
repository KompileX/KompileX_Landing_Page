'use client';

import React from 'react';

export default function ServicesSection() {
  return (
<section id="services" className="sec">
  <div className="wrap">
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '28px' }}>
      <div>
        <p className="eyebrow">01 / Services</p>
        <h2 className="h2" style={{ marginTop: '16px', maxWidth: '820px' }}>Everything it takes to build, ship and run software.</h2>
      </div>
      <a href="/#services" className="btn btn-line">All services
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </a>
    </div>
    <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: '20px' }}>
      
        <a href="/#services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5h18v14H3zM3 9h18"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>01</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Web Application Development</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Marketing sites, SaaS platforms and internal tools on React and Next.js, built for speed and SEO.</p>
        </a>
      
        <a href="/#services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>02</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Mobile App Development</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>iOS and Android from one React Native codebase, with store publishing and offline support.</p>
        </a>
      
        <a href="/#services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16v5H4zM4 13h16v5H4zM7.5 8.5h.01M7.5 15.5h.01"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>03</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Backend & API Engineering</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Secure services in Go, Node.js and .NET with databases designed for high concurrency.</p>
        </a>
      
        <a href="/#services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>04</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Automation & Integrations</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Social media workflows, unified inboxes, CRM and Stripe integrations that remove manual work.</p>
        </a>
      
        <a href="/#services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>05</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>AI & LLM Solutions</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Conversational agents, retrieval over your own data and tool execution wired into your systems.</p>
        </a>
      
        <a href="/#services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>06</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>DevOps, Cloud & VPS Hosting</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Server setup, containers, CI/CD pipelines and managed hosting on VPS or cloud.</p>
        </a>
      
        <a href="/#services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16zM14 7l3 3"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>07</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>UI/UX & Product Design</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Flows, interfaces and component design systems that engineers can build without guessing.</p>
        </a>
      
        <a href="/#services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>08</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>QA, Maintenance & Support</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Testing before launch, then 24/7 monitoring, fixes and continuous improvement after.</p>
        </a>
      
        <a href="/#services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zM15.5 8.5l-2 5-5 2 2-5z"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>09</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Business & Tech Consulting</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Scoping, architecture reviews and roadmaps, so budget goes to the right product first.</p>
        </a>
      
    </div>
  </div>
</section>
  );
}
