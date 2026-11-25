/**
 * Public, CMS-independent content contracts. No private records belong here.
 * Types do not validate external input or prove facts/consent; review content
 * before publication and validate/normalize future CMS data on the server.
 */
export type ContentArea = "it" | "tutor" | "entrepreneurship";

/** Validate the scheme and destination before publishing an external URL. */
export type WebUrl = `https://${string}`;

export interface ContentLink {
  readonly label: string;
  readonly href: WebUrl;
}

export interface ContentImage {
  readonly src: `/${string}` | WebUrl;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly caption?: string;
}

export interface SeoContent {
  readonly title: string;
  readonly description: string;
  readonly shareImage?: ContentImage;
}

/** Simple portable blocks; extend intentionally when richer content is needed. */
export type ContentBlock =
  | {
      readonly id: string;
      readonly kind: "text";
      readonly heading?: string;
      readonly paragraphs: readonly string[];
    }
  | {
      readonly id: string;
      readonly kind: "list";
      readonly heading?: string;
      readonly ordered: boolean;
      readonly items: readonly string[];
    }
  | {
      readonly id: string;
      readonly kind: "image";
      readonly image: ContentImage;
    };

export interface SocialProfile extends ContentLink {
  readonly platform: "linkedin" | "github" | "facebook";
  readonly identifier: string;
}

/** General public profile intentionally has no phone/WhatsApp field. */
export interface PublicProfile {
  readonly name: string;
  readonly professionalIdentity: readonly string[];
  readonly currentSpecialization: string;
  readonly location: {
    readonly locality: string;
    readonly country: string;
  };
  readonly email: string;
  readonly socialProfiles: readonly SocialProfile[];
  readonly shortBio?: string;
  readonly biography?: readonly ContentBlock[];
  readonly portrait?: ContentImage;
}

export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly category: "cybersecurity" | "development" | "other";
  readonly status: "in-progress" | "completed" | "archived";
  readonly technologies: readonly string[];
  readonly role?: string;
  readonly coverImage?: ContentImage;
  readonly body?: readonly ContentBlock[];
  readonly repositoryUrl?: WebUrl;
  readonly demoUrl?: WebUrl;
  /** Include only supplied, verified results; no inferred metrics. */
  readonly outcomes?: readonly string[];
  readonly featured?: boolean;
  readonly seo?: SeoContent;
}

/** Preserve known precision; future input validation must check calendar values. */
export interface ContentDate {
  readonly year: number;
  readonly month?: number;
  readonly day?: number;
}

/** Public education facts only; omit institutions and dates until supplied. */
export interface EducationEntry {
  readonly id: string;
  readonly title: string;
  readonly level: string;
  readonly status: "current" | "completed";
  readonly description: string;
  readonly institution?: string;
  readonly startedOn?: ContentDate;
  readonly endedOn?: ContentDate;
}

export interface Achievement {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly category: "academic" | "certification" | "competition" | "other";
  readonly issuer?: string;
  readonly awardedOn?: ContentDate;
  readonly evidenceUrl?: WebUrl;
  readonly image?: ContentImage;
  readonly body?: readonly ContentBlock[];
  readonly featured?: boolean;
}

/** Approved public quotes only. Keep private consent records elsewhere. */
export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly context: ContentArea;
  readonly author: {
    readonly displayName: string;
    readonly role?: string;
  };
  /** A publication requirement, not proof of consent or a runtime safeguard. */
  readonly publicationConsent: "granted";
  readonly featured?: boolean;
}

export interface EntrepreneurshipInitiative {
  readonly id: string;
  readonly name: string;
  readonly summary: string;
  readonly stage: "idea" | "exploring" | "in-progress" | "launched";
  readonly role?: string;
  readonly body?: readonly ContentBlock[];
  readonly image?: ContentImage;
  readonly links?: readonly ContentLink[];
  readonly featured?: boolean;
}

export interface EntrepreneurshipContent {
  readonly introduction: string;
  readonly initiatives: readonly EntrepreneurshipInitiative[];
  readonly seo?: SeoContent;
}

/** Render only in tutor contact functionality; exclude from global/SEO data. */
export interface TutorWhatsAppContact {
  /** International digits including country code, without spaces or a plus. */
  readonly internationalNumber: string;
  readonly enquiryMessage?: string;
}

export interface TutorContent {
  readonly introduction: string;
  readonly subjects: readonly string[];
  readonly levels: readonly string[];
  readonly curricula?: readonly string[];
  readonly languages?: readonly string[];
  readonly lessonFormats?: readonly ("online" | "in-person")[];
  readonly serviceArea?: string;
  readonly teachingApproach?: readonly ContentBlock[];
  /** Absent until a real number is supplied; never substitute a dummy number. */
  readonly whatsappContact?: TutorWhatsAppContact;
  readonly seo?: SeoContent;
}
