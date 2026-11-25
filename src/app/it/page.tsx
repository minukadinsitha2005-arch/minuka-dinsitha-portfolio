import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: "IT Industry",
  description: "Minuka Dinsitha’s professional focus: Cybersecurity and development.",
};

export default function ItPage() {
  return <PageIntro eyebrow="IT Industry" title="Cybersecurity & development." description="My primary professional focus, as a Cybersecurity undergraduate and developer." />;
}
