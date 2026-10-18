'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function ExactHome() {
  const [workFilter, setWorkFilter] = useState<'all' | 'web' | 'mobile'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const allWorks = [
    { id: 'commerceos', title: 'CommerceOS', isWeb: true, isMobile: false, kind: 'web', meta: 'Web app · Internal product', desc: 'A multi-tenant e-commerce CMS for agencies and solution providers, built as an alternative to WordPress and Shopify.', stack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL'], bg: '#DCE6D0', ac: '#C8F53C', href: '/case-studies/commerceos' },
    { id: 'social-engagement', title: 'Social Engagement Platform', isWeb: true, isMobile: false, kind: 'web', meta: 'Web app · Internal product', desc: 'A multi-tenant platform for agencies to offer social media management, messaging, automation and analytics.', stack: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL'], bg: '#0C1410', ac: '#C8F53C', href: '#work' },
    { id: 'vaultx', title: 'VaultX Enterprise', isWeb: true, isMobile: false, kind: 'web', meta: 'Web app · CipherLock Systems', desc: 'A security-first app for managing, auditing and injecting secrets into CI/CD pipelines.', stack: ['React', 'TypeScript', 'Tailwind CSS', 'Go'], bg: '#E4E1F2', ac: '#0C1410', href: '#work' },
    { id: 'carepulse', title: 'CarePulse Health', isWeb: false, isMobile: true, kind: 'mobile', meta: 'Mobile app · VitalMed Group', desc: 'Patients schedule visits, join HD video consultations and manage digital prescriptions.', stack: ['React Native', 'TypeScript', 'WebRTC', 'Node.js'], bg: '#CFE7E0', ac: '#1FB36B', href: '#work' },
    { id: 'flowline', title: 'Flowline CRM', isWeb: true, isMobile: false, kind: 'web', meta: 'Web app · Apex Commerce', desc: 'A CRM for growing sales teams, with real-time deal sync and automated email sequences.', stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], bg: '#F3E3D3', ac: '#0C1410', href: '#work' },
    { id: 'zenith', title: 'Zenith Pay', isWeb: false, isMobile: true, kind: 'mobile', meta: 'Mobile app · FinTech Labs', desc: 'A mobile wallet with sub-second transfers, bill payments and merchant QR pay.', stack: ['React Native', 'TypeScript', 'Node.js', 'Redis'], bg: '#C8F53C', ac: '#0C1410', href: '#work' }
  ];

  const filteredWorks = allWorks.filter(w => workFilter === 'all' || w.kind === workFilter);

  const faqs = [
    { q: 'How does a project start?', a: 'Tell us what you want to build. We review it, ask the right questions, then come back with a scope and an approach. A conversation always comes before any commitment.' },
    { q: 'Who will work on my project?', a: 'Senior engineers and architects work with you directly. We do not staff projects with junior developers.' },
    { q: 'Can you host and manage our servers?', a: 'Yes. We set up and secure VPS and cloud servers, containerize applications, build CI/CD pipelines, and watch production with 24/7 alerts and database optimization.' },
    { q: 'Do you work with international clients?', a: 'Yes. We are remote-first, based in Dhaka, and ship worldwide.' },
    { q: 'What happens after launch?', a: 'We stay on: monitoring, server issue resolution, database optimization and ongoing improvements as your product grows.' },
    { q: 'How much does it cost?', a: 'It depends on scope and the engagement model you choose. Share your idea and we reply with a proposal.' }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been received. A senior engineer will reply within 24 hours.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="exact-home-container" style={{ background: 'var(--kpx-bg-page, #F4F6F1)', color: 'var(--kpx-text-main, #0C1410)' }}>
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
      <a className="nav-a" href="/about-us">About Us</a>
      <a className="nav-a" href="/services">Services</a>
      <a className="nav-a" href="/technologies">Technologies</a>
      <a className="nav-a" href="#work">Work</a>
      <a className="nav-a" href="#contact">Contact</a>
    </nav>
    <a href="#contact" className="btn btn-ink" style={{ height: '46px', padding: '0 22px', fontSize: '15px' }}>Contact Us</a>
  </div>
</div>

{/*  HERO  */}
<section className="sec" style={{ paddingTop: '64px', paddingBottom: '72px' }}>
  <div className="wrap">
    <div className="rise" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '9px 18px 9px 14px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '999px', background: '#fff' }}>
      <span className="dot"></span>
      <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Available for work · Dhaka</span>
    </div>
    <h1 className="disp rise" style={{ animationDelay: '.1s', marginTop: '28px', fontSize: 'clamp(46px,7.6vw,108px)', lineHeight: '.96', fontWeight: '700', maxWidth: '1120px', textWrap: 'balance' }}>Scale your software <span className="hl">without expanding</span> your team.</h1>
    <div className="rise" style={{ animationDelay: '.22s', marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <p className="mono" style={{ fontSize: '14px', letterSpacing: '.04em', color: 'var(--kpx-accent-emerald, #0A6B4A)', fontWeight: '500' }}>Design. Build. Ship. Run.</p>
        <p style={{ fontSize: '20px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>KompileX is a Dhaka-based software company. We build intelligent applications that automate daily operations, then host, monitor and support them long after launch.</p>
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


      {/*  TECH MARQUEE  */}
<section aria-label="Technologies we work with" style={{ borderTop: '1px solid var(--kpx-border, #D8DDD2)', borderBottom: '1px solid var(--kpx-border, #D8DDD2)', background: '#fff', padding: '26px 0' }}>
  <div className="mq">
    <div className="mq-track">
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>JavaScript<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Python<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>TypeScript<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Java<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>C#<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Go<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Rust<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>C++<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Kotlin<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Dart<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>React<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Next.js<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Angular<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Vue.js<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Express.js<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>NestJS<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Flutter<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>React Native<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Django<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>FastAPI<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Spring Boot<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Laravel<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>ASP.NET Core<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Nuxt.js<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>SvelteKit<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Docker<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Kubernetes<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Linux<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Nginx<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>CI/CD<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>JavaScript<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Python<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>TypeScript<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Java<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>C#<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Go<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Rust<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>C++<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Kotlin<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Dart<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>React<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Next.js<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Angular<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Vue.js<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Express.js<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>NestJS<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Flutter<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>React Native<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Django<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>FastAPI<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Spring Boot<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Laravel<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>ASP.NET Core<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Nuxt.js<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>SvelteKit<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Docker<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Kubernetes<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Linux<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>Nginx<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '36px', paddingLeft: '36px', fontSize: '26px', fontWeight: '600', color: 'var(--kpx-tag-text, #2C3830)', whiteSpace: 'nowrap' }}>CI/CD<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', border: '1.5px solid var(--kpx-text-main, #0C1410)' }}></span></span>
      
    </div>
  </div>
</section>


      {/*  STATS  */}
<section style={{ padding: '72px 40px 0' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', gap: '0', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '32px', background: '#fff', overflow: 'hidden' }}>
    
      <div style={{ padding: '34px 32px 32px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span className="disp" style={{ fontSize: 'clamp(52px,5.4vw,76px)', lineHeight: '.95', fontWeight: '800', color: 'var(--kpx-text-main, #0C1410)' }}>10+</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>Products shipped</span>
      </div>
    
      <div style={{ padding: '34px 32px 32px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span className="disp" style={{ fontSize: 'clamp(52px,5.4vw,76px)', lineHeight: '.95', fontWeight: '800', color: 'var(--kpx-text-main, #0C1410)' }}>3</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>Years building together</span>
      </div>
    
      <div style={{ padding: '34px 32px 32px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span className="disp" style={{ fontSize: 'clamp(52px,5.4vw,76px)', lineHeight: '.95', fontWeight: '800', color: 'var(--kpx-text-main, #0C1410)' }}>100%</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>Remote-first</span>
      </div>
    
      <div style={{ padding: '34px 32px 32px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span className="disp" style={{ fontSize: 'clamp(52px,5.4vw,76px)', lineHeight: '.95', fontWeight: '800', color: 'var(--kpx-text-main, #0C1410)' }}>24/7</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>Monitoring after launch</span>
      </div>
    
  </div>
</section>


      {/*  01 SERVICES  */}
<section id="services" className="sec">
  <div className="wrap">
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '28px' }}>
      <div>
        <p className="eyebrow">01 / Services</p>
        <h2 className="h2" style={{ marginTop: '16px', maxWidth: '820px' }}>Everything it takes to build, ship and run software.</h2>
      </div>
      <a href="/services" className="btn btn-line">All services
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </a>
    </div>
    <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: '20px' }}>
      
        <a href="/services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5h18v14H3zM3 9h18"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>01</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Web Application Development</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Marketing sites, SaaS platforms and internal tools on React and Next.js, built for speed and SEO.</p>
        </a>
      
        <a href="/services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>02</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Mobile App Development</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>iOS and Android from one React Native codebase, with store publishing and offline support.</p>
        </a>
      
        <a href="/services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16v5H4zM4 13h16v5H4zM7.5 8.5h.01M7.5 15.5h.01"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>03</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Backend & API Engineering</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Secure services in Go, Node.js and .NET with databases designed for high concurrency.</p>
        </a>
      
        <a href="/services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>04</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Automation & Integrations</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Social media workflows, unified inboxes, CRM and Stripe integrations that remove manual work.</p>
        </a>
      
        <a href="/services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>05</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>AI & LLM Solutions</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Conversational agents, retrieval over your own data and tool execution wired into your systems.</p>
        </a>
      
        <a href="/services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>06</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>DevOps, Cloud & VPS Hosting</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Server setup, containers, CI/CD pipelines and managed hosting on VPS or cloud.</p>
        </a>
      
        <a href="/services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16zM14 7l3 3"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>07</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>UI/UX & Product Design</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Flows, interfaces and component design systems that engineers can build without guessing.</p>
        </a>
      
        <a href="/services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5"></path></svg>
            </span>
            <span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>08</span>
          </div>
          <h3 className="disp" style={{ fontSize: '27px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>QA, Maintenance & Support</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Testing before launch, then 24/7 monitoring, fixes and continuous improvement after.</p>
        </a>
      
        <a href="/services" className="card svc" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '30px 30px 32px', minHeight: '268px' }}>
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


      {/*  02 ENGAGEMENT  */}
<section className="sec" style={{ background: '#fff', borderTop: '1px solid var(--kpx-border, #D8DDD2)', borderBottom: '1px solid var(--kpx-border, #D8DDD2)' }}>
  <div className="wrap">
    <p className="eyebrow">02 / How we work with you</p>
    <h2 className="h2" style={{ marginTop: '16px', maxWidth: '820px' }}>Pick the engagement that fits where you are.</h2>
    <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))', gap: '20px' }}>
      
        <div style={{ border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '32px', padding: '36px 32px 34px', display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--kpx-bg-page, #F4F6F1)' }}>
          <span className="disp" style={{ fontSize: '72px', lineHeight: '.9', fontWeight: '700', color: 'var(--kpx-text-main, #0C1410)' }}>01</span>
          <h3 className="disp" style={{ fontSize: '30px', lineHeight: '1.05', fontWeight: '700' }}>Project delivery</h3>
          <p style={{ fontSize: '17px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>A defined product with a clear scope. We take it from idea to production.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px', paddingTop: '20px', borderTop: '1px solid var(--kpx-border, #D8DDD2)' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Scoped milestones and demos</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>One accountable team</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Launch and handover included</li>
            
          </ul>
          <a href="#contact" className="go" style={{ marginTop: 'auto', paddingTop: '8px', fontWeight: '700', fontSize: '15px', color: 'var(--kpx-accent-emerald, #0A6B4A)', display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '44px' }}>Talk to us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </a>
        </div>
      
        <div style={{ border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '32px', padding: '36px 32px 34px', display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--kpx-bg-page, #F4F6F1)' }}>
          <span className="disp" style={{ fontSize: '72px', lineHeight: '.9', fontWeight: '700', color: 'var(--kpx-text-main, #0C1410)' }}>02</span>
          <h3 className="disp" style={{ fontSize: '30px', lineHeight: '1.05', fontWeight: '700' }}>Dedicated engineering</h3>
          <p style={{ fontSize: '17px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>Senior engineers who join your roadmap and ship alongside your team.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px', paddingTop: '20px', borderTop: '1px solid var(--kpx-border, #D8DDD2)' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Direct access to the engineers</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Scale up or down as needed</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>No junior hand-offs</li>
            
          </ul>
          <a href="#contact" className="go" style={{ marginTop: 'auto', paddingTop: '8px', fontWeight: '700', fontSize: '15px', color: 'var(--kpx-accent-emerald, #0A6B4A)', display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '44px' }}>Talk to us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </a>
        </div>
      
        <div style={{ border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '32px', padding: '36px 32px 34px', display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--kpx-bg-page, #F4F6F1)' }}>
          <span className="disp" style={{ fontSize: '72px', lineHeight: '.9', fontWeight: '700', color: 'var(--kpx-text-main, #0C1410)' }}>03</span>
          <h3 className="disp" style={{ fontSize: '30px', lineHeight: '1.05', fontWeight: '700' }}>Architecture consultation</h3>
          <p style={{ fontSize: '17px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>A focused review of your system, stack and plan before you commit budget.</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px', paddingTop: '20px', borderTop: '1px solid var(--kpx-border, #D8DDD2)' }}>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Architecture and stack review</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>Scaling and cost advice</li>
            
              <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.4' }}><span style={{ flex: 'none', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>A written roadmap</li>
            
          </ul>
          <a href="#contact" className="go" style={{ marginTop: 'auto', paddingTop: '8px', fontWeight: '700', fontSize: '15px', color: 'var(--kpx-accent-emerald, #0A6B4A)', display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '44px' }}>Talk to us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </a>
        </div>
      
    </div>
  </div>
</section>


      {/*  03 PROCESS  */}
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


      {/*  04 DEVOPS  */}
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
        <a href="/technologies" className="btn btn-lime">Explore our stack
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

      {/*  06 WHY US  */}
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


      {/*  07 TESTIMONIALS  */}
<section className="sec">
  <div className="wrap">
    <p className="eyebrow">07 / Client words</p>
    <h2 className="h2" style={{ marginTop: '16px', maxWidth: '820px' }}>What partners say after launch.</h2>
    <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))', gap: '20px' }}>
      
        <figure style={{ margin: '0', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '34px 32px', display: 'flex', flexDirection: 'column', gap: '24px', minHeight: '300px' }}>
          <span className="disp" style={{ fontSize: '80px', lineHeight: '.6', color: 'var(--kpx-dark-muted, #A9B6AE)', WebkitTextStroke: '2px var(--kpx-text-main, #0C1410)', fontWeight: '700' }} aria-hidden="true">“</span>
          <blockquote style={{ margin: '0', fontSize: '20px', lineHeight: '1.45', fontWeight: '500', textWrap: 'pretty' }}>[CLIENT QUOTE: one or two sentences about the result they got]</blockquote>
          <figcaption style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--kpx-stage-bg, #E3EAD9)', border: '1.5px dashed #9AA593' }}></span>
            <span style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: '700' }}>[CLIENT NAME]</span><span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>[ROLE · COMPANY]</span></span>
          </figcaption>
        </figure>
      
        <figure style={{ margin: '0', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '34px 32px', display: 'flex', flexDirection: 'column', gap: '24px', minHeight: '300px' }}>
          <span className="disp" style={{ fontSize: '80px', lineHeight: '.6', color: 'var(--kpx-dark-muted, #A9B6AE)', WebkitTextStroke: '2px var(--kpx-text-main, #0C1410)', fontWeight: '700' }} aria-hidden="true">“</span>
          <blockquote style={{ margin: '0', fontSize: '20px', lineHeight: '1.45', fontWeight: '500', textWrap: 'pretty' }}>[CLIENT QUOTE: one or two sentences about the result they got]</blockquote>
          <figcaption style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--kpx-stage-bg, #E3EAD9)', border: '1.5px dashed #9AA593' }}></span>
            <span style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: '700' }}>[CLIENT NAME]</span><span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>[ROLE · COMPANY]</span></span>
          </figcaption>
        </figure>
      
        <figure style={{ margin: '0', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '34px 32px', display: 'flex', flexDirection: 'column', gap: '24px', minHeight: '300px' }}>
          <span className="disp" style={{ fontSize: '80px', lineHeight: '.6', color: 'var(--kpx-dark-muted, #A9B6AE)', WebkitTextStroke: '2px var(--kpx-text-main, #0C1410)', fontWeight: '700' }} aria-hidden="true">“</span>
          <blockquote style={{ margin: '0', fontSize: '20px', lineHeight: '1.45', fontWeight: '500', textWrap: 'pretty' }}>[CLIENT QUOTE: one or two sentences about the result they got]</blockquote>
          <figcaption style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--kpx-stage-bg, #E3EAD9)', border: '1.5px dashed #9AA593' }}></span>
            <span style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: '700' }}>[CLIENT NAME]</span><span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>[ROLE · COMPANY]</span></span>
          </figcaption>
        </figure>
      
    </div>
  </div>
</section>


      {/*  08 INSIGHTS  */}
<section className="sec" style={{ paddingTop: '40px' }}>
  <div className="wrap">
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '28px' }}>
      <div>
        <p className="eyebrow">08 / Insights</p>
        <h2 className="h2" style={{ marginTop: '16px', maxWidth: '760px' }}>Notes from the engineering desk.</h2>
      </div>
      <a href="#" className="btn btn-line">All articles
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </a>
    </div>
    <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))', gap: '20px' }}>
      
        <a href="#" className="card" style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', overflow: 'hidden' }}>
          <div style={{ height: '190px', background: '#DCE6D0', display: 'grid', placeItems: 'center' }}>
            <span style={{ width: '84px', height: '84px', borderRadius: '26px', background: '#fff', border: '2px solid var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', boxShadow: '0 18px 30px -18px rgba(15,42,29,.5)' }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"></path></svg>
            </span>
          </div>
          <div style={{ padding: '26px 28px 30px', display: 'flex', flexDirection: 'column', gap: '12px', flex: '1' }}>
            <div className="mono" style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>Engineering · [DATE]</div>
            <h3 className="disp" style={{ fontSize: '25px', lineHeight: '1.15', fontWeight: '800' }}>[ARTICLE TITLE]</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)' }}>[One-line summary of the article]</p>
            <div className="go" style={{ marginTop: 'auto', paddingTop: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '15px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>Read article
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg>
            </div>
          </div>
        </a>
      
        <a href="#" className="card" style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', overflow: 'hidden' }}>
          <div style={{ height: '190px', background: '#CFE7E0', display: 'grid', placeItems: 'center' }}>
            <span style={{ width: '84px', height: '84px', borderRadius: '26px', background: '#fff', border: '2px solid var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', boxShadow: '0 18px 30px -18px rgba(15,42,29,.5)' }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z"></path></svg>
            </span>
          </div>
          <div style={{ padding: '26px 28px 30px', display: 'flex', flexDirection: 'column', gap: '12px', flex: '1' }}>
            <div className="mono" style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>DevOps · [DATE]</div>
            <h3 className="disp" style={{ fontSize: '25px', lineHeight: '1.15', fontWeight: '800' }}>[ARTICLE TITLE]</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)' }}>[One-line summary of the article]</p>
            <div className="go" style={{ marginTop: 'auto', paddingTop: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '15px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>Read article
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg>
            </div>
          </div>
        </a>
      
        <a href="#" className="card" style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', overflow: 'hidden' }}>
          <div style={{ height: '190px', background: '#F3E3D3', display: 'grid', placeItems: 'center' }}>
            <span style={{ width: '84px', height: '84px', borderRadius: '26px', background: '#fff', border: '2px solid var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', boxShadow: '0 18px 30px -18px rgba(15,42,29,.5)' }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path></svg>
            </span>
          </div>
          <div style={{ padding: '26px 28px 30px', display: 'flex', flexDirection: 'column', gap: '12px', flex: '1' }}>
            <div className="mono" style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>AI & Automation · [DATE]</div>
            <h3 className="disp" style={{ fontSize: '25px', lineHeight: '1.15', fontWeight: '800' }}>[ARTICLE TITLE]</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)' }}>[One-line summary of the article]</p>
            <div className="go" style={{ marginTop: 'auto', paddingTop: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '15px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>Read article
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg>
            </div>
          </div>
        </a>
      
    </div>
  </div>
</section>


      {/*  CAREERS  */}
<section style={{ padding: '0 40px 112px' }}>
  <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between', alignItems: 'center', background: 'var(--kpx-stage-bg, #E3EAD9)', border: '1px solid var(--kpx-border-strong, #CBD2C3)', borderRadius: '40px', padding: 'clamp(32px,5vw,64px)' }}>
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <p className="eyebrow">Careers</p>
      <h2 className="disp" style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', fontWeight: '800', textWrap: 'balance' }}>Want to build with us?</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>We are remote-first and based in Dhaka. If you care about senior-level engineering, say hello. [ADD CAREERS EMAIL OR OPEN-ROLES LINK]</p>
    </div>
    <a href="#" className="btn btn-ink">See open roles
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
    </a>
  </div>
</section>


      
<section className="sec" style={{ paddingTop: '40px' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '56px', alignItems: 'start' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <p className="eyebrow">09 / FAQ</p>
      <h2 className="h2">Questions we hear first.</h2>
      <p style={{ fontSize: '18px', lineHeight: 1.55, color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '420px' }}>Not here? Write to contact@kompilex.com and an engineer will answer.</p>
    </div>
    <div style={{ gridColumn: 'span 2', minWidth: 0, borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
      {faqs.map((f, i) => {
        const isOpen = openFaq === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--kpx-border-strong, #CBD2C3)' }}>
            <button
              type="button"
              className="faq-q"
              onClick={() => setOpenFaq(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{f.q}</span>
              <span
                className="plus"
                style={{
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  background: isOpen ? 'var(--kpx-accent-lime, #C8F53C)' : 'transparent',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--kpx-text-main, #0C1410)" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </span>
            </button>
            {isOpen && (
              <p style={{ padding: '0 64px 28px 0', fontSize: '18px', lineHeight: 1.6, color: 'var(--kpx-text-muted, #4A5650)', textWrap: 'pretty' }}>
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>

      
<section id="contact" className="sec" style={{ background: 'var(--kpx-bg-page, #F4F6F1)' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '56px', alignItems: 'start' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <p className="eyebrow">10 / Contact</p>
      <h2 className="h2">Tell us about what you want to build.</h2>
      <p style={{ fontSize: '18px', lineHeight: 1.55, color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '420px' }}>
        Senior engineers read and reply to every message. We respond within 24 hours with questions or a preliminary scope.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
        <a href="mailto:contact@kompilex.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '18px', fontWeight: 600 }}>
          <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--kpx-surface, #fff)', border: '1px solid var(--kpx-border-strong, #CBD2C3)', display: 'grid', placeItems: 'center' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6"></path></svg>
          </span>
          contact@kompilex.com
        </a>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '16.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>
          <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--kpx-surface, #fff)', border: '1px solid var(--kpx-border-strong, #CBD2C3)', display: 'grid', placeItems: 'center' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zM12 10a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </span>
          Dhaka, Bangladesh · Remote-first, worldwide
        </div>
      </div>
    </div>

    <form onSubmit={handleFormSubmit} style={{ background: 'var(--kpx-surface, #fff)', border: '1px solid var(--kpx-border-strong, #CBD2C3)', borderRadius: '32px', padding: '48px 44px', boxShadow: '0 40px 60px -48px rgba(12,20,16,.35)', display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="company">Company or project name</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Corp (optional)"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="message">What are you looking to build?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about the product, timeline and any specific stack preferences..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-ink" style={{ height: '56px', fontSize: '17px', marginTop: '6px' }}>
        Send inquiry to engineering
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </button>
      <p style={{ fontSize: '13px', color: 'var(--kpx-text-muted, #4A5650)', textAlign: 'center', margin: 0 }}>
        🔒 Strictly confidential. No sales calls, no spam.
      </p>
    </form>
  </div>
</section>

      {/*  FOOTER  */}
<footer className="dark" style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '48px 48px 0 0', overflow: 'hidden' }}>
  <div className="sec" style={{ paddingBottom: '72px' }}>
    <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '40px' }}>
      <div style={{ maxWidth: '720px' }}>
        <p className="eyebrow">Start a project</p>
        <h2 className="disp" style={{ marginTop: '16px', fontSize: 'clamp(40px,6vw,88px)', lineHeight: '.98', fontWeight: '700', textWrap: 'balance' }}>Your next product starts here.</h2>
        <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
          <a href="#contact" className="btn btn-lime">Get started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </a>
          <a href="mailto:contact@kompilex.com" style={{ fontSize: '18px', color: 'var(--kpx-dark-muted, #A9B6AE)', borderBottom: '1px solid #3A4A41', paddingBottom: '2px' }}>contact@kompilex.com</a>
        </div>
      </div>
      <svg className="floaty" width="190" height="150" viewBox="0 0 190 150" fill="none" stroke="#C8F53C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 112C40 148 112 138 120 92c8-44-52-52-52-14 0 34 50 30 80-34"></path><path d="M128 36l22 10-8 22"></path></svg>
    </div>
  </div>
  <div className="mq mq-fast" aria-hidden="true" style={{ borderTop: '1px solid #24332B', borderBottom: '1px solid #24332B', padding: '22px 0' }}>
    <div className="mq-track">
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
        <span className="disp" style={{ display: 'inline-flex', alignItems: 'center', gap: '34px', paddingLeft: '34px', fontSize: '44px', fontWeight: '700', whiteSpace: 'nowrap' }}>Software that ships.<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)', fontSize: '34px' }}>✦</span></span>
      
    </div>
  </div>
  <div className="sec" style={{ paddingTop: '64px', paddingBottom: '40px' }}>
    <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '320px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"></path></svg></span>
          <span className="disp" style={{ fontSize: '23px', fontWeight: '700' }}>Kompile<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)' }}>X</span></span>
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>A software company designing, building, shipping and running full-stack products end to end.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Studio</span><a className="flink" href="/services">Services</a><a className="flink" href="/technologies">Technologies</a><a className="flink" href="#work">Our Work</a></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Company</span><a className="flink" href="/about-us">About Us</a><a className="flink" href="#contact">Contact</a><a className="flink" href="#why">Why Us</a></div>
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
  );
}
