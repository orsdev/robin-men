import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        secondary: '#4568D1',
        accent: '#566BA0',
        highlight: '#EA8D51',
        muted: '#9999BC',
        text: '#51545C',
        others: {
          50: '#ededed66',
          100: '#F5F7FC',
          200: '#8D9091',
          300: '#D3D7EA',
          400: '#4568D1',
          500: '#15AE73',
          600: '#E7E9FF',
          700: '#F3F7FF',
          800: '#535F89',
          900: '#525D71'
        }
      },
      spacing: {
        '270': '270px'
      },
      fontSize: {
        sm: [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '400'
          }
        ],
        md: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400'
          }
        ]
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
