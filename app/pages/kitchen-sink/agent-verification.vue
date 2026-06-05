<script setup lang="ts">
import AgentVerificationCard from '~/components/kitchen-sink/AgentVerificationCard.vue'

const { data: verificationDoc } = await useAsyncData('agent-verification-doc', () => {
  return queryCollection('docs').path('/docs/agent-verification').first()
})

useSeoMeta({
  title: 'Agentic setup verification',
  description: 'Kitchen-sink smoke page for the Codex-first Nuxt/Vue starter baseline.',
})
</script>

<template>
  <main class="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
    <AgentVerificationCard />

    <UCard v-if="verificationDoc">
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-file-text" class="size-5 text-primary" aria-hidden="true" />
          <h2 class="text-lg font-semibold text-highlighted">
            {{ verificationDoc.title }}
          </h2>
        </div>
      </template>

      <ContentRenderer :value="verificationDoc" class="agent-prose" />
    </UCard>

    <UAlert
      v-else
      icon="i-lucide-file-warning"
      title="Content sample unavailable"
      description="The verification content document was not found."
    />
  </main>
</template>
