# Data Model: Professional Bio

**Feature**: 001-professional-bio
**Date**: 2026-02-11

## Overview

This is a static site with no database. All data is defined in
TypeScript source files and rendered into HTML at build time or
on page load. The "data model" describes the shape of content
the owner provides.

## Entities

### OwnerProfile

The central identity displayed in the hero section.

| Field           | Type             | Required | Notes                          |
|-----------------|------------------|----------|--------------------------------|
| name            | string           | Yes      | Full display name              |
| title           | string           | Yes      | Professional title/role        |
| bio             | string           | Yes      | 1-3 paragraph introduction     |
| photoUrl        | string           | Yes      | Path to profile image          |
| photoAlt        | string           | Yes      | Alt text for profile image     |

### Skill

A competency displayed in the Skills section, grouped by
category.

| Field    | Type   | Required | Notes                              |
|----------|--------|----------|------------------------------------|
| name     | string | Yes      | e.g., "TypeScript", "Leadership"   |
| category | string | Yes      | e.g., "Languages", "Soft Skills"   |

### ExperienceEntry

A position in the owner's work history.

| Field       | Type           | Required | Notes                         |
|-------------|----------------|----------|-------------------------------|
| role        | string         | Yes      | Job title                     |
| company     | string         | Yes      | Company or organization name  |
| startDate   | string         | Yes      | e.g., "2022-01"               |
| endDate     | string \| null | No       | null means "Present"          |

### Project

A showcase item displayed in the Projects section.

| Field       | Type           | Required | Notes                         |
|-------------|----------------|----------|-------------------------------|
| title       | string         | Yes      | Project name                  |
| description | string         | Yes      | 1-2 sentence summary          |
| url         | string \| null | No       | Link to live demo or source   |

### ContactMethod

A contact/social link displayed as an icon in the page header.

| Field     | Type   | Required | Notes                               |
|-----------|--------|----------|-------------------------------------|
| type      | string | Yes      | "email", "github", "linkedin", etc. |
| label     | string | Yes      | Accessible label for the link       |
| url       | string | Yes      | mailto: link or https:// URL        |
| iconSvg   | string | Yes      | Inline SVG markup for the icon      |

## Relationships

```
OwnerProfile (1)
├── has many Skill
├── has many ExperienceEntry (ordered by startDate desc)
├── has many Project
└── has many ContactMethod (displayed in header)
```

## Validation Rules

- `OwnerProfile.name` MUST NOT be empty.
- `OwnerProfile.title` MUST NOT be empty.
- `OwnerProfile.bio` MUST NOT be empty.
- `OwnerProfile.photoUrl` MUST NOT be empty (photo is required).
- `OwnerProfile.photoAlt` MUST NOT be empty (alt text is required
  per FR-010).
- `ExperienceEntry` items MUST be displayed in reverse
  chronological order (most recent first).
- `Skill` items MUST be grouped by `category`.
- `ContactMethod.url` MUST be a valid URL or mailto: link.
- `ContactMethod` items MUST render as icon links in the header,
  not in a separate body section.

## State

No state transitions. All content is static and read-only.
