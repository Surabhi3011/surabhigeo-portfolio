# Surabhi Gupta — Personal Portfolio

Reference doc for building and maintaining the site. Update this file as decisions change.

## Owner

- Name: Surabhi Gupta
- Role: GIS Business Analyst | Spatial Data Engineering & GeoAI
- Location: Mumbai, India (open to remote)
- Email: surabhigeo@gmail.com
- Domain: surabhigeo.com (hosted on VaporHost, shared cPanel/Apache hosting)
- Goal of site: personal brand for remote GIS engineering / geospatial data automation / applied GeoAI roles (Europe, US, Australia)

## Tech stack

- Static HTML/CSS/JS (vanilla, no framework) — matches shared cPanel hosting, deploy via FTP/file manager
- Node.js used only as a local build/dev tool (e.g. a simple dev server, asset bundling/minification if needed) — not a live server process, since VaporHost plan is shared hosting without Node app support
- No backend/contact form for now — contact section uses direct links (mailto, LinkedIn, GitHub)
- Substack (GeoCloud Insights) connected via subdomain redirect: `blog.surabhigeo.com` → Substack custom domain (configured in DNS + Substack settings, not built by this codebase)

## Site structure

Single scrolling homepage (`index.html`) + separate static pages for project case studies.

```
/                          → homepage (all sections below, anchor nav)
/projects/route-navigator.html
/projects/ndvi-calculator.html
/projects/auto-domain-updater.html
/projects/emergency-response-optimization.html
/projects/epsg-coordinate-finder.html
/projects/custom-gpts.html
```

`blog.surabhigeo.com` is a DNS/Substack-level redirect, not a page in this repo.

## Homepage sections (in order)

1. **Nav bar** (sticky) — logo mark "SG" + anchor links: About, Experience, Projects, Writing, Contact
2. **Hero** — two-column layout (text left, large photo right; stacks on mobile), styled after a reference split-hero layout
   - Eyebrow: "GIS Business Analyst · Open to remote roles"
   - Headline: name + accent italic sub-line ("Spatial Data & GeoAI.")
   - Pitch paragraph + bordered pull-quote callout (700+ issues resolved stat)
   - Photo panel: `assets/img/myphoto.png`, 4:5 aspect ratio, rounded corners
   - Buttons: **View projects** (scrolls to Projects), **Download resume** → `assets/pdf/SurabhiGupta.pdf`
   - Link row below: LinkedIn, GitHub, Newsletter, Email, Resume
3. **About** — professional summary + core competencies grid (GIS platforms, databases, automation/scripting, applied AI, cloud, delivery)
4. **Experience** — timeline, most recent first:
   - GIS Business Analyst, Esri India (Nov 2025–Present)
   - GIS Database Administrator, Reliance Industries Ltd. (Dec 2024–Nov 2025)
   - GIS Technical Lead, Cybertech Systems & Software (Oct 2023–Dec 2024)
   - GIS Subject Matter Expert, Cybertech Systems & Software (Oct 2022–Sept 2023)
   - GIS Analyst, Cybertech Systems & Software (July 2021–Sept 2022)
5. **Projects** — card grid, each card links to its own case-study page:
   - Route Navigator (Node.js)
   - NDVI Calculator (Streamlit)
   - Auto Domain Updater for File Geodatabases (Python/ArcGIS Pro)
   - Emergency Response Facility Optimization (SQL spatial analysis)
   - EPSG & Coordinate System Finder (Python)
   - Custom GPTs (GIS schema design, resume optimization, interview prep)
   - "View all on GitHub" link-out button at the end of the grid
   - Each case-study page: problem, approach, tech used, outcome, GitHub link (button)
6. **Writing** — GeoCloud Insights intro (60+ articles, newsletter description), follower/subscriber badge, button: **Read GeoCloud Insights** → opens `blog.surabhigeo.com`
7. **Certifications** — badge row (Azure AI Fundamentals, Advanced Prompt Engineering, Azure Fundamentals, ArcPy, JS Web Apps, Google Earth Engine)
8. **Contact / footer** — Email, LinkedIn, GitHub buttons; copyright line

