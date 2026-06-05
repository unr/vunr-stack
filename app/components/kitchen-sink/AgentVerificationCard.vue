<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAgentVerificationStore } from '../../stores/agentVerification'

const store = useAgentVerificationStore()
const { items, summaryLabel } = storeToRefs(store)
const [detailsVisible, toggleDetails] = useToggle(false)
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-bot" class="size-5 text-primary" aria-hidden="true" />
            <h1 class="text-xl font-semibold text-highlighted">
              Agentic setup verification
            </h1>
          </div>
          <p class="max-w-2xl text-sm text-muted">
            Local smoke feature for the Codex-first Nuxt/Vue starter baseline.
          </p>
        </div>

        <UBadge variant="soft">
          {{ summaryLabel }}
        </UBadge>
      </div>
    </template>

    <ul class="grid gap-3 sm:grid-cols-2" aria-label="Represented starter checks">
      <li
        v-for="item in items"
        :key="item.label"
        class="flex min-h-24 gap-3 rounded-md border border-default bg-muted/30 p-3"
      >
        <UIcon :name="item.icon" class="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <div class="min-w-0 space-y-1">
          <div class="flex flex-wrap items-center gap-2">
            <h2 class="text-sm font-medium text-highlighted">
              {{ item.label }}
            </h2>
            <UBadge size="sm" variant="subtle">
              Represented
            </UBadge>
          </div>
          <p class="text-sm text-muted">
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>

    <template #footer>
      <div class="space-y-4">
        <UButton
          type="button"
          variant="outline"
          size="sm"
          :aria-expanded="detailsVisible"
          aria-controls="agent-verification-details"
          @click="toggleDetails()"
        >
          <UIcon
            :name="detailsVisible ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
            class="size-4"
            aria-hidden="true"
          />
          {{ detailsVisible ? 'Hide details' : 'Show details' }}
        </UButton>

        <section
          v-if="detailsVisible"
          id="agent-verification-details"
          class="rounded-md border border-default bg-muted/30 p-4 text-sm text-muted"
        >
          <p>
            This card intentionally touches Nuxt UI, Pinia, VueUse, local Lucide icons, tests,
            and a Nuxt Content page. It stays small so starter regressions are easy to review.
          </p>
        </section>
      </div>
    </template>
  </UCard>
</template>
