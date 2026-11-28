"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef } from "react";
import { NavigationLinks } from "@/components/layout/navigation-links";
import { navigation } from "@/content/navigation";

/** Native disclosure semantics, with no modal focus trap or JavaScript dependency. */
export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  function close() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !detailsRef.current?.contains(event.target)) close();
    }

    function onFocusIn(event: FocusEvent) {
      if (event.target instanceof Node && !detailsRef.current?.contains(event.target)) close();
    }

    const desktop = window.matchMedia("(min-width: 64rem)");
    function onBreakpointChange() {
      if (desktop.matches) close();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    desktop.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, []);

  return (
    <details
      ref={detailsRef}
      className="mobile-menu lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && detailsRef.current?.open) {
          event.preventDefault();
          close();
          summaryRef.current?.focus();
        }
      }}
    >
      <summary
        ref={summaryRef}
        aria-controls="mobile-navigation"
        className="flex min-h-12 items-center gap-2 rounded-full px-2 text-small font-medium"
      >
        Menu <span className="menu-icon" aria-hidden="true" />
      </summary>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-navigation-panel absolute inset-x-0 top-full border-b border-line bg-background px-6 py-5 sm:px-10"
      >
        <Suspense fallback={
          <ul className="grid gap-1">
            {navigation.map(({ href, label }) => (
              <li key={href}><Link href={href} className="nav-link w-full py-2" onClick={close}>{label}</Link></li>
            ))}
          </ul>
        }>
          <NavigationLinks mobile onNavigate={close} />
        </Suspense>
      </nav>
    </details>
  );
}
