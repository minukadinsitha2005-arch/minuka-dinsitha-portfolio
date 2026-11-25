# Development plan

## Proposed folder structure

Keep the existing `src` layout and one root layout. The tree below is a target structure, not a claim that these pages or integrations already exist. Create directories when their first real implementation is needed.

```text
AGENTS.md                         # Project rules plus preserved Next.js block
docs/
  PROJECT_BRIEF.md
  DEVELOPMENT_PLAN.md
  CONTENT_TODO.md
public/
  images/                         # Later: approved public images only
src/
  app/
    layout.tsx                    # Shared document, fonts, navigation/footer, metadata
    globals.css                   # Tailwind and design tokens
    page.tsx                      # /
    about/page.tsx
    it/page.tsx
    projects/
      page.tsx
      [slug]/page.tsx
    tutor/page.tsx
    achievements/page.tsx
    entrepreneurship/page.tsx
    contact/page.tsx
    not-found.tsx                 # Add with route implementation
    sitemap.ts                    # Later, once canonical domain is known
    robots.ts                     # Later, once indexing policy is known
  components/
    ui/                           # Links/buttons, containers, section headings
    layout/                       # Shared navigation and footer
    sections/                     # Hero, career cards, project/testimonial sections
    motion/                       # Small client animation wrappers
  content/
    profile.ts                    # Created now: supplied public profile facts
    projects.ts                   # Later: approved local content only
    achievements.ts               # Later
    testimonials.ts               # Later
    entrepreneurship.ts           # Later
    tutor.ts                      # Later: tutor copy and tutor-only contact
  types/
    content.ts                    # Created now: UI-facing content contracts
  lib/
    content/                      # Later: server-only data access and normalization
    sanity/                       # Deferred: client, queries, generated document types
```

When Sanity is introduced, decide where Studio lives and where its schemas belong as part of that milestone. No Studio route or integration files are created now. Avoid empty scaffolding, generic repository frameworks, or route groups until they solve an actual need. Route-specific UI can be colocated in `_components` when it is not shared.

## Architecture decisions

1. **Server-first rendering.** Pages and layout compose reusable sections and approved content as Server Components. Client Components are limited to interactive menus and Motion wrappers. Do not place the entire site behind `"use client"` for entrance animations.
2. **Separate facts from presentation.** `src/content/profile.ts` uses `satisfies PublicProfile` to check supplied facts without adding UI. Other local content modules will use the same contracts once real content is supplied. No fabricated sample records are needed.
3. **CMS-independent contracts.** `src/types/content.ts` defines public profile, media, SEO, project, achievement, testimonial, entrepreneurship, and tutor types. Stable IDs support React keys; slugs support project routes. Readonly fields discourage incidental mutation. Optional fields mean unprovided data can be omitted. These types are not Sanity schemas or runtime validators.
4. **Simple structured case studies.** A small discriminated union supports text, lists, and images. This avoids HTML strings and a premature rich-text dependency. Later, map supported Sanity content into these blocks; extend the union deliberately if richer content becomes necessary. CMS types and `_ref` asset objects should not leak into presentational components.
5. **Later data flow.** Initially: approved local modules -> Server Component page -> section/card props. Later: published Sanity query -> server-only validation/normalization -> the same content contracts -> the same components. Add small functions such as `getProjects()` and `getProjectBySlug(slug)` only when consumed. Query publication status and allowlist public fields; never pass raw documents or tokens to the browser. Missing project slugs use `notFound()`.
6. **Editorial approval is real work.** TypeScript cannot verify claims, consent, URL safety, image dimensions, date formats, or privacy. Later CMS schemas and the server adapter must validate input; factual and permission review happens before publication. Testimonial contracts represent approved public material only. Never export private consent evidence as page props.
7. **Tutor contact is scoped.** General profile data has email/social links and no phone field. `TutorContent` alone can contain `TutorWhatsAppContact`. Import/render it only for tutor contact, not global navigation/footer or metadata. Omit the action while the number is absent; never use a dummy number.
8. **Visual system lives in CSS and shared UI.** Use Tailwind 4 theme tokens in `globals.css`, Syne ExtraBold and DM Sans through the installed Next.js font guidance, and a small component set. Keep typography as accessible text, portrait positioning responsive, and decorative elements outside the reading order. Motion should favor opacity/transforms and respect reduced motion without hiding content.
9. **Use this installed Next.js version.** Retain existing Cache Components and Partial Prefetching settings. For future CMS reads, use caching/revalidation supported by the local guides; do not copy older route-segment cache settings. Await dynamic route params and generate metadata on the server. Cache Components requires the Node.js runtime; do not add a route `runtime` export. The cache invalidation strategy is deferred until CMS publishing is implemented.
10. **Keep infrastructure proportional.** No database, authentication, global state library, API layer, or contact delivery provider is needed for this planning phase. Start general contact with supplied email/social destinations when pages are implemented. A contact form and its delivery service require a later decision.

