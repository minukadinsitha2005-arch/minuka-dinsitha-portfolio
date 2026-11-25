import Link from "next/link";
import { ArrowUpRight, GraduationCap, ShieldCheck } from "lucide-react";
import { AnimatedReveal } from "@/components/motion/animated-reveal";
import { ContentContainer } from "@/components/ui/content-container";
import { Card } from "@/components/ui/card";
import { careerSelection } from "@/content/careers";
import "./career-cards.css";

export function CareerCards() {
  return (
    <section id="career-paths" aria-labelledby="career-heading" className="career-section">
      <ContentContainer>
        <div className="career-heading-row">
          <h2 id="career-heading" className="career-heading">
            {careerSelection.heading[0]}<br />{careerSelection.heading[1]}
          </h2>
          <p className="career-introduction">{careerSelection.subtitle}</p>
        </div>
        <div className="career-grid">
          {careerSelection.paths.map((path, index) => {
            const Icon = path.id === "it" ? ShieldCheck : GraduationCap;
            return (
              <AnimatedReveal key={path.id} delay={index * 0.08} distance={14} className="career-item">
                <Link
                  href={path.href}
                  className="career-link"
                  aria-labelledby={`${path.id}-career-action ${path.id}-career-title`}
                  aria-describedby={`${path.id}-career-subtitle ${path.id}-career-summary`}
                >
                  <Card tone={path.id === "tutor" ? "soft" : "default"} className={`career-card career-card--${path.id}`}>
                    <div className="career-card-top">
                      <p className="career-number">{path.number}</p>
                      <Icon aria-hidden="true" className="career-icon" strokeWidth={1.5} />
                    </div>
                    <h3 id={`${path.id}-career-title`} className="career-title">{path.title}</h3>
                    <p id={`${path.id}-career-subtitle`} className="career-subtitle">{path.subtitle}</p>
                    <p id={`${path.id}-career-summary`} className="career-description">{path.description}</p>
                    <div className="career-card-bottom">
                      <span id={`${path.id}-career-action`}>{path.action}</span>
                      <span className="career-arrow" aria-hidden="true"><ArrowUpRight size={22} strokeWidth={1.5} /></span>
                    </div>
                  </Card>
                </Link>
              </AnimatedReveal>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
