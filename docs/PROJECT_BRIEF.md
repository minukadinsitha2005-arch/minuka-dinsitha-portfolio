# MINUKA DINSITHA — PERSONAL PORTFOLIO

## Objective and phase boundary

Create a production-quality personal portfolio for IT industry opportunities, with a distinct, professional Mathematics Tutor section. Present Minuka as a Cybersecurity undergraduate, developer, mathematics tutor, and aspiring entrepreneur.

Phase 01 delivered inspection, architecture, project instructions, a development plan, a missing-content checklist, and reusable TypeScript contracts. Phase 02 implemented the design system and global layout. Phase 03 delivered the editorial hero and two career cards, followed by focused typography, text-flow, and portrait-panel refinements. Phase 04 completed the homepage below the hero with career cards, About, Featured Projects, Education, and Contact previews. The subsequent approved cinematic redesign replaces the hero and warm palette, originally added global light/dark themes and preserved every completed section and route. The latest focused cleanup uses Anybody globally and permanent light mode while keeping the Parisienne hero name unchanged. Detailed content pages remain deferred. Do not configure Sanity, deployment, or external services. Vercel is the intended deployment platform for a later phase.

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

| Semantic token | Permanent light palette |
| --- | --- |
| Background | `#FFFFFF` |
| Secondary | `#F7FBFF` |
| Elevated | `#EAF5FF` |
| Accent | `#A8D8FF` |
| Strong accent | `#75BFFF` |
| Main text | `#17263A` |
| Muted | `#64748B` |
| Borders | `#DCEEFF` |

Use Parisienne at its supported 400 weight only for the main MINUKA DINSITHA hero heading. Use Anybody globally for every other heading, navigation item, control, and body text, with 400–700 weights. Load both once with next/font/google in the root layout using --font-signature and --font-body. Preserve natural script spacing and allow a balanced two-line name on phones. A darker companion blue (`#55677E`) keeps small light-mode text readable on every supplied surface. All pages use permanent light mode. Stored theme choices and operating-system preference have no effect; the unused provider, toggle, dark configuration, and next-themes dependency are removed. No yellow or orange remains in the design.

## Homepage requirements

- Use a large centered original portrait above one connected **MINUKA DINSITHA** H1. Keep all typography below the photograph. Use a subtle blue radial glow, with no frame or portrait floating. Keep the exact ordered categories CYBERSECURITY / AI DEVELOPER / TUTOR / ENTREPRENEUR beneath the name, followed by one scroll cue. The longer introduction belongs in About. Retain prior copy/action fields in local data. Use shallow perspective and a rising portrait entrance, with no face/text overlap.
- Smooth cinematic entrance animations with an immediate, readable reduced-motion alternative. Content must remain usable without animation or JavaScript.
- Transparent shared navigation with Home, About, IT Industry, Tutor, Projects, and Contact; a one-pixel blue divider, and clear keyboard focus. Preserve the mobile menu; no theme control is shown.
- Two prominent career cards labeled **IT INDUSTRY** and **MATHEMATICS TUTOR**, linking to `/it` and `/tutor`.
- Give IT the leading position and strongest professional emphasis; keep tutoring easy to discover.
- Responsive desktop and mobile compositions with normal-flow text and image, no horizontal overflow, a fully visible head, and no overlapping important content. Add the two requested career cards directly below the hero as a responsive bento grid.
- Career actions: **Explore IT Journey** to `/it` and **Explore Tutoring** to `/tutor`; use the latest supplied descriptions and numbers 01/02. Reuse the existing cards rather than adding another career section.
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

Phase 02 supplied minimal navigation destination shells for `/about`, `/it`, `/tutor`, `/projects`, and `/contact`. The homepage includes the redesigned cinematic hero and all five completed Phase 04 sections. Detailed route content, `/projects/[slug]`, `/achievements`, and `/entrepreneurship` remain planned. Project preview cards use supplied repository/demo links when available; they do not link to deferred detail routes. `/design-system` is an unlinked, noindex component reference. Empty collections must not be populated with fictional examples. See `DESIGN_SYSTEM.md` for shared implementation conventions.

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
