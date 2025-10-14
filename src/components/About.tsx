export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border">
              <img
                src="/lovable-uploads/22c7ffb5-a6c2-4d08-8b79-9db5af73351e.png"
                alt="Sreejith M S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <div className="text-sm text-muted-foreground mb-4">About</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Building infrastructure that scales
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a DevOps Engineer at Synnefo Solutions with over 7 years of experience 
                in cloud architecture and infrastructure automation.
              </p>
              <p>
                My work focuses on creating reliable, scalable systems using AWS, Kubernetes, 
                and modern CI/CD practices. I believe in infrastructure as code and building 
                systems that empower teams to move fast without breaking things.
              </p>
              <p>
                Beyond technical work, I'm passionate about mentoring engineers and sharing 
                knowledge. I've helped over 100 engineers level up their DevOps skills.
              </p>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Python', 'Linux'].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full border border-border text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
