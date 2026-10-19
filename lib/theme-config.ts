export interface ThemeVariables {
  // Base & Ground
  bgPage: string;
  textMain: string;
  textMuted: string;
  borderMain: string;
  borderLight: string;
  surface: string;
  surfaceTint: string;
  surfaceSoft: string;

  // Accents
  accentEmerald: string;
  accentLime: string;
  accentLimeHover: string;
  highlightMarker: string;

  // Buttons
  btnInkBg: string;
  btnInkText: string;
  btnInkHoverBg: string;
  btnLimeBg: string;
  btnLimeText: string;
  btnLimeHoverBg: string;
  btnLineBorder: string;
  btnLineText: string;
  btnLineHoverBg: string;
  btnLineHoverText: string;

  // Dark Sections & Footer
  darkBg: string;
  darkText: string;
  darkMuted: string;
  darkBorder: string;
  darkAccent: string;

  // Segment: Hero Stage
  stageBg: string;
  stageWinBg: string;
  stageWinHeader: string;
  stagePulseDot: string;
  stageBarsDefault: string;
  stageBarsHighlight: string;
  stageCardFloat: string;

  // Segment: Server Rack (DevOps)
  rackBg: string;
  rackUnitBg: string;
  rackLedGreen: string;
  rackLedLime: string;
  rackLedAmber: string;
  rackCables: string;

  // Segment: Marquees
  marqueeText: string;
  marqueeStar: string;
  marqueeDarkStar: string;

  // Segment: Cards & Icons
  cardHoverBorder: string;
  cardIconBg: string;
  cardIconHoverBg: string;
  cardIconStroke: string;
  cardIconHoverStroke: string;
  cardShadow: string;
}

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  badge: string;
  variables: ThemeVariables;
}

export const DEFAULT_THEME_VARIABLES: ThemeVariables = {
  // Base & Ground
  bgPage: '#F4F6F1',
  textMain: '#0C1410',
  textMuted: '#4A5650',
  borderMain: '#D8DDD2',
  borderLight: '#CBD2C3',
  surface: '#FFFFFF',
  surfaceTint: '#E3EAD9',
  surfaceSoft: '#EEF1E8',

  // Accents
  accentEmerald: '#0A6B4A',
  accentLime: '#C8F53C',
  accentLimeHover: '#FFFFFF',
  highlightMarker: '#C8F53C',

  // Buttons
  btnInkBg: '#0C1410',
  btnInkText: '#F4F6F1',
  btnInkHoverBg: '#0A6B4A',
  btnLimeBg: '#C8F53C',
  btnLimeText: '#0C1410',
  btnLimeHoverBg: '#FFFFFF',
  btnLineBorder: '#0C1410',
  btnLineText: '#0C1410',
  btnLineHoverBg: '#0C1410',
  btnLineHoverText: '#F4F6F1',

  // Dark Sections & Footer
  darkBg: '#0C1410',
  darkText: '#F4F6F1',
  darkMuted: '#A9B6AE',
  darkBorder: '#24332B',
  darkAccent: '#C8F53C',

  // Segment: Hero Stage
  stageBg: '#E3EAD9',
  stageWinBg: '#FFFFFF',
  stageWinHeader: '#F4F6F1',
  stagePulseDot: '#1FB36B',
  stageBarsDefault: '#0C1410',
  stageBarsHighlight: '#C8F53C',
  stageCardFloat: '#FFFFFF',

  // Segment: Server Rack (DevOps)
  rackBg: '#0C1410',
  rackUnitBg: '#121C17',
  rackLedGreen: '#1FB36B',
  rackLedLime: '#C8F53C',
  rackLedAmber: '#FFB800',
  rackCables: '#C8F53C',

  // Segment: Marquees
  marqueeText: '#2C3830',
  marqueeStar: '#C8F53C',
  marqueeDarkStar: '#C8F53C',

  // Segment: Cards & Icons
  cardHoverBorder: '#0C1410',
  cardIconBg: '#C8F53C',
  cardIconHoverBg: '#0C1410',
  cardIconStroke: '#0C1410',
  cardIconHoverStroke: '#C8F53C',
  cardShadow: 'rgba(12, 20, 16, 0.4)',
};

