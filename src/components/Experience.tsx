import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export function Experience() {
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
      {/* Vibrant gradient overlays */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20 transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-25 transition-colors duration-500"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            7+ years of continuous growth and technological evolution
          </p>
        </div>

        <div className="relative">
          {/* Curved timeline paths */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="timelineGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path d="M 50 0 C 65 12, 35 24, 50 36 S 65 60, 50 72 S 35 84, 50 100" stroke="url(#timelineGradient)" strokeWidth="1.5" fill="none" />
              <path d="M 46 0 C 61 14, 31 26, 46 38 S 61 62, 46 74 S 31 86, 46 100" stroke="url(#timelineGradient)" strokeWidth="0.8" opacity="0.35" fill="none" />
              <path d="M 54 0 C 69 10, 39 22, 54 34 S 69 58, 54 70 S 39 82, 54 100" stroke="url(#timelineGradient)" strokeWidth="0.8" opacity="0.35" fill="none" />
            </svg>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background">
                  {exp.current && (
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`glass-lg w-full md:w-5/12 ml-12 md:ml-0 rounded-xl ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                  } hover:scale-102 hover:rotate-1 hover:-translate-y-1 transition-buttery cursor-pointer animate-reveal-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        {exp.current && (
                          <Badge className="bg-gradient-primary text-white border-0">Current</Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">{exp.description}</p>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                         {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="glass-sm text-foreground hover:bg-primary hover:text-white hover:scale-105 hover:-translate-y-1 transition-buttery"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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