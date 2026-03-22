# Feature Specification: BibTeX Citation Section

**Feature Branch**: `005-bibtex-citation-tabs`  
**Created**: 2026-03-15  
**Status**: Draft  
**Input**: User description: "bibtexがコピーできるcitationセクションを作成する。2つのbibtexをタブで切り替える事ができ、1-clickでコピーできる。洗練されたデザイン"

## Clarifications

### Session 2026-03-15

- Q: What is the success feedback style? → A: Inline “Copied!” message near the button.

- Q: If one BibTeX entry is missing, what should users see? → A: Show placeholders and allow copy.

- Q: What keyboard accessibility is required? → A: Full keyboard access for tabs and the copy button.

- Q: What are the two BibTeX tab labels? → A: “Paper” and “Dataset”.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Copy BibTeX Quickly (Priority: P1)

As a reader, I want to copy a BibTeX entry with one action so I can cite the dataset or work immediately.

**Why this priority**: Fast, reliable copying is the core value of the citation section.

**Independent Test**: Can be fully tested by opening the section, clicking copy, and verifying the clipboard content matches the selected BibTeX entry.

**Acceptance Scenarios**:

1. **Given** the citation section is visible with a BibTeX entry selected, **When** the user triggers the copy action, **Then** the selected BibTeX text is copied to the clipboard.
2. **Given** a copy action has completed, **When** the user checks for feedback, **Then** the UI confirms the copy was successful.

---

### User Story 2 - Switch Between Two BibTeX Entries (Priority: P2)

As a reader, I want to switch between two BibTeX entries using tabs labeled “Paper” and “Dataset” so I can choose the correct citation.

**Why this priority**: Users need a clear, low-friction way to select between the two citations.

**Independent Test**: Can be fully tested by switching tabs and verifying the displayed BibTeX text changes accordingly.

**Acceptance Scenarios**:

1. **Given** two BibTeX entries are available, **When** the user selects the second tab, **Then** the displayed BibTeX text updates to the second entry.

---

### User Story 3 - Experience a Refined Citation Area (Priority: P3)

As a reader, I want the citation section to feel polished and trustworthy so I am confident using the provided citation.

**Why this priority**: Visual quality affects credibility and willingness to use the citation.

**Independent Test**: Can be tested by presenting the section to users and confirming it meets the defined visual quality criteria.

**Acceptance Scenarios**:

1. **Given** the citation section is rendered, **When** a user views it, **Then** it presents a cohesive, refined layout consistent with the site’s visual standards.

---

### Edge Cases

- What happens when the clipboard action is blocked or fails?
- What happens when one of the two BibTeX entries is missing or empty (placeholders shown and copy allowed)?
- How does the system behave if the user rapidly switches tabs and then copies?
- How does the experience work with keyboard-only navigation?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display a citation section containing exactly two BibTeX entries labeled “Paper” and “Dataset”.
- **FR-002**: System MUST allow users to switch between the two BibTeX entries via tabs labeled “Paper” and “Dataset”.
- **FR-003**: System MUST allow users to copy the currently selected BibTeX entry with a single user action.
- **FR-004**: System MUST provide immediate, clear feedback after a successful copy action via an inline “Copied!” message near the copy button.
- **FR-005**: System MUST provide a clear error state or guidance when copy fails.
- **FR-006**: The citation section MUST maintain a polished, cohesive visual presentation aligned with the site’s quality bar.

### Key Entities *(include if feature involves data)*

- **Citation Section**: A UI area that presents the citation content and related actions.
- **BibTeX Entry**: A formatted citation text block labeled as “Paper” or “Dataset”.
- **Tab**: A selection control that maps to one BibTeX entry and changes the displayed content.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can copy a selected BibTeX entry in 1 action and under 5 seconds from opening the section.
- **SC-002**: 95% of users successfully switch between the two entries without assistance.
- **SC-003**: 95% of copy attempts result in a successful clipboard copy with visible confirmation.
- **SC-004**: In user feedback, at least 80% rate the citation section as “polished” or “high quality.”

## Assumptions

- The two BibTeX entries and their labels are provided by content owners.
- The citation section appears on a page where citations are relevant to the content.
- Users expect a standard copy-to-clipboard interaction with clear confirmation.
