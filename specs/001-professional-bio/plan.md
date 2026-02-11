# Implementation Plan: Professional Bio

**Branch**: `001-professional-bio` | **Date**: 2026-02-11 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-professional-bio/spec.md`

## Summary

Single-page professional bio site built with Vite + vanilla
TypeScript. Content is static HTML styled with vanilla CSS and
custom properties. Interactive behaviors: smooth-scroll
navigation, mobile menu toggle, dark/light theme toggle.
Contact links are displayed as inline SVG icons in the page
header rather than in a separate body section, ensuring
immediate visibility on all viewports.

## Technical Context

**Language/Version**: TypeScript 5.9 (strict mode)
**Primary Dependencies**: Vite 7.x (build/dev)
**Storage**: N/A — static site, no server-side storage
**Testing**: Playwright 1.52 (E2E boundary tests)
**Target Platform**: Static web — any modern browser
**Project Type**: Single project
**Performance Goals**: Page load < 3 seconds on broadband
**Constraints**: WCAG 2.1 AA, responsive 320px–2560px
**Scale/Scope**: Single page, ~8 content sections

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I — Simplicity First

- **No framework**: Vanilla TypeScript for 3 interactive
  behaviors (nav toggle, smooth scroll, theme toggle). PASS
- **No CSS preprocessor**: Vanilla CSS with custom properties.
  PASS
- **Icons**: Inline SVGs directly in HTML — no icon library
  dependency. PASS
- **Contact in header**: Removes an entire section, reducing
  page structure. Net simplification. PASS

### Principle II — Test at Boundaries

- **E2E tests**: Playwright tests validate rendered HTML
  sections, navigation, responsiveness, and accessibility. PASS
- **No unit tests on internals**: Components are thin wiring
  modules; boundary tests cover user-facing behavior. PASS
- **Contact tests**: Updated to verify icons render in header
  rather than a standalone section. PASS

### Principle III — Ship Incrementally

- **Phases 1–5b complete**: Site is deployed and working.
- **Contact header migration**: Single incremental change —
  remove body section, add icons to header, update nav links
  and tests. PASS

**Gate result**: PASS — no violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-professional-bio/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── main.ts              # Entry: wires up interactivity
├── styles/
│   ├── reset.css        # Minimal CSS reset
│   ├── tokens.css       # Design tokens (colors, spacing)
│   └── main.css         # Section styles, layout, responsive
└── components/
    ├── nav.ts           # Mobile menu toggle
    ├── smooth-scroll.ts # Smooth scroll handler
    └── theme-toggle.ts  # Dark/light mode toggle

tests/
└── e2e/
    ├── sections.spec.ts
    ├── navigation.spec.ts
    ├── accessibility.spec.ts
    └── responsive.spec.ts
```

**Structure Decision**: Single project layout. All content in
`index.html`. TypeScript and CSS in `src/`. E2E tests in
`tests/e2e/`. No new files needed for the contact-to-header
migration — changes are in `index.html` and `src/styles/main.css`.

## Complexity Tracking

No violations to justify.
