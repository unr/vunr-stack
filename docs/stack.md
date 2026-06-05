# unr-stack

`unr-stack` is a Nuxt/Vue starter template for personal sites, hobby projects, interview coding, and small polished web apps.

The goal is to be fast, typed, accessible, visually opinionated, and pleasant to drive from Neovim/tmux with Codex support.

## Core stack

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

## Explicitly out of scope for the starter

Do not include by default:

- auth
- database
- ORM
- billing
- payments
- analytics
- SaaS scaffolding

Do not add these unless explicitly requested:

- Drizzle
- Prisma
- Supabase
- Better Auth
- Auth.js
- Stripe
- Polar
- Clerk

## Design principles

- Prefer Nuxt conventions over custom architecture.
- Prefer Nuxt UI over building custom primitives.
- Prefer typed, readable Vue code over clever abstractions.
- Prefer accessible defaults.
- Prefer dark-mode-safe styling.
- Prefer project scripts over one-off commands.
- Prefer Context7 docs over memory for package behavior.

## Suggested structure

```txt
app/
  pages/
  components/
    app/
    kitchen-sink/
  composables/
  stores/
  assets/
content/
  blog/
  docs/
  projects/
  changelog/
server/
  api/
shared/
  types/
  constants/
  schemas/
tests/
  unit/
  nuxt/
e2e/
.agent/
docs/
```

## Kitchen sink

The kitchen sink is the design lab for the starter.

It should show:

- typography
- colors and tokens
- buttons
- forms
- cards
- badges
- alerts
- navigation
- overlays
- content rendering
- icons
- empty/loading/error states
- light/dark mode behavior

Reusable visual changes should be reflected in the kitchen sink.

## Verification

The default verification command is:

```sh
pnpm verify
```

The full verification command is:

```sh
pnpm verify:full
```

## Agent support

The agentic setup is intentionally narrow:

- Codex only
- Superpowers for workflow
- Context7 for docs
- `AGENTS.md` for project rules
- `.agent/` for detailed conventions

Do not add cross-agent instruction files unless explicitly requested.