## Color palette (light theme, earth-tone + burnt orange accents)

Light background site. The 8 supplied hex values are used only as accents (text, buttons, dark nav/footer surfaces) — background and hairline border tones are new, chosen to stay warm/neutral and let the accents read clearly.

| Token | Hex | Role |
|---|---|---|
| `--bg-base` | `#FFFFFF` | Page background — not in original list, added for light theme |
| `--bg-surface` | `#FAF6F3` | Card/section background (warm off-white) — not in original list |
| `--border` | `#E6DDD7` | Hairline dividers/card borders (light) — not in original list |
| `--text-primary` | `#230D09` | Body/heading text (from palette) |
| `--text-secondary` | `#83746E` | Muted/secondary text (from palette) |
| `--accent` | `#E27634` | Primary buttons, links, highlights (from palette) |
| `--accent-hover` | `#F77523` | Hover/active state on accent elements (from palette) |
| `--accent-deep` | `#7F370E` | Tags/badges, secondary accent fills (from palette) |
| `--surface-dark` | `#2F1208` | Dark surface for nav bar / footer (from palette) |
| `--surface-dark-alt` | `#472A1E` | Secondary dark surface / hover on dark surfaces (from palette) |
| `--text-on-dark` | `#FAF6F3` | Text on `--surface-dark` / `--surface-dark-alt` |

Light-theme site with a dark nav bar and footer for contrast, using the given dark browns. Confirm `--bg-base`/`--bg-surface`/`--border` (not in the original 8 hexes, added to support the light layout) look right once built.

## Visual tone

Clean & minimal — generous whitespace (within the dark palette), simple sans-serif type, subtle accents. No GIS-motif decoration requested.

## Open items (need from Surabhi before final build)

- [x] Headshot/photo file added at `/assets/img/myphoto.png`
- [x] Resume PDF added at `/assets/pdf/SurabhiGupta.pdf`, "Download resume" button wired up
- [ ] Confirm `--text-primary` off-white shade once first draft is visible
- [ ] Confirm Substack DNS/custom-domain setup for `blog.surabhigeo.com` (done outside this codebase, in VaporHost DNS + Substack settings)
- [x] `/assets/img/og-image.jpg` (1200×630px) — placeholder generated from `/assets/img/og-image.svg` (name, tagline, domain, brand accents); swap for a custom design later if desired

## SEO / sharing

- Every page has unique `<title>`, meta description, canonical URL, Open Graph (`og:*`), and Twitter card tags, pointing at `https://surabhigeo.com`
- `robots.txt` allows all crawlers and points to `sitemap.xml`
- `sitemap.xml` lists the homepage + all 6 project case-study pages
- If the domain changes, or pages are added/removed, update: canonical/`og:url` tags in each HTML file's `<head>`, and the URLs in `sitemap.xml`

## Decisions log

- Single-page home, multi-page for project case studies (2026-09-08)
- Shared hosting on VaporHost → static site, Node for build tooling only, no live backend (2026-09-08)
- Substack connected via subdomain redirect, not embedded RSS (2026-09-08)
- Contact section is links-only, no form, for now (2026-09-08)
- Photo: yes, pending file. Resume PDF: pending file (2026-09-08)
- Photo added as `assets/img/myphoto.png`, resume added as `assets/pdf/SurabhiGupta.pdf` (paths differ from original plan — updated hero `<img>` and both resume links to match) (2026-09-20)
- Switched to light theme; supplied dark-brown/orange hexes used as accents (buttons, links, nav/footer, text) on a new white/off-white background (2026-09-08)
- Added background graphics: site-wide dot-grid texture, wireframe globe graphic (originally a node-triangle, replaced per feedback), topographic lines in the writing box (2026-09-08/09)
- Restructured hero to a two-column split layout (text + large photo panel, pull-quote callout) matching a reference design the user provided; removed the old centered circular avatar and hero background graphic (2026-09-09)
