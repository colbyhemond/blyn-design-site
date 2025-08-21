/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      fontFamily: {
        "libre-baskerville": ['var(--font-libre-baskerville)', 'serif'],
        "figtree": ['var(--font-figtree)', 'sans-serif'],
      },
      
    },
  },
  daisyui: {
    themes: [
      {
        "blyn": {
          "primary":   "#335c67", // deep teal
          "secondary": "#9e2a2b", // burgundy
          "accent":    "#e09f3e", // golden accent
          "neutral":   "#540b0e", // dark wine
          "base-100":  "#faf9f9", // soft beige background
          "info":      "#2563EB",
          "success":   "#16A34A",
          "warning":   "#F59E0B",
          "error":     "#DC2626",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      
    ],
  }
};
