# Tasks: News Pages

**Input**: Design documents from `/specs/006-news-pages/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-contract.md, quickstart.md

**Tests**: Tests are required for this feature by the constitution and plan. Write tests first and confirm they fail before implementation.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (`[US1]`, `[US2]`, `[US3]`)
- Each task includes the exact file path to update

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare feature scaffolding, sample content, and localized copy needed by all stories

- [X] T001 Create news feature scaffolding in `src/components/news/`, `src/pages/news/`, `src/pages/[lang]/news/`, and `src/contents/news/`
- [X] T002 [P] Add localized news UI copy keys for index, article, empty, not-found, and unavailable states in `src/lib/locales/en.json` and `src/lib/locales/ja.json`
- [X] T003 [P] Add initial localized Markdown fixtures for news articles in `src/contents/news/launch-announcement-en.md` and `src/contents/news/launch-announcement-ja.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core content schema and shared helpers required before any user story work

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Add the `news` Astro content collection schema in `src/content.config.ts`
- [X] T005 [P] Create shared news content/query helpers for locale filtering, slug grouping, and fallback lookup in `src/lib/news.ts`
- [X] T006 [P] Create shared article layout and prose styling primitives for news routes in `src/components/news/NewsLayout.astro` and `src/components/news/news-prose.ts`
- [X] T007 Add route generation helpers for default and localized news paths in `src/lib/news-routes.ts`

**Checkpoint**: Foundation ready. User story work can now proceed.

---

## Phase 3: User Story 1 - Browse News Articles (Priority: P1) 🎯 MVP

**Goal**: Deliver a news index where visitors can scan published articles and open a detail page.

**Independent Test**: Open `/news`, confirm each entry shows title, publication date, and short summary, then open an article detail page from the list.

### Tests for User Story 1 ⚠️

- [X] T008 [P] [US1] Add unit tests for news collection mapping and index ordering in `tests/components/news-collection.test.ts`
- [X] T009 [P] [US1] Add Playwright coverage for default-locale news index navigation in `tests/e2e/news-index.spec.ts`

### Implementation for User Story 1

- [X] T010 [P] [US1] Implement the reusable news index section in `src/components/news/NewsIndex.astro`
- [X] T011 [P] [US1] Implement the reusable article detail renderer for published news entries in `src/components/news/NewsArticle.astro`
- [X] T012 [US1] Build the default-locale news index route in `src/pages/news/index.astro`
- [X] T013 [US1] Build the default-locale news article route in `src/pages/news/[slug].astro`
- [X] T014 [US1] Add empty-index and missing-article handling for default-locale news routes in `src/pages/news/index.astro` and `src/pages/news/[slug].astro`

**Checkpoint**: User Story 1 is independently functional at `/news` and `/news/[slug]`.

---

## Phase 4: User Story 2 - Read a News Article in the Selected Language (Priority: P2)

**Goal**: Deliver locale-aware news index and detail routes, including unavailable-language recovery behavior.

**Independent Test**: Open `/ja/news` and `/ja/news/[slug]`, confirm localized UI appears, and verify a missing locale variant shows the unavailable state with links to the index and default-language article.

### Tests for User Story 2 ⚠️

- [X] T015 [P] [US2] Add unit tests for locale-specific article lookup and unavailable-state resolution in `tests/components/news-i18n.test.ts`
- [X] T016 [P] [US2] Add Playwright coverage for localized news navigation and unavailable-language recovery in `tests/e2e/news-i18n.spec.ts`

### Implementation for User Story 2

- [X] T017 [P] [US2] Implement unavailable-language and not-found recovery UI in `src/components/news/NewsUnavailableState.astro` and `src/components/news/NewsNotFoundState.astro`
- [X] T018 [US2] Build the localized news index route in `src/pages/[lang]/news/index.astro`
- [X] T019 [US2] Build the localized news article route with locale-preserving article lookup in `src/pages/[lang]/news/[slug].astro`
- [X] T020 [US2] Update language-switching path handling for news routes in `src/components/Header.tsx` and `src/lib/news-routes.ts`

**Checkpoint**: User Story 2 is independently functional across supported locales.

---

## Phase 5: User Story 3 - Read News Comfortably on Mobile (Priority: P3)

**Goal**: Make the news index and article pages polished and readable on small screens without horizontal scrolling.

**Independent Test**: View the news index and article routes on a mobile-sized viewport and confirm readable typography, stable media blocks, and accessible navigation.

### Tests for User Story 3 ⚠️

