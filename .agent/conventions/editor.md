# Editor conventions

This repo should work well in Neovim and tmux.

Use this file before changing TypeScript, Vue language tooling, linting, formatting, or editor-facing configuration.

## Expected Neovim tooling

Recommended language/tooling stack:

- Vue language server
- Vue TypeScript plugin
- TypeScript language server or `vtsls`
- ESLint language server
- Tailwind CSS language server
- JSON language server
- YAML language server

The project should support strict Vue/TypeScript checking.

Do not solve editor issues by weakening TypeScript or Vue template checks unless explicitly requested.

Prefer fixing:

- types
- props
- emits
- imports
- component contracts
- auto-import configuration
- module declarations

## Typechecking

The canonical typecheck command is:

```sh
pnpm typecheck
```

If typecheck fails, prefer fixing the underlying issue over hiding it with `any`, broad casts, or disabled checks.

Use `any` only when there is a clear boundary and a better type is not practical.

When using `any`, explain why.

## Formatting and linting

The canonical lint command is:

```sh
pnpm lint
```

The canonical autofix command is:

```sh
pnpm lint:fix
```

Do not introduce a second formatter or linter unless explicitly requested.

## tmux workflow

A useful local tmux layout:

- editor window: `nvim`
- dev server window: `pnpm dev`
- tests window: `pnpm test`
- agent window: `codex`
- git window: `lazygit` or regular git commands

Do not require this layout. It is the intended ergonomic default.

## Context7

Use Context7 before changing Vue language tools, Nuxt typecheck behavior, ESLint module setup, or TypeScript/Vue compiler options.
