import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#722F37',
          deep: '#5a252c',
        },
        cream: {
          DEFAULT: '#F5F0E6',
          dark: '#E8E0D0',
        },
        gold: '#C9A227',
        'dusty-rose': '#C4A4A4',
        'postal-red': '#C41E3A',
        ink: {
          DEFAULT: '#2C2C2C',
          light: '#4a4a4a',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      maxWidth: {
        'narrow': '680px',
        'content': '500px',
      },
    },
  },
  plugins: [],
}
export default config
