module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    media: false, // or 'media' or 'class'
    theme: {
      screens: {
        ssm: '305px',
        sm: '578px',
        md: '891px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        colors:{
      
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };