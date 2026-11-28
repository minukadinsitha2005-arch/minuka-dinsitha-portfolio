# Portrait-depth homepage refinement

## Scope

Refine the existing homepage and shared theme/navigation components within the App Router architecture. Preserve all five completed lower homepage sections, existing routes, approved facts, local content contracts, and the original portrait. Detailed pages, CMS, external services, and deployment remain deferred.

## Composition and portrait

- The hero remains a Server Component. A large centered transparent portrait is followed directly by one MINUKA DINSITHA H1, four professional categories, and one minimal scroll cue. Prior long copy stays in About; prior hero content/action fields remain in local data.
- The original 3024 x 4032 RGBA PNG is unchanged. Transparent headroom is removed through uniform CSS sizing and margins. All nontransparent bounds fit the portrait window, including the face, hairstyle, arms, and torso. A gentle fade blends only the lowest part of the portrait into the page.
- The depth hierarchy uses the page background, a very subtle bounded blue radial illumination, a portrait with a 1000px perspective parent and an 18px foreground translateZ, then the name/categories. No frame, rectangle, mouse tracking, rotation, floating loop, or text across the person is used.
- Parisienne at weight 400 provides only the hero name; Anybody provides all other text. Both load once through next/font/google in the root layout and are self-hosted after build. The name uses natural spacing, no synthetic weight, clamp(2rem, 5.9vw, 5.5rem) on desktop/tablet, and clamp(1.875rem, 10vw, 2.5rem) on phones. It stays on one line from tablet upward and wraps at the word space on phones. The padded clipping wrapper accommodates the script strokes during the existing reveal animation. Portrait sizing, image fade, depth, and motion remain unchanged.
- The categories are explicitly user-supplied and ordered CYBERSECURITY, AI DEVELOPER, TUTOR, ENTREPRENEUR. They use small uppercase text and blue separators, with a balanced two-column arrangement on phones. Cybersecurity remains the confirmed academic specialization.
- Portrait sizing considers viewport height and width. The hero has a minimum viewport height with normal document flow, allowing expansion instead of clipping on short screens.

## Navigation and themes

The header is transparent and sits in normal flow over the page background, with a one-pixel #DCEEFF divider. MD. sits at left and all six existing routes sit to the right. The theme control is removed; mobile retains the native disclosure menu.

The native mobile shell remains outside any suspending pathname read; its nested navigation has real-link fallbacks. It therefore remains usable without JavaScript. With JavaScript, Escape restores focus, outside interactions close the menu, route changes close it, and desktop resizing closes it.

All pages are permanently light. The unused provider, Sun/Moon toggle, theme switching styles, dark variables, and next-themes dependency are removed. CSS fixes color-scheme to light; saved preferences and operating-system changes cannot alter the palette. Anybody supplies all text except the unchanged Parisienne name. The light tokens, portrait/depth styles, and name animation remain unchanged.

## Motion and accessibility

Motion for React progressively enhances visible server HTML. The portrait rises 45px and scales from 0.96 to 1 over 0.85 seconds, the name rises through a clipping mask, categories stagger gently, and navigation/cue settle into place. The complete sequence takes about 1.05 seconds. Shared lower-section reveals and restrained hover interactions remain.

Reduced motion skips the sequence and removes transforms immediately, including live preference changes. Keyboard focus completes in-progress reveals. Semantics, visible focus, native links, and readable static content are preserved.

## Verification

Before the permanent-light cleanup, ESLint, Next route type generation, standalone TypeScript, and the production build passed. Earlier Chrome production-browser checks passed in both themes at 1920x1080, 1440x900, 1024x900, 768x1024, 390x844, and 320x740. At all twelve combinations, the name is fully visible on the initial screen and below the portrait, category order is correct, the header is transparent, all six homepage sections remain, and there is no horizontal overflow. Full-page screenshots and JSON reports are in the ignored node_modules/.cache/portfolio-qa directory.

Earlier browser interaction checks covered theme switching before its removal, navigation and career links, mobile-menu keyboard behavior, reduced motion, and no-JavaScript fallbacks. Current permanent-light validation checks Anybody on all other text, Parisienne only on the hero heading with unclipped strokes and unchanged Anybody text, absent theme controls, and light rendering despite a dark operating system or saved dark preference. Browser coverage is Chrome; other engines have not been tested.
