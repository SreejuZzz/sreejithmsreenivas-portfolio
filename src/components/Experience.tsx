import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function Experience() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Synnefo Solutions",
      location: "Current",
      period: "2023 - Present",
      description: "Leading DevOps initiatives, implementing CI/CD pipelines, container orchestration, and infrastructure automation. Managing cloud migrations and optimizing deployment processes.",
      technologies: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "Jenkins", "GitLab CI/CD"],
      current: true,
      impact: "40% faster deployment cycles"
    },
    {
      title: "Cloud Architect",
      company: "Synnefo Solutions",
      location: "Remote",
      period: "2022 - 2023",
      description: "Designed and implemented scalable cloud architectures, optimized infrastructure costs, and established cloud governance frameworks. Led multi-cloud strategy initiatives.",
      technologies: ["AWS", "Azure", "GCP", "CloudFormation", "ARM Templates", "Cloud Security"],
      current: false,
      impact: "30% cost reduction"
    },
    {
      title: "Linux Administrator",
      company: "Synnefo Solutions",
      location: "On-site",
      period: "2020 - 2022",
      description: "Managed Linux servers, implemented automation scripts, configured monitoring solutions, and maintained high availability systems. Established backup and disaster recovery procedures.",
      technologies: ["RHEL", "Ubuntu", "CentOS", "Bash", "Python", "Ansible", "Nagios"],
      current: false,
      impact: "99.9% uptime achieved"
    },
    {
      title: "Network Administrator",
      company: "SDC Networks",
      location: "On-site",
      period: "2018 - 2020",
      description: "Foundation role managing network infrastructure, configuring switches and routers, implementing security policies, and troubleshooting connectivity issues.",
      technologies: ["Cisco", "Network Security", "VLAN", "VPN", "Firewall", "TCP/IP"],
      current: false,
      impact: "Zero security incidents"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${
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

        {/* Apple-inspired modular grid */}
        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-700 ${
            contentInView ? 'animate-reveal-up' : 'opacity-0'
          }`}
        >
          {/* Current role - featured module (spans 8 columns) */}
          <div className="lg:col-span-8 neuro-module group hover:scale-[1.02] transition-all duration-500">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {experiences[0].title}
                  </h3>
                  <p className="text-lg font-semibold text-primary">{experiences[0].company}</p>
                </div>
              </div>
              <Badge className="bg-gradient-primary text-white border-0 animate-pulse">
                <Sparkles className="w-3 h-3 mr-1" />
                Current
              </Badge>
            </div>
            
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {experiences[0].description}
            </p>
            
            <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {experiences[0].location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {experiences[0].period}
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <ArrowRight className="w-4 h-4" />
                {experiences[0].impact}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {experiences[0].technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="neuro-badge hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats module (spans 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="neuro-module text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="neuro-module text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
          </div>

          {/* Previous roles - compact modules */}
          {experiences.slice(1).map((exp, index) => (
            <div key={index} className="lg:col-span-6 neuro-module group hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-secondary flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                {exp.description}
              </p>
              
              <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-1 text-primary font-semibold">
                  <ArrowRight className="w-3 h-3" />
                  {exp.impact}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    className="neuro-badge text-xs hover:scale-105 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
                {exp.technologies.length > 3 && (
                  <Badge className="neuro-badge text-xs">
                    +{exp.technologies.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          ))}

          {/* Mentoring module - spans full width */}
          <div className="lg:col-span-12 neuro-module text-center group hover:scale-[1.01] transition-all duration-500">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-tertiary flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mentoring & Training</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Alongside my professional roles, I actively mentor students and working professionals, 
                helping them navigate the complexities of DevOps, Cloud Architecture, and Infrastructure Management. 
                I believe in sharing knowledge and fostering the next generation of tech professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["DevOps Mentoring", "Cloud Training", "Career Guidance", "Technical Workshops"].map((item, index) => (
                  <Badge key={index} className="neuro-badge hover:scale-105 hover:-translate-y-1 transition-all duration-300">
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