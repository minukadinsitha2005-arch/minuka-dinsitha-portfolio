import Link from "next/link";
import { Allura } from "next/font/google";
import { Suspense } from "react";
import { ContentContainer } from "@/components/ui/content-container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { NavigationLinks } from "@/components/layout/navigation-links";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";

const logoFont = Allura({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

/** Preserve links in the static shell while future dynamic params resolve. */
function NavigationFallback() {
  return (
    <nav aria-label="Main navigation" className="desktop-navigation">
      <ul className="flex items-center gap-7 xl:gap-9">
        {navigation.map(({ href, label }) => (
          <li key={href}><Link href={href} className="nav-link">{label}</Link></li>
        ))}
      </ul>
    </nav>
  );
}

export function Navbar() {
  return (
    <header data-hero-navigation="" className="site-navbar">
      <ContentContainer className="navbar-inner">
        <Link href="/" aria-label={`${profile.name} — home`} className={`${logoFont.className} navbar-signature`}>
          {profile.name}
        </Link>
        <Suspense fallback={<NavigationFallback />}>
          <nav aria-label="Main navigation" className="desktop-navigation">
            <NavigationLinks />
          </nav>
        </Suspense>
        <div className="navbar-actions">
          <MobileNavigation />
        </div>
      </ContentContainer>
    </header>
  );
}
