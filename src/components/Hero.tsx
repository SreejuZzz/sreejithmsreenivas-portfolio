import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
        {/* Minimal badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for opportunities
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
          Sreejith M S
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
          DevOps Engineer crafting scalable cloud infrastructure
          <br />
          and empowering teams through mentorship
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold">7+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold">100+</div>
            <div className="text-sm text-muted-foreground mt-1">Engineers Mentored</div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full hover:gap-4 transition-all duration-300 font-medium"
          >
            Let's connect
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16">
          <div className="w-px h-16 bg-gradient-to-b from-border to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
