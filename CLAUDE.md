# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal professional bio/portfolio site for Stuart Ross. Static single-page site built with TypeScript + Vite, no frameworks. All content lives in `index.html`; TypeScript handles interactivity (nav, smooth scroll, theme toggle). Dark theme is the default.

## Commands

```bash
npm run dev              # Start Vite dev server (localhost:5173)
npm run build            # Type-check + production build (tsc && vite build)
npm run lint             # ESLint on src/
npm run format:check     # Prettier check
npm run format           # Prettier fix
npm test                 # Run all Playwright e2e tests (starts dev server automatically)
npx playwright test tests/e2e/sections.spec.ts  # Run a single test file
npx playwright test -g "hero displays name"     # Run tests matching a pattern
```

## Architecture

- **`index.html`** — The entire page (all sections: hero, about, skills, experience, projects, footer). This is the single source of content.
- **`src/main.ts`** — Entry point. Imports CSS and initializes three components on DOMContentLoaded.
- **`src/components/`** — Each component exports a single `init*()` function:
  - `nav.ts` — Mobile hamburger menu toggle, close on link click/Escape
  - `smooth-scroll.ts` — Intercepts anchor clicks, scrolls accounting for nav height
  - `theme-toggle.ts` — Dark/light toggle persisted to localStorage; dark is default, light uses `data-theme="light"` on `<html>`
- **`src/styles/tokens.css`** — CSS custom properties (colors, typography, spacing). Light theme overrides via `:root[data-theme="light"]`.
- **`src/styles/main.css`** — All component styles (imports tokens and reset).
- **`tests/e2e/`** — Playwright tests. Dev server starts automatically via `playwright.config.ts` `webServer` config.

## Git Workflow

- **Never commit directly to `main`.** Always create a feature branch for changes.
- Branch naming: use short, descriptive kebab-case names (e.g. `add-media-section`, `fix-nav-bug`).
- When specs exist under `specs/`, update them to reflect any new or changed functionality.

## Code Style

- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
- Prettier: double quotes, semicolons, trailing commas (es5)
- ESLint: `typescript-eslint` strict config
