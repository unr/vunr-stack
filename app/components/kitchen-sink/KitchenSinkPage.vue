<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  icon?: string
}>()

const breadcrumbItems = [
  { label: 'Kitchen sink', to: '/kitchen-sink' },
  { label: props.title },
]
</script>

<template>
  <main class="mx-auto grid w-full max-w-[var(--ui-container)] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:px-8">
    <KitchenSinkNav class="hidden lg:block" />

    <div class="min-w-0 space-y-8">
      <header class="space-y-5">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div class="min-w-0 space-y-3">
            <UBreadcrumb :items="breadcrumbItems" />
            <div class="flex items-center gap-3">
              <span
                v-if="icon"
                class="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-accented bg-accented text-primary"
              >
                <UIcon :name="icon" class="size-5" aria-hidden="true" />
              </span>
              <div class="min-w-0 space-y-1">
                <h1 class="text-2xl font-semibold text-highlighted sm:text-3xl">
                  {{ title }}
                </h1>
                <p class="max-w-3xl text-sm leading-6 text-muted sm:text-base">
                  {{ description }}
                </p>
              </div>
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

      <slot />
    </div>
  </main>
</template>
