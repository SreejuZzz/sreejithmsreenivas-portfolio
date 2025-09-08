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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 pt-16 pb-12">
      {/* Background with enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 transition-colors duration-500"></div>
      
      {/* Left Solar System - Enhanced */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 w-80 h-80 animate-physics-rotate-slow">
        <div className="w-6 h-6 bg-primary/20 rounded-full blur-lg animate-physics-orbit-1 absolute" style={{ animationDelay: '0s' }}></div>
        <div className="w-4 h-4 bg-accent/25 rounded-full blur-md animate-physics-orbit-2 absolute" style={{ animationDelay: '1s' }}></div>
        <div className="w-3 h-3 bg-primary-glow/30 rounded-full blur-sm animate-physics-orbit-3 absolute" style={{ animationDelay: '2s' }}></div>
        <div className="w-5 h-5 bg-primary/15 rounded-full blur-lg animate-physics-orbit-4 absolute" style={{ animationDelay: '3s' }}></div>
        <div className="w-2 h-2 bg-accent/35 rounded-full animate-physics-orbit-5 absolute" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Right Solar System - New */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-80 h-80 animate-physics-rotate-medium-reverse">
        <div className="w-7 h-7 bg-accent/20 rounded-full blur-lg animate-physics-orbit-1 absolute" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-3 h-3 bg-primary/30 rounded-full blur-md animate-physics-orbit-2 absolute" style={{ animationDelay: '1.5s' }}></div>
        <div className="w-5 h-5 bg-primary-glow/25 rounded-full blur-sm animate-physics-orbit-3 absolute" style={{ animationDelay: '2.5s' }}></div>
        <div className="w-4 h-4 bg-accent/20 rounded-full blur-lg animate-physics-orbit-4 absolute" style={{ animationDelay: '3.5s' }}></div>
        <div className="w-2.5 h-2.5 bg-primary/25 rounded-full animate-physics-orbit-5 absolute" style={{ animationDelay: '4.5s' }}></div>
        <div className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-physics-orbit-6 absolute" style={{ animationDelay: '5.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-quantum-emerge relative">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-8 relative">
              {/* Redesigned Profile Photo with Planetary System */}
              <div className="relative z-30 mb-6 animate-quantum-pulse">
                <div className="relative w-44 h-44 mx-auto">
                  {/* Planetary system around photo */}
                  <div className="absolute inset-0">
                    {/* Multiple planets revolving around the photo */}
                    <div className="absolute top-2 left-1/2 w-3 h-3 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-physics-orbit-1 shadow-2xl shadow-primary/80 blur-sm"></div>
                    <div className="absolute bottom-2 right-1/2 w-2.5 h-2.5 bg-gradient-to-r from-accent to-primary rounded-full animate-physics-orbit-2 shadow-2xl shadow-accent/80 blur-sm"></div>
                    <div className="absolute right-2 top-1/3 w-2 h-2 bg-gradient-to-r from-primary-glow to-accent rounded-full animate-physics-orbit-3 shadow-xl shadow-primary/70 blur-sm"></div>
                    <div className="absolute left-2 bottom-1/3 w-2.5 h-2.5 bg-gradient-to-r from-accent to-primary-glow rounded-full animate-physics-orbit-4 shadow-xl shadow-accent/70 blur-sm"></div>
                    <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-physics-orbit-5 shadow-lg shadow-primary/60 blur-sm"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-physics-orbit-6 shadow-lg shadow-accent/60 blur-sm"></div>
                    <div className="absolute top-3/4 right-3/4 w-1 h-1 bg-primary-glow rounded-full animate-physics-orbit-7 shadow-md shadow-primary/50 blur-sm"></div>
                    <div className="absolute bottom-3/4 left-3/4 w-1.5 h-1.5 bg-primary rounded-full animate-physics-orbit-8 shadow-md shadow-primary/50 blur-sm"></div>
                  </div>
                  
                  {/* Core photo with enhanced quantum glass effect */}
                  <div className="absolute inset-4 rounded-full overflow-hidden glass-quantum backdrop-blur-3xl border-3 border-primary/50 shadow-3xl shadow-primary/40 relative group neumorphism">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/25 rounded-full animate-quantum-glow"></div>
                    <img
                      src={profilePhoto}
                      alt="Sreejith M S - DevOps Engineer"
                      className="w-full h-full object-cover relative z-20 group-hover:scale-110 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/10 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold relative z-10 mt-8 drop-shadow-3xl animate-text-emerge" style={{ animationDelay: '0.3s' }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent transition-buttery relative block">
                  Sreejith M S
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-primary font-semibold relative z-20 drop-shadow-lg animate-text-emerge" style={{ animationDelay: '0.5s' }}>
                DevOps Engineer & Cloud Architect
              </div>
              <div className="text-lg text-muted-foreground relative z-20 drop-shadow-lg animate-text-emerge" style={{ animationDelay: '0.7s' }}>
                Synnefo Solutions • 7+ Years Experience
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-20 drop-shadow-lg transition-buttery animate-text-emerge" style={{ animationDelay: '0.9s' }}>
              Passionate DevOps Engineer with expertise in cloud architecture, automation, and mentoring. 
              Transforming ideas into scalable, reliable infrastructure solutions while empowering the next generation of tech professionals.
            </p>

          {/* CTA Buttons with enhanced glass and physics */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center animate-quantum-rise" style={{ animationDelay: "1.1s" }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="glass-quantum glass-hover bg-gradient-primary text-white hover:bg-primary/90 border-0 shadow-3xl hover:shadow-primary/60 transition-all duration-700 hover:scale-110 hover:-translate-y-2 neuro-button font-bold text-lg px-8 py-6"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-quantum glass-hover border-2 border-primary/40 text-foreground hover:text-white hover:bg-gradient-primary shadow-3xl hover:shadow-primary/50 transition-all duration-700 hover:scale-110 hover:-translate-y-2 neuro-button-outline font-bold text-lg px-8 py-6"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links with gradient effects and enhanced glass */}
          <div className="flex flex-wrap justify-center gap-6 animate-quantum-rise" style={{ animationDelay: "1.3s" }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-quantum glass-hover p-4 rounded-2xl transition-all duration-700 hover:scale-125 hover:shadow-3xl hover:shadow-primary/50 group will-change-transform neuro-social neumorphism hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-accent/10"
                aria-label={link.label}
                style={{ animationDelay: `${1.5 + index * 0.1}s` }}
              >
                <link.icon className="w-6 h-6 bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 filter drop-shadow-lg" />
              </a>
            ))}
          </div>
          </div>
        </div>
      </div>

    </section>
  );
}
