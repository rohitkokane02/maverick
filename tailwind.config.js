/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B4332',
          light: '#2D5A46',
          dark: '#123023'
        },
        terracotta: {
          DEFAULT: '#C65D3B',
          light: '#D97352',
          dark: '#AA4B2C'
        },
        navy: {
          DEFAULT: '#1B2A4A',
          light: '#283B63',
          dark: '#101B32'
        },
        cream: {
          DEFAULT: '#F5F0E6',
          alt: '#EFE8D8',
          light: '#FAF6F0'
        },
        ink: {
          DEFAULT: '#1B2A2A',
          muted: '#4A5D5E',
          light: '#6E8081'
        }
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Manrope', 'sans-serif']
      },
      borderRadius: {
        'arch': '999px 999px 24px 24px',
        'arch-sm': '999px 999px 16px 16px',
        'arch-lg': '999px 999px 36px 36px'
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(27, 42, 42, 0.08), 0 4px 12px -2px rgba(198, 93, 59, 0.05)',
        'warm-hover': '0 20px 40px -10px rgba(27, 67, 50, 0.15), 0 8px 16px -4px rgba(198, 93, 59, 0.12)',
        'glow-terracotta': '0 0 25px rgba(198, 93, 59, 0.3)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
