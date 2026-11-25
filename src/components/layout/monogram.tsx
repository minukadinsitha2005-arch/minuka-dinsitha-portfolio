import Link from "next/link";
import { classes } from "@/lib/classes";

export function Monogram({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Minuka Dinsitha — home"
      className={classes("inline-flex min-h-12 items-center font-display text-3xl font-extrabold leading-none tracking-[-0.08em]", className)}
    >
      MD<span className="text-orange" aria-hidden="true">.</span>
    </Link>
  );
}
