export const paletteShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

export type PaletteShade = typeof paletteShades[number]

export interface PaletteSwatch {
  shade: PaletteShade
  cssColor: string
}

export interface SurfaceToken {
  label: string
  token: string
  cssColor: string
  description: string
}

export interface KitchenSinkPageMeta {
  label: string
  title: string
  description: string
  path: string
  icon: string
  section: 'Foundations' | 'Patterns' | 'System'
}

export const primaryPalette: PaletteSwatch[] = [
  { shade: 50, cssColor: 'oklch(0.985 0.003 286)' },
  { shade: 100, cssColor: 'oklch(0.955 0.004 286)' },
  { shade: 200, cssColor: 'oklch(0.9 0.004 286)' },
  { shade: 300, cssColor: 'oklch(0.82 0.005 286)' },
  { shade: 400, cssColor: 'oklch(0.72 0.005 286)' },
  { shade: 500, cssColor: 'oklch(0.62 0.005 286)' },
  { shade: 600, cssColor: 'oklch(0.5 0.005 286)' },
  { shade: 700, cssColor: 'oklch(0.39 0.005 286)' },
  { shade: 800, cssColor: 'oklch(0.29 0.006 286)' },
  { shade: 900, cssColor: 'oklch(0.21 0.005 286)' },
  { shade: 950, cssColor: 'oklch(0.145 0.005 286)' },
]

export const surfaceTokens: SurfaceToken[] = [
  {
    label: 'Page',
    token: '--ui-bg',
    cssColor: 'oklch(0.145 0.005 286)',
    description: 'Near-black route background for dark-first product surfaces.',
  },
  {
    label: 'Sidebar',
    token: '--ui-bg-muted',
    cssColor: 'oklch(0.17 0.005 286)',
    description: 'Slight lift for navigation without separating it from the shell.',
  },
  {
    label: 'Panel',
    token: '--ui-bg-elevated',
    cssColor: 'oklch(0.205 0.005 286)',
    description: 'Default repeated panel and card surface.',
  },
  {
    label: 'Popover',
    token: '--ui-bg-accented',
    cssColor: 'oklch(0.255 0.006 286)',
    description: 'Raised interactive surface for menus, drawers, and active rows.',
  },
  {
    label: 'Raised',
    token: '--ui-bg-inverted',
    cssColor: 'oklch(0.945 0.004 286)',
    description: 'High-contrast inverted surface for code and terminal-adjacent samples.',
  },
]

export const kitchenSinkPages: KitchenSinkPageMeta[] = [
  {
    label: 'Foundation',
    title: 'Foundation',
    description: 'Neutral primary scale, dark surfaces, typography, icons, borders, radius, and semantic states.',
    path: '/kitchen-sink/foundation',
    icon: 'i-lucide-swatch-book',
    section: 'Foundations',
  },
  {
    label: 'Components',
    title: 'Components',
    description: 'Buttons, badges, cards, alerts, avatars, progress, empty, loading, and error states.',
    path: '/kitchen-sink/components',
    icon: 'i-lucide-boxes',
    section: 'Patterns',
  },
  {
    label: 'Forms',
    title: 'Forms',
    description: 'Inputs, textarea, select, radio, checkbox, switch, slider, disabled states, and help text.',
    path: '/kitchen-sink/forms',
    icon: 'i-lucide-clipboard-list',
    section: 'Patterns',
  },
  {
    label: 'Data',
    title: 'Data display',
    description: 'Dense table, status rows, activity feed, tabs, skeleton rows, empty state, and pagination.',
    path: '/kitchen-sink/data',
    icon: 'i-lucide-table-2',
    section: 'Patterns',
  },
  {
    label: 'Overlays',
    title: 'Overlays',
    description: 'Modal, slideover, popover, tooltip, dropdown, accordion, collapsible, and toast behavior.',
    path: '/kitchen-sink/overlays',
    icon: 'i-lucide-panel-top',
    section: 'Patterns',
  },
  {
    label: 'Content',
    title: 'Content',
    description: 'Nuxt Content collection querying, Markdown rendering, prose, code, and callout treatment.',
    path: '/kitchen-sink/content',
    icon: 'i-lucide-file-text',
    section: 'System',
  },
  {
    label: 'App shell',
    title: 'App shell',
    description: 'A compact product shell showcase with sidebar, command search, lists, forms, and activity.',
    path: '/kitchen-sink/app-shell',
    icon: 'i-lucide-layout-dashboard',
    section: 'System',
  },
]

export const kitchenSinkOverviewStats = [
  { label: 'Demo routes', value: kitchenSinkPages.length.toString(), icon: 'i-lucide-route' },
  { label: 'Primary scale', value: 'neutral', icon: 'i-lucide-circle' },
  { label: 'Dark surfaces', value: surfaceTokens.length.toString(), icon: 'i-lucide-layers' },
  { label: 'Content docs', value: 'typed', icon: 'i-lucide-file-text' },
] as const
