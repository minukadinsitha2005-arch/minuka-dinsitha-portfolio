import { HomeHero } from "@/components/sections/home-hero";
import { CareerCards } from "@/components/sections/career-cards";
import { AboutPreview, ContactCallToAction, EducationPreview, FeaturedProjectsPreview } from "@/components/sections/homepage-previews";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CareerCards />
      <AboutPreview />
      <FeaturedProjectsPreview />
      <EducationPreview />
      <ContactCallToAction />
    </>
  );
}
