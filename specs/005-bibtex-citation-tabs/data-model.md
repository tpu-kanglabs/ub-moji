# Data Model: BibTeX Citation Section

## Entities

### Citation Section

- **Purpose**: UI container for presenting and copying BibTeX entries.
- **Attributes**:
  - `entries`: Two BibTeX entries (Paper, Dataset)
  - `activeTab`: Which entry is currently selected

### BibTeX Entry

- **Purpose**: Citation text block for copy and display.
- **Attributes**:
  - `label`: "Paper" or "Dataset"
  - `content`: BibTeX text content
  - `placeholder`: Placeholder text shown when content is missing

### Tab

- **Purpose**: Selection control mapped 1:1 to a BibTeX entry.
- **Attributes**:
  - `label`: Matches entry label
  - `isActive`: Whether the entry is currently selected

## Relationships

- Citation Section **contains** exactly two BibTeX Entries.
- Each Tab **maps to** one BibTeX Entry.

## Validation Rules

- Exactly two entries are required and labeled "Paper" and "Dataset".
- When entry content is missing, the placeholder is displayed and remains copyable.
