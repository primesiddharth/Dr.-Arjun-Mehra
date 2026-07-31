import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { WhyChooseMe } from '@/components/sections/why-choose-me';
import { Testimonials } from '@/components/sections/testimonials';
import { Appointment } from '@/components/sections/appointment';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { RevealOnScroll } from '@/components/reveal-on-scroll';

export default function Home() {
  return (
    <RevealOnScroll>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseMe />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </RevealOnScroll>
  );
}
