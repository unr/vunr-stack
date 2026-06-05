# unr-stack

`unr-stack` is a Codex-first Nuxt/Vue starter for personal sites, hobby projects,
interview coding sessions, and small polished web apps.

It is intentionally compact: Nuxt conventions, typed Vue, accessible Nuxt UI
components, Nuxt Content, Pinia, VueUse, Vitest, and clear agent guidance. It is
not a SaaS boilerplate and does not include auth, payments, analytics, database
models, or billing infrastructure by default.

## What You Get

- **Nuxt 4 and Vue 3** with TypeScript and `<script setup>` conventions.
- **Nuxt UI and Tailwind CSS** wired through a minimal global CSS entry.
- **Nuxt Content** configured with a typed `docs` collection.
- **Nuxt Scripts** available for script loading when a project actually needs it.
- **Pinia** for durable app state, represented by a small verification store.
- **VueUse** for useful browser and composition utilities.
- **Lucide icons** through Nuxt Icon/Iconify via `UIcon`.
- **Vitest** with separate unit and Nuxt-aware test projects.
- **ESLint, typecheck, and verification scripts** ready for local use.
- **Codex-oriented project guidance** through `AGENTS.md`, `.agent/`, Superpowers,
  and Context7 documentation policy.

## Included Starter Screens

- `/` - minimal home page that links into the starter examples.
- `/kitchen-sink` - entry point for reusable examples and smoke pages.
- `/kitchen-sink/agent-verification` - a focused smoke page that touches Nuxt UI,
  Pinia, VueUse, Lucide icons, Nuxt Content, and the starter test contract.

## Tech Stack

| Area | Tooling |
| --- | --- |
| App framework | Nuxt 4, Vue 3, Vue Router |
| Language | TypeScript |
| Package manager | pnpm |
| UI | Nuxt UI, Tailwind CSS |
| Content | Nuxt Content, MDC |
| Script loading | Nuxt Scripts |
| State | Pinia |
| Composables | VueUse |
| Icons | Nuxt Icon/Iconify with Lucide icon data |
| Testing | Vitest, Nuxt Test Utils, Vue Test Utils, happy-dom |
| Quality | Nuxt ESLint, `nuxt typecheck` |
| Agent workflow | Codex, Superpowers, Context7, repo-local conventions |

## Requirements

- Node.js compatible with the installed Nuxt 4 toolchain.
- pnpm `10.13.1` or newer through Corepack.
- Optional: Codex with Superpowers and Context7 MCP for the intended agent workflow.

If Corepack is not enabled yet:

```bash
corepack enable
```

## Basic Setup

Install dependencies:

```bash
pnpm install
```

Prepare Nuxt generated types and local tooling:

```bash
pnpm prepare
```

Start the dev server:

```bash
pnpm dev
```

Nuxt will print the local URL, usually:

```txt
http://localhost:3000
```

Run the default verification contract:

```bash
pnpm verify
```

Build for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Nuxt development server. |
| `pnpm build` | Build the production app. |
| `pnpm generate` | Generate a static version of the app. |
| `pnpm preview` | Preview the production build. |
| `pnpm lint` | Run ESLint. |
| `pnpm lint:fix` | Run ESLint with automatic fixes. |
| `pnpm typecheck` | Run Nuxt type checking. |
| `pnpm test` | Run Vitest in watch mode. |
| `pnpm test:run` | Run all Vitest projects once. |
| `pnpm test:unit` | Run only unit tests. |
| `pnpm test:nuxt` | Run only Nuxt-aware tests. |
| `pnpm verify` | Run lint, typecheck, and tests. |
| `pnpm verify:full` | Run `pnpm verify` and then production build. |

## Project Structure

```txt
app/
  app.vue                         # Nuxt app shell with UApp and route announcer
  assets/css/main.css             # Tailwind, Nuxt UI, and small global styles
  components/kitchen-sink/        # Starter smoke components
  pages/                          # File-based Nuxt routes
  stores/                         # Pinia stores
content/
  docs/                           # Nuxt Content source documents
docs/                             # Human-facing project documentation
test/
  unit/                           # Node-environment Vitest tests
  nuxt/                           # Nuxt Test Utils tests
.agent/                           # Codex conventions, prompts, and review checklists
AGENTS.md                         # Repo-specific agent instructions
content.config.ts                 # Nuxt Content collections
nuxt.config.ts                    # Nuxt modules and app configuration
vitest.config.ts                  # Unit and Nuxt Vitest projects
```

The Nuxt config also enables Nuxt DevTools in development and uses the
`2025-07-15` Nuxt compatibility date.

## Agent-Oriented Workflow

This repo is optimized for Codex but remains a normal Nuxt project.

- `AGENTS.md` defines the project rules, stack, boundaries, and verification contract.
- `.agent/conventions/` contains detailed guidance for Vue/Nuxt, styling, content,
  testing, accessibility, and editor behavior.
- `.agent/prompts/` contains task prompts for features, components, reviews, design
  system work, and interview-style sessions.
- Context7 should be used for current external library documentation before changing
  framework, package, or tool behavior.
- Superpowers should be used for planning, TDD, debugging, review discipline, and
  meaningful multi-step work when available.

See:

- [`docs/agent-workflow.md`](docs/agent-workflow.md)
- [`docs/codex-setup.md`](docs/codex-setup.md)
- [`docs/stack.md`](docs/stack.md)

## Kickstart A New Project From This Repo

Use this starter when you want a clean Nuxt/Vue baseline with enough structure to
move quickly, but not enough scaffolding to fight your app.

1. Create a new repository from this template or clone it directly:

   ```bash
   git clone <repo-url> my-project
   cd my-project
   ```

2. Rename the package in `package.json` and update the README title/description.

3. Install dependencies and verify the baseline:

   ```bash
   pnpm install
   pnpm verify
   ```

4. Replace the starter home page in `app/pages/index.vue` with your first real
   screen.

5. Keep `/kitchen-sink` while building the first version. Use it as a design and
   integration lab for shared components, content rendering, empty states, icons,
   and dark mode behavior.

6. Add project-specific content collections in `content.config.ts` when Markdown
   or MDC-backed content becomes part of the product.

7. Add Pinia stores only for durable client/app state. Prefer Nuxt data fetching
   patterns for server-backed data.

8. Run `pnpm verify` before committing meaningful changes. Run `pnpm verify:full`
   before shipping or changing build-sensitive configuration.

## Starter Boundaries

This repository intentionally avoids default infrastructure for:

- authentication
- databases and ORMs
- payments and billing
- analytics
- SaaS dashboards
- account, tenant, or team management

Add those only when the project needs them. Before adding a production dependency,
check whether Nuxt, Vue, Nuxt UI, Nuxt Content, Pinia, or VueUse already solve the
problem clearly.

`better-sqlite3` is installed for the current Nuxt Content/tooling baseline. This
starter still does not define an application database layer, schema, ORM, or data
access pattern.

## Testing Strategy

- Test pure utilities, schemas, and stores with Vitest unit tests.
- Test Nuxt-aware behavior with `@nuxt/test-utils`.
- Add Playwright only for critical browser flows where unit or Nuxt component tests
  do not provide enough confidence.
- Prefer user-observable behavior over implementation details.

## Deployment

Use the deployment target that fits the project:

- `pnpm build` for a server-rendered Nuxt deployment.
- `pnpm generate` when a static output is appropriate.
- `pnpm preview` to inspect the built app locally.

Review Nuxt deployment guidance for the hosting adapter or platform you choose.

## License

No license file is currently included. Add one before publishing this project as an
open source template or redistributing derived work.
