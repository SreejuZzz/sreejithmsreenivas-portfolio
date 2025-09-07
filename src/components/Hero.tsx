import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Instagram, Facebook, Send, Twitter, Phone, MessageCircle } from "lucide-react";
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
    icon: Twitter,
    label: "Twitter"
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
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 pt-24 pb-12">
      {/* Background with enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 transition-colors duration-500"></div>
      
      {/* Physics-based floating elements */}
      <div className="absolute top-32 left-8 w-16 h-16 bg-primary/8 rounded-full blur-xl animate-physics-float hover:animate-physics-bounce"></div>
      <div className="absolute bottom-32 right-8 w-24 h-24 bg-accent/8 rounded-full blur-xl animate-physics-drift hover:animate-physics-bounce" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute top-2/3 right-16 w-12 h-12 bg-primary/6 rounded-full blur-lg animate-physics-orbit hover:animate-physics-spin" style={{ animationDelay: '2.4s' }}></div>
      <div className="absolute bottom-1/2 left-16 w-20 h-20 bg-accent/6 rounded-full blur-lg animate-physics-pendulum hover:animate-physics-spin" style={{ animationDelay: '3.6s' }}></div>
      <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-primary/10 rounded-full blur-md animate-physics-spiral" style={{ animationDelay: '4.8s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-14 h-14 bg-accent/10 rounded-full blur-lg animate-physics-wave" style={{ animationDelay: '6s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-quantum-emerge relative">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6 relative">
              {/* Redesigned Profile Photo with quantum field */}
              <div className="relative z-30 mb-8 animate-quantum-pulse">
                <div className="relative w-40 h-40 mx-auto">
                  {/* Quantum energy rings */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-physics-rotate-slow shadow-lg shadow-primary/20"></div>
                    <div className="absolute inset-2 rounded-full border border-accent/40 animate-physics-rotate-medium-reverse shadow-md shadow-accent/15"></div>
                    <div className="absolute inset-4 rounded-full border border-primary/50 animate-physics-rotate-fast shadow-sm shadow-primary/10"></div>
                    
                    {/* Energy particles with physics */}
                    <div className="absolute top-1 left-1/2 w-2 h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-physics-orbit-1 shadow-lg shadow-primary/60"></div>
                    <div className="absolute bottom-1 right-1/2 w-1.5 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full animate-physics-orbit-2 shadow-lg shadow-accent/60"></div>
                    <div className="absolute right-1 top-1/3 w-1 h-1 bg-primary rounded-full animate-physics-orbit-3 shadow-md shadow-primary/50"></div>
                    <div className="absolute left-1 bottom-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-physics-orbit-4 shadow-md shadow-accent/50"></div>
                  </div>
                  
                  {/* Core photo with quantum glass effect */}
                  <div className="absolute inset-6 rounded-full overflow-hidden glass-quantum backdrop-blur-2xl border-2 border-primary/40 shadow-2xl shadow-primary/30 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/15 to-primary/20 rounded-full animate-quantum-glow"></div>
                    <img
                      src={profilePhoto}
                      alt="Sreejith M S - DevOps Engineer"
                      className="w-full h-full object-cover relative z-20 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/8 to-primary/15 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold relative z-20 drop-shadow-2xl animate-text-emerge" style={{ animationDelay: '0.3s' }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent transition-buttery relative">
                  Sreejith M S
                  {/* Subtle dot pattern that gets hidden by photo */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-2 left-8 w-1 h-1 bg-primary/30 rounded-full animate-twinkle"></div>
                    <div className="absolute top-4 right-12 w-0.5 h-0.5 bg-accent/40 rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-3 left-16 w-0.5 h-0.5 bg-primary/30 rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
                  </div>
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

          {/* CTA Buttons with enhanced glass */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center animate-quantum-rise" style={{ animationDelay: "1.1s" }}>
            <Button 
              size="lg" 
              className="glass-quantum glass-hover bg-primary text-white hover:bg-primary/90 border-0 shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105 neuro-button"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-quantum glass-hover border-primary/30 text-foreground hover:text-primary hover:bg-primary/10 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 neuro-button-outline"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links with enhanced glass and physics */}
          <div className="flex flex-wrap justify-center gap-6 animate-quantum-rise" style={{ animationDelay: "1.3s" }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="glass-quantum glass-hover p-4 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 group will-change-transform neuro-social"
                aria-label={link.label}
                style={{ animationDelay: `${1.5 + index * 0.1}s` }}
              >
                <link.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-all duration-300 group-hover:rotate-12" />
              </a>
            ))}
          </div>
          </div>
        </div>
      </div>

    </section>
  );
}
