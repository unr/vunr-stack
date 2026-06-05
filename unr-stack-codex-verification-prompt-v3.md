# Codex Prompt: Verify and Repair `unr-stack` Agentic Setup

You are running locally inside my `unr-stack` repository.

Your job is to verify that the repo behaves like the Codex-first Nuxt/Vue starter we designed. This is not just a theoretical audit. Inspect the repo, repair missing baseline scripts/config for the agreed starter stack, create one small representative kitchen-sink feature, add the smallest useful tests, run verification, and report exactly what works or does not work.

The important goal: if starter gaps exist because Nuxt defaults did not create them, surface and fix the safe ones. Missing `test`, `test:run`, `typecheck`, `verify`, module registration, Nuxt UI CSS setup, generated type setup, basic test setup, or kitchen-sink/content wiring should be handled as part of this task when the needed dependency is already present or is in the agreed allowlist below.

Do not commit anything.
Do not reset, stash, or discard user work.
Do not leave long-running dev servers running.
Do not print secrets.

---

## Core expectations

This repo should be a Nuxt/Vue starter using:

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
- Playwright only where browser/E2E coverage is already configured or explicitly expected by project docs
- Lucide icons through Nuxt Icon/Iconify
- Customizable design-system foundations: fonts, typography, colors, tokens, dark mode, and kitchen-sink examples
- Codex-first project instructions through `AGENTS.md`
- Detailed agent conventions under `.agent/`
- Context7 for external package/framework docs
- Superpowers for workflow and command-running discipline

This repo should **not** include starter scaffolding for:

- auth
- databases
- ORMs
- billing
- payments
- analytics
- SaaS infrastructure
- Drizzle
- Prisma
- Supabase
- Better Auth
- Auth.js
- Stripe
- Polar
- Clerk

If any prohibited dependency or scaffold is present, do not delete it automatically. Report where it appears and whether it looks intentional or accidental.

---

## Dependency and repair policy

The starter may be incomplete. Missing scripts, missing modules, or missing starter wiring are part of what you are here to detect and repair.

You are authorized to add or configure only the agreed starter dependencies listed here, and only when they are missing but required by this repo's own documented expectations.

### Allowed runtime/build dependencies

- `nuxt`
- `vue`
- `@nuxt/ui`
- `@nuxt/content`
- `@pinia/nuxt`
- `pinia`
- `@vueuse/nuxt`
- `@nuxt/icon` only if needed for the repo's icon convention and not already provided by Nuxt UI setup
- `tailwindcss` only if required by the current Nuxt UI/Tailwind setup

### Allowed development dependencies

- `typescript`
- `vue-tsc`
- `@nuxt/eslint`
- `eslint`
- `vitest`
- `@nuxt/test-utils`
- `@vue/test-utils` only if required by the chosen Nuxt/Vitest test pattern
- `happy-dom` only if required by the chosen Vitest/Nuxt test environment
- `@playwright/test` only if Playwright/E2E is already configured, documented, or clearly expected by existing scripts/docs
- `@iconify-json/lucide`

Do not add dependencies outside this allowlist.

If a needed package is outside this allowlist, report it instead of installing it.

If network access or install permissions are unavailable, do not pretend installation worked. Report what would need to be installed and continue with local verification where possible.

Before running `pnpm add`, inspect `package.json` and the lockfile first. If the package is already present, do not reinstall it.

When adding dependencies, keep them in the appropriate dependency section according to current package docs and local project style.

---

## Required behavior before coding

1. Read `AGENTS.md` first.
2. Read the relevant `.agent/` convention files, especially:
   - `.agent/context7.md`
   - `.agent/code-review.md`
   - `.agent/conventions/vue-nuxt.md`
   - `.agent/conventions/styling.md`
   - `.agent/conventions/content.md`
   - `.agent/conventions/testing.md`
   - `.agent/conventions/accessibility.md`
   - `.agent/conventions/editor.md`
3. Use the Superpowers skill/workflow if it is available in this Codex session.
   - Use it for planning, command-running discipline, verification, and review.
   - Do not install or configure Superpowers unless I explicitly ask.
   - If Superpowers is unavailable, say so in the final report and proceed using `AGENTS.md` and `.agent/` guidance.
