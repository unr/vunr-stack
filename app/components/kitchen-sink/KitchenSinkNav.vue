<script setup lang="ts">
import { kitchenSinkPages } from '~~/shared/kitchenSink'

const route = useRoute()

const sectionLabels = ['Foundations', 'Patterns', 'System'] as const

const sections = computed(() => sectionLabels.map(label => ({
  label,
  pages: kitchenSinkPages.filter(page => page.section === label),
})))

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <nav aria-label="Kitchen sink pages" class="space-y-4">
    <NuxtLink
      to="/kitchen-sink"
      class="group relative flex min-h-9 items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium transition-colors hover:bg-accented/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :class="isActive('/kitchen-sink') ? 'bg-accented/55 text-highlighted' : 'text-muted'"
      :aria-current="isActive('/kitchen-sink') ? 'page' : undefined"
    >
      <span
        class="absolute inset-y-2 left-0 w-px rounded-full transition-colors"
        :class="isActive('/kitchen-sink') ? 'bg-highlighted' : 'bg-transparent'"
        aria-hidden="true"
      />
      <UIcon name="i-lucide-layout-dashboard" class="size-4 shrink-0" aria-hidden="true" />
      <span class="truncate">Overview</span>
    </NuxtLink>

    <section v-for="section in sections" :key="section.label" class="space-y-1.5">
      <h2 class="px-2.5 text-[0.68rem] font-semibold uppercase tracking-normal text-dimmed">
        {{ section.label }}
      </h2>

      <NuxtLink
        v-for="page in section.pages"
        :key="page.path"
        :to="page.path"
        class="group relative flex min-h-9 items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium transition-colors hover:bg-accented/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        :class="isActive(page.path) ? 'bg-accented/55 text-highlighted' : 'text-muted'"
        :aria-current="isActive(page.path) ? 'page' : undefined"
      >
        <span
          class="absolute inset-y-2 left-0 w-px rounded-full transition-colors"
          :class="isActive(page.path) ? 'bg-highlighted' : 'bg-transparent'"
          aria-hidden="true"
        />
        <UIcon :name="page.icon" class="size-4 shrink-0" aria-hidden="true" />
        <span class="truncate">{{ page.label }}</span>
      </NuxtLink>
    </section>
  </nav>
</template>
