<script setup lang="ts">
useSeoMeta({
  title: 'Feedback',
  description: 'Nuxt UI alerts, badges, progress, skeletons, toasts, empty states, and error states.',
})

const toast = useToast()

const alerts = [
  { color: 'primary', icon: 'i-lucide-flame', title: 'Primary note', description: 'Burnt orange handles the main theme emphasis.' },
  { color: 'success', icon: 'i-lucide-check-circle', title: 'Verification passed', description: 'Use success when work is complete and checked.' },
  { color: 'warning', icon: 'i-lucide-alert-triangle', title: 'Needs attention', description: 'Warnings pair color with icon and text.' },
  { color: 'error', icon: 'i-lucide-x-circle', title: 'Broken state', description: 'Errors stay direct and easy to scan.' },
] as const

const badgeColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'] as const

function showToast() {
  toast.add({
    title: 'Theme sample saved',
    description: 'Toast rendering is available because app.vue wraps pages in UApp.',
    icon: 'i-lucide-check-circle',
  })
}
</script>

<template>
  <KitchenSinkPage
    title="Feedback"
    description="Inspect alert variants, badges, progress, skeletons, toast behavior, empty states, and error states."
    icon="i-lucide-message-circle-warning"
  >
    <KitchenSinkSection title="Alerts" description="Feedback does not rely on color alone. Icons and labels communicate the state.">
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
    </KitchenSinkSection>

    <KitchenSinkSection title="Badges and progress" description="Compact status treatments for dashboards, lists, and cards.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Badges">
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="color in badgeColors" :key="color" :color="color" variant="soft">
              {{ color }}
            </UBadge>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Progress">
          <div class="space-y-4">
            <UProgress :model-value="68" status />
            <UProgress :model-value="42" color="warning" status />
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Loading, empty, and error" description="Common product states for small apps and local demos.">
      <div class="grid gap-4 lg:grid-cols-3">
        <KitchenSinkExample title="Skeleton">
          <div class="space-y-3">
            <USkeleton class="h-5 w-32" />
            <USkeleton class="h-20 w-full" />
            <USkeleton class="h-4 w-5/6" />
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Empty state">
          <div class="flex min-h-40 flex-col items-center justify-center gap-3 text-center">
            <UIcon name="i-lucide-circle-dashed" class="size-8 text-primary" aria-hidden="true" />
            <div>
              <h3 class="font-semibold text-highlighted">
                Nothing queued
              </h3>
              <p class="mt-1 text-sm text-muted">
                Empty states include a next action when possible.
              </p>
            </div>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Error state">
          <UAlert
            color="error"
            variant="soft"
            icon="i-lucide-triangle-alert"
            title="Preview failed"
            description="Run verification again after fixing the page contract."
          />
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Toast" description="Toast behavior uses the existing UApp wrapper.">
      <KitchenSinkExample title="Trigger">
        <UButton icon="i-lucide-bell" @click="showToast">
          Show toast
        </UButton>
      </KitchenSinkExample>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
