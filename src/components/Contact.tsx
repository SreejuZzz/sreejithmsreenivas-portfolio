import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/useInView";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Clock,
  CheckCircle,
  Send,
  MessageCircle,
  Calendar
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.1 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sreejith@example.com",
      link: "mailto:sreejith@example.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "sreejith-sreenivas",
      link: "https://www.linkedin.com/in/sreejith-sreenivas-110bb217a/"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "SreejuZzz",
      link: "https://github.com/SreejuZzz"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "5s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleInView ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-borderless backdrop-blur-xl rounded-3xl p-12 bg-gradient-to-r from-background/40 via-background/60 to-background/40 border border-primary/10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-2xl">
                Let's Connect
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project or explore collaboration opportunities?
            </p>
          </div>
        </div>

        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
            contentInView ? 'animate-reveal-up' : 'opacity-0'
          }`}
        >
          {/* Contact Form */}
          <Card className="glass-md glass-hover border-primary/20 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="glass"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="glass"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="glass"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or questions..."
                    required
                    rows={6}
                    className="glass resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-primary text-white hover:scale-110 hover:-translate-y-2 transition-physics"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Experience & Mentoring */}
            <Card className="glass-physics border-0 neumorphism p-6 hover:scale-[1.02] transition-physics">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Services Available</h3>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  Looking for mentoring or consultation? I'm available for:
                </p>
                
                <div className="space-y-2">
                  {[
                    "DevOps & Cloud Architecture Consultation",
                    "Career Mentoring & Guidance",
                    "Technical Training & Workshops",
                    "Infrastructure Review & Optimization"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full transition-buttery"></div>
                      {service}
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full glass-physics hover:bg-primary hover:text-white hover:scale-105 hover:-translate-y-1 transition-physics">
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}