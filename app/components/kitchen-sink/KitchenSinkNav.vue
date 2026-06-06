<script setup lang="ts">
import { kitchenSinkPages } from '~~/shared/kitchenSink'

const route = useRoute()
</script>

<template>
  <nav aria-label="Kitchen sink pages" class="rounded-md border border-default bg-elevated/45 p-2">
    <NuxtLink
      to="/kitchen-sink"
      class="mb-1 flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accented focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :class="route.path === '/kitchen-sink' ? 'bg-accented text-highlighted' : 'text-muted'"
      :aria-current="route.path === '/kitchen-sink' ? 'page' : undefined"
    >
      <UIcon name="i-lucide-layout-dashboard" class="size-4 shrink-0" aria-hidden="true" />
      Overview
    </NuxtLink>

    <NuxtLink
      v-for="page in kitchenSinkPages"
      :key="page.path"
      :to="page.path"
      class="flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accented focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :class="route.path === page.path ? 'bg-accented text-highlighted' : 'text-muted'"
      :aria-current="route.path === page.path ? 'page' : undefined"
    >
      <UIcon :name="page.icon" class="size-4 shrink-0" aria-hidden="true" />
      <span class="truncate">{{ page.label }}</span>
    </NuxtLink>
  </nav>
</template>
