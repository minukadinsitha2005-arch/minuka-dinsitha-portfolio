"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/navigation";
import { classes } from "@/lib/classes";

export function NavigationLinks({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className={mobile ? "grid gap-1" : "flex items-center gap-7 xl:gap-9"}>
      {navigation.map(({ label, href }) => {
        const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <li key={href}>
            <Link
              href={href}
              className={classes("nav-link", mobile && "w-full py-2")}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
