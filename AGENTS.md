# AGENTS.md

This repository is `unr-stack`: a Nuxt/Vue starter template for personal sites, hobby projects, interview coding, and small polished web apps.

The preferred style is pragmatic, typed, accessible, visually polished, and boring in the best way. Make small, understandable changes. Prefer clear Nuxt/Vue patterns over clever abstractions.

## Agent harness

This repository is optimized for Codex.

Do not add Claude, Cursor, Copilot, Windsurf, or other agent-specific instruction files unless explicitly requested.

## Workflow

When Superpowers is available, use it for:

- planning
- command execution
- TDD or test-oriented implementation flow
- review discipline
- multi-step task management

These repository instructions do not replace Superpowers. They define project-specific constraints, project taste, and the local verification contract.

For small tasks, make the smallest correct change.

For larger tasks, follow the active Superpowers workflow and keep the user informed before broad rewrites.

## Documentation policy

Use Context7 for external library and API documentation before implementing code that depends on framework or package behavior.

Use Context7 for:

- Nuxt
- Vue
- Nuxt UI
- Nuxt Content
- Pinia
- VueUse
- Vitest
- Nuxt Test Utils
- Playwright
- Tailwind CSS
- ESLint
- Vue language tools

Do not rely on memory for package APIs, Nuxt config shape, testing APIs, or module setup when Context7 is available.

When using Context7, query with:

1. the library name
2. the package version from `package.json` when relevant
3. the specific task being implemented

Example intents:

```txt
Use Context7 for Nuxt 4 routeRules and prerender behavior.
Use Context7 for Nuxt UI form validation examples.
Use Context7 for Nuxt Content collection schema examples.
```

If Context7 is unavailable, say so. Then continue only if the needed behavior can be verified from local files, installed package types, or tests.

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- pnpm
- Nuxt UI
- Nuxt Content
- Pinia
- VueUse
- Vitest
- Nuxt Test Utils
- Playwright when browser coverage is useful
- Lucide icons through Nuxt Icon/Iconify

Do not add auth, database, ORM, billing, payments, analytics, or SaaS infrastructure unless explicitly requested.

Do not add Drizzle, Prisma, Supabase, Better Auth, Auth.js, Stripe, Polar, Clerk, or database/payment/auth scaffolding to this starter unless explicitly requested.

## Package manager

Use `pnpm`.

Do not use `npm`, `yarn`, or `bun` commands unless explicitly requested.

Before adding any dependency, check whether the existing stack already solves the problem.

Before adding a production dependency, explain why it is needed.

## Common commands

- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Lint: `pnpm lint`
- Fix lint issues: `pnpm lint:fix`
- Typecheck: `pnpm typecheck`
- Unit tests: `pnpm test:run`
- E2E tests: `pnpm test:e2e`
- Quick verification: `pnpm verify`
- Full verification: `pnpm verify:full`

When changing code, run the narrowest relevant check first.

Before finishing a meaningful task, run `pnpm verify` unless the user explicitly says not to.

Use the active Superpowers command-running workflow when available.

## Project structure

- `app/pages/` contains routes.
- `app/components/` contains Vue components.
- `app/components/app/` contains app-level primitives.
- `app/components/kitchen-sink/` contains visual examples and component demos.
- `app/composables/` contains Vue/Nuxt composables.
- `app/stores/` contains Pinia stores.
- `content/` contains Nuxt Content collections.
- `server/` contains Nuxt server routes and utilities.
- `shared/` contains types, schemas, constants, and code shared by app/server.
- `.agent/` contains agent-facing conventions, prompts, and review checklists.

## Vue/Nuxt conventions

Read `.agent/conventions/vue-nuxt.md` before large Vue/Nuxt changes.

Defaults:

- Use Vue Single File Components.
- Use `<script setup lang="ts">`.
- Prefer Composition API.
- Prefer type-only props and emits declarations.
- Keep components small and named by purpose.
- Use Nuxt auto-imports where idiomatic.
- Use `useFetch`, `useAsyncData`, and `$fetch` for server-aware data fetching.
- Use Pinia only for durable client/app state, not as a default API cache.
- Use VueUse for browser/composable utilities when it improves clarity.
- Do not fight Nuxt conventions with custom routing/build abstractions unless asked.

## UI/styling conventions

Read `.agent/conventions/styling.md` before design-system changes.

Defaults:

- Prefer Nuxt UI components before building custom primitives.
- Prefer Nuxt UI theme tokens and Tailwind utility classes.
- Keep custom CSS minimal and centralized.
- Preserve dark mode.
- Preserve keyboard accessibility and visible focus states.
- Use Lucide icons through `UIcon` or `AppIcon`.
- Do not introduce another UI component library.

## Content conventions

Read `.agent/conventions/content.md` before changing Nuxt Content behavior.

Defaults:

- Use Nuxt Content collections for structured content.
- Use Markdown/MDC for rich content pages.
- Keep frontmatter typed and predictable.
- Do not hardcode content lists when they can be queried from collections.

## Testing conventions

Read `.agent/conventions/testing.md` before adding or changing tests.

Defaults:

- Test pure utilities and schemas with Vitest.
- Test Nuxt-aware behavior with `@nuxt/test-utils`.
- Add Playwright coverage for critical browser flows only.
- Prefer user-observable behavior over implementation details.
- Do not create brittle snapshot tests for visual layout unless requested.

## Accessibility expectations

Read `.agent/conventions/accessibility.md` before changing interactive UI.

Interactive UI must have:

- semantic elements where possible
- keyboard access
- visible focus states
- useful labels or accessible names
- no color-only meaning
- reasonable empty/loading/error states

## Final response expectations

Before finishing, report:

1. what changed
2. checks run
3. checks not run
4. any risks, tradeoffs, or follow-ups

Do not hide failing checks.

Prefer being correct over being quick.
