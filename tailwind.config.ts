import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        burgundy: {
          DEFAULT: '#722F37',
          dark: '#5a252c',
          light: '#8a3d47',
        },
        cream: {
          DEFAULT: '#F5F0E6',
          dark: '#E8E0D0',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#D4B84A',
        },
        // Secondary
        'dusty-rose': '#C4A4A4',
        forest: '#2D4A3E',
        'warm-black': '#1A1614',
        // Accents
        'postal-red': '#C41E3A',
        'envelope-tan': '#D4C4A8',
        // Legacy mappings for compatibility
        pink: '#C4A4A4',
        magenta: '#C41E3A',
        purple: '#722F37',
        'deep-purple': '#1A1614',
        lime: '#C9A227',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Spectral', 'Georgia', 'serif'],
        script: ['Caveat', 'cursive'],
        ui: ['DM Sans', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['7rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '680px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}
export default config
