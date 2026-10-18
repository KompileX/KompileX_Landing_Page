'use client';

import React from 'react';
import Link from 'next/link';

export default function ExactTechnologies() {
  return (
    <div className="exact-exacttechnologies-container" style={{ background: 'var(--kpx-bg-page, #F4F6F1)', color: 'var(--kpx-text-main, #0C1410)' }}>
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
      <a className="nav-a" href="/about-us">About Us</a>
      <a className="nav-a" href="/services">Services</a>
      <a className="nav-a cur" href="/technologies" aria-current="page">Technologies</a>
      <a className="nav-a" href="/#work">Work</a>
      <a className="nav-a" href="/#contact">Contact</a>
    </nav>
    <a href="/" className="btn btn-ink" style={{ height: '46px', padding: '0 22px', fontSize: '15px' }}>Contact Us</a>
  </div>
</div>

{/*  HERO  */}
<section className="sec" style={{ paddingTop: '88px', paddingBottom: '64px' }}>
  <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ flex: '1 1 560px', minWidth: '0' }}>
      <p className="eyebrow rise">Technologies</p>
      <h1 className="disp rise" style={{ animationDelay: '.08s', marginTop: '20px', fontSize: 'clamp(44px,6.6vw,96px)', lineHeight: '.96', fontWeight: '700', textWrap: 'balance' }}>The stack behind <span className="hl">what we ship.</span></h1>
      <p className="rise" style={{ animationDelay: '.2s', marginTop: '32px', fontSize: '21px', lineHeight: '1.5', color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '620px', textWrap: 'pretty' }}>Languages, frameworks, databases and infrastructure we use every week. We pick the tool that fits your product, then deploy and run it ourselves.</p>
      <div className="rise" style={{ animationDelay: '.3s', marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <a href="#infra" className="btn btn-ink">DevOps &amp; hosting
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </a>
        <a href="/" className="btn btn-line">Talk to an engineer</a>
      </div>
    </div>
    <div className="cluster" style={{ flex: '0 1 440px', position: 'relative', height: '420px', minWidth: '320px' }} aria-hidden="true">
      
        <div style={{ position: 'absolute', left: '0%', top: '6%', transform: 'rotate(-6deg)' }}>
          <div className="fl" style={{ width: '110px', height: '110px', borderRadius: '30px', background: '#61DAFB', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', boxShadow: '0 30px 44px -28px rgba(12,20,16,.55)', border: '2px solid var(--kpx-text-main, #0C1410)', animationDelay: '0s' }}>
            <span className="disp" style={{ fontSize: '40px', fontWeight: '700' }}>Re</span>
          </div>
        </div>
      
        <div style={{ position: 'absolute', left: '38%', top: '0%', transform: 'rotate(4deg)' }}>
          <div className="fl" style={{ width: '110px', height: '110px', borderRadius: '30px', background: 'var(--kpx-text-main, #0C1410)', color: '#FFFFFF', display: 'grid', placeItems: 'center', boxShadow: '0 30px 44px -28px rgba(12,20,16,.55)', border: '2px solid var(--kpx-text-main, #0C1410)', animationDelay: '-1.5s' }}>
            <span className="disp" style={{ fontSize: '40px', fontWeight: '700' }}>Nx</span>
          </div>
        </div>
      
        <div style={{ position: 'absolute', left: '70%', top: '10%', transform: 'rotate(-3deg)' }}>
          <div className="fl" style={{ width: '110px', height: '110px', borderRadius: '30px', background: '#00ADD8', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', boxShadow: '0 30px 44px -28px rgba(12,20,16,.55)', border: '2px solid var(--kpx-text-main, #0C1410)', animationDelay: '-3s' }}>
            <span className="disp" style={{ fontSize: '40px', fontWeight: '700' }}>Go</span>
          </div>
        </div>
      
        <div style={{ position: 'absolute', left: '6%', top: '50%', transform: 'rotate(5deg)' }}>
          <div className="fl" style={{ width: '110px', height: '110px', borderRadius: '30px', background: '#2496ED', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', boxShadow: '0 30px 44px -28px rgba(12,20,16,.55)', border: '2px solid var(--kpx-text-main, #0C1410)', animationDelay: '-4s' }}>
            <span className="disp" style={{ fontSize: '40px', fontWeight: '700' }}>Dk</span>
          </div>
        </div>
      
        <div style={{ position: 'absolute', left: '40%', top: '46%', transform: 'rotate(-5deg)' }}>
          <div className="fl" style={{ width: '110px', height: '110px', borderRadius: '30px', background: '#336791', color: '#FFFFFF', display: 'grid', placeItems: 'center', boxShadow: '0 30px 44px -28px rgba(12,20,16,.55)', border: '2px solid var(--kpx-text-main, #0C1410)', animationDelay: '-2s' }}>
            <span className="disp" style={{ fontSize: '40px', fontWeight: '700' }}>Pg</span>
          </div>
        </div>
      
        <div style={{ position: 'absolute', left: '72%', top: '54%', transform: 'rotate(6deg)' }}>
          <div className="fl" style={{ width: '110px', height: '110px', borderRadius: '30px', background: '#326CE5', color: '#FFFFFF', display: 'grid', placeItems: 'center', boxShadow: '0 30px 44px -28px rgba(12,20,16,.55)', border: '2px solid var(--kpx-text-main, #0C1410)', animationDelay: '-5s' }}>
            <span className="disp" style={{ fontSize: '40px', fontWeight: '700' }}>K8</span>
          </div>
        </div>
      
    </div>
  </div>
</section>

{/*  GRID  */}
<section style={{ padding: '0 40px 112px' }}>
  <div className="wrap">
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '36px', borderBottom: '1px solid var(--kpx-border-strong, #CBD2C3)' }} role="group" aria-label="Filter technologies">
      
        <button type="button" className="chip on"  aria-pressed="true">All<span className="ct">49</span></button>
      
        <button type="button" className="chip"  aria-pressed="false">Languages<span className="ct">10</span></button>
      
        <button type="button" className="chip"  aria-pressed="false">Frontend<span className="ct">7</span></button>
      
        <button type="button" className="chip"  aria-pressed="false">Backend<span className="ct">9</span></button>
      
        <button type="button" className="chip"  aria-pressed="false">Mobile<span className="ct">3</span></button>
      
        <button type="button" className="chip"  aria-pressed="false">Data<span className="ct">4</span></button>
      
        <button type="button" className="chip"  aria-pressed="false">DevOps & Cloud<span className="ct">12</span></button>
      
        <button type="button" className="chip"  aria-pressed="false">AI<span className="ct">4</span></button>
      
    </div>
    <div style={{ marginTop: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(250px,100%),1fr))', gap: '14px' }}>
      
        <div className="tile pop" style={{ animationDelay: '0.00s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#F7DF1E', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>JS</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>JavaScript</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.03s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#3178C6', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>TS</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>TypeScript</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.05s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#3776AB', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Py</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Python</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.08s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#00ADD8', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Go</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Go</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.10s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#DEA584', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Rs</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Rust</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.13s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#F89820', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Jv</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Java</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.15s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#68217A', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>C#</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>C#</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.18s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#00599C', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '17px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>C++</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>C++</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.20s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#7F52FF', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Kt</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Kotlin</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.23s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#0175C2', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Dt</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Dart</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Languages</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.25s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#61DAFB', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Re</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>React</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Frontend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.28s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: 'var(--kpx-text-main, #0C1410)', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Nx</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Next.js</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Frontend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.30s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#DD0031', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Ng</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Angular</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Frontend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.33s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#42B883', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Vu</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Vue.js</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Frontend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.35s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#00DC82', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Nu</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Nuxt.js</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Frontend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.38s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#FF3E00', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Sv</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>SvelteKit</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Frontend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.40s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#06B6D4', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Tw</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Tailwind CSS</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Frontend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.43s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#5FA04E', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>No</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Node.js</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Backend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.45s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: 'var(--kpx-stage-bg, #E3EAD9)', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Ex</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Express.js</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Backend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.48s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#E0234E', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Ne</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>NestJS</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Backend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.50s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#092E20', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Dj</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Django</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Backend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.53s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#009688', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>FA</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>FastAPI</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Backend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.55s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#6DB33F', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Sb</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Spring Boot</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Backend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.58s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#FF2D20', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>La</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Laravel</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Backend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#512BD4', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>.N</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>ASP.NET Core</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Backend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#635BFF', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>St</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Stripe</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Backend</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#61DAFB', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Rn</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>React Native</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Mobile</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#02569B', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Fl</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Flutter</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Mobile</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: 'var(--kpx-stage-bg, #E3EAD9)', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Wb</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>WebRTC</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Mobile</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#336791', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Pg</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>PostgreSQL</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Data</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#DC382D', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Rd</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Redis</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Data</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#47A248', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Mg</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>MongoDB</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Data</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#4479A1', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>My</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>MySQL</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>Data</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#2496ED', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Dk</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Docker</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#326CE5', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>K8</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Kubernetes</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#FCC624', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Lx</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Linux</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#009639', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Nx</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Nginx</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#2088FF', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>GA</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>GitHub Actions</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#7B42BC', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Tf</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Terraform</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#FF9900', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>AW</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>AWS</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#0080FF', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>DO</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>DigitalOcean</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#D50C2D', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Hz</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Hetzner</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#F38020', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>CF</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Cloudflare</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#E6522C', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Pm</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Prometheus</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#F46800', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Gf</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>Grafana</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>DevOps & Cloud</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: 'var(--kpx-accent-lime, #C8F53C)', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>LL</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>LLM apps</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>AI</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', fontSize: '17px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>RAG</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>RAG</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>AI</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center', fontSize: '17px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>MCP</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>MCP</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>AI</span>
          </span>
        </div>
      
        <div className="tile pop" style={{ animationDelay: '0.60s' }}>
          <span className="ti disp" style={{ flex: 'none', width: '60px', height: '60px', borderRadius: '18px', background: '#EE4C2C', color: 'var(--kpx-text-main, #0C1410)', display: 'grid', placeItems: 'center', fontSize: '22px', fontWeight: '700', border: '1.5px solid rgba(12,20,16,.18)' }}>Pt</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.2' }}>PyTorch</span>
            <span className="mono" style={{ fontSize: '11.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)' }}>AI</span>
          </span>
        </div>
      
    </div>
    <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--kpx-text-muted, #4A5650)' }}>Icon tiles are monograms. Swap in official logos when this goes live.</p>
  </div>
</section>

{/*  INFRA  */}
<section id="infra" className="sec dark" style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '48px' }}>
  <div className="wrap">
    <p className="eyebrow">DevOps, cloud &amp; hosting</p>
    <h2 className="h2" style={{ marginTop: '16px', maxWidth: '900px' }}>We do not hand you a repo and disappear. We run it.</h2>
    <p style={{ marginTop: '24px', fontSize: '20px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)', maxWidth: '720px', textWrap: 'pretty' }}>Your own VPS, your cloud account or our managed hosting: we set it up, secure it, automate releases and keep watch.</p>

    {/*  pipeline  */}
    <div style={{ marginTop: '56px', background: '#121C17', border: '1px solid #24332B', borderRadius: '32px', padding: 'clamp(20px,4vw,44px)', overflowX: 'auto' }}>
      <svg viewBox="0 0 1100 200" width="100%" style={{ minWidth: '760px' }} role="img" aria-label="Release pipeline from developer to Git, CI, container registry, server and monitoring">
        <g stroke="#C8F53C" strokeWidth="3" strokeLinecap="round" className="flow"><path d="M110 80 H200"></path><path d="M310 80 H400"></path><path d="M510 80 H600"></path><path d="M710 80 H800"></path><path d="M910 80 H980"></path></g>
        <g font-family="Plus Jakarta Sans, sans-serif" font-size="15" font-weight="600" text-anchor="middle" fill="#F4F6F1">
          <rect x="10" y="40" width="100" height="80" rx="20" fill="#0C1410" stroke="#3A4A41" strokeWidth="2"></rect><text x="60" y="87">Dev</text><text x="60" y="160" fill="#DCE6D0" font-size="13">commit</text>
          <rect x="210" y="40" width="100" height="80" rx="20" fill="#0C1410" stroke="#3A4A41" strokeWidth="2"></rect><text x="260" y="87">Git</text><text x="260" y="160" fill="#DCE6D0" font-size="13">review</text>
          <rect x="410" y="40" width="100" height="80" rx="20" fill="#0C1410" stroke="#3A4A41" strokeWidth="2"></rect><text x="460" y="87">CI</text><text x="460" y="160" fill="#DCE6D0" font-size="13">build &amp; test</text>
          <rect x="610" y="40" width="100" height="80" rx="20" fill="#0C1410" stroke="#3A4A41" strokeWidth="2"></rect><text x="660" y="87">Image</text><text x="660" y="160" fill="#DCE6D0" font-size="13">container</text>
          <rect x="810" y="40" width="100" height="80" rx="20" fill="#C8F53C"></rect><text x="860" y="87" fill="#0C1410">Server</text><text x="860" y="160" fill="#DCE6D0" font-size="13">VPS / cloud</text>
          <circle cx="1040" cy="80" r="48" fill="#0C1410" stroke="#C8F53C" strokeWidth="3"></circle><text x="1040" y="86" fill="#FFFFFF" font-size="14">watch</text><text x="1040" y="160" fill="#DCE6D0" font-size="13">24/7 alerts</text>
        </g>
      </svg>
    </div>

    <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: '16px' }}>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16v5H4zM4 13h16v5H4zM7.5 8.5h.01M7.5 15.5h.01"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>VPS & server setup</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>We provision, harden and document your servers: users, firewalls, updates, SSH, and sane defaults from day one.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-5 9 5v7l-9 5-9-5zM3 9l9 5 9-5M12 14v7"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Containers & orchestration</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>Docker images for every service, run with Compose on a single VPS or Kubernetes when you outgrow it.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3v12M6 15a3 3 0 106 0 3 3 0 00-6 0zM18 9a3 3 0 100-6 3 3 0 000 6zM18 9v3a6 6 0 01-6 6"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>CI/CD pipelines</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>Every push is built, tested and deployed the same way, so releases are routine instead of events.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Monitoring & alerting</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>24/7 alerts, server issue resolution and database optimization, so problems find us before your users.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M4 19h16"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Backups & recovery</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>Scheduled, tested backups and a written recovery plan for databases and files.</p>
        </div>
      
        <div className="icard" style={{ background: '#121C17', border: '1px solid #24332B', borderRadius: '26px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '250px' }}>
          <span style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"></path></svg>
          </span>
          <h3 className="disp" style={{ fontSize: '26px', lineHeight: '1.08', fontWeight: '700', marginTop: 'auto' }}>Domains, SSL & CDN</h3>
          <p style={{ fontSize: '16.5px', lineHeight: '1.5', color: 'var(--kpx-dark-muted, #A9B6AE)', textWrap: 'pretty' }}>DNS, certificates, caching and edge delivery configured and renewed for you.</p>
        </div>
      
    </div>

    <div style={{ marginTop: '56px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
      <span className="mono" style={{ fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)', marginRight: '12px' }}>We deploy to</span>
      <span className="pill">Your own VPS</span><span className="pill">AWS</span><span className="pill">DigitalOcean</span><span className="pill">Hetzner</span><span className="pill">Cloudflare</span><span className="pill">On-premise servers</span>
    </div>
  </div>
</section>

{/*  CTA  */}
<section style={{ padding: '112px 40px' }}>
  <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between', alignItems: 'center', background: 'var(--kpx-accent-lime, #C8F53C)', borderRadius: '40px', padding: 'clamp(32px,6vw,72px)' }}>
    <div style={{ maxWidth: '660px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2 className="disp" style={{ fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: '1', fontWeight: '700', textWrap: 'balance' }}>One partner for the code and the servers it runs on.</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.5', textWrap: 'pretty' }}>Tell us your stack, or let us choose one with you.</p>
    </div>
    <a href="/" className="btn btn-ink">Start a Project
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
