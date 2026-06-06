import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { NuxtPage } from '#components'

describe('kitchen sink routes', () => {
  it('renders the neutral shell overview', async () => {
    const page = await mountSuspended(NuxtPage, { route: '/kitchen-sink' })

    expect(page.text()).toContain('unr-stack kitchen sink')
    expect(page.text()).toContain('Neutral dark shell')
  })

  it('renders the foundation tokens page', async () => {
    const page = await mountSuspended(NuxtPage, { route: '/kitchen-sink/foundation' })

    expect(page.text()).toContain('Foundation')
    expect(page.text()).toContain('Neutral primary palette')
  })

  it('renders the product shell showcase', async () => {
    const page = await mountSuspended(NuxtPage, { route: '/kitchen-sink/app-shell' })

    expect(page.text()).toContain('App shell')
    expect(page.text()).toContain('Command workspace')
  })
})
