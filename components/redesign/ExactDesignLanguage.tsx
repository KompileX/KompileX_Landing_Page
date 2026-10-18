'use client';

import React from 'react';
import Link from 'next/link';

export default function ExactDesignLanguage() {
  return (
    <div className="exact-exactdesignlanguage-container" style={{ background: 'var(--kpx-bg-page, #F4F6F1)', color: 'var(--kpx-text-main, #0C1410)' }}>
      <div style={{ width: '1440px', padding: '80px', display: 'flex', flexDirection: 'column', gap: '88px' }}>

{/*  HEADER  */}
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
    <p className="lab">KompileX / Design language</p>
    <h1 className="disp" style={{ fontSize: '96px', lineHeight: '.96', fontWeight: '700', maxWidth: '860px' }}>Engineered, <span className="hl">not templated.</span></h1>
  </div>
  <p style={{ maxWidth: '380px', fontSize: '18px', lineHeight: '1.55', color: 'var(--kpx-text-muted, #4A5650)' }}>Chalk-white ground, green-black ink, one acid-lime accent. Numbered mono labels, pill buttons, floating product UI.</p>
</div>

{/*  COLOR  */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
  <p className="lab">01 / Color</p>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,minmax(0,1fr))', gap: '16px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><div style={{ height: '160px', borderRadius: '24px', background: 'var(--kpx-bg-page, #F4F6F1)', border: '1px solid var(--kpx-border, #D8DDD2)' }}></div><div><p style={{ fontWeight: '700' }}>Chalk</p><p className="mono" style={{ fontSize: '13px', color: 'var(--kpx-text-muted, #4A5650)' }}>#F4F6F1 · page ground</p></div></div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><div style={{ height: '160px', borderRadius: '24px', background: 'var(--kpx-text-main, #0C1410)' }}></div><div><p style={{ fontWeight: '700' }}>Ink</p><p className="mono" style={{ fontSize: '13px', color: 'var(--kpx-text-muted, #4A5650)' }}>#0C1410 · text, dark sections</p></div></div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><div style={{ height: '160px', borderRadius: '24px', background: 'var(--kpx-accent-lime, #C8F53C)' }}></div><div><p style={{ fontWeight: '700' }}>Lime</p><p className="mono" style={{ fontSize: '13px', color: 'var(--kpx-text-muted, #4A5650)' }}>#C8F53C · highlight, CTA on dark</p></div></div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><div style={{ height: '160px', borderRadius: '24px', background: 'var(--kpx-accent-emerald, #0A6B4A)' }}></div><div><p style={{ fontWeight: '700' }}>Emerald</p><p className="mono" style={{ fontSize: '13px', color: 'var(--kpx-text-muted, #4A5650)' }}>#0A6B4A · eyebrows, links</p></div></div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><div style={{ height: '160px', borderRadius: '24px', background: 'var(--kpx-text-muted, #4A5650)' }}></div><div><p style={{ fontWeight: '700' }}>Slate</p><p className="mono" style={{ fontSize: '13px', color: 'var(--kpx-text-muted, #4A5650)' }}>#4A5650 · secondary text</p></div></div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><div style={{ height: '160px', borderRadius: '24px', background: 'var(--kpx-stage-bg, #E3EAD9)', border: '1px solid var(--kpx-border, #D8DDD2)' }}></div><div><p style={{ fontWeight: '700' }}>Sage</p><p className="mono" style={{ fontSize: '13px', color: 'var(--kpx-text-muted, #4A5650)' }}>#E3EAD9 · product stage</p></div></div>
  </div>
</div>

{/*  TYPE  */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
  <p className="lab">02 / Type</p>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '16px' }}>
    <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '320px' }}>
      <p className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Display · Plus Jakarta Sans 700–800</p>
      <p className="disp" style={{ fontSize: '88px', lineHeight: '.95', fontWeight: '700' }}>Aa</p>
      <p className="disp" style={{ fontSize: '34px', lineHeight: '1.05', fontWeight: '700', marginTop: 'auto' }}>Software that ships.</p>
      <p style={{ fontSize: '14px', color: 'var(--kpx-text-muted, #4A5650)' }}>Headlines, numbers, wordmark. Tracking −0.03em, line-height 0.96–1.05.</p>
    </div>
    <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '320px' }}>
      <p className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Body · Plus Jakarta Sans 400–600</p>
      <p style={{ fontSize: '88px', lineHeight: '.95', fontWeight: '500' }}>Aa</p>
      <p style={{ fontSize: '19px', lineHeight: '1.5', marginTop: 'auto' }}>We build intelligent applications that automate daily operations, from the first commit to production.</p>
      <p style={{ fontSize: '14px', color: 'var(--kpx-text-muted, #4A5650)' }}>Paragraphs 16–21px, line-height 1.5, balanced wrapping.</p>
    </div>
    <div style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '320px' }}>
      <p className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Label · Plus Jakarta Sans 600 caps</p>
      <p className="mono" style={{ fontSize: '88px', lineHeight: '.95', fontWeight: '600' }}>Aa</p>
      <p className="mono" style={{ fontSize: '14px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)', marginTop: 'auto' }}>01 / What we actually build</p>
      <p style={{ fontSize: '14px', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>Numbered eyebrows, tags, metadata. Uppercase, tracked +0.12em. Code windows use JetBrains Mono.</p>
    </div>
  </div>
</div>

{/*  MOTION  */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
  <p className="lab">03 / Motion</p>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '16px' }}>
    <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ height: '120px', borderRadius: '18px', background: 'var(--kpx-stage-bg, #E3EAD9)', display: 'grid', placeItems: 'center', overflow: 'hidden' }}><div className="demo-rise" style={{ width: '150px', height: '56px', borderRadius: '14px', background: 'var(--kpx-text-main, #0C1410)' }}></div></div>
      <h3 className="disp" style={{ fontSize: '24px', fontWeight: '700' }}>Staggered rise</h3>
      <p style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)' }}>Hero elements fade up 28px in sequence, 0.9s, with a 0.1s stagger.</p>
      <p className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>cubic-bezier(.2,.7,.2,1)</p>
    </div>
    <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ height: '120px', borderRadius: '18px', background: 'var(--kpx-stage-bg, #E3EAD9)', display: 'grid', placeItems: 'center' }}><div className="floaty" style={{ width: '150px', height: '56px', borderRadius: '14px', background: '#fff', border: '1px solid var(--kpx-border-strong, #CBD2C3)', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 14px' }}><span className="dot"></span><span className="mono" style={{ fontSize: '12px' }}>Production</span></div></div>
      <h3 className="disp" style={{ fontSize: '24px', fontWeight: '700' }}>Floating UI cards</h3>
      <p style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)' }}>Cards over the hero mockup drift ±12px on a 6s loop, offset so they never move together. Status dots pulse a 2s ring.</p>
      <p className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>ease-in-out · infinite</p>
    </div>
    <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ height: '120px', borderRadius: '18px', background: 'var(--kpx-stage-bg, #E3EAD9)', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '20px 26px', overflow: 'hidden' }}>
        <div className="demo-bar" style={{ flex: '1', height: '50%', borderRadius: '5px', background: 'var(--kpx-text-main, #0C1410)' }}></div>
        <div className="demo-bar" style={{ flex: '1', height: '78%', borderRadius: '5px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '.1s' }}></div>
        <div className="demo-bar" style={{ flex: '1', height: '62%', borderRadius: '5px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '.2s' }}></div>
        <div className="demo-bar" style={{ flex: '1', height: '96%', borderRadius: '5px', background: 'var(--kpx-accent-lime, #C8F53C)', animationDelay: '.3s' }}></div>
        <div className="demo-bar" style={{ flex: '1', height: '70%', borderRadius: '5px', background: 'var(--kpx-text-main, #0C1410)', animationDelay: '.4s' }}></div>
      </div>
      <h3 className="disp" style={{ fontSize: '24px', fontWeight: '700' }}>Chart growth</h3>
      <p style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)' }}>Dashboard bars grow from the baseline, 1.1s, staggered 60ms, once on load.</p>
      <p className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>scaleY · transform-origin bottom</p>
    </div>
    <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ height: '120px', borderRadius: '18px', background: 'var(--kpx-text-main, #0C1410)', display: 'flex', alignItems: 'center' }} className="mq"><div className="mq-track"><span className="disp" style={{ color: 'var(--kpx-bg-page, #F4F6F1)', fontSize: '34px', fontWeight: '700', whiteSpace: 'nowrap', paddingLeft: '28px' }}>Software that ships. <span style={{ color: 'var(--kpx-accent-lime, #C8F53C)' }}>✦</span> Software that ships. <span style={{ color: 'var(--kpx-accent-lime, #C8F53C)' }}>✦</span> Software that ships. <span style={{ color: 'var(--kpx-accent-lime, #C8F53C)' }}>✦</span> </span><span className="disp" style={{ color: 'var(--kpx-bg-page, #F4F6F1)', fontSize: '34px', fontWeight: '700', whiteSpace: 'nowrap', paddingLeft: '28px' }}>Software that ships. <span style={{ color: 'var(--kpx-accent-lime, #C8F53C)' }}>✦</span> Software that ships. <span style={{ color: 'var(--kpx-accent-lime, #C8F53C)' }}>✦</span> Software that ships. <span style={{ color: 'var(--kpx-accent-lime, #C8F53C)' }}>✦</span> </span></div></div>
      <h3 className="disp" style={{ fontSize: '24px', fontWeight: '700' }}>Marquees</h3>
      <p style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)' }}>Tech row 46s, footer tagline 30s, linear. Pause on hover.</p>
      <p className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>translateX(0 → −50%)</p>
    </div>
    <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ height: '120px', borderRadius: '18px', background: 'var(--kpx-stage-bg, #E3EAD9)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}><a href="#" className="btn btn-ink">Hover me</a></div>
      <h3 className="disp" style={{ fontSize: '24px', fontWeight: '700' }}>Hover lift</h3>
      <p style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)' }}>Buttons rise 2px and flip to emerald. Cards rise 6px with a soft shadow. Arrows nudge 4px.</p>
      <p className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>0.25–0.4s</p>
    </div>
    <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ height: '120px', borderRadius: '18px', background: 'var(--kpx-stage-bg, #E3EAD9)', display: 'grid', placeItems: 'center' }}><span className="mono" style={{ fontSize: '13px', letterSpacing: '.08em', textTransform: 'uppercase', border: '1.5px solid var(--kpx-text-main, #0C1410)', borderRadius: '999px', padding: '10px 18px' }}>Reduced motion: off</span></div>
      <h3 className="disp" style={{ fontSize: '24px', fontWeight: '700' }}>Respect the setting</h3>
      <p style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)' }}>With reduced motion enabled, every loop and transition is switched off and content appears in place.</p>
      <p className="mono" style={{ fontSize: '12px', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>prefers-reduced-motion</p>
    </div>
  </div>
</div>

{/*  COMPONENTS  */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
  <p className="lab">04 / Components</p>
  <div style={{ background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '40px', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}><a href="#" className="btn btn-ink">Start a Project</a><a href="#" className="btn btn-line">See Our Work</a><span style={{ background: 'var(--kpx-text-main, #0C1410)', padding: '10px', borderRadius: '999px' }}><a href="#" className="btn btn-lime">Get started</a></span></div>
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">PostgreSQL</span><span className="tag">Go</span></div>
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '9px 18px 9px 14px', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '999px', background: '#fff' }}><span className="dot"></span><span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Available for work · Dhaka</span></div>
  </div>
</div>

</div>
    </div>
  );
}
