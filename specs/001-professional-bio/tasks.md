# Tasks: Professional Bio

**Input**: Design documents from `/specs/001-professional-bio/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are included. The constitution requires boundary testing (Principle II), and the plan specifies Playwright for E2E tests. Existing tests are updated where the contact migration affects them.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

**Note**: Phases 1–5b were completed in a prior iteration. All tasks below reflect the spec update moving contact from a body section to header icons (FR-006).

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization with Vite vanilla-ts template, tooling configuration

- [x] T001 Initialize Vite project with vanilla-ts template, configure package.json scripts (dev, build, preview, lint, format, test) in package.json
- [x] T002 Configure TypeScript strict mode and path settings in tsconfig.json
- [x] T003 [P] Configure ESLint with TypeScript strict rules in eslint.config.js
- [x] T004 [P] Configure Prettier with default settings in .prettierrc
- [x] T005 [P] Configure Playwright for E2E testing in playwright.config.ts
- [x] T006 Create project directory structure: src/styles/, src/components/, tests/e2e/, public/assets/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: CSS foundation and design tokens that ALL user stories depend on

- [x] T007 Create CSS reset with modern defaults in src/styles/reset.css
- [x] T008 [P] Define design tokens (colors, spacing, typography, breakpoints) as CSS custom properties in src/styles/tokens.css
- [x] T009 Create base layout styles (page structure, section spacing, responsive grid) in src/styles/main.css
- [x] T010 Create index.html with semantic HTML skeleton: doctype, head (meta, title, viewport), body with section landmarks, and script/style imports in index.html

**Checkpoint**: Foundation ready — HTML skeleton loads with base styles

---

## Phase 3: User Story 1 — View Professional Bio (Priority: P1) MVP

**Goal**: Visitor sees the owner's name, title, photo, and bio content across all sections. Page is fully responsive and accessible.

**Independent Test**: Load the page and verify the owner's name, title, and photo are visible above the fold; scroll to see About, Skills, Experience, and Projects sections with properly formatted content.

### Implementation for User Story 1

- [x] T011 [US1] Build the Hero section in index.html#hero: add h1 with owner name, professional title subtitle. Style hero layout (centered, full-viewport-height) in src/styles/main.css
- [x] T011a [US1] Enable the profile photo in index.html#hero: uncomment the `<img>` element, set src="/assets/profile.jpg", set alt="Photo of Stuart Ross", set width="160" height="160", add class="hero-photo". Ensure it appears above the h1 inside .hero-content in index.html
- [x] T011b [P] [US1] Add a placeholder profile photo at public/assets/profile.jpg (320x320px JPEG). This is needed until the owner provides their real photo. Can be a solid-color square or generated placeholder.
- [x] T012 [P] [US1] Build the About section in index.html#about
- [x] T013 [P] [US1] Build the Skills section in index.html#skills
- [x] T014 [P] [US1] Build the Experience section in index.html#experience
- [x] T015 [P] [US1] Build the Projects section in index.html#projects
- [x] T016 [US1] Add responsive styles for all content sections in src/styles/main.css
- [x] T017 [US1] Verify WCAG 2.1 AA compliance in index.html and src/styles/main.css

**Checkpoint**: User Story 1 complete — page displays all bio content including photo, is responsive, and accessible. Deployable as MVP.

---

## Phase 4: User Story 2 — Navigate Between Sections (Priority: P2)

**Goal**: Visitor can jump to any section using a navigation menu. Desktop shows persistent nav; mobile shows a toggle menu.

**Independent Test**: Click each navigation link and verify the page scrolls smoothly to the target section. On mobile viewport, open the hamburger menu and verify all links are accessible.

### Implementation for User Story 2

- [x] T018 [US2] Add navigation markup in index.html
- [x] T019 [US2] Style desktop and mobile navigation in src/styles/main.css
- [x] T020 [US2] Implement mobile menu toggle behavior in src/components/nav.ts
- [x] T021 [US2] Implement smooth scroll behavior in src/components/smooth-scroll.ts
- [x] T022 [US2] Wire up nav and smooth-scroll modules in src/main.ts

**Checkpoint**: User Story 2 complete — navigation works on all viewports

---

## Phase 5: User Story 3 — Contact the Owner (Priority: P3)

**Goal**: Visitor finds contact/social icons in the page header with immediate visibility on all viewports.

**Independent Test**: Load the page and verify icon-based contact links are visible in the header, are clickable, and lead to the correct destinations. Hover/focus shows accessible labels.

### Implementation for User Story 3

- [x] T023 [US3] Build the Contact section in index.html#contact (SUPERSEDED by T039)
- [x] T024 [US3] Add a page footer in index.html

### Contact Header Migration (FR-006 update)

- [x] T039 [US3] Add contact icon links to the header in index.html: add a `<div class="header-social">` inside `<header id="hero">` (within `.hero-content`, after the hero title). Include inline SVG icons wrapped in `<a>` tags for email (`mailto:`), GitHub, and LinkedIn. Each link MUST have `aria-label` describing the destination. External links MUST use `target="_blank"` and `rel="noopener noreferrer"`. SVGs MUST use `currentColor` for stroke/fill.
- [x] T040 [P] [US3] Remove the `<section id="contact">` from index.html. This section is replaced by the header icons added in T039.
- [x] T041 [P] [US3] Remove the "Contact" link from the navigation `<ul id="nav-links">` in index.html since there is no longer a Contact section to scroll to.
- [x] T042 [US3] Add styles for `.header-social` in src/styles/main.css: icon sizing (20-24px), horizontal layout with gap, `currentColor` inheritance, hover/focus opacity or color transition, responsive adjustments for mobile. Ensure icons are visually balanced with the hero content.

**Checkpoint**: Contact icons visible in header, old Contact section removed, nav updated

---

## Phase 5b: Dark/Light Mode Toggle (FR-012)

**Goal**: Visitor can switch between dark (default) and light themes. Preference persists across page reloads via localStorage.

**Independent Test**: Load the page in dark mode, click the toggle to switch to light mode, verify colors change. Reload the page and verify light mode persists.

### Implementation for FR-012

- [x] T033 [FR-012] Define dark theme as default `:root` colors and light theme as `:root[data-theme="light"]` overrides in src/styles/tokens.css
- [x] T034 [FR-012] Add theme toggle button with sun/moon SVG icons to nav in index.html
- [x] T035 [FR-012] Add inline `<script>` in index.html `<head>` to apply saved theme before paint (prevents flash of wrong theme)
- [x] T036 [FR-012] Implement theme toggle component with localStorage persistence in src/components/theme-toggle.ts
- [x] T037 [FR-012] Add theme toggle styles (button, icon visibility) in src/styles/main.css
- [x] T038 [FR-012] Wire up initThemeToggle in src/main.ts

**Checkpoint**: Dark/light mode toggle works, persists preference, accessible via keyboard

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Quality, performance, and deployment readiness

- [x] T025 [P] Add favicon and open-graph meta tags in index.html head
- [x] T026 [P] Verify production build works: run npm run build
- [x] T027 Run quickstart.md validation
- [x] T028 [P] Write E2E test: verify all sections render in tests/e2e/sections.spec.ts
- [x] T028a [US1] Update E2E test in tests/e2e/sections.spec.ts: add assertion that the hero section contains a visible `<img>` element with class "hero-photo", non-empty alt text, and valid src attribute. This verifies FR-001a (required photo).
- [x] T029 [P] Write E2E test: verify navigation in tests/e2e/navigation.spec.ts
- [x] T030 [P] Write E2E test: verify responsive layout in tests/e2e/responsive.spec.ts
- [x] T031 [P] Write E2E test: verify accessibility in tests/e2e/accessibility.spec.ts
- [x] T032 Run all E2E tests to confirm photo integration passes: execute `npm test` and verify all tests pass including the new hero photo assertion

### Test Updates for Contact Migration

- [x] T043 [US3] Update E2E test in tests/e2e/sections.spec.ts: remove assertion for `#contact` section. Add assertion that `.header-social` exists in the header and contains at least one `<a>` with an `aria-label` and an `<svg>` child.
- [x] T044 [P] [US3] Update E2E test in tests/e2e/navigation.spec.ts: remove any test for a "Contact" nav link. Verify nav links list does not include "Contact".
- [x] T045 [US3] Run all E2E tests to confirm contact migration passes: execute `npm test` and verify all tests pass.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Complete
- **Foundational (Phase 2)**: Complete
- **User Stories (Phases 3-5)**: Complete except contact migration (T039-T042)
- **Dark/Light Mode (Phase 5b)**: Complete
- **Polish (Phase 6)**: Complete except contact test updates (T043-T045)

