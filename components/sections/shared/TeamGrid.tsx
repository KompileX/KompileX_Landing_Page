import React from 'react';
import { HABITS, TEAM } from '@/lib/content/team';

function initials(n: string) {
  return n.replace(/^Md\.?\s*/i, '').split(' ').map((p) => p[0]).slice(0, 2).join('');
}

export default function TeamGrid() {
  return (
    <section id="team" className="sec">
      <div className="wrap">
        <p className="eyebrow">The team</p>
        <h2 className="h2" style={{ marginTop: 16, maxWidth: 760 }}>The people who answer your messages.</h2>
        <div className="kx-team">
          {TEAM.map((m) => (
            <article key={m.name} className="kx-member">
              <div className="kx-member-photo">
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.photo} alt={m.name} loading="lazy" />
                ) : (
                  <span className="disp">{initials(m.name)}</span>
                )}
              </div>
              <div className="kx-member-body">
                <h3 className="disp">{m.name}</h3>
                <p className="kx-member-role">{m.role}</p>
                <ul>
                  {m.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="eyebrow" style={{ marginTop: 96 }}>How we operate</p>
        <h2 className="h2" style={{ marginTop: 16, maxWidth: 820 }}>Four habits behind every project.</h2>
        <div className="kx-habits">
          {HABITS.map((h, i) => (
            <div key={h.title} className="kx-habit">
              <span className="mono">0{i + 1}</span>
              <h3 className="disp">{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
