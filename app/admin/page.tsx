'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Copy, Download, Globe, Monitor, RotateCcw, Smartphone, Upload } from 'lucide-react';
import { toast } from 'sonner';
import AdminShell from '@/components/admin/AdminShell';
import { useThemeCustomizer } from '@/context/ThemeCustomizerContext';
import { THEME_PRESETS, DEFAULT_THEME_VARIABLES, type ThemeVariables } from '@/lib/theme-config';

type Field = { key: keyof ThemeVariables; label: string; hint?: string };
type Group = { id: string; title: string; description: string; fields: Field[] };

const GROUPS: Group[] = [
  {
    id: 'brand',
    title: 'Brand colors',
    description: 'The main accent colors used for highlights, links and markers.',
    fields: [
      { key: 'accentEmerald', label: 'Primary accent', hint: 'Links, eyebrow labels, active states' },
      { key: 'accentLime', label: 'Highlight accent', hint: 'Badges, icons, call-outs' },
      { key: 'highlightMarker', label: 'Text highlighter', hint: 'Underline behind key words in headings' },
      { key: 'accentLimeHover', label: 'Highlight hover' },
    ],
  },
  {
    id: 'page',
    title: 'Page & text',
    description: 'Background, cards, text and borders.',
    fields: [
      { key: 'bgPage', label: 'Page background' },
      { key: 'textMain', label: 'Main text' },
      { key: 'textMuted', label: 'Secondary text' },
      { key: 'surface', label: 'Card background' },
      { key: 'surfaceTint', label: 'Tinted surface' },
      { key: 'surfaceSoft', label: 'Chips & tags' },
      { key: 'borderMain', label: 'Border' },
      { key: 'borderLight', label: 'Strong border' },
    ],
  },
  {
    id: 'buttons',
    title: 'Buttons',
    description: 'Dark, lime and outline button styles.',
    fields: [
      { key: 'btnInkBg', label: 'Dark button' },
      { key: 'btnInkText', label: 'Dark button text' },
      { key: 'btnInkHoverBg', label: 'Dark button hover' },
      { key: 'btnLimeBg', label: 'Lime button' },
      { key: 'btnLimeText', label: 'Lime button text' },
      { key: 'btnLimeHoverBg', label: 'Lime button hover' },
      { key: 'btnLineBorder', label: 'Outline border' },
      { key: 'btnLineText', label: 'Outline text' },
      { key: 'btnLineHoverBg', label: 'Outline hover' },
      { key: 'btnLineHoverText', label: 'Outline hover text' },
    ],
  },
  {
    id: 'dark',
    title: 'Dark sections & footer',
    description: 'The DevOps block and the footer.',
    fields: [
      { key: 'darkBg', label: 'Background' },
      { key: 'darkText', label: 'Text' },
      { key: 'darkMuted', label: 'Muted text' },
      { key: 'darkBorder', label: 'Dividers' },
      { key: 'darkAccent', label: 'Accent' },
    ],
  },
  {
    id: 'visuals',
    title: 'Illustrations & details',
    description: 'Hero dashboard, server rack, ticker and card icons.',
    fields: [
      { key: 'stageBg', label: 'Hero stage background' },
      { key: 'stageWinBg', label: 'Dashboard window' },
      { key: 'stageWinHeader', label: 'Window header' },
      { key: 'stagePulseDot', label: 'Live status dot' },
      { key: 'stageBarsDefault', label: 'Chart bars' },
      { key: 'stageBarsHighlight', label: 'Chart peak bar' },
      { key: 'stageCardFloat', label: 'Floating card' },
      { key: 'rackBg', label: 'Server rack' },
      { key: 'rackUnitBg', label: 'Rack unit' },
      { key: 'rackLedGreen', label: 'Green LED' },
      { key: 'rackLedLime', label: 'Lime LED' },
      { key: 'rackLedAmber', label: 'Amber LED' },
      { key: 'rackCables', label: 'Cables' },
      { key: 'marqueeText', label: 'Ticker text' },
      { key: 'marqueeStar', label: 'Ticker marker' },
      { key: 'marqueeDarkStar', label: 'Ticker marker (dark)' },
      { key: 'cardHoverBorder', label: 'Card hover border' },
      { key: 'cardIconBg', label: 'Card icon background' },
      { key: 'cardIconHoverBg', label: 'Card icon hover' },
      { key: 'cardIconStroke', label: 'Card icon stroke' },
      { key: 'cardIconHoverStroke', label: 'Card icon hover stroke' },
    ],
  },
];

