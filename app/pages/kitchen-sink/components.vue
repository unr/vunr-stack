<script setup lang="ts">
useSeoMeta({
  title: 'Components',
  description: 'Core Nuxt UI components in the neutral dark shell.',
})

const colors = ['primary', 'success', 'info', 'warning', 'error', 'neutral'] as const
const variants = ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link'] as const
const sizes = ['xs', 'sm', 'md', 'lg'] as const

const people = [
  { name: 'Ada Lovelace', role: 'Design systems', initials: 'AL' },
  { name: 'Grace Hopper', role: 'Compiler checks', initials: 'GH' },
  { name: 'Katherine Johnson', role: 'Content flow', initials: 'KJ' },
]

const alerts = [
  { color: 'primary', icon: 'i-lucide-circle', title: 'Neutral primary', description: 'Primary actions remain monochrome.' },
  { color: 'success', icon: 'i-lucide-circle-check', title: 'Verification passed', description: 'Success remains green and semantic.' },
  { color: 'warning', icon: 'i-lucide-triangle-alert', title: 'Needs review', description: 'Warnings remain amber and explicit.' },
  { color: 'error', icon: 'i-lucide-circle-x', title: 'Blocked', description: 'Errors remain red with direct copy.' },
] as const
</script>

<template>
  <KitchenSinkPage
    title="Components"
    description="Core Nuxt UI actions, badges, cards, alerts, avatars, progress, empty states, loading, and error treatments."
    icon="i-lucide-boxes"
  >
    <KitchenSinkSection title="Buttons" description="Primary actions are neutral. Semantic colors are still available for stateful actions." icon="i-lucide-square-mouse-pointer">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Variants">
          <div class="flex flex-wrap gap-2">
            <UButton v-for="variant in variants" :key="variant" :variant="variant">
              {{ variant }}
            </UButton>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Sizes and icon buttons">
          <div class="flex flex-wrap items-center gap-2">
            <UButton v-for="size in sizes" :key="size" :size="size">
              {{ size }}
            </UButton>
            <UTooltip text="Search">
              <UButton icon="i-lucide-search" color="neutral" variant="outline" aria-label="Search" />
            </UTooltip>
            <UTooltip text="Download">
              <UButton icon="i-lucide-download" color="neutral" variant="soft" aria-label="Download" />
            </UTooltip>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Color props" description="Status colors are explicit examples, not brand accents." icon="i-lucide-palette">
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <KitchenSinkExample v-for="color in colors" :key="color" :title="color">
          <div class="flex flex-wrap gap-2">
            <UButton :color="color">
              Solid
            </UButton>
            <UButton :color="color" variant="outline">
              Outline
            </UButton>
            <UBadge :color="color" variant="soft">
              Badge
            </UBadge>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Cards and users" description="Cards frame repeated items and tool surfaces. Avoid nested decorative wrappers." icon="i-lucide-panels-top-left">
      <div class="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
        <div class="grid gap-3 sm:grid-cols-2">
          <UCard>
            <template #header>
              <div class="flex items-center justify-between gap-3">
                <h2 class="font-semibold text-highlighted">
                  Build queue
                </h2>
                <UBadge color="neutral" variant="soft">
                  local
                </UBadge>
              </div>
            </template>
            <p class="text-sm leading-6 text-muted">
              Compact panels work for repeated dashboard states without creating a marketing layout.
            </p>
            <template #footer>
              <UButton block color="neutral" variant="outline">
                Inspect
              </UButton>
            </template>
          </UCard>

          <UCard>
            <div class="space-y-4">
              <div class="flex aspect-[16/7] items-center justify-center rounded-md border border-accented bg-accented text-toned">
                <UIcon name="i-lucide-image" class="size-8" aria-hidden="true" />
              </div>
              <div>
                <h2 class="font-semibold text-highlighted">
                  Media panel
                </h2>
                <p class="mt-1 text-sm text-muted">
                  Stable image ratio with neutral placeholder treatment.
                </p>
              </div>
            </div>
          </UCard>
        </div>

        <KitchenSinkExample title="User rows">
          <ul class="divide-y divide-default">
            <li v-for="person in people" :key="person.name" class="flex items-center gap-3 py-3">
              <UAvatar :alt="person.name" :text="person.initials" />
              <div class="min-w-0">
                <p class="truncate text-sm font-medium text-highlighted">
                  {{ person.name }}
                </p>
                <p class="truncate text-sm text-muted">
                  {{ person.role }}
                </p>
              </div>
            </li>
          </ul>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Feedback" description="Alerts, progress, skeletons, empty states, and errors show user-observable state." icon="i-lucide-message-circle-warning">
      <div class="grid gap-4">
        <div class="grid gap-3 lg:grid-cols-2">
          <UAlert
            v-for="alert in alerts"
            :key="alert.title"
            :color="alert.color"
            :icon="alert.icon"
            :title="alert.title"
            :description="alert.description"
            variant="soft"
          />
        </div>

        <div class="grid gap-4 lg:grid-cols-3">
          <KitchenSinkExample title="Progress">
            <div class="space-y-4">
              <UProgress :model-value="68" status />
              <UProgress :model-value="42" color="warning" status />
            </div>
          </KitchenSinkExample>

          <KitchenSinkExample title="Loading">
            <div class="space-y-3">
              <USkeleton class="h-5 w-32" />
              <USkeleton class="h-20 w-full" />
              <USkeleton class="h-4 w-5/6" />
            </div>
          </KitchenSinkExample>

          <KitchenSinkExample title="Empty and error">
            <div class="space-y-3">
              <UEmpty
                icon="i-lucide-inbox"
                title="No drafts"
                description="Empty states include a clear next action."
              />
              <UAlert
                color="error"
                variant="soft"
                icon="i-lucide-triangle-alert"
                title="Preview failed"
                description="Run verification again after fixing the route."
              />
            </div>
          </KitchenSinkExample>
        </div>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
