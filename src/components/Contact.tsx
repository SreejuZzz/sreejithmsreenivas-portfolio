import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle,
  Calendar
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 hover-bounce">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="glass rounded-2xl p-6 hover-elastic bg-gradient-to-br from-background/95 to-primary/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-primary p-3 rounded-xl hover-bounce">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">sreejithmsreenivas@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 hover-elastic bg-gradient-to-br from-background/95 to-primary/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-telegram p-3 rounded-xl hover-bounce">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 8848585640</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form className="glass rounded-2xl p-6 space-y-6 hover-elastic bg-gradient-to-br from-background/95 to-primary/10">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-bounce"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-bounce"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-bounce"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-white py-3 px-6 rounded-xl font-semibold hover-bounce transition-elastic focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
