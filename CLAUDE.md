# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Next.js on :3000)
npm run build    # static export → out/
npm start        # serve production build via Express (server.js)
```

There is no test suite. Lint with `npx eslint .` (ESLint 9 flat config in `eslint.config.mjs`).

## Architecture

**Next.js 16 (React 19) — static export.** `next.config.js` sets `output: 'export'` and `trailingSlash: true`. All pages are pre-rendered to `out/` at build time; there are no server components with runtime data-fetching. The Express `server.js` serves the static output in production and handles www→non-www 301 redirects plus legacy URL redirects.

### Key Directories

| Path | Purpose |
|---|---|
| `src/app/` | Next.js App Router pages — each calculator and blog article is its own route directory |
| `src/components/` | Shared UI components (Header, Footer, Card, Button, Input, etc.) |
| `src/context/UnitContext.tsx` | Global metric/imperial toggle; persists to `localStorage` |
| `src/utils/calculators.ts` | Pure calculation logic (BMR/TDEE, weight loss rate, exercise timeline, baby percentiles, pelvic floor) |
| `src/lib/blog-posts.ts` | Static metadata registry for all blog articles |

### Calculator Pattern

Each calculator lives at `src/app/<name>/`. Interactive state lives in a `<Name>Content.tsx` client component (marked `"use client"`); the route's `page.tsx` is a server component that owns `Metadata` and wraps the client component. Unit conversions are handled in components via the `useUnitSystem()` hook from `UnitContext`.

### Blog Pattern

Blog article routes are under `src/app/blog/<slug>/`. Each post has:
- `content.ts` — a typed TS object holding all text, FAQs, related posts, sources, and CTA copy (keeps page.tsx clean).
- `page.tsx` — a server component using `generateMetadata()` (not a static `metadata` export) plus inline Article and FAQPage JSON-LD structured data.

The registry in `src/lib/blog-posts.ts` drives the blog index listing — add the metadata object there when creating a new post.

## Design System

Full spec is in `DESIGN.md`. Key rules:
- **No 1px solid borders** — use background color shifts to delineate sections.
- **Color palette**: background `#F9E4E8`, card surface `#FFFDF9`, accent `#E8A0A8`, text `#3D2C2C`.
- **Fonts**: Noto Serif for headings, Be Vietnam Pro for body, Plus Jakarta Sans available.
- **Inputs**: minimum 48px height, 16px font size (prevents iOS auto-zoom).
- **Buttons**: fully rounded pill shape; primary buttons use a gradient.

## SEO Conventions

- Calculator pages export a static `Metadata` object; blog pages use `generateMetadata()`.
- Every page includes `title`, `description`, `alternates.canonical`, and `openGraph`.
- **Canonical URLs have no trailing slash** (e.g. `canonical: '/blog/some-post'`). The Express server redirects any trailing-slash URL to the non-slash version (301).
- **`<Link>` hrefs use a trailing slash** (e.g. `href="/blog/some-post/"`) so Next.js resolves the static export correctly before the server redirect fires.
- Structured data is injected as `<script type="application/ld+json">` inline in page components, not via a helper.
