import { withTV } from "tailwind-variants/dist/transformer";

/** @type {import('tailwindcss').Config} */
export default withTV({
  content: [
    "./src/pages/**/*.{tsx,jsx}",
    "./src/components/**/*.{tsx,jsx}",
    "./src/layouts/**/*.{tsx,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
