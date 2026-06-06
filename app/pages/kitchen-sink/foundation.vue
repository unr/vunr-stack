<script setup lang="ts">
import { primaryPalette, surfaceTokens } from '~~/shared/kitchenSink'

useSeoMeta({
  title: 'Foundation',
  description: 'Neutral dark shell foundations for Nuxt UI surfaces, typography, borders, radius, focus, and states.',
})

const textSamples = [
  { label: 'Highlighted', class: 'text-highlighted', copy: 'Primary headings and active labels' },
  { label: 'Default', class: 'text-default', copy: 'Readable body text' },
  { label: 'Toned', class: 'text-toned', copy: 'Secondary but still important details' },
  { label: 'Muted', class: 'text-muted', copy: 'Descriptions, help text, metadata' },
  { label: 'Dimmed', class: 'text-dimmed', copy: 'Low-emphasis captions' },
] as const

const borderSamples = [
  { label: 'Muted', class: 'border-muted' },
  { label: 'Default', class: 'border-default' },
  { label: 'Accented', class: 'border-accented' },
  { label: 'Inverted', class: 'border-inverted bg-inverted text-inverted' },
] as const

const radii = [
  { label: 'None', class: 'rounded-none' },
  { label: 'Small', class: 'rounded-sm' },
  { label: 'Medium', class: 'rounded-md' },
  { label: 'Large', class: 'rounded-lg' },
] as const

const spacingSamples = [
  { label: '2', class: 'h-2 w-2' },
  { label: '3', class: 'h-3 w-3' },
  { label: '4', class: 'h-4 w-4' },
  { label: '6', class: 'h-6 w-6' },
  { label: '8', class: 'h-8 w-8' },
] as const

const semanticStates = [
  { label: 'Success', color: 'success', icon: 'i-lucide-circle-check', copy: 'Passed' },
  { label: 'Info', color: 'info', icon: 'i-lucide-info', copy: 'Changed' },
  { label: 'Warning', color: 'warning', icon: 'i-lucide-triangle-alert', copy: 'Review' },
  { label: 'Error', color: 'error', icon: 'i-lucide-circle-x', copy: 'Blocked' },
] as const

const iconNames = [
  'i-lucide-terminal',
  'i-lucide-command',
  'i-lucide-panel-left',
  'i-lucide-table-2',
  'i-lucide-sliders-horizontal',
  'i-lucide-circle-alert',
] as const
</script>

<template>
  <KitchenSinkPage
    title="Foundation"
    description="Neutral primary palette, dark shell surfaces, text hierarchy, borders, radius, spacing, icons, focus, and semantic states."
    icon="i-lucide-swatch-book"
  >
    <KitchenSinkSection
      title="Neutral primary palette"
      description="Primary is mapped to the neutral family through Nuxt UI config. No colorful brand primary is defined."
      icon="i-lucide-circle"
    >
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <KitchenSinkSwatch
          v-for="swatch in primaryPalette"
          :key="swatch.shade"
          :swatch="swatch"
          name="neutral"
        />
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection
      title="Surfaces"
      description="Dark mode uses very small steps between page, sidebar, panels, and popovers."
      icon="i-lucide-layers"
    >
      <div class="grid gap-3 md:grid-cols-5">
        <div
          v-for="surface in surfaceTokens"
          :key="surface.token"
          class="rounded-lg border border-default bg-elevated/60 p-3"
        >
          <div
            class="h-16 rounded-md border border-accented"
            :style="{ backgroundColor: surface.cssColor }"
          />
          <div class="mt-3 space-y-1">
            <h3 class="text-sm font-medium text-highlighted">
              {{ surface.label }}
            </h3>
            <p class="font-mono text-xs text-dimmed">
              {{ surface.token }}
            </p>
            <p class="text-xs leading-5 text-muted">
              {{ surface.description }}
            </p>
          </div>
        </div>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection
      title="Text, borders, radius"
      description="The shell depends on contrast steps, thin separators, and compact radii rather than saturated color."
      icon="i-lucide-type"
    >
      <div class="grid gap-4 lg:grid-cols-3">
        <KitchenSinkExample title="Text hierarchy">
          <div class="space-y-3">
            <p
              v-for="sample in textSamples"
              :key="sample.label"
              class="flex items-center justify-between gap-3 text-sm"
              :class="sample.class"
            >
              <span>{{ sample.label }}</span>
              <span class="text-right">{{ sample.copy }}</span>
            </p>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Borders">
          <div class="grid gap-3">
            <div
              v-for="sample in borderSamples"
              :key="sample.label"
              class="rounded-md border p-3 text-sm text-muted"
              :class="sample.class"
            >
              {{ sample.label }} border
            </div>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Radius">
          <div class="grid gap-3">
            <div
              v-for="item in radii"
              :key="item.label"
              class="border border-accented bg-accented p-3 text-sm text-highlighted"
              :class="item.class"
            >
              {{ item.label }}
            </div>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection
      title="Typography, spacing, icons"
      description="Type stays compact for repeated product work, with icons used as controls and labels rather than decoration."
      icon="i-lucide-ruler"
    >
      <div class="grid gap-4 lg:grid-cols-3">
        <KitchenSinkExample title="Type scale">
          <div class="space-y-3">
            <h2 class="text-2xl font-semibold text-highlighted">
              Page title
            </h2>
            <h3 class="text-lg font-semibold text-highlighted">
              Section title
            </h3>
            <p class="text-sm leading-6 text-default">
              Body text remains readable inside dense panels.
            </p>
            <p class="text-xs font-medium uppercase tracking-normal text-dimmed">
              Caption label
            </p>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Spacing samples">
          <div class="flex items-end gap-4">
            <div
              v-for="sample in spacingSamples"
              :key="sample.label"
              class="rounded-sm bg-inverted"
              :class="sample.class"
            />
          </div>
          <p class="mt-4 text-sm text-muted">
            Compact spacing is used in nav, tables, forms, and control rows.
          </p>
        </KitchenSinkExample>

        <KitchenSinkExample title="Lucide icons">
          <div class="grid grid-cols-3 gap-2">
            <span
              v-for="icon in iconNames"
              :key="icon"
              class="flex size-10 items-center justify-center rounded-md border border-default bg-muted/40 text-toned"
            >
              <UIcon :name="icon" class="size-4" aria-hidden="true" />
            </span>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection
      title="Focus and semantic states"
      description="Focus remains visible and state colors are reserved for status, not brand identity."
      icon="i-lucide-focus"
    >
      <div class="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <KitchenSinkExample title="Focus ring">
          <div class="flex flex-wrap gap-3">
            <UButton>Primary action</UButton>
            <UButton color="neutral" variant="outline">
              Secondary
            </UButton>
            <UButton icon="i-lucide-settings" color="neutral" variant="ghost" aria-label="Open settings" />
          </div>
          <p class="mt-4 text-sm text-muted">
            Use keyboard tabbing to inspect neutral focus outlines.
          </p>
        </KitchenSinkExample>

        <KitchenSinkExample title="Status colors">
          <div class="grid gap-3 sm:grid-cols-2">
            <UAlert
              v-for="state in semanticStates"
              :key="state.label"
              :color="state.color"
              :icon="state.icon"
              :title="state.label"
              :description="`${state.copy} state with text and icon, not color alone.`"
              variant="soft"
            />
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
