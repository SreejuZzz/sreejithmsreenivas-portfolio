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
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGlow: "hover:shadow-blue-500/30",
      skills: ["AWS", "Microsoft Azure", "Google Cloud Platform", "DigitalOcean", "Linode"],
      level: "Expert"
    },
    {
      title: "Container Orchestration",
      icon: Container,
      gradient: "from-purple-500/20 to-pink-500/20", 
      borderGlow: "hover:shadow-purple-500/30",
      skills: ["Docker", "Kubernetes", "OpenShift", "Docker Swarm", "Containerd"],
      level: "Expert"
    },
    {
      title: "Linux Systems",
      icon: Terminal,
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGlow: "hover:shadow-green-500/30",
      skills: ["Red Hat Enterprise Linux", "Ubuntu Server", "CentOS", "Debian", "SUSE Linux", "Shell Scripting"],
      level: "Expert"
    },
    {
      title: "Networking",
      icon: Network,
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderGlow: "hover:shadow-indigo-500/30", 
      skills: ["Cisco Networking", "VPN Configuration", "VLAN Setup", "Load Balancing", "DNS Management", "Firewall Rules"],
      level: "Advanced"
    },
    {
      title: "CI/CD Pipelines",
      icon: GitBranch,
      gradient: "from-orange-500/20 to-red-500/20",
      borderGlow: "hover:shadow-orange-500/30",
      skills: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Azure DevOps", "CircleCI", "TeamCity"],
      level: "Expert"
    },
    {
      title: "Infrastructure as Code",
      icon: Code2,
      gradient: "from-yellow-500/20 to-orange-500/20",
      borderGlow: "hover:shadow-yellow-500/30",
      skills: ["Terraform", "Ansible", "CloudFormation", "ARM Templates", "Pulumi", "Chef"],
      level: "Expert"
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      gradient: "from-teal-500/20 to-green-500/20",
      borderGlow: "hover:shadow-teal-500/30",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Nagios", "Zabbix", "Datadog"],
      level: "Advanced"
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      gradient: "from-red-500/20 to-pink-500/20",
      borderGlow: "hover:shadow-red-500/30",
      skills: ["Security Scanning", "Vulnerability Assessment", "Compliance Audits", "SSL/TLS", "IAM Policies"],
      level: "Advanced"
    },
    {
      title: "Database Management",
      icon: Database,
      gradient: "from-violet-500/20 to-purple-500/20",
      borderGlow: "hover:shadow-violet-500/30",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "ElasticSearch", "Database Backup"],
      level: "Intermediate"
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-2xl"></div>
      
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
                <div className="text-3xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="w-px h-8 bg-primary/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">40+</div>
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
              className={`glass backdrop-blur-2xl rounded-3xl p-8 bg-gradient-to-br ${category.gradient} border border-primary/20 shadow-2xl hover:scale-105 hover:shadow-2xl ${category.borderGlow} transition-all duration-500 group neumorphism`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-primary/30">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={`w-2 h-2 rounded-full ${
                        category.level === 'Expert' ? 'bg-green-500' :
                        category.level === 'Advanced' ? 'bg-blue-500' : 'bg-orange-500'
                      }`}></div>
                      <span className="text-xs font-medium text-muted-foreground">{category.level}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="glass-sm backdrop-blur-md rounded-xl p-3 bg-background/40 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 hover:scale-105 transition-all duration-300 group/skill"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                        {skill}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-primary/60 group-hover/skill:bg-primary group-hover/skill:scale-125 transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Stats */}
              <div className="mt-6 pt-4 border-t border-primary/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{category.skills.length} Technologies</span>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-primary" />
                    <span className="font-medium text-primary">{category.level}</span>
                  </div>
                </div>
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
