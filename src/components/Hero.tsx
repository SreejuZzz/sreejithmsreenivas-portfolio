import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram, Facebook, X, Phone, MessageCircle } from "lucide-react";
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-quantum-emerge">
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Sreejith M S - DevOps Engineer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Sreejith M S
                </span>
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

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-primary text-white hover:opacity-90 transition-all"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/40 hover:bg-primary/10 transition-all"
              >
                Download CV
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:bg-primary/10 transition-all group"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
