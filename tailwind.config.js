module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '767px',
      lg: '1280px',
    },
    dropShadow: {
      regular: '0px 4px 30px 0px #131313'
    },
    colors: {
      shadeMinus3: '#F8F9FF',
      shadeMinus2: '#C2C3D4',
      shadeMinus1: '#777D92',
      neutralShade0: '#262C3F',
      shadePlus1: '#595E71',
      shadePlus2: '#282C36',
      shadePlus3: '#1E1F23',
      bgShadePlus4: '#151517',
      highContrast: '#F8F9FF',
      lowContrast: '#6A7382',
      sidebarHighlight: '#FCD547',
      mainBlue: '#1D86E8',
      mediumBlue: '#374475',
      lightBlue: '#85C4FF',
      mango: '#CBAA00',
      darkBlue: '#142A63',
      yellow: '#FCD547',
      teal: '#01C5E0',
      canary: '#CED225',
      tangy: '#DD8442',
      sky: '#2A5ABA',
      fuscia: '#E4599C',
      caribbeanGreen: '#1DD1A1',
      red: '#FF6B6B',
      amber: '#FE8F29',
      green: '#19BD64',
      white: '#FFFFFF',
      black: '#131313',
      grey: '#A5A6B8',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    zIndex: {},
    overlay: {
      regular: 'rgba(17,17,17,0.50)',
    },
  }
}