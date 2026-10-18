'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useThemeCustomizer } from '@/context/ThemeCustomizerContext';
import { THEME_PRESETS, ThemeVariables } from '@/lib/theme-config';
import {
  Paintbrush,
  X,
  RotateCcw,
  Sliders,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Copy,
  Sparkles,
} from 'lucide-react';
import { toast } from 'sonner';

export default function ThemeCustomizerFloating() {
  const {
    variables,
    activePresetId,
    updateVariable,
    setPreset,
    resetToDefaults,
    isCustomizerOpen,
    setIsCustomizerOpen,
    toggleCustomizer,
    exportJSON,
  } = useThemeCustomizer();

  const [activeTab, setActiveTab] = useState<'presets' | 'base' | 'particles' | 'buttons'>('presets');
  const [collapsed, setCollapsed] = useState(false);

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(exportJSON());
    toast.success('Theme JSON copied to clipboard!');
  };

  const handleReset = () => {
    resetToDefaults();
    toast.info('Theme reset to official Redesign defaults');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2">
        <button
          onClick={toggleCustomizer}
          aria-label="Open Theme Customizer Admin Panel"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full font-semibold text-sm shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: 'var(--kpx-text-main)',
            color: 'var(--kpx-bg-page)',
            border: '2px solid var(--kpx-accent-lime)',
            boxShadow: '0 10px 30px -5px rgba(0,0,0,0.3)',
          }}
        >
          <span
            className="w-3 h-3 rounded-full animate-ping"
            style={{ background: 'var(--kpx-accent-lime)' }}
          />
          <Paintbrush className="w-4 h-4 transition-transform group-hover:rotate-12" />
          <span>Theme Admin</span>
        </button>
      </div>

      {/* Slide-over Drawer */}
      {isCustomizerOpen && (
        <div className="fixed inset-0 z-[10000] flex justify-end bg-black/40 backdrop-blur-sm transition-opacity">
          <div
            className="relative w-full max-w-md h-full flex flex-col shadow-2xl overflow-hidden transition-transform duration-300 animate-in slide-in-from-right"
            style={{
              background: 'var(--kpx-surface)',
              color: 'var(--kpx-text-main)',
              borderLeft: '1px solid var(--kpx-border)',
            }}
          >
            {/* Drawer Header */}
            <div
              className="p-5 flex items-center justify-between border-b"
              style={{
                borderColor: 'var(--kpx-border)',
                background: 'var(--kpx-surface-tint)',
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-bold"
                  style={{
                    background: 'var(--kpx-accent-lime)',
                    color: 'var(--kpx-text-main)',
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-bold text-base leading-tight">Theme Customizer</h3>
                  <p className="text-xs opacity-75">Dynamic Live Color Controller</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <Link
                  href="/admin"
                  onClick={() => setIsCustomizerOpen(false)}
                  className="p-2 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors hover:bg-black/10"
                  title="Open Full Admin Dashboard"
                >
                  <span>Full Admin</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => setIsCustomizerOpen(false)}
                  className="p-2 rounded-lg hover:bg-black/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Presets Carousel Bar */}
            <div
              className="px-4 py-3 border-b flex items-center gap-2 overflow-x-auto text-xs"
              style={{ borderColor: 'var(--kpx-border)' }}
            >
              <span className="font-bold text-[11px] uppercase tracking-wider opacity-60 shrink-0">
                Tabs:
              </span>
              <button
                onClick={() => setActiveTab('presets')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
                  activeTab === 'presets' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  background: activeTab === 'presets' ? 'var(--kpx-text-main)' : 'var(--kpx-surface-soft)',
                  color: activeTab === 'presets' ? 'var(--kpx-bg-page)' : 'var(--kpx-text-main)',
                }}
              >
                Presets
              </button>
              <button
                onClick={() => setActiveTab('base')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
                  activeTab === 'base' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  background: activeTab === 'base' ? 'var(--kpx-text-main)' : 'var(--kpx-surface-soft)',
                  color: activeTab === 'base' ? 'var(--kpx-bg-page)' : 'var(--kpx-text-main)',
                }}
              >
                Base & Text
              </button>
              <button
                onClick={() => setActiveTab('particles')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
                  activeTab === 'particles' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  background: activeTab === 'particles' ? 'var(--kpx-text-main)' : 'var(--kpx-surface-soft)',
                  color: activeTab === 'particles' ? 'var(--kpx-bg-page)' : 'var(--kpx-text-main)',
                }}
              >
                Particles & Segments
              </button>
              <button
                onClick={() => setActiveTab('buttons')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
                  activeTab === 'buttons' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  background: activeTab === 'buttons' ? 'var(--kpx-text-main)' : 'var(--kpx-surface-soft)',
                  color: activeTab === 'buttons' ? 'var(--kpx-bg-page)' : 'var(--kpx-text-main)',
                }}
              >
                Buttons & Dark
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {/* TAB 1: PRESETS */}
              {activeTab === 'presets' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-60">
                      Designer Directions (1-Click)
                    </p>
                    <span className="text-[11px] px-2 py-0.5 rounded-full font-mono bg-black/5">
                      {THEME_PRESETS.length} Presets
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {THEME_PRESETS.map(preset => {
                      const isSelected = activePresetId === preset.id;
                      return (
                        <button
                          key={preset.id}
                          onClick={() => {
                            setPreset(preset.id);
                            toast.success(`Applied ${preset.name}`);
                          }}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs flex flex-col gap-2 relative ${
                            isSelected
                              ? 'ring-2 ring-offset-2 shadow-md'
                              : 'hover:border-black/30'
                          }`}
                          style={{
                            borderColor: isSelected ? 'var(--kpx-accent-emerald)' : 'var(--kpx-border)',
                            background: isSelected ? 'var(--kpx-surface-tint)' : 'var(--kpx-surface)',
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm">{preset.name}</span>
                            <span
                              className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                              style={{
                                background: isSelected ? 'var(--kpx-text-main)' : 'var(--kpx-surface-soft)',
                                color: isSelected ? 'var(--kpx-bg-page)' : 'var(--kpx-text-main)',
                              }}
                            >
                              {preset.badge}
                            </span>
                          </div>

                          <p className="text-xs opacity-75 line-clamp-1">{preset.description}</p>

                          {/* Color strip */}
                          <div className="flex items-center gap-1.5 pt-1">
                            <span
                              className="w-6 h-6 rounded-md border border-black/10 shrink-0"
                              style={{ background: preset.variables.bgPage }}
                              title="Background"
                            />
                            <span
                              className="w-6 h-6 rounded-md border border-black/10 shrink-0"
                              style={{ background: preset.variables.textMain }}
                              title="Main Text"
                            />
                            <span
                              className="w-6 h-6 rounded-md border border-black/10 shrink-0"
                              style={{ background: preset.variables.accentEmerald }}
                              title="Primary Accent"
                            />
                            <span
                              className="w-6 h-6 rounded-md border border-black/10 shrink-0"
                              style={{ background: preset.variables.accentLime }}
                              title="Highlight Lime"
                            />
                            <span
                              className="w-6 h-6 rounded-md border border-black/10 shrink-0"
                              style={{ background: preset.variables.surfaceTint }}
                              title="Tint Surface"
                            />
                            {isSelected && (
                              <span className="ml-auto flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                                <Check className="w-3.5 h-3.5" /> Active
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: BASE & TEXT */}
              {activeTab === 'base' && (
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60">
                    Base Canvas & Text Colors
                  </p>

                  <ColorControl
                    label="Page Background (Ground)"
                    description="Base body & canvas background color"
                    value={variables.bgPage}
                    onChange={v => updateVariable('bgPage', v)}
                  />

                  <ColorControl
                    label="Base Text Color (Ink)"
                    description="Main headlines, body text, dark buttons"
                    value={variables.textMain}
                    onChange={v => updateVariable('textMain', v)}
                  />

                  <ColorControl
                    label="Secondary Muted Text"
                    description="Paragraphs, descriptions, subtitles"
                    value={variables.textMuted}
                    onChange={v => updateVariable('textMuted', v)}
                  />

                  <ColorControl
                    label="Cards & Surface White"
                    description="Background of white cards and containers"
                    value={variables.surface}
                    onChange={v => updateVariable('surface', v)}
                  />

                  <ColorControl
                    label="Surface Tint (Sage)"
                    description="Background of engagement cards, stage, careers"
                    value={variables.surfaceTint}
                    onChange={v => updateVariable('surfaceTint', v)}
                  />

                  <ColorControl
                    label="Global Border Color"
                    description="Section dividing lines, card borders"
                    value={variables.borderMain}
                    onChange={v => updateVariable('borderMain', v)}
                  />

                  <ColorControl
                    label="Primary Accent (Emerald / Brand)"
                    description="Logo accent X, eyebrows, active tabs"
                    value={variables.accentEmerald}
                    onChange={v => updateVariable('accentEmerald', v)}
                  />

                  <ColorControl
                    label="Highlight Accent (Acid Lime)"
                    description="Text marker highlight, CTA on dark, badges"
                    value={variables.accentLime}
                    onChange={v => {
                      updateVariable('accentLime', v);
                      updateVariable('highlightMarker', v);
                    }}
                  />
                </div>
              )}

              {/* TAB 3: PARTICLES & SEGMENTS */}
              {activeTab === 'particles' && (
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60">
                    Hero Stage & Analytics Visual
                  </p>

                  <ColorControl
                    label="Hero Stage Background"
                    description="Canvas behind the dashboard mockup"
                    value={variables.stageBg}
                    onChange={v => updateVariable('stageBg', v)}
                  />

                  <ColorControl
                    label="Hero Status Pulse Dot"
                    description="Green glowing pulse dot in hero & production card"
                    value={variables.stagePulseDot}
                    onChange={v => updateVariable('stagePulseDot', v)}
                  />

                  <ColorControl
                    label="Chart Bars (Default)"
                    description="Rising bars in hero dashboard graph"
                    value={variables.stageBarsDefault}
                    onChange={v => updateVariable('stageBarsDefault', v)}
                  />

                  <ColorControl
                    label="Chart Peak Bar (Highlight)"
                    description="Peak bar color in hero dashboard graph"
                    value={variables.stageBarsHighlight}
                    onChange={v => updateVariable('stageBarsHighlight', v)}
                  />

                  <div className="pt-3 border-t" style={{ borderColor: 'var(--kpx-border)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-3">
                      DevOps Server Rack & LEDs
                    </p>

                    <ColorControl
                      label="Server Rack Background"
                      description="Chassis metal ground of the server rack"
                      value={variables.rackBg}
                      onChange={v => updateVariable('rackBg', v)}
                    />

                    <ColorControl
                      label="Blinking Green LED"
                      description="Active server health LED indicator"
                      value={variables.rackLedGreen}
                      onChange={v => updateVariable('rackLedGreen', v)}
                    />

                    <ColorControl
                      label="Blinking Lime / Active LED"
                      description="Server activity blink light"
                      value={variables.rackLedLime}
                      onChange={v => updateVariable('rackLedLime', v)}
                    />

                    <ColorControl
                      label="Ethernet & Fiber Patch Cables"
                      description="Glowing cable lines on the server units"
                      value={variables.rackCables}
                      onChange={v => updateVariable('rackCables', v)}
                    />
                  </div>

                  <div className="pt-3 border-t" style={{ borderColor: 'var(--kpx-border)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-3">
                      Marquee & Emblems
                    </p>

                    <ColorControl
                      label="Marquee Ticker Text"
                      description="Technology and framework names"
                      value={variables.marqueeText}
                      onChange={v => updateVariable('marqueeText', v)}
                    />

                    <ColorControl
                      label="Marquee Star / Dot Color"
                      description="Divider stars in infinite marquee tickers"
                      value={variables.marqueeStar}
                      onChange={v => {
                        updateVariable('marqueeStar', v);
                        updateVariable('marqueeDarkStar', v);
                      }}
                    />
                  </div>
                </div>
              )}

              {/* TAB 4: BUTTONS & DARK */}
              {activeTab === 'buttons' && (
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60">
                    Button Styles & CTAs
                  </p>

                  <ColorControl
                    label="Dark Button Background"
                    description="Primary 'Start a Project', 'Contact Us' buttons"
                    value={variables.btnInkBg}
                    onChange={v => updateVariable('btnInkBg', v)}
                  />

                  <ColorControl
                    label="Dark Button Text"
                    description="Text inside dark buttons"
                    value={variables.btnInkText}
                    onChange={v => updateVariable('btnInkText', v)}
                  />

                  <ColorControl
                    label="Lime Button Background"
                    description="'Get started' CTA in footer and highlights"
                    value={variables.btnLimeBg}
                    onChange={v => updateVariable('btnLimeBg', v)}
                  />

                  <ColorControl
                    label="Lime Button Text"
                    description="Text inside lime button"
                    value={variables.btnLimeText}
                    onChange={v => updateVariable('btnLimeText', v)}
                  />

                  <div className="pt-3 border-t" style={{ borderColor: 'var(--kpx-border)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-3">
                      Dark Footer & Dark Sections
                    </p>

                    <ColorControl
                      label="Dark Section Background"
                      description="Footer & DevOps section background"
                      value={variables.darkBg}
                      onChange={v => updateVariable('darkBg', v)}
                    />

                    <ColorControl
                      label="Dark Section Primary Text"
                      description="Headline 'Your next product starts here.'"
                      value={variables.darkText}
                      onChange={v => updateVariable('darkText', v)}
                    />

                    <ColorControl
                      label="Dark Section Muted Text"
                      description="Subheadings and footer links"
                      value={variables.darkMuted}
                      onChange={v => updateVariable('darkMuted', v)}
                    />

                    <ColorControl
                      label="Dark Section Dividers"
                      description="Border lines in footer and dark blocks"
                      value={variables.darkBorder}
                      onChange={v => updateVariable('darkBorder', v)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer Actions */}
            <div
              className="p-4 border-t flex items-center justify-between gap-2"
              style={{
                borderColor: 'var(--kpx-border)',
                background: 'var(--kpx-surface)',
              }}
            >
              <button
                onClick={handleReset}
                className="px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors hover:bg-black/10"
                title="Reset to Original Defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyConfig}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all hover:bg-black/5"
                  style={{ borderColor: 'var(--kpx-border)' }}
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy JSON</span>
                </button>

                <Link
                  href="/admin"
                  onClick={() => setIsCustomizerOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all hover:opacity-90"
                  style={{
                    background: 'var(--kpx-accent-lime)',
                    color: 'var(--kpx-text-main)',
                  }}
                >
                  <span>Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ColorControl({
  label,
  description,
  value,
  onChange,
}: {
  label: string;
  description: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div
      className="p-3 rounded-2xl border flex items-center justify-between gap-3 transition-colors hover:border-black/30"
      style={{
        borderColor: 'var(--kpx-border)',
        background: 'var(--kpx-surface)',
      }}
    >
      <div className="min-w-0 flex-1">
        <label className="text-xs font-bold block truncate">{label}</label>
        <span className="text-[11px] opacity-60 block truncate">{description}</span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span className="font-mono text-xs opacity-75 uppercase">{value}</span>
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
