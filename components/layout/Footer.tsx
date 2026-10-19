import BackToTop from './BackToTop';
import React from 'react';

export default function Footer() {
  return (
<footer className="dark" style={{ background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)', borderRadius: '48px 48px 0 0', overflow: 'hidden' }}>
  <div className="sec" style={{ paddingBottom: '72px' }}>
    <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '40px' }}>
      <div style={{ maxWidth: '720px' }}>
        <p className="eyebrow">Start a project</p>
        <h2 className="disp" style={{ marginTop: '16px', fontSize: 'clamp(29px,4.3vw,63px)', lineHeight: '.98', fontWeight: '700', textWrap: 'balance' }}>Your next product starts here.</h2>
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
  <div className="kx-foot-tag" aria-hidden="true">
    <span className="disp kx-foot-word">Software</span>
    <span className="disp kx-foot-word kx-foot-outline">that</span>
    <span className="disp kx-foot-word kx-foot-lime">ships.</span>
  </div>
  <div className="sec" style={{ paddingTop: '64px', paddingBottom: '40px' }}>
    <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '320px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/kompilex-dark.png" alt="" width={52} height={32} style={{ height: 30, width: 'auto' }} />
          <span className="disp" style={{ fontSize: '23px', fontWeight: '700' }}>Kompile<span style={{ color: 'var(--kpx-accent-lime, #C8F53C)' }}>X</span></span>
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.55', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>A software company designing, building, shipping and running full-stack products end to end.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Studio</span><a className="flink" href="/#services">Services</a><a className="flink" href="/#stack">Technologies</a><a className="flink" href="#work">Our Work</a></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Company</span><a className="flink" href="/#team">Our Team</a><a className="flink" href="#contact">Contact</a><a className="flink" href="#why">Why Us</a></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Connect</span><a className="flink" href="#">LinkedIn</a><a className="flink" href="#">Facebook</a><a className="flink" href="mailto:contact@kompilex.com">Email us</a></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}><span className="mono" style={{ fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-lime, #C8F53C)' }}>Legal</span><a className="flink" href="/privacy-policy">Privacy Policy</a><a className="flink" href="/terms-of-service">Terms of Service</a></div>
    </div>
    <div className="wrap" style={{ marginTop: '56px', paddingTop: '24px', borderTop: '1px solid #24332B', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px', fontSize: '14px', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>
      <BackToTop />
      <span>Built remotely, shipped worldwide · ©2026 KompileX. All rights reserved.</span>
    </div>
  </div>
</footer>
  );
}
