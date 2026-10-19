import React from 'react';

type Orb = { icon: string; name: string };
const INNER: Orb[] = [
  { icon: 'react', name: 'React' },
  { icon: 'nextjs', name: 'Next.js' },
  { icon: 'typescript', name: 'TypeScript' },
  { icon: 'nodejs', name: 'Node.js' },
];
const OUTER: Orb[] = [
  { icon: 'go', name: 'Go' },
  { icon: 'postgresql', name: 'PostgreSQL' },
  { icon: 'docker', name: 'Docker' },
  { icon: 'kubernetes', name: 'Kubernetes' },
  { icon: 'python', name: 'Python' },
  { icon: 'redis', name: 'Redis' },
];

function Ring({ items, cls }: { items: Orb[]; cls: string }) {
  return (
    <div className={`kx-ring ${cls}`}>
      {items.map((o, i) => (
        <span key={o.name} className="kx-ob" style={{ ['--a' as string]: `${(360 / items.length) * i}deg` }}>
          <span className="kx-ob-in" title={o.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/tech/${o.icon}.svg`} alt={o.name} />
          </span>
        </span>
      ))}
    </div>
  );
}

// Decorative "stack" graphic: real logos orbiting the KompileX mark.
export default function TechOrbit() {
  return (
    <div className="kx-orbit-wrap">
      <div className="kx-orbit">
        <Ring items={OUTER} cls="kx-ring-out" />
        <Ring items={INNER} cls="kx-ring-in" />
        <div className="kx-hub">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/kompilex-dark.png" alt="KompileX" />
        </div>
      </div>
    </div>
  );
}
