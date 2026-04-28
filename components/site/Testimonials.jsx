import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";

const testimonials = [
    { quote: "Our clinic's online bookings have increased by 40% since the new site went live. The professional look has significantly improved patient trust even before they walk through our doors.", name: "Dr. Rajeev Desai", role: "Chief Physician, CityCare Medical Center" },
    { quote: "The authoritative design of our new website has been a game-changer. We finally have a digital presence that matches the caliber of legal services we provide to our clients.", name: "Priya Sharma", role: "Managing Partner, Legal Associates" },
    { quote: "The new interactive digital menu transformed how we take reservations. It is visually immersive and seamlessly integrated with our booking system. We've seen a huge increase in local footfall.", name: "Amit Patel", role: "Owner, The Great Eastern" },
    { quote: "Taking our traditional store online was daunting, but the stunning e-commerce presence you built made it seamless and stylish. Our designer collections look absolutely beautiful online.", name: "Anjali Verma", role: "Founder, Anya's Ethnic Boutique" },
];

export const Testimonials = () => {
    return (<section id="testimonials" className="relative py-12 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"/>

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Reveal className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">[ Testimonials ]</Reveal>
          <Reveal as="h2" delay={100} className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight">
            Don't just take <span className="serif font-normal text-gradient-animated">my word</span> for it.
          </Reveal>
          <Reveal as="p" delay={200} className="mt-6 text-lg text-muted-foreground">See what my clients have to say about their experience.</Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} variant="up" delay={(i % 2) * 150}>
              <TiltCard className="h-full" intensity={5}>
                <figure className="group relative h-full rounded-3xl glass p-8 lg:p-10 hover:border-primary/40 transition-all duration-500">
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/15 group-hover:text-primary/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"/>

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, k) => (<Star key={k} className="h-4 w-4 fill-accent text-accent" style={{ transitionDelay: `${k * 60}ms` }}/>))}
                  </div>

                  <blockquote className="font-display text-lg lg:text-xl leading-relaxed text-foreground/90">
                    "{t.quote}"
                  </blockquote>

                  <figcaption className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-display font-semibold group-hover:scale-110 transition-transform">
                      {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <div>
                      <div className="font-medium text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>);
};
