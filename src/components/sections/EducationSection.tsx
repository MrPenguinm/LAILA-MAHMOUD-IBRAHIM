import { ScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Globe } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="relative py-20 px-4 sm:py-24 sm:px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
    <div className="relative mx-auto max-w-3xl space-y-6 sm:space-y-8">
      <ScrollReveal>
        <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-border/50 sm:p-8 md:p-10">
          <h2 className="mb-4 text-2xl font-semibold text-foreground font-display sm:text-3xl md:text-4xl">
            <GraduationCap className="mr-3 inline-block h-7 w-7 align-middle text-accent sm:h-8 sm:w-8" />
            Education
          </h2>
          <h3 className="text-base font-semibold text-foreground font-display sm:text-lg">Bachelor of Sharia and Law</h3>
          <p className="text-xs text-muted-foreground font-body sm:text-sm">Al-Azhar University, Cairo — 2023</p>
          <p className="mt-3 text-xs text-card-foreground/70 font-body leading-relaxed sm:text-sm">
            Advanced Arabic language studies encompassing rhetoric, linguistic analysis, and analytical thinking — skills directly applied to content creation and scriptwriting.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-border/50 sm:p-8 md:p-10">
          <h2 className="mb-4 text-2xl font-semibold text-foreground font-display sm:text-3xl md:text-4xl">
            <Globe className="mr-3 inline-block h-7 w-7 align-middle text-accent sm:h-8 sm:w-8" />
            Languages
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground font-body sm:text-base">Arabic</span>
              <span className="text-xs text-muted-foreground font-body sm:text-sm">Native</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground font-body sm:text-base">English</span>
              <span className="text-xs text-muted-foreground font-body sm:text-sm">Intermediate</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default EducationSection;
