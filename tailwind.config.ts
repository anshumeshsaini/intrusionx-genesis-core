
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
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
				},
				// Custom colors for IntrusionX
				deepspace: '#000000',
				cyberblue: '#06b6d4',
				neongreen: '#39FF14',
				aliensoft: '#9b87f5',
				aliendark: '#7E69AB',
				aliendeep: '#6E59A5',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
					'50%': { opacity: '0.7', filter: 'brightness(1.3)' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'10%': { transform: 'translate(-5px, 0)' },
					'20%': { transform: 'translate(5px, 0)' },
					'30%': { transform: 'translate(-5px, 0)' },
					'40%': { transform: 'translate(0, 5px)' },
					'50%': { transform: 'translate(0, -5px)' },
					'60%': { transform: 'translate(-5px, 0)' },
					'70%': { transform: 'translate(5px, 0)' },
					'80%': { transform: 'translate(-5px, 0)' },
					'90%': { transform: 'translate(5px, 0)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'morph': {
					'0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
					'25%': { borderRadius: '40% 60% 70% 30%/30% 40% 60% 70%' },
					'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
					'75%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				},
				'particle-flow': {
					'0%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
					'50%': { transform: 'translateY(-20px) scale(1.5)', opacity: '1' },
					'100%': { transform: 'translateY(-40px) scale(0.8)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'glitch': 'glitch 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'shimmer': 'shimmer 8s ease-in-out infinite',
				'particle-flow': 'particle-flow 5s ease-in-out infinite',
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
				'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
				'circuit-pattern': 'url("/circuit-pattern.svg")'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
