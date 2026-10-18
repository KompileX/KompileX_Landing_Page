const fs = require('fs');

function styleStringToJsx(str) {
  const rules = str.split(';').map(r => r.trim()).filter(Boolean);
  const pairs = [];
  for (const rule of rules) {
    const colonIdx = rule.indexOf(':');
    if (colonIdx === -1) continue;
    let prop = rule.substring(0, colonIdx).trim();
    let val = rule.substring(colonIdx + 1).trim();
    
    // Replace hardcoded colors with CSS variables with exact fallbacks
    val = val.replace(/#F4F6F1/gi, 'var(--kpx-bg-page, #F4F6F1)');
    val = val.replace(/#0C1410/gi, 'var(--kpx-text-main, #0C1410)');
    val = val.replace(/#C8F53C/gi, 'var(--kpx-accent-lime, #C8F53C)');
    val = val.replace(/#0A6B4A/gi, 'var(--kpx-accent-emerald, #0A6B4A)');
    val = val.replace(/#1FB36B/gi, 'var(--kpx-accent-green, #1FB36B)');
    val = val.replace(/#D8DDD2/gi, 'var(--kpx-border, #D8DDD2)');
    val = val.replace(/#CBD2C3/gi, 'var(--kpx-border-strong, #CBD2C3)');
    val = val.replace(/#E4E8DD/gi, 'var(--kpx-border-subtle, #E4E8DD)');
    val = val.replace(/#E3EAD9/gi, 'var(--kpx-stage-bg, #E3EAD9)');
    val = val.replace(/#B9C6AB/gi, 'var(--kpx-hero-dots, #B9C6AB)');
    val = val.replace(/#EEF1E8/gi, 'var(--kpx-tag-bg, #EEF1E8)');
    val = val.replace(/#2C3830/gi, 'var(--kpx-tag-text, #2C3830)');
    val = val.replace(/#4A5650/gi, 'var(--kpx-text-muted, #4A5650)');
    val = val.replace(/#A9B6AE/gi, 'var(--kpx-dark-muted, #A9B6AE)');
    val = val.replace(/rgba\(12,\s*20,\s*16,\s*\.45\)/gi, 'var(--kpx-hero-shadow, rgba(12,20,16,.45))');
    val = val.replace(/rgba\(12,\s*20,\s*16,\s*\.4\)/gi, 'var(--kpx-card-hover-shadow, rgba(12,20,16,.4))');

    // Handle vendor prefixes like -webkit-
    if (prop.startsWith('-webkit-')) {
      const rest = prop.substring(8).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      prop = 'Webkit' + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    }
    
    const safeVal = val.replace(/'/g, "\\'");
    pairs.push(`${prop}: '${safeVal}'`);
  }
  return `style={{ ${pairs.join(', ')} }}`;
}

function convertHtmlToJsx(html) {
  let res = html;

  // Replace styles first
  res = res.replace(/style="([^"]*)"/g, (_, s) => styleStringToJsx(s));

  // Convert classes
  res = res.replace(/\bclass="/g, 'className="');

  // SVG attributes
  res = res.replace(/sc-camel-view-box=/g, 'viewBox=');
  res = res.replace(/stroke-width=/g, 'strokeWidth=');
  res = res.replace(/stroke-linecap=/g, 'strokeLinecap=');
  res = res.replace(/stroke-linejoin=/g, 'strokeLinejoin=');

  // Label for
  res = res.replace(/<label\s+for=/g, '<label htmlFor=');

  // Self closing tags
  res = res.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  res = res.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');
  res = res.replace(/<br([^>]*[^\/])>/g, '<br$1 />');
  res = res.replace(/<img([^>]*[^\/])>/g, '<img$1 />');

  // Convert comments
  res = res.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Update links
  res = res.replace(/href="Main\.dc\.html"/g, 'href="/"');
  res = res.replace(/href="About\.dc\.html"/g, 'href="/about-us"');
  res = res.replace(/href="Services\.dc\.html"/g, 'href="/services"');
  res = res.replace(/href="Technologies\.dc\.html"/g, 'href="/technologies"');
  res = res.replace(/href="CaseStudy\.dc\.html"/g, 'href="/case-studies/commerceos"');

  // Clean unneeded custom attrs
  res = res.replace(/sc-camel-on-click="[^"]*"/g, '');

  return res;
}

const html = fs.readFileSync('scripts/rendered_home.html', 'utf8');

// Section indexes
const pNav = html.indexOf('<!-- NAV -->');
const pHero = html.indexOf('<!-- HERO -->');
const pTech = html.indexOf('<!-- TECH MARQUEE -->');
const pStats = html.indexOf('<!-- STATS -->');
const pServices = html.indexOf('<!-- 01 SERVICES -->');
const pEngage = html.indexOf('<!-- 02 ENGAGEMENT -->');
const pProcess = html.indexOf('<!-- 03 PROCESS -->');
const pDevOps = html.indexOf('<!-- 04 DEVOPS -->');
const pWork = html.indexOf('<!-- 05 WORK -->');
const pWhy = html.indexOf('<!-- 06 WHY US -->');
const pTestimonials = html.indexOf('<!-- 07 TESTIMONIALS -->');
const pInsights = html.indexOf('<!-- 08 INSIGHTS -->');
const pCareers = html.indexOf('<!-- CAREERS -->');
const pFaq = html.indexOf('<!-- 09 FAQ -->');
const pContact = html.indexOf('<!-- 09 CONTACT -->');
const pFooter = html.indexOf('<!-- FOOTER -->');

// Build JSX for static sections
const jsxNavHero = convertHtmlToJsx(html.substring(pNav, pTech));
const jsxTech = convertHtmlToJsx(html.substring(pTech, pStats));
const jsxStats = convertHtmlToJsx(html.substring(pStats, pServices));
const jsxServices = convertHtmlToJsx(html.substring(pServices, pEngage));
const jsxEngage = convertHtmlToJsx(html.substring(pEngage, pProcess));
const jsxProcess = convertHtmlToJsx(html.substring(pProcess, pDevOps));
const jsxDevOps = convertHtmlToJsx(html.substring(pDevOps, pWork));
const jsxWhy = convertHtmlToJsx(html.substring(pWhy, pTestimonials));
const jsxTestimonials = convertHtmlToJsx(html.substring(pTestimonials, pInsights));
const jsxInsights = convertHtmlToJsx(html.substring(pInsights, pCareers));
const jsxCareers = convertHtmlToJsx(html.substring(pCareers, pFaq));
const jsxFooter = convertHtmlToJsx(html.substring(pFooter));

// Interactive Work Section JSX
const workSectionJsx = `
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
`;

// Interactive FAQ Section JSX
const faqSectionJsx = `
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
`;

// Interactive Contact Form JSX
const contactSectionJsx = `
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
`;

const completeFile = `'use client';

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
      ${jsxNavHero}
      ${jsxTech}
      ${jsxStats}
      ${jsxServices}
      ${jsxEngage}
      ${jsxProcess}
      ${jsxDevOps}
      ${workSectionJsx}
      ${jsxWhy}
      ${jsxTestimonials}
      ${jsxInsights}
      ${jsxCareers}
      ${faqSectionJsx}
      ${contactSectionJsx}
      ${jsxFooter}
    </div>
  );
}
`;

fs.writeFileSync('components/redesign/ExactHome.tsx', completeFile, 'utf8');
console.log('Successfully written components/redesign/ExactHome.tsx! File size:', completeFile.length);
