import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleThemeChange = () => {
    setIsTransitioning(true);
    setTheme(theme === "light" ? "dark" : "light");
    
    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <>
      {/* Theme transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] pointer-events-none animate-theme-fade bg-background/80 backdrop-blur-sm" />
      )}
      
      <Button
        variant="ghost"
        size="icon"
        onClick={handleThemeChange}
        className="glass-sm glass-hover transition-all duration-300 will-change-transform"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}