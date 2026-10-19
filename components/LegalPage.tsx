'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; heading?: string; items: string[] }
  | { type: 'callout'; title: string; text: string };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  effectiveDate: string;
  updatedDate: string;
  intro: string;
  sections: LegalSection[];
  email: string;
};

const pad = (n: number) => String(n).padStart(2, '0');

export default function LegalPage({ eyebrow, title, tagline, effectiveDate, updatedDate, intro, sections, email }: LegalPageProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: '-20% 0px -70% 0px' },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  return (
    <>
      <section className="sec" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="wrap">
          <p className="eyebrow">{eyebrow.replace(/^\/\s*/, '')}</p>
          <h1 className="disp rise" style={{ marginTop: 18, fontSize: 'clamp(40px,6vw,84px)', lineHeight: 0.98, fontWeight: 700, maxWidth: 900, textWrap: 'balance' }}>
            {title}
          </h1>
          <p className="rise" style={{ animationDelay: '.1s', marginTop: 22, fontSize: 'clamp(18px,1.8vw,22px)', lineHeight: 1.45, color: 'var(--kpx-text-muted, #4A5650)', maxWidth: 720, textWrap: 'pretty' }}>
            {tagline}
          </p>
          <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <span className="tag">Effective {effectiveDate}</span>
            <span className="tag">Updated {updatedDate}</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 40px 96px' }}>
        <div className="wrap kx-legal">
          <aside className="kx-legal-toc" aria-label="On this page">
            <p className="mono">On this page</p>
            <nav>
              {sections.map((s, i) => (
                <a key={s.id} href={`#${s.id}`} data-active={activeId === s.id}>
                  <span className="mono">{pad(i + 1)}</span>
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="kx-legal-body">
            <p className="kx-legal-intro">{intro}</p>
            {sections.map((s, i) => (
              <article key={s.id} id={s.id}>
                <h2 className="disp">
                  <span className="mono">{pad(i + 1)}</span>
                  {s.title}
                </h2>
                {s.blocks.map((b, j) => {
                  if (b.type === 'paragraph') return <p key={j}>{b.text}</p>;
                  if (b.type === 'list')
                    return (
                      <div key={j}>
                        {b.heading && <h3>{b.heading}</h3>}
                        <ul>
                          {b.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  return (
                    <div key={j} className="kx-legal-callout">
                      <strong>{b.title}</strong>
                      <p>{b.text}</p>
                    </div>
                  );
                })}
              </article>
            ))}

            <div className="kx-legal-contact">
              <p className="disp">Questions about this page?</p>
              <a className="btn btn-ink" href={`mailto:${email}`}>Email {email}</a>
              <Link href="/" className="flink-dark">Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
