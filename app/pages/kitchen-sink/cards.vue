<script setup lang="ts">
useSeoMeta({
  title: 'Cards',
  description: 'Nuxt UI card patterns, stat cards, empty states, skeletons, and focusable panels.',
})

const stats = [
  { label: 'Routes', value: '12', icon: 'i-lucide-route' },
  { label: 'Tokens', value: '22', icon: 'i-lucide-swatch-book' },
  { label: 'Checks', value: '4', icon: 'i-lucide-list-checks' },
]

const projects = [
  { title: 'Personal site', description: 'Content-first route set with warm neutral prose.', badge: 'site' },
  { title: 'Interview app', description: 'Dense UI examples and fast local verification.', badge: 'app' },
]
</script>

<template>
  <KitchenSinkPage
    title="Cards"
    description="Inspect content panels, stats, project summaries, empty states, loading placeholders, and focusable card links."
    icon="i-lucide-panels-top-left"
  >
    <KitchenSinkSection title="Card patterns" description="Cards are used for repeated items and framed tools, not nested page sections.">
      <div class="grid gap-4 lg:grid-cols-3">
        <UCard>
          <template #header>
            <h2 class="font-semibold text-highlighted">
              Basic card
            </h2>
          </template>
          <p class="text-sm leading-6 text-muted">
            A simple text card with header and body slots.
          </p>
        </UCard>

        <UCard>
          <div class="space-y-4">
            <div class="flex aspect-[16/7] items-center justify-center rounded-md border border-accented bg-accented text-primary">
              <UIcon name="i-lucide-image" class="size-8" aria-hidden="true" />
            </div>
            <div>
              <h2 class="font-semibold text-highlighted">
                Media-style card
              </h2>
              <p class="mt-1 text-sm text-muted">
                Placeholder layout without requiring image assets.
              </p>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center justify-between gap-3">
              <h2 class="font-semibold text-highlighted">
                Starter bundle
              </h2>
              <UBadge color="primary" variant="soft">
                local
              </UBadge>
            </div>
          </template>
          <p class="text-sm leading-6 text-muted">
            Pricing-like structure without billing, payment, or SaaS implementation.
          </p>
          <template #footer>
            <UButton block variant="outline">
              Inspect package
            </UButton>
          </template>
        </UCard>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Project and stat cards" description="Repeated content gets stable dimensions and clear scanning paths.">
      <div class="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div class="grid gap-3 sm:grid-cols-2">
          <NuxtLink
            v-for="project in projects"
            :key="project.title"
            to="/kitchen-sink/content"
            class="rounded-md border border-default bg-elevated/45 p-4 transition-colors hover:border-accented hover:bg-accented/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div class="flex items-start justify-between gap-3">
              <h2 class="font-semibold text-highlighted">
                {{ project.title }}
              </h2>
              <UBadge variant="soft">
                {{ project.badge }}
              </UBadge>
            </div>
            <p class="mt-3 text-sm leading-6 text-muted">
              {{ project.description }}
            </p>
          </NuxtLink>
        </div>

        <div class="grid gap-3">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-md border border-default bg-muted/45 p-4"
          >
            <div class="flex items-center justify-between">
              <span class="text-sm text-muted">{{ stat.label }}</span>
              <UIcon :name="stat.icon" class="size-4 text-primary" aria-hidden="true" />
            </div>
            <div class="mt-2 text-2xl font-semibold text-highlighted">
              {{ stat.value }}
            </div>
          </div>
        </div>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Empty and loading" description="Common non-happy paths are represented without brittle screenshots.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Empty state">
          <div class="flex min-h-48 flex-col items-center justify-center gap-3 rounded-md border border-dashed border-accented bg-muted/35 p-6 text-center">
            <UIcon name="i-lucide-inbox" class="size-8 text-primary" aria-hidden="true" />
            <div>
              <h3 class="font-semibold text-highlighted">
                No drafts yet
              </h3>
              <p class="mt-1 text-sm text-muted">
                Create a first content draft to inspect card density.
              </p>
            </div>
            <UButton size="sm" variant="outline">
              New draft
            </UButton>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Skeleton card">
          <div class="space-y-4">
            <USkeleton class="h-36 w-full rounded-md" />
            <div class="space-y-2">
              <USkeleton class="h-4 w-2/3" />
              <USkeleton class="h-4 w-full" />
              <USkeleton class="h-4 w-5/6" />
            </div>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
