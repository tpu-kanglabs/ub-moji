# Quickstart: News Pages

## Prerequisites

- Node.js version from `.nvmrc`
- pnpm

## Setup

```bash
pnpm install
```

## Content authoring

- Add news article Markdown files under `src/contents/news/<locale>/`.
- Use the locale directory name as the locale source of truth.
- Use the Markdown filename as the article slug.
- Provide required frontmatter for tag, title, publication date, short summary, and publish status.
- Create one file per localized article variant.

## Run locally

```bash
pnpm dev
```

## Verification

```bash
pnpm test
pnpm test:e2e
pnpm check
pnpm typecheck
```

## Manual checks

- Open the default-locale news index and confirm article cards show title, publication date, and short summary.
- Open a localized news route and confirm translated UI text appears.
- Open a route for a missing locale variant and confirm the unavailable state links to the index and default-language article.
- Check the news index and article detail pages on a mobile-sized viewport.
