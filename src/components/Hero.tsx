import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Instagram, Facebook, Send, Twitter, Phone, MessageCircle } from "lucide-react";
const profilePhoto = "/lovable-uploads/22c7ffb5-a6c2-4d08-8b79-9db5af73351e.png";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500">
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
          {/* Profile Photo - Enhanced Foreground */}
          <div className="relative mx-auto w-48 h-48 mb-8 z-50">
            {/* Multiple gradient halos */}
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-15 hover:opacity-30 transition-physics animate-glow"></div>
            <div className="absolute -inset-3 bg-gradient-secondary rounded-full blur-lg opacity-12 hover:opacity-25 transition-physics animate-glow" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -inset-2 bg-gradient-tertiary rounded-full blur-md opacity-10 hover:opacity-20 transition-physics animate-glow" style={{ animationDelay: '1s' }}></div>
            
            {/* Main photo container */}
            <div className="relative glass-physics rounded-full p-3 neumorphism hover:scale-110 hover:rotate-3 transition-physics cursor-pointer">
              <img
                src={profilePhoto}
                alt="Sreejith M S"
                className="w-full h-full object-cover rounded-full transition-physics relative z-10"
              />
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-5 hover:opacity-10 transition-physics"></div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full blur-sm opacity-60 animate-float"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full blur-sm opacity-40 animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-8 left-2 w-1.5 h-1.5 bg-tertiary rounded-full blur-sm opacity-50 animate-float" style={{ animationDelay: '2.5s' }}></div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="bg-gradient-primary text-white hover:scale-110 hover:-translate-y-2 hover:rotate-1 transition-physics px-8">
                <Mail className="mr-2 h-5 w-5 transition-physics" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="glass-physics hover:scale-110 hover:-translate-y-2 hover:-rotate-1 transition-physics px-8">
                <Download className="mr-2 h-5 w-5 transition-physics" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center flex-wrap gap-4 pt-8">
              <a
                href="https://www.linkedin.com/in/sreejith-sreenivas-110bb217a/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-physics p-3 rounded-full hover:scale-125 hover:-translate-y-2 hover:rotate-12 transition-physics hover:bg-gradient-primary hover:text-white group"
              >
                <Linkedin className="h-6 w-6 transition-physics group-hover:rotate-12" />
              </a>
              <a
                href="https://github.com/SreejuZzz"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-physics p-3 rounded-full hover:scale-125 hover:-translate-y-2 hover:rotate-12 transition-physics hover:bg-gradient-primary hover:text-white group"
              >
                <Github className="h-6 w-6 transition-physics group-hover:rotate-12" />
              </a>
              <a
                href="https://www.instagram.com/matte_black003/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-physics p-3 rounded-full hover:scale-125 hover:-translate-y-2 hover:rotate-12 transition-physics hover:bg-gradient-instagram hover:text-white group"
              >
                <Instagram className="h-6 w-6 transition-physics group-hover:rotate-12" />
              </a>
              <a
                href="https://www.facebook.com/SreejithSreejuZzz"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-physics p-3 rounded-full hover:scale-125 hover:-translate-y-2 hover:rotate-12 transition-physics hover:bg-gradient-facebook hover:text-white group"
              >
                <Facebook className="h-6 w-6 transition-physics group-hover:rotate-12" />
              </a>
              <a
                href="https://t.me/Matte_Black"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-physics p-3 rounded-full hover:scale-125 hover:-translate-y-2 hover:rotate-12 transition-physics hover:bg-gradient-telegram hover:text-white group"
              >
                <Send className="h-6 w-6 transition-physics group-hover:rotate-12" />
              </a>
              <a
                href="https://x.com/Matte_Black003"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-physics p-3 rounded-full hover:scale-125 hover:-translate-y-2 hover:rotate-12 transition-physics hover:bg-gradient-twitter hover:text-white group"
              >
                <Twitter className="h-6 w-6 transition-physics group-hover:rotate-12" />
              </a>
              <a
                href="https://wa.me/+918848585640"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-physics p-3 rounded-full hover:scale-125 hover:-translate-y-2 hover:rotate-12 transition-physics hover:bg-gradient-whatsapp hover:text-white group"
              >
                <MessageCircle className="h-6 w-6 transition-physics group-hover:rotate-12" />
              </a>
              <a
                href="tel:+918848585640"
                className="glass-physics p-3 rounded-full hover:scale-125 hover:-translate-y-2 hover:rotate-12 transition-physics hover:bg-gradient-call hover:text-white group"
              >
                <Phone className="h-6 w-6 transition-physics group-hover:rotate-12" />
              </a>
              <a
                href="mailto:sreejithmsreenivas@gmail.com"
                className="glass-physics p-3 rounded-full hover:scale-125 hover:-translate-y-2 hover:rotate-12 transition-physics hover:bg-gradient-primary hover:text-white group"
              >
                <Mail className="h-6 w-6 transition-physics group-hover:rotate-12" />
              </a>
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