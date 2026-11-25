import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/content";

const categories: Record<Project["category"], string> = {
  cybersecurity: "Cybersecurity",
  development: "Development",
  other: "Project",
};

const statuses: Record<Project["status"], string> = {
  "in-progress": "In progress",
  completed: "Completed",
  archived: "Archived",
};

export function ProjectCard({ project }: { project: Project }) {
  const destination = project.repositoryUrl ?? project.demoUrl;

  return (
    <article className="homepage-project">
      <Card className="homepage-project-card">
        {project.coverImage && (
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            width={project.coverImage.width}
            height={project.coverImage.height}
            sizes="(min-width: 1440px) 422px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            unoptimized={project.coverImage.src.startsWith("https://")}
            className="homepage-project-image"
          />
        )}
        <div className="homepage-project-meta">
          <span className="eyebrow">{categories[project.category]}</span>
          <Badge tone="soft">{statuses[project.status]}</Badge>
        </div>
        <h3 className="text-heading-md">{project.title}</h3>
        <p className="homepage-project-summary">{project.summary}</p>
        {project.technologies.length > 0 && (
          <ul aria-label="Technologies" className="homepage-project-technologies">
            {project.technologies.map((technology) => <li key={technology}><Badge>{technology}</Badge></li>)}
          </ul>
        )}
        {destination && (
          <a href={destination} className="homepage-text-link" aria-label={`${project.repositoryUrl ? "View repository" : "View live project"}: ${project.title}`}>
            {project.repositoryUrl ? "View repository" : "View live project"}
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        )}
      </Card>
    </article>
  );
}
