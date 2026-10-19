import { notFound } from 'next/navigation';
import SiteShell from '@/components/layout/SiteShell';
import CaseStudyPage from '@/components/pages/CaseStudyPage';
import { caseStudies, getCaseStudyById } from '@/lib/case-studies-data';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ id: study.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = getCaseStudyById(id);
  return study ? { title: `${study.title} | KompileX`, description: study.tagline } : {};
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = getCaseStudyById(id);
  if (!study) notFound();
  return (
    <SiteShell>
      <CaseStudyPage study={study} />
    </SiteShell>
  );
}
