import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only change glass effect, never hide the navbar
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to section with offset for fixed navbar
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64; // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationContent = (
    <nav 
      className="fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 ease-out"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100vw',
        zIndex: 99999,
        backgroundColor: scrolled ? 'hsl(var(--background) / 0.95)' : 'hsl(var(--background) / 0.8)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(16px)',
        borderBottom: scrolled ? '1px solid hsl(var(--border))' : '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(16px)',
        transform: 'translateZ(0)', // Force hardware acceleration
        willChange: 'background-color, backdrop-filter, border-color, box-shadow'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-primary transition-colors duration-200">
            Sreejith M S
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group cursor-pointer"
                style={{ 
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <div className="transition-transform duration-200">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="glass transition-transform duration-200 hover:scale-110"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <X 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass rounded-lg mt-2 p-4 transform transition-all duration-500 ease-out"
               style={{ 
                 transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)'
               }}>
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-all duration-200 font-medium transform hover:translate-x-2 cursor-pointer"
                style={{ 
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  // Render navigation as a portal to bypass any container constraints
  return typeof document !== 'undefined' 
    ? createPortal(navigationContent, document.body)
    : navigationContent;
}