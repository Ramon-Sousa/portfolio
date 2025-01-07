import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Piazolla', 'serif'],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Adicione personalizações aqui, se necessário
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors, // Plugin para adicionar variáveis CSS
  ],
};

// Plugin para adicionar cada cor do Tailwind como uma variável CSS global
function addVariablesForColors({ addBase, theme }: any) {
  const colors = theme("colors");
  const flattenedColors: Record<string, string> = {};

  function flattenColors(prefix: string, obj: Record<string, any>) {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === "string") {
        flattenedColors[`${prefix}${key}`] = value;
      } else {
        flattenColors(`${prefix}${key}-`, value);
      }
    }
  }

  flattenColors("", colors);

  const newVars = Object.fromEntries(
    Object.entries(flattenedColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;