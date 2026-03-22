# Implementation Plan: News Pages

**Branch**: `006-news-pages` | **Date**: 2026-03-22 | **Spec**: specs/006-news-pages/spec.md
**Input**: Feature specification from `/specs/006-news-pages/spec.md`

## Summary

Add a localized news index and localized news article pages using Astro content collections backed by Markdown files in `src/contents/news/`. The implementation will reuse the existing locale-aware routing pattern, render article content server-side for low client-side overhead, and preserve polished mobile reading and empty/error handling.

## Technical Context

**Language/Version**: TypeScript 5.9 (strict)  
**Primary Dependencies**: Astro 6.x, astro:content content collections, React 19 islands, TailwindCSS 4, shadcn/ui, Radix UI  
**Storage**: File-based Markdown content in `src/contents/news/`  
**Testing**: Vitest, React Testing Library, Playwright  
**Target Platform**: Static Astro website for desktop and mobile browsers  
**Project Type**: Web application  
**Performance Goals**: Meet Lighthouse Performance >= 90 on mobile; preserve constitution Core Web Vitals targets; keep news routes primarily server-rendered with minimal client JavaScript  
**Constraints**: Must use Astro content collections with content rooted in `src/contents/news/`; must follow existing `en`/`ja` locale model; must handle missing localized variants with an unavailable state that links to index or default-language article; must maintain WCAG 2.1 AA keyboard-accessible navigation and readable mobile typography  
**Scale/Scope**: Small editorial collection of news articles, each with up to 2 localized variants and one index page plus one detail page per published locale/article pair

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Code Quality**: Plan extends existing Astro and i18n patterns, keeps article parsing in content collections, and avoids new runtime services. No violations expected.
- **II. Testing Standards**: Plan requires acceptance coverage before implementation: unit tests for any new content mapping helpers, component tests for any interactive news UI if introduced, and Playwright happy paths for news index and article navigation. No violations expected.
- **III. User Experience Consistency**: Plan keeps layout within existing Astro/Tailwind/shadcn design language, requires accessible empty/unavailable states, and preserves locale-aware navigation. No violations expected.
- **IV. Performance Requirements**: Plan favors static generation from Markdown content collections and avoids unnecessary islands on news routes, aligning with Lighthouse and CWV requirements. No violations expected.

### Post-Design Re-Check

- **I. Code Quality**: `research.md` and `data-model.md` keep content modeling and routing responsibilities separated, with no new complexity requiring exception handling.
- **II. Testing Standards**: `quickstart.md` and the planned test matrix still require test-first coverage across unit and E2E acceptance paths before implementation.
- **III. User Experience Consistency**: `contracts/ui-contract.md` preserves accessible list/detail layouts and consistent unavailable-state behavior within the existing design system.
- **IV. Performance Requirements**: The design keeps articles in Markdown content collections and routes statically generated, so no additional client-side performance risk was introduced.

## Project Structure

### Documentation (this feature)

```text
specs/006-news-pages/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── ui/
│   └── ...
├── contents/
│   ├── citations.yaml
│   └── news/
├── layouts/
├── lib/
│   ├── i18n.ts
│   └── locales/
├── pages/
│   ├── index.astro
│   ├── [lang]/
│   └── ...
└── content.config.ts

tests/
├── components/
└── e2e/
```

**Structure Decision**: Single Astro web application. Content schema changes live in `src/content.config.ts`; Markdown news sources live in `src/contents/news/`; locale-aware index and article pages live under `src/pages/` and `src/pages/[lang]/`; shared formatting and mapping helpers live under `src/lib/` or `src/components/`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
