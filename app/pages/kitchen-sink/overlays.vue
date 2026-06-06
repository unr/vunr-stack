<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

useSeoMeta({
  title: 'Overlays',
  description: 'Nuxt UI modal, slideover, popover, tooltip, dropdown, accordion, and collapsible demos.',
})

const dropdownItems: DropdownMenuItem[][] = [
  [
    { label: 'Copy link', icon: 'i-lucide-copy' },
    { label: 'Open foundation page', icon: 'i-lucide-swatch-book', to: '/kitchen-sink/foundation' },
  ],
  [
    { label: 'Delete draft', icon: 'i-lucide-trash-2', color: 'error' },
  ],
]

const accordionItems = [
  { label: 'Modal', icon: 'i-lucide-maximize-2', content: 'Use for focused decisions that need interruption.' },
  { label: 'Popover', icon: 'i-lucide-message-square', content: 'Use for lightweight contextual controls.' },
  { label: 'Tooltip', icon: 'i-lucide-message-circle-question-mark', content: 'Use to name compact icon controls.' },
]
</script>

<template>
  <KitchenSinkPage
    title="Overlays"
    description="Inspect accessible Nuxt UI overlay primitives without custom portal or focus-management code."
    icon="i-lucide-panels-top-left"
  >
    <KitchenSinkSection title="Dialog surfaces" description="Modal and slideover examples rely on Nuxt UI focus and escape handling.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Modal">
          <UModal title="Confirm shell note" description="A compact modal for one focused decision.">
            <UButton icon="i-lucide-maximize-2">
              Open modal
            </UButton>

            <template #body>
              <p class="text-sm leading-6 text-muted">
                This modal demonstrates the default close affordance, title, description, body,
                and portal behavior.
              </p>
            </template>

            <template #footer="{ close }">
              <div class="flex justify-end gap-2">
                <UButton color="neutral" variant="outline" @click="close">
                  Cancel
                </UButton>
                <UButton @click="close">
                  Confirm
                </UButton>
              </div>
            </template>
          </UModal>
        </KitchenSinkExample>

        <KitchenSinkExample title="Slideover">
          <USlideover title="Inspector" description="Use side panels for supporting details.">
            <UButton color="neutral" variant="outline" icon="i-lucide-panel-right-open">
              Open slideover
            </UButton>

            <template #body>
              <div class="space-y-3 text-sm leading-6 text-muted">
                <p>Slideovers work well for route-adjacent settings and preview details.</p>
                <UAlert color="neutral" variant="soft" title="Design note" description="Keep slideovers scoped and easy to dismiss." />
              </div>
            </template>
          </USlideover>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Small overlays" description="Popover, tooltip, and dropdown examples use labeled triggers.">
      <div class="grid gap-4 lg:grid-cols-3">
        <KitchenSinkExample title="Popover">
          <UPopover>
            <UButton color="neutral" variant="outline" icon="i-lucide-message-square">
              Open popover
            </UButton>

            <template #content>
              <div class="max-w-64 p-4 text-sm leading-6 text-muted">
                Popovers are useful for compact controls that should not navigate away.
              </div>
            </template>
          </UPopover>
        </KitchenSinkExample>

        <KitchenSinkExample title="Tooltip">
          <UTooltip text="Run local verification">
            <UButton icon="i-lucide-check-check" aria-label="Run local verification" />
          </UTooltip>
        </KitchenSinkExample>

        <KitchenSinkExample title="Dropdown menu">
          <UDropdownMenu :items="dropdownItems">
            <UButton color="neutral" variant="outline" icon="i-lucide-ellipsis">
              Actions
            </UButton>
          </UDropdownMenu>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Disclosure" description="Accordion and collapsible controls keep secondary content available without a modal.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Accordion">
          <UAccordion :items="accordionItems" />
        </KitchenSinkExample>

        <KitchenSinkExample title="Collapsible">
          <UCollapsible>
            <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down">
              Toggle details
            </UButton>

            <template #content>
              <div class="mt-3 rounded-md border border-default bg-muted/45 p-4 text-sm leading-6 text-muted">
                Collapsible content stays inline, which is usually better than defaulting to a modal.
              </div>
            </template>
          </UCollapsible>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
