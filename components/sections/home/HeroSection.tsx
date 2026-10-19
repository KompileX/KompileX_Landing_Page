'use client';

import React from 'react';

export default function HeroSection() {
  return (
<section className="sec" style={{ paddingTop: '64px', paddingBottom: '72px' }}>
  <div className="wrap">
    <div className="rise" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '9px 18px 9px 14px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '999px', background: '#fff' }}>
      <span className="dot"></span>
      <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Available for new projects</span>
    </div>
    <h1 className="disp rise" style={{ animationDelay: '.1s', marginTop: '28px', fontSize: 'clamp(33px,5.5vw,78px)', lineHeight: '.96', fontWeight: '700', maxWidth: '1120px', textWrap: 'balance' }}>Scale your software <span className="hl">without expanding</span> your team.</h1>
    <div className="rise" style={{ animationDelay: '.22s', marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <p className="mono" style={{ fontSize: '14px', letterSpacing: '.04em', color: 'var(--kpx-accent-emerald, #0A6B4A)', fontWeight: '500' }}>Design. Build. Ship. Run.</p>
        <p style={{ fontSize: '20px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>KompileX is a software company. We build intelligent applications that automate daily operations, then host, monitor and support them long after launch.</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <a href="#contact" className="btn btn-ink">Start a Project
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </a>
        <a href="#work" className="btn btn-line">See Our Work</a>
      </div>
    </div>

    {/*  STAGE  */}
    <div className="stage rise" style={{ animationDelay: '.34s', position: 'relative', marginTop: '72px', height: '560px', borderRadius: '40px', backgroundColor: 'var(--kpx-stage-bg, #E3EAD9)', backgroundImage: 'radial-gradient(var(--kpx-hero-dots, #B9C6AB) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '64px', width: 'min(78%,900px)', height: '620px', background: '#fff', border: '1px solid var(--kpx-border-strong, #CBD2C3)', borderRadius: '22px', boxShadow: '0 40px 80px -40px var(--kpx-hero-shadow, rgba(12,20,16,.45))', overflow: 'hidden' }}>
        <div style={{ height: '48px', borderBottom: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 18px' }}>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }}></span>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }}></span>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }}></span>
          <span className="mono" style={{ marginLeft: '14px', height: '26px', padding: '0 14px', borderRadius: '999px', background: '#F1F4EC', fontSize: '12px', color: 'var(--kpx-text-muted, #4A5650)', display: 'inline-flex', alignItems: 'center' }}>your-product.com / dashboard</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '200px minmax(0,1fr)', height: '572px' }}>
          <div className="win-side" style={{ background: 'var(--kpx-bg-page, #F4F6F1)', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', padding: '22px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ height: '38px', borderRadius: '10px', background: 'var(--kpx-accent-lime, #C8F53C)' }}></div>
            <div style={{ height: '38px', borderRadius: '10px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
            <div style={{ height: '38px', borderRadius: '10px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
            <div style={{ height: '38px', borderRadius: '10px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
            <div style={{ height: '38px', borderRadius: '10px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
          </div>
          <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '22px', minWidth: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '180px', height: '20px', borderRadius: '6px', background: 'var(--kpx-text-main, #0C1410)' }}></div>
              <div style={{ width: '90px', height: '32px', borderRadius: '999px', background: 'var(--kpx-text-main, #0C1410)' }}></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '14px' }}>
              <div style={{ height: '92px', borderRadius: '14px', border: '1px solid var(--kpx-border-subtle, #E4E8DD)', padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}><div style={{ width: '50%', height: '8px', borderRadius: '4px', background: 'var(--kpx-border, #D8DDD2)' }}></div><div style={{ width: '70%', height: '22px', borderRadius: '6px', background: 'var(--kpx-text-main, #0C1410)' }}></div></div>
              <div style={{ height: '92px', borderRadius: '14px', border: '1px solid var(--kpx-border-subtle, #E4E8DD)', padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}><div style={{ width: '40%', height: '8px', borderRadius: '4px', background: 'var(--kpx-border, #D8DDD2)' }}></div><div style={{ width: '55%', height: '22px', borderRadius: '6px', background: 'var(--kpx-text-main, #0C1410)' }}></div></div>
              <div style={{ height: '92px', borderRadius: '14px', background: 'var(--kpx-text-main, #0C1410)', padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}><div style={{ width: '45%', height: '8px', borderRadius: '4px', background: '#3A4A41' }}></div><div style={{ width: '65%', height: '22px', borderRadius: '6px', background: 'var(--kpx-accent-lime, #C8F53C)' }}></div></div>
            </div>
            <div style={{ height: '200px', borderRadius: '14px', border: '1px solid var(--kpx-border-subtle, #E4E8DD)', padding: '20px', display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
              
                <div className="bar" style={{ flex: '1', height: '38%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '0.50s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '52%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '0.56s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '44%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '0.62s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '66%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '0.68s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '58%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '0.74s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '74%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '0.80s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '62%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '0.86s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '88%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '0.92s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '70%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '0.98s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '82%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '1.04s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '94%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-accent-lime, #C8F53C)', animationDelay: '1.10s' }}></div>
              
                <div className="bar" style={{ flex: '1', height: '78%', borderRadius: '6px 6px 2px 2px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '1.16s' }}></div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="float-l floaty" style={{ position: 'absolute', left: '32px', top: '150px', width: '300px', background: '#fff', border: '1px solid var(--kpx-border-strong, #CBD2C3)', borderRadius: '20px', padding: '18px', boxShadow: '0 30px 50px -30px rgba(12,20,16,.5)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '9px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path></svg>
            </span>
            <span style={{ fontWeight: '700', fontSize: '15px' }}>Ask KompileX AI</span>
          </div>
          <span className="mono" style={{ fontSize: '10.5px', color: 'var(--kpx-text-muted, #4A5650)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Illustrative</span>
        </div>
        <p style={{ fontSize: '14.5px', lineHeight: '1.45', background: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '12px', padding: '12px 14px' }}>Reply to every comment on our launch post and capture the lead.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--kpx-accent-emerald, #0A6B4A)', fontWeight: '600' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>
          Workflow drafted · 3 steps
        </div>
      </div>

      <div className="float-r floaty" style={{ animationDelay: '-3s', position: 'absolute', right: '32px', top: '96px', width: '268px', background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '20px', padding: '18px', boxShadow: '0 30px 50px -30px rgba(12,20,16,.7)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span className="dot"></span><span className="mono" style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Production</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8F53C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Build passed</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8F53C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Deployed to server</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8F53C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Monitoring 24/7</div>
      </div>
    </div>

    {/*  clients  */}
    <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px 44px', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)', paddingTop: '26px' }}>
      <span className="mono" style={{ fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Built for teams at</span>
      
        <span className="disp" style={{ fontSize: '24px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)' }}>CipherLock Systems</span>
      
        <span className="disp" style={{ fontSize: '24px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)' }}>VitalMed Group</span>
      
        <span className="disp" style={{ fontSize: '24px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)' }}>Apex Commerce</span>
      
        <span className="disp" style={{ fontSize: '24px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)' }}>FinTech Labs</span>
      
    </div>
  </div>
</section>
  );
}
