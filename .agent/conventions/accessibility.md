# Accessibility conventions

Accessibility is a default requirement, not a polish pass.

Use this file before changing interactive UI, forms, navigation, overlays, or keyboard behavior.

## Baseline expectations

Interactive UI must have:

- semantic elements where possible
- keyboard access
- visible focus states
- useful labels or accessible names
- no color-only meaning
- reasonable empty, loading, and error states

## Semantic HTML

Prefer native elements first:

- `button` for actions
- `a` or `NuxtLink` for navigation
- `form` for forms
- `label` for form labels
- headings in logical order
- lists for repeated list content

Do not use clickable `div` or `span` elements when a semantic element fits.

## Keyboard access

Keyboard users should be able to:

- reach interactive controls
- activate controls
- dismiss dialogs/menus where expected
- see where focus is
- navigate forms in a logical order

Do not remove focus outlines unless you replace them with an accessible visible focus style.

## Labels and names

Form controls need visible labels or accessible names.

Icon-only buttons need accessible labels.

Examples:

```vue
<UButton icon="i-lucide-search" aria-label="Search" />
```

Avoid vague labels like:

```txt
Click here
Open
More
```

Unless surrounding context makes the purpose clear.

## Color and contrast

Do not use color as the only way to communicate state.

Pair color with text, icons, or shape.

Check both light and dark mode.

## Motion

Avoid unnecessary motion.

For prominent or repeated animation, respect reduced-motion expectations.

## Forms

Forms should show:

- labels
- helpful validation messages
- disabled/loading state while submitting when relevant
- success or error feedback
- keyboard-submittable behavior

## Overlays

Dialogs, drawers, popovers, and menus should preserve expected focus behavior.

Prefer Nuxt UI overlay primitives instead of custom overlay implementations.

## Content

Content pages should have:

- one clear page-level heading
- meaningful link text
- readable line length
- good contrast
- code blocks that do not break layout

## Context7

Use Context7 before changing Nuxt UI overlay, form, menu, dialog, or accessibility-related component APIs.
