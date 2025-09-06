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
        <div className="text-center space-y-8 animate-fade-in relative">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2 relative">
              {/* Orbital Profile Photo - positioned to overlap name */}
              {/* Orbital Profile Photo - completely redesigned */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative w-32 h-32">
                  {/* Magnetic field lines */}
                  <div className="absolute inset-0">
                    {/* Outer magnetic field */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_25s_linear_infinite]"></div>
                    <div className="absolute inset-1 rounded-full border border-accent/30 animate-[spin_20s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-3 rounded-full border border-primary/40 animate-[spin_15s_linear_infinite]"></div>
                    
                    {/* Energy particles */}
                    <div className="absolute top-2 left-1/2 w-1 h-1 bg-primary rounded-full animate-[spin_25s_linear_infinite] origin-[50%_60px] shadow-lg shadow-primary/50"></div>
                    <div className="absolute bottom-2 right-1/2 w-1 h-1 bg-accent rounded-full animate-[spin_20s_linear_infinite_reverse] origin-[50%_-60px] shadow-lg shadow-accent/50"></div>
                    <div className="absolute right-2 top-1/2 w-0.5 h-0.5 bg-primary/80 rounded-full animate-[spin_15s_linear_infinite] origin-[-60px_50%] shadow-md shadow-primary/40"></div>
                    <div className="absolute left-2 bottom-1/2 w-0.5 h-0.5 bg-accent/80 rounded-full animate-[spin_18s_linear_infinite_reverse] origin-[60px_50%] shadow-md shadow-accent/40"></div>
                  </div>
                  
                  {/* Core photo with energy field */}
                  <div className="absolute inset-6 rounded-full overflow-hidden glass backdrop-blur-lg border-2 border-primary/30 shadow-2xl shadow-primary/20 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
                    <img
                      src={profilePhoto}
                      alt="Sreejith M S - DevOps Engineer"
                      className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Energy glow overlay */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/10 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Quantum dots with varying speeds */}
                  <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full animate-[spin_25s_linear_infinite] origin-[50%_64px] shadow-lg shadow-primary/60"></div>
                  <div className="absolute bottom-1 right-1/3 w-1 h-1 bg-gradient-to-r from-accent to-primary rounded-full animate-[spin_18s_linear_infinite_reverse] origin-[50%_-56px] shadow-lg shadow-accent/60"></div>
                  <div className="absolute right-1 top-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-[spin_22s_linear_infinite] origin-[-56px_50%] shadow-lg shadow-primary/50"></div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold relative z-20 drop-shadow-2xl pt-16">
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
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center animate-reveal-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="glass-lg glass-hover bg-primary text-white hover:bg-primary/90 border-0 shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-lg glass-hover border-primary/20 text-foreground hover:text-primary hover:bg-primary/10 shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 animate-reveal-up" style={{ animationDelay: "0.8s" }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="glass-md glass-hover p-3 rounded-xl transition-all duration-300 md:hover:scale-110 hover:shadow-xl hover:shadow-primary/30 group will-change-transform"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
          </div>
        </div>
      </div>

    </section>
  );
}
