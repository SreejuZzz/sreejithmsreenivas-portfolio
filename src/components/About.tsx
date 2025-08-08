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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous learning and technological evolution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <div className="glass-physics rounded-2xl p-8 neumorphism hover:scale-[1.02] transition-physics">
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

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-physics p-6 hover:scale-105 hover:rotate-1 hover:-translate-y-2 transition-physics border-0 neumorphism cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center transform hover:rotate-12 hover:scale-110 transition-bounce">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <QuoteRotation />
      </div>
    </section>
  );
}