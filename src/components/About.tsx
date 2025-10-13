import { Lightbulb, Users, Award, Target, Code2, Cloud, GitBranch, Layers } from "lucide-react";
import { QuoteRotation } from "./QuoteRotation";
import { useInView } from "@/hooks/useInView";

export function About() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.2 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: Users,
      title: "Mentorship",
      description: "Guiding students and professionals in DevOps, Cloud, and Infrastructure",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "7+ years of driving technological transformation and automation",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Target,
      title: "Expertise",
      description: "Specialized in AWS, Azure, Kubernetes, CI/CD, and Infrastructure as Code",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Award,
      title: "Leadership",
      description: "Leading complex cloud migrations and DevOps implementations",
      gradient: "from-red-500/20 to-pink-500/20"
    }
  ];

  const stats = [
    { number: "7+", label: "Years Experience", icon: Code2 },
    { number: "50+", label: "Projects Delivered", icon: Layers },
    { number: "20+", label: "Cloud Migrations", icon: Cloud }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleInView ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass backdrop-blur-xl rounded-3xl p-12 border border-primary/15">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about bridging technology and people through innovative DevOps solutions
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-3 gap-6 mb-20 transition-all duration-700 ${
            statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass backdrop-blur-xl rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 border border-primary/15"
            >
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-3 group-hover:scale-105 transition-transform duration-300" />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div 
          ref={contentRef}
          className={`transition-all duration-1000 ${
            contentInView ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Journey Section */}
          <div className="mb-16">
            <div className="glass backdrop-blur-xl rounded-3xl p-12 border border-primary/15 shadow-lg">
              <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <Target className="w-8 h-8" />
                My Journey
              </h3>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    My career journey began as a Network Administrator, where I developed a deep 
                    understanding of infrastructure fundamentals. This foundation led me to explore 
                    the evolving world of DevOps.
                  </p>
                  <p>
                    Today, as a DevOps Engineer, I specialize in creating scalable, reliable, and 
                    secure cloud infrastructures using AWS, Kubernetes, Docker, and Terraform.
                  </p>
                  <div className="glass rounded-xl p-4 border border-primary/20 bg-primary/5">
                    <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Certification
                    </h4>
                    <p className="text-foreground font-semibold">
                      Red Hat Certified System Administrator (RHCSA)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Certification ID: 250-136-470
                    </p>
                  </div>
                </div>
                <div className="glass backdrop-blur-lg rounded-2xl p-8 border border-primary/20 bg-accent/5">
                  <p className="text-accent font-semibold text-lg leading-relaxed">
                    "What drives me most is mentoring others and sharing knowledge. I believe that 
                    empowering teams with the right tools creates lasting impact beyond any single project."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid - simplified styling */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="glass backdrop-blur-xl rounded-xl p-6 group hover:scale-[1.02] transition-all duration-300 border border-primary/15"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <QuoteRotation />
      </div>
    </section>
  );
}
