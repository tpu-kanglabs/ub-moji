# Data Model: Fixed Header, Footer Logo, and i18n

## Entities

### Language Preference

- **Fields**: `locale` ("en" or "ja"), `source` (URL path)
- **Rules**: Locale must be one of the supported locales; default is English.
- **Lifecycle**: Determined per route; changes when user selects a different locale.

### Translation Content

- **Fields**: `key`, `value`, `locale`
- **Rules**: Missing values in the selected locale fall back to English.
- **Lifecycle**: Static content loaded per locale; updated only when translation files change.

## Relationships

- Language Preference selects a locale that filters Translation Content for display.
