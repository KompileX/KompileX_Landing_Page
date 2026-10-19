'use client';

import React from 'react';
import Link from 'next/link';

export default function ExactAboutUs() {
  return (
    <div className="exact-exactaboutus-container" style={{ background: 'var(--kpx-bg-page, #F4F6F1)', color: 'var(--kpx-text-main, #0C1410)' }}>
      <div>
{/*  NAV  */}
<div style={{ padding: '20px 40px 0' }}>
  <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', height: '68px', padding: '0 14px 0 22px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '999px' }}>
    <a href="/" aria-label="KompileX home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8F53C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"></path></svg>
      </span>
      <span className="disp" style={{ fontSize: '23px', fontWeight: '700' }}>Kompile<span style={{ color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>X</span></span>
    </a>
    <nav className="nav-links" aria-label="Primary">
      <a className="nav-a cur" href="/about-us" aria-current="page">About Us</a>
      <a className="nav-a" href="/services">Services</a>
      <a className="nav-a" href="/technologies">Technologies</a>
      <a className="nav-a" href="/#work">Work</a>
      <a className="nav-a" href="/#contact">Contact</a>
    </nav>
    <a href="/" className="btn btn-ink" style={{ height: '46px', padding: '0 22px', fontSize: '15px' }}>Contact Us</a>
  </div>
</div>

{/*  HERO  */}
<section className="sec" style={{ paddingTop: '88px', paddingBottom: '64px' }}>
  <div className="wrap">
    <p className="mono rise" style={{ fontSize: '13px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-emerald, #0A6B4A)', fontWeight: '500' }}>About us</p>
    <h1 className="disp rise" style={{ animationDelay: '.08s', marginTop: '20px', fontSize: 'clamp(44px,7vw,96px)', lineHeight: '.97', fontWeight: '700', maxWidth: '1060px', textWrap: 'balance' }}>A software company built around <span className="hl">specialists.</span></h1>
    <p className="rise" style={{ animationDelay: '.2s', marginTop: '36px', fontSize: '21px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '680px', textWrap: 'pretty' }}>KompileX designs, builds, ships and runs full products end to end across frontend and mobile, backend and systems, integrations, AI and infrastructure, with business guidance in the room from day one and no hand-offs.</p>
  </div>
</section>

{/*  STATS  */}
<section style={{ padding: '0 40px' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '32px', background: '#fff', overflow: 'hidden' }}>
    
      <div style={{ padding: '36px 32px 34px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span className="disp" style={{ fontSize: 'clamp(56px,6vw,84px)', lineHeight: '.95', fontWeight: '700' }}>10+</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Products shipped</span>
      </div>
    
      <div style={{ padding: '36px 32px 34px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span className="disp" style={{ fontSize: 'clamp(56px,6vw,84px)', lineHeight: '.95', fontWeight: '700' }}>3</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Years building together</span>
      </div>
    
      <div style={{ padding: '36px 32px 34px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span className="disp" style={{ fontSize: 'clamp(56px,6vw,84px)', lineHeight: '.95', fontWeight: '700' }}>100%</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Remote-first</span>
      </div>
    
      <div style={{ padding: '36px 32px 34px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span className="disp" style={{ fontSize: 'clamp(56px,6vw,84px)', lineHeight: '.95', fontWeight: '700' }}>24/7</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Monitoring after launch</span>
      </div>
    
  </div>
</section>

{/*  TEAM  */}
<section className="sec">
  <div className="wrap">
    <p className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-emerald, #0A6B4A)', fontWeight: '500' }}>01 / The team</p>
    <h2 className="disp" style={{ marginTop: '16px', fontSize: 'clamp(36px,4.6vw,62px)', lineHeight: '1', fontWeight: '700', maxWidth: '760px', textWrap: 'balance' }}>The people who answer your messages.</h2>
    <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap: '20px' }}>
      
        <article className="card" style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '290px', background: 'var(--kpx-text-main, #0C1410)', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 300 290" width="100%" height="100%" sc-camel-preserve-aspect-ratio="xMidYMax slice" role="img" aria-label="Illustrated portrait placeholder">
              <circle cx="236" cy="70" r="46" fill="#fff" opacity=".35"></circle>
              <path d="M24 290 C24 220 86 200 150 200 C214 200 276 220 276 290 Z" fill="#C8F53C"></path>
              <path d="M122 206 L150 236 L178 206" fill="none" stroke="#C8F53C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"></path>
              <rect x="130" y="170" width="40" height="46" rx="14" fill="#D9A57A"></rect>
              <ellipse cx="150" cy="122" rx="52" ry="60" fill="#D9A57A"></ellipse>
              <path d="M100 112 C98 66 128 52 152 52 C184 52 206 76 202 112 C190 90 172 82 150 84 C128 84 108 92 100 112 Z" fill="#1B1410"></path>
              <circle cx="132" cy="128" r="4" fill="#0C1410"></circle><circle cx="168" cy="128" r="4" fill="#0C1410"></circle>
              <path d="M136 152 Q150 164 164 152" fill="none" stroke="#0C1410" strokeWidth="3.5" strokeLinecap="round"></path>
            </svg>
            <span className="mono" style={{ position: 'absolute', left: '16px', bottom: '14px', fontSize: '10.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#FFFFFF', opacity: '.8' }}>Replace with team photo</span>
          </div>
          <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '12px', flex: '1' }}>
            <h3 className="disp" style={{ fontSize: '25px', lineHeight: '1.08', fontWeight: '700' }}>Md. Hridoy Mia</h3>
            <p style={{ fontSize: '15.5px', fontWeight: '600', color: 'var(--kpx-accent-emerald, #0A6B4A)', lineHeight: '1.35' }}>Lead Backend & Systems Architect</p>
            <ul style={{ marginTop: '6px', paddingTop: '16px', borderTop: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Core architecture (DDD/CQRS)</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Real-time streaming</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Background processing</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Scalable API design</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>High-performance database layer</li>
              
            </ul>
          </div>
        </article>
      
        <article className="card" style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '290px', background: '#DCE6D0', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 300 290" width="100%" height="100%" sc-camel-preserve-aspect-ratio="xMidYMax slice" role="img" aria-label="Illustrated portrait placeholder">
              <circle cx="236" cy="70" r="46" fill="#fff" opacity=".35"></circle>
              <path d="M24 290 C24 220 86 200 150 200 C214 200 276 220 276 290 Z" fill="#0C1410"></path>
              <path d="M122 206 L150 236 L178 206" fill="none" stroke="#C8F53C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"></path>
              <rect x="130" y="170" width="40" height="46" rx="14" fill="#C68B63"></rect>
              <ellipse cx="150" cy="122" rx="52" ry="60" fill="#C68B63"></ellipse>
              <path d="M100 108 C96 66 126 50 154 52 C186 54 206 78 200 108 C186 84 150 80 124 90 C112 94 104 100 100 108 Z" fill="#0C1410"></path>
              <circle cx="132" cy="128" r="4" fill="#0C1410"></circle><circle cx="168" cy="128" r="4" fill="#0C1410"></circle>
              <path d="M136 152 Q150 164 164 152" fill="none" stroke="#0C1410" strokeWidth="3.5" strokeLinecap="round"></path>
            </svg>
            <span className="mono" style={{ position: 'absolute', left: '16px', bottom: '14px', fontSize: '10.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-emerald, #0A6B4A)', opacity: '.8' }}>Replace with team photo</span>
          </div>
          <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '12px', flex: '1' }}>
            <h3 className="disp" style={{ fontSize: '25px', lineHeight: '1.08', fontWeight: '700' }}>Md Mostafizur Rahman</h3>
            <p style={{ fontSize: '15.5px', fontWeight: '600', color: 'var(--kpx-accent-emerald, #0A6B4A)', lineHeight: '1.35' }}>Integrations & Workflow Automation Lead</p>
            <ul style={{ marginTop: '6px', paddingTop: '16px', borderTop: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Third-party API ecosystems</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>SaaS/CRM integrations</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Multi-tenant workflows</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Messaging automation</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>MCP tool execution</li>
              
            </ul>
          </div>
        </article>
      
        <article className="card" style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '290px', background: '#E4E1F2', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 300 290" width="100%" height="100%" sc-camel-preserve-aspect-ratio="xMidYMax slice" role="img" aria-label="Illustrated portrait placeholder">
              <circle cx="236" cy="70" r="46" fill="#fff" opacity=".35"></circle>
              <path d="M24 290 C24 220 86 200 150 200 C214 200 276 220 276 290 Z" fill="#0A6B4A"></path>
              <path d="M122 206 L150 236 L178 206" fill="none" stroke="#C8F53C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"></path>
              <rect x="130" y="170" width="40" height="46" rx="14" fill="#E8B98F"></rect>
              <ellipse cx="150" cy="122" rx="52" ry="60" fill="#E8B98F"></ellipse>
              <path d="M96 118 C88 70 120 46 152 48 C186 48 214 72 204 118 C200 90 176 76 150 76 C124 76 102 92 96 118 Z" fill="#2B1D14"></path>
              <circle cx="132" cy="128" r="4" fill="#0C1410"></circle><circle cx="168" cy="128" r="4" fill="#0C1410"></circle>
              <path d="M136 152 Q150 164 164 152" fill="none" stroke="#0C1410" strokeWidth="3.5" strokeLinecap="round"></path>
            </svg>
            <span className="mono" style={{ position: 'absolute', left: '16px', bottom: '14px', fontSize: '10.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-main, #0C1410)', opacity: '.8' }}>Replace with team photo</span>
          </div>
          <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '12px', flex: '1' }}>
            <h3 className="disp" style={{ fontSize: '25px', lineHeight: '1.08', fontWeight: '700' }}>Md. Mostofa Hasib</h3>
            <p style={{ fontSize: '15.5px', fontWeight: '600', color: 'var(--kpx-accent-emerald, #0A6B4A)', lineHeight: '1.35' }}>AI & Full-Stack Innovations Lead</p>
            <ul style={{ marginTop: '6px', paddingTop: '16px', borderTop: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>AI/ML application engineering</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Cross-platform delivery (Web, Mobile, Desktop)</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Published R&D solutions</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>End-to-end full-stack feature delivery</li>
              
            </ul>
          </div>
        </article>
      
        <article className="card" style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '290px', background: 'var(--kpx-accent-lime, #C8F53C)', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 300 290" width="100%" height="100%" sc-camel-preserve-aspect-ratio="xMidYMax slice" role="img" aria-label="Illustrated portrait placeholder">
              <circle cx="236" cy="70" r="46" fill="#fff" opacity=".35"></circle>
              <path d="M24 290 C24 220 86 200 150 200 C214 200 276 220 276 290 Z" fill="#0C1410"></path>
              <path d="M122 206 L150 236 L178 206" fill="none" stroke="#C8F53C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"></path>
              <rect x="130" y="170" width="40" height="46" rx="14" fill="#B5764F"></rect>
              <ellipse cx="150" cy="122" rx="52" ry="60" fill="#B5764F"></ellipse>
              <path d="M100 112 C98 66 128 52 152 52 C184 52 206 76 202 112 C190 90 172 82 150 84 C128 84 108 92 100 112 Z" fill="#0C1410"></path>
              <circle cx="132" cy="128" r="4" fill="#0C1410"></circle><circle cx="168" cy="128" r="4" fill="#0C1410"></circle>
              <path d="M136 152 Q150 164 164 152" fill="none" stroke="#0C1410" strokeWidth="3.5" strokeLinecap="round"></path>
            </svg>
            <span className="mono" style={{ position: 'absolute', left: '16px', bottom: '14px', fontSize: '10.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-main, #0C1410)', opacity: '.8' }}>Replace with team photo</span>
          </div>
          <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '12px', flex: '1' }}>
            <h3 className="disp" style={{ fontSize: '25px', lineHeight: '1.08', fontWeight: '700' }}>Tareq Bin Bashar</h3>
            <p style={{ fontSize: '15.5px', fontWeight: '600', color: 'var(--kpx-accent-emerald, #0A6B4A)', lineHeight: '1.35' }}>Business Consultant</p>
            <ul style={{ marginTop: '6px', paddingTop: '16px', borderTop: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Business analysis and requirements</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Project scoping and planning</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Client success and delivery coordination</li>
              
                <li style={{ fontSize: '15px', lineHeight: '1.35', color: 'var(--kpx-text-muted, #4A5650)', display: 'flex', gap: '10px' }}><span style={{ flex: 'none', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)', marginTop: '7px' }}></span>Partnership and growth strategy</li>
              
            </ul>
          </div>
        </article>
      
    </div>
  </div>
</section>

{/*  PRINCIPLES  */}
<section style={{ padding: '0 40px 112px' }}>
  <div className="wrap">
    <p className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-emerald, #0A6B4A)', fontWeight: '500' }}>02 / How we operate</p>
    <h2 className="disp" style={{ marginTop: '16px', fontSize: 'clamp(36px,4.6vw,62px)', lineHeight: '1', fontWeight: '700', maxWidth: '820px', textWrap: 'balance' }}>Four habits behind every project.</h2>
    <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap: '16px' }}>
      
        <div className="card" style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '290px' }}>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>01</span>
          <h3 className="disp" style={{ fontSize: '28px', lineHeight: '1.05', fontWeight: '700', marginTop: 'auto' }}>Senior-only delivery</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>You talk to the engineers building your product. No junior hand-offs.</p>
        </div>
      
        <div className="card" style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '290px' }}>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>02</span>
          <h3 className="disp" style={{ fontSize: '28px', lineHeight: '1.05', fontWeight: '700', marginTop: 'auto' }}>Own it end to end</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Design, code, servers and support sit under one roof, so nothing falls between teams.</p>
        </div>
      
        <div className="card" style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '290px' }}>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>03</span>
          <h3 className="disp" style={{ fontSize: '28px', lineHeight: '1.05', fontWeight: '700', marginTop: 'auto' }}>Show progress early</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Working demos at every step, so direction changes cost hours, not months.</p>
        </div>
      
        <div className="card" style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '290px' }}>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>04</span>
          <h3 className="disp" style={{ fontSize: '28px', lineHeight: '1.05', fontWeight: '700', marginTop: 'auto' }}>Stay after launch</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Monitoring, fixes and new features once real users arrive.</p>
        </div>
      
    </div>
  </div>
</section>

{/*  CLOSING  */}
<section style={{ padding: '0 40px 112px' }}>
  <div className="wrap dark" style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '40px', padding: 'clamp(32px,6vw,72px)', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '12px', padding: '9px 18px 9px 14px', border: '1px solid #3A4A41', borderRadius: '999px' }}>
        <span className="dot"></span><span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Available for work · Dhaka</span>
      </div>
      <h2 className="disp" style={{ fontSize: 'clamp(34px,4.4vw,60px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>A software company that ships full-stack products, then keeps them running.</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>Designing, building, hosting and supporting, with the same people from the first call to production and beyond.</p>
    </div>
    <a href="/" className="btn btn-lime">Start a Project
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
    </a>
  </div>
</section>

{/*  FOOTER  */}
<footer className="dark" style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '48px 48px 0 0', overflow: 'hidden' }}>
  <div className="mq" aria-hidden="true" style={{ borderBottom: '1px solid #24332B', padding: '26px 0' }}>
    <div className="mq-track">
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
    </div>
  </div>
  <div className="sec" style={{ paddingTop: '72px', paddingBottom: '40px' }}>
    <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '320px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"></path></svg></span>
          <span className="disp" style={{ fontSize: '23px', fontWeight: '700' }}>Kompile<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)' }}>X</span></span>
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>A software company designing, building, shipping and running full-stack products end to end.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Studio</span><a className="flink" href="/services">Services</a><a className="flink" href="/technologies">Technologies</a><a className="flink" href="/#work">Our Work</a></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Company</span><a className="flink" href="/about-us">About Us</a><a className="flink" href="/#contact">Contact</a><a className="flink" href="/#why">Why Us</a></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Connect</span><a className="flink" href="#">LinkedIn</a><a className="flink" href="#">Facebook</a><a className="flink" href="mailto:contact@kompilex.com">Email us</a></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Legal</span><a className="flink" href="#">Privacy Policy</a><a className="flink" href="#">Terms of Service</a></div>
    </div>
    <div className="wrap" style={{ marginTop: '56px', paddingTop: '24px', borderTop: '1px solid #24332B', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px', fontSize: '14px', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>
      <a className="flink" href="#top" style={{ fontSize: '14px' }}>Back to top ↑</a>
      <span>Built in Dhaka, shipped worldwide · ©2026 KompileX. All rights reserved.</span>
    </div>
  </div>
</footer>
</div>
    </div>
  );
}
