import Link from "next/link";
import { ContentContainer } from "@/components/ui/content-container";
import { Monogram } from "@/components/layout/monogram";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer id="site-footer" tabIndex={-1} className="border-t border-line bg-secondary/40">
      <ContentContainer>
        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          <div>
            <Monogram />
            <p className="mt-4 text-small font-medium">{profile.name}</p>
            <p className="mt-1 max-w-64 text-small text-muted-strong">
              Cybersecurity undergraduate.<br />Developer. Mathematics tutor.
            </p>
          </div>
          <div>
            <h2 className="eyebrow font-sans font-semibold">Say hello</h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block break-all text-small underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              {profile.email}
            </a>
            <p className="mt-3 text-small text-muted-strong">
              {profile.location.locality}, {profile.location.country}
            </p>
          </div>
          <nav aria-label="Social profiles">
            <h2 className="eyebrow font-sans font-semibold">Elsewhere</h2>
            <ul className="mt-3 flex flex-wrap gap-x-6 lg:flex-col lg:items-start">
              {profile.socialProfiles.map(({ platform, label, href }) => (
                <li key={platform}>
                  <a className="nav-link" href={href}>{label}<span aria-hidden="true">↗</span></a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-3 border-t border-line py-6 text-small text-muted-strong sm:flex-row sm:items-center sm:justify-between">
          <p>© {profile.name}</p>
          <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 self-start underline-offset-4 hover:underline">
            Let’s connect <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </ContentContainer>
    </footer>
  );
}
