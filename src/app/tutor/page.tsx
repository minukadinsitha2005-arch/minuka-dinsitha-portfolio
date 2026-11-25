import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { SecondaryButton } from "@/components/ui/button";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Mathematics Tutor",
  description: "Contact Minuka Dinsitha about mathematics tutoring.",
};

export default function TutorPage() {
  return (
    <PageIntro eyebrow="Mathematics Tutor" title="A focus on mathematics." description="Get in touch to discuss mathematics tutoring.">
      <SecondaryButton href={`mailto:${profile.email}`}>Enquire by email <span aria-hidden="true">↗</span></SecondaryButton>
    </PageIntro>
  );
}
