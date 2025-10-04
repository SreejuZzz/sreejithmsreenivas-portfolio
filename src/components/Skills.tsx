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
  Network,
  Terminal,
  Server,
  Lock,
  Cog,
  Layers,
  Zap,
  Globe,
  HardDrive,
  Wifi,
  Settings
} from "lucide-react";

export function Skills() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, isInView: skillsInView } = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Microsoft Azure", "Google Cloud Platform", "DigitalOcean"],
      level: "Expert"
    },
    {
      title: "Container & Orchestration",
      icon: Container,
      skills: ["Docker", "Kubernetes", "OpenShift", "Containerd"],
      level: "Expert"
    },
    {
      title: "CI/CD & Automation",
      icon: GitBranch,
      skills: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Azure DevOps"],
      level: "Expert"
    },
    {
      title: "Infrastructure as Code",
      icon: Code2,
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
      level: "Expert"
    },
    {
      title: "Linux & Networking",
      icon: Terminal,
      skills: ["RHEL", "Ubuntu", "Shell Scripting", "Cisco", "VPN", "Load Balancing"],
      level: "Expert"
    },
    {
      title: "Monitoring & Security",
      icon: Monitor,
      skills: ["Prometheus", "Grafana", "ELK Stack", "Security Scanning", "IAM"],
      level: "Advanced"
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleInView ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-borderless backdrop-blur-xl rounded-3xl p-12 bg-gradient-to-r from-background/40 via-background/60 to-background/40 border border-primary/10">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              Technical Expertise
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive skills across the entire DevOps and cloud infrastructure landscape
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="w-px h-8 bg-primary/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid - Modular Glass Cards */}
        <div 
          ref={skillsRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            skillsInView ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass backdrop-blur-xl rounded-2xl p-6 border border-primary/15 hover:scale-[1.02] hover:border-primary/25 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <span className="text-xs font-medium text-primary">{category.level}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications/Learning Section */}
        <div className="mt-20">
          <div className="glass backdrop-blur-2xl rounded-3xl p-12 bg-gradient-to-br from-background/50 to-background/30 border border-primary/15 shadow-2xl text-center neumorphism">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Continuous Learning</h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Technology evolves rapidly, and so do I. Currently exploring emerging technologies and maintaining certifications to stay at the forefront of DevOps innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["AWS Certified", "Azure Certified", "Kubernetes CKA", "HashiCorp Terraform", "Docker Certified", "Linux Professional"].map((cert, index) => (
                <Badge 
                  key={index} 
                  className="glass-sm backdrop-blur-md bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/30 hover:border-primary/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300 px-6 py-3 text-base font-medium"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
