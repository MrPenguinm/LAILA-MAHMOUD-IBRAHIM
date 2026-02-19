import portraitImg from "@/assets/portrait.jpg";
import { Button } from "@/components/ui/button";
import { Mail, Download, ArrowDown } from "lucide-react";
import SparkleEffect from "@/components/SparkleEffect";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

const HeroSection = ({ onScrollTo }: HeroSectionProps) => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
    {/* Animated background layers */}
    <div className="absolute inset-0">
      <img
        src={portraitImg}
        alt="Laila Mahmoud Ibrahim portrait"
        className="h-full w-full object-cover object-top scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-navy-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      {/* Magical floating orbs with gold tint */}
      <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/8 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 left-1/4 h-48 w-48 rounded-full bg-burgundy/8 blur-3xl animate-[float_10s_ease-in-out_2s_infinite]" />
      <SparkleEffect />
    </div>

    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground font-display sm:text-6xl md:text-7xl lg:text-8xl">
        LAILA MAHMOUD<br />IBRAHIM
      </h1>
      <p className="mb-3 text-base font-medium tracking-[0.25em] uppercase text-accent font-body sm:text-lg md:text-xl">
        Digital Marketer · Social Media Specialist
      </p>
      <p className="mx-auto mb-8 max-w-xl text-sm text-muted-foreground/80 font-body leading-relaxed sm:mb-10 sm:text-base">
        Crafting compelling social media narratives through video content, creative scriptwriting, and strategic community engagement.
      </p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <Button asChild size="lg" className="w-full rounded-full px-8 font-body shadow-lg hover:shadow-[0_0_25px_hsl(45_55%_48%/0.2)] transition-shadow duration-300 sm:w-auto">
          <a href="/LAILA-MAHMOUD-IBRAHIM-Resume.pdf" download>
            <Download className="mr-2 h-4 w-4" /> Download CV
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full rounded-full px-8 font-body hover:shadow-[0_0_20px_hsl(45_55%_48%/0.1)] transition-shadow duration-300 sm:w-auto"
          onClick={() => onScrollTo("contact")}
        >
          <Mail className="mr-2 h-4 w-4" /> Contact
        </Button>
      </div>
    </div>

    <button
      onClick={() => onScrollTo("about")}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 hover:text-accent transition-colors"
      aria-label="Scroll down"
    >
      <ArrowDown className="h-6 w-6 animate-bounce" />
    </button>
  </section>
);

export default HeroSection;
