import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Minuka Dinsitha, a Cybersecurity undergraduate, developer, mathematics tutor, and aspiring entrepreneur in Sri Lanka.",
};

export default function AboutPage() {
  return <PageIntro eyebrow="About" title="Minuka Dinsitha." description="Cybersecurity undergraduate, developer, mathematics tutor, and aspiring entrepreneur based in Ganemulla, Sri Lanka." />;
}
