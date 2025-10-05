import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Instagram, Facebook, Send, X, Phone, MessageCircle } from "lucide-react";
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
  },
  {
    href: "https://instagram.com/matte_black003",
    icon: Instagram,
    label: "Instagram"
  },
  {
    href: "https://facebook.com/sreejithms",
    icon: Facebook,
    label: "Facebook"
  },
  {
    href: "https://twitter.com/Matte_Black003",
    icon: X,
    label: "X (Twitter)"
  },
  {
    href: "tel:+918848585640",
    icon: Phone,
    label: "Phone"
  },
  {
    href: "https://wa.me/918848585640",
    icon: MessageCircle,
    label: "WhatsApp"
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

      {/* Minimal floating particles - reduced from 8 to 3 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary/20 rounded-full animate-physics-float blur-sm" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-accent/15 rounded-full animate-physics-float blur-sm" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/25 rounded-full animate-physics-float blur-sm" style={{ animationDelay: "4s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 relative">
          {/* Main Content */}
            <div className="space-y-10">
            <div className="space-y-8 relative">
              {/* Simplified profile photo */}
              <div className="relative group mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 shadow-xl">
                  <img
                    src={profilePhoto}
                    alt="Sreejith M S - DevOps Engineer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Cleaner name styling */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 -mt-3 relative z-10" 
                  style={{ 
                    textShadow: '0 4px 12px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.15)'
                  }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Sreejith M S
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-primary font-semibold mb-2">
                DevOps Engineer & Cloud Architect
              </div>
              <div className="text-lg text-muted-foreground mb-6">
                Synnefo Solutions • 7+ Years Experience
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Passionate DevOps Engineer with expertise in cloud architecture, automation, and mentoring. 
              Transforming ideas into scalable, reliable infrastructure solutions.
            </p>

            {/* CTA Buttons - simplified animations */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary/50"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links - reduced to 5 most important */}
            <div className="flex gap-4 justify-center">
              {socialLinks.slice(0, 5).map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center hover:scale-105 transition-all duration-300 group border border-primary/15 hover:border-primary/30"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
