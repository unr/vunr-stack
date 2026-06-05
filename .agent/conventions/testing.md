# Testing conventions

Testing exists to make agent changes safer and interviews calmer.

Use this file before adding, changing, or repairing tests.

## Test layers

Use Vitest for:

- pure utilities
- schemas
- formatting helpers
- composables that do not require a full Nuxt runtime
- Pinia store logic

Use Nuxt Test Utils for:

- Nuxt runtime behavior
- pages
- server routes
- auto-imported composables
- plugin behavior
- components that need Nuxt context

Use Playwright for:

- home page smoke test
- kitchen-sink smoke test
- critical browser interactions
- important keyboard flows when practical

## Test naming

Use `.test.ts` or `.spec.ts`.

Prefer colocated tests for pure utilities when helpful.

Prefer `tests/nuxt/` for Nuxt-aware tests.

Prefer `tests/e2e/` for Playwright tests.

## Assertions

Test behavior, not implementation.

Prefer assertions against:

- text visible to users
- emitted events
- route behavior
- validation results
- rendered empty/loading/error states
- accessible names and roles where practical

Avoid:

- brittle class-count assertions
- snapshots for layout-heavy components
- tests that require network access
- tests that depend on timing without a reason

## Bug fixes

Bug fixes should usually include a regression test.

A good regression test:

- fails before the fix
- passes after the fix
- describes the user-observable bug
- does not overfit internal implementation details

## Test data

Keep test data small and readable.

Prefer local fixtures when repeated.

Avoid huge generated fixtures unless they are necessary.

## Verification commands

Run the narrowest relevant command first.

Examples:

```sh
pnpm test:run tests/unit/my-util.test.ts
pnpm test:run
pnpm lint
pnpm typecheck
pnpm verify
```

Before finishing a meaningful task, run:

```sh
pnpm verify
```

For larger/release-like changes, run:

```sh
pnpm verify:full
```

## Playwright

Use Playwright sparingly.

Prefer one stable smoke test over many brittle UI tests.

Good Playwright targets:

- home page renders
- navigation works
- kitchen sink renders
- theme toggle works
- critical form submits or validates

Avoid visual-perfect assertions unless explicitly requested.

## Context7

Use Context7 before changing Vitest, Nuxt Test Utils, or Playwright APIs/configuration.
