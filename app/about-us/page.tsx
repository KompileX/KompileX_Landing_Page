import SiteShell from '@/components/layout/SiteShell';
import AboutPage from '@/components/pages/AboutPage';

export const metadata = { title: 'About Us | KompileX', description: 'The people, principles and process behind KompileX.' };

export default function Page() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
