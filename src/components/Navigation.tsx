import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide logic based on scroll direction
      if (currentScrollY < 100) {
        // Always show when near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Hide when scrolling down and past threshold
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Show when scrolling up
        setIsVisible(true);
      }
      
      // Glass effect after scrolling
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled 
          ? "glass backdrop-blur-md shadow-lg border-b border-white/10" 
          : "bg-transparent"
      }`}
      style={{
        willChange: 'transform, opacity, background-color',
        transform: isVisible ? 'translateY(0) translateZ(0)' : 'translateY(-100%) translateZ(0)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-primary transition-buttery">
            Sreejith M S
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-buttery font-medium relative group"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  willChange: 'color, transform'
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="transition-buttery" style={{ willChange: 'transform' }}>
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
              className="glass transition-buttery hover:scale-110"
              style={{ willChange: 'transform' }}
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
                 transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
                 willChange: 'transform, opacity'
               }}>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-foreground hover:text-primary transition-buttery font-medium transform hover:translate-x-2"
                onClick={() => setIsOpen(false)}
                style={{ 
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                  willChange: 'transform, color'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}