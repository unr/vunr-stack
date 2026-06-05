import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useAgentVerificationStore } from '../../app/stores/agentVerification'

describe('agent verification store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('summarizes represented starter checks', () => {
    const store = useAgentVerificationStore()

    expect(store.items).toHaveLength(8)
    expect(store.representedCount).toBe(8)
    expect(store.summaryLabel).toBe('8 of 8 checks represented')
    expect(store.items.map(item => item.label)).toContain('Context7 docs policy')
  })
})
