import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const UpgradeCTA = () => {
    return (<section className="relative py-12 lg:py-20">
      <div className="container">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] glass-strong p-10 lg:p-16 noise">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-[120px] glow-pulse morph"/>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px] glow-pulse morph" style={{ animationDelay: "3s" }}/>

            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">[ Reality Check ]</div>
                <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight">
                  Upgrade your <span className="serif font-normal text-gradient-animated">digital identity.</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Your website is often the first impression of your business. If it's outdated or ineffective, you're already losing potential customers to competitors who look more professional and trustworthy online.
                </p>
                <p className="mt-4 text-lg text-foreground max-w-2xl leading-relaxed">
                  Let's build a website that not only looks premium — but actually <span className="text-gradient-primary font-medium">brings you clients.</span>
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noreferrer" className="btn-shine group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-5 text-base font-semibold hover:bg-accent hover:text-accent-foreground transition-all hover:scale-[1.05] shadow-elegant">
                  <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform"/>
                  WhatsApp Now
                  <span className="relative ml-2 h-2 w-2 rounded-full bg-accent ping-soft text-accent group-hover:bg-background"/>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);
};
