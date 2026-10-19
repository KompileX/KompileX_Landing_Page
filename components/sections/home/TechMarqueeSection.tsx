import React from 'react';
import { TECH_ROW_ONE, TECH_ROW_TWO, type Tech } from '@/lib/content/tech';

function Row({ items, reverse }: { items: Tech[]; reverse?: boolean }) {
  // The list is rendered twice; the keyframe moves the track by -50% for a seamless loop.
  return (
    <div className="kx-tech-row" aria-hidden={reverse ? true : undefined}>
      <div className={`kx-tech-track${reverse ? ' kx-tech-rev' : ''}`}>
        {[...items, ...items].map((t, i) => (
          <span key={`${t.name}-${i}`} className="kx-tech-chip">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/tech/${t.icon}.svg`} alt="" width={26} height={26} loading="lazy" />
            <span>{t.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarqueeSection() {
  return (
    <section aria-label="Technologies we work with" className="kx-tech">
      <p className="eyebrow kx-tech-label">The stack we ship with</p>
      <Row items={TECH_ROW_ONE} />
      <Row items={TECH_ROW_TWO} reverse />
    </section>
  );
}
