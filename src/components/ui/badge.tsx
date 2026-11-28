import type { ComponentPropsWithoutRef } from "react";
import { classes } from "@/lib/classes";

type BadgeProps = ComponentPropsWithoutRef<"span"> & { tone?: "neutral" | "soft" | "accent" };
const tones = {
  neutral: "border-line bg-transparent",
  soft: "border-transparent bg-secondary",
  accent: "border-transparent bg-elevated",
};

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return <span className={classes("inline-flex items-center rounded-full border px-3 py-1 text-small font-medium text-ink", tones[tone], className)} {...props} />;
}
