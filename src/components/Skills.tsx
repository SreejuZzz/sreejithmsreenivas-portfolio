import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Monitor, 
  Shield, 
  Zap,
  Server,
  Database,
  Code,
  Users
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 90, color: "bg-orange-500" },
        { name: "Azure", level: 85, color: "bg-blue-500" },
        { name: "Google Cloud", level: 75, color: "bg-green-500" }
      ]
    },
    {
      title: "Containerization",
      icon: Container,
      skills: [
        { name: "Docker", level: 95, color: "bg-blue-600" },
        { name: "Kubernetes", level: 88, color: "bg-purple-600" },
        { name: "OpenShift", level: 70, color: "bg-red-600" }
      ]
    },
    {
      title: "CI/CD & Automation",
      icon: GitBranch,
      skills: [
        { name: "Jenkins", level: 90, color: "bg-blue-700" },
        { name: "GitLab CI/CD", level: 85, color: "bg-orange-600" },
        { name: "GitHub Actions", level: 80, color: "bg-gray-700" }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: Code,
      skills: [
        { name: "Terraform", level: 92, color: "bg-purple-700" },
        { name: "Ansible", level: 88, color: "bg-red-700" },
        { name: "CloudFormation", level: 80, color: "bg-orange-700" }
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      skills: [
        { name: "Prometheus", level: 85, color: "bg-orange-500" },
        { name: "Grafana", level: 82, color: "bg-orange-600" },
        { name: "ELK Stack", level: 78, color: "bg-yellow-600" }
      ]
    },
    {
      title: "Operating Systems",
      icon: Server,
      skills: [
        { name: "Linux (RHEL/Ubuntu)", level: 95, color: "bg-green-600" },
        { name: "Windows Server", level: 75, color: "bg-blue-500" },
        { name: "Unix", level: 70, color: "bg-gray-600" }
      ]
    }
  ];

  const certifications = [
    "AWS Solutions Architect",
    "Azure DevOps Engineer",
    "Kubernetes Certified",
    "Docker Certified Associate",
    "Terraform Associate",
    "Linux Professional"
  ];

  const tools = [
    "Git", "Jira", "Confluence", "Slack", "PagerDuty", "SonarQube",
    "Nexus", "Artifactory", "Vault", "Consul", "Istio", "Helm"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skills across the DevOps and Cloud ecosystem
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-physics border-0 neumorphism p-6 hover:scale-105 hover:rotate-1 hover:-translate-y-2 transition-physics cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center transform hover:rotate-12 hover:scale-110 transition-bounce">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="mb-12">
          <Card className="glass-physics border-0 neumorphism p-6 hover:scale-[1.02] transition-physics">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center transform hover:rotate-12 transition-physics">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-muted/50 text-foreground hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 transition-bounce cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Mentoring Skills */}
        <div className="mt-12">
          <Card className="glass-physics border-0 neumorphism p-8 text-center hover:scale-[1.02] transition-physics">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center transform hover:rotate-12 hover:scale-110 transition-bounce">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mentoring & Leadership</h3>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Beyond technical skills, I excel in knowledge transfer, team leadership, and mentoring. 
                I've successfully guided numerous professionals in their DevOps journey, helping them 
                transition into cloud and automation roles.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {["Technical Mentoring", "Career Coaching", "Team Leadership", "Knowledge Transfer", "Training Delivery"].map((skill, index) => (
                  <Badge key={index} className="bg-accent text-white border-0 hover:scale-110 hover:-translate-y-1 transition-bounce">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}