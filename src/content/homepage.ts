import { profile } from "@/content/profile";
import type { EducationEntry } from "@/types/content";
import { homeHero } from "@/content/home-hero";

/** Homepage copy grounded in the supplied identity and teaching information. */
export const homepage = {
  about: {
    eyebrow: "A little context",
    heading: "About me.",
    introduction: `I'm ${profile.name}, a Cybersecurity undergraduate based in ${profile.location.locality}, ${profile.location.country}. My interests connect technology, education, and entrepreneurship.`,
    description: "Alongside development, I teach English Medium Mathematics to students in Grades 6–11.",
    interests: homeHero.description,
    action: "More about me",
  },
  projects: {
    eyebrow: "Selected work",
    heading: "Featured projects.",
    introduction: "A closer look at cybersecurity and software development.",
    emptyHeading: "No featured projects published yet.",
    emptyDescription: "A selection of projects will appear here as they are shared.",
    action: "Explore all projects",
  },
  education: {
    eyebrow: "Education",
    heading: "Learning with purpose.",
    introduction: "My academic focus is Cybersecurity — part of a broader interest in technology, development, and education.",
  },
  contact: {
    eyebrow: "Start a conversation",
    heading: "LET'S BUILD SOMETHING MEANINGFUL.",
    description: "Have a technology project, an opportunity, or an idea to discuss? Let's connect.",
    action: "Get in touch",
  },
} as const;

/** Only the current specialization and undergraduate level are confirmed. */
export const education: readonly EducationEntry[] = [
  {
    id: "cybersecurity-undergraduate",
    title: profile.currentSpecialization,
    level: "Undergraduate",
    status: "current",
    description: "My current undergraduate specialization is Cybersecurity.",
  },
];
