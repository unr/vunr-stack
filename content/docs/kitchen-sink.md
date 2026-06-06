---
title: Kitchen sink content sample
description: A short Markdown document rendered inside the Nuxt UI kitchen sink.
---

## Why this exists

This fixture proves that the starter can query the typed `docs` collection and render Markdown
inside the kitchen sink without becoming a full documentation site.

It includes ordinary prose, a short list, inline `code`, a blockquote, and a fenced code sample.

## Checks

- Content is loaded through `queryCollection`.
- Rendering uses `ContentRenderer`.
- Prose styles inherit the warm neutral theme.

> Content examples should stay small enough to review quickly.

```ts
const route = '/kitchen-sink/content'
```
