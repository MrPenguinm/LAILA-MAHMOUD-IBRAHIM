import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Spacetoon Group",
    role: "Social Media",
    period: "03/2024 – Present",
    duties: [
      "Community and performance management",
      "Campaign coordination and scheduling",
      "Video content production for social media platforms",
      "Creative scriptwriting for digital campaigns",
      "Arabic proofreading and linguistic editing",
      "Photography support for content creation",
    ],
  },
  {
    company: "Black Circleeg",
    role: "Social Media & Content Specialist (Freelance)",
    period: "09/2021 – 10/2023",
    duties: [
      "Video editing and post-production",
      "Photography and graphic design",
      "Community management across platforms",
      "Media buying and paid campaign management",
      "Content strategy development and trend analysis",
      "Client coordination and project delivery",
    ],
  },
  {
    company: "Zoser El Kopa School",
    role: "Arabic Language Teacher",
    period: "11/2023 – 03/2024",
    duties: [
      "Structured Arabic language lessons",
      "Grammar and rhetoric instruction",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative py-20 px-4 sm:py-24 sm:px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-lg bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="relative mx-auto max-w-3xl">
      <ScrollReveal>
        <h2 className="mb-10 text-center text-2xl font-semibold text-foreground font-display sm:mb-12 sm:text-3xl md:text-4xl">
          <Briefcase className="mr-3 inline-block h-7 w-7 align-middle text-accent sm:h-8 sm:w-8" />
          Experience
        </h2>
      </ScrollReveal>

      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.company} delay={i * 0.12}>
            <div className="group rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-border/50 hover:shadow-[0_8px_30px_hsl(45_55%_48%/0.12)] hover:ring-accent/40 transition-all duration-300 sm:p-8 md:p-10">
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-display sm:text-xl">{exp.company}</h3>
                  <p className="text-sm font-medium text-accent font-body">{exp.role}</p>
                </div>
                <span className="text-xs text-muted-foreground font-body sm:text-sm">{exp.period}</span>
              </div>
              <ul className="space-y-2 text-xs text-card-foreground/75 font-body sm:text-sm">
                {exp.duties.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
