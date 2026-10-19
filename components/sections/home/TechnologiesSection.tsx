'use client';

import React, { useState } from 'react';
import { CATEGORIES, TOOLS, type Category } from '@/lib/content/technologies';

export default function TechnologiesSection() {
  const [cat, setCat] = useState<Category | 'All'>('All');
  const list = TOOLS.filter((t) => cat === 'All' || t.cat === cat);
  const count = (c: Category) => TOOLS.filter((t) => t.cat === c).length;

  return (
    <section id="stack" className="sec">
      <div className="wrap">
        <p className="eyebrow">Technologies</p>
        <h2 className="h2" style={{ marginTop: 16, maxWidth: 820 }}>The tools we build and run with.</h2>
        <div className="kx-chips" role="group" aria-label="Filter technologies">
          {(['All', ...CATEGORIES] as const).map((c) => (
            <button key={c} type="button" className={`chip${cat === c ? ' on' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}
              <span className="ct">{c === 'All' ? TOOLS.length : count(c)}</span>
            </button>
          ))}
        </div>
        <div className="kx-tiles">
          {list.map((t) => (
            <div key={t.name} className="kx-tile">
              <span className="kx-tile-ico">
                {t.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={`/tech/${t.icon}.svg`} alt="" width={30} height={30} loading="lazy" />
                ) : (
                  <b className="disp">{t.name.slice(0, 2)}</b>
                )}
              </span>
              <span className="kx-tile-txt">
                <strong>{t.name}</strong>
                <em className="mono">{t.cat}</em>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
