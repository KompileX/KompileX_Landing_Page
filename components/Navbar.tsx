'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  if (typeof window !== 'undefined') {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border py-4 max-md:backdrop-blur-sm max-md:bg-background/90 md:border-none">
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* Floating pill */}
        <div className={`mx-auto flex max-w-2xl items-center justify-between md:rounded-xl md:border md:border-border md:bg-background/80 md:p-2.5 md:backdrop-blur-sm ${theme === 'light' ? 'md:shadow-[0_2px_16px_rgba(0,0,0,0.07)]' : ''}`}>

          {/* Logo */}
          <Link href="/" className="transition hover:opacity-80">
            <div className="inline-flex size-10 items-center justify-center rounded-lg border border-border transition hover:border-primary">
              <Image src="/images/cortify.svg" alt="Cortify" width={32} height={32} className="w-11 h-8" />
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

            {/* Join Waitlist */}
            {/* <a
              href="#waitlist"
              className="relative cursor-pointer rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 py-2 text-sm font-medium text-white shadow-[0px_0px_12px_#8c45ff]"
            >
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]" />
              </div>
              <span className="relative">Join Waitlist</span>
            </a> */}

            {/* Download */}
            <a
              href="#download"
              className="relative cursor-pointer rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 py-2 text-sm font-medium text-white shadow-[0px_0px_12px_#8c45ff]"
            >
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]" />
              </div>
              <span className="relative">Download</span>
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
