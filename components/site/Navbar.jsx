import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why CatalystWeb" },
    { href: "#works", label: "Works" },
    { href: "#testimonials", label: "Testimonials" },
];
export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 flex flex-col`}>
      <div className="w-full bg-gradient-to-r from-primary to-accent-600 flex items-center justify-center text-base sm:text-lg font-bold text-white shadow-md py-3 sm:py-4">
        <span className="px-4 text-center tracking-wide flex items-center gap-2 flex-wrap justify-center">
          🔥 <span>Limited Offer:</span> <a href="#contact" className="underline decoration-2 underline-offset-4 hover:text-white/80 transition-colors">Claim Your FREE Custom Website Prototype!</a> 🚀
        </span>
      </div>
      <div className={`container transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
        <nav className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-elegant" : "glass"}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
              <MapPin className="h-4 w-4 text-primary-foreground" strokeWidth={2.5}/>
              <span className="absolute inset-0 rounded-full bg-gradient-primary blur-md opacity-50 group-hover:opacity-80 transition"/>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Catalyst<span className="text-gradient-primary">Web</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {links.map((l) => (<li key={l.href}>
                <a href={l.href} className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all">
                  {l.label}
                </a>
              </li>))}
          </ul>

          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300">
            Let's Connect
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"/>
          </a>

          <button className="lg:hidden p-2 rounded-full hover:bg-white/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </nav>

        {open && (<div className="lg:hidden mt-2 glass-strong rounded-3xl p-4 fade-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (<li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-white/5">
                    {l.label}
                  </a>
                </li>))}
              <li>
                <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 text-center rounded-2xl bg-gradient-primary text-primary-foreground px-4 py-3 font-medium">
                  Let's Connect
                </a>
              </li>
            </ul>
          </div>)}
      </div>
    </header>);
};
