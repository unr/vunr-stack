# Context7 documentation policy

Use Context7 for package and framework documentation.

The goal is to avoid stale APIs, hallucinated config, and outdated Nuxt/Vue examples.

## When to use Context7

Use Context7 before implementing or changing behavior that depends on:

- Nuxt config
- Nuxt modules
- Nuxt server routes
- Nuxt data fetching
- Nuxt rendering, route rules, prerendering, or deployment behavior
- Vue SFC/compiler behavior
- Nuxt UI components, theming, forms, icons, or color mode
- Nuxt Content collections, queries, Markdown/MDC, or rendering
- Pinia stores/plugins
- VueUse composables
- Vitest, Nuxt Test Utils, or Playwright APIs
- ESLint or Nuxt ESLint configuration
- Vue language server or `vue-tsc` behavior

## When Context7 is not necessary

Context7 is not required for:

- reading local files
- following existing repo patterns
- simple TypeScript refactors
- local naming changes
- copy edits
- CSS tweaks that do not depend on package APIs

## Query style

Good queries are specific.

Prefer:

```txt
Nuxt 4 routeRules prerender static blog pages
Nuxt UI form validation schema example
Nuxt Content define collections markdown schema
Pinia Nuxt module store setup TypeScript
VueUse useDark Nuxt color mode interaction
Vitest Nuxt Test Utils render component setup
```

Avoid:

```txt
Nuxt docs
Vue help
forms
testing
```

## Library resolution

When the exact Context7 library ID is unknown, resolve it first.

Prefer the most official/high-reputation result.

Use the package version from `package.json` when relevant.

## Expected workflow

1. Inspect local files and `package.json`.
2. Identify the package and version involved.
3. Use Context7 to fetch relevant docs.
4. Implement against the repo's local conventions.
5. Verify using local types, tests, linting, or build output.

## Verification

Context7 is documentation input, not proof.

After applying docs:

1. inspect local types/config
2. run relevant tests/checks
3. prefer working code over copied examples

If Context7 is unavailable, say so. Continue only if the needed behavior can be verified from local files, installed package types, or tests.
