import Link from "next/link";
import { Suspense } from "react";
import { ContentContainer } from "@/components/ui/content-container";
import { Monogram } from "@/components/layout/monogram";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { NavigationLinks } from "@/components/layout/navigation-links";
import { navigation } from "@/content/navigation";

/** Preserve links in the static shell while future dynamic params resolve. */
function NavigationFallback() {
  return (
    <nav aria-label="Main navigation" className="col-span-2 flex flex-wrap gap-x-6">
      {navigation.map(({ href, label }) => (
        <Link key={href} href={href} className="nav-link">{label}</Link>
      ))}
    </nav>
  );
}

export function Navbar() {
  return (
    <header data-hero-navigation="" className="site-navbar relative z-20 border-b border-line bg-background">
      <ContentContainer className="grid grid-cols-[1fr_auto] items-center gap-x-8 py-5 sm:py-6">
        <Monogram className="site-monogram col-start-1 row-start-1 justify-self-start" />
        <Link href="/contact" className="homepage-contact hidden">Contact</Link>
        <Suspense fallback={<NavigationFallback />}>
          <nav aria-label="Main navigation" className="hidden lg:block">
            <NavigationLinks />
          </nav>
          <MobileNavigation />
        </Suspense>
      </ContentContainer>
    </header>
  );
}
