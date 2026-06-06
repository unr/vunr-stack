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
  { label: 'Ready checks', value: '11', icon: 'i-lucide-check-circle' },
  { label: 'Review loops', value: '2', icon: 'i-lucide-refresh-cw' },
  { label: 'Docs linked', value: '1', icon: 'i-lucide-file-text' },
] as const
</script>

<template>
  <KitchenSinkPage
    title="Data display"
    description="Inspect local static table, list rows, avatar rows, status badges, and stat grids."
    icon="i-lucide-table-2"
  >
    <KitchenSinkSection title="Table" description="UTable handles the structured display while mocked data stays local.">
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