### Remaining Task Dependencies

- **T039** (add header icons): No blockers — can start immediately
- **T040** (remove contact section): No blockers — can run in parallel with T039
- **T041** (remove Contact nav link): No blockers — can run in parallel with T039/T040
- **T042** (header-social styles): Depends on T039 (needs the HTML to style)
- **T043** (update sections test): Depends on T039, T040 (needs new HTML structure)
- **T044** (update nav test): Depends on T041 (needs Contact link removed)
- **T045** (run all tests): Depends on T039-T044 (final validation)

### Parallel Opportunities

- T039, T040, T041 can run in parallel (different parts of index.html)
- T042 waits for T039 (styles need the markup)
- T043 + T044 can run in parallel after T039-T042 complete
- T045 runs last (final validation)

---

## Implementation Strategy

### Current State

Phases 1–5b and most of Phase 6 are complete. The project is a
working professional bio page with navigation, responsive layout,
dark/light theme, accessibility, and E2E tests. The remaining
work is migrating contact from a body section to header icons.

### Remaining Work (7 tasks)

1. T039 + T040 + T041 (parallel): Add header icons, remove contact section, remove Contact nav link
2. T042: Style the header social icons
3. T043 + T044 (parallel): Update E2E tests for sections and navigation
4. T045: Run full test suite to validate

### MVP Status

The site is already MVP-complete. The contact migration is a
UX improvement that streamlines the page layout.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story
- Tasks marked [x] were completed in prior iterations
- 7 new tasks (T039-T045) address the spec update moving contact to header icons
- All content lives in index.html — changes are in the header and the removed contact section
- Commit after each task or logical group
