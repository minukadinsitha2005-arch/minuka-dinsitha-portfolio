<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules

- Read `docs/PROJECT_BRIEF.md`, `docs/DEVELOPMENT_PLAN.md`, and `docs/CONTENT_TODO.md` before changing scope or content.
- Current phase (04): preserve the existing hero and complete the homepage below it: two career cards, About preview, up to three real featured projects, Education preview, and Contact CTA. Keep unrelated pages, Sanity, deployment, and external services deferred. Use honest empty states where approved content is missing.
- IT industry opportunities are the primary focus; Mathematics Tutor remains a prominent, professional secondary path.
- Current academic specialization is **Cybersecurity**. Do not copy the older Artificial Intelligence specialization from a CV.
- Never invent achievements, testimonials, employment, certifications, project results, or business traction. Missing content belongs in `docs/CONTENT_TODO.md`.
- Never publish CV reference contacts or private documents. WhatsApp belongs only to tutor contact; no number has been supplied yet.
- Use Next.js App Router, React, strict TypeScript, Tailwind CSS, and the existing `@/*` alias. Add Motion for React and Lucide only when implementation needs them; avoid unnecessary dependencies.
- Keep routes in `src/app`, shared UI in `src/components`, approved copy in `src/content`, and CMS-independent contracts in `src/types`. Create future folders when needed.
- Prefer Server Components. Keep client boundaries small for navigation interactions and animation. Keep future CMS credentials and queries server-side.
- Use semantic HTML, keyboard navigation, visible focus, accessible contrast, responsive images, and reduced-motion support. Add route metadata when implementing pages.
- Preserve the premium editorial direction: warm white/yellow/orange, Syne ExtraBold headings, DM Sans body; IT and tutor cards must both be prominent.
- Check with `npm run lint`, `npx --no-install next typegen`, and `npx --no-install tsc --noEmit --incremental false`. Run a production build for runtime/UI/config changes. Report failures accurately; do not edit generated Next.js files.
