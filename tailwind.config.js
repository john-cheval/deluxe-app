/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: "var(--font-helvetica)",
        americana: "var(--font-americana)",
        selfModern: "var(--font-semimoder)",
      },
      colors: {
        main: "#021b3a",
        secondary: "#a10101",
        light: "#fff",
      },
    },
  },
  plugins: [],
};
