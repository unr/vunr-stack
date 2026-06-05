# Review prompt

Use this prompt when asking Codex to review local changes.

```txt
Review the current diff.

Use the repo guidance in AGENTS.md and the checklist in .agent/code-review.md.

Use Superpowers review workflow if available.
Use Context7 only if framework/package behavior is unclear or appears API-dependent.

Group findings by severity:

- Blocker
- Should fix
- Consider

For each finding, include:
- file path
- issue
- why it matters
- suggested fix

Focus on:
- correctness
- Nuxt/Vue conventions
- UI quality
- accessibility
- testing
- dependency hygiene
- accidental auth/db/payment/SaaS additions

Do not rewrite code unless I ask.
```
