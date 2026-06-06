<script setup lang="ts">
useSeoMeta({
  title: 'Typography',
  description: 'Text hierarchy, prose, code, links, and list styles for unr-stack.',
})
</script>

<template>
  <KitchenSinkPage
    title="Typography"
    description="Inspect hierarchy, rhythm, prose treatment, inline code, keyboard text, quotes, and list defaults."
    icon="i-lucide-type"
  >
    <KitchenSinkSection title="Headings" description="Display text stays compact inside the design lab and avoids oversized marketing treatment.">
      <KitchenSinkExample title="Scale">
        <div class="space-y-4">
          <h1 class="text-4xl font-semibold text-highlighted">
            h1 Build small polished Nuxt apps
          </h1>
          <h2 class="text-3xl font-semibold text-highlighted">
            h2 Design lab surfaces
          </h2>
          <h3 class="text-2xl font-semibold text-highlighted">
            h3 Component state checks
          </h3>
          <h4 class="text-xl font-semibold text-highlighted">
            h4 Content and forms
          </h4>
          <h5 class="text-lg font-semibold text-highlighted">
            h5 Navigation patterns
          </h5>
          <h6 class="text-base font-semibold text-highlighted">
            h6 Fine-grained tokens
          </h6>
        </div>
      </KitchenSinkExample>
    </KitchenSinkSection>

    <KitchenSinkSection title="Body text" description="Readable default copy with muted, toned, highlighted, and link states.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Paragraphs">
          <div class="max-w-[70ch] space-y-4">
            <p class="text-lg leading-8 text-highlighted">
              Lead text can introduce a page or dense tool surface without taking over the layout.
            </p>
            <p class="leading-7 text-default">
              Default body copy should be calm, direct, and readable across the warm neutral surface
              system. The starter favors clear hierarchy over decorative typography.
            </p>
            <p class="text-muted">
              Muted text supports descriptions, helper copy, and secondary details.
            </p>
            <p class="text-dimmed">
              Dimmed text is reserved for metadata and low-emphasis UI labels.
            </p>
            <p class="text-toned">
              Toned text bridges default and muted states for supporting copy.
            </p>
            <p>
              <NuxtLink to="/kitchen-sink/theme" class="font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Links use primary color with a visible focus state.
              </NuxtLink>
            </p>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Inline elements">
          <div class="space-y-4 text-sm leading-7 text-default">
            <p>
              Inline code uses <code class="rounded bg-accented px-1.5 py-0.5 text-highlighted">useSeoMeta()</code>
              without breaking line height.
            </p>
            <p>
              Keyboard hints use <UKbd value="meta" /> <UKbd value="K" /> for compact command surfaces.
            </p>
            <blockquote class="rounded-md border border-accented bg-elevated p-4 text-toned">
              The kitchen sink should make a theme decision visible before it becomes a default.
            </blockquote>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Lists and code" description="Useful defaults for docs, notes, and component demos.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Lists">
          <div class="grid gap-5 sm:grid-cols-2">
            <ul class="list-disc space-y-2 ps-5 text-sm text-default marker:text-primary">
              <li>Keep changes small.</li>
              <li>Prefer typed Vue components.</li>
              <li>Preserve dark mode.</li>
            </ul>
            <ol class="list-decimal space-y-2 ps-5 text-sm text-default marker:text-primary">
              <li>Read local docs.</li>
              <li>Check package docs.</li>
              <li>Verify locally.</li>
            </ol>
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Code block">
          <pre class="overflow-x-auto rounded-md border border-default bg-inverted p-4 text-sm text-inverted"><code>&lt;script setup lang="ts"&gt;
const title = 'unr-stack'
&lt;/script&gt;</code></pre>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
