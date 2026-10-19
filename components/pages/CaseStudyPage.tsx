import React from 'react';
import Link from 'next/link';
import { caseStudies, type CaseStudy } from '@/lib/case-studies-data';

const PALETTE: Record<string, { bg: string; ac: string }> = {
  commerceos: { bg: '#DCE6D0', ac: '#C8F53C' },
  'social-engagement-platform': { bg: '#0C1410', ac: '#C8F53C' },
  'vaultx-security': { bg: '#E4E1F2', ac: '#0C1410' },
  'carepulse-health': { bg: '#CFE7E0', ac: '#1FB36B' },
  'flowline-crm': { bg: '#F3E3D3', ac: '#0C1410' },
  'zenith-pay': { bg: '#C8F53C', ac: '#0C1410' },
};

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const pal = PALETTE[study.id] ?? { bg: '#E3EAD9', ac: '#C8F53C' };
  const dark = pal.bg === '#0C1410';
  const idx = caseStudies.findIndex((c) => c.id === study.id);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const image = study.images.find((i) => i.startsWith('/'));
  const [first, ...rest] = study.title.split(' ');

  return (
    <>
      <section className="sec" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="wrap">
          <Link href="/#work" className="back" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}><Arrow /></span>
            Back to work
          </Link>
          <div className="rise" style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
            <span className="mono" style={{ height: 32, padding: '0 14px', borderRadius: 999, background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-dark-muted, #A9B6AE)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center' }}>
              {study.category === 'web' ? 'Web app' : 'Mobile app'}
            </span>
            <span className="mono" style={{ fontSize: 13, letterSpacing: '.08em', color: 'var(--kpx-text-muted, #4A5650)' }}>{study.timeline}</span>
          </div>
          <h1 className="disp rise" style={{ animationDelay: '.08s', marginTop: 20, fontSize: 'clamp(40px,6.4vw,98px)', lineHeight: 0.95, fontWeight: 700 }}>
            {first} <span className="hl">{rest.join(' ') || ''}</span>
          </h1>
          <p className="rise" style={{ animationDelay: '.18s', marginTop: 24, fontSize: 'clamp(18px,1.8vw,24px)', lineHeight: 1.4, color: 'var(--kpx-text-muted, #4A5650)', maxWidth: 760, textWrap: 'pretty' }}>
            {study.tagline}
          </p>
        </div>
      </section>

      <section style={{ padding: '0 40px' }}>
        <div className="wrap">
          <div className="rise" style={{ animationDelay: '.26s', position: 'relative', minHeight: 'clamp(300px,46vw,560px)', borderRadius: 40, background: pal.bg, display: 'grid', placeItems: 'center', overflow: 'hidden', padding: 'clamp(20px,4vw,56px)' }}>
            <div style={{ width: 'min(100%,980px)', borderRadius: 20, background: '#fff', border: '1px solid var(--kpx-border-strong, #CBD2C3)', boxShadow: '0 40px 80px -30px rgba(12,20,16,.35)', overflow: 'hidden' }}>
              <div style={{ height: 44, borderBottom: '1px solid var(--kpx-border-subtle, #E4E8DD)', display: 'flex', alignItems: 'center', gap: 8, padding: '0 16px' }}>
                {[0, 1, 2].map((i) => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--kpx-border, #D8DDD2)' }} />)}
                <span className="mono" style={{ marginLeft: 12, height: 24, padding: '0 12px', borderRadius: 999, background: '#F1F4EC', fontSize: 11.5, color: '#4A5650', display: 'inline-flex', alignItems: 'center' }}>
                  {study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.app
                </span>
              </div>
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={image} alt={`${study.title} screenshot`} style={{ display: 'block', width: '100%', height: 'auto' }} />
              ) : (
                <div style={{ height: 'clamp(220px,32vw,420px)', display: 'grid', gridTemplateColumns: '180px 1fr', background: 'var(--kpx-bg-page, #F4F6F1)' }}>
                  <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10, borderRight: '1px solid var(--kpx-border-subtle, #E4E8DD)' }}>
                    <div style={{ height: 34, borderRadius: 10, background: pal.ac }} />
                    {[0, 1, 2, 3].map((i) => <div key={i} style={{ height: 34, borderRadius: 10, background: 'var(--kpx-border-subtle, #E4E8DD)' }} />)}
                  </div>
                  <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div style={{ height: 26, width: '38%', borderRadius: 8, background: '#0C1410' }} />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                      {[0, 1, 2].map((i) => <div key={i} style={{ height: 78, borderRadius: 14, background: i === 1 ? pal.ac : '#fff', border: '1px solid var(--kpx-border, #D8DDD2)' }} />)}
                    </div>
                    <div style={{ flex: 1, borderRadius: 14, background: '#fff', border: '1px solid var(--kpx-border, #D8DDD2)' }} />
                  </div>
                </div>
              )}
            </div>
            <span className="mono" style={{ position: 'absolute', left: 22, bottom: 16, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: dark ? '#A9B6AE' : '#4A5650' }}>
              {study.highlight}
            </span>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 72, paddingBottom: 40 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap: 24 }}>
          {[
            ['Client', study.client],
            ['Our role', study.role],
            ['Timeline', study.timeline],
            ['Type', study.categoryLabel],
          ].map(([k, v]) => (
            <div key={k} style={{ borderTop: '1px solid var(--kpx-border-strong, #CBD2C3)', paddingTop: 16 }}>
              <p className="mono" style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>{k}</p>
              <p style={{ marginTop: 8, fontSize: 17, fontWeight: 600, lineHeight: 1.35 }}>{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(380px,100%),1fr))', gap: 56 }}>
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="h2" style={{ marginTop: 14 }}>What we built.</h2>
            <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.6, color: 'var(--kpx-text-muted, #4A5650)' }}>{study.overview}</p>
            <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {study.techStack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Key features</p>
            <ul style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14, listStyle: 'none' }}>
              {study.keyFeatures.map((f) => (
                <li key={f} style={{ display: 'flex', gap: 12, fontSize: 16, lineHeight: 1.5 }}>
                  <span style={{ flex: 'none', width: 22, height: 22, marginTop: 2, borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', display: 'grid', placeItems: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C1410" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 40px 96px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: 20 }}>
          {[
            ['Challenge', study.challenge, false],
            ['Solution', study.solution, false],
            ['Outcome', study.outcome, true],
          ].map(([k, v, hi]) => (
            <div key={k as string} style={{ padding: 32, borderRadius: 28, background: hi ? 'var(--kpx-accent-lime, #C8F53C)' : 'var(--kpx-surface, #fff)', color: hi ? '#0C1410' : undefined, border: '1px solid var(--kpx-border, #D8DDD2)' }}>
              <p className="mono" style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', opacity: 0.7 }}>{k as string}</p>
              <p style={{ marginTop: 14, fontSize: 17, lineHeight: 1.55 }}>{v as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 40px 96px' }}>
        <div className="wrap">
          <Link href={`/case-studies/${next.id}`} className="card" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '36px 40px', borderRadius: 32, background: 'var(--kpx-text-main, #0C1410)', color: 'var(--kpx-bg-page, #F4F6F1)' }}>
            <div>
              <p className="mono" style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>Next project</p>
              <p className="disp" style={{ marginTop: 8, fontSize: 'clamp(28px,3.6vw,48px)', fontWeight: 700 }}>{next.title}</p>
            </div>
            <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--kpx-accent-lime, #C8F53C)', color: '#0C1410', display: 'grid', placeItems: 'center' }}><Arrow /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
