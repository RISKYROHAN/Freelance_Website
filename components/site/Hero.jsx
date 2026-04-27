import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

import { useCountUp, useReveal } from "@/hooks/use-reveal";
import { Reveal } from "@/components/site/Reveal";

const Stat = ({ n, l, delay }) => {
  const [ref, inView] = useReveal({ threshold: 0.5 });
  const v = useCountUp(n, 1800, inView);
  const suffix = String(n).replace(/[\d.]/g, "");
  const numeric = parseFloat(String(n));
  const display = Number.isInteger(numeric) ? Math.round(v) : v.toFixed(1);
  return (
    <div
      ref={ref}
      className={`reveal reveal-up ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-3xl font-semibold text-gradient-primary tabular-nums">
        {display}
        {suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{l}</div>
    </div>
  );
};

export const Hero = () => {
  const orbRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!orbRef.current) return;
      const y = window.scrollY;
      orbRef.current.style.transform = `translateY(${y * 0.15}px) scale(${1.1 - y * 0.0001})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden mesh-bg noise">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] glow-pulse pointer-events-none morph" />
      <div
        className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] glow-pulse pointer-events-none morph"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal once delay={0} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8 hover:scale-105 transition-transform">
              <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
              Premium websites for local businesses
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span className="text-foreground">Available 2026</span>
            </Reveal>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold leading-[0.95] tracking-tight">
              <Reveal as="span" once delay={100} className="inline-block">Empowering</Reveal>
              <br />
              <Reveal as="span" once delay={250} className="text-gradient-animated inline-block">local businesses</Reveal>
              <br />
              <Reveal as="span" once delay={400} className="serif font-normal text-muted-foreground inline-block">& professionals.</Reveal>
            </h1>

            <Reveal as="p" once delay={550} className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              We craft high-converting, premium websites for{" "}
              <span className="text-foreground">Doctors, Lawyers, Restaurants,</span> and{" "}
              <span className="text-foreground">Local Shops.</span> Transform your local presence into a digital powerhouse.
            </Reveal>

            <Reveal once delay={700} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-shine group inline-flex items-center gap-3 rounded-full bg-gradient-primary text-primary-foreground px-7 py-4 text-sm font-semibold shadow-glow hover:shadow-[0_0_80px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-[1.04]"
              >
                Bring Your Business Online
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform duration-500" />
              </a>
              <a
                href="#works"
                className="group inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-sm font-semibold text-foreground hover:bg-white/10 transition-all hover:scale-[1.04]"
              >
                View Our Work
                <span className="relative h-2 w-2 rounded-full bg-accent ping-soft text-accent group-hover:scale-150 transition-transform" />
              </a>
            </Reveal>

            <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              <Stat n="50+" l="Local brands" delay={0} />
              <Stat n="40%" l="Avg. lift" delay={100} />
              <Stat n="5★" l="Client rating" delay={200} />
            </div>
          </div>

          <Reveal once variant="zoom" delay={200} className="lg:col-span-5 relative">
            <div ref={orbRef} className="relative aspect-square rounded-[2rem] overflow-hidden ring-border shadow-elegant transition-transform duration-300">
              <img src="/assets/hero-orb.jpg" alt="Premium digital craftsmanship" width={1536} height={1536} className="w-full h-full object-cover scale-110" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 glass-strong rounded-2xl px-4 py-3 float">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium">Live · 50+ projects shipped</span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 glass-strong rounded-2xl px-4 py-3 float" style={{ animationDelay: "1s" }}>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Specialty</div>
                <div className="text-sm font-medium mt-0.5">Local SEO + UX</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-border/60 -z-10 spin-slow" />
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-accent/10 blur-2xl -z-10" />
          </Reveal>
        </div>

        <div className="mt-24 lg:mt-32 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 text-muted-foreground/70 font-display text-2xl whitespace-nowrap">
                {["Doctors", "Lawyers", "Restaurants", "Boutiques", "CA Firms", "Real Estate", "Clinics", "Local Shops"].map((w) => (
                  <span key={w} className="flex items-center gap-16 hover:text-foreground transition-colors">
                    {w}
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
