# stuartross.dev

Personal professional bio and portfolio site for Stuart Ross.

## Tech Stack

- **TypeScript** + **Vite** — no frameworks
- **Playwright** — end-to-end tests
- **ESLint** + **Prettier** — linting and formatting

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start Vite dev server              |
| `npm run build`      | Type-check + production build      |
| `npm run lint`       | Run ESLint                         |
| `npm run format`     | Format with Prettier               |
| `npm run format:check` | Check formatting                 |
| `npm test`           | Run Playwright e2e tests           |

## Project Structure

```
index.html          # Single-page content (hero, about, skills, experience, projects)
src/
  main.ts           # Entry point
  components/       # nav, smooth-scroll, theme-toggle
  styles/           # CSS tokens and main stylesheet
tests/e2e/          # Playwright tests
```
