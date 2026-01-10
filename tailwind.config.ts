import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Village Cafe - "Fresh & Light" palette
        'sage': {
          50: '#f4f6f3',
          100: '#e6ebe4',
          200: '#cdd7c9',
          300: '#aebda7',
          400: '#8fa384',
          500: '#7D9471',  // Primary sage green
          600: '#617656',
          700: '#4d5d44',
          800: '#3f4b39',
          900: '#353f30',
          950: '#1a2118',
        },
        'espresso': {
          50: '#f8f5f3',
          100: '#efe8e3',
          200: '#ddd0c6',
          300: '#c7b1a2',
          400: '#ae8d79',
          500: '#9a7460',
          600: '#8c6454',
          700: '#745246',
          800: '#61453c',
          900: '#3C2415',  // Secondary espresso
          950: '#2a1a10',
        },
        'butter': {
          50: '#fefef8',
          100: '#fdfce8',
          200: '#faf7c7',
          300: '#F4E285',  // Accent butter yellow
          400: '#eed855',
          500: '#e0c42a',
          600: '#c4a01e',
          700: '#9d781b',
          800: '#815f1d',
          900: '#6d4e1e',
          950: '#3f2a0e',
        },
        'warm-white': {
          50: '#FDFBF7',   // Background warm white
          100: '#faf7f0',
          200: '#f5efe2',
          300: '#ede4d1',
          400: '#e2d4ba',
          500: '#d4c2a0',
          600: '#c2ab82',
          700: '#a88f66',
          800: '#8b7554',
          900: '#725f46',
          950: '#3d3224',
        },
        'coffee': {
          50: '#f9f7f5',
          100: '#f1ede8',
          200: '#e1d9cf',
          300: '#cdc0b1',
          400: '#b5a28e',
          500: '#a38a74',
          600: '#967a67',
          700: '#7d6556',
          800: '#675449',
          900: '#2D2318',  // Text coffee brown
          950: '#1a150f',
        },
      },
      fontFamily: {
        'display': ['var(--font-dm-serif)', 'Georgia', 'serif'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'sage-gradient': 'linear-gradient(135deg, #7D9471 0%, #617656 100%)',
        'butter-gradient': 'linear-gradient(135deg, #F4E285 0%, #eed855 100%)',
        'cafe-gradient': 'linear-gradient(180deg, #FDFBF7 0%, #f5efe2 100%)',
        'warm-gradient': 'linear-gradient(135deg, #FDFBF7 0%, #faf7f0 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'steam': 'steam 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(5deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(-5deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) scaleX(1.2)', opacity: '0.3' },
          '100%': { transform: 'translateY(-40px) scaleX(0.8)', opacity: '0' },
        },
      },
      boxShadow: {
        'sage': '0 10px 40px -10px rgba(125, 148, 113, 0.35)',
        'butter': '0 10px 40px -10px rgba(244, 226, 133, 0.4)',
        'glow-sage': '0 0 30px rgba(125, 148, 113, 0.25)',
        'glow-butter': '0 0 30px rgba(244, 226, 133, 0.3)',
        'warm': '0 4px 20px rgba(45, 35, 24, 0.1)',
        'card': '0 4px 30px rgba(45, 35, 24, 0.08)',
        'lifted': '0 20px 50px -10px rgba(45, 35, 24, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
