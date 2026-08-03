import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import UseCasesSection from '@/components/UseCasesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TechStackSection from '@/components/TechStackSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import WaitlistSection from '@/components/WaitlistSection'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'
import { ImagePreviewProvider } from '@/components/ImagePreviewModal'
import { ToastProvider } from '@/components/Toast'

export default function HomePage() {
  return (
    <ToastProvider>
      <ImagePreviewProvider>
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <UseCasesSection />
          <HowItWorksSection />
          <TechStackSection />
          <PricingSection />
          <FAQSection />
          <DownloadSection />
          {/* <WaitlistSection /> */}
        </main>
        <Footer />
      </ImagePreviewProvider>
    </ToastProvider>
  )
}
