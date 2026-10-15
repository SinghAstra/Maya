# Dr. Maya Reynolds, PsyD — Practice Website

A single-page website for an imaginary Santa Monica therapist.

## Tech

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4, styled through a design-token system in `src/app/globals.css`
- Local fonts (Beaufort for headings, Muli for body, a script accent face)

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `src/app` — page, layout, global styles (all color/spacing/typography tokens live in `globals.css`)
- `src/components` — one file per page section, plus small shared pieces (block, cover-image, underline-button, header/nav/menu)
- `src/data` — content and grid placements: nav, expertise, specialties, FAQs
- `src/config/site.ts` — the single source for site name, description, and URL; every link is built from it
