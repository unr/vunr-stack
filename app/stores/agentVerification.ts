import { defineStore } from 'pinia'

export interface AgentVerificationItem {
  label: string
  description: string
  icon: string
  represented: boolean
}

export const useAgentVerificationStore = defineStore('agent-verification', {
  state: () => ({
    items: [
      {
        label: 'Codex guidance',
        description: 'Repo instructions are centered on AGENTS.md and Codex workflow.',
        icon: 'i-lucide-bot',
        represented: true,
      },
      {
        label: 'Context7 docs policy',
        description: 'External package behavior is checked against Context7 before edits.',
        icon: 'i-lucide-book-open-check',
        represented: true,
      },
      {
        label: 'Superpowers workflow',
        description: 'Planning, TDD, and verification discipline are part of the agent flow.',
        icon: 'i-lucide-workflow',
        represented: true,
      },
      {
        label: 'Nuxt UI',
        description: 'The sample uses Nuxt UI primitives and the required CSS entry.',
        icon: 'i-lucide-panels-top-left',
        represented: true,
      },
      {
        label: 'Nuxt Content',
        description: 'A typed docs collection backs the rendered verification note.',
        icon: 'i-lucide-file-text',
        represented: true,
      },
      {
        label: 'Pinia',
        description: 'A small store owns reusable verification state and derived values.',
        icon: 'i-lucide-store',
        represented: true,
      },
      {
        label: 'VueUse',
        description: 'Details visibility is toggled with a VueUse composable.',
        icon: 'i-lucide-toggle-right',
        represented: true,
      },
      {
        label: 'Testing',
        description: 'Vitest covers the store summary contract.',
        icon: 'i-lucide-flask-conical',
        represented: true,
      },
    ] satisfies AgentVerificationItem[],
  }),
  getters: {
    representedCount: state => state.items.filter(item => item.represented).length,
    totalCount: state => state.items.length,
    summaryLabel(): string {
      return `${this.representedCount} of ${this.totalCount} checks represented`
    },
  },
})
