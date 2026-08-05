import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import StackSection from '@/components/StackSection'
import HowItWorksSection from '@/components/WhyChooseUs'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import UseCasesSection from '@/components/UseCasesSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { ToastProvider } from '@/components/Toast'

export default function HomePage() {
  return (
    <ToastProvider>
      {/* Curtain: this block scrolls away over the fixed footer below it. */}
      <div className="relative z-10 bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <StackSection />
          <HowItWorksSection />
          <CaseStudiesSection />
          <UseCasesSection />
          <FAQSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </ToastProvider>
  )
}
