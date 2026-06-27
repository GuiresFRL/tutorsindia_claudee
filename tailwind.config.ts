import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1a2a6c",
        "navy-dark": "#12214a",
        blue: "#2563b0",
        "light-blue": "#e8f0fb",
        orange: "#e87722",
        "orange-dark": "#c0601a",
        "text-mid": "#555",
        "text-light": "#888",
        border: "#dde2ef",
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