// Builds a full, consistent theme from a handful of light, soft colors.
interface Palette {
  ground: string; ink: string; muted: string; border: string; border2: string;
  tint: string; soft: string; accent: string; pop: string;
}

function fromPalette(p: Palette): ThemeVariables {
  return {
    ...DEFAULT_THEME_VARIABLES,
    bgPage: p.ground, textMain: p.ink, textMuted: p.muted,
    borderMain: p.border, borderLight: p.border2,
    surface: '#FFFFFF', surfaceTint: p.tint, surfaceSoft: p.soft,
    accentEmerald: p.accent, accentLime: p.pop, accentLimeHover: '#FFFFFF', highlightMarker: p.pop,
    btnInkBg: p.ink, btnInkText: p.ground, btnInkHoverBg: p.accent,
    btnLimeBg: p.pop, btnLimeText: p.ink, btnLimeHoverBg: '#FFFFFF',
    btnLineBorder: p.ink, btnLineText: p.ink, btnLineHoverBg: p.ink, btnLineHoverText: p.ground,
    darkBg: p.ink, darkText: p.ground, darkMuted: p.border2, darkBorder: 'rgba(255,255,255,0.14)', darkAccent: p.pop,
    stageBg: p.tint, stageWinBg: '#FFFFFF', stageWinHeader: p.ground, stagePulseDot: p.accent,
    stageBarsDefault: p.ink, stageBarsHighlight: p.pop, stageCardFloat: '#FFFFFF',
    rackBg: p.ink, rackUnitBg: 'rgba(255,255,255,0.07)', rackLedGreen: p.pop, rackLedLime: p.pop, rackCables: p.pop,
    marqueeText: p.ink, marqueeStar: p.pop, marqueeDarkStar: p.pop,
    cardHoverBorder: p.ink, cardIconBg: p.pop, cardIconHoverBg: p.ink, cardIconStroke: p.ink, cardIconHoverStroke: p.pop,
    cardShadow: 'rgba(15, 23, 42, 0.18)',
  };
}

const preset = (id: string, name: string, description: string, p: Palette): ThemePreset => ({
  id, name, description, badge: 'Soft', variables: fromPalette(p),
});

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'default',
    name: 'Emerald & Acid Lime',
    description: 'The KompileX signature palette: chalk ground, green-black ink and a high-energy lime accent.',
    badge: 'Official',
    variables: { ...DEFAULT_THEME_VARIABLES },
  },
  preset('sky', 'Sky Blue', 'Calm, airy blue with a clean enterprise feel.', { ground: '#F3F7FC', ink: '#0F1B2D', muted: '#51607A', border: '#D9E2EF', border2: '#C7D3E4', tint: '#E1ECF9', soft: '#ECF2FA', accent: '#1F5FD1', pop: '#9CC5FF' }),
  preset('mint', 'Soft Mint', 'Fresh teal and mint on a quiet, cool ground.', { ground: '#F2F8F6', ink: '#0E2321', muted: '#4C6663', border: '#D6E5E1', border2: '#C4D8D3', tint: '#DDEFEA', soft: '#E9F4F1', accent: '#0E7C70', pop: '#8FE3D0' }),
  preset('sand', 'Warm Sand', 'Cozy cream and peach with a terracotta accent.', { ground: '#FBF7F2', ink: '#2A1B12', muted: '#6E5A4C', border: '#EBDFD2', border2: '#DDCFBF', tint: '#F6E7D8', soft: '#F8EFE5', accent: '#B4531A', pop: '#FFC59A' }),
  preset('lavender', 'Lavender', 'Gentle violet tints with a confident purple accent.', { ground: '#F7F5FC', ink: '#1D1633', muted: '#5E5878', border: '#E3DEF2', border2: '#D3CCE8', tint: '#E8E2F7', soft: '#F0ECFA', accent: '#6A3FD0', pop: '#CDB8FF' }),
  preset('rose', 'Rose', 'Soft blush tones with a crisp raspberry accent.', { ground: '#FCF5F6', ink: '#2A1218', muted: '#70505A', border: '#F0DDE1', border2: '#E3CBD1', tint: '#F9E3E7', soft: '#FBECEF', accent: '#C02F54', pop: '#FFB3C4' }),
  preset('gold', 'Soft Gold', 'Warm ivory with muted gold highlights.', { ground: '#FAF8F1', ink: '#1E1B10', muted: '#62593F', border: '#E9E3D0', border2: '#DAD2B9', tint: '#F1EAD2', soft: '#F6F1E0', accent: '#8A6A0F', pop: '#F2D675' }),
];

