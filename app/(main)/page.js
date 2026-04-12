import Hero from '@/components/Hero';
import About from '@/components/About';
// import Founder from '@/components/Founder';
import Services from '@/components/Services';
import Upgrade from '@/components/Upgrade';
import WhyUs from '@/components/WhyUs';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Founder /> */}
      <Services />
      <Upgrade />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
