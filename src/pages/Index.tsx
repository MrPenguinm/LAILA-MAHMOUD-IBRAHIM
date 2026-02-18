import portraitImg from "@/assets/portrait.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Download, ArrowDown, Briefcase, GraduationCap, Globe, Sparkles, Camera, Video, PenTool, Megaphone, Users } from "lucide-react";

const experiences = [
  {
    company: "Spacetoon Group",
    role: "Social Media",
    period: "03/2024 – Present",
    duties: [
      "Video content production for social media platforms",
      "Creative scriptwriting for digital campaigns",
      "Campaign coordination and scheduling",
      "Arabic proofreading and linguistic editing",
      "Community and performance management",
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

const skills = [
  "Meta Business Suite", "Canva", "Media Buying", "MS Office",
  "Content Strategy", "Social Analytics", "Community Moderation",
  "Creative Scriptwriting", "CapCut", "Ad Copywriting",
  "Video Editing", "Linguistic Proofreading (Arabic)", "Photography",
];

const capabilities = [
  { icon: Video, title: "Short-Form Video Content", desc: "Social media video production for Reels & TikTok" },
  { icon: PenTool, title: "Creative Scriptwriting", desc: "Persuasive Arabic scripts for digital campaigns" },
  { icon: Camera, title: "Visual Design & Photography", desc: "Brand-aligned graphics and product photography" },
  { icon: Megaphone, title: "Campaign Management", desc: "Seasonal and promotional campaign coordination" },
  { icon: Users, title: "Community & Engagement", desc: "Audience management and brand voice maintenance" },
];

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={portraitImg}
            alt="Laila Mahmoud Ibrahim portrait"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl font-display">
            LAILA MAHMOUD<br />IBRAHIM
          </h1>
          <p className="mb-3 text-lg font-medium tracking-widest uppercase text-muted-foreground font-body sm:text-xl">
            Digital Marketer · Social Media Specialist
          </p>
          <p className="mx-auto mb-10 max-w-xl text-base text-muted-foreground/80 font-body leading-relaxed">
            Crafting compelling social media narratives through video content, creative scriptwriting, and strategic community engagement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 font-body">
              <a href="/Laila_Mahmoud_Ibrahim_CV.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-body"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="rounded-2xl bg-card p-8 shadow-lg sm:p-12">
              <h2 className="mb-6 text-3xl font-semibold text-foreground font-display sm:text-4xl">About</h2>
              <div className="space-y-4 text-base leading-relaxed text-card-foreground/80 font-body">
                <p>
                  A dedicated social media specialist with a strong foundation in short-form video content creation, content strategy, and video editing. With experience across media companies and freelance projects, I bring creative ideas to life through compelling digital narratives.
                </p>
                <p>
                  Grounded in advanced Arabic language studies — including rhetoric and linguistic analysis — I offer a unique edge in crafting precise, culturally resonant scripts and copy for Arabic-speaking audiences. My approach blends creative storytelling with strategic thinking to build authentic brand presence.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-semibold text-foreground font-display sm:text-4xl">
              <Briefcase className="mr-3 inline-block h-8 w-8 align-middle text-accent" />
              Experience
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 0.12}>
                <div className="rounded-2xl bg-card p-8 shadow-lg sm:p-10">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground font-display">{exp.company}</h3>
                      <p className="text-sm font-medium text-accent font-body">{exp.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-body">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-card-foreground/75 font-body">
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

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="rounded-2xl bg-card p-8 shadow-lg sm:p-12">
              <h2 className="mb-8 text-3xl font-semibold text-foreground font-display sm:text-4xl">
                <Sparkles className="mr-3 inline-block h-8 w-8 align-middle text-accent" />
                Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <ScrollReveal key={skill} delay={i * 0.05} className="inline-block">
                    <Badge
                      variant="secondary"
                      className="rounded-full px-4 py-2 text-sm font-body font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
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

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-semibold text-foreground font-display sm:text-4xl">
              What I Do
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.1}>
                <div className="group rounded-2xl bg-card p-7 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <cap.icon className="mb-4 h-7 w-7 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="mb-2 text-lg font-semibold text-foreground font-display">{cap.title}</h3>
                  <p className="text-sm text-card-foreground/70 font-body leading-relaxed">{cap.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & LANGUAGES */}
      <section id="education" className="py-24 px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <ScrollReveal>
            <div className="rounded-2xl bg-card p-8 shadow-lg sm:p-10">
              <h2 className="mb-4 text-3xl font-semibold text-foreground font-display sm:text-4xl">
                <GraduationCap className="mr-3 inline-block h-8 w-8 align-middle text-accent" />
                Education
              </h2>
              <h3 className="text-lg font-semibold text-foreground font-display">Bachelor of Sharia and Law</h3>
              <p className="text-sm text-muted-foreground font-body">Al-Azhar University, Cairo — 2023</p>
              <p className="mt-3 text-sm text-card-foreground/70 font-body leading-relaxed">
                Advanced Arabic language studies encompassing rhetoric, linguistic analysis, and analytical thinking — skills directly applied to content creation and scriptwriting.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl bg-card p-8 shadow-lg sm:p-10">
              <h2 className="mb-4 text-3xl font-semibold text-foreground font-display sm:text-4xl">
                <Globe className="mr-3 inline-block h-8 w-8 align-middle text-accent" />
                Languages
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground font-body">Arabic</span>
                  <span className="text-sm text-muted-foreground font-body">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground font-body">English</span>
                  <span className="text-sm text-muted-foreground font-body">Intermediate</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="rounded-2xl bg-card p-8 shadow-lg sm:p-12">
              <h2 className="mb-8 text-3xl font-semibold text-foreground font-display sm:text-4xl">Get in Touch</h2>

              <div className="mb-8 flex flex-col gap-3 text-sm text-card-foreground/80 font-body">
                <a href="mailto:laylooy181@gmail.com" className="flex items-center gap-3 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 text-accent" /> laylooy181@gmail.com
                </a>
                <a href="tel:+201093584498" className="flex items-center gap-3 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 text-accent" /> +20 109 358 4498
                </a>
                <span className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" /> Cairo, Egypt
                </span>
              </div>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  window.location.href = `mailto:laylooy181@gmail.com?subject=Portfolio Contact from ${data.get("name")}&body=${data.get("message")}`;
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required className="rounded-lg font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required className="rounded-lg font-body" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message…" rows={5} required className="rounded-lg font-body" />
                </div>
                <Button type="submit" size="lg" className="rounded-full px-8 font-body">
                  <Mail className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-muted-foreground font-body">
        © 2024 Laila Mahmoud Ibrahim. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
