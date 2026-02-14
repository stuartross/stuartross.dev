# Feature Specification: Professional Bio

**Feature Branch**: `001-professional-bio`
**Created**: 2026-02-08
**Status**: Draft
**Input**: User description: "build a single page web app which I can use as my professional bio"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Professional Bio (Priority: P1)

A visitor lands on the page and immediately sees the site
owner's name, professional title, and a brief personal
introduction. They can scroll down to read more about the
owner's background, skills, and experience without leaving the
page.

**Why this priority**: The core purpose of the site is to
present professional identity at a glance. Without this, the
site has no value.

**Independent Test**: Can be fully tested by loading the page
and verifying that the owner's name, title, and introduction
are visible above the fold, and that scrolling reveals
additional content sections.

**Acceptance Scenarios**:

1. **Given** a visitor loads the page, **When** the page
   finishes loading, **Then** the owner's name, professional
   title, and photo are visible without scrolling.
2. **Given** a visitor is viewing the page, **When** they scroll
   down, **Then** they see sections for About, Skills, and
   Experience in a logical order.
3. **Given** a visitor is on any device (phone, tablet,
   desktop), **When** they view the page, **Then** all content
   is readable and properly laid out for their screen size.

---

### User Story 2 - Navigate Between Sections (Priority: P2)

A visitor wants to jump directly to a specific section (e.g.,
Projects or Contact) without scrolling through the entire page.
They use a navigation menu to move between sections smoothly.

**Why this priority**: Navigation enhances usability on longer
pages, but the bio is still useful without it — visitors can
simply scroll.

**Independent Test**: Can be tested by clicking each navigation
link and verifying the page scrolls smoothly to the
corresponding section.

**Acceptance Scenarios**:

1. **Given** a visitor is at the top of the page, **When** they
   click a navigation link (e.g., "Projects"), **Then** the page
   scrolls smoothly to the Projects section.
2. **Given** a visitor is on a mobile device, **When** they open
   the navigation menu, **Then** all section links are accessible
   and tappable.
3. **Given** a visitor has scrolled to any section, **When** they
   click a different navigation link, **Then** the page scrolls
   to that section without a full page reload.

---

### User Story 3 - Contact the Owner (Priority: P3)

A visitor wants to get in touch or find the owner on social
platforms. Contact links are displayed as recognisable icons in
the page header, making them immediately visible on every
viewport without scrolling to a separate section.

**Why this priority**: Contact is important for converting
interest into opportunity. Placing links in the header ensures
they are discoverable within seconds of landing on the page.

**Independent Test**: Can be tested by loading the page and
verifying that icon-based contact links are visible in the
header, are clickable, and lead to the correct destinations.

**Acceptance Scenarios**:

1. **Given** a visitor loads the page, **When** the header is
   visible, **Then** they see icon links for each configured
   contact method (e.g., email, LinkedIn, GitHub).
2. **Given** a visitor clicks an email icon, **When** their
   email client opens, **Then** the recipient address is
   pre-filled.
3. **Given** a visitor is on a mobile device, **When** they tap
   a social media icon, **Then** it opens in the appropriate app
   or browser tab.
4. **Given** a visitor hovers over or focuses a contact icon,
   **When** they do so, **Then** they see a tooltip or
   accessible label identifying the link target.

---

### Edge Cases

- What happens when a visitor has JavaScript disabled? Core
  content (text, images) MUST still be visible.
- How does the page look when viewed on very narrow screens
  (below 320px)? Content MUST remain readable without
  horizontal scrolling.
- What happens if an image fails to load? An appropriate
  fallback (alt text or placeholder) MUST be displayed.
- How does the page appear in high-contrast or reader modes?
  Content MUST remain legible.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The page MUST display the owner's full name and
  professional title prominently at the top.
- **FR-001a**: The page MUST display the owner's photo
  prominently in the hero/header area alongside their name and
  title.
- **FR-002**: The page MUST include an "About" section with a
  brief personal and professional introduction.
- **FR-003**: The page MUST include a "Skills" section listing
  the owner's key competencies grouped by category.
- **FR-004**: The page MUST include an "Experience" section
  showing the owner's work history with role titles, company
  names, and date ranges.
- **FR-005**: The page MUST include a "Projects" section
  showcasing selected work with brief descriptions.
- **FR-006**: The page header MUST display contact and social
  links as recognisable icons (e.g., email, LinkedIn, GitHub)
  instead of a separate Contact section in the main body.
- **FR-007**: The page MUST include a navigation mechanism that
  allows visitors to jump to any section.
- **FR-008**: The page MUST be fully responsive across mobile
  phones, tablets, and desktops.
- **FR-009**: The page MUST load as a single page with no
  additional page navigations required.
- **FR-010**: All images MUST include descriptive alt text for
  accessibility.
- **FR-011**: The page MUST meet WCAG 2.1 Level AA accessibility
  standards for color contrast and keyboard navigation.
- **FR-012**: The page MUST provide a dark/light mode toggle that
  allows visitors to switch between a dark theme (default) and a
  light theme.
- **FR-012a**: The selected theme MUST persist across page reloads
  using localStorage.
- **FR-012b**: The toggle MUST be accessible via keyboard and
  include an appropriate aria-label indicating the action it will
  perform (e.g., "Switch to light mode").
- **FR-013**: The page MUST include a "Media & Speaking" section
  after Projects showcasing the owner's external appearances
  (video case studies, conference talks, written case studies)
  with a type badge, title, description, and external link for
  each item.
- **FR-014**: The page MUST include an Open Graph image meta tag
  for social media link previews.
- **FR-015**: The page MUST use a custom SVG favicon displaying
  the owner's initials.
- **FR-016**: The page MUST include a JSON-LD structured data
  block using the schema.org Person type, containing the owner's
  name, job title, employer, site URL, profile image, social
  profile links, and areas of expertise.

### Key Entities

- **Owner Profile**: The central entity — includes name,
  professional title, bio text, and photo.
- **Skill**: A competency the owner possesses — includes name
  and category (e.g., "Languages", "Tools", "Soft Skills").
- **Experience Entry**: A position in the owner's work history
  — includes role title, company name, start date, end date
  (or "Present"), and brief description.
- **Project**: A showcase item — includes title, brief
  description, and optional link to live demo or source.
- **Media Item**: A public-facing appearance — includes type
  (video, talk, case study), title, brief description, and
  external link to the resource.
- **Contact Method**: A way to reach the owner — includes type
  (email, social link), value (address, URL), and an associated
  icon displayed in the header.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Page fully loads and displays all content within
  3 seconds on a standard broadband connection.
- **SC-002**: All content is readable and properly laid out on
  screens from 320px to 2560px wide.
- **SC-003**: A first-time visitor can locate contact
  information within 10 seconds of landing on the page.
- **SC-004**: The page scores 90 or above on Lighthouse
  accessibility audit.
- **SC-005**: All navigation links correctly scroll to their
  target sections within 1 second of being clicked.

## Assumptions

- The owner will provide their own content (name, bio text,
  experience entries, skills, project descriptions, contact
  details) to populate the page.
- No authentication or content management system is needed —
  the content is static and updated by editing source files
  directly.
- New Relic Browser (SPA agent) is used for real user monitoring.
- The site will be hosted on a static hosting provider (e.g.,
  GitHub Pages, Netlify, Vercel) — no server-side processing
  is needed.
- The owner will provide a professional photo for the
  hero/header area.
