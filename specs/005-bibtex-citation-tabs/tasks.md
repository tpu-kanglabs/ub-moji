# Tasks: BibTeX Citation Section

**Input**: Design documents from `/specs/005-bibtex-citation-tabs/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Included (per constitution testing standards).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Verify shadcn/ui project context and installed components via `pnpm dlx shadcn@latest info --json`
- [X] T002 [P] Review Astro syntax highlighting usage for code blocks in `src/pages` to align with built-in highlighter
- [X] T003 [P] Identify target page(s) where citation section will be embedded (document in `specs/005-bibtex-citation-tabs/notes.md`)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Add shadcn/ui Tabs component via `pnpm dlx shadcn@latest add tabs` (creates files under `src/components/ui/`)
- [X] T005 [P] Create citation section component scaffold in `src/components/CitationSection.astro`
- [X] T006 [P] Add placeholder BibTeX content source (temporary content) in `src/lib/citation-data.ts`
- [X] T007 [P] Add base styling tokens or utilities if missing in `src/styles/global.css`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Copy BibTeX Quickly (Priority: P1) 🎯 MVP

**Goal**: One-click copy of the selected BibTeX entry with inline success feedback.

**Independent Test**: Open the page, click copy on the selected tab, verify clipboard matches visible BibTeX and inline “Copied!” message appears.

### Tests for User Story 1 ⚠️

- [X] T008 [P] [US1] Component test for copy action and inline feedback in `tests/components/citation-section.copy.test.tsx`
- [X] T009 [P] [US1] E2E happy-path test for copy flow in `tests/e2e/citation-section.copy.spec.ts`

### Implementation for User Story 1

- [X] T010 [P] [US1] Implement copy button and inline “Copied!” feedback in `src/components/CitationSection.astro`
- [X] T011 [US1] Wire clipboard write logic and failure handling in `src/components/CitationSection.astro`
- [X] T012 [US1] Surface copy failure guidance text near the action in `src/components/CitationSection.astro`

**Checkpoint**: User Story 1 fully functional and testable independently

---

## Phase 4: User Story 2 - Switch Between Two BibTeX Entries (Priority: P2)

**Goal**: Allow switching between “Paper” and “Dataset” BibTeX entries via tabs.

**Independent Test**: Switching tabs updates the displayed BibTeX block and the copy action targets the selected entry.

### Tests for User Story 2 ⚠️

- [X] T013 [P] [US2] Component test for tab switching updates displayed BibTeX in `tests/components/citation-section.tabs.test.tsx`
- [X] T014 [P] [US2] E2E test for tab switch + copy in `tests/e2e/citation-section.tabs.spec.ts`

### Implementation for User Story 2

- [X] T015 [P] [US2] Implement shadcn/ui Tabs integration with labels “Paper” and “Dataset” in `src/components/CitationSection.astro`
- [X] T016 [US2] Bind selected tab to displayed BibTeX code block in `src/components/CitationSection.astro`

**Checkpoint**: User Stories 1 and 2 both independently functional

---

## Phase 5: User Story 3 - Experience a Refined Citation Area (Priority: P3)

**Goal**: Deliver a polished, trustworthy visual presentation of the citation section.

**Independent Test**: Visual review confirms cohesive layout, spacing, and typography consistent with site standards.

### Tests for User Story 3 ⚠️

- [X] T017 [P] [US3] Visual regression or snapshot test for polished layout in `tests/components/citation-section.visual.test.tsx`

### Implementation for User Story 3

- [X] T018 [P] [US3] Refine layout, spacing, and typography in `src/components/CitationSection.astro`
- [X] T019 [US3] Add subtle interaction states and focus rings consistent with WCAG in `src/components/CitationSection.astro`

**Checkpoint**: All user stories independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T020 [P] Ensure keyboard-only navigation across tabs and copy action in `src/components/CitationSection.astro`
- [X] T021 [P] Validate placeholder display and copy when BibTeX entry missing in `src/components/CitationSection.astro`
- [X] T022 Update embedding page to include the citation section in `src/pages/[target].astro`
- [ ] T023 Run quickstart validation steps from `specs/005-bibtex-citation-tabs/quickstart.md`

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
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Integrates with US1 copy target
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Visual polish on same component

### Within Each User Story

- Tests MUST be written and FAIL before implementation
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- Setup tasks T002–T003 can run in parallel
- Foundational tasks T005–T007 can run in parallel
- Within US1, T008 and T009 can run in parallel
- Within US2, T013 and T014 can run in parallel
- Within US3, T017 and T018 can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together:
Task: "Component test for copy action and inline feedback in tests/components/citation-section.copy.test.tsx"
Task: "E2E happy-path test for copy flow in tests/e2e/citation-section.copy.spec.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently
