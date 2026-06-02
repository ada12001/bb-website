# Bossy Beulah's — Website Prototype

A scroll-driven concept site for **Bossy Beulah's Chicken Shack**, built around a signature
**"Build-a-Beaut"** hero and a horizontal **menu rail**.

## The experience

1. **Build-a-Beaut hero** — as you scroll, the sandwich assembles itself layer by layer
   (bun → chicken → pickles → Duke's mayo → top bun), each layer dropping in with its own
   contact shadow. A big kinetic ingredient word sits behind it (BUN · CHICKEN · PICKLES ·
   DUKE'S MAYO · THE BEAUT), and a "Building the Beaut" checklist ticks off each step.
2. **Menu rail** — once built, the Beaut slides out left and the menu scrolls horizontally
   through **The Cheesy Beaut** and the **Hot Thigh Sandwich**, each floating on its own
   brand-color panel (cream · mint · coral) with the big name behind it.
3. **Floral transition** — between items, a subtle, feathered wash of the brand rose
   pattern drifts across the swap.

All motion is scroll-driven (a single pinned stage), using the real brand fonts, logo,
colors, and the layered sandwich renders.

## Run it

It's a static page — serve the repo root with any static server:

```bash
python3 -m http.server 8137
# open http://localhost:8137
```

Live version (GitHub Pages): https://ada12001.github.io/bb-website/

## Structure

```
index.html              # the whole prototype (HTML + CSS + JS inline)
assets/
  img/                  # layered sandwich PNGs, sandwich cutouts, logos, floral patterns
  fonts/                # brand fonts (DIN Round, Milkstore, Palm Canyon, Palmer Lake)
00_Brand Assets/        # brand bible, logos, fonts (reference)
```

> Prototype — work in progress.
