'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.replace('/admin');
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Login failed.');
      setBusy(false);
    }
  };

  return (
    <main
      className="min-h-screen grid place-items-center px-5"
      style={{ background: 'var(--kpx-bg-page, #F4F6F1)', color: 'var(--kpx-text-main, #0C1410)' }}
    >
      <form
        onSubmit={submit}
        className="w-full max-w-[400px] p-8 rounded-[28px] border flex flex-col gap-5"
        style={{ background: 'var(--kpx-surface, #fff)', borderColor: 'var(--kpx-border, #D8DDD2)' }}
      >
        <div>
          <p className="eyebrow">Admin</p>
          <h1 className="disp mt-2 text-[28px] font-bold leading-tight">Sign in to customize the theme</h1>
        </div>
        <div className="field">
          <label htmlFor="pw">Password</label>
          <input
            id="pw"
            type="password"
            autoFocus
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p role="alert" className="text-sm" style={{ color: '#C0392B' }}>{error}</p>}
        <button type="submit" disabled={busy || !password} className="btn btn-ink w-full">
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
        <Link href="/" className="text-sm text-center opacity-70 hover:opacity-100">
          ← Back to site
        </Link>
      </form>
    </main>
  );
}
