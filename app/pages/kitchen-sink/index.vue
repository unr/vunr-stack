<script setup lang="ts">
import {
  kitchenSinkOverviewStats,
  kitchenSinkPages,
  primaryPalette,
  surfaceTokens,
} from '~~/shared/kitchenSink'

useSeoMeta({
  title: 'unr-stack kitchen sink',
  description: 'Neutral dark Nuxt UI design lab for the unr-stack starter.',
})

const systemStatus = [
  { label: 'Primary', value: 'neutral', icon: 'i-lucide-circle' },
  { label: 'Shell', value: 'dark-first', icon: 'i-lucide-moon' },
  { label: 'Borders', value: 'alpha', icon: 'i-lucide-square-dashed' },
  { label: 'Density', value: 'compact', icon: 'i-lucide-align-justify' },
  { label: 'Content', value: 'Nuxt Content', icon: 'i-lucide-file-text' },
  { label: 'Tests', value: 'Vitest', icon: 'i-lucide-flask-conical' },
] as const
</script>

<template>
  <KitchenSinkPage
    title="unr-stack kitchen sink"
    description="Neutral dark shell for tuning Nuxt UI components, content rendering, app patterns, and starter ergonomics."
    icon="i-lucide-layout-dashboard"
  >
    <section class="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.75fr)]">
      <div class="rounded-lg border border-default bg-elevated/60 p-5">
        <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div class="max-w-2xl space-y-2">
            <UBadge color="neutral" variant="soft">
              Neutral dark shell
            </UBadge>
            <h2 class="text-xl font-semibold text-highlighted">
              Coss-inspired product UI without a loud brand accent
            </h2>
            <p class="text-sm leading-6 text-muted">
              The kitchen sink now acts like a compact app shell: near-black canvas,
              thin alpha borders, neutral primary actions, restrained surface lift, and
              dense examples that can be scanned while building small Nuxt apps.
            </p>
          </div>

          <div class="flex flex-wrap gap-2">
            <UButton to="/kitchen-sink/foundation" trailing-icon="i-lucide-arrow-right">
              Inspect foundation
            </UButton>
            <UButton to="/kitchen-sink/app-shell" color="neutral" variant="outline">
              App shell
            </UButton>
          </div>
        </div>

        <div class="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="swatch in primaryPalette.slice(5, 9)"
            :key="swatch.shade"
            class="min-h-20 rounded-md border border-default p-3"
            :style="{
              backgroundColor: swatch.cssColor,
              color: swatch.shade >= 700 ? 'oklch(0.985 0.003 286)' : 'oklch(0.14 0.006 286)',
            }"
          >
            <div class="text-xs font-semibold">
              neutral {{ swatch.shade }}
            </div>
            <div class="mt-5 font-mono text-xs">
              {{ swatch.cssColor }}
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-default bg-elevated/60 p-5">
        <h2 class="text-sm font-semibold text-highlighted">
          Shell status
        </h2>
        <dl class="mt-4 grid gap-3">
          <div
            v-for="item in systemStatus"
            :key="item.label"
            class="flex items-center justify-between gap-3"
          >
            <dt class="flex items-center gap-2 text-sm text-muted">
              <UIcon :name="item.icon" class="size-4 text-toned" aria-hidden="true" />
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
        class="rounded-lg border border-default bg-muted/45 p-4"
      >
        <div class="flex items-center justify-between gap-3">
          <span class="text-sm text-muted">{{ stat.label }}</span>
          <UIcon :name="stat.icon" class="size-4 text-toned" aria-hidden="true" />
        </div>
        <div class="mt-3 text-xl font-semibold text-highlighted">
          {{ stat.value }}
        </div>
      </div>
    </section>

    <KitchenSinkSection
      title="Surface summary"
      description="These are the dark-mode surface roles used by the shell and examples."
      icon="i-lucide-layers"
    >
      <div class="grid gap-3 md:grid-cols-5">
        <div
          v-for="surface in surfaceTokens"
          :key="surface.token"
          class="rounded-lg border border-default bg-elevated/60 p-3"
        >
          <div
            class="mb-3 h-12 rounded-md border border-accented"
            :style="{ backgroundColor: surface.cssColor }"
          />
          <p class="text-sm font-medium text-highlighted">
            {{ surface.label }}
          </p>
          <p class="mt-1 font-mono text-xs text-dimmed">
            {{ surface.token }}
          </p>
        </div>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection
      title="Browse sections"
      description="Focused routes keep the design lab scannable without turning the starter into documentation software."
      icon="i-lucide-panel-left"
    >
      <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <NuxtLink
          v-for="page in kitchenSinkPages"
          :key="page.path"
          :to="page.path"
          class="group rounded-lg border border-default bg-elevated/60 p-4 transition-colors hover:border-accented hover:bg-accented/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <div class="flex items-start gap-3">
            <span class="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-accented bg-muted text-toned">
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
  </KitchenSinkPage>
</template>
