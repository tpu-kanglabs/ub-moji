# Feature Specification: News Pages

**Feature Branch**: `006-news-pages`  
**Created**: 2026-03-22  
**Status**: Draft  
**Input**: User description: "006です。i18nやモバイルに対応したnewsページを追加します。マークダウンで各newsを書き、それがきれいに表示されます。記事一覧ページと各記事のページが必要です。"

## Clarifications

### Session 2026-03-22

- Q: How should the site handle an article that is missing in the selected language? → A: Show that the localized version is unavailable and guide the visitor back to the news index or the default-language version.
- Q: Which article metadata must always appear in the news index? → A: Title, publication date, and a short summary.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse News Articles (Priority: P1)

As a site visitor, I want to open a dedicated news index and scan available articles so I can quickly find recent updates.

**Why this priority**: The article list is the entry point to the feature and is required before any individual news content can be discovered.

**Independent Test**: Can be fully tested by opening the news index, confirming multiple articles are listed with enough summary information to choose one, and navigating to an article detail page.

**Acceptance Scenarios**:

1. **Given** published news articles exist, **When** a visitor opens the news index page, **Then** the page shows a scannable list of articles with each item displaying its title, publication date, and short summary.
2. **Given** a visitor is viewing the news index page, **When** the visitor selects an article, **Then** the corresponding article detail page opens.

---

### User Story 2 - Read a News Article in the Selected Language (Priority: P2)

As a site visitor, I want each news article to be available in the active site language so I can read updates without switching away from my preferred language.

**Why this priority**: Internationalized content is a stated requirement and is central to making the news section useful for the site’s audience.

**Independent Test**: Can be fully tested by opening the same article in each supported language and confirming the article page reflects the active language with consistent article structure.

**Acceptance Scenarios**:

1. **Given** a visitor is using one supported site language, **When** the visitor opens the news index or an article detail page, **Then** navigational text and article metadata appear in that language.
2. **Given** localized content exists for an article, **When** the visitor changes to another supported language, **Then** the visitor can access the corresponding localized version of that article.
3. **Given** a visitor selects a language for which an article has no localized variant, **When** the visitor opens that article, **Then** the page clearly states that the localized version is unavailable and offers navigation to the news index or the default-language version.

---

### User Story 3 - Read News Comfortably on Mobile (Priority: P3)

As a mobile visitor, I want the news list and article pages to adapt cleanly to a small screen so I can read updates without zooming, horizontal scrolling, or losing context.

**Why this priority**: Mobile support is explicitly required and directly affects readability for a large share of visitors.

**Independent Test**: Can be fully tested by viewing the news index and article detail pages on a small-screen device and confirming content remains readable, navigable, and visually coherent.

**Acceptance Scenarios**:

1. **Given** a visitor opens the news index on a mobile-sized viewport, **When** the page loads, **Then** the list remains readable and fully navigable without horizontal scrolling.
2. **Given** a visitor opens an article detail page on a mobile-sized viewport, **When** the article content is displayed, **Then** headings, paragraphs, images, lists, and links remain readable and visually organized.

---

### Edge Cases

- What happens when the news index has no published articles yet?
- What happens when a visitor opens a direct link to an article that does not exist?
- What happens when an article is available in one supported language but not another (show unavailable state and guide the visitor to the index or default-language version)?
- How does long-form Markdown content with images, lists, code blocks, or quotations behave on narrow screens?
- What happens when article metadata such as publication date or summary is missing from a published article?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a dedicated news index page that lists all published news articles.
- **FR-002**: System MUST provide a dedicated detail page for each published news article.
- **FR-003**: System MUST allow visitors to navigate from the news index page to an individual news article detail page.
- **FR-004**: System MUST present each news article using content authored in Markdown while preserving clear visual hierarchy for headings, paragraphs, lists, links, quotations, images, and other supported rich-text elements.
- **FR-005**: System MUST display the article title, publication date, and short summary for each news index entry so visitors can distinguish between articles before opening one.
- **FR-006**: System MUST support the same set of site languages on the news index and article detail pages as the rest of the site.
- **FR-007**: System MUST display localized page text and article metadata according to the visitor’s active site language.
- **FR-008**: System MUST provide localized article content when that content exists for the selected language.
- **FR-009**: System MUST clearly handle missing or unavailable articles so visitors are informed and can continue navigating the site.
- **FR-010**: System MUST clearly handle cases where a localized article variant is unavailable for the selected language by stating that the localized version is unavailable and offering navigation to the news index or the default-language version.
- **FR-011**: System MUST keep the news index and article detail pages fully usable and readable on mobile-sized screens.
- **FR-012**: System MUST render the news index and article detail pages with a polished presentation consistent with the site’s overall quality level.

### Key Entities *(include if feature involves data)*

- **News Article**: A published update with a title, body content, publication date, short summary, and unique page destination.
- **Localized Article Variant**: A language-specific presentation of a news article’s text content and metadata.
- **News Index Entry**: A summary representation of a news article shown in the article list to support discovery and navigation.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 95% of visitors can reach a news article detail page from the news index in 2 interactions or fewer.
- **SC-002**: 90% of test readers can identify the correct article from the news index within 10 seconds based on the displayed metadata and summaries.
- **SC-003**: 95% of test readers can complete reading and navigation tasks on a mobile-sized screen without horizontal scrolling or layout breakage.
- **SC-004**: 95% of published news articles display their full formatted content without missing rich-text sections or broken reading order.
- **SC-005**: In content review, 100% of supported-language news pages show navigation text and article metadata in the active language.

## Assumptions

- Published news content is managed by site maintainers and is available as Markdown source files.
- The news feature follows the site’s existing language set and language-switching behavior.
- Each published article has a unique title and page destination.
- When a localized article variant is unavailable, the experience should guide the visitor rather than fail silently.
