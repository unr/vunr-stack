# Design-system prompt

Use this prompt when asking Codex to change theme tokens, typography, fonts, colors, radius, spacing, icons, primitives, or kitchen-sink pages.

```txt
Make this design-system change:

[describe change]

Use the repo guidance in AGENTS.md.

Use Superpowers if available.
Use Context7 for Nuxt UI, Nuxt color mode, Tailwind, Nuxt Fonts, Nuxt Icon, or related package behavior.

Requirements:
- Prefer Nuxt UI theme/config/tokens over one-off CSS.
- Preserve light and dark mode.
- Preserve keyboard focus states.
- Use Lucide icons through UIcon or AppIcon.
- Keep custom CSS minimal and centralized.
- Update /kitchen-sink so the change is visible.
- Avoid adding animation or UI libraries unless I explicitly ask.

Before coding:
1. Inspect current theme/config/CSS and kitchen-sink examples.
2. Identify the smallest set of files to change.
3. Tell me the plan if the change is broad.

Before finishing:
- Run pnpm lint and pnpm typecheck.
- Run tests if behavior changed.
- Summarize visual changes, files changed, checks run, and risks.
```
