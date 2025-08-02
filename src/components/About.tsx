import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Target, Award } from "lucide-react";
import { QuoteRotation } from "./QuoteRotation";

export function About() {
  const highlights = [
    {
      icon: Users,
      title: "Mentorship",
      description: "Guiding students and professionals in DevOps, Cloud, and Infrastructure"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "7+ years of driving technological transformation and automation"
    },
    {
      icon: Target,
      title: "Expertise",
      description: "Specialized in AWS, Azure, Kubernetes, CI/CD, and Infrastructure as Code"
    },
    {
      icon: Award,
      title: "Leadership",
      description: "Leading complex cloud migrations and DevOps implementations"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 hover-bounce">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A journey of continuous learning and technological evolution
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 neumorphism">
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey in technology began in 2018 as a <strong className="text-primary">Network Administrator</strong>, 
                  where I developed a deep understanding of infrastructure fundamentals. This foundation led me to 
                  transition into <strong className="text-primary">Linux Administration</strong> in 2020, where I mastered 
                  system management and automation.
                </p>
                <p>
                  By 2022, I had evolved into a <strong className="text-primary">Cloud Architect</strong>, designing 
                  scalable solutions and implementing cloud-native architectures. Currently, as a 
                  <strong className="text-primary"> DevOps Engineer at Synnefo Solutions</strong> since 2023, 
                  I focus on streamlining development workflows and infrastructure automation.
                </p>
                <p>
                  Beyond my professional role, I'm passionate about <strong className="text-primary">mentoring</strong> 
                  students and working professionals, sharing knowledge in cloud technologies, DevOps practices, 
                  and infrastructure management.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-in-right">
            <div className="glass rounded-3xl p-8 hover-elastic">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="hover-bounce">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="hover-bounce">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="hover-bounce">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Availability</div>
                </div>
                <div className="hover-bounce">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <QuoteRotation />
      </div>
    </section>
  );
}