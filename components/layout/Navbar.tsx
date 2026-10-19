'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Services', href: '/#services', id: 'services' },
  { label: 'Work', href: '/#work', id: 'work' },
  { label: 'Process', href: '/#process', id: 'process' },
  { label: 'Technologies', href: '/#stack', id: 'stack' },
  { label: 'Team', href: '/#team', id: 'team' },
  { label: 'FAQ', href: '/#faq', id: 'faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const els = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="kx-nav" data-scrolled={scrolled} id="top">
      <div className="wrap kx-nav-bar">
        <Link href="/" aria-label="KompileX home" className="kx-nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/kompilex-light.png" alt="" width={52} height={32} className="kx-nav-mark" />
          <span className="disp kx-nav-word">
            Kompile<span style={{ color: 'var(--kpx-accent-emerald, #0A6B4A)' }}>X</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map((i) => (
            <Link key={i.id} className={`nav-a${active === i.id ? ' cur' : ''}`} href={i.href}>
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="kx-nav-cta">
          <Link href="/#contact" className="btn btn-ink kx-nav-btn">
            Book a call
          </Link>
          <button
            type="button"
            className="kx-nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span data-open={open} />
            <span data-open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="kx-nav-sheet wrap">
          {NAV_ITEMS.map((i) => (
            <Link key={i.id} href={i.href} onClick={() => setOpen(false)} className="disp">
              {i.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-ink">
            Book a call
          </Link>
        </div>
      )}
    </header>
  );
}
