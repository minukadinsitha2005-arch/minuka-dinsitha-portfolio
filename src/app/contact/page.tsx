import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { PrimaryButton } from "@/components/ui/button";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Minuka Dinsitha in Ganemulla, Sri Lanka.",
};

export default function ContactPage() {
  return (
    <PageIntro eyebrow="Contact" title="Let’s connect." description="For professional enquiries, reach me by email or through the profiles below.">
      <PrimaryButton href={`mailto:${profile.email}`}>Send an email <span aria-hidden="true">↗</span></PrimaryButton>
    </PageIntro>
  );
}