const PAGES = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/about-us', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/privacy-policy', label: 'Legal' },
];

const HEX6 = /^#[0-9a-fA-F]{6}$/;

function ColorRow({ field, value, def, onChange }: { field: Field; value: string; def: string; onChange: (v: string) => void }) {
  const [text, setText] = useState<string | null>(null);
  const shown = text ?? value;
  const changed = value.toLowerCase() !== def.toLowerCase();
  return (
    <div className="flex items-center gap-3 py-2">
      <label className="relative size-9 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-[#D5D9D2] shadow-sm" style={{ background: value }} title="Pick a color">
        <input
          type="color"
          value={HEX6.test(value) ? value : '#000000'}
          onChange={(e) => {
            setText(null);
            onChange(e.target.value);
          }}
          className="absolute inset-0 size-full cursor-pointer opacity-0"
          aria-label={field.label}
        />
      </label>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13.5px] font-semibold leading-tight">{field.label}</p>
        {field.hint && <p className="truncate text-[11.5px] text-[#6B746D]">{field.hint}</p>}
      </div>
      <input
        value={shown}
        spellCheck={false}
        onChange={(e) => {
          setText(e.target.value);
          if (HEX6.test(e.target.value)) onChange(e.target.value);
        }}
        onBlur={() => {
          if (text !== null && text.trim() && text !== value) onChange(text.trim());
          setText(null);
        }}
        className="w-[104px] rounded-lg border border-[#D5D9D2] bg-white px-2.5 py-1.5 font-mono text-xs uppercase outline-none focus:border-[#101612]"
      />
      <button
        type="button"
        disabled={!changed}
        onClick={() => {
          setText(null);
          onChange(def);
        }}
        title="Reset to default"
        className="grid size-7 place-items-center rounded-md text-[#6B746D] transition hover:bg-[#EDEFEA] disabled:opacity-20"
      >
        <RotateCcw className="size-3.5" />
      </button>
    </div>
  );
}

