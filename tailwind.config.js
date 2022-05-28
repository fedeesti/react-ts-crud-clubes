module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arial: 'Arial',
      },
      boxShadow: {
        profile: '0 0 10px 0 rgba(255, 255, 255, 0.35)',
      },
      transitionProperty: {
        profile: 'all 0.3s ease',
        label: 'background-color 0.2s ease-in-out',
      },
      margin: {
        auto: '20px auto',
        img: '60px auto 24px',
      },
    },
    colors: {
      black: 'black',
      ghostwhite: 'ghostwhite',
      goldenrod: 'goldenrod',
      'body-linear-first': '#09203f',
      'body-linear-second': '#537895',
      'btn-linear-first': '#f5b814',
      'btn-linear-second': '#ed8317',
      'link-color': '#0000ee',
      'ligth-green': '#c9e4ca',
      'dark-green': '#a1c181',
      required: '#f94144',
      'charcoal-light': '#364958',
      'charcoal-dark': '#233d4d',
    },
  },
  plugins: [],
};
