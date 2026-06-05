<script setup lang="ts">
useSeoMeta({
  title: 'unr-stack',
  description: 'Codex-first Nuxt/Vue starter.',
})
</script>

<template>
  <main class="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-6 px-4 py-10 sm:px-6 lg:px-8">
    <header class="space-y-3">
      <UBadge variant="soft">
        Nuxt/Vue starter
      </UBadge>
      <h1 class="text-3xl font-semibold text-highlighted">
        unr-stack
      </h1>
      <p class="text-muted">
        A compact Codex-first starter for typed, accessible Nuxt/Vue apps.
      </p>
    </header>

    <div class="flex flex-wrap gap-3">
      <UButton to="/kitchen-sink/agent-verification" trailing-icon="i-lucide-arrow-right">
        Agent verification
      </UButton>
      <UButton to="/kitchen-sink" variant="outline">
        Kitchen sink
      </UButton>
    </div>
  </main>
</template>
