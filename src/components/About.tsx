import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Award, Target } from "lucide-react";
import { QuoteRotation } from "./QuoteRotation";
import { useInView } from "@/hooks/useInView";

export function About() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.2 });

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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleInView ? 'animate-reveal-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about bridging technology and people through innovative DevOps solutions
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-700 ${
            contentInView ? 'animate-reveal-up' : 'opacity-0'
          }`}
        >
          {/* Left Column - Journey */}
          <div className="space-y-6">
            <div className="glass-md rounded-2xl p-8 neumorphism">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Target className="w-6 h-6" />
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My career journey began as a Network Administrator, where I developed a deep 
                  understanding of infrastructure fundamentals. This foundation led me to explore 
                  the evolving world of DevOps, where I discovered my passion for bridging the 
                  gap between development and operations.
                </p>
                <p>
                  Today, as a DevOps Engineer, I specialize in creating scalable, reliable, and 
                  secure cloud infrastructures. My expertise spans across AWS, Kubernetes, Docker, 
                  Terraform, and various CI/CD tools that enable organizations to deliver software 
                  faster and more reliably.
                </p>
                <p className="text-primary font-medium">
                  What drives me most is mentoring others and sharing knowledge. I believe that 
                  empowering teams with the right tools and knowledge creates lasting impact 
                  beyond any single project.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="glass-sm glass-hover border-primary/20 hover:border-primary/40 transition-all duration-300 group will-change-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <QuoteRotation />
      </div>
    </section>
  );
}
