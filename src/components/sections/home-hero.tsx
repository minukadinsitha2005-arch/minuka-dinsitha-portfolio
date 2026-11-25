import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import portrait from "../../../public/images/minuka-portrait.png";
import { HeroEntrance } from "@/components/motion/hero-entrance";
import { ContentContainer } from "@/components/ui/content-container";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { homeHero } from "@/content/home-hero";
import { profile } from "@/content/profile";
import "./home-hero.css";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-name" className="home-hero home-hero--editorial">
      <ContentContainer>
        <HeroEntrance>
          <div className="hero-topline">
            <p className="hero-eyebrow">{homeHero.introduction}</p>
            <p className="hero-location">{profile.location.locality}, {profile.location.country}</p>
          </div>

          <div className="hero-composition">
            <h1 id="hero-name" className="hero-name">
              <span className="hero-name-line hero-name-first">
                <span data-hero-first="" data-hero-reveal="">{homeHero.firstName}</span>
              </span>
              {" "}
              <span className="hero-name-line hero-name-last">
                <span data-hero-last="" data-hero-reveal="">{homeHero.lastName}</span>
              </span>
            </h1>

            <div data-hero-copy="" data-hero-reveal="" className="hero-identity">
              <p className="hero-profession">{homeHero.title}</p>
              <p className="hero-secondary-identity">{homeHero.secondaryIdentity}</p>
              <p className="hero-tagline">{homeHero.tagline}</p>
            </div>

            <div className="hero-summary">
              <p data-hero-copy="" data-hero-reveal="" className="hero-description">{homeHero.description}</p>
              <div data-hero-actions="" data-hero-reveal="" className="hero-actions">
                <PrimaryButton href={homeHero.actions.primary.href}>
                  {homeHero.actions.primary.label}<ArrowUpRight aria-hidden="true" size={18} />
                </PrimaryButton>
                <SecondaryButton href={homeHero.actions.secondary.href}>
                  {homeHero.actions.secondary.label}
                </SecondaryButton>
              </div>
            </div>

            <figure className="hero-portrait-stage">
              <div data-hero-portrait="" data-hero-reveal="" className="hero-portrait-window">
                <Image
                  src={portrait}
                  alt="Minuka Dinsitha in a white shirt, with arms folded, looking to the side."
                  className="hero-portrait-image"
                  sizes="(min-width: 1440px) 762px, (min-width: 768px) 58vw, (min-width: 448px) 515px, 125vw"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </figure>
          </div>

          <div className="hero-colophon">
            <a href="#career-paths" className="hero-scroll-link">
              <span className="hero-scroll-icon" aria-hidden="true">
                <ArrowDown data-hero-scroll="" data-hero-reveal="" size={18} strokeWidth={1.4} />
              </span>
              <span>SCROLL TO EXPLORE</span>
            </a>
          </div>
        </HeroEntrance>
      </ContentContainer>
    </section>
  );
}
