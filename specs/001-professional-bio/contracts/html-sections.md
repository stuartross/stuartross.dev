# HTML Section Contracts: Professional Bio

**Feature**: 001-professional-bio
**Date**: 2026-02-11

## Overview

This is a static site with no API. Instead of REST endpoints,
the "contracts" define the expected HTML section structure that
tests validate against.

## Section: Navigation

**Element**: `<nav>` with `role="navigation"`
**ID**: `#main-nav`

Expected structure:
- MUST contain links to page sections (About, Skills,
  Experience, Projects).
- MUST NOT contain a "Contact" link (contact is in the header
  icons, not a body section).
- MUST be visible on desktop viewports (>= 768px).
- MUST provide a toggle button on mobile viewports (< 768px).
- Toggle button MUST have `aria-expanded` attribute.
- Links MUST use `href="#section-id"` anchors.

## Section: Hero

**Element**: `<header>` or `<section>`
**ID**: `#hero`

Expected content:
- MUST display owner's full name in an `<h1>` element.
- MUST display professional title.
- MUST display a profile photo with alt text.
- MUST be visible above the fold on standard viewports.

## Section: Header Contact Icons

**Element**: `<div>` or `<ul>` within `<header>` or `<nav>`
**Class**: `.header-social`

Expected content:
- MUST contain icon links for each configured contact method.
- Each link MUST wrap an inline `<svg>` element.
- Each link MUST have an `aria-label` describing the
  destination (e.g., "Email", "GitHub", "LinkedIn").
- Email links MUST use `mailto:` protocol.
- External links MUST open in new tab (`target="_blank"`)
  with `rel="noopener noreferrer"`.
- Icons MUST use `currentColor` for stroke/fill so they
  adapt to the active theme (dark/light).
- Icons MUST be keyboard-focusable and show visible focus
  styles.

## Section: About

**Element**: `<section>`
**ID**: `#about`

Expected content:
- MUST have a heading (`<h2>`).
- MUST contain the owner's bio text.

## Section: Skills

**Element**: `<section>`
**ID**: `#skills`

Expected content:
- MUST have a heading (`<h2>`).
- MUST group skills by category.
- Each category MUST have a visible label.

## Section: Experience

**Element**: `<section>`
**ID**: `#experience`

Expected content:
- MUST have a heading (`<h2>`).
- Each entry MUST display: role, company, date range.
- Entries MUST appear in reverse chronological order.
- Current positions MUST display "Present" for end date.

## Section: Projects

**Element**: `<section>`
**ID**: `#projects`

Expected content:
- MUST have a heading (`<h2>`).
- Each project MUST display: title, description.
- Projects with URLs MUST render as clickable links.

## Accessibility Contract

All sections:
- MUST have appropriate ARIA landmarks.
- Color contrast MUST meet WCAG 2.1 AA (4.5:1 for normal
  text, 3:1 for large text).
- All interactive elements MUST be keyboard-focusable.
- Focus order MUST follow visual reading order.
- All images MUST have descriptive alt text.
- Header contact icons MUST have `aria-label` attributes.
