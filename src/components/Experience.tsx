import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Users, 
  Cloud, 
  Code, 
  Trophy,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Shield,
  Database,
  GitBranch
} from "lucide-react";

const journeyMilestones = [
  {
    year: "2024",
    title: "Senior DevOps Engineer",
    company: "Synnefo Solutions",
    period: "2024 - Present",
    type: "current",
    description: "Leading cloud infrastructure transformation and mentoring junior developers while architecting scalable solutions for enterprise clients.",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "Python", "Microservices"],
    achievements: [
      "Reduced deployment time by 70%",
      "Mentored 15+ junior developers",
      "Architected multi-cloud solutions"
    ],
    impact: "🚀 Transforming DevOps culture",
    icon: Rocket,
    gradient: "from-primary via-primary-glow to-accent"
  },
  {
    year: "2022",
    title: "DevOps Engineer",
    company: "Synnefo Solutions",
    period: "2022 - 2024",
    type: "growth",
    description: "Specialized in container orchestration and CI/CD pipeline optimization, delivering robust automation solutions.",
    technologies: ["Docker", "Kubernetes", "AWS", "GitLab CI", "Ansible", "Python", "Bash"],
    achievements: [
      "Implemented container orchestration",
      "Optimized CI/CD workflows",
      "Enhanced system reliability by 90%"
    ],
    impact: "⚡ Automation excellence",
    icon: Zap,
    gradient: "from-accent via-primary to-primary-glow"
  },
  {
    year: "2020",
    title: "Junior DevOps Engineer", 
    company: "Synnefo Solutions",
    period: "2020 - 2022",
    type: "learning",
    description: "Started DevOps journey focusing on infrastructure automation and learning cloud technologies.",
    technologies: ["Linux", "Git", "Docker", "AWS EC2", "Shell Scripting", "Monitoring"],
    achievements: [
      "Automated deployment processes",
      "Learned cloud fundamentals",
      "Built monitoring solutions"
    ],
    impact: "📈 Foundation building",
    icon: TrendingUp,
    gradient: "from-muted via-accent to-primary"
  },
  {
    year: "2018",
    title: "System Administrator",
    company: "Previous Organization",
    period: "2018 - 2020",
    type: "foundation",
    description: "Managed server infrastructure and gained hands-on experience with Linux systems and network administration.",
    technologies: ["Linux", "Windows Server", "Networking", "MySQL", "Apache", "SSH"],
    achievements: [
      "Maintained 99.9% uptime",
      "Secured network infrastructure",
      "Managed database systems"
    ],
    impact: "🔧 Technical foundation",
    icon: Shield,
    gradient: "from-muted-foreground via-muted to-accent"
  }
];

export function Experience() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  // Accent colors for border-left
  const accentColors = [
    "border-primary",
    "border-accent", 
    "border-primary-glow",
    "border-muted-foreground"
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            7+ years transforming infrastructure and mentoring teams
          </p>

          {/* Condensed Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary">7+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary-glow">15+</div>
              <div className="text-sm text-muted-foreground">Mentored</div>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
            gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {journeyMilestones.map((milestone, index) => {
            const Icon = milestone.icon;
            
            return (
              <div
                key={index}
                className={`group bg-card/50 backdrop-blur-sm rounded-xl p-6 border-l-4 ${accentColors[index]} border-t border-r border-b border-border/50 hover:bg-card/80 hover:shadow-lg hover:border-border transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Year Badge - Only element with gradient */}
                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-4 bg-gradient-to-r ${milestone.gradient}`}>
                  <Icon className="w-3.5 h-3.5 text-white" />
                  <span className="font-bold text-xs text-white">{milestone.year}</span>
                </div>

                {/* Title & Company - Always Visible */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Globe className="w-3.5 h-3.5" />
                    <span>{milestone.company}</span>
                    <span className="text-xs">• {milestone.period}</span>
                  </div>
                </div>

                {/* Description - Always Visible */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {milestone.description}
                </p>

                {/* Hover Reveal: Achievements & Tech */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out space-y-4">
                  {/* Key Achievement */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-2">
                      <Trophy className="w-3.5 h-3.5" />
                      Key Achievement
                    </div>
                    <div className="text-sm text-muted-foreground pl-5">
                      {milestone.achievements[0]}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-2">
                      <Code className="w-3.5 h-3.5" />
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5 pl-5">
                      {milestone.technologies.slice(0, 5).map((tech, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}