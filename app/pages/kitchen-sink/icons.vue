<script setup lang="ts">
useSeoMeta({
  title: 'Icons',
  description: 'Lucide icon usage through Nuxt UI and local Iconify assets.',
})

const icons = [
  'terminal',
  'code',
  'code-2',
  'bot',
  'sparkles',
  'gamepad-2',
  'palette',
  'layout-dashboard',
  'file-text',
  'book-open',
  'settings',
  'check-circle',
  'alert-triangle',
  'x-circle',
  'moon',
  'sun',
]
</script>

<template>
  <KitchenSinkPage
    title="Icons"
    description="Inspect common Lucide icons, icon sizing, and icons inside Nuxt UI controls."
    icon="i-lucide-icons"
  >
    <KitchenSinkSection title="Lucide grid" description="Icons use the i-lucide-* naming convention from the local Iconify package.">
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="icon in icons"
          :key="icon"
          class="flex items-center gap-3 rounded-md border border-default bg-elevated/45 p-3"
        >
          <UIcon :name="`i-lucide-${icon}`" class="size-5 text-primary" aria-hidden="true" />
          <span class="min-w-0 truncate font-mono text-sm text-muted">i-lucide-{{ icon }}</span>
        </div>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Sizes and controls" description="Icon-only controls include accessible names.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Sizes">
          <div class="flex items-end gap-5">
            <UIcon name="i-lucide-terminal" class="size-4 text-primary" aria-hidden="true" />
            <UIcon name="i-lucide-terminal" class="size-6 text-primary" aria-hidden="true" />
            <UIcon name="i-lucide-terminal" class="size-8 text-primary" aria-hidden="true" />
            <UIcon name="i-lucide-terminal" class="size-10 text-primary" aria-hidden="true" />
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="In components">
          <div class="flex flex-wrap gap-3">
            <UButton icon="i-lucide-save">
              Save
            </UButton>
            <UBadge color="primary" variant="soft">
              <UIcon name="i-lucide-check-circle" class="mr-1 size-3" aria-hidden="true" />
              Ready
            </UBadge>
            <UButton icon="i-lucide-settings" color="neutral" variant="outline" aria-label="Settings" />
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
