import type { Config } from "tailwindcss";
import { COLORS } from "./src/constants";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#02010A",
        federalBlue: "#140152",
        vistaBlue: "#8F95D3",
        thistle: "#D3C4E3",
        orchidPink: "#DBB1BC",
        snow: "#F9F1F3",
      },
    },
  },
  plugins: [],
} satisfies Config;
