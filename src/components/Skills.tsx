import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Container,
  GitBranch,
  Monitor,
  Code,
  Server,
} from "lucide-react";

export function Skills() {
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
      icon: Code,
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
      icon: Server,
      gradient: "bg-gradient-tertiary",
      skills: ["Linux", "Windows Server", "Unix"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-tertiary opacity-10 transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-8 transition-colors duration-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 animate-reveal-up">
            Technical Expertise
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto animate-reveal-up" style={{ animationDelay: '0.1s' }}>
            Compact, high-signal overview of core capabilities
          </p>
        </header>

        {/* Compact gradient tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-md animate-glass-pop"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 ${category.gradient} opacity-90`}></div>
              {/* Glass overlay for readability */}
              <div className="absolute inset-0 glass-borderless"></div>

              <div className="relative z-10 flex items-start gap-3 p-4 md:p-5">
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg glass-sm flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <category.icon className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {category.skills.map((name, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="glass-sm text-xs bg-background/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                      >
                        {name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
