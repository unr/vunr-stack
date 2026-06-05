<script setup lang="ts">
useSeoMeta({
  title: 'Kitchen sink',
  description: 'Starter examples for reusable Nuxt/Vue patterns.',
})
</script>

<template>
  <main class="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
    <header class="space-y-2">
      <h1 class="text-2xl font-semibold text-highlighted">
        Kitchen sink
      </h1>
      <p class="text-muted">
        Small starter examples for components, content, state, icons, and tests.
      </p>
    </header>

    <UCard>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="space-y-1">
          <h2 class="font-medium text-highlighted">
            Agentic setup verification
          </h2>
          <p class="text-sm text-muted">
            Smoke page for the Codex-first Nuxt/Vue starter baseline.
          </p>
        </div>

        <UButton to="/kitchen-sink/agent-verification" trailing-icon="i-lucide-arrow-right">
          Open
        </UButton>
      </div>
    </UCard>
  </main>
</template>
