# Feature Specification: Hero Video Section

**Feature Branch**: `002-hero-video`  
**Created**: 2026-03-15  
**Status**: Draft  
**Input**: User description: "ページトップにヒーローセクションを作成します。ここでは動画demo.mp4を配置し、それに重なるようにub-MOJIと表示します。イメージはhttps://www.lycorp.co.jp/ja/です。"

## Clarifications

### Session 2026-03-15

- Q: What should the hero height be on initial load? → A: Full-viewport height (full-screen).
- Q: What should the fallback visual be when video cannot play? → A: Static image poster.jpg.
- Q: Should the hero include any copy beyond the “ub-MOJI” text? → A: No, single centered “ub-MOJI” only.
- Q: Should the video autoplay when motion is allowed? → A: Yes, autoplay when motion is allowed.
- Q: Should the hero define an accessibility text alternative for the video? → A: Yes, short descriptive text (<= 10 words).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - First-View Brand Impact (Priority: P1)

A visitor lands on the top of the page and immediately sees a hero section with a full-bleed video and the overlaid brand text "ub-MOJI" to understand the product identity at a glance.

**Why this priority**: This is the first impression and sets the brand tone for all users.

**Independent Test**: Load the page and confirm the hero section appears at the top with the video and overlaid brand text visible without scrolling.

**Acceptance Scenarios**:

1. **Given** a first-time visitor opens the page, **When** the page loads, **Then** the hero section is positioned at the top of the page with the video visible.
2. **Given** the hero section is visible, **When** the visitor looks at it, **Then** the overlaid text "ub-MOJI" is clearly readable on top of the video.

---

### User Story 2 - Responsive Viewing (Priority: P2)

A visitor on any common device size can see the hero video and the overlaid text without visual clipping or awkward cropping.

**Why this priority**: The hero is a cross-device entry point and must work on mobile and desktop.

**Independent Test**: Resize the viewport to mobile, tablet, and desktop widths and verify layout integrity.

**Acceptance Scenarios**:

1. **Given** a mobile viewport, **When** the page loads, **Then** the hero video and overlaid text fit within the viewport without cropping the text.

---

### User Story 3 - Graceful Degradation (Priority: P3)

A visitor on a limited connection or with video playback restrictions still sees a compelling hero presentation.

**Why this priority**: Video playback is not guaranteed across devices and environments.

**Independent Test**: Simulate video playback failure and confirm a fallback visual still appears with the overlaid text.

**Acceptance Scenarios**:

1. **Given** the video cannot play, **When** the hero section loads, **Then** a fallback visual is shown with "ub-MOJI" overlaid.

---

### Edge Cases

- What happens when the video file fails to load or is blocked by the browser?
- How does the hero behave on very small screens where the video height is limited?
- What happens when the user prefers reduced motion?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The page MUST display a hero section at the very top of the page.
- **FR-002**: The hero section MUST present the video asset named "demo.mp4" as the primary visual.
- **FR-011**: The video MUST autoplay when motion is allowed.
- **FR-012**: The hero video MUST include a short descriptive text alternative (<= 10 words).
- **FR-003**: The hero section MUST overlay the text "ub-MOJI" on top of the video.
- **FR-010**: The hero overlay MUST contain only the centered “ub-MOJI” text and no additional copy.
- **FR-004**: The overlaid text MUST remain readable against the moving video background in normal viewing conditions.
- **FR-005**: The hero section MUST adapt to common viewport sizes (mobile, tablet, desktop) without clipping the overlaid text.
- **FR-006**: If the video cannot play, the hero section MUST show a fallback visual while still displaying the overlaid text.
- **FR-009**: The fallback visual MUST use the static image asset named "poster.jpg".
- **FR-007**: The hero section MUST respect user motion preferences by avoiding auto-play motion when reduced-motion is enabled.
- **FR-008**: The hero section MUST fill the viewport height on initial load.

### Assumptions

- The hero style should evoke the visual tone of the referenced LY Corporation site while remaining brand-appropriate for ub-MOJI.
- The video is intended to loop and play automatically when motion is allowed.
- The hero does not require visible playback controls.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of page loads place the hero section at the top of the page without requiring user scrolling.
- **SC-002**: In a standard usability test, 90% of participants can correctly identify the brand text "ub-MOJI" within 3 seconds of page load.
- **SC-003**: The hero section remains readable and unclipped on common mobile (<= 430px), tablet (<= 1024px), and desktop (>= 1280px) widths in QA checks.
- **SC-004**: In reduced-motion environments, 100% of visits display a non-moving hero while preserving the overlaid text.
