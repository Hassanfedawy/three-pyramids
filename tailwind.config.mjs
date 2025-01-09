/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['var(--font-roboto)', 'sans-serif'],
        'cairo': ['var(--font-cairo)', 'sans-serif'],
      },
      colors: {
        // Pyramid-inspired color palette
        'pyramid': {
          50: '#F8F5E7',    // Very light sand
          100: '#F5DEB3',   // Light sand
          200: '#E6D2A6',   // Soft sand
          300: '#D4AF37',   // Gold (main accent)
          400: '#C39F2C',   // Dark gold
          500: '#8B4513',   // Saddle brown (dark brown)
          600: '#6B3E23',   // Deep brown
          700: '#4B2C16',   // Very dark brown
          800: '#2B1C0A',   // Almost black brown
          900: '#1A110A'    // Darkest brown
        },
        'desert': {
          50: '#FAF5E6',
          100: '#F5E6CC',
          200: '#E6D2A6',
          300: '#D4C090',
          400: '#C3A878',
          500: '#B28C5D',
          600: '#A07243',
          700: '#8B5A2B',
          800: '#6B4423',
          900: '#4B2C16'
        }
      },
      backgroundImage: {
        'pyramid-gradient': 'linear-gradient(to right, #F5DEB3, #D4AF37)',
        'desert-gradient': 'linear-gradient(to right, #E6D2A6, #8B4513)',
      },
      boxShadow: {
        'pyramid-soft': '0 4px 6px rgba(212, 175, 55, 0.1)',
        'pyramid-medium': '0 6px 12px rgba(212, 175, 55, 0.15)',
        'pyramid-strong': '0 10px 20px rgba(139, 69, 19, 0.2)',
      },
      borderRadius: {
        'pyramid': '0.75rem',
      },
      transitionProperty: {
        'pyramid': 'background-color, color, transform, box-shadow',
      },
      textAlign: {
        'start': 'start',
        'end': 'end',
      },
      flexDirection: {
        'row-reverse': 'row-reverse',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out',
        slideUp: 'slideUp 0.7s ease-out',
        'slideUp-delay-300': 'slideUp 0.7s ease-out 0.3s',
        'slideUp-delay-500': 'slideUp 0.7s ease-out 0.5s',
        'slideUp-delay-700': 'slideUp 0.7s ease-out 0.7s',
        'slideUp-delay-900': 'slideUp 0.7s ease-out 0.9s',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-dir': {
          transition: 'all 0.3s ease-in-out',
        },
        '.dir-rtl': {
          direction: 'rtl',
        },
        '.dir-ltr': {
          direction: 'ltr',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}