# Research: Professional Bio SPA

**Feature**: 001-professional-bio
**Date**: 2026-02-11

## 1. Build Tool

**Decision**: Vite with the `vanilla-ts` template

**Rationale**: `npm create vite@latest -- --template vanilla-ts`
produces a working TypeScript project with zero manual
configuration. Provides native ES module dev server, HMR,
TypeScript transpilation via esbuild, and optimized production
bundle via Rollup — all out of the box. The `dist/` folder is
static files ready for any static host.

**Alternatives considered**:
- `tsc` + esbuild/Rollup: Works but requires manual wiring of
  dev server, watch mode, and asset handling.
- Parcel: Zero-config but less community momentum.
- webpack: Complex configuration, overkill for a simple page.
- Astro: Good for content sites but introduces `.astro` DSL,
  heavier for a single-page site.

## 2. Framework

**Decision**: Vanilla TypeScript — no framework

**Rationale**: The page has only three interactive behaviors:
smooth-scroll navigation, a mobile menu toggle, and a theme
toggle. A framework like React adds ~140 KB for three DOM
interactions. Vanilla TypeScript directly manipulates the DOM
with fewer dependencies, faster installs, and a simpler mental
model. Aligns with Constitution Principle I (Simplicity First).

**Alternatives considered**:
- React: Industry standard but significant overhead for three
  interactive behaviors.
- Svelte: Near-zero runtime after compilation, but adds a
  compiler step and new syntax.
- Vue: Similar tradeoff to React.

## 3. CSS Approach

**Decision**: Vanilla CSS with CSS custom properties

**Rationale**: Zero additional tooling. A single page with six
sections is well-served by organized plain CSS. Modern CSS
features (Grid, Flexbox, `clamp()`, custom properties) handle
all layout and responsive needs without preprocessing.

**Alternatives considered**:
- Tailwind CSS v4: Requires PostCSS + config + build watcher.
  Disproportionate complexity for a static page.
- CSS Modules: Solve class-name collisions in component-heavy
  apps; irrelevant here.
- Sass/SCSS: Adds a preprocessor for features modern CSS
  handles natively.

## 4. Testing

**Decision**: Playwright

**Rationale**: For boundary testing of a static page (sections
render, navigation works, responsive breakpoints, accessibility
audit), Playwright provides built-in accessibility testing,
native multi-browser support (Chromium, Firefox, WebKit), and
fast parallel execution.

**Alternatives considered**:
- Cypress: Good DX but more limited browser support and no
  first-class mobile viewport testing.
- Vitest: Unit testing only, not suitable for rendered-page
  boundary testing.
- Jest + jsdom: Simulates DOM but misses visual/layout/
  accessibility issues.

## 5. Project Structure

**Decision**: Single project layout with content in `index.html`

```
src/
├── main.ts              # Entry: wires up interactivity
├── styles/
│   ├── reset.css        # Minimal CSS reset
│   ├── tokens.css       # Custom properties (colors, spacing)
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

**Rationale**: `index.html` at root is Vite's default; all
semantic HTML lives there directly. `src/` holds TypeScript and
CSS only. CSS split into reset/tokens/main avoids one monolith
while staying trivial to manage. `components/` holds thin
modules for three interactive behaviors.

## 6. Profile Photo

**Decision**: Required JPEG at `public/assets/profile.jpg`,
displayed as a 160px circular image in the hero section with
2x source resolution (320x320px).

**Rationale**: The spec requires the photo (FR-001a). JPEG is
universally supported and produces small file sizes for
photographic content. A single 2x image covers standard and
high-DPI displays without `srcset` complexity. CSS
`object-fit: cover` with `border-radius: 50%` handles circular
cropping. Explicit `width` and `height` attributes prevent
layout shift (CLS).

**Alternatives considered**:
- WebP with JPEG fallback: Adds `<picture>` element complexity
  for minimal gain on one image. Rejected per Simplicity First.
- `srcset` with multiple resolutions: Unnecessary complexity
  for a single profile photo. Rejected per Simplicity First.
- CSS `background-image`: Loses semantic `alt` text for
  accessibility. Rejected per FR-010 and FR-011.

**Fallback**: Descriptive `alt` text (`"Photo of Stuart Ross"`)
is displayed natively by the browser if the image fails to load.
No JS-based fallback needed per Simplicity First.

## 7. Contact Icons in Header

**Decision**: Inline SVG icons in the header for email,
LinkedIn, and GitHub — no icon library.

**Rationale**: The spec (FR-006) requires contact links as
recognisable icons in the page header. Inline SVGs are the
simplest approach:
- Zero external dependencies (no icon font, no sprite sheet,
  no npm package).
- Full CSS control for color via `currentColor` and sizing.
- Each icon is a small `<svg>` element (~200 bytes) wrapped in
  an `<a>` tag with `aria-label` for accessibility.
- Icons inherit the current text color, so they automatically
  adapt to dark/light theme via CSS custom properties.
- Tooltips via the `title` attribute inside the SVG provide
  hover labels.

**Alternatives considered**:
- Font Awesome / Lucide icon library: Adds a dependency for 3
  icons. Rejected per Simplicity First.
- CSS background images: Loses `currentColor` theming and
  requires separate dark/light versions. Rejected.
- Emoji characters: Not consistently rendered across platforms,
  lack professional appearance. Rejected.
- Icon sprite sheet: Over-engineered for 3 icons. Rejected per
  Simplicity First.

**Icons selected** (Feather icon paths — MIT licensed):
- **Email**: Envelope icon (`<rect>` + `<polyline>`)
- **GitHub**: GitHub mark (`<path>`)
- **LinkedIn**: LinkedIn mark (`<path>`)

## Technology Stack Summary

| Concern            | Choice                           |
|--------------------|----------------------------------|
| Build tool         | Vite (`vanilla-ts` template)     |
| Framework          | None — vanilla TypeScript        |
| CSS                | Vanilla CSS + custom properties  |
| Testing            | Playwright                       |
| Package manager    | npm                              |
| Linting/formatting | ESLint + Prettier                |
| TypeScript         | Strict mode                      |
| Contact icons      | Inline SVGs (no library)         |
