'use client';

import React from 'react';

export default function InsightsSection() {
  return (
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
  );
}
