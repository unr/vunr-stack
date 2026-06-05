# Agent workflow

This repo is designed to be driven by the user with Codex.

The expected division of responsibility is:

- Superpowers tells Codex how to work.
- `unr-stack` tells Codex what good Nuxt/Vue work means.
- Context7 tells Codex what current external docs say.
- package scripts tell Codex how to verify changes.

## Starting a task

For small tasks:

1. inspect relevant files
2. use Context7 if package behavior is involved
3. make the smallest correct change
4. run the narrowest relevant check
5. summarize clearly

For larger tasks:

1. use Superpowers planning workflow
2. inspect existing repo patterns
3. use Context7 for external docs
4. describe the plan before broad changes
5. implement in small steps
6. run checks incrementally
7. review the diff before final response

## Documentation lookup

Use Context7 before relying on external package behavior.

Examples:

```txt
Nuxt 4 routeRules prerender behavior
Nuxt UI component theming variants
Nuxt Content collections schema
Pinia Nuxt TypeScript setup
VueUse composable usage in Nuxt
Vitest Nuxt Test Utils component test setup
```

Do not paste large external docs into the repo.

## Command execution

Use Superpowers command-running discipline when available.

Prefer project scripts:

```sh
pnpm lint
pnpm typecheck
pnpm test:run
pnpm verify
```

Do not run package-manager commands from another ecosystem unless explicitly requested.

Do not add dependencies casually.

## Dependency policy

Before adding a dependency:

1. check whether Nuxt, Vue, Nuxt UI, VueUse, or existing utilities already solve the problem
2. explain why the dependency is needed
3. prefer small, well-maintained packages
4. avoid adding auth/database/payment/SaaS infrastructure to the starter

## Review loop

Before finishing meaningful work:

1. inspect the diff
2. use `.agent/code-review.md`
3. run relevant checks
4. report failures honestly

Final response should include:

- what changed
- checks run
- checks not run
- risks or follow-ups

## Interview mode

During a pair-programming interview:

- keep steps small
- narrate intent briefly
- avoid unnecessary abstractions
- avoid dependencies
- prefer readable code
- verify quickly
- do not introduce auth/db/payment infrastructure

Use `.agent/prompts/interview.md` when starting an interview-style session.

## Neovim/tmux flow

A comfortable local layout:

```txt
window 1: nvim
window 2: pnpm dev
window 3: pnpm test
window 4: codex
window 5: git/lazygit
```

This layout is optional, but the repo should remain friendly to this workflow.
