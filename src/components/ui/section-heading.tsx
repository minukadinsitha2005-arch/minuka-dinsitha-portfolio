import type { ReactNode } from "react";
import { classes } from "@/lib/classes";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "large" | "medium";
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, description, as: Heading = "h2", size = "large", className }: SectionHeadingProps) {
  return (
    <div className={classes("max-w-4xl", className)}>
      {eyebrow && <p className="eyebrow mb-6 flex items-center gap-3"><span aria-hidden="true" className="h-px w-8 shrink-0 bg-orange" />{eyebrow}</p>}
      <Heading id={id} className={size === "large" ? "text-heading-xl" : "text-heading-lg"}>{title}</Heading>
      {description && <p className="mt-6 max-w-2xl text-body-lg text-muted-strong">{description}</p>}
    </div>
  );
}
