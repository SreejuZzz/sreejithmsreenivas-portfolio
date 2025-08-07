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
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 hover-bounce">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of delivering scalable infrastructure solutions and optimizing cloud operations
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative group animate-fade-in-up hover:animate-pulse ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  animationFillMode: 'backwards'
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-lg group-hover:scale-150 group-hover:rotate-12 transition-all duration-500 ease-out z-10 animate-pulse"></div>
                
                {/* Content */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`glass rounded-2xl p-6 transition-all duration-500 ease-out shadow-lg hover:shadow-2xl ${
                      index % 4 === 0 ? 'bg-gradient-to-br from-background/90 to-purple/5 hover:shadow-purple/20 group-hover:scale-105 group-hover:translate-x-2' :
                      index % 4 === 1 ? 'bg-gradient-to-br from-background/90 to-orange/5 hover:shadow-orange/20 group-hover:scale-105 group-hover:translate-x-2' :
                      index % 4 === 2 ? 'bg-gradient-to-br from-background/90 to-green/5 hover:shadow-green/20 group-hover:scale-105 group-hover:translate-x-2' :
                      'bg-gradient-to-br from-background/90 to-pink/5 hover:shadow-pink/20 group-hover:scale-105 group-hover:translate-x-2'
                    }`}>
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 group-hover:animate-bounce">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                            {exp.current && (
                              <span className="bg-gradient-primary text-white px-2 py-1 rounded-full text-xs animate-pulse group-hover:scale-110 transition-transform duration-300">Current</span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1 hover-bounce group-hover:text-primary transition-colors duration-300">
                              <Building size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1 hover-bounce group-hover:text-primary transition-colors duration-300">
                              <Calendar size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1 hover-bounce group-hover:text-primary transition-colors duration-300">
                              <MapPin size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{exp.description}</p>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">Key Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="hover-bounce bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 group-hover:scale-110 hover:rotate-2 cursor-default"
                                style={{ 
                                  animationDelay: `${techIndex * 0.1}s`,
                                  animationFillMode: 'backwards'
                                }}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}