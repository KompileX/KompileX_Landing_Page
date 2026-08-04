import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import FeaturesSection from '@/components/FeaturesSection'
import StackSection from '@/components/StackSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TechStackSection from '@/components/TechStackSection'
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
          <FeaturesSection />
          <StackSection />
          <HowItWorksSection />
          <TechStackSection />
          <UseCasesSection />
          <FAQSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </ToastProvider>
  )
}
