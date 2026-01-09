import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: '#FFB6C1',
        magenta: '#FF69B4',
        purple: '#8B008B',
        'deep-purple': '#4A0E4E',
        lime: '#BFFF00',
        cream: '#FFF8F0',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        script: ['Caveat', 'cursive'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
