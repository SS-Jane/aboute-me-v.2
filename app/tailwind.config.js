/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      animation: {
        text: "text 5s ease infinite",
        glow: "glow 1.5s ease-in-out infinite",
      },
      boxShadow: {
        neon: "0 0 5px 0 #ffffff, 0 0 20px 0 #2563eb",
      },
      keyframes: {
        text: {
          "0%,100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px 1px #ffffff, 0 0 20px 0 #2563eb",
          },
          "50%": {
            boxShadow: "0 0 10px 1px #ffffff, 0 0 30px 0 #2563eb",
          },
        },
      },
    },
  },
  plugins: [daisyui],
};
