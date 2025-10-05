import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero transition-buttery dark-mode-transition">
      <Navigation />
      <main className="transition-buttery">
        <Hero />
        <div className="py-16 md:py-24"></div>
        <About />
        <div className="py-16 md:py-24"></div>
        <Experience />
        <div className="py-16 md:py-24"></div>
        <Skills />
        <div className="py-16 md:py-24"></div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
