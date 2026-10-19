'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useThemeCustomizer } from '@/context/ThemeCustomizerContext';
import { THEME_PRESETS, ThemeVariables } from '@/lib/theme-config';
import {
  Paintbrush,
  Sliders,
  RotateCcw,
  Copy,
  Download,
  Upload,
  ArrowLeft,
  LogOut,
  Sparkles,
  Check,
  Eye,
  Layers,
  Cpu,
  Palette,
  Terminal,
  Activity,
  Maximize2,
} from 'lucide-react';
import { toast } from 'sonner';

export default function AdminThemePage() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
    router.refresh();
  };

  const {
    variables,
    activePresetId,
    updateVariable,
    updateMultipleVariables,
    setPreset,
    resetToDefaults,
    exportJSON,
    importJSON,
  } = useThemeCustomizer();

  const [activeSection, setActiveSection] = useState<'presets' | 'base' | 'accents' | 'buttons' | 'particles' | 'dark' | 'raw'>('presets');
  const [importText, setImportText] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(exportJSON());
    toast.success('Theme JSON copied to clipboard!');
  };

  const handleDownload = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(exportJSON());
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `kompilex-theme-${activePresetId || 'custom'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success('Theme JSON downloaded!');
  };

  const handleImportSubmit = () => {
    const ok = importJSON(importText);
    if (ok) {
      toast.success('Theme imported and applied successfully!');
      setShowImportModal(false);
      setImportText('');
    } else {
      toast.error('Invalid JSON format. Please verify and try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col font-sans transition-colors duration-200"
      style={{
        background: 'var(--kpx-bg-page)',
        color: 'var(--kpx-text-main)',
      }}
    >
      {/* Top Admin Navigation Bar */}
      <header
        className="sticky top-0 z-50 px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 backdrop-blur-md"
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          borderColor: 'var(--kpx-border)',
        }}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all hover:scale-105"
            style={{
              borderColor: 'var(--kpx-border)',
              background: 'var(--kpx-surface)',
            }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View Landing Page</span>
          </Link>

          <div className="flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{
                background: 'var(--kpx-btn-ink-bg)',
                color: 'var(--kpx-accent-lime)',
              }}
            >
              KX
            </span>
            <div>
              <h1 className="text-base font-bold leading-tight flex items-center gap-2">
                <span>KompileX Admin Panel</span>
                <span
                  className="text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                  style={{
                    background: 'var(--kpx-accent-lime)',
                    color: 'var(--kpx-text-main)',
                  }}
                >
                  Live Controller
                </span>
              </h1>
              <p className="text-xs opacity-60">Full Dynamic Theme, Color, Particle & Shading Studio</p>
            </div>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center flex-wrap gap-2 text-xs">
          <button
            onClick={handleLogout}
            className="px-3.5 py-2 rounded-xl font-semibold border flex items-center gap-1.5 transition-colors hover:bg-black/5"
            style={{ borderColor: 'var(--kpx-border)' }}
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log out</span>
          </button>
          <button
            onClick={() => setShowImportModal(true)}
            className="px-3.5 py-2 rounded-xl font-semibold border flex items-center gap-1.5 transition-colors hover:bg-black/5"
            style={{ borderColor: 'var(--kpx-border)' }}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Import</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-3.5 py-2 rounded-xl font-semibold border flex items-center gap-1.5 transition-colors hover:bg-black/5"
            style={{ borderColor: 'var(--kpx-border)' }}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-xl font-semibold border flex items-center gap-1.5 transition-colors hover:bg-black/5"
            style={{ borderColor: 'var(--kpx-border)' }}
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy JSON</span>
          </button>

          <button
            onClick={() => {
              resetToDefaults();
              toast.info('Reset to official Redesign defaults');
            }}
            className="px-3.5 py-2 rounded-xl font-semibold border flex items-center gap-1.5 transition-colors hover:bg-red-50 text-red-600 border-red-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </header>

      {/* Main Studio Body */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          <div
            className="p-3 rounded-2xl border flex flex-col gap-1.5"
            style={{
              borderColor: 'var(--kpx-border)',
              background: 'var(--kpx-surface)',
            }}
          >
            <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider opacity-60">
              Studio Categories
            </span>

            {[
              { id: 'presets', label: '1-Click Presets', icon: Sparkles, desc: 'Official Redesign color directions' },
              { id: 'base', label: 'Base & Typography', icon: Palette, desc: 'Canvas ground, main text, surfaces' },
              { id: 'accents', label: 'Accents & Markers', icon: Activity, desc: 'Emerald, acid lime, highlights' },
              { id: 'buttons', label: 'Buttons & Controls', icon: Sliders, desc: 'Dark, lime, line, hover states' },
              { id: 'particles', label: 'Particles & Segments', icon: Cpu, desc: 'Stage charts, rack LEDs, cables' },
              { id: 'dark', label: 'Dark Blocks & Footer', icon: Layers, desc: 'DevOps & dark footer ground & text' },
              { id: 'raw', label: 'Raw JSON Editor', icon: Terminal, desc: 'Direct code inspect & modify' },
            ].map(item => {
              const Icon = item.icon;
              const isSelected = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'shadow-sm font-semibold'
                      : 'opacity-70 hover:opacity-100 hover:bg-black/5'
                  }`}
                  style={{
                    background: isSelected ? 'var(--kpx-surface-tint)' : 'transparent',
                    border: isSelected ? '1px solid var(--kpx-border)' : '1px solid transparent',
                  }}
                >
                  <Icon
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{
                      color: isSelected ? 'var(--kpx-accent-emerald)' : 'inherit',
                    }}
                  />
                  <div>
                    <div className="text-sm font-bold leading-tight">{item.label}</div>
                    <div className="text-[11px] opacity-70 leading-normal">{item.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Active Theme Summary Card */}
          <div
            className="p-5 rounded-2xl border space-y-3"
            style={{
              borderColor: 'var(--kpx-border)',
              background: 'var(--kpx-surface)',
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                Active Theme
              </span>
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-bold"
                style={{
                  background: 'var(--kpx-accent-lime)',
                  color: 'var(--kpx-text-main)',
                }}
              >
                {activePresetId ? activePresetId.toUpperCase() : 'CUSTOM'}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 pt-1">
              <span
                className="h-9 rounded-lg border border-black/10 flex items-center justify-center text-[10px] font-mono"
                style={{ background: variables.bgPage, color: variables.textMain }}
                title="Page Ground"
              >
                BG
              </span>
              <span
                className="h-9 rounded-lg border border-black/10 flex items-center justify-center text-[10px] font-mono"
                style={{ background: variables.textMain, color: variables.bgPage }}
                title="Main Text"
              >
                TXT
              </span>
              <span
                className="h-9 rounded-lg border border-black/10 flex items-center justify-center text-[10px] font-mono text-white"
                style={{ background: variables.accentEmerald }}
                title="Accent Emerald"
              >
                EM
              </span>
              <span
                className="h-9 rounded-lg border border-black/10 flex items-center justify-center text-[10px] font-mono text-black"
                style={{ background: variables.accentLime }}
                title="Highlight Lime"
              >
                LIME
              </span>
              <span
                className="h-9 rounded-lg border border-black/10 flex items-center justify-center text-[10px] font-mono"
                style={{ background: variables.surfaceTint, color: variables.textMain }}
                title="Surface Tint"
              >
                TINT
              </span>
            </div>

            <p className="text-xs opacity-70">
              Any changes made here immediately propagate across all landing page sections and subpages in real-time.
            </p>
          </div>
        </div>

        {/* Center Column: Active Section Controls */}
        <div className="lg:col-span-5 space-y-6">
          {/* 1. PRESETS */}
          {activeSection === 'presets' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">1-Click Designer Presets</h2>
                  <p className="text-xs opacity-70">
                    Switch between the 4 brand color options from the Redesign HTML, plus dark luxury & futuristic modes.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {THEME_PRESETS.map(preset => {
                  const isSelected = activePresetId === preset.id;
                  return (
                    <div
                      key={preset.id}
                      onClick={() => {
                        setPreset(preset.id);
                        toast.success(`Activated ${preset.name}`);
                      }}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'ring-2 ring-offset-2 shadow-lg'
                          : 'hover:border-black/30'
                      }`}
                      style={{
                        borderColor: isSelected ? 'var(--kpx-accent-emerald)' : 'var(--kpx-border)',
                        background: isSelected ? 'var(--kpx-surface-tint)' : 'var(--kpx-surface)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-base">{preset.name}</span>
                        <span
                          className="text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider"
                          style={{
                            background: isSelected ? 'var(--kpx-text-main)' : 'var(--kpx-surface-soft)',
                            color: isSelected ? 'var(--kpx-bg-page)' : 'var(--kpx-text-main)',
                          }}
                        >
                          {preset.badge}
                        </span>
                      </div>

                      <p className="text-xs opacity-75 mb-3">{preset.description}</p>

                      <div className="flex items-center gap-2">
                        <span
                          className="w-7 h-7 rounded-lg border border-black/10"
                          style={{ background: preset.variables.bgPage }}
                          title="Background"
                        />
                        <span
                          className="w-7 h-7 rounded-lg border border-black/10"
                          style={{ background: preset.variables.textMain }}
                          title="Main Text"
                        />
                        <span
                          className="w-7 h-7 rounded-lg border border-black/10"
                          style={{ background: preset.variables.accentEmerald }}
                          title="Accent Emerald"
                        />
                        <span
                          className="w-7 h-7 rounded-lg border border-black/10"
                          style={{ background: preset.variables.accentLime }}
                          title="Accent Lime"
                        />
                        <span
                          className="w-7 h-7 rounded-lg border border-black/10"
                          style={{ background: preset.variables.surfaceTint }}
                          title="Tint"
                        />
                        <span
                          className="w-7 h-7 rounded-lg border border-black/10"
                          style={{ background: preset.variables.darkBg }}
                          title="Dark Section"
                        />

                        {isSelected ? (
                          <span className="ml-auto font-bold text-xs flex items-center gap-1 text-emerald-600">
                            <Check className="w-4 h-4" /> Applied
                          </span>
                        ) : (
                          <span className="ml-auto text-xs font-semibold opacity-60 hover:opacity-100">
                            Click to Apply
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. BASE & TYPOGRAPHY */}
          {activeSection === 'base' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold">Base Canvas & Surfaces</h2>
                <p className="text-xs opacity-70">
                  Adjust the base ground, body typography color, secondary text, and surface tints.
                </p>
              </div>

              <div className="space-y-3">
                <AdminColorRow
                  name="bgPage"
                  label="Base Ground Color (Page Background)"
                  description="Default: #F4F6F1 chalk. Governs body, canvas and sections."
                  value={variables.bgPage}
                  onChange={v => updateVariable('bgPage', v)}
                />
                <AdminColorRow
                  name="textMain"
                  label="Base Text Color (Ink)"
                  description="Default: #0C1410. Main headlines, titles, and body copy."
                  value={variables.textMain}
                  onChange={v => updateVariable('textMain', v)}
                />
                <AdminColorRow
                  name="textMuted"
                  label="Secondary / Muted Text (Slate)"
                  description="Default: #4A5650. Descriptive paragraphs, labels, and tags."
                  value={variables.textMuted}
                  onChange={v => updateVariable('textMuted', v)}
                />
                <AdminColorRow
                  name="surface"
                  label="Surface Card Background"
                  description="Default: #FFFFFF. White cards, input boxes, modal containers."
                  value={variables.surface}
                  onChange={v => updateVariable('surface', v)}
                />
                <AdminColorRow
                  name="surfaceTint"
                  label="Surface Tint (Sage)"
                  description="Default: #E3EAD9. Hero stage, careers banner, engagement cards."
                  value={variables.surfaceTint}
                  onChange={v => updateVariable('surfaceTint', v)}
                />
                <AdminColorRow
                  name="surfaceSoft"
                  label="Surface Soft (Chip / Tag Background)"
                  description="Default: #EEF1E8. Pills, technology badges, small chips."
                  value={variables.surfaceSoft}
                  onChange={v => updateVariable('surfaceSoft', v)}
                />
                <AdminColorRow
                  name="borderMain"
                  label="Primary Border & Dividing Line"
                  description="Default: #D8DDD2. Section dividers, card borders, navbar outline."
                  value={variables.borderMain}
                  onChange={v => updateVariable('borderMain', v)}
                />
                <AdminColorRow
                  name="borderLight"
                  label="Secondary Light Border"
                  description="Default: #CBD2C3. Inner grid lines, table borders, input outlines."
                  value={variables.borderLight}
                  onChange={v => updateVariable('borderLight', v)}
                />
              </div>
            </div>
          )}

          {/* 3. ACCENTS */}
          {activeSection === 'accents' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold">Brand Accents & Highlights</h2>
                <p className="text-xs opacity-70">
                  Control the primary brand emerald, the signature acid-lime highlighter, and hover states.
                </p>
              </div>

              <div className="space-y-3">
                <AdminColorRow
                  name="accentEmerald"
                  label="Primary Accent (Emerald Brand)"
                  description="Default: #0A6B4A. Logo accent 'X', eyebrows, links, checkmarks."
                  value={variables.accentEmerald}
                  onChange={v => updateVariable('accentEmerald', v)}
                />
                <AdminColorRow
                  name="accentLime"
                  label="Highlight Accent (Acid Lime)"
                  description="Default: #C8F53C. Text marker highlight, CTA button on dark, badges."
                  value={variables.accentLime}
                  onChange={v => updateVariable('accentLime', v)}
                />
                <AdminColorRow
                  name="highlightMarker"
                  label="Text Marker Under-Highlight"
                  description="Default: #C8F53C. Underline stripe beneath 'without expanding'."
                  value={variables.highlightMarker}
                  onChange={v => updateVariable('highlightMarker', v)}
                />
                <AdminColorRow
                  name="accentLimeHover"
                  label="Lime Hover Accent"
                  description="Default: #FFFFFF. Hover background on lime elements."
                  value={variables.accentLimeHover}
                  onChange={v => updateVariable('accentLimeHover', v)}
                />
              </div>
            </div>
          )}

          {/* 4. BUTTONS & CONTROLS */}
          {activeSection === 'buttons' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold">Buttons & Interactive Controls</h2>
                <p className="text-xs opacity-70">
                  Customize background, text, border, and hover colors for all button varieties.
                </p>
              </div>

              <div className="space-y-3">
                <AdminColorRow
                  name="btnInkBg"
                  label="Dark Ink Button (Background)"
                  description="Default: #0C1410. 'Start a Project', 'Contact Us' buttons."
                  value={variables.btnInkBg}
                  onChange={v => updateVariable('btnInkBg', v)}
                />
                <AdminColorRow
                  name="btnInkText"
                  label="Dark Ink Button (Text Color)"
                  description="Default: #F4F6F1. Text inside dark ink buttons."
                  value={variables.btnInkText}
                  onChange={v => updateVariable('btnInkText', v)}
                />
                <AdminColorRow
                  name="btnInkHoverBg"
                  label="Dark Ink Button (Hover Background)"
                  description="Default: #0A6B4A emerald. Color when hovering dark ink buttons."
                  value={variables.btnInkHoverBg}
                  onChange={v => updateVariable('btnInkHoverBg', v)}
                />
                <AdminColorRow
                  name="btnLimeBg"
                  label="Lime Button (Background)"
                  description="Default: #C8F53C. High-energy call to action button."
                  value={variables.btnLimeBg}
                  onChange={v => updateVariable('btnLimeBg', v)}
                />
                <AdminColorRow
                  name="btnLimeText"
                  label="Lime Button (Text Color)"
                  description="Default: #0C1410. Text inside lime button."
                  value={variables.btnLimeText}
                  onChange={v => updateVariable('btnLimeText', v)}
                />
                <AdminColorRow
                  name="btnLineBorder"
                  label="Outline Button (Border Color)"
                  description="Default: #0C1410. 'See Our Work' button border."
                  value={variables.btnLineBorder}
                  onChange={v => updateVariable('btnLineBorder', v)}
                />
                <AdminColorRow
                  name="btnLineText"
                  label="Outline Button (Text Color)"
                  description="Default: #0C1410. 'See Our Work' button text."
                  value={variables.btnLineText}
                  onChange={v => updateVariable('btnLineText', v)}
                />
              </div>
            </div>
          )}

          {/* 5. PARTICLES & SEGMENTS */}
          {activeSection === 'particles' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold">Particles & Micro-Segments</h2>
                <p className="text-xs opacity-70">
                  Granular control over live stage elements, charts, server rack LEDs, patch cables, and marquees.
                </p>
              </div>

              <div className="space-y-3">
                <div className="font-bold text-xs uppercase tracking-wider opacity-60 pt-2">
                  Hero Stage & Charts
                </div>
                <AdminColorRow
                  name="stageBg"
                  label="Stage Canvas Background"
                  description="Default: #E3EAD9. The sage canvas housing the browser mockup."
                  value={variables.stageBg}
                  onChange={v => updateVariable('stageBg', v)}
                />
                <AdminColorRow
                  name="stagePulseDot"
                  label="Status Pulse Dot (Green)"
                  description="Default: #1FB36B. The live animated pulsing radar dot."
                  value={variables.stagePulseDot}
                  onChange={v => updateVariable('stagePulseDot', v)}
                />
                <AdminColorRow
                  name="stageBarsDefault"
                  label="Analytics Chart Normal Bars"
                  description="Default: #0C1410. Standard growth bars in dashboard."
                  value={variables.stageBarsDefault}
                  onChange={v => updateVariable('stageBarsDefault', v)}
                />
                <AdminColorRow
                  name="stageBarsHighlight"
                  label="Analytics Chart Peak Bar"
                  description="Default: #C8F53C. Highlight peak metric bar in dashboard."
                  value={variables.stageBarsHighlight}
                  onChange={v => updateVariable('stageBarsHighlight', v)}
                />

                <div className="font-bold text-xs uppercase tracking-wider opacity-60 pt-4">
                  DevOps Server Rack & LEDs
                </div>
                <AdminColorRow
                  name="rackBg"
                  label="Server Rack Body"
                  description="Default: #0C1410. Main server rack chassis ground."
                  value={variables.rackBg}
                  onChange={v => updateVariable('rackBg', v)}
                />
                <AdminColorRow
                  name="rackLedGreen"
                  label="Server Green LED (Healthy)"
                  description="Default: #1FB36B. Green heartbeat telemetry LED."
                  value={variables.rackLedGreen}
                  onChange={v => updateVariable('rackLedGreen', v)}
                />
                <AdminColorRow
                  name="rackLedLime"
                  label="Server Lime LED (Active)"
                  description="Default: #C8F53C. Active traffic blinking LED."
                  value={variables.rackLedLime}
                  onChange={v => updateVariable('rackLedLime', v)}
                />
                <AdminColorRow
                  name="rackCables"
                  label="Server Fiber Patch Cables"
                  description="Default: #C8F53C. Glowing patch cable connections."
                  value={variables.rackCables}
                  onChange={v => updateVariable('rackCables', v)}
                />

                <div className="font-bold text-xs uppercase tracking-wider opacity-60 pt-4">
                  Marquee & Badges
                </div>
                <AdminColorRow
                  name="marqueeText"
                  label="Marquee Ticker Text"
                  description="Default: #2C3830. Technology names scrolling horizontally."
                  value={variables.marqueeText}
                  onChange={v => updateVariable('marqueeText', v)}
                />
                <AdminColorRow
                  name="marqueeStar"
                  label="Marquee Star Sparkle"
                  description="Default: #C8F53C. Emblems between ticker items."
                  value={variables.marqueeStar}
                  onChange={v => {
                    updateVariable('marqueeStar', v);
                    updateVariable('marqueeDarkStar', v);
                  }}
                />
              </div>
            </div>
          )}

          {/* 6. DARK BLOCKS & FOOTER */}
          {activeSection === 'dark' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold">Dark Sections & Footer</h2>
                <p className="text-xs opacity-70">
                  Control the dark DevOps section and the large footer at the bottom of the page.
                </p>
              </div>

              <div className="space-y-3">
                <AdminColorRow
                  name="darkBg"
                  label="Dark Section Canvas (Footer & DevOps)"
                  description="Default: #0C1410. Deep green-black ink background."
                  value={variables.darkBg}
                  onChange={v => updateVariable('darkBg', v)}
                />
                <AdminColorRow
                  name="darkText"
                  label="Dark Section Primary Text"
                  description="Default: #F4F6F1. Headlines and active links on dark."
                  value={variables.darkText}
                  onChange={v => updateVariable('darkText', v)}
                />
                <AdminColorRow
                  name="darkMuted"
                  label="Dark Section Muted Text"
                  description="Default: #A9B6AE. Secondary descriptions and copyright."
                  value={variables.darkMuted}
                  onChange={v => updateVariable('darkMuted', v)}
                />
                <AdminColorRow
                  name="darkBorder"
                  label="Dark Section Dividers"
                  description="Default: #24332B. Dividing rules and outline borders on dark."
                  value={variables.darkBorder}
                  onChange={v => updateVariable('darkBorder', v)}
                />
                <AdminColorRow
                  name="darkAccent"
                  label="Dark Section Highlight Accent"
                  description="Default: #C8F53C. Floating icon, link hover state, footer CTA."
                  value={variables.darkAccent}
                  onChange={v => updateVariable('darkAccent', v)}
                />
              </div>
            </div>
          )}

          {/* 7. RAW JSON */}
          {activeSection === 'raw' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold">Raw JSON Theme Data</h2>
                <p className="text-xs opacity-70">
                  Directly inspect, copy, or edit the active theme configuration payload.
                </p>
              </div>

              <textarea
                readOnly
                value={exportJSON()}
                className="w-full h-[450px] p-4 rounded-2xl font-mono text-xs border leading-relaxed"
                style={{
                  background: 'var(--kpx-surface)',
                  color: 'var(--kpx-text-main)',
                  borderColor: 'var(--kpx-border)',
                }}
              />
            </div>
          )}
        </div>

        {/* Right Column: Live Interactive Sandbox & Component Preview */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-600" />
              <span>Real-Time Component Sandbox</span>
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
              ● Live Dynamic
            </span>
          </div>

          {/* Sandbox Box */}
          <div
            className="p-6 rounded-3xl border shadow-xl space-y-6 overflow-hidden"
            style={{
              background: 'var(--kpx-bg-page)',
              color: 'var(--kpx-text-main)',
              borderColor: 'var(--kpx-border)',
            }}
          >
            {/* 1. Mini Navbar */}
            <div
              className="flex items-center justify-between p-2.5 px-4 rounded-full border shadow-sm"
              style={{
                background: 'var(--kpx-surface)',
                borderColor: 'var(--kpx-border)',
              }}
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                <span
                  className="w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs"
                  style={{
                    background: 'var(--kpx-btn-ink-bg)',
                    color: 'var(--kpx-accent-lime)',
                  }}
                >
                  KX
                </span>
                <span>
                  Kompile<span style={{ color: 'var(--kpx-accent-emerald)' }}>X</span>
                </span>
              </div>
              <span
                className="text-[11px] font-bold px-3 py-1 rounded-full cursor-pointer transition-all hover:scale-105"
                style={{
                  background: 'var(--kpx-btn-ink-bg)',
                  color: 'var(--kpx-btn-ink-text)',
                }}
              >
                Contact
              </span>
            </div>

            {/* 2. Hero Snippet */}
            <div className="space-y-3">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-semibold"
                style={{
                  background: 'var(--kpx-surface)',
                  borderColor: 'var(--kpx-border)',
                }}
              >
                <span className="dot" />
                <span>Available for new projects</span>
              </div>

              <h3 className="text-xl font-bold leading-tight">
                Scale your software <span className="hl">without expanding</span> your team.
              </h3>

              <p className="text-xs leading-relaxed" style={{ color: 'var(--kpx-text-muted)' }}>
                Engineering studio building high-performance web, mobile & cloud systems.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button className="btn btn-ink text-xs h-9 px-4">
                  Start Project
                </button>
                <button className="btn btn-line text-xs h-9 px-4">
                  See Work
                </button>
              </div>
            </div>

            {/* 3. Hero Stage Mockup Preview */}
            <div
              className="p-4 rounded-2xl relative overflow-hidden"
              style={{
                background: 'var(--kpx-stage-bg)',
              }}
            >
              <div
                className="p-3 rounded-xl border shadow-sm space-y-3"
                style={{
                  background: 'var(--kpx-stage-win-bg)',
                  borderColor: 'var(--kpx-border-light)',
                }}
              >
                <div className="flex items-center justify-between text-[10px] pb-1 border-b" style={{ borderColor: 'var(--kpx-border-light)' }}>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span className="font-mono opacity-60">telemetry / metrics</span>
                </div>

                {/* Animated Chart Bars */}
                <div className="h-16 flex items-end gap-1.5 pt-2">
                  {[40, 65, 50, 85, 70, 95, 60, 100, 75].map((h, i) => {
                    const isPeak = i === 7;
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          background: isPeak
                            ? 'var(--kpx-stage-bars-highlight)'
                            : 'var(--kpx-stage-bars-default)',
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Mini Server Unit */}
              <div
                className="mt-3 p-2.5 rounded-xl flex items-center justify-between"
                style={{
                  background: 'var(--kpx-rack-bg)',
                  color: '#FFFFFF',
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full led"
                    style={{ background: 'var(--kpx-rack-led-lime)' }}
                  />
                  <span
                    className="w-2 h-2 rounded-full led"
                    style={{ background: 'var(--kpx-rack-led-green)', animationDelay: '0.4s' }}
                  />
                  <span className="text-[10px] font-mono opacity-80">server-prod-01</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-1 rounded" style={{ background: 'var(--kpx-rack-cables)' }} />
                  <span className="w-3 h-1 rounded" style={{ background: 'var(--kpx-rack-cables)' }} />
                </div>
              </div>
            </div>

            {/* 4. Mini Footer Preview */}
            <div
              className="p-4 rounded-2xl dark text-xs space-y-2.5"
              style={{
                background: 'var(--kpx-dark-bg)',
                color: 'var(--kpx-dark-text)',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Your next product starts here.</span>
                <button className="btn btn-lime text-[11px] h-7 px-3">
                  Get started
                </button>
              </div>
              <p className="text-[11px]" style={{ color: 'var(--kpx-dark-muted)' }}>
                Built remotely, shipped worldwide · ©2026 KompileX
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Import JSON Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4">
          <div
            className="w-full max-w-lg p-6 rounded-3xl border shadow-2xl space-y-4 animate-in fade-in zoom-in-95"
            style={{
              background: 'var(--kpx-surface)',
              color: 'var(--kpx-text-main)',
              borderColor: 'var(--kpx-border)',
            }}
          >
            <h3 className="text-lg font-bold">Import Theme JSON</h3>
            <p className="text-xs opacity-75">
              Paste a valid KompileX Theme JSON configuration below to apply it immediately.
            </p>

            <textarea
              value={importText}
              onChange={e => setImportText(e.target.value)}
              placeholder='{ "preset": "custom", "variables": { "bgPage": "#F4F6F1", ... } }'
              className="w-full h-48 p-3 rounded-xl font-mono text-xs border"
              style={{
                borderColor: 'var(--kpx-border)',
                background: 'var(--kpx-surface-tint)',
              }}
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowImportModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold hover:bg-black/10"
              >
                Cancel
              </button>
              <button
                onClick={handleImportSubmit}
                className="px-5 py-2 rounded-xl text-xs font-bold shadow-sm"
                style={{
                  background: 'var(--kpx-accent-lime)',
                  color: 'var(--kpx-text-main)',
                }}
              >
                Apply & Save Theme
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AdminColorRow({
  name,
  label,
  description,
  value,
  onChange,
}: {
  name: string;
  label: string;
  description: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div
      className="p-3.5 rounded-2xl border flex items-center justify-between gap-4 transition-colors hover:border-black/30"
      style={{
        borderColor: 'var(--kpx-border)',
        background: 'var(--kpx-surface)',
      }}
    >
      <div className="min-w-0 flex-1">
        <label className="text-xs font-bold block">{label}</label>
        <span className="text-[11px] opacity-60 block truncate">{description}</span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span className="font-mono text-xs opacity-80 uppercase">{value}</span>
        <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-black/20 shadow-sm cursor-pointer">
          <input
            type="color"
            value={value.startsWith('#') && value.length === 7 ? value : '#000000'}
            onChange={e => onChange(e.target.value)}
            className="absolute -inset-2 w-12 h-12 cursor-pointer border-0 p-0"
          />
        </div>
      </div>
    </div>
  );
}
