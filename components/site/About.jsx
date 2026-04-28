import { Reveal } from "@/components/site/Reveal";

export const About = () => {
    return (<section id="about" className="relative py-12 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <Reveal variant="up" className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">[ About ]</Reveal>
              <Reveal as="h2" variant="up" delay={100} className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight">
                Empowering local businesses to <span className="serif font-normal text-gradient-animated">dominate</span> the digital space.
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <Reveal as="p" variant="up" className="text-xl lg:text-2xl text-foreground/90 leading-relaxed font-light">
              CatalystWeb Solutions is dedicated to helping local professionals — <span className="text-foreground font-normal">Doctors, Lawyers, Restaurateurs, and Boutique Owners</span> — establish a premium online presence. In a world where your first impression is often digital, we ensure your business stands out.
            </Reveal>

            <Reveal variant="left" delay={150} className="h-px bg-gradient-to-r from-border via-border/40 to-transparent"/>

            <Reveal as="p" variant="up" delay={200} className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Local businesses are the heart of our community. Unlike big agencies that offer generic templates, I provide{" "}
              <span className="text-foreground">personalized digital strategies</span> that convert local visitors into lifelong customers, ensuring your expertise is matched by your online authority.
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {[
            { k: "Personal", v: "Hands-on partner" },
            { k: "Premium", v: "Editorial craft" },
            { k: "Performant", v: "Built to convert" },
        ].map((p, i) => (<Reveal key={p.k} variant="zoom" delay={i * 120} className="glass rounded-2xl p-5 hover:-translate-y-2 hover:border-primary/40 transition-all duration-500">
                  <div className="text-xs uppercase tracking-widest text-accent">{p.k}</div>
                  <div className="mt-2 font-display text-lg font-medium">{p.v}</div>
                </Reveal>))}
            </div>
          </div>
        </div>
      </div>
    </section>);
};