4. Use Context7 for external documentation before implementing anything that depends on current package/framework behavior.
   - Use Context7 for Nuxt, Nuxt UI, Nuxt Content, Pinia, VueUse, Vitest, Nuxt Test Utils, Tailwind, Vue language tooling, and Playwright if you touch those APIs.
   - Do not use web search as a substitute for Context7.
   - If Context7 is unavailable, say so and rely only on local files, installed package types, and verification commands.
5. Inspect `git status --short` before changing files.
   - Do not overwrite unrelated user changes.
   - Do not reset, stash, or commit anything.
   - Keep all changes minimal and easy to review.
6. If you need a long-running process such as `pnpm dev`, start it in a controlled way, capture only the needed output, and stop it before finishing. Prefer build/test commands over long-running manual dev-server checks.

---

## Phase 0: Initial safety and environment scan

Before modifying files, inspect:

- `git status --short`
- `package.json`
- lockfiles present in the repo root
- `.gitignore`
- Node/package manager hints such as `.node-version`, `.nvmrc`, `engines`, `packageManager`, and `.npmrc`
- obvious secret-bearing files such as `.env`, `.env.local`, `.codex/config.toml`, and config examples

Report but do not automatically fix:

- multiple lockfiles such as `package-lock.json`, `yarn.lock`, or `bun.lockb`
- missing Node version pin
- missing `packageManager` field
- active config files that may contain personal secrets

Safe repairs allowed in this phase:

- If `.gitignore` is missing obvious Nuxt/Node/test artifacts, add minimal ignores for `node_modules`, `.nuxt`, `.output`, `dist`, `coverage`, `playwright-report`, `test-results`, and `.env*` while preserving any tracked `.env.example`.
- If project docs clearly claim pnpm but `package.json` lacks a `packageManager` field, add it only if the current local pnpm version can be determined reliably. Otherwise report the gap.
- Do not invent a Node version. If no `.node-version`/`.nvmrc`/`engines` exists, report it as a reproducibility gap rather than guessing.

Do not print secret values. If you find a likely secret, report the file/path and key name only.

---

## Phase 1: Audit the agentic setup

Inspect and report whether the following exist and are coherent.

### Codex guidance

- `AGENTS.md` exists.
- `AGENTS.md` clearly says this repo is optimized for Codex.
- `AGENTS.md` does not instruct agents to use Claude, Cursor, Copilot, Windsurf, Gemini, or other agent harnesses as first-class supported systems.
- `AGENTS.md` says Superpowers owns workflow/command-running discipline when available.
- `AGENTS.md` says Context7 is the external documentation path.
- `AGENTS.md` defines the stack and package manager.
- `AGENTS.md` includes hard no-rules for auth/database/payment/SaaS scaffolding.
- `AGENTS.md` defines common commands and final response expectations.

### `.agent/` docs

Verify these files exist and are readable:

- `.agent/README.md`
- `.agent/context7.md`
- `.agent/code-review.md`
- `.agent/conventions/vue-nuxt.md`
- `.agent/conventions/styling.md`
- `.agent/conventions/content.md`
- `.agent/conventions/testing.md`
- `.agent/conventions/accessibility.md`
- `.agent/conventions/editor.md`
- `.agent/prompts/feature.md`
- `.agent/prompts/component.md`
- `.agent/prompts/design-system.md`
- `.agent/prompts/review.md`
- `.agent/prompts/interview.md`

Check for contradictions between these docs. Examples:

- one file says to use Context7, another says to use general web search
- one file says Codex-only, another adds Cursor/Claude/GitHub Copilot as first-class supported harnesses
- one file says no auth/db/payment starter scaffolding, another recommends adding it
- testing docs require unavailable tools without explaining they are optional
- docs reference commands that do not exist in `package.json`
- docs reference a directory layout that does not match the actual Nuxt layout without explaining the difference

If docs reference missing expected commands like `pnpm verify`, `pnpm test:run`, or `pnpm typecheck`, fix the scripts in `package.json` during the repair phase below.