export default function AdminThemePage() {
  const { variables, activePresetId, updateVariable, updateMultipleVariables, setPreset, resetToDefaults, revertToPublished, exportJSON, importJSON } = useThemeCustomizer();
  const [open, setOpen] = useState<string>('brand');
  const [page, setPage] = useState('/');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const frame = useRef<HTMLIFrameElement>(null);
  const [published, setPublished] = useState<Partial<ThemeVariables> | null | undefined>(undefined);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    fetch('/api/admin/theme', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setPublished(d.published ?? null))
      .catch(() => setPublished(null));
  }, []);

  const liveVars: ThemeVariables = { ...DEFAULT_THEME_VARIABLES, ...(published || {}) };
  const inSync = published !== undefined && JSON.stringify(liveVars) === JSON.stringify({ ...DEFAULT_THEME_VARIABLES, ...variables });

  const publish = async () => {
    setPublishing(true);
    const res = await fetch('/api/admin/theme', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ variables }) });
    setPublishing(false);
    if (res.ok) {
      setPublished({ ...variables });
      toast.success('Published. Every visitor now sees this theme.');
    } else toast.error((await res.json().catch(() => ({}))).error || 'Could not publish.');
  };
  const unpublish = async () => {
    if (!confirm('Remove the published theme? Visitors will see the default colors.')) return;
    const res = await fetch('/api/admin/theme', { method: 'DELETE' });
    if (res.ok) {
      setPublished(null);
      toast.success('Unpublished. Visitors see the default theme.');
    } else toast.error('Could not unpublish.');
  };

  const copy = () => {
    navigator.clipboard.writeText(exportJSON());
    toast.success('Theme copied to clipboard');
  };
  const download = () => {
    const a = document.createElement('a');
    a.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(exportJSON());
    a.download = `kompilex-theme-${activePresetId || 'custom'}.json`;
    a.click();
  };
  const doImport = () => {
    if (importJSON(importText)) {
      toast.success('Theme imported');
      setImportOpen(false);
      setImportText('');
    } else toast.error('That is not a valid theme JSON.');
  };
  const resetGroup = (g: Group) => {
    const patch: Partial<ThemeVariables> = {};
    g.fields.forEach((f) => ((patch as Record<string, string>)[f.key] = DEFAULT_THEME_VARIABLES[f.key]));
    updateMultipleVariables(patch);
    toast.success(`${g.title} reset`);
  };

  return (
    <AdminShell wide>
      <div className="grid gap-6 lg:grid-cols-[440px_minmax(0,1fr)]">
        {/* ───────── Controls ───────── */}
        <div className="flex flex-col gap-5">
          <section className="rounded-3xl border border-[#101612] bg-white p-5">
            <div className="flex items-center gap-2">
              <Globe className="size-4" />
              <h2 className="text-base font-bold">Publish to live site</h2>
              <span className={`ml-auto rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${published === undefined ? 'bg-[#EDEFEA]' : inSync ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                {published === undefined ? 'Checking…' : inSync ? 'Live = this draft' : 'Draft not live'}
              </span>
            </div>
            <p className="mt-2 text-[13px] text-[#6B746D]">
              Your edits are a <b>draft in this browser only</b>. Publish to make this theme the one every visitor sees. {published ? 'A custom theme is currently live.' : 'The default theme is currently live.'}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold">
              <button onClick={publish} disabled={publishing || inSync} className="rounded-full bg-[#101612] px-4 py-2 text-white disabled:opacity-40">
                {publishing ? 'Publishing…' : 'Publish theme'}
              </button>
              <button onClick={() => { revertToPublished(); toast.info('Draft discarded. Showing the live theme.'); }} disabled={inSync} className="rounded-full border border-[#E1E4DE] px-4 py-2 hover:bg-[#EDEFEA] disabled:opacity-40">
                Discard draft
              </button>
              {published && (
                <button onClick={unpublish} className="rounded-full border border-red-200 px-4 py-2 text-red-600 hover:bg-red-50">
                  Unpublish
                </button>
              )}
            </div>
          </section>

          <section className="rounded-3xl border border-[#E1E4DE] bg-white p-5">
            <div className="flex items-baseline justify-between">
              <h2 className="text-base font-bold">Color themes</h2>
              <span className="text-xs text-[#6B746D]">{activePresetId === 'custom' ? 'Custom' : 'Theme applied'}</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {THEME_PRESETS.map((p) => {
                const active = activePresetId === p.id;
                const v = p.variables;
                return (
                  <button key={p.id} onClick={() => setPreset(p.id)} className={`rounded-2xl border p-2.5 text-left transition hover:-translate-y-0.5 ${active ? 'border-[#101612] ring-2 ring-[#101612]/15' : 'border-[#E1E4DE]'}`}>
                    <div className="flex h-7 overflow-hidden rounded-lg border border-black/5">
                      {[v.bgPage, v.surfaceTint, v.accentLime, v.accentEmerald, v.textMain].map((c, i) => (
                        <span key={i} className="flex-1" style={{ background: c }} />
                      ))}
                    </div>
                    <p className="mt-2 flex items-center gap-1 text-[12.5px] font-semibold leading-tight">
                      {active && <Check className="size-3.5 text-emerald-600" />}
                      {p.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="rounded-3xl border border-[#E1E4DE] bg-white">
            <div className="px-5 pt-5">
              <h2 className="text-base font-bold">Site colors</h2>
              <p className="mt-1 text-[13px] text-[#6B746D]">Click a swatch to pick a color, or type any hex value. The preview updates instantly.</p>
            </div>
            <div className="mt-3 divide-y divide-[#EDEFEA]">
              {GROUPS.map((g) => {
                const isOpen = open === g.id;
                return (
                  <div key={g.id}>
                    <button onClick={() => setOpen(isOpen ? '' : g.id)} className="flex w-full items-center gap-3 px-5 py-3.5 text-left hover:bg-[#FAFBF9]">
                      <div className="flex -space-x-1.5">
                        {g.fields.slice(0, 4).map((f) => (
                          <span key={f.key} className="size-5 rounded-full border-2 border-white" style={{ background: variables[f.key] }} />
                        ))}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold leading-tight">{g.title}</p>
                        <p className="text-[12px] text-[#6B746D]">{g.description}</p>
                      </div>
                      <ChevronDown className={`size-4 text-[#6B746D] transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4">
                        {g.fields.map((f) => (
                          <ColorRow key={f.key} field={f} value={variables[f.key]} def={DEFAULT_THEME_VARIABLES[f.key]} onChange={(v) => updateVariable(f.key, v)} />
                        ))}
                        <button onClick={() => resetGroup(g)} className="mt-2 text-xs font-semibold text-[#6B746D] underline underline-offset-4 hover:text-[#101612]">
                          Reset this group to default
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-3xl border border-[#E1E4DE] bg-white p-5">
            <h2 className="text-base font-bold">Backup & share</h2>
            <p className="mt-1 text-[13px] text-[#6B746D]">Drafts auto-save in this browser. Export a file to keep a backup or move a theme to another machine.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold">
              <button onClick={copy} className="flex items-center gap-1.5 rounded-full border border-[#E1E4DE] px-3.5 py-2 hover:bg-[#EDEFEA]"><Copy className="size-3.5" /> Copy JSON</button>
              <button onClick={download} className="flex items-center gap-1.5 rounded-full border border-[#E1E4DE] px-3.5 py-2 hover:bg-[#EDEFEA]"><Download className="size-3.5" /> Download</button>
              <button onClick={() => setImportOpen((v) => !v)} className="flex items-center gap-1.5 rounded-full border border-[#E1E4DE] px-3.5 py-2 hover:bg-[#EDEFEA]"><Upload className="size-3.5" /> Import</button>
              <button
                onClick={() => {
                  resetToDefaults();
                  toast.info('Theme reset to defaults');
                }}
                className="ml-auto flex items-center gap-1.5 rounded-full border border-red-200 px-3.5 py-2 text-red-600 hover:bg-red-50"
              >
                <RotateCcw className="size-3.5" /> Reset all
              </button>
            </div>
            {importOpen && (
              <div className="mt-3 flex flex-col gap-2">
                <textarea value={importText} onChange={(e) => setImportText(e.target.value)} rows={6} placeholder="Paste theme JSON here" className="w-full rounded-xl border border-[#D5D9D2] p-3 font-mono text-xs outline-none focus:border-[#101612]" />
                <button onClick={doImport} disabled={!importText.trim()} className="self-start rounded-full bg-[#101612] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40">Apply theme</button>
              </div>
            )}
          </section>
        </div>

        {/* ───────── Live preview ───────── */}
        <div className="lg:sticky lg:top-[88px] lg:h-[calc(100vh-112px)]">
          <div className="flex h-full min-h-[560px] flex-col overflow-hidden rounded-3xl border border-[#E1E4DE] bg-white">
            <div className="flex flex-wrap items-center gap-2 border-b border-[#EDEFEA] px-4 py-3">
              <span className="mr-1 flex items-center gap-1.5 text-sm font-bold">
                <span className="size-2 animate-pulse rounded-full bg-emerald-500" /> Live preview
              </span>
              <div className="flex flex-wrap gap-1">
                {PAGES.map((p) => (
                  <button key={p.href} onClick={() => setPage(p.href)} className={`rounded-full px-3 py-1 text-[12.5px] font-semibold transition ${page === p.href ? 'bg-[#101612] text-white' : 'text-[#4A534C] hover:bg-[#EDEFEA]'}`}>
                    {p.label}
                  </button>
                ))}
              </div>
              <div className="ml-auto flex gap-1 rounded-full bg-[#EDEFEA] p-1">
                <button onClick={() => setDevice('desktop')} aria-label="Desktop" className={`grid size-7 place-items-center rounded-full ${device === 'desktop' ? 'bg-white shadow' : ''}`}><Monitor className="size-3.5" /></button>
                <button onClick={() => setDevice('mobile')} aria-label="Mobile" className={`grid size-7 place-items-center rounded-full ${device === 'mobile' ? 'bg-white shadow' : ''}`}><Smartphone className="size-3.5" /></button>
              </div>
            </div>
            <div className="flex flex-1 justify-center overflow-hidden bg-[#E9ECE6] p-3">
              <iframe
                ref={frame}
                key={page}
                src={page}
                title="Site preview"
                className="h-full rounded-xl border border-[#D5D9D2] bg-white transition-all"
                style={{ width: device === 'mobile' ? 390 : '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
