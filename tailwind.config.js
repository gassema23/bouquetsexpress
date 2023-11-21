/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EEAA9C',
        lightPink: '#FFB6C1',
        mystyRose: '#FFE4E1',
        line: '#FAF0E6',
        error: '#E12C43',
        success: '#9ACD32',
        info: '#D8BFD8',
        dark: '#1E1E1E',
        mute: '#989898',
      }
    },
    safelist: [
      {
        pattern: /(max|min)-(w)-(sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)/,
        variants: ["sm", "md", "lg", "xl"],
      },
      {
        pattern: /(grid-cols)-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      },
      {
        pattern: /(col-span)-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      },
      {
        pattern: /(bg)-(blue|red|orange|pink|primary|dark)-(50|100|200|300|400|500|600|700|800|900)/,
      },
      {
        pattern: /(border)-(blue|red|orange|pink|primary|dark)-(50|100|200|300|400|500|600|700|800|900)/,
      },
      {
        pattern: /(bg)-(primary|dark|lightPink|mystyRose|line|error|success|info|mute)/,
      },
      {
        pattern: /(border)-(primary|dark|lightPink|mystyRose|line|error|success|info|mute)/,
      },
    ],
    fontFamily: {
      sans: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
      cursive: ["Ruthie"],
    },
  },
  plugins: [],
}
