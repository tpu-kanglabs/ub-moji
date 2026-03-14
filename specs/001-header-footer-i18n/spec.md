# Feature Specification: Fixed Header, Footer Logo, and i18n

**Feature Branch**: `001-header-footer-i18n`  
**Created**: 2026-03-15  
**Status**: Draft  
**Input**: User description: "ページの上部に固定されるきれいなヘッダーを実装して。モバイルでも問題なく表示されなければなりません。フッターにはロゴ表示と言語切り替え機能を実装。同時にAstro v6に準拠したi18n機能を追加。英語を主言語とし、日本語もサポートする。"

## Clarifications

### Session 2026-03-15

- Q: What should determine language persistence across pages? → A: Use locale in the URL path (e.g., `/en/`, `/ja/`).
- Q: Where should the language switcher be placed? → A: Header only.
- Q: What should happen when a translation is missing? → A: Fallback to English for missing strings.
- Q: How should the header behave on very short pages? → A: Header always fixed, regardless of scroll.
- Q: What content should the header include? → A: Logo, primary navigation, and language switcher.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Persistent, Polished Header (Priority: P1)

As a visitor, I can always see a clean, fixed header at the top of the page so I can access the logo, primary navigation, and language switcher without losing context while scrolling.

**Why this priority**: This is the most visible UI change and directly affects navigation on every page.

**Independent Test**: Can be fully tested by visiting any page, scrolling, and confirming the header remains visible, readable, and usable.

**Acceptance Scenarios**:

1. **Given** a user is viewing any page on desktop, **When** they scroll down, **Then** the header remains fixed at the top without covering critical content.
2. **Given** a user is on a mobile device, **When** they view the page, **Then** the header fits within the screen and does not overlap or hide navigation controls.
3. **Given** a page has no scrollable content, **When** it loads, **Then** the header remains fixed at the top.

---

### User Story 2 - Language Switching (Priority: P2)

As a visitor, I can switch the site language between English and Japanese from the header so I can read content in my preferred language.

**Why this priority**: Language access is a core functional requirement and enables broader audience reach.

**Independent Test**: Can be fully tested by toggling the language control in the footer and verifying visible text changes to the selected language.

**Acceptance Scenarios**:

1. **Given** the site is displayed in English, **When** the user selects Japanese, **Then** the site content is shown in Japanese.
2. **Given** the site is displayed in Japanese, **When** the user selects English, **Then** the site content is shown in English.
3. **Given** the user has selected a language, **When** they navigate to another page, **Then** the site stays in the selected language via the locale in the URL path.
4. **Given** the site cannot determine a supported language, **When** the page loads, **Then** the site is shown in English.

---

### User Story 3 - Branded Footer (Priority: P3)

As a visitor, I can see a branded footer with the site logo so I can confirm site identity and trust the page.

**Why this priority**: Footer branding is important but secondary to navigation and language access.

**Independent Test**: Can be fully tested by viewing the footer on any page and confirming the logo is visible and legible.

**Acceptance Scenarios**:

1. **Given** a user scrolls to the page bottom, **When** the footer is visible, **Then** the logo is displayed clearly.

---

### Edge Cases

- What happens when the screen is extremely narrow (e.g., small mobile devices)?
- How does the header behave when the page content is very short and does not require scrolling?
- What happens when a user selects a language and then navigates to a different page?
- What happens when a user opens a link with a different locale than their current selection?
- What happens when a translation is missing in one language?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST display a fixed header at the top of every page.
- **FR-001a**: The header MUST remain fixed even on pages without scrollable content.
- **FR-002**: The header MUST remain readable and usable on common mobile screen sizes without overlapping essential controls.
- **FR-003**: The header MUST provide access to the logo, primary navigation, and the language switcher.
- **FR-004**: The footer MUST display the site logo on every page.
- **FR-005**: The header MUST include a language switcher that supports English and Japanese.
- **FR-006**: English MUST be the default language for first-time visitors.
- **FR-007**: When a user changes the language, the site MUST present content in the selected language.
- **FR-008**: The selected language MUST persist across page navigation via the locale in the URL path.
- **FR-009**: If the site cannot determine a supported language, it MUST fall back to English.
- **FR-010**: If a translation is missing in the selected language, the system MUST fall back to English for that text.

### Key Entities *(include if feature involves data)*

- **Language Preference**: The user-selected display language (English or Japanese) and its current state across the site.
- **Translation Content**: The set of user-visible text strings available in English and Japanese.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of tested pages show a fixed header that remains visible during scrolling on both desktop and mobile.
- **SC-002**: 95% of users can locate and use the language switcher within 10 seconds on first visit.
- **SC-003**: 90% of users successfully switch between English and Japanese on the first attempt.
- **SC-004**: Language selection persists across at least 5 consecutive page navigations in 100% of test runs.
- **SC-005**: User-reported header readability on mobile is rated 4 out of 5 or higher in feedback surveys.

## Assumptions

- The site has or will have translatable text content in both English and Japanese.
- The language switcher is available on all pages via the header.
- Primary navigation elements already exist or will be provided, and the header will present them consistently.
