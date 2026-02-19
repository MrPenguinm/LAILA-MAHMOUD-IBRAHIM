import { ScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => (
  <section id="about" className="relative py-20 px-4 sm:py-24 sm:px-6 overflow-hidden">
    {/* Subtle background texture */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
    <div className="relative mx-auto max-w-3xl">
      <ScrollReveal>
        <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-border/50 sm:p-10 md:p-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground font-display sm:text-3xl md:text-4xl">About</h2>
          <div className="space-y-4 text-sm leading-relaxed text-card-foreground/80 font-body sm:text-base">
            <p>
              A dedicated social media specialist with a strong foundation in content creation, content strategy, and video editing. With experience across media companies and freelance projects, I bring creative ideas to life through compelling digital narratives.
            </p>
            <p>
              Grounded in advanced Arabic language studies — including rhetoric and linguistic analysis — I offer a unique edge in crafting precise, culturally resonant scripts and copy for Arabic-speaking audiences. My approach blends creative storytelling with strategic thinking to build authentic brand presence.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
