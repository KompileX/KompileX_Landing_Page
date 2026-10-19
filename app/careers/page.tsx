import Link from 'next/link';
import SiteShell from '@/components/layout/SiteShell';
import { listJobs } from '@/lib/jobs';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Careers | KompileX',
  description: 'Join a small senior team that designs, builds, ships and runs software.',
};

const PERKS = [
  { t: 'Senior-only team', d: 'Work next to engineers who own products end to end. No layers, no hand-offs.' },
  { t: 'Remote-first', d: 'Work from wherever you do your best work, with real overlap for collaboration.' },
  { t: 'Ship real products', d: 'Your code reaches production and real users, from the first month.' },
  { t: 'Grow with the stack', d: 'Web, mobile, backend, AI and DevOps, all under one roof.' },
];

export default async function CareersPage() {
  const jobs = await listJobs({ onlyOpen: true });

  return (
    <SiteShell>
      <section className="sec" style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="wrap">
          <p className="eyebrow">Careers</p>
          <h1 className="disp rise" style={{ marginTop: 18, fontSize: 'clamp(40px,6vw,86px)', lineHeight: 0.98, fontWeight: 700, maxWidth: 940, textWrap: 'balance' }}>
            Build software that <span className="hl">ships</span>, with people who care.
          </h1>
          <p className="rise" style={{ animationDelay: '.1s', marginTop: 22, fontSize: 'clamp(18px,1.8vw,22px)', lineHeight: 1.5, color: 'var(--kpx-text-muted, #4A5650)', maxWidth: 700 }}>
            We are a small senior team. If you like owning problems from the first sketch to production, you will fit in.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 40px 72px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', gap: 16 }}>
          {PERKS.map((p) => (
            <div key={p.t} className="kx-habit">
              <h3 className="disp">{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="open-roles" style={{ padding: '0 40px 96px' }}>
        <div className="wrap">
          <p className="eyebrow">Open roles</p>
          <h2 className="h2" style={{ marginTop: 14 }}>{jobs.length ? `${jobs.length} open position${jobs.length > 1 ? 's' : ''}` : 'No open roles right now'}</h2>

          <div className="kx-jobs">
            {jobs.map((j) => (
              <Link key={j.id} href={`/careers/${j.slug}`} className="kx-job">
                <div>
                  <h3 className="disp">{j.title}</h3>
                  {j.summary && <p>{j.summary}</p>}
                  <div className="kx-job-tags">
                    <span className="tag">{j.department}</span>
                    <span className="tag">{j.location}</span>
                    <span className="tag">{j.type}</span>
                    <span className="tag">{j.level}</span>
                  </div>
                </div>
                <span className="kx-job-arrow" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="kx-legal-contact" style={{ marginTop: 40 }}>
            <p className="disp">Do not see your role?</p>
            <p style={{ flexBasis: '100%', color: 'var(--kpx-dark-muted, #A9B6AE)' }}>
              We are always happy to meet strong engineers and designers. Send us a short note and your work.
            </p>
            <a className="btn" href="mailto:contact@kompilex.com?subject=Open%20application">Send an open application</a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
