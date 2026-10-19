'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { caseStudies } from '@/lib/case-studies-data';

type Child = { label: string; href: string; hint?: string };
type Item = { label: string; href: string; match: string; children?: Child[] };

const NAV: Item[] = [
  {
    label: 'Services',
    href: '/services',
    match: '/services',
    children: [
      { label: 'Web applications', href: '/services#svc-web', hint: 'React, Next.js, design systems' },
      { label: 'Mobile apps', href: '/services#svc-mobile', hint: 'iOS & Android with React Native' },
      { label: 'Backend & APIs', href: '/services#svc-backend', hint: 'Go, Node.js, .NET, PostgreSQL' },
      { label: 'AI & automation', href: '/services#svc-ai', hint: 'LLM apps, agents, workflows' },
      { label: 'DevOps & hosting', href: '/services#svc-devops', hint: 'CI/CD, servers, monitoring' },
      { label: 'All services', href: '/services' },
    ],
  },
  {
    label: 'Work',
    href: '/#work',
    match: '/case-studies',
    children: [
      ...caseStudies.map((c) => ({ label: c.title, href: `/case-studies/${c.id}`, hint: c.category === 'web' ? 'Web app' : 'Mobile app' })),
      { label: 'All work', href: '/#work' },
    ],
  },
  { label: 'Technologies', href: '/technologies', match: '/technologies' },
  {
    label: 'Company',
    href: '/about-us',
    match: '/about-us',
    children: [
      { label: 'About us', href: '/about-us', hint: 'Who we are and how we work' },
      { label: 'Our team', href: '/about-us#team' },
      { label: 'How we deliver', href: '/#process' },
      { label: 'Careers', href: '/#careers' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const show = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMenu(label);
  };
  const hide = () => {
    closeTimer.current = window.setTimeout(() => setMenu(null), 120);
  };

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
          {NAV.map((i) => {
            const active = pathname === i.match || pathname.startsWith(i.match + '/');
            return (
              <div
                key={i.label}
                className="kx-dd"
                onMouseEnter={() => i.children && show(i.label)}
                onMouseLeave={hide}
                onFocus={() => i.children && show(i.label)}
                onBlur={hide}
              >
                <Link className={`nav-a${active ? ' cur' : ''}`} href={i.href} aria-haspopup={i.children ? 'true' : undefined} aria-expanded={i.children ? menu === i.label : undefined}>
                  {i.label}
                  {i.children && (
                    <svg className="kx-caret" data-open={menu === i.label} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>
                {i.children && (
                  <div className="kx-dd-panel" data-open={menu === i.label} role="menu">
                    {i.children.map((c) => (
                      <Link key={c.label} href={c.href} role="menuitem" className="kx-dd-item" onClick={() => setMenu(null)}>
                        <strong>{c.label}</strong>
                        {c.hint && <span>{c.hint}</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="kx-nav-cta">
          <Link href="/#contact" className="btn btn-ink kx-nav-btn">
            Book a call
          </Link>
          <button type="button" className="kx-nav-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span data-open={open} />
            <span data-open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="kx-nav-sheet wrap">
          {NAV.map((i) => (
            <div key={i.label}>
              <div className="kx-sheet-row">
                <Link href={i.href} className="disp" onClick={() => setOpen(false)}>
                  {i.label}
                </Link>
                {i.children && (
                  <button type="button" aria-label={`Toggle ${i.label}`} onClick={() => setMobileOpen(mobileOpen === i.label ? null : i.label)}>
                    <svg className="kx-caret" data-open={mobileOpen === i.label} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                )}
              </div>
              {i.children && mobileOpen === i.label && (
                <div className="kx-sheet-sub">
                  {i.children.map((c) => (
                    <Link key={c.label} href={c.href} onClick={() => setOpen(false)}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-ink">
            Book a call
          </Link>
        </div>
      )}
    </header>
  );
}
