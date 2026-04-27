import { MapPin, Settings2, LayoutTemplate, ArrowUpRight } from "lucide-react";
const services = [
    {
        icon: MapPin,
        title: "Local SEO & Google Maps",
        desc: "We optimize your business to appear at the top of local searches and Google Maps, ensuring customers in your area find you first.",
        tags: ["GMB", "Citations", "Reviews"],
    },
    {
        icon: Settings2,
        title: "Custom Business Systems",
        desc: "From online appointment bookings for doctors and lawyers to digital menus for restaurants, we build systems that automate your workflow.",
        tags: ["Booking", "Menus", "Portals"],
    },
    {
        icon: LayoutTemplate,
        title: "High-Converting Web Design",
        desc: "Tailor-made, premium websites designed specifically for local professionals to showcase authority and convert visitors into clients.",
        tags: ["UX", "Brand", "Speed"],
    },
];
export const Services = () => {
    return (<section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"/>

      <div className="container relative">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">[ Services ]</div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight">
            Expertise <span className="serif font-normal">engineered</span> for results.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            High-end solutions that elevate your brand and bring you measurable success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (<article key={s.title} className="group relative rounded-3xl bg-surface/60 border border-border/60 p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow overflow-hidden">
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/10 group-hover:to-accent/5 transition-all duration-500"/>

              <div className="relative">
                <div className="flex items-start justify-between mb-12">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary/10 border border-primary/30 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <s.icon className="h-5 w-5"/>
                  </span>
                  <span className="font-display text-xs text-muted-foreground/60">0{i + 1}</span>
                </div>

                <h3 className="font-display text-2xl font-semibold leading-tight">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (<span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-border text-muted-foreground">
                      {t}
                    </span>))}
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight className="h-4 w-4"/>
                </div>
              </div>
            </article>))}
        </div>
      </div>
    </section>);
};
