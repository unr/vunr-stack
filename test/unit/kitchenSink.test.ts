import { describe, expect, it } from 'vitest'
import {
  kitchenSinkPages,
  primaryPalette,
  warmNeutralPalette,
} from '../../shared/kitchenSink'

describe('kitchen sink metadata', () => {
  it('lists the expected browsable demo pages in order', () => {
    expect(kitchenSinkPages.map(page => page.path)).toEqual([
      '/kitchen-sink/theme',
      '/kitchen-sink/typography',
      '/kitchen-sink/buttons',
      '/kitchen-sink/forms',
      '/kitchen-sink/cards',
      '/kitchen-sink/navigation',
      '/kitchen-sink/feedback',
      '/kitchen-sink/overlays',
      '/kitchen-sink/data',
      '/kitchen-sink/content',
      '/kitchen-sink/icons',
    ])
  })

  it('exposes complete theme palettes for visual inspection', () => {
    expect(primaryPalette).toHaveLength(11)
    expect(warmNeutralPalette).toHaveLength(11)
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
    expect(primaryPalette.find(swatch => swatch.shade === 500)?.hex).toBe('#e86f1a')
    expect(warmNeutralPalette.find(swatch => swatch.shade === 950)?.hex).toBe('#120d0b')
  })
})
