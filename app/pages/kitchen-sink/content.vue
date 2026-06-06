<script setup lang="ts">
const { data: contentDoc } = await useAsyncData('kitchen-sink-content-doc', () => {
  return queryCollection('docs').path('/docs/kitchen-sink').first()
})

useSeoMeta({
  title: 'Content',
  description: 'Nuxt Content rendering example for the kitchen sink design lab.',
})
</script>

<template>
  <KitchenSinkPage
    title="Content"
    description="Inspect Nuxt Content querying, Markdown rendering, and prose styling through the typed docs collection."
    icon="i-lucide-file-text"
  >
    <KitchenSinkSection title="Rendered Markdown" description="The document is loaded from content/docs/kitchen-sink.md via queryCollection.">
      <div class="grid gap-4 lg:grid-cols-[1fr_0.65fr]">
        <UCard v-if="contentDoc">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-file-text" class="size-5 text-primary" aria-hidden="true" />
              <div>
                <h2 class="font-semibold text-highlighted">
                  {{ contentDoc.title }}
                </h2>
                <p class="text-sm text-muted">
                  {{ contentDoc.description }}
                </p>
              </div>
            </div>
          </template>

          <ContentRenderer :value="contentDoc" class="agent-prose" />
        </UCard>

        <UAlert
          v-else
          icon="i-lucide-file-warning"
          color="warning"
          title="Content sample unavailable"
          description="The kitchen-sink content fixture was not found in the docs collection."
        />

        <KitchenSinkExample title="Collection contract" description="The existing content.config.ts defines docs as a typed page collection.">
          <dl class="space-y-3 text-sm">
            <div class="flex justify-between gap-3">
              <dt class="text-muted">
                Collection
              </dt>
              <dd class="font-mono text-highlighted">
                docs
              </dd>
            </div>
            <div class="flex justify-between gap-3">
              <dt class="text-muted">
                Path
              </dt>
              <dd class="font-mono text-highlighted">
                /docs/kitchen-sink
              </dd>
            </div>
            <div class="flex justify-between gap-3">
              <dt class="text-muted">
                Renderer
              </dt>
              <dd class="font-mono text-highlighted">
                ContentRenderer
              </dd>
            </div>
          </dl>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Prose treatments" description="Code, callouts, and inline prose use the same neutral shell tokens.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Code sample">
          <pre class="overflow-x-auto rounded-md border border-default bg-inverted p-4 text-sm text-inverted"><code>const route = '/kitchen-sink/content'
const shell = 'neutral-dark'</code></pre>
        </KitchenSinkExample>

        <KitchenSinkExample title="Callout">
          <UAlert
            icon="i-lucide-file-text"
            color="neutral"
            variant="soft"
            title="Content stays local"
            description="This starter keeps Nuxt Content as a typed fixture and does not add a docs product layer."
          />
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
