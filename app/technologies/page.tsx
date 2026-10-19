import SiteShell from '@/components/layout/SiteShell';
import TechnologiesPage from '@/components/pages/TechnologiesPage';

export const metadata = { title: 'Technologies | KompileX', description: 'The languages, frameworks and infrastructure KompileX builds and runs with.' };

export default function Page() {
  return (
    <SiteShell>
      <TechnologiesPage />
    </SiteShell>
  );
}
