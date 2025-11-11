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
    { number: "60+", label: "Projects Delivered", icon: Layers },
    { number: "20+", label: "Cloud Migrations", icon: Cloud },
    { number: "100+", label: "Deployments", icon: GitBranch }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleInView ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-borderless rounded-3xl p-12 backdrop-blur-xl bg-gradient-to-r from-background/40 via-background/60 to-background/40 border border-primary/10">
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
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ${
            statsInView ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass backdrop-blur-xl rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-500 border border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
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
            <div className="glass backdrop-blur-2xl rounded-3xl p-12 bg-gradient-to-br from-background/50 to-background/30 border border-primary/15 shadow-2xl">
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
                  <div className="glass-quantum rounded-xl p-4 bg-gradient-to-r from-primary/10 to-accent/10 neumorphism">
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
                <div className="glass-sm backdrop-blur-lg rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <p className="text-primary font-semibold text-lg leading-relaxed">
                    "What drives me most is mentoring others and sharing knowledge. I believe that 
                    empowering teams with the right tools creates lasting impact beyond any single project."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className={`glass backdrop-blur-xl rounded-2xl p-8 group hover:scale-105 transition-all duration-500 border border-primary/20 bg-gradient-to-br ${highlight.gradient} hover:shadow-2xl hover:shadow-primary/10`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-primary/30">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
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