Do not rewrite the docs unless the contradiction is small and clearly accidental. Prefer reporting larger issues.

### Cross-agent instruction files

Because this repo is currently Codex-only, check for these files/directories and report them if present:

- `CLAUDE.md`
- `GEMINI.md`
- `.cursor/`
- `.windsurf/`
- `.github/copilot-instructions.md`
- `.agents/skills/`

Do not delete them automatically. Report whether they appear to duplicate or conflict with `AGENTS.md`/Superpowers.

### Optional Codex config examples

If present, inspect:

- `.codex/config.example.toml`
- `.codex/rules.example`

Check whether the config example references Context7 MCP and avoids personal secrets.

If an active `.codex/config.toml` exists, inspect it carefully without printing secrets. Report only structural findings, not token values.

---

## Phase 2: Audit and repair the Nuxt starter baseline

Inspect `package.json`, `pnpm-lock.yaml`, `nuxt.config.*`, `app.config.*`, `content.config.*`, `tsconfig.json`, ESLint config, test config, and project folders.

This phase should actively repair missing starter wiring when safe.

### Package manager

Verify:

- package manager is pnpm-oriented
- lockfile, if present, is `pnpm-lock.yaml`
- no accidental npm/yarn/bun lockfile is being introduced
- `packageManager` is present or reported missing

Do not remove other lockfiles automatically. Report them.

### Required package scripts

Ensure `package.json` has these scripts or equivalent scripts:

```json
{
  "dev": "nuxt dev",
  "build": "nuxt build",
  "generate": "nuxt generate",
  "preview": "nuxt preview",
  "prepare": "nuxt prepare",
  "postinstall": "nuxt prepare",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "typecheck": "nuxt typecheck",
  "test": "vitest",
  "test:run": "vitest run",
  "verify": "pnpm lint && pnpm typecheck && pnpm test:run",
  "verify:full": "pnpm verify && pnpm build"
}
```

If Playwright is already configured, also ensure:

```json
{
  "test:e2e": "playwright test",
  "verify:full": "pnpm verify && pnpm build && pnpm test:e2e"
}
```

If any of these expected scripts are missing, add them.

If the repo already has equivalent scripts with different names, preserve them and add the canonical names as aliases when useful.

Do not break existing scripts.

If adding both `prepare` and `postinstall` appears redundant based on current Nuxt/package docs or local project style, prefer the convention already used by Nuxt starters and explain the choice in the final report.

### Required starter modules/dependencies

Verify these are installed and configured in Nuxt as appropriate:

- Nuxt
- Nuxt UI
- Nuxt Content
- Pinia Nuxt module
- VueUse Nuxt module
- Nuxt ESLint
- Vitest
- Nuxt Test Utils
- Lucide local icon collection through Iconify/Nuxt Icon when needed
- Tailwind CSS/Nuxt UI CSS setup when required by current Nuxt UI docs

Repair rules:

1. If a dependency is installed but missing from `nuxt.config.*`, add the module/config according to Context7 docs and nearby project style.
2. If a dependency is missing but is in the allowlist and is required by the documented starter expectations, install it with `pnpm add` or `pnpm add -D` as appropriate.
3. If a module is optional or ambiguous, report it instead of adding it.
4. If Playwright is not already configured and not clearly expected by docs/scripts, do not add it. Report it as optional.

Expected Nuxt modules may include, adjusted to current docs and local project style:

```ts
modules: [
  '@nuxt/ui',
  '@nuxt/content',
  '@pinia/nuxt',
  '@vueuse/nuxt',
  '@nuxt/eslint',
  '@nuxt/test-utils/module'
]
```

Use Context7 before finalizing exact module names/config.

### Nuxt 4 layout and routing sanity

Verify the actual project structure and do not force a move unless required:

- If the project uses Nuxt 4-style `app/`, prefer `app/pages`, `app/components`, `app/composables`, `app/stores`, and `app/assets`.
- If the project uses root-level Nuxt directories, report the mismatch with the documented goals before moving anything.
- If `app.vue` exists and pages are used, ensure it renders `<NuxtPage />` or equivalent layout/page output.
- Ensure the sample kitchen-sink route can actually be reached by Nuxt routing.
- If layouts are present, ensure the new page uses existing layout conventions.

