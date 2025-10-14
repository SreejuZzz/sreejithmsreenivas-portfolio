const experiences = [
  {
    year: "2018 - Present",
    role: "Senior DevOps Engineer",
    company: "Synnefo Solutions",
    description: "Leading cloud infrastructure initiatives and mentoring engineering teams."
  },
  {
    year: "2016 - 2018",
    role: "DevOps Engineer",
    company: "Previous Company",
    description: "Built and maintained CI/CD pipelines and cloud infrastructure."
  },
  {
    year: "2015 - 2016",
    role: "System Administrator",
    company: "Early Stage",
    description: "Managed Linux servers and automated deployment processes."
  }
];

export function Experience() {
  return (
    <section id="work" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="text-sm text-muted-foreground mb-4">Experience</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Work history
          </h2>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl hover:bg-card transition-all duration-300 border border-transparent hover:border-border"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-muted-foreground">{exp.company}</div>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  {exp.year}
                </div>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
