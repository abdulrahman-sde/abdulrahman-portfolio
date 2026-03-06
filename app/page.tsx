import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/Separator";
import { HeroSection } from "@/components/core/landing/HeroSection";
import { AboutSection } from "@/components/core/landing/AboutSection";
import { SkillsSection } from "@/components/core/landing/SkillsSection";
import { ExperienceSection } from "@/components/core/landing/ExperienceSection";
import { ContactSection } from "@/components/core/landing/ContactSection";

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <Separator />
      <AboutSection />
      <Separator />
      <SkillsSection />
      <Separator />
      <ExperienceSection />
      <Separator />
      <ContactSection />
    </Container>
  );
}
