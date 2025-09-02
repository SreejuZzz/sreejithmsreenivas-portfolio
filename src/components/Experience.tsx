import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function Experience() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 });
  const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Synnefo Solutions",
      location: "Current",
      period: "2023 - Present",
      description: "Leading DevOps initiatives, implementing CI/CD pipelines, container orchestration, and infrastructure automation. Managing cloud migrations and optimizing deployment processes.",
      technologies: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "Jenkins", "GitLab CI/CD"],
      current: true
    },
    {
      title: "Cloud Architect",
      company: "Synnefo Solutions",
      location: "Remote",
      period: "2022 - 2023",
      description: "Designed and implemented scalable cloud architectures, optimized infrastructure costs, and established cloud governance frameworks. Led multi-cloud strategy initiatives.",
      technologies: ["AWS", "Azure", "GCP", "CloudFormation", "ARM Templates", "Cloud Security"],
      current: false
    },
    {
      title: "Linux Administrator",
      company: "Synnefo Solutions",
      location: "On-site",
      period: "2020 - 2022",
      description: "Managed Linux servers, implemented automation scripts, configured monitoring solutions, and maintained high availability systems. Established backup and disaster recovery procedures.",
      technologies: ["RHEL", "Ubuntu", "CentOS", "Bash", "Python", "Ansible", "Nagios"],
      current: false
    },
    {
      title: "Network Administrator",
      company: "SDC Networks",
      location: "On-site",
      period: "2018 - 2020",
      description: "Foundation role managing network infrastructure, configuring switches and routers, implementing security policies, and troubleshooting connectivity issues.",
      technologies: ["Cisco", "Network Security", "VLAN", "VPN", "Firewall", "TCP/IP"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleInView ? 'animate-reveal-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and empowering teams through innovative DevOps practices
          </p>
        </div>

        {/* Timeline */}
        <div 
          ref={timelineRef}
          className={`relative transition-all duration-700 ${
            timelineInView ? 'animate-reveal-up' : 'opacity-0'
          }`}
        >
          {/* Curved Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block">
            <svg className="w-1 h-full" viewBox="0 0 4 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 0 Q50 250 2 500 Q-46 750 2 1000"
                stroke="url(#timeline-gradient)"
                strokeWidth="2"
                fill="none"
                className="opacity-60"
              />
              <defs>
                <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="relative z-20 flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Experience Card with proper stacking */}
                <Card className={`flex-1 max-w-lg glass-sm glass-hover border-primary/20 hover:border-primary/40 transition-all duration-300 group relative z-20 will-change-transform ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } md:hover:scale-102 transform`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-lg font-semibold text-primary mb-2">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-background/50 text-foreground border-primary/20 hover:border-primary/40 transition-colors duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Mentoring section */}
        <div className="mt-20">
          <div className="glass-lg p-8 text-center hover:scale-[1.01] transition-buttery rounded-xl animate-blur-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Mentoring & Training</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Alongside my professional roles, I actively mentor students and working professionals, 
                helping them navigate the complexities of DevOps, Cloud Architecture, and Infrastructure Management. 
                I believe in sharing knowledge and fostering the next generation of tech professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {["DevOps Mentoring", "Cloud Training", "Career Guidance", "Technical Workshops"].map((item, index) => (
                  <Badge key={index} className="bg-gradient-primary text-white border-0 hover:scale-105 hover:-translate-y-1 transition-buttery">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}