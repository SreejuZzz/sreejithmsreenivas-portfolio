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
					'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
					'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
					float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
					'float-slow': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-6px)' } },
					glow: { from: { boxShadow: '0 0 14px hsl(var(--primary))' }, to: { boxShadow: '0 0 26px hsl(var(--primary-glow))' } },
					breath: { '0%, 100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
					'slide-up': { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
					'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
					'fade-up': { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
					'tilt-in': { from: { opacity: '0', transform: 'rotate(-2deg) scale(0.98)' }, to: { opacity: '1', transform: 'rotate(0) scale(1)' } }
				},
				animation: {
					'accordion-down': 'accordion-down 0.2s ease-out',
					'accordion-up': 'accordion-up 0.2s ease-out',
					'float': 'float 3s ease-in-out infinite',
					'float-slow': 'float-slow 4.5s ease-in-out infinite',
					'glow': 'glow 2.2s ease-in-out infinite alternate',
					'breath': 'breath 4s ease-in-out infinite',
					'slide-up': 'slide-up 0.5s ease-out',
					'fade-in': 'fade-in 0.5s ease-out',
					'fade-up': 'fade-up 0.6s ease-out',
					'tilt-in': 'tilt-in 0.45s ease-out'
				},
				backgroundImage: {
					'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
					'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
				}
			}
		},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
