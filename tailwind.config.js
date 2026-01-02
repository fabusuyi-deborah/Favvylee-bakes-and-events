/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Space_Grotesk: ["var(--font-space-grotesk)", "sans-serif"],
        playfair: ["var(--font-playfair-display)", "serif"],
        Inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
