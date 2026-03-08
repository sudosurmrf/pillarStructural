# Pillar Structural Engineers — Website Update Design

**Date:** 2026-03-08
**Status:** Approved

## Goal

Transform the 3-service template website into a 6-service professional SPA with dedicated service detail pages featuring project galleries.

## Service Areas

| # | Service | Slug | Sub-services |
|---|---------|------|-------------|
| 1 | Signage Structures | `signage-structures` | Blade Signs, Channel Letters, Light Boxes, Wayfinding Signs, Interior Signs, Temporary Sign Structures, Monuments, Pylons, Billboards |
| 2 | Shade Cover Structures | `shade-cover-structures` | Pergolas, Canopies, Carports, Playground Shade Structures |
| 3 | Swimming Pools & Spas | `swimming-pools-spas` | — |
| 4 | Exterior CMU Walls & Fences | `exterior-cmu-walls-fences` | CMU Walls and Extensions, Retaining Walls, Fences |
| 5 | Staircase Systems | `staircase-systems` | — |
| 6 | Permit Processing | `permit-processing` | Optional service |

## Architecture

- **Routing:** `react-router-dom` with `BrowserRouter`
- **Home:** `/` — Hero, Services grid (3x2), Process, Contact
- **Service detail:** `/services/:slug` — Header banner, project gallery (placeholder slots), CTA

### File Structure

```
src/
  main.tsx              — BrowserRouter wrapper
  App.tsx               — Route definitions
  pages/
    Home.tsx            — Homepage sections (Hero, Services, Process, Contact)
    ServiceDetail.tsx   — Reusable service detail page with gallery
  components/
    Navbar.tsx          — Shared navigation
    Footer.tsx          — Shared footer
  data/
    services.ts         — Service definitions + placeholder project data
  index.css             — Unchanged
```

## Changes

1. Add `react-router-dom` for client-side routing
2. Expand to 6 services displayed in a 3x2 grid
3. Create service detail pages at `/services/:slug` with placeholder project gallery
4. Update hero text to reference all 6 service areas
5. Update contact form dropdown to list all 6 services + "Other"
6. Extract Navbar and Footer into shared components
7. Centralize service data in `data/services.ts`
8. Remove unused server-side dependencies (express, better-sqlite3, dotenv, @google/genai)

## Service Detail Page Layout

1. Header banner — title, description, sub-services list
2. Project gallery — responsive grid (2 cols mobile, 3 cols desktop), gray placeholder boxes (4:3 aspect ratio) with title and caption
3. Back to services link — top and bottom
4. CTA section — "Ready to start?" linking to contact
5. Shared Navbar and Footer

## Not Changing

- Brand colors, fonts, animation style
- Process section content
- Overall visual identity and Framer Motion patterns

## Data Model

Each service has: `title`, `slug`, `description`, `icon`, `subServices[]`, `projects[]`

Each project placeholder has: `title`, `imageUrl` (empty string), `caption`

Each service starts with 4-6 placeholder project slots.
