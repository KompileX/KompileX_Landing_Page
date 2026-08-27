import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import AIChatWidget from '@/components/AIChatWidget'

export const metadata: Metadata = {
  title: 'About Us | KompileX Software Studio',
  description:
    'Meet the four specialist engineers behind KompileX. Learn about our team, our technical expertise, and how we build software that scales.',
}

export default function AboutUsPage() {
  return (
    <>
      {/* Curtain layout matching the main page. */}
      <div className="relative z-10 bg-background">
        <Navbar />
        <main className="pt-10 lg:pt-14">
          <AboutSection />
        </main>
      </div>
      <Footer />
      <AIChatWidget />
    </>
  )
}
