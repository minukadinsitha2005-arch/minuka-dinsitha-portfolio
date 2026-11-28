# Content checklist

Confirmed facts are in `PROJECT_BRIEF.md` and `src/content/profile.ts`. Unchecked entries are missing or require confirmation; they are not claims about Minuka. Never generate substitute achievements, testimonials, certifications, employment, project results, or student outcomes.

## Phase 04 homepage

- [x] Reuse the two existing career cards with the supplied descriptions and Explore IT Journey / Explore Tutoring actions.
- [x] Add a fact-based About preview, Contact CTA, and current Cybersecurity undergraduate education entry.
- [x] Add a structured local project collection and an explicit empty state; show at most three entries marked `featured: true` when real content is provided.
- [ ] Supply real featured project records for `src/content/projects.ts`: title, summary, category, status, technologies, and approved repository/demo links or images where available. No project records are currently published.
- [ ] Supply institution, exact programme, study dates, and any earlier educational milestones for the Education preview. No institution, dates, or completed qualifications are inferred.
- [x] Verify the refined homepage in Chrome at 1920, 1440, 1024, 768, 390, and 320px in both themes, including screenshots, overflow, portrait/name geometry, navigation, theme persistence/system preference, keyboard interactions, reduced motion, and no-JavaScript fallbacks. See HERO.md for scope and browser-coverage limits.

## Before visual implementation

- [x] Professional portrait supplied and explicitly selected for the Phase 03 hero: `public/images/minuka-portrait.png`, 3024 × 4032 transparent cutout. Preserve the file and the person's proportions. Descriptive alt text is based on the supplied image.
- [x] Approved hero introduction, identity, tagline, description, and button labels supplied in Phase 03; recorded in `src/content/home-hero.ts`.
- [ ] Approved longer biography.
- [ ] Exact degree title, institution, study dates/current year, and any education details selected for public display. Current specialization is already confirmed as **Cybersecurity**.
- [ ] Verified skills and tools, with examples where possible. Do not infer proficiency or years of experience from the professional identity.
- [ ] Confirm LinkedIn, GitHub, and Facebook destinations assembled from the supplied identifiers.
- [ ] Confirm preferred opportunity types and availability wording before adding recruitment calls to action.

## Projects — later managed through Sanity

- [ ] Real project names and unique URL slugs.
- [ ] Approved summaries, project category/status, personal role and contribution, and technologies actually used.
- [ ] Case-study content: problem, approach, implementation, limitations, and lessons where supplied.
- [ ] Screenshots/images, publication rights, descriptive alt text, and original dimensions.
- [ ] Public repository/demo links, if available; confirm no secrets or private material are exposed.
- [ ] Evidence for any result or metric. Omit outcomes when unsupported.
- [ ] Select featured projects and their order. If none are ready, use an honest empty state.

## Mathematics Tutor

- [x] Redesign copy confirms English Medium Mathematics tutoring for Grades 6–11. Other lesson details below remain to be supplied.

- [ ] Subjects/topics, grades or exam levels, curriculum/exam board, and teaching languages.
- [ ] Online/in-person formats and public service area, without a private address.
- [ ] Approved teaching approach and relevant verified qualifications/experience, if supplied.
- [ ] Availability, lesson duration, individual/group formats, and fees only if intended for public display.
- [ ] **WhatsApp number has not been supplied.** Obtain the exact number with country code and approved tutor enquiry message. Use it only for tutor contact functionality.
- [ ] Decide whether to offer email alongside the tutor WhatsApp action. Omit WhatsApp entirely until the real number is supplied.
- [ ] Any student feedback/results require evidence, permission, and suitable public attribution; avoid unnecessary student identities or personal data.

## Achievements and certifications — later managed through Sanity

- [ ] Verified titles, categories, issuer/organizer, dates at the precision actually known, and approved descriptions.
- [ ] Evidence or credential URLs and approved images, if available. Review certificates for private IDs/contacts before publication.
- [ ] Select featured items. If none are supplied, do not invent awards or certifications.

## Testimonials — later managed through Sanity

- [ ] Exact approved quote, context (IT/tutoring/entrepreneurship), display name, and optional public role.
- [ ] Explicit permission for publication and attribution; record evidence privately, outside public content modules and page props.
- [ ] Review for student privacy and unnecessary identity details. Omit the section if no approved quotes exist.

## Entrepreneurship — later managed through Sanity

- [ ] Approved statement of entrepreneurial interests/aspirations.
- [ ] Actual initiative names, summaries, verified involvement, and public links, if any.
- [ ] Accurate stage for each initiative: idea, exploring, in progress, or launched. Do not imply a registered business, customers, revenue, employment, or traction without supplied evidence.
- [ ] Approved media and any supporting detail. An aspirations-only page is acceptable when no initiative is ready.

## Publication and optional features

- [ ] Final domain for canonical URLs and sitemap; no hosting configuration in this phase.
- [ ] Approved page descriptions, social-share image, and personal favicon.
- [ ] Decide whether a downloadable CV is wanted. Any public CV must use Cybersecurity as current specialization and omit reference contacts and private details; never copy a private CV directly into `public/`.
- [ ] Decide whether email/social links are sufficient or a contact form is needed later. No delivery service, analytics, or other external integration is configured now.
- [ ] Final factual, privacy, and consent review of all selected public material before launch.

Sanity project/dataset/access details and Vercel configuration are deferred integration decisions, not prerequisites for this planning phase. Keep credentials out of these documents and source control.
