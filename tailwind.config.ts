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
        // Cafe-inspired color palette - warm, welcoming, artisanal
        'sage': {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d1d7c7',
          300: '#b3bda3',
          400: '#93a07d',
          500: '#6b7a5a',  // Primary sage green
          600: '#566249',
          700: '#424c39',
          800: '#30382a',
          900: '#1f241c',
        },
        'terracotta': {
          50: '#fef6f3',
          100: '#fdeae2',
          200: '#fbd0c0',
          300: '#f7ad92',
          400: '#f28360',
          500: '#d46041',  // Warm terracotta
          600: '#b84c32',
          700: '#983d28',
          800: '#743023',
          900: '#52231c',
        },
        'cream': {
          50: '#fefdfb',
          100: '#fcfaf5',
          200: '#f9f5e9',
          300: '#f4eddb',
          400: '#ede4cd',
          500: '#dfd6be',  // Warm cream
          600: '#c4baa2',
          700: '#a39685',
          800: '#786d5e',
          900: '#4d453b',
        },
        'coffee': {
          50: '#f9f6f3',
          100: '#f0eae2',
          200: '#ddd2c1',
          300: '#c4b39a',
          400: '#a8906f',
          500: '#8b6f47',  // Rich coffee brown
          600: '#735a39',
          700: '#5a462d',
          800: '#413322',
          900: '#2a2117',
        },
      },
      fontFamily: {
        'display': ['Merriweather', 'Georgia', 'serif'],
        'body': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'sage-gradient': 'linear-gradient(135deg, #6b7a5a 0%, #566249 100%)',
        'terracotta-gradient': 'linear-gradient(135deg, #d46041 0%, #f28360 100%)',
        'cafe-gradient': 'linear-gradient(180deg, #fefdfb 0%, #f9f5e9 100%)',
        'warm-gradient': 'linear-gradient(135deg, #dfd6be 0%, #f4eddb 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
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
      },
      boxShadow: {
        'sage': '0 10px 40px -10px rgba(107, 122, 90, 0.3)',
        'terracotta': '0 10px 40px -10px rgba(212, 96, 65, 0.3)',
        'glow-sage': '0 0 30px rgba(107, 122, 90, 0.2)',
        'glow-terracotta': '0 0 30px rgba(212, 96, 65, 0.2)',
        'warm': '0 4px 20px rgba(139, 111, 71, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
