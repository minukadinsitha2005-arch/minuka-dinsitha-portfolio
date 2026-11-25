import type { PublicProfile } from "@/types/content";

/** Supplied public facts only. Social destinations still need confirmation. */
export const profile = {
  name: "Minuka Dinsitha",
  professionalIdentity: [
    "Cybersecurity Undergraduate",
    "Developer",
    "Mathematics Tutor",
    "Aspiring Entrepreneur",
  ],
  currentSpecialization: "Cybersecurity",
  location: {
    locality: "Ganemulla",
    country: "Sri Lanka",
  },
  email: "minuka.dinsitha2005@gmail.com",
  socialProfiles: [
    {
      platform: "linkedin",
      label: "LinkedIn",
      identifier: "minukadinsitha",
      href: "https://www.linkedin.com/in/minukadinsitha/",
    },
    {
      platform: "github",
      label: "GitHub",
      identifier: "minukadinsitha2005-arch",
      href: "https://github.com/minukadinsitha2005-arch",
    },
    {
      platform: "facebook",
      label: "Facebook",
      identifier: "minuka.dinsitha",
      href: "https://www.facebook.com/minuka.dinsitha",
    },
  ],
} as const satisfies PublicProfile;
