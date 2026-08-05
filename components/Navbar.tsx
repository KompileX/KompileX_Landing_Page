'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  if (typeof window !== 'undefined') {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
  }

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current

      if (currentY <= 24) {
        setScrolled(false)
      } else if (delta > 4) {
        // Scrolling down -> shrink to compact pill
        setScrolled(true)
      } else if (delta < -4) {
        // Scrolling up -> expand back to full width
        setScrolled(false)
      }

      lastScrollY.current = currentY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 max-lg:border-b max-lg:border-border max-lg:backdrop-blur-sm max-lg:bg-background/90 transition-all duration-[650ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        scrolled
          ? 'py-2 lg:bg-transparent lg:border-transparent'
          : 'py-4 lg:bg-transparent lg:border-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* Floating pill for desktop / header bar */}
        <div
          className={`mx-auto flex w-full items-center justify-between border border-transparent lg:backdrop-blur-md transition-all duration-[650ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-[max-width,margin,padding,border-radius,box-shadow] ${
            scrolled
              ? 'lg:max-w-3xl lg:mt-3 lg:rounded-2xl lg:border-border lg:bg-background/90 lg:p-2.5 lg:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.18)]'
              : 'lg:max-w-7xl lg:mt-0 lg:rounded-none lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none'
          } ${theme === 'light' && scrolled ? 'lg:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.1)]' : ''}`}
        >
          {/* Logo */}
          <Link href="/" className="transition hover:opacity-80">
            <div className="inline-flex size-10 items-center justify-center rounded-lg border border-border transition hover:border-primary">
              <Image src="/images/kompileX.svg" alt="KompileX" width={32} height={32} className="w-11 h-8" />
            </div>
          </Link>

          {/* Desktop nav links (visible >= 1025px) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme toggle */}
            <Button
              variant="outline"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="size-9 p-0 rounded-lg"
            >
              {theme === 'dark' ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </Button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="relative cursor-pointer rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 py-2 text-sm font-medium text-white shadow-[0px_0px_12px_#8c45ff]"
            >
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]" />
              </div>
              <span className="relative">Contact Us</span>
            </a>

            {/* Mobile hamburger (< 1025px) */}
            <Button
              variant="outline"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="size-9 p-0 rounded-lg lg:hidden"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet animated menu (< 1025px devices) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
            className={`fixed inset-x-0 top-[65px] z-40 flex h-[calc(100vh-65px)] flex-col items-center justify-center overflow-y-auto backdrop-blur-2xl border-b border-border/40 shadow-2xl lg:hidden ${
              theme === 'light' ? 'bg-white/95' : 'bg-[#131316]/95'
            }`}
          >
            <div className="flex w-full flex-col items-center justify-center text-center px-6 py-8">
              <div className="flex flex-col items-center gap-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60">/ Menu</p>
                <div className="flex flex-col items-center gap-5">
                  <a
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-semibold tracking-tight text-muted-foreground transition hover:text-foreground hover:scale-105"
                  >
                    Home
                  </a>
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-3xl font-semibold tracking-tight text-muted-foreground transition hover:text-foreground hover:scale-105"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
