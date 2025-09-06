import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase, ArrowUp, Sparkles, Network, Server, Cloud, Code2, Target, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function Experience() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 });
  const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.1 });

  const journeySteps = [
    {
      title: "Network Administrator",
      company: "SDC Networks",
      period: "2018 - 2020",
      level: "Foundation",
      description: "Started my tech journey managing network infrastructure, learning the fundamentals of enterprise networking, security protocols, and system administration.",
      technologies: ["Cisco Networking", "Network Security", "VLAN Configuration", "VPN Setup", "Firewall Management", "TCP/IP"],
      icon: Network,
      impact: "Zero security incidents",
      gradient: "from-blue-500/20 to-cyan-500/20",
      position: "left",
      milestone: "Built strong networking foundation"
    },
    {
      title: "Linux Administrator", 
      company: "Synnefo Solutions",
      period: "2020 - 2022",
      level: "Growth",
      description: "Evolved into server management, mastering Linux environments, automation scripting, and high-availability systems that became the backbone of my technical expertise.",
      technologies: ["RHEL", "Ubuntu", "CentOS", "Bash Scripting", "Python", "Ansible", "Nagios"],
      icon: Server,
      impact: "99.9% uptime achieved",
      gradient: "from-green-500/20 to-emerald-500/20",
      position: "right",
      milestone: "Mastered Linux & automation"
    },
    {
      title: "Cloud Architect",
      company: "Synnefo Solutions", 
      period: "2022 - 2023",
      level: "Expansion",
      description: "Transitioned to cloud technologies, designing scalable architectures across multiple cloud platforms and establishing governance frameworks for enterprise solutions.",
      technologies: ["AWS", "Azure", "Google Cloud", "CloudFormation", "ARM Templates", "Cloud Security"],
      icon: Cloud,
      impact: "30% cost reduction achieved",
      gradient: "from-purple-500/20 to-violet-500/20",
      position: "left",
      milestone: "Became multi-cloud expert"
    },
    {
      title: "DevOps Engineer",
      company: "Synnefo Solutions",
      period: "2023 - Present",
      level: "Leadership",
      description: "Now leading DevOps transformation initiatives, implementing cutting-edge CI/CD pipelines, container orchestration, and infrastructure as code while mentoring teams.",
      technologies: ["Kubernetes", "Docker", "Terraform", "Jenkins", "GitLab CI/CD", "AWS", "Azure"],
      icon: Code2,
      impact: "40% faster deployments",
      gradient: "from-orange-500/20 to-red-500/20",
      position: "right",
      current: true,
      milestone: "Leading DevOps innovation"
    }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      
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
              Professional Journey
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              From network foundations to DevOps leadership - a continuous evolution of learning and growth
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2018</div>
                <div className="text-sm text-muted-foreground">Started</div>
              </div>
              <ArrowUp className="w-8 h-8 text-primary animate-bounce" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2024</div>
                <div className="text-sm text-muted-foreground">Present</div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div 
          ref={timelineRef}
          className={`relative transition-all duration-1000 ${
            timelineInView ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
          
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center ${step.position === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-8 md:gap-16`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${step.position === 'left' ? 'text-right' : 'text-left'}`}>
                  <div className={`glass backdrop-blur-2xl rounded-3xl p-8 bg-gradient-to-br ${step.gradient} border border-primary/20 shadow-2xl hover:scale-105 transition-all duration-500 group neumorphism`}>
                    {/* Header */}
                    <div className={`flex items-center gap-4 mb-6 ${step.position === 'left' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`${step.position === 'left' ? 'order-2' : 'order-1'} flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-primary/30`}>
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className={`${step.position === 'left' ? 'order-1' : 'order-2'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          {step.current && (
                            <Badge className="bg-gradient-primary text-white border-0 animate-pulse px-3 py-1">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-lg font-semibold text-primary">{step.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Calendar className="w-4 h-4" />
                          {step.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {step.description}
                    </p>

                    {/* Impact & Milestone */}
                    <div className="flex items-center justify-between mb-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20">
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        {step.impact}
                      </div>
                      <div className="flex items-center gap-2 text-accent font-medium">
                        <Target className="w-4 h-4" />
                        {step.milestone}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {step.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="glass-sm backdrop-blur-md bg-background/80 text-foreground border border-primary/30 hover:border-primary/60 hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-3 py-1 font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary border-4 border-background shadow-lg"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></div>
                </div>

                {/* Empty space for opposite side */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus Section */}
        <div className="mt-20">
          <div className="glass backdrop-blur-2xl rounded-3xl p-12 bg-gradient-to-br from-background/50 to-background/30 border border-primary/15 shadow-2xl text-center neumorphism">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Current Focus & Mentoring</h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Today, I continue to push the boundaries of DevOps innovation while actively mentoring the next generation of tech professionals. My journey from network administration to DevOps leadership demonstrates that with dedication and continuous learning, extraordinary growth is possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["DevOps Leadership", "Cloud Innovation", "Team Mentoring", "Technical Training", "Process Automation", "Infrastructure Design"].map((focus, index) => (
                <Badge 
                  key={index} 
                  className="glass-sm backdrop-blur-md bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/30 hover:border-primary/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300 px-4 py-2 text-base font-medium"
                >
                  {focus}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}