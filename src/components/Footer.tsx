import { Github, Linkedin, Mail, Heart, Instagram, Facebook, Send, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="text-2xl font-bold text-primary">
            Sreejith M S
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground max-w-md mx-auto">
            DevOps Engineer, Cloud Architect, and Mentor. Building scalable solutions and empowering the next generation of tech professionals.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/sreejith-sreenivas-110bb217a/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-gradient-primary hover:text-white group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://github.com/SreejuZzz"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-gradient-primary hover:text-white group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://www.instagram.com/matte_black003/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-gradient-instagram hover:text-white group"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://www.facebook.com/SreejithSreejuZzz"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-gradient-facebook hover:text-white group"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://t.me/Matte_Black"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-gradient-telegram hover:text-white group"
              aria-label="Telegram"
            >
              <Send className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://x.com/Matte_Black003"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-gradient-twitter hover:text-white group"
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="mailto:sreejith@example.com"
              className="glass p-3 rounded-full hover:scale-110 transition-spring hover:bg-gradient-primary hover:text-white group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" }
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Divider */}
          <div className="w-32 h-px bg-gradient-primary mx-auto"></div>
          
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Sreejith M S. All rights reserved.</span>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-1">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and modern tech</span>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="text-xs text-muted-foreground/70">
            React • TypeScript • Tailwind CSS • Vite
          </div>
        </div>
      </div>
    </footer>
  );
}