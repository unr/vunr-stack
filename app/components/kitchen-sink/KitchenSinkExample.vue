<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div class="rounded-lg border border-default bg-elevated/60 p-4">
    <div v-if="title || description" class="mb-4 space-y-1">
      <h3 class="text-sm font-semibold text-highlighted">
        {{ title }}
      </h3>
      <p v-if="description" class="text-sm leading-6 text-muted">
        {{ description }}
      </p>
    </div>

    <slot />
  </div>
</template>
