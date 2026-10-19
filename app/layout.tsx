import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './redesign-exact.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ThemeCustomizerProvider } from '@/context/ThemeCustomizerContext';
import ThemeCustomizerFloating from '@/components/admin/ThemeCustomizerFloating';
import { Toaster } from 'sonner';
import AIChatWidget from '@/components/chat/AIChatWidget';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kompilex.ai'),
  title: 'KompileX | Software that ships. Scale your software without expanding your team.',
  description:
    'KompileX is a software company. We build intelligent applications that automate daily operations, then host, monitor and support them long after launch.',
  keywords:
    'KompileX, software development studio, custom web engineering, mobile product engineering, backend systems engineering, Next.js developer, React Native apps, Go backend development, software engineering agency, custom software development',
  openGraph: {
    type: 'website',
    url: 'https://kompilex.ai',
    title: 'KompileX | Software that ships. Scale your software without expanding your team.',
    description:
      'KompileX is a software company. We build intelligent applications that automate daily operations, then host, monitor and support them long after launch.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-[#C8F53C] selection:text-[#0C1410]">
        <ThemeProvider>
          <ThemeCustomizerProvider>
            {children}
            <ThemeCustomizerFloating />
            <AIChatWidget />
            <Toaster richColors position="top-right" />
          </ThemeCustomizerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
