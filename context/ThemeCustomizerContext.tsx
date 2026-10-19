'use client';

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import {
  ThemeVariables,
  DEFAULT_THEME_VARIABLES,
  THEME_PRESETS,
  CSS_VARIABLE_MAP,
} from '@/lib/theme-config';

interface ThemeCustomizerContextType {
  variables: ThemeVariables;
  activePresetId: string | null;
  updateVariable: (key: keyof ThemeVariables, value: string) => void;
  updateMultipleVariables: (updates: Partial<ThemeVariables>) => void;
  setPreset: (presetId: string) => void;
  resetToDefaults: () => void;
  exportJSON: () => string;
  importJSON: (jsonStr: string) => boolean;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  toggleCustomizer: () => void;
}

const STORAGE_KEY = 'kompilex_dynamic_theme_v2';
const PRESET_KEY = 'kompilex_dynamic_preset_v2';

const ThemeCustomizerContext = createContext<ThemeCustomizerContextType | null>(null);

export function ThemeCustomizerProvider({ children }: { children: React.ReactNode }) {
  const [variables, setVariables] = useState<ThemeVariables>(DEFAULT_THEME_VARIABLES);
  const [activePresetId, setActivePresetId] = useState<string | null>('default');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  // Helper to apply CSS vars to :root
  const applyVariablesToDom = (vars: ThemeVariables) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, val]) => {
      const cssVarName = CSS_VARIABLE_MAP[key as keyof ThemeVariables];
      if (cssVarName) {
        root.style.setProperty(cssVarName, val);
      }
    });
  };

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const storedPreset = localStorage.getItem(PRESET_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const merged = { ...DEFAULT_THEME_VARIABLES, ...parsed };
        setVariables(merged);
        applyVariablesToDom(merged);
        if (storedPreset) setActivePresetId(storedPreset);
      } else {
        applyVariablesToDom(DEFAULT_THEME_VARIABLES);
      }
    } catch {
      applyVariablesToDom(DEFAULT_THEME_VARIABLES);
    }
    setMounted(true);
  }, []);

  // Keep other tabs / the admin preview iframe in sync when the theme changes
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY && e.key !== PRESET_KEY && e.key !== null) return;
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        const next = stored ? { ...DEFAULT_THEME_VARIABLES, ...JSON.parse(stored) } : DEFAULT_THEME_VARIABLES;
        setVariables(next);
        applyVariablesToDom(next);
        setActivePresetId(localStorage.getItem(PRESET_KEY) || (stored ? 'custom' : 'default'));
      } catch {
        // ignore
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Update a single variable
  const updateVariable = (key: keyof ThemeVariables, value: string) => {
    startTransition(() => {
      setVariables(prev => {
        const next = { ...prev, [key]: value };
        applyVariablesToDom(next);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
          localStorage.setItem(PRESET_KEY, 'custom');
        } catch {
          // ignore
        }
        return next;
      });
      setActivePresetId('custom');
    });
  };

  // Update multiple variables
  const updateMultipleVariables = (updates: Partial<ThemeVariables>) => {
    startTransition(() => {
      setVariables(prev => {
        const next = { ...prev, ...updates };
        applyVariablesToDom(next);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
          localStorage.setItem(PRESET_KEY, 'custom');
        } catch {
          // ignore
        }
        return next;
      });
      setActivePresetId('custom');
    });
  };

  // Apply a preset
  const setPreset = (presetId: string) => {
    const found = THEME_PRESETS.find(p => p.id === presetId);
    if (!found) return;
    startTransition(() => {
      const next = { ...found.variables };
      setVariables(next);
      setActivePresetId(presetId);
      applyVariablesToDom(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        localStorage.setItem(PRESET_KEY, presetId);
      } catch {
        // ignore
      }
    });
  };

  // Reset to original redesign defaults
  const resetToDefaults = () => {
    startTransition(() => {
      setVariables(DEFAULT_THEME_VARIABLES);
      setActivePresetId('default');
      applyVariablesToDom(DEFAULT_THEME_VARIABLES);
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.setItem(PRESET_KEY, 'default');
      } catch {
        // ignore
      }
    });
  };

  // Export JSON string
  const exportJSON = () => {
    return JSON.stringify(
      {
        preset: activePresetId,
        variables,
      },
      null,
      2
    );
  };

  // Import JSON string
  const importJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      const incomingVars = parsed.variables || parsed;
      const merged = { ...DEFAULT_THEME_VARIABLES, ...incomingVars };
      setVariables(merged);
      setActivePresetId(parsed.preset || 'custom');
      applyVariablesToDom(merged);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return true;
    } catch {
      return false;
    }
  };

  const toggleCustomizer = () => setIsCustomizerOpen(prev => !prev);

  return (
    <ThemeCustomizerContext.Provider
      value={{
        variables,
        activePresetId,
        updateVariable,
        updateMultipleVariables,
        setPreset,
        resetToDefaults,
        exportJSON,
        importJSON,
        isCustomizerOpen,
        setIsCustomizerOpen,
        toggleCustomizer,
      }}
    >
      {children}
    </ThemeCustomizerContext.Provider>
  );
}

export function useThemeCustomizer() {
  const context = useContext(ThemeCustomizerContext);
  if (!context) {
    throw new Error('useThemeCustomizer must be used within ThemeCustomizerProvider');
  }
  return context;
}
