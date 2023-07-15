// import { withTV } from "tailwind-variants/dist/transformer";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/base/*.{tsx,jsx}",
    "./src/pages/**/*.{tsx,jsx}",
    "./src/components/**/*.{tsx,jsx}",
    "./src/layouts/**/*.{tsx,jsx}",
    "./src/utils/**/*.{tsx,jsx,ts}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
