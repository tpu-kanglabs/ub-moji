# Research: Fixed Header, Footer Logo, and i18n

## Decision 1: URL-based locales for language persistence

- **Decision**: Use locale in the URL path (e.g., `/en/`, `/ja/`) with English as default.
- **Rationale**: Matches the clarified requirement, keeps links shareable, and ensures language is explicit per route.
- **Alternatives considered**: Cookie/local storage persistence (less shareable), browser-language detection only (no explicit persistence).

## Decision 2: React islands for dynamic elements

- **Decision**: Implement the language switcher as a React island and keep header as a single React component.
- **Rationale**: Aligns with project requirement to use React for dynamic elements and keeps header logic centralized.
- **Alternatives considered**: Astro-only header (insufficient for dynamic switcher behavior).

## Decision 3: shadcn/ui components for header controls

- **Decision**: Use shadcn/ui components (e.g., Button, Dropdown/Select primitives) for the language switcher and navigation controls.
- **Rationale**: Required by constitution for UI consistency and accessibility; leverages existing design tokens.
- **Alternatives considered**: Custom Tailwind-only controls (violates shadcn requirement).

## Decision 4: Translation fallback behavior

- **Decision**: Missing translation strings fall back to English.
- **Rationale**: Prevents broken UI and preserves readability.
- **Alternatives considered**: Showing keys/placeholders or hiding text (confusing or incomplete UI).
