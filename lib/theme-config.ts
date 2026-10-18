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

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'default',
    name: 'Emerald & Acid Lime',
    description: 'Original Redesign signature direction with chalk ground, green-black ink and high-energy lime accent.',
    badge: 'Official',
    variables: { ...DEFAULT_THEME_VARIABLES },
  },
  {
    id: 'option-a-cobalt',
    name: 'Option A: Cobalt Blue',
    description: 'Modern enterprise fintech palette with crisp cobalt blue, icy tints, and slate-navy contrast.',
    badge: 'Option A',
    variables: {
      ...DEFAULT_THEME_VARIABLES,
      bgPage: '#F8FAFF',
      textMain: '#0F1B3D',
      textMuted: '#4B5675',
      borderMain: '#D9E2F7',
      borderLight: '#CBD9FF',
      surface: '#FFFFFF',
      surfaceTint: '#E8EEFF',
      surfaceSoft: '#F0F4FF',
      accentEmerald: '#1B3FCC',
      accentLime: '#2457F5',
      accentLimeHover: '#FFFFFF',
      highlightMarker: '#CBD9FF',
      btnInkBg: '#0F1B3D',
      btnInkText: '#F8FAFF',
      btnInkHoverBg: '#2457F5',
      btnLimeBg: '#2457F5',
      btnLimeText: '#FFFFFF',
      btnLimeHoverBg: '#1B3FCC',
      btnLineBorder: '#0F1B3D',
      btnLineText: '#0F1B3D',
      btnLineHoverBg: '#0F1B3D',
      btnLineHoverText: '#FFFFFF',
      darkBg: '#0B132B',
      darkText: '#F8FAFF',
      darkMuted: '#8E9EBE',
      darkBorder: '#1D2A4F',
      darkAccent: '#60A5FA',
      stageBg: '#E8EEFF',
      stageWinHeader: '#F0F4FF',
      stageBarsDefault: '#0F1B3D',
      stageBarsHighlight: '#2457F5',
      cardIconBg: '#2457F5',
      cardIconHoverBg: '#0F1B3D',
      cardIconStroke: '#FFFFFF',
      cardIconHoverStroke: '#60A5FA',
      marqueeStar: '#2457F5',
      marqueeDarkStar: '#60A5FA',
      rackCables: '#2457F5',
      rackLedLime: '#60A5FA',
    },
  },
  {
    id: 'option-b-teal',
    name: 'Option B: Deep Teal',
    description: 'Calm, architectural, bio-digital vibe with deep ocean teal, mint highlights and pristine balance.',
    badge: 'Option B',
    variables: {
      ...DEFAULT_THEME_VARIABLES,
      bgPage: '#F5FBFA',
      textMain: '#0C2A28',
      textMuted: '#46605D',
      borderMain: '#D2E8E4',
      borderLight: '#B7E6DF',
      surface: '#FFFFFF',
      surfaceTint: '#DDF3EF',
      surfaceSoft: '#EBF7F5',
      accentEmerald: '#07564F',
      accentLime: '#0B7F73',
      accentLimeHover: '#FFFFFF',
      highlightMarker: '#B7E6DF',
      btnInkBg: '#0C2A28',
      btnInkText: '#F5FBFA',
      btnInkHoverBg: '#0B7F73',
      btnLimeBg: '#0B7F73',
      btnLimeText: '#FFFFFF',
      btnLimeHoverBg: '#07564F',
      btnLineBorder: '#0C2A28',
      btnLineText: '#0C2A28',
      btnLineHoverBg: '#0C2A28',
      btnLineHoverText: '#FFFFFF',
      darkBg: '#07201E',
      darkText: '#F5FBFA',
      darkMuted: '#81A3A0',
      darkBorder: '#163B38',
      darkAccent: '#2DD4BF',
      stageBg: '#DDF3EF',
      stageBarsDefault: '#0C2A28',
      stageBarsHighlight: '#0B7F73',
      cardIconBg: '#0B7F73',
      cardIconHoverBg: '#0C2A28',
      cardIconStroke: '#FFFFFF',
      cardIconHoverStroke: '#2DD4BF',
      marqueeStar: '#0B7F73',
      marqueeDarkStar: '#2DD4BF',
      rackCables: '#2DD4BF',
      rackLedLime: '#2DD4BF',
    },
  },
  {
    id: 'option-c-orange',
    name: 'Option C: Burnt Orange',
    description: 'Warm, tactile, craft-inspired palette with terracotta, amber highlights and cozy cream ground.',
    badge: 'Option C',
    variables: {
      ...DEFAULT_THEME_VARIABLES,
      bgPage: '#FFFAF6',
      textMain: '#2B1810',
      textMuted: '#6B5446',
      borderMain: '#F3DFD0',
      borderLight: '#FFD2B3',
      surface: '#FFFFFF',
      surfaceTint: '#FFEADB',
      surfaceSoft: '#FFF2E8',
      accentEmerald: '#9A3412',
      accentLime: '#C2410C',
      accentLimeHover: '#FFFFFF',
      highlightMarker: '#FFD2B3',
      btnInkBg: '#2B1810',
      btnInkText: '#FFFAF6',
      btnInkHoverBg: '#C2410C',
      btnLimeBg: '#C2410C',
      btnLimeText: '#FFFFFF',
      btnLimeHoverBg: '#9A3412',
      btnLineBorder: '#2B1810',
      btnLineText: '#2B1810',
      btnLineHoverBg: '#2B1810',
      btnLineHoverText: '#FFFFFF',
      darkBg: '#20110A',
      darkText: '#FFFAF6',
      darkMuted: '#A68F83',
      darkBorder: '#3D2419',
      darkAccent: '#FB923C',
      stageBg: '#FFEADB',
      stageBarsDefault: '#2B1810',
      stageBarsHighlight: '#C2410C',
      cardIconBg: '#C2410C',
      cardIconHoverBg: '#2B1810',
      cardIconStroke: '#FFFFFF',
      cardIconHoverStroke: '#FB923C',
      marqueeStar: '#C2410C',
      marqueeDarkStar: '#FB923C',
      rackCables: '#FB923C',
      rackLedLime: '#FB923C',
    },
  },
  {
    id: 'option-d-emerald',
    name: 'Option D: Emerald Green',
    description: 'Lush botanical luxury with deep forest green, mint tints and sharp contrast.',
    badge: 'Option D',
    variables: {
      ...DEFAULT_THEME_VARIABLES,
      bgPage: '#F6FBF8',
      textMain: '#0F2A1D',
      textMuted: '#44614F',
      borderMain: '#D3E8DB',
      borderLight: '#BDE8CF',
      surface: '#FFFFFF',
      surfaceTint: '#DDF3E6',
      surfaceSoft: '#EAF6EE',
      accentEmerald: '#075A31',
      accentLime: '#0B7A43',
      accentLimeHover: '#FFFFFF',
      highlightMarker: '#BDE8CF',
      btnInkBg: '#0F2A1D',
      btnInkText: '#F6FBF8',
      btnInkHoverBg: '#0B7A43',
      btnLimeBg: '#0B7A43',
      btnLimeText: '#FFFFFF',
      btnLimeHoverBg: '#075A31',
      btnLineBorder: '#0F2A1D',
      btnLineText: '#0F2A1D',
      btnLineHoverBg: '#0F2A1D',
      btnLineHoverText: '#FFFFFF',
      darkBg: '#091D13',
      darkText: '#F6FBF8',
      darkMuted: '#83A593',
      darkBorder: '#1A3628',
      darkAccent: '#34D399',
      stageBg: '#DDF3E6',
      stageBarsDefault: '#0F2A1D',
      stageBarsHighlight: '#0B7A43',
      cardIconBg: '#0B7A43',
      cardIconHoverBg: '#0F2A1D',
      cardIconStroke: '#FFFFFF',
      cardIconHoverStroke: '#34D399',
      marqueeStar: '#0B7A43',
      marqueeDarkStar: '#34D399',
      rackCables: '#34D399',
      rackLedLime: '#34D399',
    },
  },
  {
    id: 'dark-obsidian',
    name: 'Dark Obsidian Luxury',
    description: 'Deep space dark mode with pitch black surfaces, neon green pulses and glow outlines.',
    badge: 'Dark Mode',
    variables: {
      ...DEFAULT_THEME_VARIABLES,
      bgPage: '#090D0B',
      textMain: '#F2F6F3',
      textMuted: '#8E9C94',
      borderMain: '#1A2620',
      borderLight: '#24332B',
      surface: '#111714',
      surfaceTint: '#16221D',
      surfaceSoft: '#1A2822',
      accentEmerald: '#1FB36B',
      accentLime: '#C8F53C',
      accentLimeHover: '#FFFFFF',
      highlightMarker: 'rgba(200, 245, 60, 0.25)',
      btnInkBg: '#FFFFFF',
      btnInkText: '#090D0B',
      btnInkHoverBg: '#C8F53C',
      btnLimeBg: '#C8F53C',
      btnLimeText: '#090D0B',
      btnLimeHoverBg: '#FFFFFF',
      btnLineBorder: '#F2F6F3',
      btnLineText: '#F2F6F3',
      btnLineHoverBg: '#F2F6F3',
      btnLineHoverText: '#090D0B',
      darkBg: '#060807',
      darkText: '#F2F6F3',
      darkMuted: '#8E9C94',
      darkBorder: '#1A2620',
      darkAccent: '#C8F53C',
      stageBg: '#121A15',
      stageWinBg: '#111714',
      stageWinHeader: '#16221D',
      stageBarsDefault: '#24332B',
      stageBarsHighlight: '#C8F53C',
      stageCardFloat: '#141D18',
      cardHoverBorder: '#C8F53C',
      cardIconBg: '#C8F53C',
      cardIconHoverBg: '#FFFFFF',
      cardIconStroke: '#090D0B',
      cardIconHoverStroke: '#090D0B',
      marqueeText: '#F2F6F3',
      marqueeStar: '#C8F53C',
      marqueeDarkStar: '#C8F53C',
      rackBg: '#060807',
      rackUnitBg: '#0D1410',
      rackCables: '#C8F53C',
      cardShadow: 'rgba(0, 0, 0, 0.7)',
    },
  },
  {
    id: 'cyber-neon',
    name: 'Cyberpunk Purple & Cyan',
    description: 'Electric synthwave aesthetic with deep violet canvas, neon cyan and fluorescent magenta accents.',
    badge: 'Futuristic',
    variables: {
      ...DEFAULT_THEME_VARIABLES,
      bgPage: '#0D0814',
      textMain: '#FAF5FF',
      textMuted: '#9B8DB5',
      borderMain: '#2D1B42',
      borderLight: '#442866',
      surface: '#150E22',
      surfaceTint: '#211438',
      surfaceSoft: '#291847',
      accentEmerald: '#A855F7',
      accentLime: '#06B6D4',
      accentLimeHover: '#FFFFFF',
      highlightMarker: 'rgba(6, 182, 212, 0.28)',
      btnInkBg: '#FAF5FF',
      btnInkText: '#0D0814',
      btnInkHoverBg: '#A855F7',
      btnLimeBg: '#06B6D4',
      btnLimeText: '#0D0814',
      btnLimeHoverBg: '#FFFFFF',
      btnLineBorder: '#FAF5FF',
      btnLineText: '#FAF5FF',
      btnLineHoverBg: '#FAF5FF',
      btnLineHoverText: '#0D0814',
      darkBg: '#08040C',
      darkText: '#FAF5FF',
      darkMuted: '#9B8DB5',
      darkBorder: '#2D1B42',
      darkAccent: '#06B6D4',
      stageBg: '#1A0F2E',
      stageWinBg: '#150E22',
      stageWinHeader: '#211438',
      stageBarsDefault: '#3B2359',
      stageBarsHighlight: '#06B6D4',
      stageCardFloat: '#1D1230',
      cardHoverBorder: '#06B6D4',
      cardIconBg: '#06B6D4',
      cardIconHoverBg: '#A855F7',
      cardIconStroke: '#0D0814',
      cardIconHoverStroke: '#FAF5FF',
      marqueeText: '#FAF5FF',
      marqueeStar: '#06B6D4',
      marqueeDarkStar: '#06B6D4',
      rackBg: '#08040C',
      rackUnitBg: '#120A1E',
      rackCables: '#06B6D4',
      rackLedLime: '#06B6D4',
      rackLedGreen: '#A855F7',
      cardShadow: 'rgba(0, 0, 0, 0.8)',
    },
  },
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
