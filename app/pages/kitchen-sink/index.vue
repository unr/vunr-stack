<script setup lang="ts">
import {
  kitchenSinkOverviewStats,
  kitchenSinkPages,
  primaryPalette,
} from '~~/shared/kitchenSink'

useSeoMeta({
  title: 'unr-stack kitchen sink',
  description: 'Local design lab for Nuxt UI components and the burnt-orange unr-stack theme.',
})

const themeStatus = [
  { label: 'Primary', value: 'burnt orange', icon: 'i-lucide-palette' },
  { label: 'Neutral', value: 'warm neutral', icon: 'i-lucide-swatch-book' },
  { label: 'Dark mode', value: 'preserved', icon: 'i-lucide-moon' },
  { label: 'Icons', value: 'Lucide local', icon: 'i-lucide-icons' },
  { label: 'Content', value: 'Nuxt Content', icon: 'i-lucide-file-text' },
  { label: 'Testing', value: 'Vitest contract', icon: 'i-lucide-flask-conical' },
]
</script>

<template>
  <main class="mx-auto grid w-full max-w-[var(--ui-container)] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:px-8">
    <KitchenSinkNav class="hidden lg:block" />

    <div class="min-w-0 space-y-8">
      <header class="space-y-5">
        <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div class="max-w-3xl space-y-3">
            <UBadge variant="soft" color="primary">
              Nuxt UI design lab
            </UBadge>
            <div class="space-y-2">
              <h1 class="text-3xl font-semibold text-highlighted sm:text-4xl">
                unr-stack kitchen sink
              </h1>
              <p class="text-base leading-7 text-muted">
                A browsable local lab for tuning the starter theme, checking Nuxt UI components,
                and keeping future project polish grounded in the same visual system.
              </p>
            </div>
          </div>

          <ClientOnly>
            <UColorModeButton variant="ghost" size="sm" aria-label="Toggle color mode" />
            <template #fallback>
              <UButton
                icon="i-lucide-circle-half-2"
                variant="ghost"
                size="sm"
                disabled
                aria-label="Color mode loading"
              />
            </template>
          </ClientOnly>
        </div>

        <KitchenSinkNav class="lg:hidden" />
      </header>

      <section class="grid gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.85fr)]">
        <div class="rounded-md border border-default bg-elevated/45 p-5">
          <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div class="space-y-2">
              <h2 class="text-lg font-semibold text-highlighted">
                Burnt-orange foundation
              </h2>
              <p class="max-w-2xl text-sm leading-6 text-muted">
                Primary actions now draw from a custom burnt-orange scale, with warm neutrals
                replacing the default cool slate feel.
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              <UButton to="/kitchen-sink/theme" trailing-icon="i-lucide-arrow-right">
                Inspect theme
              </UButton>
              <UButton to="/kitchen-sink/buttons" color="neutral" variant="outline">
                Button states
              </UButton>
            </div>
          </div>

          <div class="mt-5 grid gap-2 sm:grid-cols-4">
            <div
              v-for="swatch in primaryPalette.slice(4, 8)"
              :key="swatch.shade"
              class="min-h-20 rounded-md border border-default p-3"
              :style="{ backgroundColor: swatch.hex, color: swatch.shade >= 500 ? '#faf7f2' : '#341407' }"
            >
              <div class="text-xs font-semibold">
                {{ swatch.shade }}
              </div>
              <div class="mt-6 font-mono text-xs">
                {{ swatch.hex }}
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-md border border-default bg-elevated/45 p-5">
          <h2 class="text-sm font-semibold text-highlighted">
            Theme status
          </h2>
          <dl class="mt-4 grid gap-3">
            <div
              v-for="item in themeStatus"
              :key="item.label"
              class="flex items-center justify-between gap-3"
            >
              <dt class="flex items-center gap-2 text-sm text-muted">
                <UIcon :name="item.icon" class="size-4 text-primary" aria-hidden="true" />
                {{ item.label }}
              </dt>
              <dd class="text-sm font-medium text-highlighted">
                {{ item.value }}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="stat in kitchenSinkOverviewStats"
          :key="stat.label"
          class="rounded-md border border-default bg-muted/45 p-4"
        >
          <div class="flex items-center justify-between gap-3">
            <span class="text-sm text-muted">{{ stat.label }}</span>
            <UIcon :name="stat.icon" class="size-4 text-primary" aria-hidden="true" />
          </div>
          <div class="mt-3 text-2xl font-semibold text-highlighted">
            {{ stat.value }}
          </div>
        </div>
      </section>

      <KitchenSinkSection
        title="Demo pages"
        description="Focused routes keep the examples scannable and make future starter tweaks easier to inspect."
      >
        <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="page in kitchenSinkPages"
            :key="page.path"
            :to="page.path"
            class="group rounded-md border border-default bg-elevated/45 p-4 transition-colors hover:border-accented hover:bg-accented/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div class="flex items-start gap-3">
              <span class="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-accented text-primary">
                <UIcon :name="page.icon" class="size-4" aria-hidden="true" />
              </span>
              <span class="min-w-0 space-y-1">
                <span class="block font-medium text-highlighted">
                  {{ page.label }}
                </span>
                <span class="block text-sm leading-6 text-muted">
                  {{ page.description }}
                </span>
              </span>
            </div>
          </NuxtLink>
        </div>
      </KitchenSinkSection>

      <KitchenSinkSection
        title="Baseline smoke page"
        description="The original starter verification page remains available as a compact setup check."
      >
        <div class="rounded-md border border-default bg-elevated/45 p-4">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="space-y-1">
              <h3 class="font-medium text-highlighted">
                Agentic setup verification
              </h3>
              <p class="text-sm text-muted">
                Smoke coverage for Codex guidance, Nuxt Content, Pinia, VueUse, icons, and tests.
              </p>
            </div>

            <UButton to="/kitchen-sink/agent-verification" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-right">
              Open verification
            </UButton>
          </div>
        </div>
      </KitchenSinkSection>
    </div>
  </main>
</template>
