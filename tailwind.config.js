/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          accent: "var(--color-accent)",
          start: "var(--color-gradient-start)",
          end: "var(--color-gradient-end)",
        },
        logo: {
          coral: "#FF9A8B",
          pink: "#FF6A88",
          softPink: "#FF99AC",
          gold: "#FFC857",
          cyan: "#6EE7F9",
          blue: "#60A5FA",
          indigo: "#7C83FD",
          purple: "#A78BFA",
          lightLavender: "#C4B5FD",
          paleLavender: "#E9D5FF",
        },
        bgLight: "#F8FAFC",
        bgWhite: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.03)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.85, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(124, 131, 253, 0.04)',
        'glass-hover': '0 12px 40px 0 rgba(124, 131, 253, 0.1)',
        'glow': '0 0 30px 0 var(--primary-glow)',
      }
    },
  },
  plugins: [],
}
