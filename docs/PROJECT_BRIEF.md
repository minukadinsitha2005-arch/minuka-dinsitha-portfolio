# MINUKA DINSITHA — PERSONAL PORTFOLIO

## Objective and phase boundary

Create a production-quality personal portfolio for IT industry opportunities, with a distinct, professional Mathematics Tutor section. Present Minuka as a Cybersecurity undergraduate, developer, mathematics tutor, and aspiring entrepreneur.

Phase 01 delivered inspection, architecture, project instructions, a development plan, a missing-content checklist, and reusable TypeScript contracts. Phase 02 implemented the design system and global layout. Phase 03 delivered the editorial hero and two career cards, followed by focused typography, text-flow, and portrait-panel refinements. Phase 04 preserves that hero and completes the homepage below it with career cards, About, Featured Projects, Education, and Contact previews. Detailed content pages remain deferred. Do not configure Sanity, deployment, or external services. Vercel is the intended deployment platform for a later phase.

## Confirmed public information

| Field | Supplied information |
| --- | --- |
| Name | Minuka Dinsitha |
| Professional identity | Cybersecurity Undergraduate \| Developer \| Mathematics Tutor \| Aspiring Entrepreneur |
| Current specialization | Cybersecurity |
| Location | Ganemulla, Sri Lanka |
| Email | minuka.dinsitha2005@gmail.com |
| LinkedIn slug | minukadinsitha |
| GitHub username | minukadinsitha2005-arch |
| Facebook profile | minuka.dinsitha |

The supplied identifiers are recorded in `src/content/profile.ts`. Their conventional profile URLs have been assembled from those identifiers; ownership and destinations have not been independently verified. Phase 03 supplies `public/images/minuka-portrait.png` (3024 × 4032, transparent) and approved hero copy in `src/content/home-hero.ts`. No CV or WhatsApp number has been supplied. Never generate a replacement person or distort the supplied portrait.

## Visual direction

Premium Editorial: minimal, sophisticated, creative, modern, and professional. Use generous whitespace, confident typography, clear hierarchy, and restrained accents.

| Token (planned) | Color | Purpose |
| --- | --- | --- |
| Background | `#FFFEF8` | Main warm-white background |
| Soft yellow | `#FFF4CC` | Soft surfaces |
| Orange | `#FF8A32` | Accent |
| Golden yellow | `#FFC857` | Secondary accent |
| Main text | `#242424` | Primary text |
| Secondary text | `#77736D` | Supporting text |

Use Syne ExtraBold for major headings and DM Sans for body content. Verify actual foreground/background contrast; palette membership alone does not guarantee accessibility, particularly for orange or secondary text on yellow. Theme tokens and fonts will be implemented during the design-system milestone.

## Homepage requirements

- Preserve the current Phase 03 hero: aligned oversized **MINUKA / DINSITHA** lines, supporting copy below the full name, and the supplied portrait on the right with a subtle rounded soft-yellow panel. Phase 04 does not modify the hero.
- Smooth cinematic entrance animations with an immediate, readable reduced-motion alternative. Content must remain usable without animation or JavaScript.
- Clean premium navigation and clear keyboard focus.
- Two prominent career cards labeled **IT INDUSTRY** and **MATHEMATICS TUTOR**, linking to `/it` and `/tutor`.
- Give IT the leading position and strongest professional emphasis; keep tutoring easy to discover.
- Responsive desktop and mobile compositions with normal-flow text and image, no horizontal overflow, a fully visible head, and no overlapping important content. Add the two requested career cards directly below the hero as a responsive bento grid.
- Phase 04 career actions: **Explore IT Journey** to `/it` and **Explore Tutoring** to `/tutor`; use the latest supplied descriptions and numbers 01/02. Reuse the existing cards rather than adding another career section.
- Follow with a brief About preview linking to `/about`, up to three explicitly featured projects from structured local data, a concise Education preview, and **LET'S BUILD SOMETHING MEANINGFUL.** linking to `/contact`.
- No project records have been supplied: render an honest empty state until real approved entries exist. Education currently includes only the confirmed Cybersecurity undergraduate specialization; omit unprovided institutions, dates, and qualifications.

## Required routes

