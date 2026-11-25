# Design system — Phase 02

## Scope

The global shell and reusable foundation are implemented. Phase 03 replaces the homepage holding composition with the Premium Editorial hero; career cards and remaining homepage sections are deferred. See `HERO.md` for the hero's content, layering, responsive behavior, and verification limitations. `/about`, `/it`, `/tutor`, `/projects`, and `/contact` contain minimal destination shells so navigation works. They are not finished content pages. `/design-system` is an unlinked, noindex component reference page.

## Tokens and typography

`src/app/globals.css` is the source for Tailwind 4 theme tokens. Preserve the supplied six colors: `background`, `secondary`, `orange`, `golden`, `ink`, and `muted`. `line` supplies thin neutral borders. `muted-strong` provides readable small copy on yellow surfaces; `focus` supplies a contrasting focus ring. Use ink on orange buttons instead of white.

`next/font/google` loads Syne at weight 800 and variable DM Sans in the root layout, with Latin subsets and `display: swap`. Font files are served locally by Next.js after build. Typography utilities:

| Utility | Size | Use |
| --- | --- | --- |
| `text-display` | Fluid 3.5–8rem | Oversized display text |
| `text-heading-xl` | Fluid 2.75–5.5rem | Page headings |
| `text-heading-lg` | Fluid 2–3.5rem | Section headings |
| `text-heading-md` | Fluid 1.375–1.75rem | Card headings |
| `text-body-lg` | Fluid 1.125–1.375rem | Introductions |
| `text-body` | 1rem | Body copy |
| `text-small` | 0.875rem | Supporting copy |
| `eyebrow` | 0.6875rem | Short uppercase labels |

Headings use Syne ExtraBold automatically. Use `font-display font-extrabold` for display text that is not a heading. Keep heading levels semantic. Tailwind's standard 4px spacing rhythm handles component spacing; `py-section`/`mt-section` use a fluid 4–8rem section rhythm. Cards use `rounded-card` (1.5rem). Buttons use restrained pill shapes without shadows.

## Components

| Component | Import | Contract |
| --- | --- | --- |
| `Navbar` | `@/components/layout/navbar` | Server shell, monogram, desktop/mobile navigation |
| `MobileNavigation` | `@/components/layout/mobile-navigation` | Native disclosure with client enhancements |
| `Footer` | `@/components/layout/footer` | Public identity, email, location, social links; no WhatsApp |
| `Monogram` | `@/components/layout/monogram` | Text-based `MD.` home link with an accessible name |
| `PrimaryButton`, `SecondaryButton` | `@/components/ui/button` | Native button for actions; Next Link when `href` is present |
| `ContentContainer` | `@/components/ui/content-container` | `width="wide"` (90rem) or `"reading"` (54rem), responsive padding |
| `SectionHeading` | `@/components/ui/section-heading` | `as`, `id`, `eyebrow`, `title`, `description`, `size` |
| `Badge` | `@/components/ui/badge` | Neutral, soft, or accent tone; presentational span |
| `Card` | `@/components/ui/card` | Default/soft surface; non-interactive div accepting native attributes |
| `AnimatedReveal` | `@/components/motion/animated-reveal` | Once-per-mount reveal with optional delay/distance |
| `PageIntro` | `@/components/layout/page-intro` | Shared minimal destination heading, intro, optional children |

```tsx
<section aria-labelledby="work-heading" className="py-section">
  <ContentContainer>
    <SectionHeading id="work-heading" eyebrow="Selected work" title="Work, in focus." />
    <AnimatedReveal>
      <Card className="mt-8">
        {/* Approved project content belongs here. */}
      </Card>
    </AnimatedReveal>
  </ContentContainer>
</section>
```

`Button` does not use an `asChild` dependency. Link props and native button props are distinct TypeScript union branches. Native buttons default to `type="button"`; set `type="submit"` explicitly inside forms. Disabled behavior is available on buttons, not links. Add action handlers inside a Client Component. Do not turn a static card into a tab stop unless it has a real interaction.

## Navigation and accessibility

All six destinations are defined once in `src/content/navigation.ts`. Active links use `aria-current="page"`, including nested project paths. The client navigation is inside Suspense because this project's Cache Components setting can suspend pathname reads for future unknown dynamic params. The fallback preserves real links.

Below 64rem, a native `details`/`summary` disclosure opens the mobile menu. The summary supports Enter/Space and exposes native expanded/collapsed semantics. With JavaScript, Escape closes and restores summary focus; leaving the disclosure by pointer or keyboard, changing route, or resizing to desktop also closes it. The menu is non-modal and does not trap focus. It opens below the header without a full-screen overlay. With JavaScript disabled, the disclosure and normal links still work.

The root layout owns the sole `main` landmark and a keyboard-visible skip link. Do not nest another `main` in pages. Interactive controls have visible focus, and buttons/menu controls are at least 48px high. Text uses dark colors on light surfaces; orange is primarily decoration or a button background. Footer profile links use the supplied identifiers, which still need owner confirmation before launch.

## Motion

The only added dependency is `motion`. Shared duration/easing/keyframes live in `src/components/motion/presets.ts`. `AnimatedReveal` uses Motion's `useAnimate`, `useInView`, and `useReducedMotion` hooks. It animates opacity/translation once as content enters the viewport, caps stagger delay at 0.5s, completes if keyboard focus enters, and restores visible styles on cleanup. Server HTML starts visible; failed/disabled JavaScript cannot hide content. Reduced motion skips the reveal, while the CSS media query also removes translation and transitions immediately if the preference changes during an animation.

Official API references: [useAnimate](https://motion.dev/docs/react-use-animate), [useReducedMotion](https://motion.dev/docs/react-use-reduced-motion).

## Deferred work

Career cards, remaining homepage and route content, real projects, Sanity, contact backend, and deployment remain deferred. The supplied portrait and hero are handled in Phase 03. A domain and approved share image are still needed before canonical and social metadata are completed. The reference page is intentionally excluded from indexing and navigation. Remove or restrict it before launch if desired.
