import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import StackSection from '@/components/StackSection'
import HowItWorksSection from '@/components/WhyChooseUs'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
export default function HomePage() {
  return (
    <>
      {/* Curtain: this block scrolls away over the fixed footer below it. */}
      <div className="relative z-10 bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <StackSection />
          <HowItWorksSection />
          <CaseStudiesSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </>
  )
}
