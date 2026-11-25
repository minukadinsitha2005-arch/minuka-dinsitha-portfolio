import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: "Projects",
  description: "The project collection of Minuka Dinsitha, Cybersecurity undergraduate and developer.",
};

export default function ProjectsPage() {
  return <PageIntro eyebrow="Projects" title="Work, in focus." description="Project case studies will be shared here. No projects have been published yet." />;
}
