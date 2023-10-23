/** @type {import('tailwindcss').Config} */

const tailwindTheme = {
  theme: {
    extend: {
      backgroundImage: {
        primary: 'linear-gradient(92deg, #0B3E27 0%, #197149 97.73%)'
      },
      colors: {
        black: '#202020',
        gray: {
          10: '#DDDDDD',
          20: '#A8A8A8'
        }
      }
    }
  }
};

export {tailwindTheme};
