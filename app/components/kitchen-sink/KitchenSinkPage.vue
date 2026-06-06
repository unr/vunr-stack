<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  icon?: string
}>()

const breadcrumbItems = computed(() => [
  { label: 'Kitchen sink', to: '/kitchen-sink' },
  { label: props.title },
])
</script>

<template>
  <div class="min-h-screen bg-default text-default">
    <a
      href="#kitchen-sink-main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-inverted focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-inverted focus:outline-2 focus:outline-offset-2 focus:outline-primary"
    >
      Skip to kitchen sink content
    </a>

    <header class="sticky top-0 z-40 border-b border-default bg-default/95 backdrop-blur supports-[backdrop-filter]:bg-default/80">
      <div class="mx-auto flex h-14 w-full max-w-[var(--ui-container)] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <USlideover title="Kitchen sink navigation" description="Browse neutral shell examples.">
          <UButton
            class="lg:hidden"
            icon="i-lucide-menu"
            color="neutral"
            variant="ghost"
            aria-label="Open kitchen sink navigation"
          />

          <template #body>
            <KitchenSinkNav />
          </template>
        </USlideover>

        <NuxtLink
          to="/kitchen-sink"
          class="flex min-w-0 items-center gap-2 rounded-md text-sm font-semibold text-highlighted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span class="flex size-7 shrink-0 items-center justify-center rounded-md border border-accented bg-elevated">
            <UIcon name="i-lucide-terminal" class="size-4" aria-hidden="true" />
          </span>
          <span class="truncate">unr-stack</span>
        </NuxtLink>

        <div
          role="search"
          aria-label="Kitchen sink command hint"
          class="ml-auto hidden h-8 min-w-0 max-w-sm flex-1 items-center gap-2 rounded-md border border-muted bg-elevated/55 px-2.5 text-sm text-muted md:flex"
        >
          <UIcon name="i-lucide-search" class="size-4 shrink-0" aria-hidden="true" />
          <span class="truncate">Search patterns</span>
          <span class="ml-auto flex items-center gap-1">
            <UKbd value="meta" />
            <UKbd value="K" />
          </span>
        </div>

        <ClientOnly>
          <UColorModeButton color="neutral" variant="ghost" size="sm" aria-label="Toggle color mode" />
          <template #fallback>
            <UButton
              icon="i-lucide-sun-moon"
              color="neutral"
              variant="ghost"
              size="sm"
              disabled
              aria-label="Color mode loading"
            />
          </template>
        </ClientOnly>
      </div>
    </header>

    <div class="mx-auto grid w-full max-w-[var(--ui-container)] lg:grid-cols-[15.5rem_minmax(0,1fr)]">
      <aside class="hidden min-h-[calc(100vh-3.5rem)] border-r border-default lg:block">
        <div class="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-3">
          <KitchenSinkNav />
        </div>
      </aside>

      <main id="kitchen-sink-main" class="min-w-0 px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
        <div class="mx-auto max-w-6xl space-y-7">
          <header class="space-y-4">
            <UBreadcrumb :items="breadcrumbItems" />

            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div class="min-w-0 space-y-2">
                <div class="flex items-center gap-3">
                  <span
                    v-if="icon"
                    class="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-accented bg-elevated text-highlighted"
                  >
                    <UIcon :name="icon" class="size-4" aria-hidden="true" />
                  </span>
                  <h1 class="text-2xl font-semibold tracking-normal text-highlighted sm:text-3xl">
                    {{ title }}
                  </h1>
                </div>
                <p class="max-w-3xl text-sm leading-6 text-muted">
                  {{ description }}
                </p>
              </div>

              <slot name="actions" />
            </div>
          </header>

          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