export const CSS_VARIABLE_MAP: Record<keyof ThemeVariables, string> = {
  bgPage: '--kpx-bg-page',
  textMain: '--kpx-text-main',
  textMuted: '--kpx-text-muted',
  borderMain: '--kpx-border',
  borderLight: '--kpx-border-light',
  surface: '--kpx-surface',
  surfaceTint: '--kpx-surface-tint',
  surfaceSoft: '--kpx-surface-soft',
  accentEmerald: '--kpx-accent-emerald',
  accentLime: '--kpx-accent-lime',
  accentLimeHover: '--kpx-accent-lime-hover',
  highlightMarker: '--kpx-highlight-gradient',
  btnInkBg: '--kpx-btn-ink-bg',
  btnInkText: '--kpx-btn-ink-text',
  btnInkHoverBg: '--kpx-btn-ink-hover-bg',
  btnLimeBg: '--kpx-btn-lime-bg',
  btnLimeText: '--kpx-btn-lime-text',
  btnLimeHoverBg: '--kpx-btn-lime-hover-bg',
  btnLineBorder: '--kpx-btn-line-border',
  btnLineText: '--kpx-btn-line-text',
  btnLineHoverBg: '--kpx-btn-line-hover-bg',
  btnLineHoverText: '--kpx-btn-line-hover-text',
  darkBg: '--kpx-dark-bg',
  darkText: '--kpx-dark-text',
  darkMuted: '--kpx-dark-muted',
  darkBorder: '--kpx-dark-border',
  darkAccent: '--kpx-dark-accent',
  stageBg: '--kpx-stage-bg',
  stageWinBg: '--kpx-stage-win-bg',
  stageWinHeader: '--kpx-stage-win-header',
  stagePulseDot: '--kpx-stage-pulse-dot',
  stageBarsDefault: '--kpx-stage-bars-default',
  stageBarsHighlight: '--kpx-stage-bars-highlight',
  stageCardFloat: '--kpx-stage-card-float',
  rackBg: '--kpx-rack-bg',
  rackUnitBg: '--kpx-rack-unit-bg',
  rackLedGreen: '--kpx-rack-led-green',
  rackLedLime: '--kpx-rack-led-lime',
  rackLedAmber: '--kpx-rack-led-amber',
  rackCables: '--kpx-rack-cables',
  marqueeText: '--kpx-marquee-text',
  marqueeStar: '--kpx-marquee-star',
  marqueeDarkStar: '--kpx-marquee-dark-star',
  cardHoverBorder: '--kpx-card-hover-border',
  cardIconBg: '--kpx-card-icon-bg',
  cardIconHoverBg: '--kpx-card-icon-hover-bg',
  cardIconStroke: '--kpx-card-icon-stroke',
  cardIconHoverStroke: '--kpx-card-icon-hover-stroke',
  cardShadow: '--kpx-card-shadow',
};
