import Image from "next/image";
import { ArrowDown } from "lucide-react";
import portrait from "../../../public/images/minuka-hero.png";
import { HeroEntrance } from "@/components/motion/hero-entrance";
import { ContentContainer } from "@/components/ui/content-container";
import { homeHero } from "@/content/home-hero";
import "./home-hero.css";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-name" className="home-hero">
      <ContentContainer>
        <HeroEntrance className="hero-composition">
          <figure className="hero-portrait-stage">
            <div data-hero-glow="" data-hero-reveal="" className="hero-glow" aria-hidden="true" />
            <div className="hero-portrait-depth">
              <div data-hero-portrait="" data-hero-reveal="" className="hero-portrait-window">
                <Image
                  src={portrait}
                  alt="Minuka Dinsitha in a white shirt, with arms folded, looking to the side."
                  className="hero-portrait-image"
                  sizes="(min-width: 1280px) 690px, (min-width: 1024px) 56vw, (min-width: 768px) 50vw, 125vw"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </figure>
          <div className="hero-heading-mask">
            <h1 id="hero-name" data-hero-name="" data-hero-reveal="" className="hero-name">
              {homeHero.firstName} {homeHero.lastName}
            </h1>
          </div>
          <ul className="hero-categories" aria-label="Professional categories">
            {homeHero.categories.map((category) => (
              <li key={category} data-hero-category="" data-hero-reveal="">{category}</li>
            ))}
          </ul>
          <a href="#career-paths" data-hero-cue="" data-hero-reveal="" className="hero-scroll-link">
            <span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" size={15} strokeWidth={1.5} />
          </a>
        </HeroEntrance>
      </ContentContainer>
    </section>
  );
}
