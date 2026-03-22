# Research: News Pages

## Decision 1: Use an Astro content collection rooted in `src/contents/news/`

- **Decision**: Define a `news` content collection in `src/content.config.ts` and store article Markdown files under `src/contents/news/`.
- **Rationale**: This matches the requested authoring workflow, keeps editorial content file-based, and lets Astro validate frontmatter while statically generating routes from content.
- **Alternatives considered**:
  - Extend a YAML file similar to citations: rejected because long-form articles are better authored and reviewed as Markdown documents.
  - Store article copy in locale JSON files: rejected because it does not scale well for long-form content or rich-text formatting.

## Decision 2: Model localized articles as separate locale-specific entries sharing one article slug

- **Decision**: Treat each localized article as its own content entry with explicit locale metadata and a shared canonical article slug.
- **Rationale**: This keeps locale availability explicit, supports routing and fallback decisions without hidden coupling, and makes it straightforward to detect missing localized variants.
- **Alternatives considered**:
  - Put all locale bodies into a single entry: rejected because per-locale Markdown authoring becomes awkward and harder to validate.
  - Infer locale only from file paths without schema metadata: rejected because missing or malformed content becomes harder to detect reliably.

## Decision 3: Reuse the existing locale-prefixed routing model

- **Decision**: Follow the current site pattern where the default locale serves non-prefixed routes and non-default locales serve prefixed routes under `[lang]`.
- **Rationale**: The site already uses this convention for the home page and language switching, so reusing it minimizes navigation surprises and preserves consistency.
- **Alternatives considered**:
  - Prefix every locale including the default locale: rejected because it would diverge from the existing route model.
  - Use query parameters for locale selection: rejected because it conflicts with the current pathname-based locale system.

## Decision 4: Show an unavailable-state page when the selected locale variant does not exist

- **Decision**: If a localized article variant is missing, render a clear unavailable state with navigation to the news index and the default-language article.
- **Rationale**: This reflects the clarified spec decision, avoids silently swapping languages, and gives visitors a predictable recovery path.
- **Alternatives considered**:
  - Automatically show the default-language article in place: rejected because it obscures the active locale and weakens acceptance testing.
  - Hide unavailable articles entirely from localized routes: rejected because direct links would fail without explanation.

## Decision 5: Keep news pages mostly static and server-rendered

- **Decision**: Render the news index and article bodies through Astro on the server/static build path, introducing a client island only if a clearly necessary interactive control emerges.
- **Rationale**: News content is content-heavy and read-mostly, so server rendering best aligns with the constitution’s performance requirements.
- **Alternatives considered**:
  - Build the news experience as a React-heavy island: rejected because it adds client JavaScript without corresponding user value.

## Decision 6: Treat article metadata as required editorial fields

- **Decision**: Require each published article variant to provide title, publication date, short summary, locale, canonical slug, and publication status.
- **Rationale**: These fields map directly to the spec’s discovery, localization, and routing requirements, and they make index rendering deterministic.
- **Alternatives considered**:
  - Allow partially filled metadata and patch it in code: rejected because it weakens content validation and creates unpredictable output.
