import { describe, expect, it } from 'vitest'
import {
  kitchenSinkPages,
  primaryPalette,
  surfaceTokens,
} from '../../shared/kitchenSink'

describe('kitchen sink metadata', () => {
  it('lists the expected browsable demo pages in order', () => {
    expect(kitchenSinkPages.map(page => page.path)).toEqual([
      '/kitchen-sink/foundation',
      '/kitchen-sink/components',
      '/kitchen-sink/forms',
      '/kitchen-sink/data',
      '/kitchen-sink/overlays',
      '/kitchen-sink/content',
      '/kitchen-sink/app-shell',
    ])
  })

  it('exposes neutral theme tokens for visual inspection', () => {
    expect(primaryPalette).toHaveLength(11)
    expect(primaryPalette.map(swatch => swatch.shade)).toEqual([
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      950,
    ])
    expect(primaryPalette.find(swatch => swatch.shade === 500)?.cssColor).toBe('oklch(0.62 0.005 286)')
    expect(surfaceTokens.map(token => token.label)).toEqual([
      'Page',
      'Sidebar',
      'Panel',
      'Popover',
      'Raised',
    ])
  })
})
