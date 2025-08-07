import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="glass">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="glass transition-transform duration-200 hover:scale-110 dark-mode-transition"
    >
              <div className="relative w-[1.2rem] h-[1.2rem]">
        <Sun className={`absolute inset-0 h-[1.2rem] w-[1.2rem] text-primary transition-all duration-500 ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        }`} />
        <Moon className={`absolute inset-0 h-[1.2rem] w-[1.2rem] text-primary transition-all duration-500 ${
          theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`} />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}