### Nuxt UI, styling, and design-system baseline

Verify:

- Nuxt UI is registered.
- The app imports the CSS required by current Nuxt UI/Tailwind docs.
- Global CSS/theme files exist where the repo docs say they should.
- Dark mode/color-mode expectations are represented by config or documented as pending.
- Custom typography/fonts are represented by config/CSS or documented as pending.
- Lucide icons are available locally through `@iconify-json/lucide` or an intentionally documented equivalent.
- The kitchen sink includes or can reasonably grow into examples for tokens, typography, icons, buttons/forms/cards, content rendering, and dark mode.

Safe repairs allowed:

- Add the minimal required Nuxt UI CSS import if missing.
- Add `@iconify-json/lucide` if icon usage requires local Lucide icons and it is absent.
- Add a small typography/icon/tokens note to the sample page if the kitchen sink is otherwise empty.

Do not design a full visual identity in this task.
Do not add another UI library.
Do not add a formatter dependency unless already documented.

### Nuxt Content baseline

Nuxt Content is part of the starter, so it should be exercised, not merely installed.

Verify:

- `content/` exists.
- `content.config.*` exists if the repo docs claim typed content collections.
- The content setup can build/typecheck.
- There is at least one minimal content document or existing content example.
- If the kitchen sink/docs area claims content rendering, there is a route or component that demonstrates it.

Safe repairs allowed:

- If `content/` is missing, create a minimal `content/docs/agent-verification.md` or nearest project-equivalent content file.
- If typed collections are documented but missing, add the smallest correct collection/config according to Context7 and local project style.
- If an existing docs/content route index exists, link to the new content sample.

Do not overbuild a full docs site.

### TypeScript, Nuxt generated types, and editor expectations

Verify:

- TypeScript config exists.
- Nuxt type generation can run through `nuxt prepare`.
- Nuxt typechecking can run through `nuxt typecheck`.
- `typescript` and `vue-tsc` are installed if required for `nuxt typecheck`.
- Vue strict template checking is enabled if the repo docs require it.
- The editor conventions do not rely on weakening TypeScript or disabling useful template checks.

If `nuxt prepare` or `nuxt typecheck` fails because required typecheck packages are absent and they are in the allowlist, install them.

Do not weaken TypeScript or Vue template checks just to make errors disappear.

### ESLint setup

Verify:

- Nuxt ESLint is installed/configured if repo docs expect it.
- `eslint.config.*` exists or is generated/configured according to current Nuxt ESLint docs.
- `pnpm lint` runs.
- Linting does not require unavailable formatter dependencies unless already configured.

Safe repairs allowed:

- Add the smallest Nuxt ESLint config required for `pnpm lint` to run.
- Do not add Prettier or extra style tooling unless the repo already uses it.

### Test setup

Verify:

- Vitest is installed.
- `test` and `test:run` scripts exist.
- a minimal test can run.
- Nuxt Test Utils is installed/configured if Nuxt runtime tests are expected.
- test environment packages such as `happy-dom` are installed only if required by the chosen test setup.

If no tests exist, create a minimal test for the sample feature in Phase 5.

If Vitest config is missing but tests can run with defaults, do not add unnecessary config.

If Vitest config is needed for the repo's Nuxt test pattern, add the smallest correct config according to Context7 and local project style.

### Content and kitchen sink

Verify:

- `content/` exists if Nuxt Content is part of the starter.
- content collections/config exist if the repo docs claim typed content collections.
- a kitchen-sink route or equivalent demo area exists or can be created cleanly.
- the new sample route appears in an existing kitchen-sink navigation/index if one exists.

If `content/` is missing, create a minimal content folder only if Nuxt Content is installed/configured and the docs expect it.

If no kitchen-sink area exists, create the smallest clean route for the sample feature.

### README and docs consistency

Inspect top-level `README.md` and relevant docs.

Report or repair obvious contradictions:

