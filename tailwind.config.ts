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
          100: 'Deep Black'
        }
      },
      fontSize: {
        sm: [
          '1.4px',
          {
            lineHeight: '2.4rem',
            fontWeight: '400'
          }
        ],
        md: [
          '1.6px',
          {
            lineHeight: '2.4rem',
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
