# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ub-moji** は日本語指文字データセット（ub-MOJI）の静的ウェブサイト。Astro + React islands アーキテクチャで構築され、英語/日本語の多言語対応を持つ。

## Commands

```bash
pnpm dev          # 開発サーバー起動 (http://localhost:4321/ub-moji)
pnpm build        # 本番ビルド
pnpm check        # Biome による lint + フォーマットチェック（コミット前必須）
pnpm typecheck    # astro check による型チェック
pnpm test         # Vitest ユニットテスト
pnpm test:watch   # ユニットテスト（watch モード）
pnpm test:e2e     # Playwright E2E テスト
```

単一テストの実行:
```bash
# ユニットテスト: vitest に --reporter verbose とファイル名パターンを指定
pnpm exec vitest run tests/components/header.test.tsx
# E2E テスト: playwright に特定ファイルを指定
pnpm exec playwright test tests/e2e/hero-section.test.ts
```

## Architecture

### Astro + React Islands

- `.astro` ファイル: サーバーサイドレンダリング（静的HTML）
- `.tsx` ファイル: インタラクティブな部分のみ React island として使用（Header, dataset テーブルなど）
- すべてのページは SSG でビルド時に静的生成

### i18n（国際化）

外部ライブラリなし、カスタム実装:
- `src/lib/i18n.ts`: `t(locale, key)` ヘルパー関数
- `src/lib/locales/{en,ja}.json`: 翻訳文字列
- ルーティング: `/` が英語（デフォルト）、`/ja/` が日本語
- ページは `src/pages/[lang]/` 以下に配置

### コンテンツ管理

Astro Content Collections (`astro:content`) で型安全に管理:
- `src/contents/citations.yaml`: 引用情報（YAML）
- `src/contents/news/{en,ja}/*.md`: ニュース記事（Markdown）
- スキーマ定義: `src/content.config.ts`

### スタイリング

- TailwindCSS v4（`@tailwindcss/vite` プラグイン経由）
- shadcn/ui コンポーネント（`src/components/ui/`）、スタイル: `radix-nova`
- `cn()` ユーティリティ（`src/lib/utils.ts`）: clsx + tailwind-merge
- CSS変数: `src/styles/global.css`

### パスエイリアス

`@/` は `./src/` にマッピング（例: `@/lib/i18n`、`@/components/Header`）

## テスト構成

- ユニットテスト: `tests/components/**/*.test.{ts,tsx}` → Vitest + React Testing Library
- E2E テスト: `tests/e2e/**/*.spec.ts` → Playwright（ポート4323でdevサーバーを起動）

## デプロイ

GitHub Pages: `https://tpu-kanglabs.github.io/ub-moji`

`astro.config.mjs` の `base: "/ub-moji"` に注意。ローカル開発時のURLも `http://localhost:4321/ub-moji/` になる。

## コード品質

- Biome でフォーマット（インデント: 2スペース、クォート: ダブル）+ lint
- TypeScript strict モード
- コミット前に `pnpm check` と `pnpm build` が通ることを確認すること
