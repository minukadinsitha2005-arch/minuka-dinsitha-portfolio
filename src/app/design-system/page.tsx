import type { Metadata } from "next";
import { ContentContainer } from "@/components/ui/content-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { AnimatedReveal } from "@/components/motion/animated-reveal";

export const metadata: Metadata = {
  title: "Design System",
  description: "The typography, palette, and reusable components for Minuka Dinsitha’s portfolio.",
  robots: { index: false, follow: false },
};

const palette = [
  { name: "Warm white", hex: "#FFFEF8", color: "bg-background" },
  { name: "Soft yellow", hex: "#FFF4CC", color: "bg-secondary" },
  { name: "Orange", hex: "#FF8A32", color: "bg-orange" },
  { name: "Golden yellow", hex: "#FFC857", color: "bg-golden" },
  { name: "Main text", hex: "#242424", color: "bg-ink" },
  { name: "Muted text", hex: "#77736D", color: "bg-muted" },
];

/** An unlinked, noindex reference surface; not part of portfolio navigation. */
export default function DesignSystemPage() {
  return (
    <ContentContainer className="py-section">
      <AnimatedReveal>
        <SectionHeading
          as="h1"
          eyebrow="Design reference / 02"
          title="A considered foundation."
          description="Warm surfaces. Confident typography. A little orange. The building blocks of a personal portfolio."
        />
      </AnimatedReveal>

      <section aria-labelledby="palette-title" className="mt-section border-t border-line pt-10">
        <SectionHeading id="palette-title" size="medium" eyebrow="01 / Color" title="A warmer palette." />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {palette.map(({ name, hex, color }) => (
            <div key={hex}>
              <div aria-hidden="true" className={`h-28 rounded-card border border-line ${color}`} />
              <p className="mt-4 text-small font-medium">{name}</p>
              <p className="text-small text-muted-strong">{hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="type-title" className="mt-section border-t border-line pt-10">
        <SectionHeading id="type-title" size="medium" eyebrow="02 / Typography" title="Words with presence." />
        <p className="mt-5 max-w-xl text-body text-muted-strong">Syne ExtraBold for display and headings. DM Sans for everything that needs a little more room to read.</p>
        <div className="mt-10 space-y-10">
          <div><p className="eyebrow mb-4 text-muted-strong">Display</p><p className="font-display text-display font-extrabold">Be curious.</p></div>
          <div><p className="eyebrow mb-4 text-muted-strong">Heading XL</p><p className="font-display text-heading-xl font-extrabold">Think clearly.</p></div>
          <div><p className="eyebrow mb-4 text-muted-strong">Heading LG</p><p className="font-display text-heading-lg font-extrabold">Make something meaningful.</p></div>
          <div><p className="eyebrow mb-4 text-muted-strong">Heading MD</p><p className="font-display text-heading-md font-extrabold">The details make the difference.</p></div>
          <div className="grid gap-8 md:grid-cols-2">
            <div><p className="eyebrow mb-4 text-muted-strong">Body large</p><p className="text-body-lg">A generous rhythm makes space for ideas, and keeps the story easy to follow.</p></div>
            <div><p className="eyebrow mb-4 text-muted-strong">Body / Small</p><p className="text-body">A clear, comfortable reading size for everyday content.</p><p className="mt-3 text-small text-muted-strong">Supporting details stay quiet, but always readable.</p></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="controls-title" className="mt-section border-t border-line pt-10">
        <SectionHeading id="controls-title" size="medium" eyebrow="03 / Elements" title="Small, purposeful details." />
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <PrimaryButton href="/contact">Get in touch <span aria-hidden="true">↗</span></PrimaryButton>
          <SecondaryButton href="/about">About me</SecondaryButton>
          <PrimaryButton disabled>Unavailable</PrimaryButton>
          <SecondaryButton disabled>Unavailable</SecondaryButton>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Badge>Neutral badge</Badge>
          <Badge tone="soft">Soft badge</Badge>
          <Badge tone="accent">Accent badge</Badge>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatedReveal>
            <Card className="h-full">
              <p className="eyebrow mb-6 text-muted-strong">Default card</p>
              <h3 className="text-heading-md">Space for the story.</h3>
              <p className="mt-4 text-body text-muted-strong">A thin border, a considered corner, and comfortable space. Content stays at the centre.</p>
            </Card>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <Card tone="soft" className="h-full">
              <p className="eyebrow mb-6 text-muted-strong">Soft card</p>
              <h3 className="text-heading-md">A quieter emphasis.</h3>
              <p className="mt-4 text-body text-muted-strong">A warm yellow surface offers contrast without adding a heavy shadow or visual noise.</p>
            </Card>
          </AnimatedReveal>
        </div>
      </section>
    </ContentContainer>
  );
}
