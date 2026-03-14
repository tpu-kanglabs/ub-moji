# Tasks: Fixed Header, Footer Logo, and i18n

**Input**: Design documents from `/specs/001-header-footer-i18n/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are REQUIRED by constitution. Include test-first tasks for component and E2E smoke coverage.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Confirm working tree and tooling alignment with plan in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/README.md
- [x] T002 [P] Add testing toolchain config in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/package.json and /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/vitest.config.ts
- [x] T003 [P] Create test setup helpers in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/tests/setup.ts
- [x] T004 [P] Create test directories in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/tests/components and /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/tests/e2e

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Add i18n routing configuration for URL locales in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/astro.config.mjs
- [x] T006 [P] Add locale utilities and types in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/lib/i18n.ts
- [x] T007 [P] Create translation resources in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/lib/locales/en.json and /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/lib/locales/ja.json
- [x] T008 Create locale-aware routing entry points in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/pages/[lang]/index.astro and update /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/pages/index.astro for default locale handling
- [x] T009 Update layout to accept locale context in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/layouts/main.astro

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Persistent, Polished Header (Priority: P1) 🎯 MVP

**Goal**: Fixed header with logo, primary navigation, and language switcher that remains usable on mobile and non-scroll pages

**Independent Test**: Load any page, scroll (or not), and verify header remains fixed, visible, and usable across desktop and mobile widths

### Tests for User Story 1 (REQUIRED)

- [x] T010 [P] [US1] Create component test for fixed header behavior in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/tests/components/header.test.tsx
- [x] T011 [P] [US1] Add E2E smoke test for header visibility on scroll in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/tests/e2e/header-scroll.test.ts

### Implementation for User Story 1

- [x] T012 [US1] Implement single React header component in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/components/Header.tsx
- [x] T013 [P] [US1] Add header layout styles and spacing adjustments in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/styles/global.css
- [x] T014 [US1] Wire header into layout in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/layouts/main.astro

**Checkpoint**: User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Language Switching (Priority: P2)

**Goal**: Language switcher in the header toggles between English and Japanese via URL locale paths with fallback behavior

**Independent Test**: Switch language from the header and verify URL locale changes and content renders in the selected language

### Tests for User Story 2 (REQUIRED)

- [x] T015 [P] [US2] Create component test for language switcher interaction in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/tests/components/language-switcher.test.tsx
- [x] T016 [P] [US2] Add E2E smoke test for locale switching in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/tests/e2e/locale-switch.test.ts

### Implementation for User Story 2

- [x] T017 [US2] Implement language switcher behavior inside /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/components/Header.tsx
- [x] T018 [US2] Render localized strings using i18n helpers in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/pages/[lang]/index.astro
- [x] T019 [US2] Add translation fallback logic in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/lib/i18n.ts

**Checkpoint**: User Story 2 should be fully functional and testable independently

---

## Phase 5: User Story 3 - Branded Footer (Priority: P3)

**Goal**: Footer displays site logo on all pages

**Independent Test**: Scroll to footer on any page and confirm logo is visible and legible

### Tests for User Story 3 (REQUIRED)

- [x] T020 [P] [US3] Add E2E smoke test for footer logo visibility in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/tests/e2e/footer-logo.test.ts

### Implementation for User Story 3

- [x] T021 [US3] Implement footer component in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/components/Footer.astro
- [x] T022 [US3] Wire footer into layout in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/layouts/main.astro

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T023 [P] Ensure accessibility and keyboard navigation for header controls in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/components/Header.tsx
- [x] T024 [P] Verify reduced-motion handling for any header interactions in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/src/components/Header.tsx
- [ ] T025 Run quickstart validation steps documented in /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/specs/001-header-footer-i18n/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Depends on i18n routing from Phase 2
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Tests MUST be written and FAIL before implementation
- Component tests before component implementation
- E2E smoke tests before final integration

### Parallel Opportunities

- Setup tasks T002, T003, T004 can run in parallel
- Foundational tasks T006 and T007 can run in parallel
- Tests within a user story can run in parallel
- User stories can be worked on in parallel after Phase 2 completion

---

## Parallel Example: User Story 2

```bash
# Launch tests for User Story 2 together:
Task: "Create component test for language switcher interaction in /tests/components/language-switcher.test.tsx"
Task: "Add E2E smoke test for locale switching in /tests/e2e/locale-switch.test.ts"

# Implementation tasks that can run after tests:
Task: "Implement language switcher behavior inside /src/components/Header.tsx"
Task: "Render localized strings using i18n helpers in /src/pages/[lang]/index.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Demo MVP

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Demo (MVP)
3. Add User Story 2 → Test independently → Demo
4. Add User Story 3 → Test independently → Demo
5. Each story adds value without breaking previous stories

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Stop at any checkpoint to validate story independently
