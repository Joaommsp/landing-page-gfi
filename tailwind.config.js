/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",
        "bg-reverse": "var(--bg-reverse)",

        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",

        "border-theme": "var(--border-color)",
        "border-theme-light": "var(--border-light)",

        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      backgroundImage: {
        "dark-gradient":
          "linear-gradient(180deg, rgba(34, 37, 42, 1) 0%, rgba(16, 18, 20, 1) 100%)",
      },

      boxShadow: {
        "theme-sm": "0 1px 2px var(--shadow-sm)",
        "theme-md": "0 4px 6px var(--shadow-md)",
        "theme-lg": "0 10px 15px var(--shadow-lg)",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },

      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        meteor: "meteor 5s linear infinite",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ✅ ADICIONADO: Z-index negativo para posicionamento
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
    },
  },

  plugins: [
    tailwindcssAnimate,

    plugin(function ({ addUtilities }) {
      addUtilities({
        // Background utilities
        ".bg-theme-primary": {
          "background-color": "var(--bg-primary)",
        },
        ".bg-theme-secondary": {
          "background-color": "var(--bg-secondary)",
        },
        ".bg-theme-tertiary": {
          "background-color": "var(--bg-tertiary)",
        },
        ".bg-reverse": {
          "background-color": "var(--bg-reverse)",
        },

        // Text utilities
        ".text-theme-primary": {
          color: "var(--text-primary)",
        },
        ".text-theme-secondary": {
          color: "var(--text-secondary)",
        },
        ".text-theme-muted": {
          color: "var(--text-muted)",
        },

        // Border utilities
        ".border-theme": {
          "border-color": "var(--border-color)",
        },
        ".border-theme-light": {
          "border-color": "var(--border-light)",
        },

        // Card utilities
        ".card-bg": {
          "background-color": "var(--card-bg)",
        },
        ".input-bg": {
          "background-color": "var(--input-bg)",
        },
      });
    }),
  ],
};