- docs say `npm`/`yarn` when the project standard is pnpm
- docs list scripts that do not exist
- docs mention tools/modules not installed or configured
- docs say Context7/Superpowers expectations that contradict `AGENTS.md`

Safe repairs allowed:

- Update command examples to use canonical pnpm scripts.
- Add a short note pointing to `AGENTS.md`/`.agent/` if docs are missing an agent workflow reference.

Do not rewrite the README into a full marketing document.

### Prohibited dependencies and scaffolding

Check `package.json`, Nuxt config, server routes, docs, and obvious folders for prohibited starter scaffolding:

- auth providers
- database clients
- ORMs
- payment/billing providers
- analytics packages
- SaaS boilerplate

Report findings. Do not delete automatically.

---

## Phase 3: Use Context7 before implementation

Before writing the sample feature or changing package/framework config, use Context7 to check the current docs/patterns for the parts you will touch.

At minimum, attempt Context7 lookups for:

- Nuxt app/page/component conventions relevant to this repo
- Nuxt config/modules and `compatibilityDate`/module setup if you edit Nuxt config
- Nuxt UI installation/CSS/theme/icon usage
- Nuxt Content collections/content file/query/rendering pattern if you edit content setup
- Pinia usage with Nuxt
- VueUse composable you plan to use
- Vitest testing pattern, and Nuxt Test Utils if you use it
- Nuxt ESLint setup if you edit lint config
- Nuxt typecheck/`vue-tsc` setup if you edit typecheck setup

Keep this concise. Do not paste long docs into the repo or final report. In the final report, list the docs/topics consulted.

If Context7 is unavailable, continue only with local installed types and project examples, and explicitly report that Context7 verification could not be performed.

---

## Phase 4: Create a small representative kitchen-sink feature

Create a tiny, reversible feature that proves the starter works across the stack.

Suggested feature name:

`Agent Verification`

Implement the smallest coherent version of this feature using local repo conventions.

Preferred files, adjusted to fit existing repo structure:

- `app/components/kitchen-sink/AgentVerificationCard.vue`
- `app/pages/kitchen-sink/agent-verification.vue`
- `app/stores/agentVerification.ts`
- `content/docs/agent-verification.md` or nearest project-equivalent content file if Nuxt Content is configured
- optionally update an existing kitchen-sink index/list page to link to the new page
- add tests in the repo's existing test structure

The feature should demonstrate:

- a Vue SFC using `<script setup lang="ts">`
- Nuxt UI components such as `UCard`, `UButton`, `UBadge`, `UIcon`, or nearby equivalents already used by the repo
- Lucide icons using the repo's icon convention, for example `i-lucide-bot`, `i-lucide-check-circle`, `i-lucide-terminal`, or similar
- a small Pinia store that exposes an array of verification items and at least one derived value
- a small VueUse composable usage, preferably something low-risk like `useToggle`
- a minimal Nuxt Content sample if content is configured
- accessible UI:
  - semantic structure
  - button text that makes sense
  - keyboard-accessible controls
  - visible focus state through existing styling conventions
  - no color-only meaning
- light/dark mode-safe styling
- no new dependency beyond the allowlist repairs from Phase 2
- no auth/db/payment/SaaS code

The page should be visually simple. It does not need to be fancy. It should make it obvious that the starter can support a Nuxt UI component, Pinia state, VueUse behavior, icons, Nuxt Content, and tests.

Suggested UI behavior:

- Display a card titled `Agentic setup verification`.
- Show badges/check rows for:
  - Codex guidance
  - Context7 docs policy
  - Superpowers workflow
  - Nuxt UI
  - Nuxt Content
  - Pinia
  - VueUse
  - Testing
- Show a derived summary such as `8 of 8 checks represented`.
- Include a `Show details` / `Hide details` button powered by `useToggle`.
- The details section can explain that this is a local smoke feature for the starter.
- If content is configured, include a link to or rendering of the `agent-verification` content sample using the local content convention.

Do not overbuild this. The goal is to exercise the stack, not create a permanent product feature.

---

## Phase 5: Add the smallest useful tests

