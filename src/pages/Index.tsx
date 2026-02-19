import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onScrollTo={scrollToSection} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <CapabilitiesSection />
      <EducationSection />
      <ContactSection />

      <footer className="py-6 text-center text-xs text-muted-foreground font-body sm:py-8 sm:text-sm">
        © 2026 Laila Mahmoud Ibrahim. All rights reserved.
      </footer>

      <MusicToggle />
    </main>
  );
};

export default Index;
