import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Shield, 
  Monitor, 
  Code2, 
  Database, 
  Wrench 
} from "lucide-react";

export function Skills() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, isInView: skillsInView } = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      gradient: "bg-gradient-primary",
      skills: ["AWS", "Azure", "Google Cloud"],
    },
    {
      title: "Containers",
      icon: Container,
      gradient: "bg-gradient-secondary",
      skills: ["Docker", "Kubernetes", "OpenShift"],
    },
    {
      title: "CI/CD",
      icon: GitBranch,
      gradient: "bg-gradient-tertiary",
      skills: ["Jenkins", "GitLab CI/CD", "GitHub Actions"],
    },
    {
      title: "Infrastructure as Code",
      icon: Code2,
      gradient: "bg-gradient-primary",
      skills: ["Terraform", "Ansible", "CloudFormation"],
    },
    {
      title: "Observability",
      icon: Monitor,
      gradient: "bg-gradient-secondary",
      skills: ["Prometheus", "Grafana", "ELK"],
    },
    {
      title: "Systems",
      icon: Database,
      gradient: "bg-gradient-tertiary",
      skills: ["Linux", "Windows Server", "Unix"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleInView ? 'animate-reveal-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps and cloud infrastructure
          </p>
        </div>

        {/* Skills Grid - Compact tiles */}
        <div 
          ref={skillsRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            skillsInView ? 'animate-reveal-up' : 'opacity-0'
          }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-sm glass-hover rounded-xl p-6 group will-change-transform transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-background/50 text-foreground border-primary/20 hover:border-primary/40 transition-colors duration-300 text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
