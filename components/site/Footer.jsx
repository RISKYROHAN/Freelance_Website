import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";


// Auto-injected legacy Lucide brand icons to prevent build crashes
const Instagram = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> );
const Linkedin = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> );
const Twitter = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg> );
const Facebook = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> );


export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border/50 mesh-bg">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <Reveal variant="up" className="md:col-span-5">
            <a href="#home" className="flex items-center gap-2 mb-5 group">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform">
                <MapPin className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-semibold">
                Local<span className="text-gradient-primary">ify</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Premium digital experiences for local businesses & professionals. Built with care, designed to convert.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <FooterCol
              title="Navigate"
              links={[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Works", href: "#works" },
              ]}
            />
          </Reveal>
          <Reveal variant="up" delay={200}>
            <FooterCol
              title="Services"
              links={[
                { label: "Local SEO", href: "#services" },
                { label: "Web Design", href: "#services" },
                { label: "Booking Systems", href: "#services" },
                { label: "Branding", href: "#services" },
              ]}
            />
          </Reveal>
          <Reveal variant="up" delay={300}>
            <FooterCol
              title="Get in touch"
              links={[
                { label: "Free consultation", href: "#contact" },
                { label: "WhatsApp", href: "https://wa.me/YOUR_PHONE_NUMBER" },
                { label: "hello@localify.in", href: "mailto:hello@localify.in" },
              ]}
            />
          </Reveal>
        </div>

        <Reveal variant="zoom" className="relative mb-10 overflow-hidden">
          <div className="font-display font-semibold text-[20vw] leading-none text-gradient-animated opacity-20 select-none pointer-events-none text-center">
            Localify
          </div>
        </Reveal>

        <Reveal variant="up" className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Localify Web Services. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Crafted with care for local businesses
          </p>
        </Reveal>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }) => (
  <div>
    <h4 className="font-display text-sm font-medium mb-4">{title}</h4>
    <ul className="space-y-2.5">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
