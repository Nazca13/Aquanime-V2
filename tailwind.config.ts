import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0F50A6',
          light1: '#3B8DBF',
          light2: '#73C6D9',
          light3: '#C1D9F3',
        },
        accent: {
          yellow: '#F2CB57',
        },
        dark: {
          grey: '#0D0D0D',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        futura: ['Futura Std', 'sans-serif'],
      },
      backgroundImage: {
        'homepage-light': "url('/images/homepage_bg_full.jpg')",
        'homepage-dark': "url('/images/dark_mode_bg_full.jpg')",
      },
    },
  },
  plugins: [],
}
export default config