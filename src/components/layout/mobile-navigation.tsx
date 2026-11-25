"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NavigationLinks } from "@/components/layout/navigation-links";

/** Native disclosure semantics, with no modal focus trap or JavaScript dependency. */
export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  function close() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false;
  }, [pathname]);

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
      className="mobile-menu col-start-2 row-start-1 justify-self-end lg:hidden"
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
        className="flex min-h-12 items-center gap-3 rounded-full border border-line px-5 text-small font-medium"
      >
        Menu <span className="menu-icon" aria-hidden="true" />
      </summary>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="absolute inset-x-0 top-full border-b border-line bg-background px-6 py-5 sm:px-10"
      >
        <NavigationLinks mobile onNavigate={close} />
      </nav>
    </details>
  );
}
