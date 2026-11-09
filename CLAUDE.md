# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Implementation

- Follow established best practices and idiomatic patterns for the language/library in use.
- Apply DRY (no duplicated logic, config, or source of truth) and low coupling. Favor composition over inheritance and the simplest design that satisfies current requirements (YAGNI). These principles matter on every change, not only when explicitly requested.
- Reuse existing components and conventions. Avoid unnecessary dependencies, abstractions, and unrelated changes.
- Prefer static rendering over client-side JavaScript unless interactivity is required.

## Content and Localization

- Maintain scientific accuracy in dataset descriptions, statistics, citations, and release information. Never invent or assume facts.
- Keep English and Japanese content consistent, using natural phrasing in each language.
- Preserve accessibility, responsive behavior, and locale-aware navigation.

## Verification

- Run relevant checks and tests after changes.
- Add or update tests when behavior changes.
- Report any verification that could not be completed.

## Git Workflow

- Follow the Conventional Commits specification for commit messages.
- Keep commits focused and logically organized.
- Create separate pull requests for distinct scopes of work. Each PR should represent a single coherent change.
- Avoid mixing unrelated features, fixes, or refactoring in the same PR.
