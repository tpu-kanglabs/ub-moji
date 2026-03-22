# Quickstart: Fixed Header, Footer Logo, and i18n

## Local Development

1. Install dependencies: `pnpm install`
2. Start dev server: `pnpm dev`
3. Open the site and verify the items below.
4. Header is fixed and includes logo, navigation, and language switcher.
5. Footer displays the logo.
6. Locale in URL path switches between `/en/` and `/ja/`.
7. Missing translations fall back to English.

## Test Checklist (Pre-merge)

- Biome checks pass: `pnpm check`.
- Type checking passes: `pnpm typecheck`.
- Component tests cover header language switcher interactions.
- E2E smoke tests cover each user story's happy path.
