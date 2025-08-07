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
              className={`glass rounded-2xl p-6 group transition-all duration-500 shadow-lg hover:shadow-2xl hover-slide-right ${
                index % 6 === 0 ? 'bg-gradient-to-br from-background/90 to-purple/10 hover:shadow-purple/30 hover:scale-105' :
                index % 6 === 1 ? 'bg-gradient-to-br from-background/90 to-orange/10 hover:shadow-orange/30 hover:scale-105' :
                index % 6 === 2 ? 'bg-gradient-to-br from-background/90 to-green/10 hover:shadow-green/30 hover:scale-105' :
                index % 6 === 3 ? 'bg-gradient-to-br from-background/90 to-pink/10 hover:shadow-pink/30 hover:scale-105' :
                index % 6 === 4 ? 'bg-gradient-to-br from-background/90 to-primary/10 hover:shadow-primary/30 hover:scale-105' :
                'bg-gradient-to-br from-background/90 to-cyan/10 hover:shadow-cyan/30 hover:scale-105'
              } ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'backwards'
              }}
            >
              {/* Icon Header */}
              <div className={`p-4 rounded-xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ${
                index % 6 === 0 ? 'bg-gradient-purple' :
                index % 6 === 1 ? 'bg-gradient-orange' :
                index % 6 === 2 ? 'bg-gradient-green' :
                index % 6 === 3 ? 'bg-gradient-pink' :
                index % 6 === 4 ? 'bg-gradient-primary' :
                'bg-gradient-cosmic'
              }`}>
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
                    className="px-3 py-1 rounded-full text-sm font-medium hover-bounce cursor-default hover:scale-110 hover:rotate-2 transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      background: index % 6 === 0 ? 'linear-gradient(to right, hsl(280 90% 55% / 0.15), hsl(260 90% 65% / 0.1))' :
                                 index % 6 === 1 ? 'linear-gradient(to right, hsl(25 90% 55% / 0.15), hsl(45 90% 65% / 0.1))' :
                                 index % 6 === 2 ? 'linear-gradient(to right, hsl(142 80% 55% / 0.15), hsl(120 70% 50% / 0.1))' :
                                 index % 6 === 3 ? 'linear-gradient(to right, hsl(330 90% 55% / 0.15), hsl(310 90% 65% / 0.1))' :
                                 index % 6 === 4 ? 'linear-gradient(to right, hsl(210 90% 55% / 0.15), hsl(195 90% 60% / 0.1))' :
                                 'linear-gradient(to right, hsl(270 90% 50% / 0.15), hsl(300 90% 60% / 0.1))',
                      color: index % 6 === 0 ? 'hsl(280 90% 55%)' :
                             index % 6 === 1 ? 'hsl(25 90% 55%)' :
                             index % 6 === 2 ? 'hsl(142 80% 55%)' :
                             index % 6 === 3 ? 'hsl(330 90% 55%)' :
                             index % 6 === 4 ? 'hsl(210 90% 55%)' :
                             'hsl(270 90% 50%)',
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