# Tasks: データセット詳細説明セクション追加

**Input**: Design documents from `/specs/003-add-dataset-details/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are included because the user requested test writing and the constitution requires test-first for user-facing features.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Confirm target page location for the dataset detail section in src/pages/ (src/pages/index.astro, src/pages/[lang]/index.astro)
- [X] T002 [P] Verify shadcn/ui project config with `pnpm dlx shadcn@latest info --json` (components: button, select)
- [X] T003 [P] Create a feature data stub in src/lib/ub-moji-dataset-details.ts to hold table content and labels

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [X] T004 [P] Add shadcn/ui components Table, Card, Badge, Separator via `pnpm dlx shadcn@latest add table card badge separator`
- [X] T005 Create a presentational wrapper component for the section in src/components/ub-moji/UbMojiDatasetSection.astro
- [X] T006 Create a shared table rendering component in src/components/ub-moji/UbMojiDatasetTables.tsx (React island only if interactivity is required)

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - データ構造をひと目で理解する (Priority: P1) 🎯 MVP

**Goal**: サブセット構成と主要ファイル構造を表中心で理解できるようにする

**Independent Test**: 詳細説明セクションのみを見て、サブセット構成・主要ファイル・命名規則を説明できる

### Tests for User Story 1 (TDD)

- [X] T007 [P] [US1] Add component test for section rendering in tests/components/ub-moji-dataset-section.test.tsx
- [X] T008 [P] [US1] Add e2e smoke test for section visibility in tests/e2e/ub-moji-dataset-section.spec.ts

### Implementation for User Story 1

- [X] T009 [P] [US1] Populate subset table data in src/lib/ub-moji-dataset-details.ts
- [X] T010 [US1] Implement subset table rendering in src/components/ub-moji/UbMojiDatasetTables.tsx
- [X] T011 [US1] Add naming rule diagram/text block in src/components/ub-moji/UbMojiDatasetSection.astro
- [X] T012 [US1] Wire section into target page in src/pages/index.astro and src/pages/[lang]/index.astro

**Checkpoint**: User Story 1 functional and testable

---

## Phase 4: User Story 2 - メタデータと注釈の意味を理解する (Priority: P2)

**Goal**: メタデータと注釈ファイルの役割や代表項目を明確にする

**Independent Test**: セクションだけで metadata.csv / participants.csv / annotations.toml の役割を説明できる

### Tests for User Story 2 (TDD)

- [X] T013 [P] [US2] Add component test for metadata/annotation table rows in tests/components/ub-moji-dataset-metadata.test.tsx
- [X] T014 [P] [US2] Extend e2e smoke test to verify metadata labels in tests/e2e/ub-moji-dataset-section.spec.ts

### Implementation for User Story 2

- [X] T015 [P] [US2] Populate metadata and annotation table data in src/lib/ub-moji-dataset-details.ts
- [X] T016 [US2] Implement metadata/annotation table rendering in src/components/ub-moji/UbMojiDatasetTables.tsx
- [X] T017 [US2] Add missing value note text block in src/components/ub-moji/UbMojiDatasetSection.astro

**Checkpoint**: User Story 2 functional and testable

---

## Phase 5: User Story 3 - 利用条件の制約を把握する (Priority: P3)

**Goal**: 利用条件の要点を明確に提示する

**Independent Test**: セクションだけで学術目的限定・商用不可・再配布不可を説明できる

### Tests for User Story 3 (TDD)

- [X] T018 [P] [US3] Add component test for usage constraints block in tests/components/ub-moji-dataset-usage.test.tsx
- [X] T019 [P] [US3] Extend e2e smoke test to verify usage constraints in tests/e2e/ub-moji-dataset-section.spec.ts

### Implementation for User Story 3

- [X] T020 [P] [US3] Populate usage constraints data in src/lib/ub-moji-dataset-details.ts
- [X] T021 [US3] Implement usage constraints block in src/components/ub-moji/UbMojiDatasetSection.astro
- [X] T022 [US3] Add badges for constraints using shadcn/ui in src/components/ub-moji/UbMojiDatasetSection.astro

**Checkpoint**: User Story 3 functional and testable

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T023 [P] Add Story/README note for new components in src/components/ub-moji/README.md
- [X] T024 Run quickstart checks and update notes in specs/003-add-dataset-details/quickstart.md
- [X] T025 [P] Run and fix formatting/linting in repo (pnpm check)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel if needed
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent but uses shared table component
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independent but uses shared section layout

### Parallel Opportunities

- T002, T003 can run in parallel
- T004 can run in parallel with T003
- US1 tests (T007, T008) can run in parallel
- US2 tests (T013, T014) can run in parallel
- US3 tests (T018, T019) can run in parallel

---

## Parallel Example: User Story 1

```bash
Task: "Add component test for section rendering in tests/components/ub-moji-dataset-section.test.tsx"
Task: "Add e2e smoke test for section visibility in tests/e2e/ub-moji-dataset-section.spec.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate User Story 1 independently (component + e2e tests)

### Incremental Delivery

1. Setup + Foundational → foundation ready
2. User Story 1 → test and validate
3. User Story 2 → test and validate
4. User Story 3 → test and validate
5. Polish phase
