<script setup lang="ts">
useSeoMeta({
  title: 'Buttons',
  description: 'Nuxt UI button colors, variants, sizes, icons, loading, and disabled states.',
})

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'] as const
const variants = ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <KitchenSinkPage
    title="Buttons"
    description="Inspect common Nuxt UI action states against the burnt-orange primary theme."
    icon="i-lucide-square-mouse-pointer"
  >
    <KitchenSinkSection title="Colors" description="Each semantic color should remain legible and distinct.">
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KitchenSinkExample v-for="color in colors" :key="color" :title="color">
          <div class="flex flex-wrap gap-2">
            <UButton :color="color">
              Solid
            </UButton>
            <UButton :color="color" variant="outline">
              Outline
            </UButton>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Variants" description="Variants cover primary commands, secondary actions, and low-emphasis controls.">
      <KitchenSinkExample title="Primary variants">
        <div class="flex flex-wrap gap-3">
          <UButton v-for="variant in variants" :key="variant" :variant="variant">
            {{ variant }}
          </UButton>
        </div>
      </KitchenSinkExample>
    </KitchenSinkSection>

    <KitchenSinkSection title="Sizes and icons" description="Icons use local Lucide Iconify names through Nuxt UI.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Sizes">
          <div class="flex flex-wrap items-center gap-3">
            <UButton v-for="size in sizes" :key="size" :size="size">
              {{ size }}
            </UButton>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Icon placement">
          <div class="flex flex-wrap gap-3">
            <UButton leading-icon="i-lucide-save">
              Save
            </UButton>
            <UButton trailing-icon="i-lucide-arrow-right" variant="outline">
              Continue
            </UButton>
            <UButton icon="i-lucide-search" aria-label="Search" />
            <UButton icon="i-lucide-download" color="neutral" variant="soft" aria-label="Download" />
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="States" description="Loading, disabled, full-width, grouped, and destructive actions.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="State examples">
          <div class="flex flex-wrap gap-3">
            <UButton loading>
              Saving
            </UButton>
            <UButton disabled>
              Disabled
            </UButton>
            <UButton color="error" variant="soft" icon="i-lucide-trash-2">
              Delete draft
            </UButton>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Grouped and block">
          <div class="space-y-3">
            <UButtonGroup>
              <UButton icon="i-lucide-bold" aria-label="Bold" color="neutral" variant="outline" />
              <UButton icon="i-lucide-italic" aria-label="Italic" color="neutral" variant="outline" />
              <UButton icon="i-lucide-code" aria-label="Code" color="neutral" variant="outline" />
            </UButtonGroup>
            <UButton block trailing-icon="i-lucide-arrow-right">
              Full-width action
            </UButton>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
