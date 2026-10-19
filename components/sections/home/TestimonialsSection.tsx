'use client';

import React from 'react';

export default function TestimonialsSection() {
  return (
<section className="sec">
  <div className="wrap">
    <p className="eyebrow">07 / Client words</p>
    <h2 className="h2" style={{ marginTop: '16px', maxWidth: '820px' }}>What partners say after launch.</h2>
    <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))', gap: '20px' }}>
      
        <figure style={{ margin: '0', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '34px 32px', display: 'flex', flexDirection: 'column', gap: '24px', minHeight: '300px' }}>
          <span className="disp" style={{ fontSize: '60px', lineHeight: '.6', color: 'var(--kpx-dark-muted, #A9B6AE)', WebkitTextStroke: '2px var(--kpx-text-main, #0C1410)', fontWeight: '700' }} aria-hidden="true">“</span>
          <blockquote style={{ margin: '0', fontSize: '20px', lineHeight: '1.45', fontWeight: '500', textWrap: 'pretty' }}>[CLIENT QUOTE: one or two sentences about the result they got]</blockquote>
          <figcaption style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--kpx-stage-bg, #E3EAD9)', border: '1.5px dashed #9AA593' }}></span>
            <span style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: '700' }}>[CLIENT NAME]</span><span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>[ROLE · COMPANY]</span></span>
          </figcaption>
        </figure>
      
        <figure style={{ margin: '0', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '34px 32px', display: 'flex', flexDirection: 'column', gap: '24px', minHeight: '300px' }}>
          <span className="disp" style={{ fontSize: '60px', lineHeight: '.6', color: 'var(--kpx-dark-muted, #A9B6AE)', WebkitTextStroke: '2px var(--kpx-text-main, #0C1410)', fontWeight: '700' }} aria-hidden="true">“</span>
          <blockquote style={{ margin: '0', fontSize: '20px', lineHeight: '1.45', fontWeight: '500', textWrap: 'pretty' }}>[CLIENT QUOTE: one or two sentences about the result they got]</blockquote>
          <figcaption style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--kpx-stage-bg, #E3EAD9)', border: '1.5px dashed #9AA593' }}></span>
            <span style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: '700' }}>[CLIENT NAME]</span><span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>[ROLE · COMPANY]</span></span>
          </figcaption>
        </figure>
      
        <figure style={{ margin: '0', background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)', borderRadius: '28px', padding: '34px 32px', display: 'flex', flexDirection: 'column', gap: '24px', minHeight: '300px' }}>
          <span className="disp" style={{ fontSize: '60px', lineHeight: '.6', color: 'var(--kpx-dark-muted, #A9B6AE)', WebkitTextStroke: '2px var(--kpx-text-main, #0C1410)', fontWeight: '700' }} aria-hidden="true">“</span>
          <blockquote style={{ margin: '0', fontSize: '20px', lineHeight: '1.45', fontWeight: '500', textWrap: 'pretty' }}>[CLIENT QUOTE: one or two sentences about the result they got]</blockquote>
          <figcaption style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--kpx-stage-bg, #E3EAD9)', border: '1.5px dashed #9AA593' }}></span>
            <span style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontWeight: '700' }}>[CLIENT NAME]</span><span className="mono" style={{ fontSize: '12.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>[ROLE · COMPANY]</span></span>
          </figcaption>
        </figure>
      
    </div>
  </div>
</section>
  );
}
