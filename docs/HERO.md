# Phase 03 — Premium Editorial hero

## Current scope

The latest request replaces the minimalist hero with a layered Syne ExtraBold composition and restores the full supplied introduction, professional identity, tagline, description, and CTA buttons. Only the hero, its animation, its content fields, and this note change. Existing career cards, navigation destinations, other pages, CMS, and hosting remain unchanged.

## Composition

- `src/components/sections/home-hero.tsx` remains a Server Component and reuses the existing content container, buttons, portrait, and client animation wrapper.
- Oversized MINUKA and DINSITHA lines span almost the entire content width. The name remains one semantic H1.
- A twelve-column grid integrates the portrait on the right. Shared grid rows place professional identity between the name lines and the description/CTAs beneath the surname, all in normal flow. The H1 remains semantic. A conventional grid fallback is provided for browsers without CSS subgrid. Mobile uses a normal-flow stack: heading, portrait, identity, description, actions.
- The latest refinement increases desktop type by approximately 7–8%, extends the name 2cqw into each container gutter, right-aligns the surname, and slightly enlarges the portrait. Measured text still fits within the viewport.
- Explicit warm-white surfaces, one plain soft-yellow portrait field, a small orange introductory rule, and thin dividers supply the editorial details. The arch border, extra orange flourish, edition label, and circular scroll enclosure are removed.
- The prior homepage MD / Contact navbar presentation is preserved through homepage-scoped CSS; other pages retain their existing navigation.

## Layering and portrait

The composition establishes its own stacking context. The yellow field is layer 0, the first name is layer 1, the transparent portrait window is layer 2, and the surname is layer 3. Copy and controls are layer 4. The figure wrapper intentionally has no stacking context, so the field cannot cover the name. The surname is placed lower to cross the torso rather than the face.

The supplied `public/images/minuka-portrait.png` is retained at 3024 × 4032. Static Next Image dimensions, responsive sizes, eager loading, and high fetch priority support a stable initial layout. Uniform image width and automatic height preserve natural proportions. Margins remove excess transparent framing; the reserved viewport retains clearance above the head. No replacement person, image generation, retouching, or nonuniform scaling is used.

## Motion and accessibility

`HeroEntrance` staggers the two name lines, introduces the portrait smoothly, and fades in the supporting copy and buttons. Reveal translations are smaller in this refinement. The field makes one four-pixel, 2.5-second entrance; the scroll arrow makes one 1.4-second movement. Neither repeats. The cue links to the existing `#career-paths` section.

Reduced-motion preferences skip Motion animations and receive immediate CSS overrides. Server HTML starts visible, and keyboard focus completes an in-progress animation. Decorative accents have no pointer events. CTA destinations remain `/projects` and `/contact`.

## Verification

Passed ESLint, route type generation, standalone TypeScript checking, production build, HTTP checks for supplied content/CTAs/navigation, and optimized transparent image delivery. Actual Syne font measurements confirm heading fit at 1440, 1024, 768, 390, and 320px, with positive portrait head clearance at each calculated size.

The native portfolio preview window was minimized and could not be captured. Rendered overlap/alignment, mobile viewport geometry, and live reduced-motion switching have not been visually verified. The font/framing calculations and source review must not be represented as browser tests. The existing local dev server remains running; no service or deployment configuration is added.