- [X] T021 [P] [US3] Add component coverage for mobile-safe article rich-text rendering in `tests/components/news-article-layout.test.tsx`
- [X] T022 [P] [US3] Add Playwright mobile viewport coverage for news index and article readability in `tests/e2e/news-mobile.spec.ts`

### Implementation for User Story 3

- [X] T023 [P] [US3] Refine mobile-responsive article and list spacing, typography, and media treatment in `src/components/news/NewsIndex.astro` and `src/components/news/NewsArticle.astro`
- [X] T024 [US3] Add mobile-safe rich-text element styling and overflow handling in `src/styles/global.css` and `src/components/news/news-prose.ts`
- [X] T025 [US3] Improve mobile recovery-state layout and action hierarchy in `src/components/news/NewsUnavailableState.astro` and `src/components/news/NewsNotFoundState.astro`

**Checkpoint**: User Story 3 is independently functional on mobile-sized viewports.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification, docs alignment, and cross-story cleanup

- [X] T026 [P] Verify content authoring guidance and frontmatter expectations in `specs/006-news-pages/quickstart.md`
- [X] T027 Run full verification for the news feature with `pnpm test`, `pnpm test:e2e`, `pnpm check`, and `pnpm typecheck`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1: Setup**: No dependencies
- **Phase 2: Foundational**: Depends on Phase 1 and blocks all user stories
- **Phase 3: US1**: Depends on Phase 2 and is the MVP
- **Phase 4: US2**: Depends on Phase 2 and reuses shared helpers from US1 routes/components
- **Phase 5: US3**: Depends on Phases 3 and 4 because it refines the delivered news UI across default and localized routes
- **Phase 6: Polish**: Depends on all implemented user stories

### User Story Dependencies

- **US1 (P1)**: No dependency on other user stories after foundational work
- **US2 (P2)**: Depends on the shared index/detail route patterns established in US1
- **US3 (P3)**: Depends on the rendered list/detail/recovery surfaces from US1 and US2

### Within Each User Story

- Tests must be written and fail before implementation
- Shared rendering components should land before route files that consume them
- Route work should complete before story-specific polish or fallback refinements

## Parallel Opportunities

- `T002` and `T003` can run in parallel after `T001`
- `T005` and `T006` can run in parallel after `T004`
- `T008` and `T009` can run in parallel within US1
- `T010` and `T011` can run in parallel within US1
- `T015` and `T016` can run in parallel within US2
- `T021` and `T022` can run in parallel within US3

## Parallel Example: User Story 1

```bash
Task: "Add unit tests for news collection mapping and index ordering in tests/components/news-collection.test.ts"
Task: "Add Playwright coverage for default-locale news index navigation in tests/e2e/news-index.spec.ts"

Task: "Implement the reusable news index section in src/components/news/NewsIndex.astro"
Task: "Implement the reusable article detail renderer for published news entries in src/components/news/NewsArticle.astro"
```

## Parallel Example: User Story 2

```bash
Task: "Add unit tests for locale-specific article lookup and unavailable-state resolution in tests/components/news-i18n.test.ts"
Task: "Add Playwright coverage for localized news navigation and unavailable-language recovery in tests/e2e/news-i18n.spec.ts"
```

## Parallel Example: User Story 3

```bash
Task: "Add component coverage for mobile-safe article rich-text rendering in tests/components/news-article-layout.test.tsx"
Task: "Add Playwright mobile viewport coverage for news index and article readability in tests/e2e/news-mobile.spec.ts"
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete US1 tasks through `T014`.
3. Validate `/news` and `/news/[slug]` independently before expanding to localized routes.

### Incremental Delivery

1. Deliver shared content collection and helpers.
2. Deliver US1 for article discovery and default-locale reading.
3. Deliver US2 for locale-aware routes and unavailable-state handling.
4. Deliver US3 for mobile polish and responsive rich-text handling.
5. Finish with full verification in Phase 6.

### Parallel Team Strategy

1. One developer handles shared content schema/helpers (`T004`-`T007`) while another prepares fixtures and locale copy (`T002`-`T003`) after scaffolding.
2. After Phase 2, one developer can take US1 routes while another prepares US2 tests and recovery UI components.
3. Mobile-focused refinements in US3 can proceed once the base list/detail/recovery surfaces are merged.

## Notes

- All tasks follow the required checklist format with IDs, optional `[P]`, story labels where applicable, and explicit file paths.
- Story tasks are scoped so each user story can be tested independently.
- Keep client JavaScript minimal on news routes unless a later task proves an island is necessary.
