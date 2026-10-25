import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "Times New Roman", "serif"],
      },
      colors: {
        ink: "#1b2a3a",
        paper: "#faf8f3",
        sage: {
          DEFAULT: "#e9edf4",
          deep: "#d6e0ec",
        },
        navy: {
          DEFAULT: "#14304d",
          soft: "#3f5a78",
        },
        gold: {
          DEFAULT: "#cf9f3f",
          soft: "#ecd9ae",
          dark: "#8f6410",
        },
      },
    },
  },
  plugins: [],
};
export default config;
