<script setup lang="ts">
useSeoMeta({
  title: 'Data display',
  description: 'Static table, list rows, avatars, status badges, and stat grid examples.',
})

const rows = [
  { name: 'Theme tokens', owner: 'Design', status: 'Ready', checks: 11 },
  { name: 'Content demo', owner: 'Docs', status: 'Draft', checks: 4 },
  { name: 'Form states', owner: 'Product', status: 'Review', checks: 8 },
]

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'owner', header: 'Owner' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'checks', header: 'Checks' },
]

const people = [
  { name: 'Ada Lovelace', role: 'Theme reviewer', initials: 'AL', status: 'Ready' },
  { name: 'Grace Hopper', role: 'Compiler sanity', initials: 'GH', status: 'Review' },
  { name: 'Katherine Johnson', role: 'Content flow', initials: 'KJ', status: 'Draft' },
]

const statusColor = {
  Ready: 'success',
  Review: 'warning',
  Draft: 'neutral',
} as const

const stats = [
  { label: 'Open items', value: '3', icon: 'i-lucide-list-todo' },
  { label: 'Ready checks', value: '11', icon: 'i-lucide-circle-check' },
  { label: 'Review loops', value: '2', icon: 'i-lucide-refresh-cw' },
  { label: 'Docs linked', value: '1', icon: 'i-lucide-file-text' },
] as const

const tabs = [
  { label: 'Routes', icon: 'i-lucide-route', content: 'Route coverage and shell navigation state.' },
  { label: 'Components', icon: 'i-lucide-boxes', content: 'Nuxt UI component examples and states.' },
  { label: 'Content', icon: 'i-lucide-file-text', content: 'Typed Nuxt Content fixtures.' },
]

const activity = [
  { title: 'Foundation route added', detail: 'Neutral palette and surface tokens are visible.', icon: 'i-lucide-swatch-book' },
  { title: 'Shell nav updated', detail: 'Active state uses contrast and a thin rail.', icon: 'i-lucide-panel-left' },
  { title: 'Verification pending', detail: 'Run pnpm verify after the refactor.', icon: 'i-lucide-list-checks' },
] as const
</script>

<template>
  <KitchenSinkPage
    title="Data display"
    description="Inspect local static table, list rows, avatar rows, status badges, and stat grids."
    icon="i-lucide-table-2"
  >
    <KitchenSinkSection title="Table" description="UTable handles structured display while mocked data stays local.">
      <KitchenSinkExample title="Component table">
        <UTable :data="rows" :columns="columns" />
      </KitchenSinkExample>
    </KitchenSinkSection>

    <KitchenSinkSection title="Rows and status" description="List rows pair text with icons, avatars, and badges.">
      <div class="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <KitchenSinkExample title="Avatar rows">
          <ul class="divide-y divide-default">
            <li v-for="person in people" :key="person.name" class="flex items-center justify-between gap-3 py-3">
              <div class="flex min-w-0 items-center gap-3">
                <UAvatar :alt="person.name" :text="person.initials" />
                <div class="min-w-0">
                  <p class="truncate font-medium text-highlighted">
                    {{ person.name }}
                  </p>
                  <p class="truncate text-sm text-muted">
                    {{ person.role }}
                  </p>
                </div>
              </div>
              <UBadge :color="statusColor[person.status as keyof typeof statusColor]" variant="soft">
                {{ person.status }}
              </UBadge>
            </li>
          </ul>
        </KitchenSinkExample>

        <KitchenSinkExample title="Status rows">
          <div class="space-y-3">
            <div v-for="row in rows" :key="row.name" class="rounded-md border border-default bg-muted/35 p-3">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="font-medium text-highlighted">
                    {{ row.name }}
                  </p>
                  <p class="text-sm text-muted">
                    {{ row.owner }} owns {{ row.checks }} checks.
                  </p>
                </div>
                <UBadge :color="statusColor[row.status as keyof typeof statusColor]" variant="soft">
                  {{ row.status }}
                </UBadge>
              </div>
            </div>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Tabs and activity" description="Compact data pages need both table views and recent-change context.">
      <div class="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <KitchenSinkExample title="Tabs">
          <UTabs :items="tabs" />
        </KitchenSinkExample>

        <KitchenSinkExample title="Activity feed">
          <ol class="space-y-3">
            <li v-for="item in activity" :key="item.title" class="flex gap-3">
              <span class="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-default bg-muted/45 text-toned">
                <UIcon :name="item.icon" class="size-4" aria-hidden="true" />
              </span>
              <div class="min-w-0">
                <p class="text-sm font-medium text-highlighted">
                  {{ item.title }}
                </p>
                <p class="text-sm text-muted">
                  {{ item.detail }}
                </p>
              </div>
            </li>
          </ol>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Skeleton, empty, pagination" description="Non-happy states remain compact and user-visible.">
      <div class="grid gap-4 lg:grid-cols-3">
        <KitchenSinkExample title="Skeleton rows">
          <div class="space-y-3">
            <div v-for="index in 3" :key="index" class="flex items-center gap-3">
              <USkeleton class="size-8 rounded-full" />
              <div class="min-w-0 flex-1 space-y-2">
                <USkeleton class="h-4 w-1/2" />
                <USkeleton class="h-3 w-5/6" />
              </div>
            </div>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Empty state">
          <UEmpty
            icon="i-lucide-database"
            title="No rows selected"
            description="Select a row to inspect details."
          />
        </KitchenSinkExample>

        <KitchenSinkExample title="Pagination">
          <UPagination :page="2" :total="72" :items-per-page="12" show-edges />
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Stat grid" description="Compact, stable cards for dashboards and app home screens.">
      <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-md border border-default bg-elevated/45 p-4"
        >
          <div class="flex items-center justify-between gap-3">
            <span class="text-sm text-muted">{{ stat.label }}</span>
            <UIcon :name="stat.icon" class="size-4 text-primary" aria-hidden="true" />
          </div>
          <div class="mt-3 text-2xl font-semibold text-highlighted">
            {{ stat.value }}
          </div>
        </div>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