| Route | Purpose and content |
| --- | --- |
| `/` | Editorial hero, two career cards, selected verified work, contact entry points |
| `/about` | Approved biography, current education, interests and professional direction |
| `/it` | Cybersecurity/developer positioning, verified skills and relevant projects |
| `/projects` | Published project collection; show an honest empty state when needed |
| `/projects/[slug]` | Verified project details, role, process, media, optional evidence/results; unknown slugs return 404 |
| `/tutor` | Confirmed subjects, levels, teaching approach, formats and tutor-only contact |
| `/achievements` | Verified achievements and certifications, with supporting details where available |
| `/entrepreneurship` | Approved initiatives and aspirations, clearly distinguishing ideas from launched work |
| `/contact` | General professional email and supplied social profiles; no WhatsApp number |

Phase 02 supplied minimal navigation destination shells for `/about`, `/it`, `/tutor`, `/projects`, and `/contact`. The homepage now includes the Phase 03 hero and the five Phase 04 sections. Detailed route content, `/projects/[slug]`, `/achievements`, and `/entrepreneurship` remain planned. Project preview cards use supplied repository/demo links when available; they do not link to deferred detail routes. `/design-system` is an unlinked, noindex component reference. Empty collections must not be populated with fictional examples. See `DESIGN_SYSTEM.md` for shared implementation conventions.

## Content integrity and privacy

- Cybersecurity is authoritative for current specialization. An older CV may say Artificial Intelligence; do not import that as current information.
- Do not invent employment history, achievements, certifications, testimonials, projects, results, student outcomes, or business traction.
- Publish testimonials only with permission and approved public attribution. Keep consent records and private identities outside public content.
- Do not publish CV reference contacts, private documents, full home addresses, or unnecessary personal information. Any eventual public CV needs a separate redacted copy and explicit selection for publication.
- A supplied WhatsApp number may be used only for tutor contact functionality. Keep it out of global layout data, general contact, SEO, structured data, and social sharing. Until supplied, omit the WhatsApp action. A tutor contact link necessarily exposes its destination to visitors who can access it; it is not a secret storage mechanism.
- Use approved material only; omissions are preferable to unsupported claims. Track missing details in `CONTENT_TODO.md`.

## Technical and editorial requirements

- Next.js App Router, React, TypeScript, Tailwind CSS; Motion for React and Lucide React when needed during UI implementation.
- Reusable components, semantic HTML, keyboard accessibility, responsive layouts, and reduced-motion support.
- Optimize portrait/project images with known dimensions, responsive sizes, and appropriate loading priority. Use optimized fonts and keep client JavaScript limited.
- Provide descriptive metadata per route, project metadata from verified content, and later sitemap, robots, favicon, canonical URLs, and share images. A final domain is required before production URL metadata is completed.
- Projects, achievements, testimonials, and entrepreneurship content must later be editable through Sanity. Keep UI contracts independent of the CMS and normalize future CMS documents at a server boundary.
- No Sanity client, Studio, schema configuration, credentials, deployment configuration, contact backend, or external services in this phase.

## Existing-project inspection

Inspected on 2026-11-13. The working tree was clean before this phase.

- `package.json`: Next.js **16.4.6**, React/React DOM **19.3.0**, Tailwind CSS **4.3.3**, TypeScript **^5**, ESLint **^9**. An npm lockfile and local dependencies exist.
- `src/app` contains starter `layout.tsx`, `page.tsx`, `globals.css`, and favicon. It still uses Geist, starter metadata, starter imagery, and light/dark starter styles.
- Strict TypeScript is enabled and `@/*` maps to `src/*`. ESLint uses the Next.js core-web-vitals and TypeScript presets.
- `next.config.ts` already enables `cacheComponents` and `partialPrefetching`, and configures the Tailwind Turbopack loader. These settings are retained.
- No existing content model, feature components, other portfolio routes, CMS integration, or test suite was found. Motion, Lucide, and Sanity are not installed.
- The existing `AGENTS.md` contains a framework-managed block. Project instructions are appended without removing it.

Local framework guidance consulted: project structure, Server and Client Components, TypeScript, metadata, `cacheComponents`, and `partialPrefetching`, under `node_modules/next/dist/docs/01-app/`. The managed-block behavior was also checked in `node_modules/next/dist/server/lib/generate-agent-files.js`. Re-read the relevant installed guide before implementation because these APIs differ from older versions.

See `DEVELOPMENT_PLAN.md` for the proposed structure, architecture, milestones, and acceptance checks.
