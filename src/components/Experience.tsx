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

const skills = [
  { name: "Cloud Architecture", level: 95, color: "bg-primary" },
  { name: "Container Orchestration", level: 90, color: "bg-accent" },
  { name: "CI/CD Automation", level: 88, color: "bg-primary-glow" },
  { name: "Infrastructure as Code", level: 85, color: "bg-accent" },
  { name: "Mentoring & Leadership", level: 92, color: "bg-primary" }
];

export function Experience() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: timelineRef, isInView: timelineInView } = useInView();
  const { ref: skillsRef, isInView: skillsInView } = useInView();

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
            headerInView ? 'animate-quantum-emerge' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-3 glass-quantum rounded-full px-6 py-3 mb-6 neuro-badge">
            <Target className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Professional Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Evolution in Tech
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From curious beginner to DevOps leader - a journey of continuous learning, 
            innovation, and empowering others in the tech ecosystem.
          </p>

          {/* Journey Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="glass-quantum rounded-2xl p-6 neuro-card hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="glass-quantum rounded-2xl p-6 neuro-card hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="glass-quantum rounded-2xl p-6 neuro-card hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-primary-glow mb-2">15+</div>
              <div className="text-sm text-muted-foreground">People Mentored</div>
            </div>
          </div>
        </div>

        {/* Journey Timeline - Completely Redesigned */}
        <div 
          ref={timelineRef}
          className={`relative transition-all duration-1000 ${
            timelineInView ? 'animate-quantum-emerge' : 'opacity-0'
          }`}
        >
          {/* Simplified central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-accent/20 to-primary/20 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24">
            {journeyMilestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-quantum-rise`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass rounded-2xl p-6 border border-primary/15 hover:scale-[1.01] transition-all duration-300 group">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-gradient-to-r ${milestone.gradient} text-white shadow-lg`}>
                        <Icon className="w-4 h-4" />
                        <span className="font-bold text-sm">{milestone.year}</span>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                            <Globe className="w-4 h-4" />
                            <span>{milestone.company}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{milestone.period}</div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Impact */}
                        <div className="glass rounded-xl p-4 bg-gradient-to-r from-primary/5 to-accent/5">
                          <div className="text-lg font-semibold text-foreground">{milestone.impact}</div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-primary flex items-center gap-2">
                            <Trophy className="w-4 h-4" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {milestone.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-accent flex items-center gap-2">
                            <Code className="w-4 h-4" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {milestone.technologies.map((tech, i) => (
                              <Badge 
                                key={i}
                                variant="secondary"
                                className="glass text-xs px-3 py-1.5 hover:scale-105 transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-primary/20 font-medium"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Central Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className={`w-16 h-16 rounded-full glass-quantum border-4 border-primary/30 flex items-center justify-center bg-gradient-to-br ${milestone.gradient} shadow-2xl hover:scale-110 transition-all duration-500 group`}>
                      <Icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Mobile Timeline Node */}
                  <div className="md:hidden absolute -left-4 top-8">
                    <div className={`w-12 h-12 rounded-full glass border-3 border-primary/30 flex items-center justify-center bg-gradient-to-br ${milestone.gradient} shadow-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Visualization */}
        <div 
          ref={skillsRef}
          className={`mt-24 md:mt-32 transition-all duration-1000 ${
            skillsInView ? 'animate-quantum-emerge' : 'opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Core Expertise
              </span>
            </h3>
            <p className="text-muted-foreground">Skills that drive innovation and excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-quantum rounded-2xl p-6 neuro-card hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out animate-pulse`}
                    style={{ 
                      width: skillsInView ? `${skill.level}%` : '0%',
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}