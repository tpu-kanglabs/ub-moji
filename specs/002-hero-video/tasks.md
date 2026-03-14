# Tasks: Hero Video Section

**Input**: Design documents from `/specs/002-hero-video/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested in spec; no test tasks included.

**Update**: User requested tests for this branch; e2e tests added.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 [P] Add or verify hero video asset at `src/assets/demo.mp4`
- [x] T002 [P] Add or verify fallback image asset at `src/assets/poster.jpg`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Create hero component scaffold in `src/components/hero/Hero.astro` (video + overlay container + fallback slot)

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - First-View Brand Impact (Priority: P1) 🎯 MVP

**Goal**: Top-of-page, full-viewport hero with autoplay video and centered “ub-MOJI” overlay.

**Independent Test**: Load the page and confirm the hero fills the viewport, the video plays (when motion allowed), and only the centered “ub-MOJI” text appears on top.

### Implementation for User Story 1

- [x] T004 [US1] Implement full-viewport hero layout and layering in `src/components/hero/Hero.astro`
- [x] T005 [US1] Add centered “ub-MOJI” overlay text only in `src/components/hero/Hero.astro`
- [x] T006 [US1] Add video element with autoplay when motion is allowed and short text alternative in `src/components/hero/Hero.astro`
- [x] T007 [US1] Mount hero at the top of the page in `src/pages/index.astro`
- [x] T008 [US1] Document hero props/usage in `src/components/hero/README.md`

**Checkpoint**: User Story 1 is fully functional and testable independently

---

## Phase 4: User Story 2 - Responsive Viewing (Priority: P2)

**Goal**: Hero remains readable and unclipped across common device sizes.

**Independent Test**: Resize viewport to mobile, tablet, and desktop widths and confirm the overlay text remains visible and the hero layout does not clip.

### Implementation for User Story 2

- [x] T009 [US2] Tune responsive typography and spacing for overlay text in `src/components/hero/Hero.astro`
- [x] T010 [US2] Ensure video scaling/cropping is responsive (object-fit + sizing) in `src/components/hero/Hero.astro`

**Checkpoint**: User Stories 1 and 2 are both independently functional

---

## Phase 5: User Story 3 - Graceful Degradation (Priority: P3)

**Goal**: Fallback behavior works when video cannot play or motion is reduced.

**Independent Test**: Simulate video failure and reduced-motion preference; confirm `poster.jpg` is shown and motion is disabled while the overlay remains visible.

### Implementation for User Story 3

- [x] T011 [US3] Add explicit fallback image rendering using `public/poster.jpg` in `src/components/hero/Hero.astro`
- [x] T012 [US3] Respect reduced-motion preferences by disabling autoplay/motion in `src/components/hero/Hero.astro`

**Checkpoint**: All user stories are independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T013 [P] Update verification checklist in `specs/002-hero-video/quickstart.md` if behavior changes during implementation
- [x] T014 [P] Add final usage note updates in `src/components/hero/README.md` if API changed
- [x] T015 [P] Add hero e2e coverage in `tests/e2e/hero-section.test.ts`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
  - Stories can proceed sequentially in priority order (P1 → P2 → P3)
  - US2 and US3 both modify `src/components/hero/Hero.astro`, so avoid parallel edits to that file
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P2)**: Builds on US1 layout; should run after US1 to avoid rework
- **User Story 3 (P3)**: Builds on US1 video markup; should run after US1 to avoid rework

### Within Each User Story

- Core layout before responsive tuning
- Video element before fallback behavior
- Story complete before moving to next priority

### Parallel Opportunities

- Setup tasks T001 and T002 can run in parallel
- Polish tasks T013 and T014 can run in parallel

---

## Parallel Example: User Story 1

```text
Task: "Implement full-viewport hero layout and layering in src/components/hero/Hero.astro"
Task: "Add centered “ub-MOJI” overlay text only in src/components/hero/Hero.astro"
```

---

## Parallel Example: User Story 2

```text
Task: "Tune responsive typography and spacing for overlay text in src/components/hero/Hero.astro"
Task: "Ensure video scaling/cropping is responsive (object-fit + sizing) in src/components/hero/Hero.astro"
```

---

## Parallel Example: User Story 3

```text
Task: "Add explicit fallback image rendering using public/poster.jpg in src/components/hero/Hero.astro"
Task: "Respect reduced-motion preferences by disabling autoplay/motion in src/components/hero/Hero.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. STOP and validate User Story 1 independently

### Incremental Delivery

1. Complete Setup + Foundational
2. Add User Story 1 → Validate
3. Add User Story 2 → Validate
4. Add User Story 3 → Validate
