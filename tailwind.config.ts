import type { Config } from 'tailwindcss';

const config: Config = {
  corePlugins: {
    preflight: false
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1600px'
    },
    extend: {
      backgroundImage: {
        primary: 'linear-gradient(92deg, #0B3E27 0%, #197149 97.73%)'
      },
      boxShadow: {
        1: '0 4px 10px 2px rgba(0, 0, 0, .05)',
        2: '0 6px 12px 0 rgba(0, 0, 0, .08)',
        3: '0 6px 12px 0 rgba(0, 0, 0, .12)',
        4: '0 10px 25px 0 rgba(0, 0, 0, .30) inset',
        8: '0px 1px 0px 0px #E2E8F0',
        9: '-2px 0px 5px 0px rgba(53, 53, 53, 0.03) inset'
      },
      colors: {
        secondary: '#0B3E27',
        black: '#202020',
        gray: {
          10: '#F8F8F8',
          20: '#F5F5F5',
          30: '#DDDDDD',
          40: '#A8A8A8',
          50: '#757575',
          60: '#D9D9D9',
          70: '#6D6D6D',
          80: '#656565',
          90: '#F5F7F9'
        },
        blue: {
          shade: {
            7: '#0A0D17'
          }
        }
      },
      fontSize: {
        captionSm: ['.75rem', { lineHeight: '160%', fontWeight: 400 }],
        captionMd: ['.813rem', { lineHeight: '160%', fontWeight: 400 }],
        captionLg: ['1rem', { lineHeight: '160%', fontWeight: 400 }],
        captionXl: ['1.2rem', { lineHeight: '160%', fontWeight: 400 }],
        captionXl2: ['1.5rem', { lineHeight: '160%', fontWeight: 400 }],
        captionXxl: ['1.8rem', { lineHeight: '160%', fontWeight: 400 }],
        xs: ['.6255rem', { lineHeight: '160%', fontWeight: 400 }],
        sm: ['.875rem', { lineHeight: '160%', fontWeight: 400 }]
      },
      fontFamily: {
        samim: 'samimFont'
      }
    }
  },
  plugins: []
};
export default config;
