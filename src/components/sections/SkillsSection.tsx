import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const skills = [
  "Meta Business Suite", "Canva", "Media Buying", "MS Office",
  "Content Strategy", "Social Analytics", "Community Moderation",
  "Creative Scriptwriting", "CapCut", "Ad Copywriting",
  "Video Editing", "Linguistic Proofreading (Arabic)", "Photography",
];

const SkillsSection = () => (
  <section id="skills" className="relative py-20 px-4 sm:py-24 sm:px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent" />
    <div className="relative mx-auto max-w-3xl">
      <ScrollReveal>
        <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-border/50 hover:shadow-[0_8px_30px_hsl(45_55%_48%/0.08)] transition-shadow duration-500 sm:p-10 md:p-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground font-display sm:mb-8 sm:text-3xl md:text-4xl">
            <Sparkles className="mr-3 inline-block h-7 w-7 align-middle text-accent sm:h-8 sm:w-8" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill} delay={i * 0.05} className="inline-block">
                <Badge
                  variant="secondary"
                  className="rounded-full px-3 py-1.5 text-xs font-body font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default sm:px-4 sm:py-2 sm:text-sm"
                >
                  {skill}
                </Badge>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SkillsSection;
