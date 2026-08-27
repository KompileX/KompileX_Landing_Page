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
  title: 'KompileX | Premium Web, Mobile & Backend Software Development Studio',
  description:
    'A boutique software engineering studio building high-performance web applications, native mobile apps, robust backend systems, and custom business automation.',
  keywords:
    'KompileX, software development studio, custom web engineering, mobile product engineering, backend systems engineering, social media automation, Next.js developer, React Native apps, Go backend development, software engineering agency, KompileX Dhaka, custom software development',
  openGraph: {
    type: 'website',
    url: 'https://kompilex.ai',
    title: 'KompileX | Premium Web, Mobile & Backend Software Development Studio',
    description:
      'A boutique software engineering studio building high-performance web applications, native mobile apps, backend systems, and custom business automation.',
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
