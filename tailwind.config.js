/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      backgroundImage: {
        primary: 'linear-gradient(92deg, #0B3E27 0%, #197149 97.73%)'
      },
      boxShadow: {
        1: '0 4px 10px 2px rgba(0, 0, 0, .05)',
        2: '0 6px 12px 0px rgba(0, 0, 0, .08)'
      },
      colors: {
        black: '#202020',
        gray: {
          10: '#DDDDDD',
          20: '#A8A8A8'
        }
      },
      fontSize: {
        captionSm: ['.75rem', {lineHeight: '180%', fontWeight: 400}],
        captionMd: ['.813rem', {lineHeight: '180%', fontWeight: 400}],
        captionLg: ['.813rem', {lineHeight: '180%', fontWeight: 400}]
      }
    }
  },
  plugins: []
};

export default config;
