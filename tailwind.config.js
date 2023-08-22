import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // Add your custom fonts and enjoy.
      Oleo: ["Oleo Script", "cursive"],
    },
    extend: {},
  },
  plugins: [daisyui],
}

