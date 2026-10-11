# Akshay Hosamani: portfolio

A single-page Business Analyst portfolio in a midnight-violet "SaaS landing" style
(glass KPI cards, animated charts, spotlight cards). Built with Vite, React 19,
TypeScript, Motion for React and Lenis, the same stack as the Irfan and Imran portfolios.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle in dist/
```

## Editing content

All copy is in `src/content/`: `profile.ts` (hero, KPIs, about, links, and the
"Beyond the dashboard" section), `work.ts` (roles, projects, education, certifications)
and `skills.ts` (tools and skill groups). Career facts come only from Akshay's CV; the
Beyond section comes from his public Instagram (@akshhosamani) bio, linked accounts and posts.
The mini-charts on project cards are decorative, not real figures.

## Images

`public/img/` holds images AI-enhanced in Gemini from Akshay's own photos (alt text says so):
`akshay-hero.webp` (professional headshot), `akshay-about.webp` (cropped lifestyle shot)
and `akshay-music.webp` (on stage with his guitar).
