# Quickstart: データセット詳細説明セクション追加

## Prerequisites

- Node.js (repo の `.nvmrc` / `package.json` に準拠)
- pnpm

## Install

```bash
pnpm install
```

## Develop

```bash
pnpm dev
```

## Quality Checks

```bash
pnpm check
pnpm typecheck
```

## Tests

```bash
pnpm test
pnpm test:e2e
```

## Verification

- 2026-03-15: `pnpm check` passed.
- 2026-03-15: `pnpm typecheck` failed due to existing issues in `src/components/dataset/DatasetOverview.astro` and `src/components/hero/Hero.astro` (ImageMetadata typing).
