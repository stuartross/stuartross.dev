# Quickstart: Professional Bio

**Feature**: 001-professional-bio
**Date**: 2026-02-08

## Prerequisites

- Node.js 20.x or later (LTS)
- npm

## Setup

```bash
# Clone and enter the project
git clone <repo-url>
cd claude-01

# Install dependencies
npm install
```

## Development

```bash
# Start dev server with hot reload
npm run dev
```

Open the URL shown in the terminal (typically
`http://localhost:5173`).

## Editing Content

All page content lives in `index.html`. Edit the HTML directly
to update your name, bio, skills, experience, and projects.

### Profile Photo

Place your professional photo at `public/assets/profile.jpg`.
Recommended size: 320x320px (displayed at 160px, 2x for retina).
The photo is required and will appear as a circular image in the
hero section.

## Build for Production

```bash
# Create optimized static build
npm run build

# Preview the production build locally
npm run preview
```

The output is in `dist/` — deploy this folder to any static
host (GitHub Pages, Netlify, Vercel).

## Linting & Formatting

```bash
# Run ESLint
npm run lint

# Run Prettier
npm run format
```

## Testing

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run end-to-end tests
npm run test

# Run tests with UI
npm run test:ui
```

## Project Structure

```
├── index.html           # All page content (single page)
├── public/              # Static assets (favicon, images)
├── src/
│   ├── main.ts          # Entry: interactive behaviors
│   ├── data.ts          # Content data (optional)
│   ├── styles/
│   │   ├── reset.css    # CSS reset
│   │   ├── tokens.css   # Design tokens (colors, spacing)
│   │   └── main.css     # Section styles and layout
│   └── components/
│       ├── nav.ts       # Mobile menu toggle
│       └── smooth-scroll.ts  # Smooth scroll handler
├── tests/
│   └── e2e/             # Playwright tests
├── tsconfig.json
├── vite.config.ts
├── playwright.config.ts
└── package.json
```

## Deployment

Deploy the `dist/` folder after running `npm run build`.

For GitHub Pages:
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

For Netlify/Vercel: Connect the repository and set:
- Build command: `npm run build`
- Output directory: `dist`
