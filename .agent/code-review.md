# Code review checklist

Use this checklist when reviewing local changes, a branch, or an implementation before final response.

## Correctness

- Does the change satisfy the user request?
- Are edge cases handled?
- Are empty, loading, and error states handled where relevant?
- Are server/client boundaries respected?
- Is browser-only code guarded from SSR?
- Are public APIs, routes, props, and content schemas changed intentionally?

## Vue/Nuxt fit

- Does the code follow Nuxt file and naming conventions?
- Do Vue components use `<script setup lang="ts">`?
- Are props and emits typed?
- Are Nuxt data-fetching primitives used appropriately?
- Is Pinia used only for durable app/client state?
- Are composables named clearly and scoped appropriately?
- Are server routes thin and validated at the boundary?

## UI quality

- Does the UI use Nuxt UI where appropriate?
- Is dark mode preserved?
- Are spacing, typography, and visual hierarchy consistent?
- Are Lucide icons used consistently through `UIcon` or `AppIcon`?
- Is custom CSS justified?
- Is the kitchen sink updated for reusable visual changes?

## Accessibility

- Are interactive elements keyboard accessible?
- Are labels and accessible names present?
- Is focus visible?
- Is semantic HTML used where possible?
- Is color not the only indicator?
- Are reduced-motion concerns respected where relevant?

## Tests and checks

- Were relevant tests added or updated?
- Did `pnpm lint` pass?
- Did `pnpm typecheck` pass?
- Did `pnpm test:run` pass?
- Did `pnpm verify` pass for meaningful changes?
- If checks were not run, is the reason clear?

## Dependency hygiene

- Were new dependencies avoided where the existing stack was enough?
- If a dependency was added, is it justified?
- No auth/database/payment/SaaS dependency was added unless explicitly requested.

## Documentation

- Were project docs updated if behavior changed?
- Were agent docs updated if conventions changed?
- Were external docs checked through Context7 when package behavior was involved?

## Final response format

Include:

1. summary of changes
2. checks run
3. checks not run
4. risks, tradeoffs, or follow-ups

Do not hide failing checks.
