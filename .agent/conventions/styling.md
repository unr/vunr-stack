# Styling conventions

This starter uses Nuxt UI as the primary UI system.

Use this file before design-system, theme, component, or kitchen-sink changes.

## Defaults

- Prefer Nuxt UI components.
- Prefer Tailwind utilities and Nuxt UI theme tokens.
- Prefer design tokens over one-off hardcoded values.
- Preserve light and dark mode.
- Keep transitions subtle.
- Use Lucide icons through `UIcon` or `AppIcon`.
- Avoid extra dependencies.
- When building bespoke components, rely on nuxt UI elements as much as possible to compose it.

## Component customization

Before wrapping a Nuxt UI component, ask:

1. Is this a true design-language primitive?
2. Will this wrapper reduce repetition?
3. Can the same result be achieved with Nuxt UI props, classes, variants, or theme config?

Good wrappers:

- `AppIcon`
- `AppContainer`
- `AppSection`
- `AppPageHeader`
- `AppProse`

Avoid wrappers for every basic UI component.

## CSS

Use component-local classes and Tailwind utilities first.

Use custom CSS when:

- defining global typography
- defining design tokens
- styling rich prose
- solving repeated layout primitives
- adjusting Nuxt Content rendered markup

Avoid large scoped CSS blocks inside components.

## Theme changes

Design-system changes should be visible in `/kitchen-sink`.

When changing colors, spacing, radius, typography, shadows, or focus styles:

1. update the relevant token/config/CSS layer
2. update or add a kitchen-sink example
3. check light mode
4. check dark mode
5. verify keyboard focus states still work

## Icons

Use Lucide icon names with the `i-lucide-*` convention.

Examples:

- `i-lucide-terminal`
- `i-lucide-code-2`
- `i-lucide-gamepad-2`
- `i-lucide-sparkles`

Prefer `AppIcon` when a local wrapper exists.

Use `UIcon` directly when that is clearer or when working inside a Nuxt UI component slot.

## Motion

Keep motion subtle.

Avoid large animation libraries unless explicitly requested.

Respect reduced-motion expectations for prominent or repeated animations.

## Dark mode

Dark mode is a first-class requirement.

Do not implement styles that only work in light mode.

Avoid hardcoded white/black backgrounds unless they intentionally map to a token or design decision.

## Kitchen sink

Reusable visual primitives should have a kitchen-sink example.

Kitchen-sink examples should show:

- default state
- hover/focus/active states where practical
- loading state when relevant
- empty state when relevant
- error state when relevant
- light/dark compatibility
- responsive behavior when relevant

## Context7

Use Context7 before changing Nuxt UI theming, component APIs, icons, fonts, forms, or color-mode behavior.
