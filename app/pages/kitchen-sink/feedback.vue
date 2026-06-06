<template>
  <KitchenSinkPage
    title="Feedback route moved"
    description="Feedback examples now live on the consolidated components page."
    icon="i-lucide-message-circle-warning"
  >
    <UAlert
      icon="i-lucide-arrow-right"
      color="neutral"
      variant="soft"
      title="Open the components page"
      description="Alerts, progress, skeletons, empty states, and error treatments are grouped there."
    />
    <UButton to="/kitchen-sink/components" trailing-icon="i-lucide-arrow-right">
      Go to components
    </UButton>
  </KitchenSinkPage>
</template>
