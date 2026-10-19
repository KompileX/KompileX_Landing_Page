'use client';

import React from 'react';
import Link from 'next/link';

export default function CommerceOSCaseStudy() {
  return (
    <div className="exact-exactcasestudy-container" style={{ background: 'var(--kpx-bg-page, #F4F6F1)', color: 'var(--kpx-text-main, #0C1410)' }}>
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
      <a className="nav-a" href="/#why">About Us</a>
      <a className="nav-a" href="/#services">Services</a>
      <a className="nav-a" href="/#technologies">Technologies</a>
      <a className="nav-a" href="/#work">Work</a>
      <a className="nav-a" href="/#contact">Contact</a>
    </nav>
    <a href="/" className="btn btn-ink" style={{ height: '46px', padding: '0 22px', fontSize: '15px' }}>Contact Us</a>
  </div>
</div>

{/*  HEADER  */}
<section className="sec" style={{ paddingTop: '48px', paddingBottom: '56px' }}>
  <div className="wrap">
    <a href="/" className="back">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
      Back to case studies
    </a>
    <div className="rise" style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
      <span className="mono" style={{ height: '32px', padding: '0 14px', borderRadius: '999px', background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-dark-muted, #A9B6AE)', fontSize: '12px', letterSpacing: '.1em', display: 'inline-flex', alignItems: 'center' }}>WEB APP</span>
      <span className="mono" style={{ fontSize: '13px', letterSpacing: '.08em', color: 'var(--kpx-text-muted, #4A5650)' }}>2026–Present</span>
    </div>
    <h1 className="disp rise" style={{ animationDelay: '.08s', marginTop: '22px', fontSize: 'clamp(52px,9vw,136px)', lineHeight: '.92', fontWeight: '700' }}>Commerce<span className="hl">OS</span></h1>
    <p className="rise" style={{ animationDelay: '.18s', marginTop: '28px', fontSize: 'clamp(20px,2.2vw,28px)', lineHeight: '1.4', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '760px', textWrap: 'pretty' }}>A multi-tenant e-commerce CMS for agencies and solution providers.</p>
  </div>
</section>

{/*  HERO VISUAL  */}
<section style={{ padding: '0 40px' }}>
  <div className="wrap">
    <div className="stage rise" style={{ animationDelay: '.28s', position: 'relative', height: '600px', borderRadius: '40px', backgroundColor: 'var(--kpx-stage-bg, #E3EAD9)', backgroundImage: 'radial-gradient(var(--kpx-hero-dots, #B9C6AB) 1.2px,transparent 1.2px)', backgroundSize: '22px 22px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '56px', width: 'min(86%,1000px)', height: '620px', background: '#fff', border: '1px solid var(--kpx-border-strong, #CBD2C3)', borderRadius: '22px', boxShadow: '0 40px 80px -40px var(--kpx-hero-shadow, rgba(12,20,16,.45))', overflow: 'hidden' }}>
        <div style={{ height: '48px', borderBottom: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 18px' }}>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }}></span><span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }}></span><span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }}></span>
          <span className="mono" style={{ marginLeft: '14px', height: '26px', padding: '0 14px', borderRadius: '999px', background: '#F1F4EC', fontSize: '12px', color: 'var(--kpx-text-muted, #4A5650)', display: 'inline-flex', alignItems: 'center' }}>partner-admin / stores</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '200px minmax(0,1fr)', height: '572px' }}>
          <div className="side-nav" style={{ background: 'var(--kpx-bg-page, #F4F6F1)', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', padding: '22px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ height: '38px', borderRadius: '10px', background: 'var(--kpx-accent-lime, #C8F53C)' }}></div>
            <div style={{ height: '38px', borderRadius: '10px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
            <div style={{ height: '38px', borderRadius: '10px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
            <div style={{ height: '38px', borderRadius: '10px', background: 'var(--kpx-border-subtle, #E4E8DD)' }}></div>
          </div>
          <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '170px', height: '20px', borderRadius: '6px', background: 'var(--kpx-text-main, #0C1410)' }}></div>
              <div style={{ width: '120px', height: '34px', borderRadius: '999px', background: 'var(--kpx-text-main, #0C1410)' }}></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '14px' }}>
              
                <div className="pop" style={{ animationDelay: '0.5s', border: '1px solid var(--kpx-border-subtle, #E4E8DD)', borderRadius: '16px', overflow: 'hidden' }}>
                  <div style={{ height: '78px', background: '#DCE6D0', position: 'relative' }}><div style={{ position: 'absolute', left: '12px', bottom: '12px', width: '44%', height: '10px', borderRadius: '5px', background: 'var(--kpx-text-main, #0C1410)' }}></div></div>
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '7px' }}><div style={{ width: '70%', height: '9px', borderRadius: '4px', background: 'var(--kpx-text-main, #0C1410)' }}></div><div style={{ width: '45%', height: '8px', borderRadius: '4px', background: 'var(--kpx-border, #D8DDD2)' }}></div></div>
                </div>
              
                <div className="pop" style={{ animationDelay: '0.6s', border: '1px solid var(--kpx-border-subtle, #E4E8DD)', borderRadius: '16px', overflow: 'hidden' }}>
                  <div style={{ height: '78px', background: 'var(--kpx-text-main, #0C1410)', position: 'relative' }}><div style={{ position: 'absolute', left: '12px', bottom: '12px', width: '44%', height: '10px', borderRadius: '5px', background: 'var(--kpx-stage-bg, #E3EAD9)' }}></div></div>
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '7px' }}><div style={{ width: '70%', height: '9px', borderRadius: '4px', background: 'var(--kpx-text-main, #0C1410)' }}></div><div style={{ width: '45%', height: '8px', borderRadius: '4px', background: 'var(--kpx-border, #D8DDD2)' }}></div></div>
                </div>
              
                <div className="pop" style={{ animationDelay: '0.7s', border: '1px solid var(--kpx-border-subtle, #E4E8DD)', borderRadius: '16px', overflow: 'hidden' }}>
                  <div style={{ height: '78px', background: '#E4E1F2', position: 'relative' }}><div style={{ position: 'absolute', left: '12px', bottom: '12px', width: '44%', height: '10px', borderRadius: '5px', background: 'var(--kpx-text-main, #0C1410)' }}></div></div>
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '7px' }}><div style={{ width: '70%', height: '9px', borderRadius: '4px', background: 'var(--kpx-text-main, #0C1410)' }}></div><div style={{ width: '45%', height: '8px', borderRadius: '4px', background: 'var(--kpx-border, #D8DDD2)' }}></div></div>
                </div>
              
                <div className="pop" style={{ animationDelay: '0.8s', border: '1px solid var(--kpx-border-subtle, #E4E8DD)', borderRadius: '16px', overflow: 'hidden' }}>
                  <div style={{ height: '78px', background: '#F3E3D3', position: 'relative' }}><div style={{ position: 'absolute', left: '12px', bottom: '12px', width: '44%', height: '10px', borderRadius: '5px', background: 'var(--kpx-text-main, #0C1410)' }}></div></div>
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '7px' }}><div style={{ width: '70%', height: '9px', borderRadius: '4px', background: 'var(--kpx-text-main, #0C1410)' }}></div><div style={{ width: '45%', height: '8px', borderRadius: '4px', background: 'var(--kpx-border, #D8DDD2)' }}></div></div>
                </div>
              
                <div className="pop" style={{ animationDelay: '0.9s', border: '1px solid var(--kpx-border-subtle, #E4E8DD)', borderRadius: '16px', overflow: 'hidden' }}>
                  <div style={{ height: '78px', background: 'var(--kpx-accent-lime, #C8F53C)', position: 'relative' }}><div style={{ position: 'absolute', left: '12px', bottom: '12px', width: '44%', height: '10px', borderRadius: '5px', background: 'var(--kpx-text-main, #0C1410)' }}></div></div>
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '7px' }}><div style={{ width: '70%', height: '9px', borderRadius: '4px', background: 'var(--kpx-text-main, #0C1410)' }}></div><div style={{ width: '45%', height: '8px', borderRadius: '4px', background: 'var(--kpx-border, #D8DDD2)' }}></div></div>
                </div>
              
                <div className="pop" style={{ animationDelay: '1.0s', border: '1px solid var(--kpx-border-subtle, #E4E8DD)', borderRadius: '16px', overflow: 'hidden' }}>
                  <div style={{ height: '78px', background: '#CFE7E0', position: 'relative' }}><div style={{ position: 'absolute', left: '12px', bottom: '12px', width: '44%', height: '10px', borderRadius: '5px', background: 'var(--kpx-accent-emerald, #0A6B4A)' }}></div></div>
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '7px' }}><div style={{ width: '70%', height: '9px', borderRadius: '4px', background: 'var(--kpx-text-main, #0C1410)' }}></div><div style={{ width: '45%', height: '8px', borderRadius: '4px', background: 'var(--kpx-border, #D8DDD2)' }}></div></div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="mono" style={{ position: 'absolute', right: '24px', top: '24px', height: '34px', padding: '0 14px', borderRadius: '999px', background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', fontSize: '12px', letterSpacing: '.08em', display: 'inline-flex', alignItems: 'center' }}>1 / 1</div>
      <div className="mono" style={{ position: 'absolute', left: '24px', top: '24px', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Illustrative UI · replace with product screenshots</div>
    </div>
  </div>
</section>

{/*  BODY  */}
<section className="sec" style={{ paddingTop: '88px' }}>
  <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'flex-start' }}>
    <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '64px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        <p className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-emerald, #0A6B4A)', fontWeight: '500' }}>01 / Project overview</p>
        <p className="disp" style={{ fontSize: 'clamp(26px,2.8vw,38px)', lineHeight: '1.18', fontWeight: '600', letterSpacing: '-0.025em', textWrap: 'pretty' }}>CommerceOS is a multi-tenant e-commerce CMS for agencies, software companies and digital solution providers, an alternative to WordPress and Shopify.</p>
        <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Partners no longer need to build a full commerce platform. They can launch and manage customer stores on top of CommerceOS, cutting development time, infrastructure costs and maintenance. Its modular design also lets KompileX extend the platform or build fully custom solutions.</p>
      </div>
      <div>
        <p className="mono" style={{ fontSize: '13px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-emerald, #0A6B4A)', fontWeight: '500' }}>02 / Key features</p>
        <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '12px' }}>
          
            <div className="feat" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 20px 22px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '20px' }}>
              <span className="mono" style={{ flex: 'none', fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)', paddingTop: '3px' }}>01</span>
              <span style={{ fontSize: '17px', lineHeight: '1.45' }}>Central management of multiple customer stores (multi-tenant)</span>
            </div>
          
            <div className="feat" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 20px 22px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '20px' }}>
              <span className="mono" style={{ flex: 'none', fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)', paddingTop: '3px' }}>02</span>
              <span style={{ fontSize: '17px', lineHeight: '1.45' }}>Self-service store creation with customizable storefronts and business settings</span>
            </div>
          
            <div className="feat" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 20px 22px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '20px' }}>
              <span className="mono" style={{ flex: 'none', fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)', paddingTop: '3px' }}>03</span>
              <span style={{ fontSize: '17px', lineHeight: '1.45' }}>Products, categories, inventory, orders, customers and content management</span>
            </div>
          
            <div className="feat" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 20px 22px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '20px' }}>
              <span className="mono" style={{ flex: 'none', fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)', paddingTop: '3px' }}>04</span>
              <span style={{ fontSize: '17px', lineHeight: '1.45' }}>Built-in cart, checkout, payments, shipping and fulfillment workflows</span>
            </div>
          
            <div className="feat" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 20px 22px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '20px' }}>
              <span className="mono" style={{ flex: 'none', fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)', paddingTop: '3px' }}>05</span>
              <span style={{ fontSize: '17px', lineHeight: '1.45' }}>Scalability for agencies managing many merchants</span>
            </div>
          
            <div className="feat" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 20px 22px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '20px' }}>
              <span className="mono" style={{ flex: 'none', fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)', paddingTop: '3px' }}>06</span>
              <span style={{ fontSize: '17px', lineHeight: '1.45' }}>Flexible APIs and modular services for third-party and custom integrations</span>
            </div>
          
            <div className="feat" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 20px 22px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '20px' }}>
              <span className="mono" style={{ flex: 'none', fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)', paddingTop: '3px' }}>07</span>
              <span style={{ fontSize: '17px', lineHeight: '1.45' }}>Customizable, responsive, performance-focused storefronts</span>
            </div>
          
            <div className="feat" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 20px 22px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '20px' }}>
              <span className="mono" style={{ flex: 'none', fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)', paddingTop: '3px' }}>08</span>
              <span style={{ fontSize: '17px', lineHeight: '1.45' }}>An agency-ready base that lowers launch cost and effort</span>
            </div>
          
            <div className="feat" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 20px 22px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '20px' }}>
              <span className="mono" style={{ flex: 'none', fontSize: '13px', color: 'var(--kpx-accent-emerald, #0A6B4A)', paddingTop: '3px' }}>09</span>
              <span style={{ fontSize: '17px', lineHeight: '1.45' }}>Extensibility for custom web and commerce work beyond standard CMS features</span>
            </div>
          
        </div>
      </div>
    </div>

    <aside style={{ flex: '1 1 340px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
        <p className="mono" style={{ fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Project info</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingBottom: '18px', borderBottom: '1px solid var(--kpx-border-subtle, #E4E8DD)' }}><span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Client</span><span style={{ fontSize: '17px', fontWeight: '600' }}>Internal product / SaaS platform</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingBottom: '18px', borderBottom: '1px solid var(--kpx-border-subtle, #E4E8DD)' }}><span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Category</span><span style={{ fontSize: '17px', fontWeight: '600' }}>Multi-tenant SaaS e-commerce platform</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}><span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Timeline</span><span style={{ fontSize: '17px', fontWeight: '600' }}>2026–Present</span></div>
      </div>
      <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <p className="mono" style={{ fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Technologies used</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <span className="tag">Next.js</span><span className="tag">.NET</span><span className="tag">TypeScript</span><span className="tag">PostgreSQL</span><span className="tag">REST APIs</span><span className="tag">Multi-tenant architecture</span>
        </div>
      </div>
      <div style={{ border: '1.5px dashed #9AA593', borderRadius: '28px', padding: '26px 30px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <p className="mono" style={{ fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Project links</p>
        <p style={{ fontSize: '16px', lineHeight: '1.45', color: 'var(--kpx-text-muted, #4A5650)' }}>[ADD LIVE DEMO OR SOURCE LINK]</p>
      </div>
    </aside>
  </div>
</section>

{/*  NEXT  */}
<section style={{ padding: '0 40px 112px' }}>
  <div className="wrap">
    <a href="/" className="next dark" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'center', background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '36px', padding: 'clamp(28px,5vw,56px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Next project</span>
        <span className="disp" style={{ fontSize: 'clamp(34px,4.4vw,60px)', lineHeight: '1', fontWeight: '700' }}>Social Engagement Platform</span>
      </div>
      <span style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </span>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Studio</span><a className="flink" href="/#services">Services</a><a className="flink" href="/#technologies">Technologies</a><a className="flink" href="/#work">Our Work</a></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Company</span><a className="flink" href="/#why">About Us</a><a className="flink" href="/#contact">Contact</a><a className="flink" href="/#why">Why Us</a></div>
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
