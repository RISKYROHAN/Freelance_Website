import { ArrowUpRight, Sparkles } from "lucide-react";

export const Hero = () => {
    return (<section id="home" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden mesh-bg noise">
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none"/>

      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] glow-pulse pointer-events-none"/>
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] glow-pulse pointer-events-none"/>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
              <Sparkles className="h-3.5 w-3.5 text-accent"/>
              Premium websites for local businesses
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50"/>
              <span className="text-foreground">Available 2026</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold leading-[0.95] tracking-tight">
              Empowering
              <br />
              <span className="text-gradient">local businesses</span>
              <br />
              <span className="serif font-normal text-muted-foreground">& professionals.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              We craft high-converting, premium websites for{" "}
              <span className="text-foreground">Doctors, Lawyers, Restaurants,</span> and{" "}
              <span className="text-foreground">Local Shops.</span> Transform your local presence into a digital powerhouse.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-primary text-primary-foreground px-7 py-4 text-sm font-semibold shadow-glow hover:shadow-[0_0_80px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-[1.02]">
                Bring Your Business Online
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform"/>
              </a>
              <a href="#works" className="group inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-sm font-semibold text-foreground hover:bg-white/10 transition-all">
                View Our Work
                <span className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform"/>
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              {[
            { n: "50+", l: "Local brands" },
            { n: "40%", l: "Avg. lift" },
            { n: "5★", l: "Client rating" },
        ].map((s) => (<div key={s.l}>
                  <div className="font-display text-3xl font-semibold text-gradient-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>))}
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden ring-border shadow-elegant">
              <img src="/assets/hero-orb.jpg" alt="Premium digital craftsmanship" width={1536} height={1536} className="w-full h-full object-cover scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent"/>

              {/* Floating cards */}
              <div className="absolute top-6 left-6 glass-strong rounded-2xl px-4 py-3 float">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/>
                  <span className="text-xs font-medium">Live · 50+ projects shipped</span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 glass-strong rounded-2xl px-4 py-3 float" style={{ animationDelay: "1s" }}>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Specialty</div>
                <div className="text-sm font-medium mt-0.5">Local SEO + UX</div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-border/60 -z-10"/>
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-accent/10 blur-2xl -z-10"/>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24 lg:mt-32 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"/>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"/>
          <div className="marquee">
            {[...Array(2)].map((_, i) => (<div key={i} className="flex items-center gap-16 text-muted-foreground/70 font-display text-2xl whitespace-nowrap">
                {["Doctors", "Lawyers", "Restaurants", "Boutiques", "CA Firms", "Real Estate", "Clinics", "Local Shops"].map((w) => (<span key={w} className="flex items-center gap-16">
                    {w}
                    <span className="h-1.5 w-1.5 rounded-full bg-accent"/>
                  </span>))}
              </div>))}
          </div>
        </div>
      </div>
    </section>);
};