## Milestones and completion criteria

### 1. Planning and content foundation — completed in Phase 01

- Inspect starter, local framework guidance, configuration, dependencies, and Git state.
- Preserve managed instructions and append concise project rules.
- Write brief, architecture/milestones, and content checklist.
- Add reusable content contracts and a checked module of supplied public profile facts.
- Complete ESLint, route type generation, TypeScript checks, and diff review.
- Deliver with starter UI/configuration unchanged and no installed services or dependencies.

### 2. Content collection and information architecture — later

- Collect portrait, approved biography, academic details, verified skills/projects, tutoring details, and any approved achievements/testimonials/initiatives.
- Confirm social destinations and tutor WhatsApp details. Prepare only an explicitly approved, redacted public CV if wanted.
- Finalize navigation order, page copy, and honest empty states. IT leads; tutoring stays prominent.
- Complete when every planned section has approved copy or an explicit omission/empty-state decision.

### 3. Design system and shared shell — Phase 02

- Implement the warm palette, accessible pairings, Syne/DM Sans typography, layout primitives, shared navigation/footer, and focus states.
- Add Lucide and Motion only as used. Use small client boundaries and reduced-motion behavior.
- Complete when shell and primitives work with keyboard, touch, zoom, and representative mobile/desktop widths without overflow.
- Include minimal navigation destination shells, not full content pages. See `DESIGN_SYSTEM.md` for component contracts and the `/design-system` reference surface. Keep the complete homepage deferred.

### 4. Homepage — Phase 04; detailed portfolio routes later

- Preserve the existing Phase 03 hero and reuse exactly two bento career cards with the Phase 04 copy and actions.
- Add About, Featured Projects, Education, and Contact previews using shared UI and restrained, reduced-motion-aware reveals. Keep copy in `src/content/homepage.ts`.
- Use `src/content/projects.ts` and the existing `Project` contract; select explicitly featured projects in editorial order, capped at three. Keep the collection empty until real details are supplied. Use repository/demo links rather than deferred project-detail routes.
- Add a CMS-independent `EducationEntry` contract. Show only the confirmed Cybersecurity undergraduate entry until further academic facts are supplied.
- Phase 04 implementation is complete; project entries and fuller education details remain content follow-ups in `CONTENT_TODO.md`. Passed lint, route type generation, TypeScript checks, production build, production markup/ARIA/anchor checks, HTTP checks for linked destinations, and focused empty/populated project rendering checks. Actual Syne font measurements checked the new CTA and education headings at 1440, 1024, 768, 390, and 320px; small-screen sizing was adjusted to keep their longest words intact. These calculations are not browser layout tests. Browser visual verification remains outstanding because browser access and native window capture were unavailable.
- Later route work:
- Implement all nine required route patterns from the brief with approved content.
- Add project detail lookup, metadata, unknown-slug 404 behavior, image sizing and empty states.
- Add tutor-only WhatsApp contact if supplied; use general email/social contact elsewhere.
- Complete when navigation, content, privacy boundaries, responsive layouts, and reduced motion are verified across routes.

### 5. Sanity editorial integration — deferred

- Configure Sanity only in a later integration phase. Create schemas for projects, achievements, testimonials, and entrepreneurship plus reusable media/SEO fields.
- Validate required fields, unique slugs, approved links, alt text, publication consent, and allowed public attribution. Use generated CMS types and server-side normalization into public contracts.
- Set up published-only queries, secure preview if needed, and supported cache invalidation. Keep draft content and credentials out of public output.
- Complete when editing/publishing each content category updates the appropriate pages without component rewrites and unpublished/private material cannot leak.

### 6. Production readiness and Vercel — deferred

- Finish per-page SEO, canonical URLs, share assets, favicon, sitemap and robots once the domain/indexing policy is known.
- Review accessibility, keyboard/touch interactions, contrast, performance, image loading, reduced motion, public CV redaction, contact destinations, and factual accuracy.
- Run lint, route type generation, type checking, and production build; add focused route/privacy tests when implementations exist.
- Configure Vercel, environment variables, and domain only in a later deployment phase. Verify the deployed routes and CMS publication behavior.

## Verification strategy

For implementation phases, run `npm run lint`, `npx --no-install next typegen`, `npx --no-install tsc --noEmit --incremental false`, and `npm run build`; review `git diff --check` and the changed-file list. Type generation is required for the global `LayoutProps` helper even in a fresh checkout. Check desktop/mobile navigation, keyboard focus, responsive overflow, and reduced-motion behavior where preview tooling permits. Record any verification limitations; a build is not a substitute for browser or privacy review.

Keep the brief, checklist, and this plan updated as requirements are resolved. Track missing facts in the checklist rather than inventing copy.
