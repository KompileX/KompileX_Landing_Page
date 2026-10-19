'use client';

import React from 'react';

export default function StatsSection() {
  return (
<section style={{ padding: '72px 40px 0' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', gap: '0', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '32px', background: '#fff', overflow: 'hidden' }}>
    
      <div style={{ padding: '34px 32px 32px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span className="disp" style={{ fontSize: 'clamp(37px,3.9vw,55px)', lineHeight: '.95', fontWeight: '800', color: 'var(--kpx-text-main, #0C1410)' }}>10+</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>Products shipped</span>
      </div>
    
      <div style={{ padding: '34px 32px 32px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span className="disp" style={{ fontSize: 'clamp(37px,3.9vw,55px)', lineHeight: '.95', fontWeight: '800', color: 'var(--kpx-text-main, #0C1410)' }}>3</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>Years building together</span>
      </div>
    
      <div style={{ padding: '34px 32px 32px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span className="disp" style={{ fontSize: 'clamp(37px,3.9vw,55px)', lineHeight: '.95', fontWeight: '800', color: 'var(--kpx-text-main, #0C1410)' }}>100%</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>Remote-first</span>
      </div>
    
      <div style={{ padding: '34px 32px 32px', borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span className="disp" style={{ fontSize: 'clamp(37px,3.9vw,55px)', lineHeight: '.95', fontWeight: '800', color: 'var(--kpx-text-main, #0C1410)' }}>24/7</span>
        <span className="mono" style={{ fontSize: '12.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-text-muted, #4A5650)', fontWeight: '600' }}>Monitoring after launch</span>
      </div>
    
  </div>
</section>
  );
}
