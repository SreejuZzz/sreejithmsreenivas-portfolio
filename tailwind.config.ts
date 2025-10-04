import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
			extend: {
				fontFamily: {
					sans: ['Inter', 'sans-serif'],
				},
				colors: {
					border: 'hsl(var(--border))',
					input: 'hsl(var(--input))',
					ring: 'hsl(var(--ring))',
					background: 'hsl(var(--background))',
					foreground: 'hsl(var(--foreground))',
					primary: {
						DEFAULT: 'hsl(var(--primary))',
						foreground: 'hsl(var(--primary-foreground))',
						glow: 'hsl(var(--primary-glow))'
					},
					secondary: {
						DEFAULT: 'hsl(var(--secondary))',
						foreground: 'hsl(var(--secondary-foreground))'
					},
					destructive: {
						DEFAULT: 'hsl(var(--destructive))',
						foreground: 'hsl(var(--destructive-foreground))'
					},
					muted: {
						DEFAULT: 'hsl(var(--muted))',
						foreground: 'hsl(var(--muted-foreground))'
					},
					accent: {
						DEFAULT: 'hsl(var(--accent))',
						foreground: 'hsl(var(--accent-foreground))'
					},
					popover: {
						DEFAULT: 'hsl(var(--popover))',
						foreground: 'hsl(var(--popover-foreground))'
					},
					card: {
						DEFAULT: 'hsl(var(--card))',
						foreground: 'hsl(var(--card-foreground))'
					},
					sidebar: {
						DEFAULT: 'hsl(var(--sidebar-background))',
						foreground: 'hsl(var(--sidebar-foreground))',
						primary: 'hsl(var(--sidebar-primary))',
						'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
						accent: 'hsl(var(--sidebar-accent))',
						'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
						border: 'hsl(var(--sidebar-border))',
						ring: 'hsl(var(--sidebar-ring))'
					}
				},
				borderRadius: {
					lg: 'var(--radius)',
					md: 'calc(var(--radius) - 2px)',
					sm: 'calc(var(--radius) - 4px)'
				},
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          "reveal-up": {
            "0%": { 
              opacity: "0", 
              transform: "translateY(20px) scale(0.98)",
              filter: "blur(2px)"
            },
            "100%": { 
              opacity: "1", 
              transform: "translateY(0) scale(1)",
              filter: "blur(0px)"
            },
          },
          "reveal-right": {
            "0%": { 
              opacity: "0", 
              transform: "translateX(-20px) scale(0.98)",
              filter: "blur(2px)"
            },
            "100%": { 
              opacity: "1", 
              transform: "translateX(0) scale(1)",
              filter: "blur(0px)"
            },
          },
          "glass-pop": {
            "0%": { 
              opacity: "0",
              transform: "scale(0.95)",
              filter: "blur(4px)"
            },
            "100%": { 
              opacity: "1",
              transform: "scale(1)",
              filter: "blur(0px)"
            },
          },
          "theme-fade": {
            "0%": { opacity: "1" },
            "50%": { opacity: "0.8" },
            "100%": { opacity: "1" },
          },
          float: {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" },
          },
          glow: {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0.8" },
          },
          "slide-up": {
            "0%": { 
              opacity: "0", 
              transform: "translateY(20px)" 
            },
            "100%": { 
              opacity: "1", 
              transform: "translateY(0)" 
            },
          },
          "fade-in": {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          "blur-in": {
            "0%": { 
              opacity: "0",
              filter: "blur(10px)",
              transform: "scale(0.95)"
            },
            "100%": { 
              opacity: "1",
              filter: "blur(0px)",
              transform: "scale(1)"
            },
          },
          "fade-up": {
            "0%": {
              opacity: "0",
              transform: "translateY(30px)",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
          breath: {
            "0%, 100%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.05)" },
          },
          "tilt-in": {
            "0%": {
              transform: "rotateY(-10deg) rotateX(10deg) scale(0.95)",
              opacity: "0",
            },
            "100%": {
              transform: "rotateY(0) rotateX(0) scale(1)",
              opacity: "1",
            },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "reveal-up": "reveal-up 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          "reveal-right": "reveal-right 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          "glass-pop": "glass-pop 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "theme-fade": "theme-fade 0.3s ease-out",
          float: "float 4s ease-in-out infinite",
          glow: "glow 1.5s ease-in-out infinite alternate",
          "slide-up": "slide-up 0.4s ease-out",
          "fade-in": "fade-in 0.4s ease-out",
          "blur-in": "blur-in 0.6s ease-out",
          "fade-up": "fade-up 0.5s ease-out",
          breath: "breath 3s ease-in-out infinite",
          "tilt-in": "tilt-in 0.5s ease-out",
        },
				backgroundImage: {
					'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
					'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
				}
			}
		},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
