<script setup lang="ts">
import { primaryPalette, warmNeutralPalette } from '~~/shared/kitchenSink'

useSeoMeta({
  title: 'Theme tokens',
  description: 'Burnt-orange primary theme tokens and warm neutral Nuxt UI surfaces.',
})

const semanticColors = [
  { label: 'Primary', color: 'primary', icon: 'i-lucide-flame' },
  { label: 'Secondary', color: 'secondary', icon: 'i-lucide-orbit' },
  { label: 'Success', color: 'success', icon: 'i-lucide-check-circle' },
  { label: 'Info', color: 'info', icon: 'i-lucide-info' },
  { label: 'Warning', color: 'warning', icon: 'i-lucide-alert-triangle' },
  { label: 'Error', color: 'error', icon: 'i-lucide-x-circle' },
  { label: 'Neutral', color: 'neutral', icon: 'i-lucide-circle' },
] as const

const backgrounds = [
  { label: 'Default', class: 'bg-default text-default' },
  { label: 'Muted', class: 'bg-muted text-default' },
  { label: 'Elevated', class: 'bg-elevated text-default' },
  { label: 'Accented', class: 'bg-accented text-highlighted' },
  { label: 'Inverted', class: 'bg-inverted text-inverted' },
] as const

const radii = [
  { label: 'None', class: 'rounded-none' },
  { label: 'Small', class: 'rounded-sm' },
  { label: 'Medium', class: 'rounded-md' },
  { label: 'Large', class: 'rounded-lg' },
  { label: 'Extra large', class: 'rounded-xl' },
] as const
</script>

<template>
  <KitchenSinkPage
    title="Theme tokens"
    description="Inspect the burnt-orange primary identity, warm neutral surfaces, semantic colors, border treatments, and radius scale."
    icon="i-lucide-palette"
  >
    <KitchenSinkSection
      title="Primary palette"
      description="The primary semantic color maps to the custom burnt-orange family through Nuxt UI app config."
    >
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <KitchenSinkSwatch
          v-for="swatch in primaryPalette"
          :key="swatch.shade"
          :swatch="swatch"
          name="burnt-orange"
        />
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection
      title="Warm neutral palette"
      description="Neutral surfaces use a warm scale so the starter feels technical without falling back to cold slate."
    >
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <KitchenSinkSwatch
          v-for="swatch in warmNeutralPalette"
          :key="swatch.shade"
          :swatch="swatch"
          name="warm-neutral"
        />
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Semantic colors" description="Nuxt UI color props should remain distinct from the primary theme.">
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in semanticColors"
          :key="item.color"
          class="rounded-md border border-default bg-elevated/45 p-4"
        >
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <UIcon :name="item.icon" :class="`size-4 text-${item.color}`" aria-hidden="true" />
              <span class="font-medium text-highlighted">{{ item.label }}</span>
            </div>
            <UBadge :color="item.color" variant="soft">
              {{ item.color }}
            </UBadge>
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <UButton :color="item.color" size="sm">
              Solid
            </UButton>
            <UButton :color="item.color" variant="outline" size="sm">
              Outline
            </UButton>
          </div>
        </div>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Surfaces, borders, and radius" description="Token-backed utilities should work in light and dark mode.">
      <div class="grid gap-4 lg:grid-cols-3">
        <KitchenSinkExample title="Backgrounds" description="Default Nuxt UI background utilities with the warm neutral mapping.">
          <div class="grid gap-2">
            <div
              v-for="item in backgrounds"
              :key="item.label"
              class="rounded-md border border-default p-4"
              :class="item.class"
            >
              {{ item.label }}
            </div>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Borders" description="Muted, default, accented, and inverted border treatment.">
          <div class="grid gap-3">
            <div class="rounded-md border border-muted p-3 text-sm text-muted">
              Muted border
            </div>
            <div class="rounded-md border border-default p-3 text-sm text-muted">
              Default border
            </div>
            <div class="rounded-md border border-accented p-3 text-sm text-muted">
              Accented border
            </div>
            <div class="rounded-md border border-inverted bg-inverted p-3 text-sm text-inverted">
              Inverted border
            </div>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Radius" description="The base radius stays sharp enough for a technical starter.">
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

    <UAlert
      icon="i-lucide-moon"
      color="primary"
      variant="soft"
      title="Color mode"
      description="Nuxt UI color mode remains active through UApp and the header toggle. Check this page in both light and dark mode."
    />
  </KitchenSinkPage>
</template>
