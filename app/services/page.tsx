import SiteShell from '@/components/layout/SiteShell';
import ServicesPage from '@/components/pages/ServicesPage';

export const metadata = { title: 'Services | KompileX', description: 'Web, mobile, backend, AI, DevOps and design services from one senior engineering team.' };

export default function Page() {
  return (
    <SiteShell>
      <ServicesPage />
    </SiteShell>
  );
}
