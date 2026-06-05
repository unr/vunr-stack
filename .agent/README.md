# Agent docs

This directory contains repo-specific guidance for Codex working inside `unr-stack`.

`AGENTS.md` is the source of truth. These files provide deeper guidance when a task touches a specific area.

## Operating model

- Codex is the only supported agent harness.
- Superpowers owns workflow, planning discipline, command-running discipline, and multi-step execution.
- Context7 owns external framework/package documentation lookup.
- This directory owns project-specific Nuxt/Vue conventions and taste.

Do not add extra agent systems unless explicitly requested.

## What to read when

- Vue/Nuxt implementation: `conventions/vue-nuxt.md`
- UI, styling, theme, icons, kitchen sink: `conventions/styling.md`
- Nuxt Content docs/blog/projects: `conventions/content.md`
- Tests and verification: `conventions/testing.md`
- Interactive UI: `conventions/accessibility.md`
- Neovim/editor assumptions: `conventions/editor.md`
- External package docs: `context7.md`
- Reviewing work: `code-review.md`

## Prompt templates

The `prompts/` directory contains reusable prompts for the user to paste or adapt:

- `feature.md`
- `component.md`
- `design-system.md`
- `review.md`
- `interview.md`

These prompts are not hard rules. They are starting points for steering Codex in the desired style.

## Verification contract

The canonical project-level verification command is:

```sh
pnpm verify
```

For larger or release-like changes, use:

```sh
pnpm verify:full
```

When Superpowers is active, use its command-running workflow while still respecting the project scripts.
