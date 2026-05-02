# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Two active artifacts: the Alphabond website (React+Vite) and the API server (Express).

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

---

## Alphabond Website (`artifacts/alphabond-website`)

**Kishan Enterprise — Alphabond™**
ISO-certified construction chemicals and industrial sand manufacturer. Bharuch & Surat, Gujarat. Since 2008.

### Tech stack
- React + Vite + TypeScript + Tailwind CSS
- Primary colour: `#010ED0`
- Fonts: Space Grotesk (display) + Inter
- PDF brochure: `@react-pdf/renderer`
- Routing: `wouter`

### Key files
| File | Purpose |
|------|---------|
| `src/pages/Home.tsx` | Full single-page site — hero, products, sectors, clients, contact |
| `src/pages/Blog.tsx` | Blog listing + detail page (uses wouter route) |
| `src/pages/BlogPost.tsx` | Individual blog post page |
| `src/pages/Brochure.tsx` | PDF brochure viewer/downloader |
| `src/components/brochure/AlphabondBrochure.tsx` | 13-page PDF brochure (react-pdf) |
| `src/components/EnquiryForm.tsx` | Standalone enquiry form — POSTs to `/api/enquiry` |
| `src/data/blogs.ts` | All 11 blog posts (5 original + 6 new SEO posts) |
| `public/images/` | All product bags, application photos, sector images, facility photos |
| `index.html` | Full SEO meta, JSON-LD schema, OG tags, Twitter Card |
| `public/robots.txt` | Search engine crawl rules |
| `public/sitemap.xml` | Sitemap for all pages + blog posts |

### Products (8 total)
| Product | Classification | Image |
|---------|---------------|-------|
| TileGrip X1 | C1T tile adhesive | `real-tx1.png` |
| TileGrip X2 | C2T tile adhesive | `real-tx2.png` |
| TileGrip X3 | C2TE tile adhesive (extended open time) | `real-tx3.png` |
| TileGrip X4 | C2TES1 flexible tile adhesive | `real-tx4.png` |
| BlockGrip X | AAC block jointing mortar (thin-bed) | `real-blockgrip.png` |
| PlastoGrip X | Ready-mix plaster + bonding agent | `real-plastogrip.png` |
| AlphaGrout X1 | Non-shrink precision grout >45 N/mm² | `real-ag1.png` |
| AlphaGrout X2 | Non-shrink precision grout >65 N/mm² | `real-ag2.png` |

### Available images (`public/images/`)
**Product bags (real photos):** `real-tx1.png`, `real-tx2.png`, `real-tx3.png`, `real-tx4.png`, `real-blockgrip.png`, `real-plastogrip.png`, `real-ag1.png`, `real-ag2.png`

**Application (AI-generated):** `app-tilegrip-x1.png`, `app-tilegrip-x2.png`, `app-tilegrip-x3.png`, `app-tilegrip-x4.png`, `app-blockgrip.png`, `app-plastogrip.png`, `app-alphagrout-x1.png`, `app-alphagrout-x2.png`

**Application (real photos):** `real-blockgrip-app.jpg`, `real-ag1-app.jpg`, `real-plastogrip-app.jpg`, `real-tx2-app.jpg`

**Sectors:** `sector-residential.png`, `sector-industrial.png`, `sector-infrastructure.png`, `sector-renovation.png`

**Facility:** `facility-lab.png`, `facility-plant.png`

**Hero:** `real-tx-hero.jpg` (tile application photo used in hero right panel)

### Blog posts (11 total, no em dashes)
1. `why-tile-adhesive-fails-indian-summers` — Technical
2. `aac-blocks-gujarat-construction-guide` — Construction
3. `white-cement-vs-tile-grout-india` — Products
4. `dry-sand-construction-what-it-is-and-why-it-matters` — Industry
5. `how-to-choose-construction-chemicals-small-contractor` — Guides
6. `tile-adhesive-coverage-per-square-foot-india` — Guides (NEW)
7. `tile-adhesive-grades-c1-c2-c2te-c2tes1-explained` — Technical (NEW)
8. `tile-over-existing-tiles-india` — Technical (NEW)
9. `plaster-falling-off-rcc-columns-beams-fix` — Technical (NEW)
10. `what-is-non-shrink-grout-machine-foundation` — Industry (NEW)
11. `tile-adhesive-drying-curing-time-india` — Guides (NEW)

### Brochure (13 pages)
1. Cover — dark navy, all 8 product bags strip, contact info, ISO badges
2. About — facility images (plant + lab), stats, vision/mission
3–10. Product pages (one per product) — bag image, key advantages, full-width app photo, technical properties table, how to use, substrates, applications, pack sizes
11. Clients & Partners — all clients grouped by category (wet sand / dry sand / job work)
12. Full product lineup — all 8 bags in card grid
13. Back cover — highlights, addresses, contacts

### Email enquiry
- Route: `POST /api/enquiry` (in `artifacts/api-server`)
- Sends to: `sales@alphabond.in`
- Requires env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`

### Clients (major)
- **Wet sand:** UltraTech RMC, JK Lakshmi RMC, Nuvoco RMC, ACC RMC, Prism Johnson RMC
- **Dry sand:** Pidilite, Magicrete, BirlaNu, Walplast, Globcon, Avon, Bharat Silica, Ascolite
- **Job work:** Asian Paints, Walplast, Masterapuu, Revacon, Magicrete
