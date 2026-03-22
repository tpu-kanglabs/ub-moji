# Implementation Plan: BibTeX Citation Section

**Branch**: `005-bibtex-citation-tabs` | **Date**: 2026-03-15 | **Spec**: specs/005-bibtex-citation-tabs/spec.md
**Input**: Feature specification from `/specs/005-bibtex-citation-tabs/spec.md`

## Summary

Deliver a polished citation section that shows two BibTeX entries (Paper/Dataset) in tabs, allows one-click copy with inline feedback, supports keyboard navigation, and displays placeholders if a BibTeX entry is missing. The BibTeX content is rendered in a code block with Astro’s built-in syntax highlighting, and tabs are implemented using shadcn/ui.

## Technical Context

**Language/Version**: TypeScript 5.9 (strict)  
**Primary Dependencies**: Astro 6.x, React 19 islands, TailwindCSS 4, shadcn/ui (Radix), Radix UI  
**Storage**: N/A  
**Testing**: Vitest, React Testing Library, Playwright  
**Target Platform**: Web (Astro)  
**Project Type**: Web application  
**Performance Goals**: Meet Lighthouse Performance ≥ 90 and Core Web Vitals targets per constitution  
**Constraints**: Use Astro built-in syntax highlighting for code blocks; use shadcn/ui Tabs component for tabbed UI; follow WCAG 2.1 AA and prefers-reduced-motion  
**Scale/Scope**: Single citation section component on relevant page(s)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Code Quality**: Plan uses existing components and minimal new logic. No violations expected.
- **II. Testing Standards**: Plan includes component tests and at least one E2E happy path. No violations expected.
- **III. User Experience Consistency**: Uses shadcn/ui + Radix components and Tailwind utilities. Accessibility requirements explicitly included. No violations expected.
- **IV. Performance Requirements**: Astro-first rendering and minimal client JS. No violations expected.

## Project Structure

### Documentation (this feature)

```text
specs/005-bibtex-citation-tabs/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── components/
├── pages/
├── styles/
└── lib/

tests/
```

**Structure Decision**: Single Astro web application. New UI lives under `src/components` and is composed into existing pages.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
