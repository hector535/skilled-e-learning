import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        "slate-blue": "#666CA3",
        navy: "#13183F",
        steel: "#83869A",
        "dark-pink": "#F74780",
        "soft-pink": "#FFA7C3",
      },
      backgroundImage: {
        "main-pattern": "linear-gradient(180deg, #fff 0%, #f0f1ff 200%)",
        "secondary-pattern":
          "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)",
        "tertiary-pattern":
          "linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%)",
      },
      boxShadow: {
        "stat-card": "0rem 2.125rem 3.375rem 0rem rgba(6, 22, 141, 0.16)",
        "course-card": "0rem 1.5625rem 3.125rem 0rem rgba(6, 22, 141, 0.04)",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
