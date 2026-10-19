'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Briefcase, ExternalLink, LogOut, Palette } from 'lucide-react';

const TABS = [
  { href: '/admin', label: 'Theme & colors', icon: Palette },
  { href: '/admin/jobs', label: 'Careers', icon: Briefcase },
];

// Neutral chrome that does not change when the site theme is edited.
export default function AdminShell({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#F4F5F3] text-[#101612] font-sans">
      <header className="sticky top-0 z-40 border-b border-[#E1E4DE] bg-white/90 backdrop-blur">
        <div className={`mx-auto flex items-center gap-6 px-5 h-16 ${wide ? 'max-w-[1700px]' : 'max-w-5xl'}`}>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-[#101612] text-[13px] font-bold text-[#C8F53C]">KX</span>
            <span className="font-bold leading-tight">
              Admin
              <span className="block text-[11px] font-medium text-[#6B746D]">KompileX</span>
            </span>
          </div>
          <nav className="flex items-center gap-1">
            {TABS.map((t) => {
              const active = t.href === '/admin' ? pathname === '/admin' : pathname.startsWith(t.href);
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${active ? 'bg-[#101612] text-white' : 'text-[#4A534C] hover:bg-[#EDEFEA]'}`}
                >
                  <t.icon className="size-4" />
                  {t.label}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/" target="_blank" className="flex items-center gap-1.5 rounded-full border border-[#E1E4DE] px-3.5 py-2 text-sm font-semibold hover:bg-[#EDEFEA]">
              <ExternalLink className="size-3.5" /> View site
            </Link>
            <button onClick={logout} className="flex items-center gap-1.5 rounded-full border border-[#E1E4DE] px-3.5 py-2 text-sm font-semibold hover:bg-[#EDEFEA]">
              <LogOut className="size-3.5" /> Log out
            </button>
          </div>
        </div>
      </header>
      <main className={`mx-auto px-5 py-6 ${wide ? 'max-w-[1700px]' : 'max-w-5xl'}`}>{children}</main>
    </div>
  );
}
