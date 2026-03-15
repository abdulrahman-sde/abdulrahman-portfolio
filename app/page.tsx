import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/Separator";
import { HeroSection } from "@/components/core/landing/HeroSection";
import { AboutSection } from "@/components/core/landing/AboutSection";
import { SkillsSection } from "@/components/core/landing/SkillsSection";
import { ExperienceSection } from "@/components/core/landing/ExperienceSection";
import { FeaturedProjectsSection } from "@/components/core/landing/FeaturedProjectsSection";
import { ContactSection } from "@/components/core/landing/ContactSection";

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <Separator
        className="animate-fade-in"
        style={{ animationDelay: "80ms" }}
      />
      <AboutSection />
      <Separator
        className="animate-fade-in"
        style={{ animationDelay: "240ms" }}
      />
      <div className="animate" style={{ animationDelay: "320ms" }}>
        <SkillsSection />
      </div>
      <Separator
        className="animate-fade-in"
        style={{ animationDelay: "400ms" }}
      />
      <ExperienceSection />
      <Separator
        className="animate-fade-in"
        style={{ animationDelay: "560ms" }}
      />
      <FeaturedProjectsSection />
      <Separator
        className="animate-fade-in"
        style={{ animationDelay: "720ms" }}
      />
      <div className="animate" style={{ animationDelay: "800ms" }}>
        <ContactSection />
      </div>
    </Container>
  );
}
