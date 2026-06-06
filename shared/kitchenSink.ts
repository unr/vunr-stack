export const paletteShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

export type PaletteShade = typeof paletteShades[number]

export interface PaletteSwatch {
  shade: PaletteShade
  hex: string
}

export interface KitchenSinkPageMeta {
  label: string
  title: string
  description: string
  path: string
  icon: string
}

export const primaryPalette: PaletteSwatch[] = [
  { shade: 50, hex: '#fff7ed' },
  { shade: 100, hex: '#ffedd5' },
  { shade: 200, hex: '#fed7aa' },
  { shade: 300, hex: '#fdba74' },
  { shade: 400, hex: '#fb923c' },
  { shade: 500, hex: '#e86f1a' },
  { shade: 600, hex: '#c75612' },
  { shade: 700, hex: '#9f4212' },
  { shade: 800, hex: '#7f3513' },
  { shade: 900, hex: '#642c12' },
  { shade: 950, hex: '#341407' },
]

export const warmNeutralPalette: PaletteSwatch[] = [
  { shade: 50, hex: '#faf7f2' },
  { shade: 100, hex: '#f1ebe3' },
  { shade: 200, hex: '#e5d8ca' },
  { shade: 300, hex: '#d1bda9' },
  { shade: 400, hex: '#aa8f78' },
  { shade: 500, hex: '#866c58' },
  { shade: 600, hex: '#654f41' },
  { shade: 700, hex: '#4b3b31' },
  { shade: 800, hex: '#332923' },
  { shade: 900, hex: '#211b18' },
  { shade: 950, hex: '#120d0b' },
]

export const kitchenSinkPages: KitchenSinkPageMeta[] = [
  {
    label: 'Theme',
    title: 'Theme tokens',
    description: 'Burnt-orange primary color, warm neutral surfaces, semantic colors, borders, and radius.',
    path: '/kitchen-sink/theme',
    icon: 'i-lucide-palette',
  },
  {
    label: 'Typography',
    title: 'Typography',
    description: 'Headings, body text, links, lists, quotes, code, and prose defaults.',
    path: '/kitchen-sink/typography',
    icon: 'i-lucide-type',
  },
  {
    label: 'Buttons',
    title: 'Buttons',
    description: 'Common Nuxt UI button colors, variants, sizes, icons, loading, and disabled states.',
    path: '/kitchen-sink/buttons',
    icon: 'i-lucide-square-mouse-pointer',
  },
  {
    label: 'Forms',
    title: 'Forms',
    description: 'Fields, labels, help text, error text, selection controls, sliders, and submit actions.',
    path: '/kitchen-sink/forms',
    icon: 'i-lucide-clipboard-list',
  },
  {
    label: 'Cards',
    title: 'Cards',
    description: 'Content panels, project summaries, stats, empty states, skeletons, and focusable links.',
    path: '/kitchen-sink/cards',
    icon: 'i-lucide-panels-top-left',
  },
  {
    label: 'Navigation',
    title: 'Navigation',
    description: 'Menus, breadcrumbs, tabs, pagination, and compact search patterns.',
    path: '/kitchen-sink/navigation',
    icon: 'i-lucide-navigation',
  },
  {
    label: 'Feedback',
    title: 'Feedback',
    description: 'Alerts, badges, progress, skeletons, toasts, empty states, and error states.',
    path: '/kitchen-sink/feedback',
    icon: 'i-lucide-message-circle-warning',
  },
  {
    label: 'Overlays',
    title: 'Overlays',
    description: 'Modal, slideover, popover, tooltip, dropdown, accordion, and collapsible examples.',
    path: '/kitchen-sink/overlays',
    icon: 'i-lucide-panels-top-left',
  },
  {
    label: 'Data',
    title: 'Data display',
    description: 'Static tables, list rows, status badges, avatars, and stat grids.',
    path: '/kitchen-sink/data',
    icon: 'i-lucide-table-2',
  },
  {
    label: 'Content',
    title: 'Content',
    description: 'Nuxt Content collection querying, Markdown rendering, and prose treatment.',
    path: '/kitchen-sink/content',
    icon: 'i-lucide-file-text',
  },
  {
    label: 'Icons',
    title: 'Icons',
    description: 'Lucide icon usage through Nuxt UI and Iconify names.',
    path: '/kitchen-sink/icons',
    icon: 'i-lucide-icons',
  },
]

export const kitchenSinkOverviewStats = [
  { label: 'Demo pages', value: kitchenSinkPages.length.toString(), icon: 'i-lucide-layout-dashboard' },
  { label: 'Primary shades', value: primaryPalette.length.toString(), icon: 'i-lucide-palette' },
  { label: 'Neutral shades', value: warmNeutralPalette.length.toString(), icon: 'i-lucide-swatch-book' },
  { label: 'Content docs', value: 'typed', icon: 'i-lucide-file-text' },
] as const
