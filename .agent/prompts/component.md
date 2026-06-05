# Component prompt

Use this prompt when asking Codex to create or update a Vue/Nuxt component.

```txt
Create or update this component:

[describe component]

Use the repo guidance in AGENTS.md.

Use Superpowers if available.
Use Context7 for Nuxt UI, Vue, or package-specific behavior before relying on APIs.

Requirements:
- Use <script setup lang="ts">.
- Prefer Nuxt UI components.
- Use typed props and emits.
- Use Lucide icons through UIcon or AppIcon.
- Preserve dark mode.
- Ensure keyboard/focus/accessibility behavior.
- Add or update a kitchen-sink example if this is a reusable visual component.
- Add tests if behavior is non-trivial.
- Avoid new dependencies.

Before finishing:
- Run relevant checks.
- Review the diff against .agent/code-review.md.
- Summarize files changed, behavior added, checks run, and risks.
```
