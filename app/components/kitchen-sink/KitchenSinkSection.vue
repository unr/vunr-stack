<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  icon?: string
}>()
</script>

<template>
  <section class="space-y-4">
    <header class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div class="min-w-0 space-y-1">
        <div class="flex items-center gap-2">
          <UIcon v-if="icon" :name="icon" class="size-4 text-primary" aria-hidden="true" />
          <h2 class="text-lg font-semibold text-highlighted">
            {{ title }}
          </h2>
        </div>
        <p v-if="description" class="max-w-3xl text-sm leading-6 text-muted">
          {{ description }}
        </p>
      </div>
    </header>

    <slot />
  </section>
</template>
