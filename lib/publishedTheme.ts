import { CSS_VARIABLE_MAP, type ThemeVariables } from './theme-config';
import { storeDelete, storeGet, storeSet } from './store';

const KEY = 'theme';

export type PublishedTheme = Partial<ThemeVariables>;

export async function getPublishedTheme(): Promise<PublishedTheme | null> {
  try {
    return await storeGet<PublishedTheme>(KEY);
  } catch {
    return null;
  }
}

export async function publishTheme(vars: PublishedTheme) {
  // keep only known keys with plain string values
  const clean: Record<string, string> = {};
  for (const k of Object.keys(CSS_VARIABLE_MAP)) {
    const v = (vars as Record<string, unknown>)[k];
    if (typeof v === 'string' && v.length < 200 && !/[;{}<>]/.test(v)) clean[k] = v;
  }
  await storeSet(KEY, clean);
}

export async function unpublishTheme() {
  await storeDelete(KEY);
}

// CSS text applied on every page so visitors see the published theme without a flash.
export function themeToCss(vars: PublishedTheme): string {
  const decl = Object.entries(vars)
    .map(([k, v]) => {
      const name = CSS_VARIABLE_MAP[k as keyof ThemeVariables];
      return name && typeof v === 'string' ? `${name}:${v}` : '';
    })
    .filter(Boolean)
    .join(';');
  return decl ? `:root{${decl}}` : '';
}
