import { caseStudies } from '@/lib/case-studies-data'
import CaseStudyDetailClient from '@/components/CaseStudyDetailClient'

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <CaseStudyDetailClient id={id} />
}
