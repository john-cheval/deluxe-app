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
        desc: "#3C3C3C",
        gold: "#E1BC75",
      },
      backgroundImage: {
        "top-grad":
          "linear-gradient(178deg, #FFF -17.23%, rgba(255, 255, 255, 0.00) 98.46%);",
      },
    },
  },
  plugins: [],
};