Add tests that prove the sample feature and/or its supporting store works.

Preferred order:

1. Unit test the Pinia store or derived value with Vitest.
2. If the repo has an established Nuxt Test Utils component/page test pattern, add a small Nuxt-aware test.
3. If Playwright is already configured and easy to run, add a smoke test that visits `/kitchen-sink/agent-verification` and checks visible text.

Do not create brittle snapshot tests.

Do not spend excessive effort forcing Playwright if the repo does not already have browser/E2E infrastructure working.

If test scripts were missing at the start of the task, confirm they now exist and run.

---

## Phase 6: Run verification commands

Run the narrowest useful commands first, then broader verification.

Expected flow:

1. `pnpm install --frozen-lockfile` only if dependencies are not installed and the repo uses a lockfile.
2. If Phase 2 added allowed dependencies, run `pnpm install` as needed and keep the lockfile update.
3. Run `pnpm prepare` or `pnpm exec nuxt prepare` after module/config changes if needed for generated types.
4. Run a targeted test for the new store/component if possible.
5. Run `pnpm lint`.
6. Run `pnpm typecheck`.
7. Run `pnpm test:run`.
8. Run `pnpm verify`.
9. Run `pnpm build` if the previous checks pass and build time is reasonable.
10. Run `pnpm test:e2e` only if Playwright is configured and the project expects it.

If a command is missing, that is a repairable setup gap. Add the expected script from Phase 2 and rerun.

If a command fails:

- inspect the failure
- make the smallest fix consistent with project conventions
- rerun the relevant command
- do not hide the failure
- if the failure is unrelated to your changes, report it clearly with evidence

If a command cannot run because of environment limitations, report the limitation clearly.

---

## Phase 7: Review your own diff

Before finishing, review the diff using `.agent/code-review.md`.

Check specifically:

- correctness
- Nuxt/Vue conventions
- use of Nuxt UI instead of unnecessary custom UI
- Nuxt UI CSS/theme setup is present if required
- Nuxt Content is installed, configured, and minimally exercised
- pages route correctly and `app.vue`/layouts do not prevent rendering
- Pinia used only for durable/app state demonstration
- VueUse usage is justified and safe
- accessibility
- dark mode safety
- test coverage
- generated Nuxt types/typecheck setup
- ESLint setup
- package manager and lockfile hygiene
- README/docs consistency
- dependency hygiene
- no accidental auth/db/payment/SaaS additions
- no unrelated rewrites
- missing scripts/modules from the original repo were surfaced and repaired where safe

Run `git diff --stat` and inspect the changed files.

Do not commit.

---

## Final response format

Return a concise but complete report with these sections:

### Summary

What you verified, what you repaired, and what sample feature you added.

### Superpowers status

Whether Superpowers was available/used. If unavailable, say so.

### Context7 status

Whether Context7 was available/used. List the docs/topics consulted. If unavailable, say so.

### Agentic setup audit

Pass/fail/warning bullets for `AGENTS.md`, `.agent/`, optional `.codex/`, cross-agent files, and contradictions found.

### Baseline repairs made

List any missing scripts, missing dependencies, missing Nuxt modules, Nuxt UI CSS setup, missing test setup, missing generated type setup, missing content/kitchen-sink structure, `.gitignore` hygiene, docs inconsistencies, or config gaps that you fixed.

If you did not fix a gap, explain why.

### Nuxt stack audit

Pass/fail/warning bullets for package scripts, package manager, modules, Nuxt UI styling/theme, Nuxt Content, tests, icons, content, kitchen sink, routing, TypeScript/editor expectations, and prohibited dependencies.

### Sample feature added

List files changed and what each does.

### Tests and verification

List every command run and whether it passed or failed.

### Issues found

Anything broken, missing, contradictory, risky, or intentionally left as a follow-up.

### Recommended next steps

Only include high-value next steps. Do not invent a large roadmap.

### Diff summary

Include `git diff --stat` output or a short equivalent summary.

Remember: the goal is to prove that this repo is ready for Codex-driven Nuxt/Vue work in my style, not to make the starter bigger than necessary.
