import path from "path";
const rtelite = path.join(path.dirname(require.resolve("rtelite")), "**/*.js");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", rtelite],
  theme: {
    extend: {
      fontFamily: {
        paragraph: ["'Literata', serif"],
        heading: ["'Merriweather', serif"],
      },
    },
  },
  plugins: [],
};
