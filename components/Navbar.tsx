'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

  if (typeof window !== 'undefined') {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 max-md:border-b max-md:border-border max-md:backdrop-blur-sm max-md:bg-background/90 transition-all duration-[650ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        scrolled
          ? 'py-2 md:bg-transparent md:border-transparent'
          : 'py-4 md:bg-background md:border-b md:border-border'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* Floating pill */}
        <div
          className={`mx-auto flex w-full items-center justify-between border border-transparent md:backdrop-blur-md transition-all duration-[650ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-[max-width,margin,padding,border-radius,box-shadow] ${
            scrolled
              ? 'md:max-w-3xl md:mt-3 md:rounded-2xl md:border-border md:bg-background/90 md:p-2.5 md:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.18)]'
              : 'md:max-w-7xl md:mt-0 md:rounded-none md:border-transparent md:bg-transparent md:p-0 md:shadow-none'
          } ${theme === 'light' && scrolled ? 'md:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.1)]' : ''}`}
        >

          {/* Logo */}
          <Link href="/" className="transition hover:opacity-80">
            <div className="inline-flex size-10 items-center justify-center rounded-lg border border-border transition hover:border-primary">
              <Image src="/images/kompilex.svg" alt="KompileX" width={32} height={32} className="w-11 h-8" />
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
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

            {/* Mobile hamburger */}
            <Button
              variant="outline"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="size-9 p-0 rounded-lg md:hidden"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[57px] h-[calc(100vh-57px)] overflow-y-auto bg-background/95 backdrop-blur md:hidden">
          <div className="flex flex-col gap-12 px-6 py-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-muted-foreground/60">Menu</p>
              <div className="flex flex-col gap-3">
                <a href="/" onClick={() => setMobileOpen(false)} className="text-2xl font-medium text-muted-foreground transition hover:text-foreground">Home</a>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-medium text-muted-foreground transition hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
