# Nuxt Content conventions

Use Nuxt Content for docs, blog posts, project pages, changelogs, and structured content.

Use this file before changing content collections, Markdown/MDC behavior, or content-rendering components.

## Collections

Prefer explicit collections for:

- blog
- projects
- docs
- changelog
- uses

Keep schemas small and useful.

Do not use Nuxt Content as a fake database for highly dynamic app state.

## Frontmatter

Frontmatter should be predictable and typed through collections.

Prefer fields like:

```yaml
title: My Post
description: A short useful description
date: 2026-06-05
tags:
  - nuxt
  - vue
draft: false
```

Avoid unstructured one-off fields unless they are intentionally part of the collection schema.

## Markdown and MDC

Use Markdown for ordinary prose.

Use MDC components when content needs custom Vue presentation.

Example:

```md
::content-callout{type="note"}
This is rendered through a Vue component.
::
```

Do not use MDC when plain Markdown is clearer.

## Content components

Content-facing components should be stable and documented.

Prefer names like:

- `ContentHero`
- `ContentCallout`
- `ContentProjectCard`
- `ContentStackList`

Avoid changing component props used in existing Markdown without updating content files.

## Querying content

Do not hardcode content lists when they can be queried from collections.

Keep content queries close to the page or composable that owns them.

Extract a composable only when the same query pattern is reused.

## Drafts

Draft handling should be explicit.

Do not accidentally expose drafts in production routes.

If adding draft support, document the expected local and production behavior.

## SEO

Content pages should have useful title and description metadata.

Use collection fields for SEO when possible.

Avoid duplicate page descriptions across many content pages.

## Context7

Use Context7 before changing Nuxt Content collection definitions, content queries, MDC behavior, rendering APIs, or deployment behavior.
