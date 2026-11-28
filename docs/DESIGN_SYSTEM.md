# Design system — Phase 02

## Scope

The global shell, cinematic hero, and completed Phase 04 homepage are implemented. Existing destination shells remain intentionally minimal. /design-system is an unlinked, noindex reference. See HERO.md for the latest composition and validation.

## Tokens and typography

src/app/globals.css defines permanent-light semantic variables for background, secondary, elevated, accent, foreground, muted, border, and focus. Tailwind 4 maps existing shared utility contracts to those tokens. Use the supplied white/blue palette from PROJECT_BRIEF.md. For small text, use muted-strong; the original light muted swatch alone falls below 4.5:1 on blue surfaces. Accent buttons use navy text.

The root layout loads Parisienne at its supported 400 weight with --font-signature, and variable Anybody (100–900) with --font-body. Both use next/font/google, display swap, and self-hosted files after build. Both fonts use their supported Latin subset option. Parisienne is exclusive to the hero name. Tailwind font-sans/font-heading and every other heading/body/control use Anybody. Body text uses 400, navigation/buttons 500–600, and section headings 700. The shared shell renders without a theme provider or toggle. Light mode is fixed through CSS color-scheme and the original light tokens, independent of stored preferences or operating-system settings.

Typography utilities:

| Utility | Size | Use |
| --- | --- | --- |
| `text-display` | Fluid 3.5–8rem | Oversized display text |
| `text-heading-xl` | Fluid 2.75–5.5rem; reduced below 384px | Page headings; long words stay within small phones |
| `text-heading-lg` | Fluid 2–3.5rem | Section headings |
| `text-heading-md` | Fluid 1.375–1.75rem | Card headings |
| `text-body-lg` | Fluid 1.125–1.375rem | Introductions |
| `text-body` | 1rem | Body copy |
| `text-small` | 0.875rem | Supporting copy |
| `eyebrow` | 0.6875rem | Short uppercase labels |

Headings use Anybody at weight 700 automatically. Use `font-sans font-bold` or `font-heading font-bold` for large text that is not a heading; reserve the --font-signature variable for the personal name. The script name uses normal letter/word spacing, no font synthesis, a 1.15 line height, and padded animation-mask clearance. Keep heading levels semantic. Tailwind's standard 4px spacing rhythm handles component spacing; `py-section`/`mt-section` use a fluid 4–8rem section rhythm. Cards use `rounded-card` (1.5rem). Buttons use restrained pill shapes without shadows.

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

All six destinations remain defined once in `src/content/navigation.ts`. The desktop navigation shows all six destinations; there is no theme control. The transparent header has a one-pixel blue divider. Mobile retains all six destinations. Active links use `aria-current="page"`, including nested project paths. The client navigation is inside Suspense because this project's Cache Components setting can suspend pathname reads for future unknown dynamic params. The fallback preserves real links.

Below 64rem, a native `details`/`summary` disclosure opens the mobile menu. The summary supports Enter/Space and exposes native expanded/collapsed semantics. With JavaScript, Escape closes and restores summary focus; leaving the disclosure by pointer or keyboard, changing route, or resizing to desktop also closes it. The menu is non-modal and does not trap focus. It opens below the header without a full-screen overlay. With JavaScript disabled, the disclosure and normal links still work.

The root layout owns the sole `main` landmark and a keyboard-visible skip link. Do not nest another `main` in pages. Interactive controls have visible focus, and buttons/menu controls are at least 48px high. Text uses dark colors on light surfaces; blue accents supply restrained emphasis; every surface uses the fixed light palette. Footer profile links use the supplied identifiers, which still need owner confirmation before launch.

## Motion

Motion handles animation and Lucide supplies icons. The unused next-themes dependency has been removed. Shared duration/easing/keyframes live in `src/components/motion/presets.ts`. `AnimatedReveal` uses Motion's `useAnimate`, `useInView`, and `useReducedMotion` hooks. It animates opacity/translation once as content enters the viewport, caps stagger delay at 0.5s, completes if keyboard focus enters, and restores visible styles on cleanup. Server HTML starts visible; failed/disabled JavaScript cannot hide content. Reduced motion skips the reveal, while the CSS media query also removes translation and transitions immediately if the preference changes during an animation.

Official API references: [useAnimate](https://motion.dev/docs/react-use-animate), [useReducedMotion](https://motion.dev/docs/react-use-reduced-motion).

## Deferred work

The homepage and shared permanent-light palette are implemented. Full destination-page content, real project records, fuller education details, Sanity, contact backend, and deployment remain deferred. A domain and approved share image are still needed before canonical and social metadata are completed. The reference page is intentionally excluded from indexing and navigation. Remove or restrict it before launch if desired.
