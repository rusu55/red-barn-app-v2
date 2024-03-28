import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {   
  
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        roze: '#dd888d',
        grey: '#FBF9F9',
      },
      fontFamily: {
                pariss: ["Pariss", "sans-serif"],
                old: ['var(--font-old_standard)'],
                nunito: ['var(--font-nunito)'],
      },
      keyframes: {
        fadeIn: {
          from : { transform: 'translateY(30%)', opacity: '0' },
          to : { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
