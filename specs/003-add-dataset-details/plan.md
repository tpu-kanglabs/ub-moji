# Implementation Plan: データセット詳細説明セクション追加

**Branch**: `003-add-dataset-details` | **Date**: 2026-03-15 | **Spec**: /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/specs/003-add-dataset-details/spec.md
**Input**: Feature specification from `/specs/003-add-dataset-details/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

ub-MOJI データセットの構造を理解しやすくする詳細説明セクションを追加する。動画は使用せず、表と図解中心でサブセット・動画/注釈・メタデータを「サブセット→動画/注釈→メタデータ」の順に可視化し、利用条件と欠損値注記を明確化する。実装は Astro を主体にし、shadcn/ui コンポーネントを追加して使用する。

## Technical Context

**Language/Version**: TypeScript 5.9 (strict)  
**Primary Dependencies**: Astro 6.x, React 19 islands, TailwindCSS 4, shadcn/ui, Radix UI  
**Storage**: N/A (静的コンテンツ)  
**Testing**: Vitest, React Testing Library, Playwright  
**Target Platform**: Web (Astro SSG)  
**Project Type**: Web application (静的サイト)  
**Performance Goals**: Lighthouse Performance ≥ 90 (mobile), LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms  
**Constraints**: クライアント JS 最小化、Astro islands は `client:idle` / `client:visible` を優先、画像は Astro `<Image>` 使用  
**Scale/Scope**: 単一ページ内の新規セクション追加（既存導線や権限変更なし）

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Code Quality**: PASS. TypeScript strict、Biome check 前提。新規追加は単一責務のコンポーネントに分割。  
- **II. Testing Standards**: PASS (plan). 受け入れテストを先に作成し、コンポーネント/ E2E の最低限を用意。  
- **III. UX Consistency**: PASS (plan). shadcn/ui + Radix を使用し、既存セクションの見出し階層・幅に一致。  
- **IV. Performance**: PASS (plan). 静的レンダリング中心で JS 最小化、表主体の軽量構成。

**Post-Phase 1 Re-check**: PASS. データ構造と UI 契約が静的表現に収まり、性能・アクセシビリティ・一貫性の原則に抵触しないことを確認。

## Project Structure

### Documentation (this feature)

```text
specs/003-add-dataset-details/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── assets/
├── components/
│   └── ui/
├── layouts/
├── lib/
├── pages/
└── styles/

tests/
├── components/
├── e2e/
└── setup.ts
```

**Structure Decision**: 単一 Astro アプリ構成を採用。新規セクションは `src/pages` 配下の該当ページと `src/components` に追加し、shadcn/ui は `src/components/ui` に配置。

## Phase 0: Outline & Research

- 確定事項: shadcn/ui コンポーネントは追加して使用。動画は使用せず表を用いる。既存セクションと同じ見出し階層・幅。
- 調査タスク: 追加候補コンポーネント（Table / Card / Badge / Separator）を shadcn/ui から取得し、Astro + React islands の最小構成で組み合わせる。

## Phase 1: Design & Contracts

- **Data model**: セクションの内容構造（サブセット、動画/注釈、メタデータ、利用条件、欠損値注記）を文書化。
- **Contracts**: 外部公開 API やデータ交換契約はなし（UI 表示のみ）。
- **Quickstart**: 開発・テスト・確認手順を簡潔に記載。

## Phase 2: Task Planning

- このフェーズは `/speckit.tasks` で実施。

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
