<script setup lang="ts">
import { reactive } from 'vue'

useSeoMeta({
  title: 'App shell',
  description: 'Neutral dark product shell showcase for the kitchen sink.',
})

const settings = reactive({
  compactMode: true,
  releaseNotes: false,
  reviewGate: 'manual',
})

const reviewGateItems = [
  { label: 'Manual review', value: 'manual' },
  { label: 'Verification only', value: 'verify' },
  { label: 'Draft mode', value: 'draft' },
]

const rows = [
  { route: '/kitchen-sink/foundation', owner: 'Design', status: 'Ready', updated: '2m ago' },
  { route: '/kitchen-sink/components', owner: 'UI', status: 'Review', updated: '8m ago' },
  { route: '/kitchen-sink/content', owner: 'Docs', status: 'Draft', updated: '19m ago' },
]

const columns = [
  { accessorKey: 'route', header: 'Route' },
  { accessorKey: 'owner', header: 'Owner' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'updated', header: 'Updated' },
]

const activity = [
  { label: 'Theme tokens switched to neutral', time: 'Now', icon: 'i-lucide-circle' },
  { label: 'Foundation route added to shell nav', time: '4m', icon: 'i-lucide-panel-left' },
  { label: 'Content sample kept in docs collection', time: '11m', icon: 'i-lucide-file-text' },
]

const statusColor = {
  Ready: 'success',
  Review: 'warning',
  Draft: 'neutral',
} as const
</script>

<template>
  <KitchenSinkPage
    title="App shell"
    description="A compact command workspace that demonstrates how the neutral shell feels with real product UI density."
    icon="i-lucide-layout-dashboard"
  >
    <section class="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.75fr)]">
      <div class="rounded-lg border border-default bg-elevated/60">
        <div class="flex flex-col gap-3 border-b border-default p-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="min-w-0">
            <p class="text-xs font-medium uppercase tracking-normal text-dimmed">
              Command workspace
            </p>
            <h2 class="mt-1 text-lg font-semibold text-highlighted">
              Starter route review
            </h2>
          </div>

          <div class="flex flex-wrap gap-2">
            <UButton icon="i-lucide-play">
              Run verify
            </UButton>
            <UButton color="neutral" variant="outline" icon="i-lucide-settings">
              Settings
            </UButton>
          </div>
        </div>

        <div class="grid gap-4 p-4 lg:grid-cols-[14rem_minmax(0,1fr)]">
          <aside class="space-y-2 rounded-md border border-default bg-muted/35 p-2">
            <p class="px-2 py-1 text-xs font-medium uppercase tracking-normal text-dimmed">
              Projects
            </p>
            <button class="flex w-full items-center gap-2 rounded-md bg-accented px-2.5 py-2 text-left text-sm font-medium text-highlighted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <UIcon name="i-lucide-terminal" class="size-4" aria-hidden="true" />
              unr-stack
            </button>
            <button class="flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm font-medium text-muted hover:bg-accented/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <UIcon name="i-lucide-git-branch" class="size-4" aria-hidden="true" />
              Template lab
            </button>
            <button class="flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm font-medium text-muted hover:bg-accented/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <UIcon name="i-lucide-file-text" class="size-4" aria-hidden="true" />
              Content fixtures
            </button>
          </aside>

          <div class="min-w-0 space-y-4">
            <div
              role="search"
              aria-label="Command search"
              class="flex h-10 items-center gap-2 rounded-md border border-default bg-muted/35 px-3 text-sm text-muted"
            >
              <UIcon name="i-lucide-search" class="size-4 shrink-0" aria-hidden="true" />
              <span class="min-w-0 flex-1 truncate">Search routes, components, docs...</span>
              <UKbd value="meta" />
              <UKbd value="K" />
            </div>

            <UTable :data="rows" :columns="columns">
              <template #status-cell="{ row }">
                <UBadge :color="statusColor[row.original.status as keyof typeof statusColor]" variant="soft">
                  {{ row.original.status }}
                </UBadge>
              </template>
            </UTable>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <KitchenSinkExample title="Workspace user" description="Compact account area without auth scaffolding.">
          <div class="flex items-center gap-3">
            <UAvatar text="UN" alt="unr-stack local user" />
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-highlighted">
                Local builder
              </p>
              <p class="truncate text-sm text-muted">
                No auth or account model included
              </p>
            </div>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Activity feed">
          <ol class="space-y-3">
            <li v-for="item in activity" :key="item.label" class="flex gap-3">
              <span class="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-default bg-muted/45 text-toned">
                <UIcon :name="item.icon" class="size-4" aria-hidden="true" />
              </span>
              <div class="min-w-0">
                <p class="text-sm text-highlighted">
                  {{ item.label }}
                </p>
                <p class="text-xs text-dimmed">
                  {{ item.time }}
                </p>
              </div>
            </li>
          </ol>
        </KitchenSinkExample>
      </div>
    </section>

    <section class="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <KitchenSinkExample title="Settings card" description="Local form state only. No backend or persistence is introduced.">
        <form class="space-y-4" @submit.prevent>
          <USwitch
            v-model="settings.compactMode"
            label="Compact navigation"
            description="Use smaller controls and dense rows for repeated work."
          />
          <UCheckbox
            v-model="settings.releaseNotes"
            label="Draft release notes"
            description="Local mock setting for content-heavy projects."
          />
          <UFormField label="Review gate" name="reviewGate">
            <USelect v-model="settings.reviewGate" :items="reviewGateItems" />
          </UFormField>
          <div class="flex flex-wrap gap-2">
            <UButton type="submit" icon="i-lucide-save">
              Save mock settings
            </UButton>
            <UButton type="button" color="neutral" variant="outline">
              Reset
            </UButton>
          </div>
        </form>
      </KitchenSinkExample>

      <KitchenSinkExample title="Empty and loading states" description="Shell pages need calm non-happy paths.">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="flex min-h-44 flex-col items-center justify-center gap-3 rounded-md border border-dashed border-accented bg-muted/35 p-5 text-center">
            <UIcon name="i-lucide-inbox" class="size-8 text-toned" aria-hidden="true" />
            <div>
              <h3 class="font-semibold text-highlighted">
                No route notes
              </h3>
              <p class="mt-1 text-sm text-muted">
                Add a note after the first review pass.
              </p>
            </div>
            <UButton size="sm" color="neutral" variant="outline">
              Add note
            </UButton>
          </div>

          <div class="space-y-3 rounded-md border border-default bg-muted/35 p-4">
            <USkeleton class="h-5 w-32" />
            <USkeleton class="h-16 w-full" />
            <USkeleton class="h-4 w-5/6" />
            <USkeleton class="h-4 w-2/3" />
          </div>
        </div>
      </KitchenSinkExample>
    </section>
  </KitchenSinkPage>
</template>
