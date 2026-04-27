import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";







const works = [
    { img: "/assets/work-medical.jpg", category: "Health & Wellness", title: "CityCare Medical Center", challenge: "A local clinic struggling with manual bookings and a dated website that didn't inspire patient trust.", solution: "Developed a sterile, premium medical interface with an integrated 24/7 appointment booking system and doctor profiles." },
    { img: "/assets/work-legal.jpg", category: "Legal Services", title: "Legal Associates", challenge: "A boutique law firm needing an authoritative online presence to attract high-value corporate clients.", solution: "Created a high-contrast, professional layout focusing on expertise, case studies, and easy consultation scheduling." },
    { img: "/assets/work-restaurant.jpg", category: "Food & Hospitality", title: "The Great Eastern", challenge: "An organic restaurant wanting to showcase their fresh menu and drive more local dinner reservations.", solution: "Designed an immersive, visual-first website with a digital interactive menu and seamless OpenTable integration." },
    { img: "/assets/work-realestate.jpg", category: "Real Estate", title: "Vastu Real Estate", challenge: "A growing property firm wanting to digitize their premium listings to target NRIs and young homebuyers.", solution: "Designed an interactive property catalog with custom neighborhood maps and a direct WhatsApp inquiry feature." },
    { img: "/assets/work-fashion.jpg", category: "Fashion & Retail", title: "Ethnic Boutique", challenge: "A traditional clothing store needing to showcase designer ethnic wear to an audience beyond local foot traffic.", solution: "Built a visually stunning e-commerce presence that highlights intricate fabric details and streamlines checkout." },
    { img: "/assets/work-finance.jpg", category: "Financial Services", title: "Deshmukh & Co. C.A.", challenge: "A well-established Chartered Accountant firm looking to modernize and simplify tax consultation bookings.", solution: "Developed a trust-building corporate site featuring a secure client document portal and automated scheduling." },
];

export const Works = () => {
    return (<section id="works" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <Reveal className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">[ Selected Works ]</Reveal>
            <Reveal as="h2" delay={100} className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight">
              Where strategy meets <span className="serif font-normal text-gradient-animated">premium UI.</span>
            </Reveal>
          </div>
          <Reveal as="p" delay={200} className="text-muted-foreground max-w-md text-base">
            A look at recent projects where strategic problem-solving meets premium UI design.
          </Reveal>
        </div>

        <div className="flex overflow-x-auto gap-5 lg:gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-border/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/50 transition-colors after:content-[''] after:w-px after:shrink-0 sm:after:hidden">
          {works.map((w, i) => (<article key={w.title} className="shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] snap-center group relative rounded-3xl overflow-hidden bg-surface border border-border hover:border-primary/40 transition-all duration-500 flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                  <img src={w.img} alt={w.title} loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"/>
                  <div className="absolute top-5 left-5 glass rounded-full px-3 py-1.5 text-[11px] font-medium text-foreground">
                    {w.category}
                  </div>
                </div>
                <div className="p-7 lg:p-9 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-5 min-h-[4rem] lg:min-h-[4.5rem]">
                      <h3 className="font-display text-2xl lg:text-3xl font-semibold leading-tight">{w.title}</h3>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border group-hover:bg-gradient-primary group-hover:border-transparent group-hover:rotate-45 transition-all duration-500">
                        <ArrowUpRight className="h-4 w-4"/>
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-accent font-medium mb-1.5">Challenge</div>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.5rem]">{w.challenge}</p>
                      </div>
                      <div className="h-px bg-border"/>
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-primary font-medium mb-1.5">Solution</div>
                        <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3 min-h-[4.5rem]">{w.solution}</p>
                      </div>
                    </div>
                </div>
            </article>))}
        </div>
      </div>
    </section>);
};
