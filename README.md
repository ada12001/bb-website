# Bossy Beulah's — Website

Marketing site for **Bossy Beulah's Chicken Shack**, built with **Astro**. The home page
is a scroll-driven **"Build-a-Beaut"** experience that assembles the sandwich layer by layer
and flows into a horizontal menu rail with a feathered floral wipe between items.

## Stack
- **Astro 5** (static output) · deploy via **Vercel** (connect the GitHub repo)
- Content as typed **content collections** (`src/data/*.json`) — CMS-ready (swap the loader later)
- Design tokens + small component set (no heavyweight framework)

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static build -> dist/
npm run preview   # preview the build
```

## Structure

```
public/
  img/            # sandwich layer PNGs, cutouts, logos, floral patterns
  fonts/          # brand fonts
src/
  styles/
    tokens.css    # design tokens: color, type scale, spacing, motion
    global.css    # reset, @font-face, nav/footer/marquee/buttons
  layouts/Base.astro
  components/      # Nav, Footer, Marquee, PageHeader, BuildABeaut (the scroll engine)
  content.config.ts
  data/            # menu.json, locations.json (typed collections)
  pages/           # index, menu, story, locations, order, catering, careers
00_Brand Assets/   # brand bible, logos, fonts (reference)
```

## Deploy (Vercel)
1. Push to GitHub (`main`).
2. In Vercel: New Project → import `ada12001/bb-website`. Astro is auto-detected
   (build `astro build`, output `dist`).
3. Update `site` in `astro.config.mjs` to the production domain (for canonical URLs + sitemap).

## Known follow-ups
- **Image optimization**: the sandwich layer PNGs are large (4096², 5–9 MB). Convert to
  WebP/AVIF + responsive sizes (big perf/SEO win).
- **Reduced motion**: the scroll engine dampens parallax + disables the floral wash under
  `prefers-reduced-motion`; a fully static fallback layout is still a TODO.
- Wire real data: ordering provider, catering form handler, careers/ATS, location details.
