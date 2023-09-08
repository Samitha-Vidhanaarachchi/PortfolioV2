module.exports = {
  email: 'samithapva@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Samitha-Vidhanaarachchi',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_samitha_96/',
    },
    // {
    //   name: 'fb',
    //   url: 'https://www.facebook.com/samitha.peruma.3/',
    // },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/samitha-vidhana-arachchi/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#faff64',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
