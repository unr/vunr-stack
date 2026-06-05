# Vue/Nuxt conventions

Use this file before large Vue/Nuxt changes.

## Component style

Use Vue Single File Components with `<script setup lang="ts">`.

Preferred order inside `<script setup>`:

1. imports
2. types and interfaces
3. props, emits, slots, and model definitions
4. composables and state
5. computed values
6. methods
7. watchers and lifecycle hooks

Prefer type-based props:

```ts
interface Props {
  title: string
  description?: string
}

const props = defineProps<Props>()
```

Use `withDefaults` only when default values are needed:

```ts
interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})
```

Use typed emits:

```ts
const emit = defineEmits<{
  select: [id: string]
  close: []
}>()
```

## Component naming

Prefer specific component names:

- `ProjectCard.vue`
- `ContentHero.vue`
- `KitchenSinkSection.vue`
- `AppHeader.vue`

Avoid vague names:

- `Card.vue`
- `Thing.vue`
- `Wrapper.vue`
- `Common.vue`

## Component size

Keep components small and named by purpose.

Extract a child component when:

- the template becomes difficult to scan
- a repeated visual pattern appears
- a chunk has clear props/events of its own
- the logic has a distinct lifecycle or state boundary

Do not extract just to create abstraction. Extract to improve readability.

## Nuxt data

Use:

- `useFetch` for API/server data that fits Nuxt's SSR-aware data model
- `useAsyncData` when composing custom async logic
- `$fetch` for direct event/action requests
- `useState` for simple SSR-safe shared state
- Pinia for durable client/app state

Do not put every remote API response into Pinia.

## Pinia

Use Pinia when state must survive across pages/components or represents a real app-level concept.

Good Pinia use cases:

- command palette state
- theme or user preferences not already handled by Nuxt color mode
- dashboard layout state
- multi-step form state
- client-only optimistic state

Poor Pinia use cases:

- one page's local toggles
- ordinary form fields
- data that `useFetch` already manages well
- derived values that should be `computed`

## VueUse

Use VueUse when it makes browser or reactivity code simpler and clearer.

Examples:

- media queries
- local storage
- clipboard
- focus tracking
- element size
- mouse or keyboard utilities

Do not use VueUse just to avoid writing one obvious line of Vue code.

## Server routes

Keep server routes thin.

Validate input at the boundary.

Put shared types, schemas, constants, and helpers in `shared/` when they are used by both app and server code.

Do not access browser-only APIs in server code.

Do not leak secrets to client code.

## Errors

Prefer explicit empty, loading, and error states in the UI.

Do not swallow errors silently.

When using Nuxt errors, provide helpful messages without leaking secrets.

## Context7

Use Context7 before changing Nuxt config, data fetching, server routes, module setup, or Vue compiler/typechecking behavior.
