<script setup lang="ts">
import type { PaletteSwatch } from '~~/shared/kitchenSink'

const props = defineProps<{
  swatch: PaletteSwatch
  name: string
}>()

const foreground = computed(() => props.swatch.shade >= 500 ? '#faf7f2' : '#341407')
</script>

<template>
  <div
    class="flex min-h-24 flex-col justify-between rounded-md border border-default p-3 shadow-sm"
    :style="{ backgroundColor: swatch.hex, color: foreground }"
  >
    <span class="text-xs font-semibold">{{ name }} {{ swatch.shade }}</span>
    <span class="font-mono text-xs">{{ swatch.hex }}</span>
  </div>
</template>
