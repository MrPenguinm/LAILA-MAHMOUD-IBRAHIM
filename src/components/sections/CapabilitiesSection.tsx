import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Video, PenTool, Camera, Megaphone, Users } from "lucide-react";

const capabilities = [
  { icon: Video, title: "Short-Form Video Content", desc: "Social media video production for Reels & TikTok" },
  { icon: PenTool, title: "Creative Scriptwriting", desc: "Persuasive Arabic scripts for digital campaigns" },
  { icon: Camera, title: "Visual Design & Photography", desc: "Brand-aligned graphics and product photography" },
  { icon: Megaphone, title: "Campaign Management", desc: "Seasonal and promotional campaign coordination" },
  { icon: Users, title: "Community & Engagement", desc: "Audience management and brand voice maintenance" },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="relative py-20 px-4 sm:py-24 sm:px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-lg bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="relative mx-auto max-w-3xl">
      <ScrollReveal>
        <h2 className="mb-10 text-center text-2xl font-semibold text-foreground font-display sm:mb-12 sm:text-3xl md:text-4xl">
          What I Do
        </h2>
      </ScrollReveal>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {capabilities.map((cap, i) => (
          <ScrollReveal key={cap.title} delay={i * 0.1}>
            <div className="group rounded-2xl bg-card/80 backdrop-blur-sm p-5 shadow-lg ring-1 ring-border/50 hover:shadow-xl hover:ring-accent/30 transition-all duration-300 h-full sm:p-7">
              <cap.icon className="mb-3 h-6 w-6 text-accent group-hover:scale-110 transition-transform sm:mb-4 sm:h-7 sm:w-7" />
              <h3 className="mb-1.5 text-base font-semibold text-foreground font-display sm:mb-2 sm:text-lg">{cap.title}</h3>
              <p className="text-xs text-card-foreground/70 font-body leading-relaxed sm:text-sm">{cap.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
