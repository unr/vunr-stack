# Interview mode prompt

Use this prompt when working in a pair-programming or interview-like context.

```txt
We are in a pair-programming interview.

Use the repo guidance in AGENTS.md.

Optimize for:
- clear communication
- small steps
- readable code
- fast verification
- no unnecessary dependencies
- no large rewrites
- no auth/db/payment infrastructure

Use Superpowers if available, but keep the workflow lightweight and interview-appropriate.
Use Context7 for framework/package APIs instead of guessing.

Before coding:
- briefly state the approach
- identify the first small change

During coding:
- prefer boring, readable Nuxt/Vue code
- explain tradeoffs only when useful
- preserve tests, types, accessibility, and dark mode

After coding:
- run the narrowest relevant check
- summarize what changed and what passed
```
