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
          base: '#0F3E61',
          light: '#00A8E8',
        },
        accent: {
          primary: '#FF5E00',
          secondary: '#FFAC00',
        },
        surface: {
          bg: '#F4F7F9',
          panel: '#FFFFFF',
          border: '#E2E8F0',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-main': "url('/images/AquaNime-Bg.png')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
export default config