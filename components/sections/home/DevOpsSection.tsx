'use client';

import React from 'react';

export default function DevOpsSection() {
  return (
<section id="devops" className="sec dark" style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '48px' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '64px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
      <p className="eyebrow">04 / DevOps &amp; hosting</p>
      <h2 className="h2">We run what we ship.</h2>
      <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)', maxWidth: '540px', textWrap: 'pretty' }}>Launching is the middle of the story. We set up your servers, automate your deployments and watch production around the clock, whether you host on a VPS or in the cloud.</p>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(230px,100%),1fr))', gap: '14px 24px' }}>
        
          <li style={{ display: 'flex', gap: '12px', fontSize: '16.5px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>VPS and server setup, hardened</li>
        
          <li style={{ display: 'flex', gap: '12px', fontSize: '16.5px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Docker and Kubernetes deployments</li>
        
          <li style={{ display: 'flex', gap: '12px', fontSize: '16.5px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>CI/CD pipelines</li>
        
          <li style={{ display: 'flex', gap: '12px', fontSize: '16.5px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>24/7 monitoring and alerting</li>
        
          <li style={{ display: 'flex', gap: '12px', fontSize: '16.5px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Backups and recovery plans</li>
        
          <li style={{ display: 'flex', gap: '12px', fontSize: '16.5px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>SSL, DNS, CDN and firewalls</li>
        
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '6px' }}>
        <a href="/#technologies" className="btn btn-lime">Explore our stack
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </a>
        <a href="#contact" className="btn btn-lineL">Ask about hosting</a>
      </div>
    </div>

    {/*  infra illustration  */}
    <div className="infra" style={{ position: 'relative', height: '540px' }} role="img" aria-label="Illustration of a deploy terminal, a server rack and an uptime chart">
      <div style={{ position: 'absolute', left: '0', top: '0', width: '82%', background: '#121C17', border: '1px solid #24332B', borderRadius: '22px', overflow: 'hidden' }}>
        <div style={{ height: '42px', borderBottom: '1px solid #24332B', display: 'flex', alignItems: 'center', gap: '7px', padding: '0 16px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3A4A41' }}></span><span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3A4A41' }}></span><span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3A4A41' }}></span>
          <span className="mono" style={{ marginLeft: '10px', fontSize: '11.5px', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>deploy · illustrative</span>
        </div>
        <div style={{ fontFamily: '\'JetBrains Mono\',ui-monospace,monospace', padding: '20px 22px 24px', fontSize: '13.5px', lineHeight: '1.95', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>
          <div><span style={{ color: 'var(--kpx-dark-muted, #A9B6AE)' }}>$</span> git push origin main</div>
          <div><span style={{ color: 'var(--kpx-dark-muted, #A9B6AE)' }}>✓</span> tests passed</div>
          <div><span style={{ color: 'var(--kpx-dark-muted, #A9B6AE)' }}>✓</span> container image built</div>
          <div><span style={{ color: 'var(--kpx-dark-muted, #A9B6AE)' }}>✓</span> deployed to server</div>
          <div><span style={{ color: 'var(--kpx-dark-muted, #A9B6AE)' }}>✓</span> health checks green</div>
        </div>
      </div>
      <div style={{ position: 'absolute', right: '0', top: '120px', width: '48%', background: 'var(--kpx-stage-bg, #E3EAD9)', borderRadius: '22px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 30px 50px -30px rgba(0,0,0,.8)' }}>
        
          <div style={{ height: '56px', borderRadius: '12px', background: 'var(--kpx-text-main, #0C1410)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 14px' }}>
            <span className="led" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', animationDelay: '0s' }}></span>
            <span className="led" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-green, #1FB36B)', animationDelay: '0.8s' }}></span>
            <span style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}><span style={{ width: '26px', height: '4px', borderRadius: '2px', background: '#3A4A41' }}></span><span style={{ width: '26px', height: '4px', borderRadius: '2px', background: '#3A4A41' }}></span><span style={{ width: '14px', height: '4px', borderRadius: '2px', background: 'var(--kpx-accent-lime, #C8F53C)' }}></span></span>
          </div>
        
          <div style={{ height: '56px', borderRadius: '12px', background: 'var(--kpx-text-main, #0C1410)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 14px' }}>
            <span className="led" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', animationDelay: '0.5s' }}></span>
            <span className="led" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-green, #1FB36B)', animationDelay: '1.3s' }}></span>
            <span style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}><span style={{ width: '26px', height: '4px', borderRadius: '2px', background: '#3A4A41' }}></span><span style={{ width: '26px', height: '4px', borderRadius: '2px', background: '#3A4A41' }}></span><span style={{ width: '14px', height: '4px', borderRadius: '2px', background: 'var(--kpx-accent-lime, #C8F53C)' }}></span></span>
          </div>
        
          <div style={{ height: '56px', borderRadius: '12px', background: 'var(--kpx-text-main, #0C1410)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 14px' }}>
            <span className="led" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', animationDelay: '1s' }}></span>
            <span className="led" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-green, #1FB36B)', animationDelay: '1.8s' }}></span>
            <span style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}><span style={{ width: '26px', height: '4px', borderRadius: '2px', background: '#3A4A41' }}></span><span style={{ width: '26px', height: '4px', borderRadius: '2px', background: '#3A4A41' }}></span><span style={{ width: '14px', height: '4px', borderRadius: '2px', background: 'var(--kpx-accent-lime, #C8F53C)' }}></span></span>
          </div>
        
          <div style={{ height: '56px', borderRadius: '12px', background: 'var(--kpx-text-main, #0C1410)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 14px' }}>
            <span className="led" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', animationDelay: '1.5s' }}></span>
            <span className="led" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-green, #1FB36B)', animationDelay: '2.3s' }}></span>
            <span style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}><span style={{ width: '26px', height: '4px', borderRadius: '2px', background: '#3A4A41' }}></span><span style={{ width: '26px', height: '4px', borderRadius: '2px', background: '#3A4A41' }}></span><span style={{ width: '14px', height: '4px', borderRadius: '2px', background: 'var(--kpx-accent-lime, #C8F53C)' }}></span></span>
          </div>
        
      </div>
      <div className="floaty" style={{ position: 'absolute', left: '6%', bottom: '0', width: '64%', background: 'var(--kpx-accent-lime, #C8F53C)', color: 'var(--kpx-text-main, #0C1410)', borderRadius: '22px', padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 30px 50px -30px rgba(0,0,0,.8)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase' }}>Uptime</span><span className="mono" style={{ fontSize: '11px' }}>illustrative</span></div>
        <svg viewBox="0 0 300 70" width="100%" height="70" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 46 L40 40 L76 44 L112 28 L150 34 L188 18 L226 26 L264 12 L298 16"></path></svg>
      </div>
    </div>
  </div>
</section>
  );
}
