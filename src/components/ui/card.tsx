import type { ComponentPropsWithoutRef } from "react";
import { classes } from "@/lib/classes";

type CardProps = ComponentPropsWithoutRef<"div"> & { tone?: "default" | "soft" };

/** Non-interactive by default. Add a descriptive link/button inside when needed. */
export function Card({ tone = "default", className, ...props }: CardProps) {
  return <div className={classes("rounded-card border border-line p-6 sm:p-8", tone === "soft" ? "bg-secondary" : "bg-background", className)} {...props} />;
}
