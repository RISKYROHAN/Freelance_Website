import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";

const categories = ["Medical / Health","Legal / Law","Food & Beverage","Real Estate","Retail / Shop","Beauty & Wellness","Home Services","Professional Services","Education","Other Local Business"];

export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                businessType: e.target.businessType.value,
                message: e.target.message.value
            };
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                toast.success("Thanks! I'll be in touch within 24 hours.");
                e.target.reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred.");
        } finally {
            setLoading(false);
        }
    };
    return (<section id="contact" className="relative py-12 lg:py-20 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none morph"/>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">[ Contact ]</Reveal>
            <Reveal as="h2" delay={100} className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight">
              Ready to <span className="serif font-normal text-gradient-animated">scale</span> your business?
            </Reveal>
            <Reveal as="p" delay={200} className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Let's get on a free consultation call to discuss your goals and how a premium custom website can help you achieve them.
            </Reveal>

            <div className="mt-10 space-y-4">
              {[
            { icon: Mail, label: "hello@catalystweb.com" },
            { icon: Phone, label: "+91 · Available on request" },
            { icon: MapPin, label: "Serving local businesses · India" },
        ].map((item, i) => (<Reveal key={item.label} variant="left" delay={300 + i * 100} className="flex items-center gap-4 group cursor-pointer">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-500">
                    <item.icon className="h-4 w-4 group-hover:text-primary-foreground transition-colors"/>
                  </span>
                  <span className="text-sm text-foreground/90 link-underline">{item.label}</span>
                </Reveal>))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="right">
              <form onSubmit={onSubmit} className="relative rounded-[2rem] glass-strong p-8 lg:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name">
                    <input required name="name" type="text" placeholder="Your full name" className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors"/>
                  </Field>
                  <Field label="Email">
                    <input required name="email" type="email" placeholder="you@business.com" className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors"/>
                  </Field>
                </div>

                <Field label="Business Category">
                  <select required name="businessType" defaultValue="" className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors appearance-none cursor-pointer">
                    <option value="" disabled className="bg-surface">Select your industry</option>
                    {categories.map((c) => (<option key={c} value={c} className="bg-surface">{c}</option>))}
                  </select>
                </Field>

                <Field label="Project Details">
                  <textarea required name="message" rows={4} placeholder="Tell me about your business and what you need..." className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors resize-none"/>
                </Field>

                <button type="submit" disabled={loading} className="btn-shine group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 text-sm font-semibold shadow-glow hover:shadow-[0_0_80px_hsl(var(--primary)/0.5)] transition-all hover:scale-[1.04] disabled:opacity-60">
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"/>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);
};

const Field = ({ label, children }) => (<label className="block group">
    <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium group-focus-within:text-primary transition-colors">{label}</span>
    {children}
  </label>);
