import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="glass rounded-full p-2 neumorphism">
              <img
                src={profilePhoto}
                alt="Sreejith M S"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-md opacity-20"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Sreejith M S
              </h1>
              <div className="text-xl md:text-2xl text-primary font-semibold">
                DevOps Engineer & Cloud Architect
              </div>
              <div className="text-lg text-muted-foreground">
                Synnefo Solutions • 7+ Years Experience
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate DevOps Engineer with expertise in cloud architecture, automation, and mentoring. 
              Transforming ideas into scalable, reliable infrastructure solutions while empowering the next generation of tech professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="bg-gradient-primary text-white hover:scale-105 transition-spring px-8">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="glass hover:scale-105 transition-spring px-8">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://www.linkedin.com/in/sreejith-sreenivas-110bb217a/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-primary hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/SreejuZzz"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-primary hover:text-white"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:sreejith@example.com"
                className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-primary hover:text-white"
              >
                <Mail className="h-6 w-6" />
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