'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="exact-exactservices-container" style={{ color: 'var(--kpx-text-main, #0C1410)' }}>
      <div>
{/*  HERO  */}
<section className="sec" style={{ paddingTop: '88px', paddingBottom: '56px' }}>
  <div className="wrap">
    <p className="eyebrow rise">Services</p>
    <h1 className="disp rise" style={{ animationDelay: '.08s', marginTop: '20px', fontSize: 'clamp(32px,5.0vw,72px)', lineHeight: '.96', fontWeight: '700', maxWidth: '1100px', textWrap: 'balance' }}>One company for the <span className="hl">whole life</span> of your software.</h1>
    <p className="rise" style={{ animationDelay: '.2s', marginTop: '32px', fontSize: '21px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '700px', textWrap: 'pretty' }}>Strategy, design, engineering, hosting and support under one roof, with the same senior people from the first call to production and beyond.</p>
    <div className="rise" style={{ animationDelay: '.3s', marginTop: '44px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      
        <a href="#svc-web" className="jump"><span className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>01</span>Web apps</a>
      
        <a href="#svc-mobile" className="jump"><span className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>02</span>Mobile apps</a>
      
        <a href="#svc-backend" className="jump"><span className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>03</span>Backend & APIs</a>
      
        <a href="#svc-auto" className="jump"><span className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>04</span>Automation</a>
      
        <a href="#svc-ai" className="jump"><span className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>05</span>AI & LLM</a>
      
        <a href="#svc-devops" className="jump"><span className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>06</span>DevOps & hosting</a>
      
        <a href="#svc-design" className="jump"><span className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>07</span>UI/UX design</a>
      
        <a href="#svc-qa" className="jump"><span className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>08</span>QA & support</a>
      
        <a href="#svc-consult" className="jump"><span className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>09</span>Consulting</a>
      
    </div>
  </div>
</section>

{/*  SERVICE ROWS  */}
<section style={{ padding: '0 40px' }}>
  <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    
      <article id="svc-web" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '48px', alignItems: 'center', padding: '56px 0', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
        <div style={{ order: '1', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>01 / 09</span>
          <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,39px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>Web Application Development</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '540px', textWrap: 'pretty' }}>From a high-converting marketing site to a multi-tenant SaaS platform, we build web products that load fast, rank well and scale.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>High-converting marketing sites and SaaS platforms</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Optimized React and Next.js codebases</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Custom component design systems</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Production-ready SEO and accessibility</li>
            
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag">React</span><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Tailwind CSS</span><span className="tag">Angular</span><span className="tag">Vue.js</span>
          </div>
        </div>

        <div className="panel" style={{ order: '2', borderRadius: '36px', backgroundColor: '#DCE6D0', backgroundImage: 'radial-gradient(rgba(12,20,16,.16) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', padding: '18px', border: '1px solid rgba(12,20,16,.1)' }}>

          
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="Illustration of a web application">
              <rect x="60" y="48" width="440" height="304" rx="18" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect>
              <rect x="62" y="50" width="436" height="38" rx="16" fill="#F4F6F1"></rect>
              <circle cx="84" cy="69" r="5" fill="#CBD2C3"></circle><circle cx="102" cy="69" r="5" fill="#CBD2C3"></circle><circle cx="120" cy="69" r="5" fill="#CBD2C3"></circle>
              <rect x="146" y="59" width="210" height="20" rx="10" fill="#E4E8DD"></rect>
              <rect x="84" y="108" width="392" height="112" rx="14" fill="#0C1410"></rect>
              <rect x="108" y="132" width="170" height="16" rx="8" fill="#F4F6F1"></rect>
              <rect x="108" y="158" width="116" height="10" rx="5" fill="#5C6B62"></rect>
              <rect x="108" y="184" width="88" height="26" rx="13" fill="#C8F53C"></rect>
              <circle cx="414" cy="164" r="38" fill="#C8F53C"></circle>
              <path d="M398 164l12 12 22-24" fill="none" stroke="#0C1410" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
              <rect x="84" y="238" width="120" height="96" rx="12" fill="#F4F6F1"></rect><rect x="214" y="238" width="120" height="96" rx="12" fill="#F4F6F1"></rect><rect x="344" y="238" width="132" height="96" rx="12" fill="#F4F6F1"></rect>
              <rect x="98" y="252" width="40" height="40" rx="10" fill="#C8F53C"></rect><rect x="228" y="252" width="40" height="40" rx="10" fill="#0C1410"></rect><rect x="358" y="252" width="40" height="40" rx="10" fill="#E3EAD9" stroke="#0C1410" strokeWidth="2"></rect>
              <rect x="98" y="304" width="80" height="8" rx="4" fill="#CBD2C3"></rect><rect x="228" y="304" width="80" height="8" rx="4" fill="#CBD2C3"></rect><rect x="358" y="304" width="90" height="8" rx="4" fill="#CBD2C3"></rect>
              <g className="floaty"><rect x="392" y="22" width="124" height="40" rx="20" fill="#C8F53C" stroke="#0C1410" strokeWidth="3"></rect><text x="454" y="48" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="600" fill="#0C1410">SEO ready</text></g>
            </svg>
          

          

          

          

          

          

          

          

          

        </div>
      </article>
    
      <article id="svc-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '48px', alignItems: 'center', padding: '56px 0', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
        <div style={{ order: '2', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>02 / 09</span>
          <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,39px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>Mobile App Development</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '540px', textWrap: 'pretty' }}>One codebase, two stores. Apps that feel native, work offline and keep users engaged.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>iOS and Android apps from one React Native codebase</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Native-grade performance and integrations</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>App Store and Google Play publishing</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Offline support and push notifications</li>
            
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag">React Native</span><span className="tag">Flutter</span><span className="tag">Kotlin</span><span className="tag">TypeScript</span>
          </div>
        </div>

        <div className="panel" style={{ order: '1', borderRadius: '36px', backgroundColor: '#E4E1F2', backgroundImage: 'radial-gradient(rgba(12,20,16,.16) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', padding: '18px', border: '1px solid rgba(12,20,16,.1)' }}>

          

          
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="Illustration of two mobile apps">
              <rect x="130" y="30" width="170" height="340" rx="32" fill="#fff" stroke="#0C1410" strokeWidth="5"></rect>
              <rect x="190" y="44" width="50" height="8" rx="4" fill="#0C1410"></rect>
              <rect x="148" y="70" width="134" height="90" rx="16" fill="#C8F53C"></rect>
              <circle cx="190" cy="115" r="22" fill="#0C1410"></circle><rect x="224" y="100" width="46" height="10" rx="5" fill="#0C1410"></rect><rect x="224" y="120" width="30" height="8" rx="4" fill="#0C1410" opacity=".5"></rect>
              <rect x="148" y="176" width="62" height="62" rx="14" fill="#F4F6F1"></rect><rect x="220" y="176" width="62" height="62" rx="14" fill="#F4F6F1"></rect>
              <rect x="148" y="252" width="134" height="10" rx="5" fill="#E4E8DD"></rect><rect x="148" y="272" width="90" height="10" rx="5" fill="#E4E8DD"></rect>
              <rect x="148" y="318" width="134" height="34" rx="17" fill="#0C1410"></rect>
              <g className="floaty" style={{ animationDelay: '-2s' }}>
              <rect x="280" y="64" width="150" height="310" rx="30" fill="#0C1410" stroke="#0C1410" strokeWidth="5"></rect>
              <rect x="326" y="78" width="44" height="7" rx="3.5" fill="#3A4A41"></rect>
              <rect x="296" y="104" width="118" height="70" rx="14" fill="#1B2A22"></rect>
              <path d="M308 156 L330 138 L352 148 L376 122 L402 130" fill="none" stroke="#C8F53C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
              <rect x="296" y="190" width="118" height="44" rx="12" fill="#1B2A22"></rect><circle cx="318" cy="212" r="10" fill="#C8F53C"></circle><rect x="338" y="203" width="60" height="8" rx="4" fill="#5C6B62"></rect><rect x="338" y="219" width="40" height="7" rx="3.5" fill="#3A4A41"></rect>
              <rect x="296" y="246" width="118" height="44" rx="12" fill="#1B2A22"></rect><circle cx="318" cy="268" r="10" fill="#E3EAD9"></circle><rect x="338" y="259" width="60" height="8" rx="4" fill="#5C6B62"></rect><rect x="338" y="275" width="40" height="7" rx="3.5" fill="#3A4A41"></rect>
              </g>
              <circle cx="470" cy="110" r="30" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle><path d="M458 110h24M474 100l10 10-10 10" fill="none" stroke="#0C1410" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          

          

          

          

          

          

          

          

        </div>
      </article>
    
      <article id="svc-backend" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '48px', alignItems: 'center', padding: '56px 0', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
        <div style={{ order: '1', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>03 / 09</span>
          <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,39px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>Backend & API Engineering</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '540px', textWrap: 'pretty' }}>The engine room of your product: secure, observable services that stay fast under load.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Secure server architectures</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Microservices in Go and Node.js</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Stripe billing and CRM integrations</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Database design for high concurrency</li>
            
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag">Go</span><span className="tag">Node.js</span><span className="tag">.NET</span><span className="tag">PostgreSQL</span><span className="tag">Redis</span>
          </div>
        </div>

        <div className="panel" style={{ order: '2', borderRadius: '36px', backgroundColor: '#F3E3D3', backgroundImage: 'radial-gradient(rgba(12,20,16,.16) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', padding: '18px', border: '1px solid rgba(12,20,16,.1)' }}>

          

          

          
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="Illustration of backend services connected through an API gateway">
              <g stroke="#0C1410" strokeWidth="3" fill="none" strokeLinecap="round"><path d="M280 200 L120 90"></path><path d="M280 200 L440 90"></path><path d="M280 200 L120 310"></path><path d="M280 200 L440 310"></path></g>
              <rect x="206" y="160" width="148" height="80" rx="20" fill="#0C1410"></rect>
              <text x="280" y="206" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="17" fontWeight="600" fill="#FFFFFF">API gateway</text>
              <rect x="50" y="56" width="140" height="64" rx="16" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect><text x="120" y="94" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="600" fill="#0C1410">Auth</text>
              <rect x="370" y="56" width="140" height="64" rx="16" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect><text x="440" y="94" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="600" fill="#0C1410">Queue</text>
              <rect x="50" y="280" width="140" height="64" rx="16" fill="#C8F53C" stroke="#0C1410" strokeWidth="3"></rect><text x="120" y="318" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="600" fill="#0C1410">Billing</text>
              <g><ellipse cx="440" cy="288" rx="52" ry="14" fill="#fff" stroke="#0C1410" strokeWidth="3"></ellipse><path d="M388 288v44c0 8 23 14 52 14s52-6 52-14v-44" fill="#fff" stroke="#0C1410" strokeWidth="3"></path><path d="M388 310c0 8 23 14 52 14s52-6 52-14" fill="none" stroke="#0C1410" strokeWidth="3"></path></g>
              <circle className="led" cx="206" cy="190" r="6" fill="#C8F53C"></circle>
            </svg>
          

          

          

          

          

          

          

        </div>
      </article>
    
      <article id="svc-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '48px', alignItems: 'center', padding: '56px 0', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
        <div style={{ order: '2', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>04 / 09</span>
          <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,39px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>Automation & Integrations</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '540px', textWrap: 'pretty' }}>Replace repetitive manual work with workflows that run on their own and connect the tools you already use.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Automated publishing and scheduling</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Unified inbox and messaging sync</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Automated comment replies and lead capture</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>SaaS and CRM workflow integrations</li>
            
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag">Node.js</span><span className="tag">NestJS</span><span className="tag">REST APIs</span><span className="tag">PostgreSQL</span>
          </div>
        </div>

        <div className="panel" style={{ order: '1', borderRadius: '36px', backgroundColor: '#CFE7E0', backgroundImage: 'radial-gradient(rgba(12,20,16,.16) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', padding: '18px', border: '1px solid rgba(12,20,16,.1)' }}>

          

          

          

          
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="Illustration of an automated messaging workflow">
              <rect x="40" y="52" width="190" height="62" rx="20" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect><rect x="60" y="74" width="120" height="9" rx="4.5" fill="#CBD2C3"></rect><rect x="60" y="92" width="80" height="9" rx="4.5" fill="#CBD2C3"></rect>
              <rect x="40" y="138" width="190" height="62" rx="20" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect><rect x="60" y="160" width="130" height="9" rx="4.5" fill="#CBD2C3"></rect><rect x="60" y="178" width="70" height="9" rx="4.5" fill="#CBD2C3"></rect>
              <rect x="40" y="224" width="190" height="62" rx="20" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect><rect x="60" y="246" width="100" height="9" rx="4.5" fill="#CBD2C3"></rect><rect x="60" y="264" width="120" height="9" rx="4.5" fill="#CBD2C3"></rect>
              <path d="M236 83 C270 83 262 190 296 190 M236 169 L296 190 M236 255 C270 255 262 190 296 190" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round"></path>
              <circle cx="330" cy="190" r="44" fill="#0C1410"></circle>
              <path d="M330 168a22 22 0 100 44 22 22 0 000-44zM330 156v8M330 216v8M308 190h-8M360 190h-8" fill="none" stroke="#C8F53C" strokeWidth="4" strokeLinecap="round"></path>
              <path d="M378 190 L420 190" stroke="#0C1410" strokeWidth="3" strokeLinecap="round"></path><path d="M412 182l10 8-10 8" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              <rect x="430" y="140" width="100" height="100" rx="20" fill="#C8F53C" stroke="#0C1410" strokeWidth="3"></rect>
              <path d="M452 168h56M452 190h56M452 212h34" stroke="#0C1410" strokeWidth="5" strokeLinecap="round"></path>
              <g className="floaty"><rect x="260" y="300" width="230" height="50" rx="25" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect><circle cx="288" cy="325" r="11" fill="#C8F53C" stroke="#0C1410" strokeWidth="2.5"></circle><text x="310" y="331" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="600" fill="#0C1410">Lead captured</text></g>
            </svg>
          

          

          

          

          

          

        </div>
      </article>
    
      <article id="svc-ai" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '48px', alignItems: 'center', padding: '56px 0', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
        <div style={{ order: '1', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>05 / 09</span>
          <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,39px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>AI & LLM Solutions</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '540px', textWrap: 'pretty' }}>Practical AI that does a job: answering customers, searching your documents and acting inside your systems.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>AI conversation agents</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Retrieval over your own documents and data</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>AI/ML application engineering</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Tool execution through MCP</li>
            
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag">Python</span><span className="tag">FastAPI</span><span className="tag">LLM apps</span><span className="tag">MCP</span>
          </div>
        </div>

        <div className="panel" style={{ order: '2', borderRadius: '36px', backgroundColor: '#DCE6D0', backgroundImage: 'radial-gradient(rgba(12,20,16,.16) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', padding: '18px', border: '1px solid rgba(12,20,16,.1)' }}>

          

          

          

          

          
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="Illustration of an AI agent connected to data sources and tools">
              <g stroke="#0C1410" strokeWidth="3" strokeLinecap="round"><path d="M280 170 L110 80"></path><path d="M280 170 L450 80"></path><path d="M280 170 L90 200"></path><path d="M280 170 L470 210"></path></g>
              <circle cx="280" cy="170" r="70" fill="#0C1410"></circle>
              <path d="M280 120l9 24 25 9-25 9-9 25-9-25-25-9 25-9z" fill="#C8F53C"></path>
              <circle cx="110" cy="80" r="34" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle><path d="M96 74h28M96 84h18" stroke="#0C1410" strokeWidth="4" strokeLinecap="round"></path>
              <circle cx="450" cy="80" r="34" fill="#C8F53C" stroke="#0C1410" strokeWidth="3"></circle><path d="M436 80l10 10 18-20" fill="none" stroke="#0C1410" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <g><ellipse cx="90" cy="190" rx="30" ry="9" fill="#fff" stroke="#0C1410" strokeWidth="3"></ellipse><path d="M60 190v26c0 5 13 9 30 9s30-4 30-9v-26" fill="#fff" stroke="#0C1410" strokeWidth="3"></path></g>
              <circle cx="470" cy="210" r="34" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle><path d="M458 210h24M470 198v24" stroke="#0C1410" strokeWidth="4" strokeLinecap="round"></path>
              <g className="floaty"><rect x="110" y="300" width="340" height="56" rx="28" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect><text x="140" y="334" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="16" fill="#4A5650">Ask about your own data…</text><circle cx="418" cy="328" r="18" fill="#C8F53C" stroke="#0C1410" strokeWidth="2.5"></circle><path d="M411 328h14M420 322l6 6-6 6" fill="none" stroke="#0C1410" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"></path></g>
            </svg>
          

          

          

          

          

        </div>
      </article>
    
      <article id="svc-devops" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '48px', alignItems: 'center', padding: '56px 0', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
        <div style={{ order: '2', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>06 / 09</span>
          <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,39px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>DevOps, Cloud & VPS Hosting</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '540px', textWrap: 'pretty' }}>We deploy your product, host it and look after it. Your own VPS, a cloud account or our managed setup.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>VPS and dedicated server setup, hardened</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Docker and Kubernetes deployments</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>CI/CD pipelines for every release</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Monitoring, backups and managed hosting</li>
            
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag">Linux</span><span className="tag">Docker</span><span className="tag">Nginx</span><span className="tag">GitHub Actions</span><span className="tag">Kubernetes</span>
          </div>
        </div>

        <div className="panel" style={{ order: '1', borderRadius: '36px', backgroundColor: '#E4E1F2', backgroundImage: 'radial-gradient(rgba(12,20,16,.16) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', padding: '18px', border: '1px solid rgba(12,20,16,.1)' }}>

          

          

          

          

          

          
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="Illustration of a deployment pipeline and a server rack">
              <path d="M70 90 H490" stroke="#0C1410" strokeWidth="3" stroke-dasharray="2 8" strokeLinecap="round"></path>
              <g fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="600" fill="#0C1410" textAnchor="middle">
                <circle cx="70" cy="90" r="26" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle><text x="70" y="138">Code</text>
                <circle cx="190" cy="90" r="26" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle><text x="190" y="138">Build</text>
                <circle cx="310" cy="90" r="26" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle><text x="310" y="138">Test</text>
                <circle cx="430" cy="90" r="26" fill="#C8F53C" stroke="#0C1410" strokeWidth="3"></circle><text x="430" y="138">Deploy</text>
                <circle cx="520" cy="90" r="14" fill="#0C1410"></circle>
              </g>
              <path d="M58 90l9 9 15-18M178 90l9 9 15-18M298 90l9 9 15-18M418 90l9 9 15-18" fill="none" stroke="#0C1410" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"></path>
              <rect x="60" y="176" width="250" height="190" rx="18" fill="#0C1410"></rect>
              <circle cx="82" cy="198" r="5" fill="#3A4A41"></circle><circle cx="100" cy="198" r="5" fill="#3A4A41"></circle><circle cx="118" cy="198" r="5" fill="#3A4A41"></circle>
              <g fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#DCE6D0"><text x="80" y="236"><tspan fill="#FFFFFF">$</tspan> docker compose up -d</text><text x="80" y="266"><tspan fill="#FFFFFF">✓</tspan> app running</text><text x="80" y="296"><tspan fill="#FFFFFF">✓</tspan> ssl active</text><text x="80" y="326"><tspan fill="#FFFFFF">✓</tspan> backup scheduled</text></g>
              <rect x="342" y="176" width="156" height="190" rx="18" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect>
              <rect x="358" y="194" width="124" height="38" rx="9" fill="#0C1410"></rect><circle className="led" cx="374" cy="213" r="5" fill="#C8F53C"></circle><circle className="led" style={{ animationDelay: '.8s' }} cx="392" cy="213" r="5" fill="#1FB36B"></circle><rect x="430" y="209" width="40" height="8" rx="4" fill="#3A4A41"></rect>
              <rect x="358" y="242" width="124" height="38" rx="9" fill="#0C1410"></rect><circle className="led" style={{ animationDelay: '.4s' }} cx="374" cy="261" r="5" fill="#C8F53C"></circle><circle className="led" style={{ animationDelay: '1.2s' }} cx="392" cy="261" r="5" fill="#1FB36B"></circle><rect x="430" y="257" width="40" height="8" rx="4" fill="#3A4A41"></rect>
              <rect x="358" y="290" width="124" height="38" rx="9" fill="#0C1410"></rect><circle className="led" style={{ animationDelay: '1.6s' }} cx="374" cy="309" r="5" fill="#C8F53C"></circle><circle className="led" style={{ animationDelay: '.2s' }} cx="392" cy="309" r="5" fill="#1FB36B"></circle><rect x="430" y="305" width="40" height="8" rx="4" fill="#3A4A41"></rect>
            </svg>
          

          

          

          

        </div>
      </article>
    
      <article id="svc-design" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '48px', alignItems: 'center', padding: '56px 0', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
        <div style={{ order: '1', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>07 / 09</span>
          <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,39px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>UI/UX & Product Design</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '540px', textWrap: 'pretty' }}>Design that is built to be built: clear flows, real interfaces and a system your team can extend.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>User flows and wireframes</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>High-fidelity interface design</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Component design systems</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Handoff-ready specs for engineering</li>
            
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag">Prototyping</span><span className="tag">Design systems</span><span className="tag">Accessibility</span>
          </div>
        </div>

        <div className="panel" style={{ order: '2', borderRadius: '36px', backgroundColor: '#F3E3D3', backgroundImage: 'radial-gradient(rgba(12,20,16,.16) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', padding: '18px', border: '1px solid rgba(12,20,16,.1)' }}>

          

          

          

          

          

          

          
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="Illustration of a wireframe, color palette and type sample">
              <rect x="50" y="46" width="300" height="308" rx="18" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect>
              <rect x="72" y="70" width="256" height="20" rx="6" fill="#E4E8DD"></rect>
              <rect x="72" y="106" width="256" height="104" rx="12" fill="none" stroke="#0C1410" strokeWidth="2.5" stroke-dasharray="6 6"></rect>
              <path d="M72 210 L170 120 M328 210 L230 120" stroke="#CBD2C3" strokeWidth="2"></path>
              <rect x="72" y="228" width="120" height="14" rx="7" fill="#0C1410"></rect><rect x="72" y="252" width="200" height="9" rx="4.5" fill="#CBD2C3"></rect>
              <rect x="72" y="296" width="96" height="30" rx="15" fill="#C8F53C" stroke="#0C1410" strokeWidth="2.5"></rect>
              <circle cx="410" cy="82" r="30" fill="#0C1410"></circle><circle cx="470" cy="82" r="30" fill="#C8F53C" stroke="#0C1410" strokeWidth="3"></circle><circle cx="440" cy="132" r="30" fill="#0A6B4A"></circle>
              <rect x="380" y="184" width="136" height="100" rx="18" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect>
              <text x="448" y="250" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="56" fontWeight="700" fill="#0C1410">Aa</text>
              <g className="floaty"><path d="M300 262 l0 62 l16 -14 l12 28 l14 -6 l-12 -28 l22 -2z" fill="#0C1410" stroke="#fff" strokeWidth="3" strokeLinejoin="round"></path></g>
              <path d="M380 322 q30 -40 60 0 t60 0" fill="none" stroke="#0C1410" strokeWidth="3.5" strokeLinecap="round"></path>
              <circle cx="380" cy="322" r="6" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle><circle cx="500" cy="322" r="6" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle>
            </svg>
          

          

          

        </div>
      </article>
    
      <article id="svc-qa" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '48px', alignItems: 'center', padding: '56px 0', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
        <div style={{ order: '2', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>08 / 09</span>
          <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,39px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>QA, Maintenance & Support</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '540px', textWrap: 'pretty' }}>Quality before launch, and a team that stays on call after it.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Test planning and automated testing</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>24/7 alerts and server issue resolution</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Database optimization</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Ongoing fixes and new features</li>
            
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag">Monitoring</span><span className="tag">Alerting</span><span className="tag">Maintenance</span>
          </div>
        </div>

        <div className="panel" style={{ order: '1', borderRadius: '36px', backgroundColor: '#CFE7E0', backgroundImage: 'radial-gradient(rgba(12,20,16,.16) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', padding: '18px', border: '1px solid rgba(12,20,16,.1)' }}>

          

          

          

          

          

          

          

          
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="Illustration of passing test results and a monitoring chart">
              <rect x="50" y="46" width="260" height="308" rx="18" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect>
              <g fill="none" stroke="#0C1410" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="74" y="76" width="26" height="26" rx="8" fill="#C8F53C" strokeWidth="3"></rect><path d="M80 89l5 5 9-10"></path>
                <rect x="74" y="128" width="26" height="26" rx="8" fill="#C8F53C" strokeWidth="3"></rect><path d="M80 141l5 5 9-10"></path>
                <rect x="74" y="180" width="26" height="26" rx="8" fill="#C8F53C" strokeWidth="3"></rect><path d="M80 193l5 5 9-10"></path>
                <rect x="74" y="232" width="26" height="26" rx="8" fill="#fff" strokeWidth="3"></rect>
                <rect x="74" y="284" width="26" height="26" rx="8" fill="#fff" strokeWidth="3"></rect>
              </g>
              <g fill="#CBD2C3"><rect x="118" y="84" width="150" height="10" rx="5"></rect><rect x="118" y="136" width="120" height="10" rx="5"></rect><rect x="118" y="188" width="160" height="10" rx="5"></rect><rect x="118" y="240" width="130" height="10" rx="5"></rect><rect x="118" y="292" width="100" height="10" rx="5"></rect></g>
              <rect x="338" y="46" width="172" height="150" rx="18" fill="#0C1410"></rect>
              <text x="358" y="78" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fill="#FFFFFF" letterSpacing="1.5">24/7 ALERTS</text>
              <path d="M356 150 L384 130 L410 140 L440 100 L470 114 L494 90" fill="none" stroke="#C8F53C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
              <rect x="338" y="214" width="172" height="140" rx="18" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect>
              <circle cx="372" cy="258" r="14" fill="#C8F53C" stroke="#0C1410" strokeWidth="3"></circle><rect x="398" y="248" width="90" height="9" rx="4.5" fill="#CBD2C3"></rect><rect x="398" y="264" width="60" height="9" rx="4.5" fill="#CBD2C3"></rect>
              <circle cx="372" cy="312" r="14" fill="#E3EAD9" stroke="#0C1410" strokeWidth="3"></circle><rect x="398" y="302" width="90" height="9" rx="4.5" fill="#CBD2C3"></rect><rect x="398" y="318" width="70" height="9" rx="4.5" fill="#CBD2C3"></rect>
              <g className="floaty"><path d="M470 20 l36 14 v26 c0 20 -14 34 -36 42 c-22 -8 -36 -22 -36 -42 v-26z" transform="translate(-14 -8) scale(.7)" fill="#C8F53C" stroke="#0C1410" strokeWidth="4.5"></path></g>
            </svg>
          

          

        </div>
      </article>
    
      <article id="svc-consult" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '48px', alignItems: 'center', padding: '56px 0', borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
        <div style={{ order: '1', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>09 / 09</span>
          <h2 className="disp" style={{ fontSize: 'clamp(26px,2.9vw,39px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>Business & Tech Consulting</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '540px', textWrap: 'pretty' }}>Before you spend on code, get clarity on what to build first, how, and what it should cost to run.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Requirements and scope workshops</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Architecture and stack review</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Build-versus-buy and cost advice</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '17px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>A product roadmap you can act on</li>
            
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag">Discovery</span><span className="tag">Roadmap</span><span className="tag">Architecture</span>
          </div>
        </div>

        <div className="panel" style={{ order: '2', borderRadius: '36px', backgroundColor: '#DCE6D0', backgroundImage: 'radial-gradient(rgba(12,20,16,.16) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', padding: '18px', border: '1px solid rgba(12,20,16,.1)' }}>

          

          

          

          

          

          

          

          

          
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="Illustration of a product roadmap with milestones and a compass">
              <rect x="50" y="52" width="230" height="296" rx="18" fill="#fff" stroke="#0C1410" strokeWidth="3"></rect>
              <rect x="76" y="80" width="120" height="14" rx="7" fill="#0C1410"></rect>
              <g fill="#CBD2C3"><rect x="76" y="116" width="170" height="9" rx="4.5"></rect><rect x="76" y="136" width="150" height="9" rx="4.5"></rect><rect x="76" y="156" width="170" height="9" rx="4.5"></rect></g>
              <rect x="76" y="190" width="170" height="64" rx="12" fill="#C8F53C" stroke="#0C1410" strokeWidth="2.5"></rect>
              <path d="M96 232 L120 212 L142 224 L170 200 L224 218" fill="none" stroke="#0C1410" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <g fill="#CBD2C3"><rect x="76" y="276" width="140" height="9" rx="4.5"></rect><rect x="76" y="296" width="110" height="9" rx="4.5"></rect></g>
              <path d="M330 330 V90" stroke="#0C1410" strokeWidth="3" stroke-dasharray="2 9" strokeLinecap="round"></path>
              <circle cx="330" cy="320" r="14" fill="#C8F53C" stroke="#0C1410" strokeWidth="3"></circle><circle cx="330" cy="236" r="14" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle><circle cx="330" cy="152" r="14" fill="#fff" stroke="#0C1410" strokeWidth="3"></circle>
              <rect x="360" y="306" width="140" height="28" rx="14" fill="#fff" stroke="#0C1410" strokeWidth="2.5"></rect><rect x="360" y="222" width="110" height="28" rx="14" fill="#fff" stroke="#0C1410" strokeWidth="2.5"></rect><rect x="360" y="138" width="130" height="28" rx="14" fill="#fff" stroke="#0C1410" strokeWidth="2.5"></rect>
              <g className="floaty"><circle cx="456" cy="74" r="44" fill="#0C1410"></circle><path d="M470 60l-9 24-24 9 9-24z" fill="#C8F53C"></path><circle cx="456" cy="74" r="4" fill="#0C1410"></circle></g>
            </svg>
          

        </div>
      </article>
    
  </div>
</section>

{/*  CTA  */}
<section style={{ padding: '56px 40px 112px' }}>
  <div className="wrap dark" style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '40px', padding: 'clamp(26px,4.3vw,52px)', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ maxWidth: '660px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <p className="eyebrow">Not sure where to start?</p>
      <h2 className="disp" style={{ fontSize: 'clamp(26px,3.3vw,46px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>Begin with a consultation. Leave with a plan.</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>Tell us what you are trying to build or fix. We will map the right services, stack and sequence for it.</p>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <a href="/" className="btn btn-lime">Start a Project
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </a>
      <a href="/technologies" className="btn" style={{ borderColor: 'var(--kpx-bg-page, #F4F6F1)', color: 'var(--kpx-bg-page, #F4F6F1)' }}>See our stack</a>
    </div>
  </div>
</section>

</div>
    </div>
  );
}
