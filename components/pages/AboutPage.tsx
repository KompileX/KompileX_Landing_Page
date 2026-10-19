'use client';

import TeamGrid from '@/components/sections/shared/TeamGrid';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="exact-exactaboutus-container" style={{ color: 'var(--kpx-text-main, #0C1410)' }}>
      <div>
{/*  HERO  */}
<section className="sec" style={{ paddingTop: '88px', paddingBottom: '64px' }}>
  <div className="wrap">
    <p className="mono rise" style={{ fontSize: '13px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-emerald, #0A6B4A)', fontWeight: '500' }}>About us</p>
    <h1 className="disp rise" style={{ animationDelay: '.08s', marginTop: '20px', fontSize: 'clamp(32px,5.0vw,69px)', lineHeight: '.97', fontWeight: '700', maxWidth: '1060px', textWrap: 'balance' }}>A software company built around <span className="hl">specialists.</span></h1>
    <p className="rise" style={{ animationDelay: '.2s', marginTop: '36px', fontSize: '21px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '680px', textWrap: 'pretty' }}>KompileX designs, builds, ships and runs full products end to end across frontend and mobile, backend and systems, integrations, AI and infrastructure, with business guidance in the room from day one and no hand-offs.</p>
  </div>
</section>

{/*  STATS  */}
<section style={{ padding: '0 40px' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '32px', background: '#fff', overflow: 'hidden' }}>
    
      <div style={{ padding: '36px 32px 34px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span className="disp" style={{ fontSize: 'clamp(40px,4.3vw,60px)', lineHeight: '.95', fontWeight: '700' }}>10+</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Products shipped</span>
      </div>
    
      <div style={{ padding: '36px 32px 34px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span className="disp" style={{ fontSize: 'clamp(40px,4.3vw,60px)', lineHeight: '.95', fontWeight: '700' }}>3</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Years building together</span>
      </div>
    
      <div style={{ padding: '36px 32px 34px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span className="disp" style={{ fontSize: 'clamp(40px,4.3vw,60px)', lineHeight: '.95', fontWeight: '700' }}>100%</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Remote-first</span>
      </div>
    
      <div style={{ padding: '36px 32px 34px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span className="disp" style={{ fontSize: 'clamp(40px,4.3vw,60px)', lineHeight: '.95', fontWeight: '700' }}>24/7</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Monitoring after launch</span>
      </div>
    
  </div>
</section>

{/*  TEAM  */}
<TeamGrid />

<section style={{ padding: '0 40px 112px' }}>
  <div className="wrap dark" style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '40px', padding: 'clamp(26px,4.3vw,52px)', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '12px', padding: '9px 18px 9px 14px', border: '1px solid #3A4A41', borderRadius: '999px' }}>
        <span className="dot"></span><span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Available for new projects</span>
      </div>
      <h2 className="disp" style={{ fontSize: 'clamp(26px,3.2vw,43px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>A software company that ships full-stack products, then keeps them running.</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>Designing, building, hosting and supporting, with the same people from the first call to production and beyond.</p>
    </div>
    <a href="/" className="btn btn-lime">Start a Project
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
    </a>
  </div>
</section>

</div>
    </div>
  );
}
