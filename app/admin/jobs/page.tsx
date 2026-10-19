'use client';

import React, { useCallback, useEffect, useState } from 'react';
import AdminShell from '@/components/admin/AdminShell';
import { Plus, Trash2, Pencil, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import type { Job } from '@/lib/jobs';

type Form = {
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  summary: string;
  description: string;
  responsibilities: string;
  requirements: string;
  applyEmail: string;
  status: 'open' | 'closed';
};

const EMPTY: Form = {
  title: '',
  department: 'Engineering',
  location: 'Remote',
  type: 'Full-time',
  level: 'Mid-level',
  summary: '',
  description: '',
  responsibilities: '',
  requirements: '',
  applyEmail: 'contact@kompilex.com',
  status: 'open',
};

const TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship'];
const LEVELS = ['Intern', 'Junior', 'Mid-level', 'Senior', 'Lead'];

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [form, setForm] = useState<Form>(EMPTY);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/jobs', { cache: 'no-store' });
    if (res.ok) setJobs((await res.json()).jobs);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  const edit = (j: Job) => {
    setEditingId(j.id);
    setForm({
      title: j.title,
      department: j.department,
      location: j.location,
      type: j.type,
      level: j.level,
      summary: j.summary,
      description: j.description,
      responsibilities: j.responsibilities.join('\n'),
      requirements: j.requirements.join('\n'),
      applyEmail: j.applyEmail,
      status: j.status,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reset = () => {
    setEditingId(null);
    setForm(EMPTY);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const res = await fetch(editingId ? `/api/admin/jobs/${editingId}` : '/api/admin/jobs', {
      method: editingId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setBusy(false);
    if (!res.ok) {
      toast.error((await res.json().catch(() => ({}))).error || 'Could not save the job.');
      return;
    }
    toast.success(editingId ? 'Job updated' : 'Job posted');
    reset();
    load();
  };

  const toggle = async (j: Job) => {
    const res = await fetch(`/api/admin/jobs/${j.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...j,
        responsibilities: j.responsibilities.join('\n'),
        requirements: j.requirements.join('\n'),
        status: j.status === 'open' ? 'closed' : 'open',
      }),
    });
    if (res.ok) {
      toast.success(j.status === 'open' ? 'Job closed' : 'Job reopened');
      load();
    }
  };

  const remove = async (j: Job) => {
    if (!confirm(`Delete "${j.title}"? This cannot be undone.`)) return;
    const res = await fetch(`/api/admin/jobs/${j.id}`, { method: 'DELETE' });
    if (res.ok) {
      toast.success('Job deleted');
      if (editingId === j.id) reset();
      load();
    }
  };

  const input = 'w-full rounded-xl border px-3.5 py-2.5 text-[15px] bg-white outline-none focus:border-[var(--kpx-accent-emerald)]';
  const label = 'block text-[13px] font-semibold mb-1.5';

  return (
    <AdminShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold">Careers</h1>
            <p className="text-sm text-[#6B746D]">Post, edit and close job openings. Open roles appear on the public Careers page.</p>
          </div>
          <a href="/careers" target="_blank" rel="noreferrer" className="text-sm font-semibold underline underline-offset-4">View public page</a>
        </div>

        <form onSubmit={save} className="rounded-3xl border p-6 grid gap-4 sm:grid-cols-2" style={{ background: 'var(--kpx-surface)', borderColor: 'var(--kpx-border)' }}>
          <div className="sm:col-span-2 flex items-center justify-between">
            <h2 className="text-lg font-bold">{editingId ? 'Edit job' : 'Post a new job'}</h2>
            {editingId && (
              <button type="button" onClick={reset} className="text-sm font-semibold underline">
                Cancel editing
              </button>
            )}
          </div>
          <div className="sm:col-span-2">
            <label className={label}>Job title *</label>
            <input className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="Senior Backend Engineer" required />
          </div>
          <div>
            <label className={label}>Department</label>
            <input className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.department} onChange={(e) => set('department', e.target.value)} />
          </div>
          <div>
            <label className={label}>Location</label>
            <input className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.location} onChange={(e) => set('location', e.target.value)} />
          </div>
          <div>
            <label className={label}>Employment type</label>
            <select className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.type} onChange={(e) => set('type', e.target.value)}>
              {TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className={label}>Level</label>
            <select className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.level} onChange={(e) => set('level', e.target.value)}>
              {LEVELS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={label}>Short summary (shown on the list)</label>
            <input className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.summary} onChange={(e) => set('summary', e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className={label}>About the role *</label>
            <textarea rows={5} className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.description} onChange={(e) => set('description', e.target.value)} required />
          </div>
          <div>
            <label className={label}>Responsibilities (one per line)</label>
            <textarea rows={6} className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.responsibilities} onChange={(e) => set('responsibilities', e.target.value)} />
          </div>
          <div>
            <label className={label}>Requirements (one per line)</label>
            <textarea rows={6} className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.requirements} onChange={(e) => set('requirements', e.target.value)} />
          </div>
          <div>
            <label className={label}>Apply email</label>
            <input type="email" className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.applyEmail} onChange={(e) => set('applyEmail', e.target.value)} />
          </div>
          <div>
            <label className={label}>Status</label>
            <select className={input} style={{ borderColor: 'var(--kpx-border)' }} value={form.status} onChange={(e) => set('status', e.target.value as 'open' | 'closed')}>
              <option value="open">Open (visible)</option>
              <option value="closed">Closed (hidden)</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <button type="submit" disabled={busy} className="btn btn-ink">
              <Plus className="size-4" /> {busy ? 'Saving…' : editingId ? 'Save changes' : 'Publish job'}
            </button>
          </div>
        </form>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">All postings ({jobs.length})</h2>
          {jobs.length === 0 && <p className="text-sm opacity-70">No jobs yet. Post the first one above.</p>}
          {jobs.map((j) => (
            <div key={j.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4" style={{ background: 'var(--kpx-surface)', borderColor: 'var(--kpx-border)' }}>
              <div>
                <p className="font-bold">{j.title}</p>
                <p className="text-sm opacity-70">
                  {j.department} · {j.location} · {j.type} · {j.level}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider" style={{ background: j.status === 'open' ? 'var(--kpx-accent-lime)' : 'var(--kpx-surface-soft)' }}>
                  {j.status}
                </span>
                <button onClick={() => toggle(j)} title={j.status === 'open' ? 'Close' : 'Reopen'} className="rounded-lg border p-2" style={{ borderColor: 'var(--kpx-border)' }}>
                  {j.status === 'open' ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
                <button onClick={() => edit(j)} title="Edit" className="rounded-lg border p-2" style={{ borderColor: 'var(--kpx-border)' }}>
                  <Pencil className="size-4" />
                </button>
                <button onClick={() => remove(j)} title="Delete" className="rounded-lg border p-2 text-red-600" style={{ borderColor: 'var(--kpx-border)' }}>
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </AdminShell>
  );
}
