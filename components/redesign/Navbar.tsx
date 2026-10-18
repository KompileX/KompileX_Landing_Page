'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="pt-5 px-5 md:px-10">
      <div
        className="wrap flex items-center justify-between gap-5 h-[68px] px-3.5 md:px-5 rounded-full border transition-colors duration-200"
        style={{
          background: 'var(--kpx-surface)',
          borderColor: 'var(--kpx-border)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="KompileX home"
          className="flex items-center gap-2.5 group"
        >
          <span
            className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center transition-transform group-hover:scale-105"
            style={{
              background: 'var(--kpx-btn-ink-bg)',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--kpx-accent-lime)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
          <span className="disp text-[23px] font-bold tracking-tight">
            Kompile
            <span style={{ color: 'var(--kpx-accent-emerald)' }}>X</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links hidden md:flex items-center gap-8" aria-label="Primary">
          <Link className="nav-a" href="/about-us">
            About Us
          </Link>
          <Link className="nav-a" href="/services">
            Services
          </Link>
          <Link className="nav-a" href="/technologies">
            Technologies
          </Link>
          <Link className="nav-a" href="/#work">
            Work
          </Link>
          <Link className="nav-a" href="/#contact">
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/#contact"
            className="btn btn-ink h-[46px] px-5 text-[15px]"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-black/5"
            aria-label="Toggle navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-3 p-5 rounded-3xl border shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2"
          style={{
            background: 'var(--kpx-surface)',
            borderColor: 'var(--kpx-border)',
          }}
        >
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-1.5"
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-1.5"
            href="/services"
          >
            Services
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-1.5"
            href="/technologies"
          >
            Technologies
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-1.5"
            href="/#work"
          >
            Work
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-1.5"
            href="/#contact"
          >
            Contact
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-ink w-full justify-center mt-2"
            href="/#contact"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
