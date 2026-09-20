# Surabhi Gupta — Personal Portfolio

Reference doc for building and maintaining the site. Update this file as decisions change.

## Owner

- Name: Surabhi Gupta
- Role: GIS Technical Consultant | Enterprise GIS | Geospatial Delivery (job title: GIS Business Analyst, Esri India)
- Location: Mumbai, India (open to remote)
- Email: surabhi@surabhigeo.com
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

1. **Nav bar** (sticky) — logo mark "SG" + links: About, Experience, GitHub (external, opens profile in new tab), Projects, Writing, Contact. Same nav (with relative `../index.html#...` anchors) repeated on all project case-study pages.
2. **Hero** — two-column layout (text left, large photo right; stacks on mobile), styled after a reference split-hero layout
   - Eyebrow: "GIS Technical Consultant · Open to remote roles"
   - Headline: name + accent italic sub-line ("Enterprise GIS & Geospatial Delivery.")
   - Pitch paragraph (no pull-quote callout — removed per feedback to declutter)
   - Photo panel: `assets/img/SurabhiGupta.webp`, 4:5 aspect ratio, rounded corners
   - **One CTA button**: "View projects" (scrolls to Projects) — "Download resume" button removed to keep a single CTA
   - Link row below (plain text link, not a button): Resume only — LinkedIn/GitHub/Newsletter removed from hero since they're already reachable via the footer and Writing section
3. **About** — professional summary + core competencies grid: Enterprise GIS, Business analysis, Spatial & enterprise databases, Automation & development
4. **Experience** — timeline, most recent first:
   - GIS Business Analyst, Esri India (Nov 2025–Present)
   - GIS Database Administrator, Reliance Industries Ltd. (Dec 2024–Nov 2025)
   - GIS Technical Lead, Cybertech Systems & Software (Oct 2023–Dec 2024)
   - GIS Subject Matter Expert, Cybertech Systems & Software (Oct 2022–Sept 2023)
   - GIS Analyst, Cybertech Systems & Software (July 2021–Sept 2022)
5. **Projects** — card grid, each card links to its own case-study page:
   - UrbanPulse — Urban Mobility Intelligence (GIS, data viz, AI-assisted)
   - Route Navigator (Node.js)
   - NDVI Calculator (Streamlit)
   - Auto Domain Updater for File Geodatabases (Python/ArcGIS Pro)
   - Emergency Response Facility Optimization (SQL spatial analysis)
   - EPSG & Coordinate System Finder (Python)
   - Custom GPTs (GIS schema design, resume optimization, interview prep)
   - "View all on GitHub" — plain text link (not a button) at the end of the grid
   - Each case-study page: problem, approach, tech used, outcome, GitHub link (button — page-local action, not a site-wide CTA)
6. **Writing** — GeoCloud Insights intro (60+ articles, newsletter description), follower/subscriber badge, plain text link: "Read GeoCloud Insights" → opens Substack (not a button, to avoid a second competing CTA)
7. **Certifications** — badge row (Azure AI Fundamentals, Advanced Prompt Engineering, Azure Fundamentals, ArcPy, JS Web Apps, Google Earth Engine)
8. **Contact / footer** — **one contact button**: "Email me"; LinkedIn/GitHub demoted to plain text links beneath it; copyright line

**CTA policy** (per explicit request): exactly one primary CTA button site-wide ("View projects" in the hero) and exactly one contact button ("Email me" in the footer). Every other action (writing link, "view all on GitHub", case-study "View on GitHub") is a plain text/arrow link or a page-local action, not a styled `.btn`.

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

- [x] Headshot/photo file added at `/assets/img/SurabhiGupta.webp`
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
- Resume was substantially revised (title, professional summary, competencies, expanded Esri India bullets, new projects list) — synced site copy in Hero, About, and Experience to match the updated resume PDF (2026-09-20)
- Added UrbanPulse (Urban Mobility Intelligence) as a project card + case-study page, from the new resume's project list (2026-09-20)
- Note: resume's "Selected Projects" list now also includes two municipal BA case studies (Utility Trenching Permit system, Veterinary Health app) — not added to the site since only UrbanPulse was requested; revisit if wanted later
- Simplified CTAs site-wide to exactly one primary CTA ("View projects" in hero) and one contact button ("Email me" in footer); downgraded "Download resume" (hero), "Read GeoCloud Insights" (writing), "View all on GitHub" (projects), and footer LinkedIn/GitHub buttons to plain text/arrow links (2026-09-20)
- Removed the hero pull-quote callout and the LinkedIn/GitHub/Newsletter links from the hero's link row (kept Resume only) per feedback that the hero was too busy; contact email changed to surabhi@surabhigeo.com everywhere (2026-09-20)
- Added a subtle shadow to the hero photo; reduced section padding (88px → 56px) and hero bottom padding (88px → 48px) to tighten whitespace between sections site-wide; "Resume" changed from a plain text link to a second hero button (`.btn-outline`, matching "View projects" in shape but contrasting in color) with a download icon (2026-09-20)
- Added a "GitHub" nav link (between Experience and Projects) on the homepage and all project case-study pages, opening the GitHub profile in a new tab (2026-09-20)
- Headshot swapped from `assets/img/myphoto.png` to `assets/img/SurabhiGupta.webp` (updated photo); old file removed, hero `<img>` src updated (2026-09-20)
