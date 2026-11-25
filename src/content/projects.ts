import type { Project } from "@/types/content";

/** Add approved, real projects here. Keep empty until their details are supplied. */
export const projects: readonly Project[] = [];

/** Preserve editorial order and show no more than three explicitly featured items. */
export function getFeaturedProjects(collection: readonly Project[] = projects): readonly Project[] {
  return collection.filter((project) => project.featured === true).slice(0, 3);
}
