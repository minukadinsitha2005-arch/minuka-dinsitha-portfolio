import { ArrowUpRight, FolderOpen, GraduationCap } from "lucide-react";
import { AnimatedReveal } from "@/components/motion/animated-reveal";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { ContentContainer } from "@/components/ui/content-container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, homepage } from "@/content/homepage";
import { getFeaturedProjects } from "@/content/projects";
import "./homepage-previews.css";

export function AboutPreview() {
  return (
    <section aria-labelledby="home-about-heading" className="homepage-preview homepage-about">
      <ContentContainer>
        <div className="homepage-split">
          <SectionHeading id="home-about-heading" eyebrow={homepage.about.eyebrow} title={homepage.about.heading} size="medium" />
          <AnimatedReveal distance={12} className="homepage-about-copy">
            <p className="text-body-lg">{homepage.about.introduction}</p>
            <p className="homepage-supporting-copy">{homepage.about.description}</p>
            <p className="homepage-supporting-copy">{homepage.about.interests}</p>
            <SecondaryButton href="/about" className="homepage-button">
              {homepage.about.action}<ArrowUpRight aria-hidden="true" size={18} />
            </SecondaryButton>
          </AnimatedReveal>
        </div>
      </ContentContainer>
    </section>
  );
}

export function FeaturedProjectsPreview() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section aria-labelledby="home-projects-heading" className="homepage-preview homepage-work">
      <ContentContainer>
        <div className="homepage-section-header">
          <SectionHeading id="home-projects-heading" eyebrow={homepage.projects.eyebrow} title={homepage.projects.heading} description={homepage.projects.introduction} size="medium" />
          <SecondaryButton href="/projects" className="homepage-button">
            {homepage.projects.action}<ArrowUpRight aria-hidden="true" size={18} />
          </SecondaryButton>
        </div>
        {featuredProjects.length > 0 ? (
          <div className="homepage-project-grid">
            {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        ) : (
          <div className="homepage-project-empty">
            <FolderOpen aria-hidden="true" size={32} strokeWidth={1.25} />
            <div>
              <h3 className="text-heading-md">{homepage.projects.emptyHeading}</h3>
              <p className="homepage-supporting-copy">{homepage.projects.emptyDescription}</p>
            </div>
          </div>
        )}
      </ContentContainer>
    </section>
  );
}

export function EducationPreview() {
  return (
    <section aria-labelledby="home-education-heading" className="homepage-preview homepage-education">
      <ContentContainer>
        <div className="homepage-split">
          <SectionHeading id="home-education-heading" eyebrow={homepage.education.eyebrow} title={homepage.education.heading} description={homepage.education.introduction} size="medium" />
          <ol className="homepage-education-list">
            {education.map((entry) => (
              <li key={entry.id} className="homepage-education-entry">
                <GraduationCap aria-hidden="true" size={28} strokeWidth={1.5} />
                <div>
                  <Badge tone="soft">{entry.status === "current" ? "Current study" : "Completed study"}</Badge>
                  <h3 className="text-heading-md">{entry.title}</h3>
                  <p className="homepage-education-level">{entry.level}{entry.institution && ` · ${entry.institution}`}</p>
                  <p className="homepage-supporting-copy">{entry.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </ContentContainer>
    </section>
  );
}

export function ContactCallToAction() {
  return (
    <section aria-labelledby="home-contact-heading" className="homepage-contact-section">
      <ContentContainer>
        <AnimatedReveal distance={12}>
          <div className="homepage-contact-panel">
            <p className="eyebrow">{homepage.contact.eyebrow}</p>
            <h2 id="home-contact-heading" className="homepage-contact-heading">{homepage.contact.heading}</h2>
            <div className="homepage-contact-bottom">
              <p>{homepage.contact.description}</p>
              <PrimaryButton href="/contact" className="homepage-button">
                {homepage.contact.action}<ArrowUpRight aria-hidden="true" size={18} />
              </PrimaryButton>
            </div>
          </div>
        </AnimatedReveal>
      </ContentContainer>
    </section>
  );
}
