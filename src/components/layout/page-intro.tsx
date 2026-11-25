import type { ReactNode } from "react";
import { ContentContainer } from "@/components/ui/content-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedReveal } from "@/components/motion/animated-reveal";

/** Minimal destination shell; detailed page sections are a later phase. */
export function PageIntro({ eyebrow, title, description, children }: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="py-section">
      <ContentContainer>
        <AnimatedReveal>
          <SectionHeading id="page-title" as="h1" eyebrow={eyebrow} title={title} description={description} />
          {children && <div className="mt-10">{children}</div>}
        </AnimatedReveal>
      </ContentContainer>
    </section>
  );
}
