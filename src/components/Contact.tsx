import { Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "sreejithmsreenivas@gmail.com",
    href: "mailto:sreejithmsreenivas@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/sreejith-sreenivas-110bb217a"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@SreejuZzz",
    href: "https://github.com/SreejuZzz"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <div className="text-sm text-muted-foreground mb-4">Get in touch</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities,
            or just having a chat about DevOps and cloud architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border border-border hover:border-foreground transition-all duration-300 text-left"
            >
              <contact.icon className="w-6 h-6 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
              <div className="font-medium">{contact.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
