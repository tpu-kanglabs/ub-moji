# Research: Add Author Section

## Decision 1: Use shadcn/ui primitives for layout and styling

**Decision**: Compose the author section using existing shadcn/ui primitives (e.g., Card, Avatar, Badge/Separator as needed) and Tailwind semantic tokens.

**Rationale**: Ensures visual consistency, accessibility defaults, and alignment with the project constitution without custom one-off styles.

**Alternatives considered**: Custom HTML/CSS blocks with bespoke styling.

## Decision 2: Support multiple authors as a list

**Decision**: Render all authors as a list, each with name and optional affiliation.

**Rationale**: Academic content commonly has multiple authors; a list avoids later redesign.

**Alternatives considered**: Single-author only; first-author only with truncation.

## Decision 3: Keep the section static unless interactivity is required

**Decision**: Implement as static content in Astro; introduce React islands only if a future interactive requirement emerges.

**Rationale**: Minimizes client JavaScript and preserves performance targets.

**Alternatives considered**: Always render as a React island.
