import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Instagram, Facebook, Send, Twitter, Phone, MessageCircle } from "lucide-react";
const profilePhoto = "/lovable-uploads/22c7ffb5-a6c2-4d08-8b79-9db5af73351e.png";

const socialLinks = [
  {
    href: "https://github.com/sreejithms",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://linkedin.com/in/sreejithms",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "mailto:sreejith@example.com",
    icon: Mail,
    label: "Email"
  },
  {
    href: "https://instagram.com/sreejithms",
    icon: Instagram,
    label: "Instagram"
  },
  {
    href: "https://facebook.com/sreejithms",
    icon: Facebook,
    label: "Facebook"
  },
  {
    href: "https://twitter.com/sreejithms",
    icon: Twitter,
    label: "Twitter"
  },
  {
    href: "tel:+1234567890",
    icon: Phone,
    label: "Phone"
  },
  {
    href: "https://wa.me/1234567890",
    icon: MessageCircle,
    label: "WhatsApp"
  }
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 pt-16">
      {/* Background with enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 transition-colors duration-500"></div>
      
      {/* Floating elements for visual interest with physics */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float hover:scale-150 transition-physics"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float hover:scale-150 transition-physics" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float hover:scale-125 transition-physics" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-20 w-24 h-24 bg-accent/5 rounded-full blur-lg animate-float hover:scale-125 transition-physics" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Photo with reduced halo */}
          <div className="relative mb-8 animate-glass-pop">
            <div className="relative w-40 h-40 mx-auto">
              {/* Reduced halo effect - 50% less intense */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 via-primary/10 to-transparent blur-lg animate-glow opacity-60"></div>
              
              {/* Photo container with borderless glass */}
              <div className="relative w-full h-full rounded-full overflow-hidden glass-borderless shadow-xl shadow-primary/20">
                <img
                  src={profilePhoto}
                  alt="Sreejith M S - DevOps Engineer"
                  className="w-full h-full object-cover transition-transform duration-700 motion-safe:hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold relative z-20 drop-shadow-2xl">
                <span className="bg-gradient-primary bg-clip-text text-transparent transition-buttery">
                  Sreejith M S
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-primary font-semibold relative z-20 drop-shadow-lg">
                DevOps Engineer & Cloud Architect
              </div>
              <div className="text-lg text-muted-foreground relative z-20 drop-shadow-lg">
                Synnefo Solutions • 7+ Years Experience
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-20 drop-shadow-lg transition-buttery">
              Passionate DevOps Engineer with expertise in cloud architecture, automation, and mentoring. 
              Transforming ideas into scalable, reliable infrastructure solutions while empowering the next generation of tech professionals.
            </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-reveal-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="glass-md glass-hover bg-primary/90 hover:bg-primary text-primary-foreground border-primary/30 shadow-lg transition-all duration-300 hover:shadow-primary/30"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-md glass-hover border-primary/30 text-primary hover:bg-primary/20 shadow-lg transition-all duration-300 hover:shadow-primary/20"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-reveal-up" style={{ animationDelay: "0.8s" }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="glass-sm glass-hover p-3 rounded-full transition-all duration-300 md:hover:scale-110 hover:shadow-lg hover:shadow-primary/30 group will-change-transform"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}