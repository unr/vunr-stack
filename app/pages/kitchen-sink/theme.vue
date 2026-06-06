<template>
  <KitchenSinkPage
    title="Theme route moved"
    description="Theme tokens now live on the foundation page."
    icon="i-lucide-swatch-book"
  >
    <UAlert
      icon="i-lucide-arrow-right"
      color="neutral"
      variant="soft"
      title="Open the foundation page"
      description="The neutral primary palette, surfaces, text, borders, radius, focus, and semantic states are grouped there."
    />
    <UButton to="/kitchen-sink/foundation" trailing-icon="i-lucide-arrow-right">
      Go to foundation
    </UButton>
  </KitchenSinkPage>
</template>
