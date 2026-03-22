# Data Model: News Pages

## Entities

### News Article

- **Purpose**: Canonical article concept that groups all localized variants of the same news update.
- **Attributes**:
  - `slug`: Stable unique identifier used across all locales
  - `availableLocales`: Locales for which a published variant exists
  - `defaultLocale`: Locale used for the canonical fallback destination

### Localized Article Variant

- **Purpose**: A single locale-specific article entry authored in Markdown and published as one route.
- **Attributes**:
  - `slug`: Canonical article slug shared with sibling locales
  - `tag`: Editorial label shown on index and article pages
  - `title`: Display title used on the index and detail page
  - `publishedAt`: Publication date shown to readers
  - `summary`: Short summary shown on the news index
  - `isPublished`: Whether the variant is eligible for listing and route generation
  - `body`: Markdown body content rendered on the detail page

### News Index Entry

- **Purpose**: List-ready projection of a localized article variant for article discovery.
- **Attributes**:
  - `title`: Primary label for the article
  - `publishedAt`: Date shown in the listing
  - `summary`: Preview text for scanability
  - `href`: Link to the localized article route
  - `locale`: Active locale of the list item

### News Availability State

- **Purpose**: Recovery experience shown when a selected locale does not have a published article variant.
- **Attributes**:
  - `requestedSlug`: Article slug requested by the visitor
  - `requestedLocale`: Locale requested by the visitor
  - `defaultLocaleHref`: Link to the default-language article if available
  - `indexHref`: Link back to the localized or default news index
  - `message`: User-facing explanation that the localized version is unavailable

## Relationships

- A **News Article** has one or more **Localized Article Variants**.
- A **Localized Article Variant** produces one **News Index Entry** in its locale-specific news index.
- A **News Availability State** references one **News Article** slug and its recovery destinations.

## Validation Rules

- `slug` must be unique per canonical article and reused consistently across localized variants.
- Locale is derived from the locale directory under `src/contents/news/<locale>/`.
- Published variants must include `title`, `publishedAt`, `summary`, and Markdown body content.
- Each published canonical article must have a default-locale variant.
- Only published variants appear in the news index or receive generated routes.
- When a requested locale variant is unpublished or absent, the route must render the unavailable state rather than silently replacing the content language.

## State Transitions

- `draft` -> `published`: Variant becomes eligible for route generation and listing.
- `published` -> `unpublished`: Variant is removed from generated news listings and direct route resolution falls back to unavailable or not-found handling as appropriate.
