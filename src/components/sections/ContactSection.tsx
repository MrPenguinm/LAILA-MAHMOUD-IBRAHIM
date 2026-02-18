import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const name = encodeURIComponent(String(data.get("name") || "").trim());
    const email = encodeURIComponent(String(data.get("email") || "").trim());
    const message = encodeURIComponent(String(data.get("message") || "").trim());

    if (!name || !email || !message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      setSending(false);
      return;
    }

    window.location.href = `mailto:laylooy181@gmail.com?subject=Portfolio Contact from ${name} (${email})&body=${message}`;

    toast({ title: "Opening your email client…", description: "Complete sending in your mail app." });
    setTimeout(() => setSending(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:py-24 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-lg bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-border/50 sm:p-10 md:p-12">
            <h2 className="mb-6 text-2xl font-semibold text-foreground font-display sm:mb-8 sm:text-3xl md:text-4xl">Get in Touch</h2>

            <div className="mb-6 flex flex-col gap-3 text-xs text-card-foreground/80 font-body sm:mb-8 sm:text-sm">
              <a href="mailto:laylooy181@gmail.com" className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-accent shrink-0" /> laylooy181@gmail.com
              </a>
              <a href="tel:+201093584498" className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-accent shrink-0" /> +20 109 358 4498
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0" /> Cairo, Egypt
              </span>
            </div>

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body text-sm">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required className="rounded-lg font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body text-sm">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required className="rounded-lg font-body" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-body text-sm">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message…" rows={4} required className="rounded-lg font-body sm:rows-5" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full px-8 font-body sm:w-auto" disabled={sending}>
                <Mail className="mr-2 h-4 w-4" /> {sending ? "Opening…" : "Send Message"}
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
