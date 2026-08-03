import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import { Toaster } from 'sonner'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://cortify.ai'),
  title: 'Cortify — Elevate Every Conversation with AI-Powered Insights',
  description:
    'Real-time transcription, intelligent analysis, and conversational mastery—all in one powerful desktop app. Analyze meetings, train with AI, detect persuasion techniques.',
  keywords:
    'AI transcription software, real-time conversation analysis, meeting transcription app, debate analysis tool, fact-checking software, sales call analyzer, AI communication coach',
  openGraph: {
    type: 'website',
    url: 'https://cortify.ai',
    title: 'Cortify — Elevate Every Conversation with AI-Powered Insights',
    description:
      'Real-time transcription, intelligent analysis, and conversational mastery—all in one powerful desktop app.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/images/cortify.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geist.className} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
