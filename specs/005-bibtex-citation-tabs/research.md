# Research: BibTeX Citation Section

## Decision 1: Tabbed UI Implementation

- **Decision**: Use shadcn/ui Tabs (Radix-based) for the two BibTeX entries.
- **Rationale**: Aligns with constitution requirement for shadcn/ui + Radix UI primitives and provides accessible, consistent tab behavior.
- **Alternatives considered**: Custom tabs with raw markup; rejected due to design-system inconsistency and accessibility risk.

## Decision 2: BibTeX Rendering

- **Decision**: Render BibTeX inside a code block using Astro’s built-in syntax highlighting.
- **Rationale**: Matches user requirement and keeps rendering in the server-first Astro pipeline with minimal client JS.
- **Alternatives considered**: Client-side syntax highlighters; rejected due to added bundle weight and unnecessary client work.

## Decision 3: Copy Feedback

- **Decision**: Provide inline “Copied!” feedback near the copy button.
- **Rationale**: Directly visible confirmation without global UI overlays.
- **Alternatives considered**: Toast notifications or button label swap; rejected in favor of the clarified requirement.

## Decision 4: Missing BibTeX Entries

- **Decision**: Show placeholders for missing entries and allow copy.
- **Rationale**: Matches clarified requirement and keeps the UI stable.
- **Alternatives considered**: Empty state or hiding the section; rejected per clarification.

## Decision 5: Keyboard Accessibility

- **Decision**: Full keyboard access for tabs and copy button.
- **Rationale**: Matches clarified requirement and WCAG expectations.
- **Alternatives considered**: Mouse-only interactions; rejected due to accessibility requirements.
