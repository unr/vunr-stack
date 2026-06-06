<script setup lang="ts">
useSeoMeta({
  title: 'Navigation',
  description: 'Nuxt UI navigation menu, breadcrumbs, tabs, pagination, and search input examples.',
})

const navigationItems = [
  { label: 'Overview', icon: 'i-lucide-layout-dashboard', to: '/kitchen-sink' },
  { label: 'Theme', icon: 'i-lucide-palette', to: '/kitchen-sink/theme' },
  { label: 'Forms', icon: 'i-lucide-clipboard-list', to: '/kitchen-sink/forms' },
  { label: 'Data', icon: 'i-lucide-table-2', to: '/kitchen-sink/data' },
]

const breadcrumbItems = [
  { label: 'Home', icon: 'i-lucide-house', to: '/' },
  { label: 'Kitchen sink', to: '/kitchen-sink' },
  { label: 'Navigation' },
]

const tabs = [
  { label: 'Build', icon: 'i-lucide-hammer', content: 'Build-oriented tabs for app workflows.' },
  { label: 'Review', icon: 'i-lucide-search-check', content: 'Review tabs can hold audit states.' },
  { label: 'Ship', icon: 'i-lucide-send', content: 'Ship tabs keep release steps grouped.' },
]
</script>

<template>
  <KitchenSinkPage
    title="Navigation"
    description="Inspect menu, breadcrumb, tabs, pagination, and compact command-style search patterns."
    icon="i-lucide-navigation"
  >
    <KitchenSinkSection title="Navigation menu" description="Horizontal and narrow vertical menu shapes use the same Nuxt UI item data.">
      <div class="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
        <KitchenSinkExample title="Horizontal menu">
          <UNavigationMenu :items="navigationItems" class="w-full" />
        </KitchenSinkExample>

        <KitchenSinkExample title="Compact vertical">
          <div class="max-w-64">
            <UNavigationMenu :items="navigationItems" orientation="vertical" highlight />
          </div>
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Breadcrumbs and tabs" description="Small app-shell pieces for repeated product surfaces.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Breadcrumb">
          <UBreadcrumb :items="breadcrumbItems" />
        </KitchenSinkExample>

        <KitchenSinkExample title="Tabs">
          <UTabs :items="tabs" color="primary" />
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>

    <KitchenSinkSection title="Search and pagination" description="Command-ish inputs and pagination stay compact on narrow widths.">
      <div class="grid gap-4 lg:grid-cols-2">
        <KitchenSinkExample title="Search input">
          <UInput
            icon="i-lucide-search"
            placeholder="Search starter patterns..."
            aria-label="Search starter patterns"
          >
            <template #trailing>
              <UKbd value="meta" />
              <UKbd value="K" />
            </template>
          </UInput>
        </KitchenSinkExample>

        <KitchenSinkExample title="Pagination">
          <UPagination :page="3" :total="84" :items-per-page="12" show-edges />
        </KitchenSinkExample>
      </div>
    </KitchenSinkSection>
  </KitchenSinkPage>
</template>
