import AuroraBackground from '@/components/effects/AuroraBackground';
import ScrollProgress from '@/components/effects/ScrollProgress';
import Reveal from '@/components/effects/Reveal';
import SmoothScroll from '@/components/effects/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/home/HeroSection';
import TechMarqueeSection from '@/components/sections/home/TechMarqueeSection';
import StatsSection from '@/components/sections/home/StatsSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import EngagementSection from '@/components/sections/home/EngagementSection';
import ProcessSection from '@/components/sections/home/ProcessSection';
import DevOpsSection from '@/components/sections/home/DevOpsSection';
import WorkSection from '@/components/sections/home/WorkSection';
import TechnologiesSection from '@/components/sections/home/TechnologiesSection';
import TeamSection from '@/components/sections/home/TeamSection';
import WhyUsSection from '@/components/sections/home/WhyUsSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import InsightsSection from '@/components/sections/home/InsightsSection';
import CareersSection from '@/components/sections/home/CareersSection';
import FaqSection from '@/components/sections/home/FaqSection';
import ContactSection from '@/components/sections/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <SmoothScroll />
      <div className="exact-home-container kx-page">
      <Navbar />
      <HeroSection />
      <Reveal><TechMarqueeSection /></Reveal>
      <Reveal><StatsSection /></Reveal>
      <Reveal><ServicesSection /></Reveal>
      <Reveal><EngagementSection /></Reveal>
      <Reveal><ProcessSection /></Reveal>
      <Reveal><DevOpsSection /></Reveal>
      <Reveal><TechnologiesSection /></Reveal>
      <Reveal><WorkSection /></Reveal>
      <Reveal><WhyUsSection /></Reveal>
      <Reveal><TeamSection /></Reveal>
      <Reveal><TestimonialsSection /></Reveal>
      <Reveal><InsightsSection /></Reveal>
      <Reveal><CareersSection /></Reveal>
      <Reveal><FaqSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
      <Footer />
      </div>
    </>
  );
}
