import { Compass, Award, Users } from "lucide-react";
const items = [
    {
        icon: Compass,
        title: "Local Market Expertise",
        desc: "I understand the local landscape. We don't just build websites; we build digital bridges that connect your local services with neighbors and community members looking for your expertise.",
    },
    {
        icon: Award,
        title: "Professional Authority",
        desc: "For Lawyers and Doctors, your website is your digital credentials. I design high-end, authoritative layouts that establish instant trust and reflect your professional standing.",
    },
    {
        icon: Users,
        title: "Community-Focused Results",
        desc: "Our goal is to help local businesses thrive. Whether it's a furniture shop or a restaurant, we focus on driving local foot traffic and online conversions that grow our economy.",
    },
];
export const WhyLocalify = () => {
    return (<section id="why" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] pointer-events-none"/>

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">[ The Localify Advantage ]</div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight">
            Why smart businesses <span className="serif font-normal text-gradient-primary">choose me.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Not just another developer — a focused partner who cares about your results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((it, i) => (<div key={it.title} className="bg-background p-8 lg:p-10 group hover:bg-surface transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <it.icon className="h-5 w-5"/>
                </span>
                <span className="font-display text-xs text-muted-foreground">/ 0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-semibold mb-3 leading-snug">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>))}
        </div>
      </div>
    </section>);
};
