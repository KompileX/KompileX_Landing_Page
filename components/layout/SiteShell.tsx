import React from 'react';
import AuroraBackground from '@/components/effects/AuroraBackground';
import ScrollProgress from '@/components/effects/ScrollProgress';
import SmoothScroll from '@/components/effects/SmoothScroll';
import Navbar from './Navbar';
import Footer from './Footer';

// Shared frame for every public page: ambient background, sticky navbar, footer.
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <SmoothScroll />
      <div className="exact-home-container kx-page">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
