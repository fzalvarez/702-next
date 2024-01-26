import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50:  '#eef5ff',
          100: '#d9e9ff',
          200: '#bcd8ff',
          300: '#8ec1ff',
          400: '#599eff',
          500: '#236eff',
          600: '#1b57f5',
          700: '#1442e1',
          800: '#1736b6',
          900: '#19328f',
          950: '#142057',
        },
        secondary: {
          50: '#f0f1ff',
          100: '#e4e5ff',
          200: '#ccceff',
          300: '#a4a6ff',
          400: '#7570ff',
          500: '#4937ff',
          600: '#320fff',
          700: '#2100ff',
          800: '#1a00da',
          900: '#1700b0',
          950: '#08007a',
        },

      },
    },
  },
  plugins: [],
};
export default config;
