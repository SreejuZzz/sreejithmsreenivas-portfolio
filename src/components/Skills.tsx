import { 
  Cloud, 
  Server, 
  Database, 
  Code2, 
  GitBranch, 
  Shield,
  Container,
  Workflow,
  MonitorSpeaker,
  Network,
  HardDrive,
  Cpu,
  Activity,
  Lock,
  Globe,
  Zap,
  Settings,
  Terminal
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Containerization & Orchestration",
      icon: Container,
      skills: ["Docker", "Podman", "Kubernetes", "OpenShift", "Docker Swarm"],
      gradient: "bg-gradient-facebook"
    },
    {
      title: "CI/CD & Automation",
      icon: Workflow,
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "ArgoCD"],
      gradient: "bg-gradient-telegram"
    },
    {
      title: "Infrastructure as Code",
      icon: Code2,
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi", "Helm"],
      gradient: "bg-gradient-instagram"
    },
    {
      title: "Monitoring & Observability",
      icon: Activity,
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"],
      gradient: "bg-gradient-twitter"
    },
    {
      title: "Operating Systems",
      icon: Server,
      skills: ["Linux (RHEL/Ubuntu/CentOS)", "Windows Server", "FreeBSD"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Networking & Security",
      icon: Network,
      skills: ["TCP/IP", "DNS", "Load Balancing", "VPN", "Firewalls", "SSL/TLS"],
      gradient: "bg-gradient-facebook"
    },
    {
      title: "Version Control & Collaboration",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "SVN"],
      gradient: "bg-gradient-telegram"
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "S3", "NFS"],
      gradient: "bg-gradient-instagram"
    },
    {
      title: "Scripting & Programming",
      icon: Terminal,
      skills: ["Bash", "Python", "PowerShell", "JavaScript", "Go"],
      gradient: "bg-gradient-twitter"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-bl from-background via-primary/5 to-background">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 hover-bounce">
            Tools & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the modern DevOps and cloud infrastructure landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass rounded-2xl p-6 group hover-elastic transition-all duration-500 bg-gradient-to-br from-background/90 to-primary/5 hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-2xl hover:shadow-primary/10 ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'backwards'
              }}
            >
              {/* Icon Header */}
              <div className={`${category.gradient} p-4 rounded-xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse`}>
                <category.icon className="w-8 h-8 text-white mx-auto group-hover:animate-bounce" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover-bounce cursor-default hover:bg-primary/20 hover:scale-110 hover:rotate-2 transition-all duration-300 group-hover:animate-pulse"
                    style={{ 
                      animationDelay: `${skillIndex * 0.1}s`,
                      animationFillMode: 'backwards'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}