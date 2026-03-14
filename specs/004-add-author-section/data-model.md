# Data Model: Add Author Section

## Entities

### Author

- **Fields**:
  - `name` (string, required)
  - `affiliationFaculty` (string, optional)
  - `affiliationUniversity` (string, optional)

- **Validation Rules**:
  - `name` must be present and non-empty.
  - If affiliation is provided, at least one of `affiliationFaculty` or `affiliationUniversity` must be present.

### AuthorList

- **Fields**:
  - `authors` (ordered list of `Author`, required)

- **Validation Rules**:
  - `authors` must contain at least one entry.

## Relationships

- `AuthorList` contains many `Author` entries in a defined display order.

## State Transitions

- None (static content).
