import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import { Toaster } from 'sonner'

const laghino = localFont({
  src: '../public/fonts/Laghino-Regular.otf',
  variable: '--font-laghino',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kompilex.ai'),
  title: 'KompileX | Elevate Every Conversation with AI-Powered Insights',
  description:
    'Real-time transcription, intelligent analysis, and conversational mastery, all in one powerful desktop app. Analyze meetings, train with AI, detect persuasion techniques.',
  keywords:
    'AI transcription software, real-time conversation analysis, meeting transcription app, debate analysis tool, fact-checking software, sales call analyzer, AI communication coach',
  openGraph: {
    type: 'website',
    url: 'https://kompilex.ai',
    title: 'KompileX | Elevate Every Conversation with AI-Powered Insights',
    description:
      'Real-time transcription, intelligent analysis, and conversational mastery, all in one powerful desktop app.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/images/kompilex-light.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/images/kompilex-dark.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: '/images/kompilex-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/kompilex-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/images/kompilex-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/kompilex-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${laghino.variable} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
