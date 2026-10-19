import SiteShell from '@/components/layout/SiteShell';
import Reveal from '@/components/effects/Reveal';
import HeroSection from '@/components/sections/home/HeroSection';
import TechMarqueeSection from '@/components/sections/home/TechMarqueeSection';
import StatsSection from '@/components/sections/home/StatsSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import EngagementSection from '@/components/sections/home/EngagementSection';
import ProcessSection from '@/components/sections/home/ProcessSection';
import DevOpsSection from '@/components/sections/home/DevOpsSection';
import WorkSection from '@/components/sections/home/WorkSection';
import WhyUsSection from '@/components/sections/home/WhyUsSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import InsightsSection from '@/components/sections/home/InsightsSection';
import CareersSection from '@/components/sections/home/CareersSection';
import FaqSection from '@/components/sections/home/FaqSection';
import ContactSection from '@/components/sections/home/ContactSection';

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <Reveal><TechMarqueeSection /></Reveal>
      <Reveal><StatsSection /></Reveal>
      <Reveal><ServicesSection /></Reveal>
      <Reveal><EngagementSection /></Reveal>
      <Reveal><ProcessSection /></Reveal>
      <Reveal><DevOpsSection /></Reveal>
      <Reveal><WorkSection /></Reveal>
      <Reveal><WhyUsSection /></Reveal>
      <Reveal><TestimonialsSection /></Reveal>
      <Reveal><InsightsSection /></Reveal>
      <Reveal><CareersSection /></Reveal>
      <Reveal><FaqSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
    </SiteShell>
  );
}
