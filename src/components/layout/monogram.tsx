import Link from "next/link";
import { classes } from "@/lib/classes";

export function Monogram({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Minuka Dinsitha — home"
      className={classes("inline-flex min-h-12 items-center font-sans text-3xl font-bold leading-none tracking-[-0.08em]", className)}
    >
      MD<span className="text-accent-strong" aria-hidden="true">.</span>
    </Link>
  );
}
