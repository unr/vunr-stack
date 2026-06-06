<script setup lang="ts">
import { reactive, ref } from 'vue'

useSeoMeta({
  title: 'Forms',
  description: 'Nuxt UI form fields, labels, help text, validation copy, and input states.',
})

const form = reactive({
  name: 'unr-stack',
  notes: 'Keep the starter compact and polished.',
  projectType: 'starter',
  density: 'comfortable',
  acceptsKeyboard: true,
  publishReady: false,
  confidence: 72,
})

const pin = ref<string[]>(['2', '0', '2', '6'])

const projectTypes = [
  { label: 'Starter template', value: 'starter' },
  { label: 'Personal site', value: 'site' },
  { label: 'Interview app', value: 'interview' },
]

const densityItems = [
  { label: 'Compact', description: 'Dense controls for repeated work.', value: 'compact' },
  { label: 'Comfortable', description: 'Balanced spacing for most starter apps.', value: 'comfortable' },
  { label: 'Roomy', description: 'More air for content-heavy pages.', value: 'roomy' },
]
</script>

<template>
  <KitchenSinkPage
    title="Forms"
    description="Inspect labels, help text, error copy, selection controls, sliders, pin input, and submit actions."
    icon="i-lucide-clipboard-list"
  >
    <KitchenSinkSection title="Inputs" description="Static local state is enough for this design lab.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Text fields">
          <form class="space-y-4" @submit.prevent>
            <UFormField label="Project name" name="name" description="Use a short name that fits navigation and metadata.">
              <UInput v-model="form.name" icon="i-lucide-terminal" />
            </UFormField>

            <UFormField label="Notes" name="notes" description="Textarea height should stay comfortable in dense panels.">
              <UTextarea v-model="form.notes" :rows="4" />
            </UFormField>

            <UFormField label="Missing slug" name="slug" error="Slug is required before publishing.">
              <UInput placeholder="project-slug" aria-invalid="true" />
            </UFormField>
          </form>
        </KitchenSinkExample>

        <KitchenSinkExample title="Selection controls">
          <div class="space-y-4">
            <UFormField label="Project type" name="projectType">
              <USelect v-model="form.projectType" :items="projectTypes" />
            </UFormField>

            <URadioGroup
              v-model="form.density"
              legend="Interface density"
              :items="densityItems"
              color="primary"
            />
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Toggles and numeric input" description="Controls include visible labels and are keyboard reachable through Nuxt UI primitives.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Boolean settings">
          <div class="space-y-4">
            <UCheckbox
              v-model="form.acceptsKeyboard"
              label="Keyboard flow checked"
              description="The workflow has visible labels and focus states."
            />
            <USwitch
              v-model="form.publishReady"
              label="Ready to publish"
              description="Disabled in this mock until verification passes."
              checked-icon="i-lucide-check"
              unchecked-icon="i-lucide-x"
            />
          </div>
        </KitchenSinkExample>

        <KitchenSinkExample title="Slider and pin input">
          <div class="space-y-5">
            <UFormField label="Confidence" name="confidence" :description="`${form.confidence}% local confidence before full verify.`">
              <USlider v-model="form.confidence" :min="0" :max="100" :step="1" />
            </UFormField>

            <UFormField label="Release PIN" name="pin" description="Pin input exists in the installed Nuxt UI package.">
              <UPinInput v-model="pin" :length="4" otp />
            </UFormField>
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Submit row" description="Actions stay local. No validation library was added for this demo.">
      <KitchenSinkExample title="Simple submit">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <UButton type="button" icon="i-lucide-send">
            Submit mock form
          </UButton>
          <UButton type="button" color="neutral" variant="outline">
            Save draft
          </UButton>
        </div>
      </KitchenSinkExample>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
