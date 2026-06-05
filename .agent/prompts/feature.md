# Feature prompt

Use this prompt when asking Codex to implement a feature in `unr-stack`.

```txt
Implement this feature:

[describe feature]

Use the repo guidance in AGENTS.md.

Use Superpowers for planning, command execution, and review if available.

Before coding:
1. Inspect existing patterns.
2. Use Context7 for any Nuxt/Vue/package behavior you need to rely on.
3. Identify the files you expect to change.
4. If the change touches more than three files, briefly tell me the plan first.

During implementation:
- Use Nuxt/Vue conventions from AGENTS.md.
- Prefer Nuxt UI.
- Preserve accessibility and dark mode.
- Use Pinia only for durable app/client state.
- Use VueUse when it improves clarity.
- Do not add auth, database, payment, analytics, or SaaS infrastructure.
- Do not add dependencies unless necessary and justified.

Before finishing:
- Run the narrowest relevant check first.
- Run pnpm verify for meaningful changes unless I say not to.
- Review your diff using .agent/code-review.md.
- Summarize changes, checks run, checks not run, and risks.
```
