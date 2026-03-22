# UI Contract: News Pages

## Inputs

- A localized collection of published news article variants for the active locale.
- For each article: title, publication date, short summary, slug, locale, and rendered Markdown body.
- Localized UI copy for page titles, empty states, not-found states, and unavailable-language states.

## Outputs

- A news index page listing article title, publication date, and short summary for each published article in the active locale.
- A news article detail page rendering the full Markdown body for the selected article.
- An unavailable-language state when a requested locale variant does not exist, including links to the news index and default-language article.
- A missing-article state when the requested article slug does not exist.

## Interaction Rules

- Selecting an item from the news index opens the corresponding article detail page.
- Language switching preserves the current article slug when a localized variant exists.
- If the localized variant does not exist, the route shows the unavailable-language state instead of silently swapping to another language.
- News index and detail pages must remain readable and fully navigable on mobile-sized viewports without horizontal scrolling.

## Accessibility Rules

- Article lists, links, headings, and recovery actions must be keyboard reachable.
- Page structure must expose clear heading hierarchy for screen readers.
- Publication date and summary text must remain readable at mobile sizes and meet site contrast requirements.
