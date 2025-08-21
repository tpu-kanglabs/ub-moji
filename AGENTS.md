# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` with Astro pages in `src/pages/` (localized pages in `src/pages/ja/`), layouts in `src/layouts/`, components in `src/components/` (React under `src/components/**.tsx`), utilities in `src/lib/`, styles in `src/styles/`, and i18n helpers in `src/i18n/`.
- Assets: place processed assets in `src/assets/`; static files (favicons, robots.txt) in `public/`.
- Aliases: import app code via `@/…` (see `tsconfig.json`).

## Architecture Overview
- Rendering: Astro static site generation; React islands power interactive pieces (e.g., `src/components/Header/MobileNav.tsx`, `DropdownLanguageSwitcher.tsx`). No SSR.
- Styling: Tailwind CSS v4 via Vite plugin (`@tailwindcss/vite`); global styles in `src/styles/global.css`.
- UI/Icons: Radix UI primitives and Lucide Icons; keep components small and composable.
- i18n: Astro i18n (`astro.config.mjs`) with `en` default and `ja` locale; avoid hardcoded strings—use helpers in `src/i18n/` and provide localized pages where applicable.
- Analytics/Perf: Partytown forwards `dataLayer.push`; see `src/lib/GoogleAnalytics.astro`. Astro uses `sharp` for image optimization at build.
- Deployment: Built to `dist/` and deployed to GitHub Pages under `/ub-moji` via GitHub Actions.

## Build, Test, and Development Commands
- Install: `pnpm install` — install dependencies.
- Develop: `pnpm dev` — start Astro dev server.
- Build: `pnpm build` — generate static site to `dist/`.
- Preview: `pnpm preview` — serve the built site locally.
- Lint/Format: `pnpm check` — run Biome (lint + format + organize imports).

## Coding Style & Naming Conventions
- Formatter/Linter: Biome enforces double quotes, organized imports, and consistent spacing. Run `pnpm check` before committing.
- Indentation: spaces (Biome default).
- Components: PascalCase filenames, e.g., `FeatureCards.astro`, `MobileNav.tsx`.
- Pages: kebab-case routes via filenames in `src/pages/` (e.g., `about.astro` → `/about`).
- Imports: prefer `@/path` for internal modules.

## Testing Guidelines
- No formal test suite is configured yet. For new logic-heavy utilities, consider adding lightweight unit tests alongside files (e.g., `utils.test.ts`) and include instructions in your PR on how to run them.

## Commit & Pull Request Guidelines
- Commits: follow Conventional Commits (e.g., `feat: add hero CTA`, `fix: correct ja route base`).
- PRs: include a clear summary, linked issues, and UI screenshots for visual changes (desktop/mobile, light/dark if applicable).
- Quality gates: ensure `pnpm check` and `pnpm build` pass locally; CI runs Biome and build on PRs.
- i18n: when adding UI text, provide English and Japanese strings (`src/i18n/`) and corresponding localized pages when needed.

## Security & Configuration Tips
- Do not commit secrets. Use environment variables when introducing integrations. 
- Respect site base and i18n: links/routes should be relative; the site deploys under `/ub-moji` and supports `en` and `ja`.
