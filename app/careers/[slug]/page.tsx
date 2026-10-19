import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/layout/SiteShell';
import { getJobBySlug } from '@/lib/jobs';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const job = await getJobBySlug((await params).slug);
  return job ? { title: `${job.title} | Careers | KompileX`, description: job.summary || job.description.slice(0, 150) } : {};
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const job = await getJobBySlug((await params).slug);
  if (!job) notFound();
  const mail = `mailto:${job.applyEmail}?subject=${encodeURIComponent(`Application: ${job.title}`)}`;

  return (
    <SiteShell>
      <section className="sec" style={{ paddingTop: 48, paddingBottom: 32 }}>
        <div className="wrap">
          <Link href="/careers" style={{ fontWeight: 600 }}>← All roles</Link>
          <h1 className="disp rise" style={{ marginTop: 28, fontSize: 'clamp(36px,5.4vw,76px)', lineHeight: 1, fontWeight: 700, maxWidth: 900, textWrap: 'balance' }}>
            {job.title}
          </h1>
          <div className="kx-job-tags" style={{ marginTop: 22 }}>
            <span className="tag">{job.department}</span>
            <span className="tag">{job.location}</span>
            <span className="tag">{job.type}</span>
            <span className="tag">{job.level}</span>
            {job.status === 'closed' && <span className="tag">Closed</span>}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 40px 96px' }}>
        <div className="wrap kx-legal">
          <div className="kx-legal-body">
            <article style={{ borderTop: 0, paddingTop: 0 }}>
              <h2 className="disp">About the role</h2>
              {job.description.split(/\n{2,}|\n/).filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
            </article>
            {job.responsibilities.length > 0 && (
              <article>
                <h2 className="disp">What you will do</h2>
                <ul>{job.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>
              </article>
            )}
            {job.requirements.length > 0 && (
              <article>
                <h2 className="disp">What we are looking for</h2>
                <ul>{job.requirements.map((r) => <li key={r}>{r}</li>)}</ul>
              </article>
            )}
          </div>
          <aside className="kx-legal-toc">
            <p className="mono">Apply</p>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--kpx-text-muted, #4A5650)', marginBottom: 16 }}>
              Send your CV and a few lines about your best work.
            </p>
            {job.status === 'open' ? (
              <a className="btn btn-ink" href={mail} style={{ width: '100%' }}>Apply by email</a>
            ) : (
              <p style={{ fontWeight: 600 }}>This position is closed.</p>
            )}
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
