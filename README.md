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

All copy is in `src/content/`: `profile.ts` (hero, KPIs, about, links), `work.ts`
(roles, projects, education, certifications) and `skills.ts` (tools and skill groups).
Facts come only from Akshay's CV. The mini-charts on project cards are decorative, not real figures.

## Images

Drop photos into `public/img/` as `akshay-hero.webp` (portrait, roughly 4:5) and
`akshay-about.webp`. Until they exist, the hero shows an "AH" monogram dashboard instead.
