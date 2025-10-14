import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const profilePhoto = "/lovable-uploads/22c7ffb5-a6c2-4d08-8b79-9db5af73351e.png";

const socialLinks = [
  {
    href: "https://github.com/SreejuZzz",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/sreejith-sreenivas-110bb217a",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "mailto:sreejithmsreenivas@gmail.com",
    icon: Mail,
    label: "Email"
  }
];

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

      {/* Minimal floating particles - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary/20 rounded-full animate-physics-float blur-sm" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-accent/15 rounded-full animate-physics-float blur-sm" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/25 rounded-full animate-physics-float blur-sm" style={{ animationDelay: "4s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Side-by-side layout on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Profile photo - left side on desktop */}
          <div className="relative group flex-shrink-0">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
            <div className="relative w-48 h-56 md:w-64 md:h-80 rounded-lg overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 shadow-xl">
              <img
                src={profilePhoto}
                alt="Sreejith M S - DevOps Engineer"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content - right side on desktop */}
          <div className="flex-1 max-w-2xl space-y-6 text-center md:text-left">
            {/* Value Proposition */}
            <p className="text-base md:text-lg text-primary font-medium">
              Transforming complex infrastructure into elegant, scalable solutions
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold" 
                style={{ 
                  textShadow: '0 4px 12px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.15)'
                }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sreejith M S
              </span>
            </h1>

            {/* Title and Company */}
            <div className="space-y-2">
              <div className="text-xl md:text-2xl text-primary font-semibold">
                DevOps Engineer & Cloud Architect
              </div>
              <div className="text-base md:text-lg text-muted-foreground">
                Synnefo Solutions • 7+ Years Experience
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Passionate about cloud architecture, automation, and mentoring the next generation of engineers.
            </p>

            {/* CTA Buttons - refined hover states */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary text-white hover:scale-[1.02] transition-all duration-300 shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Get In Touch
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border border-primary/30 hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links - only 3 primary ones */}
            <TooltipProvider delayDuration={200}>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-11 h-11 rounded-full glass flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-300 group border border-primary/15 hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95"
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Scroll Indicator - centered at bottom */}
        <div className="mt-16 flex flex-col items-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground opacity-60" />
        </div>
      </div>

    </section>
  );
}
